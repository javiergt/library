package main

import (
	"context"
	"time"

	"github.com/golang/protobuf/ptypes"
	pb "github.com/javiergt/library"
	"github.com/javiergt/library/library-service/internal/models"
	"github.com/jinzhu/gorm"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type LibraryService struct {
	db          *gorm.DB
	authService pb.AuthServiceClient
}

func NewLibraryService(db *gorm.DB, authService pb.AuthServiceClient) *LibraryService {
	return &LibraryService{db: db, authService: authService}
}

func (s *LibraryService) AddBook(ctx context.Context, request *pb.AddBookRequest) (*pb.AddBookResponse, error) {
	book := models.Book{
		Title:       request.Title,
		Authors:     make([]models.Author, len(request.Authors)),
		Copies:      request.Copies,
		PublisherID: uint(request.PublisherId),
	}

	for i, v := range request.Authors {
		var author models.Author
		author.ID = uint(v)
		book.Authors[i] = author
	}

	if err := s.db.Set("gorm:association_autoupdate", false).Create(&book).Error; err != nil {
		return nil, err
	}

	response := pb.AddBookResponse{BookId: int32(book.ID)}

	return &response, nil
}

func (s *LibraryService) GetBook(ctx context.Context, request *pb.GetBookRequest) (*pb.GetBookResponse, error) {
	var book models.Book

	if err := s.db.Preload("Authors").First(&book, request.BookId).Error; err != nil {
		return nil, err
	}

	currentLoans, err := book.LoanedCopies(s.db)

	if err != nil {
		return nil, err
	}

	authors := make([]*pb.Author, len(book.Authors))

	for i := range book.Authors {
		authors[i] = &pb.Author{
			FirstName: book.Authors[i].FirstName,
			LastName:  book.Authors[i].LastName,
		}
	}

	response := &pb.GetBookResponse{
		BookId:          int32(book.ID),
		BookTitle:       book.Title,
		Authors:         authors,
		LoanedCopies:    currentLoans,
		AvailableCopies: (book.Copies - currentLoans),
	}

	return response, nil
}

func (s *LibraryService) ListBooks(request *pb.ListBooksRequest, stream pb.LibraryService_ListBooksServer) error {
	var books []models.Book

	if err := s.db.Preload("Authors").Preload("Publisher").Find(&books).Error; err != nil {
		return err
	}

	for _, v := range books {
		authors := make([]*pb.Author, len(v.Authors))

		for i, author := range v.Authors {
			authors[i] = &pb.Author{
				FirstName: author.FirstName,
				LastName:  author.LastName,
			}
		}

		currentLoans, err := v.LoanedCopies(s.db)

		if err != nil {
			return err
		}

		err = stream.Send(&pb.ListBooksResponse{
			BookId:          int32(v.ID),
			BookTitle:       v.Title,
			Authors:         authors,
			LoanedCopies:    int32(currentLoans),
			AvailableCopies: int32(v.Copies - currentLoans),
			PublisherName:   v.Publisher.Name,
		})

		if err != nil {
			return err
		}
	}

	return nil
}

func (s *LibraryService) AddAuthor(ctx context.Context, request *pb.AddAuthorRequest) (*pb.AddAuthorResponse, error) {
	author := models.Author{
		FirstName: request.FirstName,
		LastName:  request.LastName,
	}

	if err := s.db.Create(&author).Error; err != nil {
		return nil, status.Errorf(codes.Internal, "library-service: author not added: %v", err)
	}

	return &pb.AddAuthorResponse{Id: int32(author.ID)}, nil
}

func (s *LibraryService) LoanBook(ctx context.Context, request *pb.LoanBookRequest) (*pb.LoanBookResponse, error) {
	if _, err := s.authService.GetUser(ctx, &pb.GetUserRequest{Id: request.UserId}); err != nil {
		return nil, status.Errorf(codes.FailedPrecondition, "library-service: user doesn't exist: %v", err)
	}

	var book models.Book

	if err := s.db.First(&book, request.BookId).Error; err != nil {
		return nil, err
	}

	loanedCopies, err := book.LoanedCopies(s.db)

	if err != nil {
		return nil, err
	}

	availableCopies := book.Copies - loanedCopies

	if availableCopies <= 0 {
		return nil, status.Error(codes.FailedPrecondition, "library-service: There are no available copies to loan")
	}

	now := time.Now()
	loan := models.Loan{
		BookID:    uint(request.BookId),
		UserID:    uint(request.UserId),
		StartDate: &now,
	}

	if err := s.db.Create(&loan).Error; err != nil {
		return nil, err
	}

	return &pb.LoanBookResponse{Id: int32(loan.ID)}, nil
}

func (s *LibraryService) ReturnBook(ctx context.Context, request *pb.ReturnBookRequest) (*pb.ReturnBookResponse, error) {
	var loan models.Loan

	if request.LoanId < 1 {
		return nil, status.Error(codes.FailedPrecondition, "library-service: loan_id must be greater than 1")
	}

	if err := s.db.First(&loan, request.LoanId).Error; err != nil {
		if gorm.IsRecordNotFoundError(err) {
			return nil, status.Error(codes.NotFound, err.Error())
		}

		return nil, status.Error(codes.Internal, err.Error())
	}

	now := time.Now()
	loan.EndDate = &now

	if err := s.db.Save(&loan).Error; err != nil {
		return nil, err
	}

	return &pb.ReturnBookResponse{}, nil
}

func (s *LibraryService) ListCurrentBookLoans(request *pb.ListCurrentBookLoansRequest, stream pb.LibraryService_ListCurrentBookLoansServer) error {
	book := models.Book{}
	book.ID = uint(request.GetBookId())

	if err := book.GetCurrentLoans(s.db); err != nil {
		if gorm.IsRecordNotFoundError(err) {
			return status.Error(codes.NotFound, err.Error())
		}

		return status.Error(codes.Internal, err.Error())
	}

	for _, v := range book.Loans {
		loanDate, err := ptypes.TimestampProto(*v.StartDate)

		if err != nil {
			return err
		}

		ctx, _ := context.WithTimeout(context.Background(), time.Second)

		user, err := s.authService.GetUser(ctx, &pb.GetUserRequest{Id: int32(v.UserID)})

		if err != nil {
			return err
		}

		err = stream.Send(&pb.ListCurrentBookLoansResponse{
			LoanId:   int32(v.ID),
			LoanDate: loanDate,
			UserName: user.FirstName + " " + user.LastName,
			Email:    user.Email,
		})

		if err != nil {
			return err
		}
	}

	return nil
}

func (s *LibraryService) ListPublishers(request *pb.ListPublishersRequest, stream pb.LibraryService_ListPublishersServer) error {
	var publishers []models.Publisher

	if err := s.db.Find(&publishers).Error; err != nil {
		return status.Error(codes.Internal, err.Error())
	}

	for _, v := range publishers {
		err := stream.Send(&pb.ListPublishersResponse{PublisherId: int32(v.ID), PublisherName: v.Name})

		if err != nil {
			return err
		}
	}

	return nil
}

func (s *LibraryService) AddPublisher(ctx context.Context, request *pb.AddPublisherRequest) (*pb.AddPublisherResponse, error) {
	publisher := models.Publisher{Name: request.PublisherName}

	if err := s.db.Save(&publisher).Error; err != nil {
		return nil, status.Errorf(codes.Internal, "library-service: publisher not added: %v", err.Error())
	}

	return &pb.AddPublisherResponse{PublisherId: int32(publisher.ID)}, nil
}

func (s *LibraryService) ListAuthors(request *pb.ListAuthorsRequest, stream pb.LibraryService_ListAuthorsServer) error {
	var authors []models.Author

	if err := s.db.Find(&authors).Error; err != nil {
		return status.Error(codes.Internal, err.Error())
	}

	for _, v := range authors {
		err := stream.Send(&pb.ListAuthorsResponse{AuthorId: int32(v.ID), FirstName: v.FirstName, LastName: v.LastName})

		if err != nil {
			return err
		}
	}

	return nil
}
