import * as jspb from 'google-protobuf';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ListAuthorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListAuthorsRequest
  ): ListAuthorsRequest.AsObject;
  static serializeBinaryToWriter(
    message: ListAuthorsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorsRequest;
  static deserializeBinaryFromReader(
    message: ListAuthorsRequest,
    reader: jspb.BinaryReader
  ): ListAuthorsRequest;
}

export namespace ListAuthorsRequest {
  export type AsObject = {};
}

export class ListAuthorsResponse extends jspb.Message {
  getAuthorId(): number;
  setAuthorId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListAuthorsResponse
  ): ListAuthorsResponse.AsObject;
  static serializeBinaryToWriter(
    message: ListAuthorsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorsResponse;
  static deserializeBinaryFromReader(
    message: ListAuthorsResponse,
    reader: jspb.BinaryReader
  ): ListAuthorsResponse;
}

export namespace ListAuthorsResponse {
  export type AsObject = {
    authorId: number;
    firstName: string;
    lastName: string;
  };
}

export class ListPublishersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublishersRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListPublishersRequest
  ): ListPublishersRequest.AsObject;
  static serializeBinaryToWriter(
    message: ListPublishersRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListPublishersRequest;
  static deserializeBinaryFromReader(
    message: ListPublishersRequest,
    reader: jspb.BinaryReader
  ): ListPublishersRequest;
}

export namespace ListPublishersRequest {
  export type AsObject = {};
}

export class ListPublishersResponse extends jspb.Message {
  getPublisherId(): number;
  setPublisherId(value: number): void;

  getPublisherName(): string;
  setPublisherName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublishersResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListPublishersResponse
  ): ListPublishersResponse.AsObject;
  static serializeBinaryToWriter(
    message: ListPublishersResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListPublishersResponse;
  static deserializeBinaryFromReader(
    message: ListPublishersResponse,
    reader: jspb.BinaryReader
  ): ListPublishersResponse;
}

export namespace ListPublishersResponse {
  export type AsObject = {
    publisherId: number;
    publisherName: string;
  };
}

export class AddPublisherRequest extends jspb.Message {
  getPublisherName(): string;
  setPublisherName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPublisherRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddPublisherRequest
  ): AddPublisherRequest.AsObject;
  static serializeBinaryToWriter(
    message: AddPublisherRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddPublisherRequest;
  static deserializeBinaryFromReader(
    message: AddPublisherRequest,
    reader: jspb.BinaryReader
  ): AddPublisherRequest;
}

export namespace AddPublisherRequest {
  export type AsObject = {
    publisherName: string;
  };
}

export class AddPublisherResponse extends jspb.Message {
  getPublisherId(): number;
  setPublisherId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPublisherResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddPublisherResponse
  ): AddPublisherResponse.AsObject;
  static serializeBinaryToWriter(
    message: AddPublisherResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddPublisherResponse;
  static deserializeBinaryFromReader(
    message: AddPublisherResponse,
    reader: jspb.BinaryReader
  ): AddPublisherResponse;
}

export namespace AddPublisherResponse {
  export type AsObject = {
    publisherId: number;
  };
}

export class ListCurrentBookLoansRequest extends jspb.Message {
  getBookId(): number;
  setBookId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCurrentBookLoansRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListCurrentBookLoansRequest
  ): ListCurrentBookLoansRequest.AsObject;
  static serializeBinaryToWriter(
    message: ListCurrentBookLoansRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListCurrentBookLoansRequest;
  static deserializeBinaryFromReader(
    message: ListCurrentBookLoansRequest,
    reader: jspb.BinaryReader
  ): ListCurrentBookLoansRequest;
}

export namespace ListCurrentBookLoansRequest {
  export type AsObject = {
    bookId: number;
  };
}

