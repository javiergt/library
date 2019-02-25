package models

import (
	"github.com/jinzhu/gorm"
)

type Book struct {
	gorm.Model
	Title       string
	Authors     []Author `gorm:"many2many:book_authors"`
	Publisher   Publisher
	PublisherID uint
	Copies      int32
	Loans       []Loan
}

func (b *Book) LoanedCopies(db *gorm.DB) (int32, error) {
	var loanedCopies int32
	err := db.Where("book_id = ? AND end_date IS NULL", b.ID).Find(&b.Loans).Count(&loanedCopies).Error
	return loanedCopies, err
}

func (b *Book) GetCurrentLoans(db *gorm.DB) error {
	err := db.Where("book_id = ? AND end_date IS NULL", b.ID).Find(&b.Loans).Error
	return err
}
