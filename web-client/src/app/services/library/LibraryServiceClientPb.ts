/**
 * @fileoverview gRPC-Web generated client stub for library
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

import * as grpcWeb from 'grpc-web';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  AddAuthorRequest,
  AddAuthorResponse,
  AddBookRequest,
  AddBookResponse,
  AddPublisherRequest,
  AddPublisherResponse,
  GetBookRequest,
  GetBookResponse,
  ListAuthorsRequest,
  ListAuthorsResponse,
  ListBooksRequest,
  ListBooksResponse,
  ListCurrentBookLoansRequest,
  ListCurrentBookLoansResponse,
  ListPublishersRequest,
  ListPublishersResponse,
  LoanBookRequest,
  LoanBookResponse,
  ReturnBookRequest,
  ReturnBookResponse,
} from './library_pb';

export class LibraryServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string };
  options_: null | { [index: string]: string };

  constructor(
    hostname: string,
    credentials: null | { [index: string]: string },
    options: null | { [index: string]: string }
  ) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAddBook = new grpcWeb.AbstractClientBase.MethodInfo(
    AddBookResponse,
    (request: AddBookRequest) => {
      return request.serializeBinary();
    },
    AddBookResponse.deserializeBinary
  );

  addBook(
    request: AddBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: AddBookResponse) => void
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/library.LibraryService/AddBook',
      request,
      metadata || {},
      this.methodInfoAddBook,
      callback
    );
  }

  methodInfoGetBook = new grpcWeb.AbstractClientBase.MethodInfo(
    GetBookResponse,
    (request: GetBookRequest) => {
      return request.serializeBinary();
    },
    GetBookResponse.deserializeBinary
  );

  getBook(
    request: GetBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: GetBookResponse) => void
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/library.LibraryService/GetBook',
      request,
      metadata || {},
      this.methodInfoGetBook,
      callback
    );
  }

  methodInfoListBooks = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBooksResponse,
    (request: ListBooksRequest) => {
      return request.serializeBinary();
    },
    ListBooksResponse.deserializeBinary
  );

  listBooks(request: ListBooksRequest, metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ + '/library.LibraryService/ListBooks',
      request,
      metadata || {},
      this.methodInfoListBooks
    );
  }

  methodInfoAddAuthor = new grpcWeb.AbstractClientBase.MethodInfo(
    AddAuthorResponse,
    (request: AddAuthorRequest) => {
      return request.serializeBinary();
    },
    AddAuthorResponse.deserializeBinary
  );

  addAuthor(
    request: AddAuthorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: AddAuthorResponse) => void
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/library.LibraryService/AddAuthor',
      request,
      metadata || {},
      this.methodInfoAddAuthor,
      callback
    );
  }

  methodInfoListAuthors = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAuthorsResponse,
    (request: ListAuthorsRequest) => {
      return request.serializeBinary();
    },
    ListAuthorsResponse.deserializeBinary
  );

  listAuthors(request: ListAuthorsRequest, metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ + '/library.LibraryService/ListAuthors',
      request,
      metadata || {},
      this.methodInfoListAuthors
    );
  }

  methodInfoLoanBook = new grpcWeb.AbstractClientBase.MethodInfo(
    LoanBookResponse,
    (request: LoanBookRequest) => {
      return request.serializeBinary();
    },
    LoanBookResponse.deserializeBinary
  );

  loanBook(
    request: LoanBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: LoanBookResponse) => void
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/library.LibraryService/LoanBook',
      request,
      metadata || {},
      this.methodInfoLoanBook,
      callback
    );
  }

  methodInfoReturnBook = new grpcWeb.AbstractClientBase.MethodInfo(
    ReturnBookResponse,
    (request: ReturnBookRequest) => {
      return request.serializeBinary();
    },
    ReturnBookResponse.deserializeBinary
  );

  returnBook(
    request: ReturnBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: ReturnBookResponse) => void
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/library.LibraryService/ReturnBook',
      request,
      metadata || {},
      this.methodInfoReturnBook,
      callback
    );
  }

  methodInfoListCurrentBookLoans = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCurrentBookLoansResponse,
    (request: ListCurrentBookLoansRequest) => {
      return request.serializeBinary();
    },
    ListCurrentBookLoansResponse.deserializeBinary
  );

  listCurrentBookLoans(
    request: ListCurrentBookLoansRequest,
    metadata?: grpcWeb.Metadata
  ) {
    return this.client_.serverStreaming(
      this.hostname_ + '/library.LibraryService/ListCurrentBookLoans',
      request,
      metadata || {},
      this.methodInfoListCurrentBookLoans
    );
  }

  methodInfoListPublishers = new grpcWeb.AbstractClientBase.MethodInfo(
    ListPublishersResponse,
    (request: ListPublishersRequest) => {
      return request.serializeBinary();
    },
    ListPublishersResponse.deserializeBinary
  );

  listPublishers(request: ListPublishersRequest, metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ + '/library.LibraryService/ListPublishers',
      request,
      metadata || {},
      this.methodInfoListPublishers
    );
  }

  methodInfoAddPublisher = new grpcWeb.AbstractClientBase.MethodInfo(
    AddPublisherResponse,
    (request: AddPublisherRequest) => {
      return request.serializeBinary();
    },
    AddPublisherResponse.deserializeBinary
  );

  addPublisher(
    request: AddPublisherRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: AddPublisherResponse) => void
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/library.LibraryService/AddPublisher',
      request,
      metadata || {},
      this.methodInfoAddPublisher,
      callback
    );
  }
}