export class ListCurrentBookLoansResponse extends jspb.Message {
  getLoanId(): number;
  setLoanId(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getLoanDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLoanDate(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLoanDate(): boolean;
  clearLoanDate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCurrentBookLoansResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListCurrentBookLoansResponse
  ): ListCurrentBookLoansResponse.AsObject;
  static serializeBinaryToWriter(
    message: ListCurrentBookLoansResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListCurrentBookLoansResponse;
  static deserializeBinaryFromReader(
    message: ListCurrentBookLoansResponse,
    reader: jspb.BinaryReader
  ): ListCurrentBookLoansResponse;
}

export namespace ListCurrentBookLoansResponse {
  export type AsObject = {
    loanId: number;
    userName: string;
    email: string;
    loanDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class Author extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Author.AsObject;
  static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
  static serializeBinaryToWriter(
    message: Author,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Author;
  static deserializeBinaryFromReader(
    message: Author,
    reader: jspb.BinaryReader
  ): Author;
}

export namespace Author {
  export type AsObject = {
    firstName: string;
    lastName: string;
  };
}

export class AddBookRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getAuthorsList(): Array<number>;
  setAuthorsList(value: Array<number>): void;
  clearAuthorsList(): void;
  addAuthors(value: number, index?: number): void;

  getPublisherId(): number;
  setPublisherId(value: number): void;

  getCopies(): number;
  setCopies(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBookRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddBookRequest
  ): AddBookRequest.AsObject;
  static serializeBinaryToWriter(
    message: AddBookRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddBookRequest;
  static deserializeBinaryFromReader(
    message: AddBookRequest,
    reader: jspb.BinaryReader
  ): AddBookRequest;
}

export namespace AddBookRequest {
  export type AsObject = {
    title: string;
    authorsList: Array<number>;
    publisherId: number;
    copies: number;
  };
}

export class AddBookResponse extends jspb.Message {
  getBookId(): number;
  setBookId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBookResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddBookResponse
  ): AddBookResponse.AsObject;
  static serializeBinaryToWriter(
    message: AddBookResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddBookResponse;
  static deserializeBinaryFromReader(
    message: AddBookResponse,
    reader: jspb.BinaryReader
  ): AddBookResponse;
}

export namespace AddBookResponse {
  export type AsObject = {
    bookId: number;
  };
}

export class GetBookRequest extends jspb.Message {
  getBookId(): number;
  setBookId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBookRequest
  ): GetBookRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetBookRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBookRequest;
  static deserializeBinaryFromReader(
    message: GetBookRequest,
    reader: jspb.BinaryReader
  ): GetBookRequest;
}

export namespace GetBookRequest {
  export type AsObject = {
    bookId: number;
  };
}

export class GetBookResponse extends jspb.Message {
  getBookId(): number;
  setBookId(value: number): void;

  getBookTitle(): string;
  setBookTitle(value: string): void;

  getAuthorsList(): Array<Author>;
  setAuthorsList(value: Array<Author>): void;
  clearAuthorsList(): void;
  addAuthors(value?: Author, index?: number): Author;

  getAvailableCopies(): number;
  setAvailableCopies(value: number): void;

  getLoanedCopies(): number;
  setLoanedCopies(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBookResponse
  ): GetBookResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetBookResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBookResponse;
  static deserializeBinaryFromReader(
    message: GetBookResponse,
    reader: jspb.BinaryReader
  ): GetBookResponse;
}

export namespace GetBookResponse {
  export type AsObject = {
    bookId: number;
    bookTitle: string;
    authorsList: Array<Author.AsObject>;
    availableCopies: number;
    loanedCopies: number;
  };
}

export class ListBooksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListBooksRequest
  ): ListBooksRequest.AsObject;
  static serializeBinaryToWriter(
    message: ListBooksRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksRequest;
  static deserializeBinaryFromReader(
    message: ListBooksRequest,
    reader: jspb.BinaryReader
  ): ListBooksRequest;
}

export namespace ListBooksRequest {
  export type AsObject = {};
}

export class ListBooksResponse extends jspb.Message {
  getBookId(): number;
  setBookId(value: number): void;

  getBookTitle(): string;
  setBookTitle(value: string): void;

  getAuthorsList(): Array<Author>;
  setAuthorsList(value: Array<Author>): void;
  clearAuthorsList(): void;
  addAuthors(value?: Author, index?: number): Author;

  getAvailableCopies(): number;
  setAvailableCopies(value: number): void;

  getLoanedCopies(): number;
  setLoanedCopies(value: number): void;

  getPublisherName(): string;
  setPublisherName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListBooksResponse
  ): ListBooksResponse.AsObject;
  static serializeBinaryToWriter(
    message: ListBooksResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksResponse;
  static deserializeBinaryFromReader(
    message: ListBooksResponse,
    reader: jspb.BinaryReader
  ): ListBooksResponse;
}

export namespace ListBooksResponse {
  export type AsObject = {
    bookId: number;
    bookTitle: string;
    authorsList: Array<Author.AsObject>;
    availableCopies: number;
    loanedCopies: number;
    publisherName: string;
  };
}

export class AddAuthorRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAuthorRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddAuthorRequest
  ): AddAuthorRequest.AsObject;
  static serializeBinaryToWriter(
    message: AddAuthorRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddAuthorRequest;
  static deserializeBinaryFromReader(
    message: AddAuthorRequest,
    reader: jspb.BinaryReader
  ): AddAuthorRequest;
}

export namespace AddAuthorRequest {
  export type AsObject = {
    firstName: string;
    lastName: string;
  };
}

export class AddAuthorResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAuthorResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddAuthorResponse
  ): AddAuthorResponse.AsObject;
  static serializeBinaryToWriter(
    message: AddAuthorResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddAuthorResponse;
  static deserializeBinaryFromReader(
    message: AddAuthorResponse,
    reader: jspb.BinaryReader
  ): AddAuthorResponse;
}

export namespace AddAuthorResponse {
  export type AsObject = {
    id: number;
  };
}

export class LoanBookRequest extends jspb.Message {
  getBookId(): number;
  setBookId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoanBookRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LoanBookRequest
  ): LoanBookRequest.AsObject;
  static serializeBinaryToWriter(
    message: LoanBookRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): LoanBookRequest;
  static deserializeBinaryFromReader(
    message: LoanBookRequest,
    reader: jspb.BinaryReader
  ): LoanBookRequest;
}

export namespace LoanBookRequest {
  export type AsObject = {
    bookId: number;
    userId: number;
  };
}

export class LoanBookResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoanBookResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LoanBookResponse
  ): LoanBookResponse.AsObject;
  static serializeBinaryToWriter(
    message: LoanBookResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): LoanBookResponse;
  static deserializeBinaryFromReader(
    message: LoanBookResponse,
    reader: jspb.BinaryReader
  ): LoanBookResponse;
}

export namespace LoanBookResponse {
  export type AsObject = {
    id: number;
  };
}

export class ReturnBookRequest extends jspb.Message {
  getLoanId(): number;
  setLoanId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReturnBookRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ReturnBookRequest
  ): ReturnBookRequest.AsObject;
  static serializeBinaryToWriter(
    message: ReturnBookRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ReturnBookRequest;
  static deserializeBinaryFromReader(
    message: ReturnBookRequest,
    reader: jspb.BinaryReader
  ): ReturnBookRequest;
}

export namespace ReturnBookRequest {
  export type AsObject = {
    loanId: number;
  };
}

export class ReturnBookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReturnBookResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ReturnBookResponse
  ): ReturnBookResponse.AsObject;
  static serializeBinaryToWriter(
    message: ReturnBookResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ReturnBookResponse;
  static deserializeBinaryFromReader(
    message: ReturnBookResponse,
    reader: jspb.BinaryReader
  ): ReturnBookResponse;
}

export namespace ReturnBookResponse {
  export type AsObject = {};
}
