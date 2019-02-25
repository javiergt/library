import * as jspb from 'google-protobuf';

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(
    message: User,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(
    message: User,
    reader: jspb.BinaryReader
  ): User;
}

export namespace User {
  export type AsObject = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export class AddUserRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddUserRequest
  ): AddUserRequest.AsObject;
  static serializeBinaryToWriter(
    message: AddUserRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddUserRequest;
  static deserializeBinaryFromReader(
    message: AddUserRequest,
    reader: jspb.BinaryReader
  ): AddUserRequest;
}

export namespace AddUserRequest {
  export type AsObject = {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export class AddUserResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddUserResponse
  ): AddUserResponse.AsObject;
  static serializeBinaryToWriter(
    message: AddUserResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddUserResponse;
  static deserializeBinaryFromReader(
    message: AddUserResponse,
    reader: jspb.BinaryReader
  ): AddUserResponse;
}

export namespace AddUserResponse {
  export type AsObject = {
    id: number;
  };
}

export class GetUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetUserRequest
  ): GetUserRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetUserRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(
    message: GetUserRequest,
    reader: jspb.BinaryReader
  ): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    id: number;
  };
}

export class GetUserResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetUserResponse
  ): GetUserResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetUserResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(
    message: GetUserResponse,
    reader: jspb.BinaryReader
  ): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export class ListUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListUsersRequest
  ): ListUsersRequest.AsObject;
  static serializeBinaryToWriter(
    message: ListUsersRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(
    message: ListUsersRequest,
    reader: jspb.BinaryReader
  ): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {};
}

export class ListUsersResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListUsersResponse
  ): ListUsersResponse.AsObject;
  static serializeBinaryToWriter(
    message: ListUsersResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(
    message: ListUsersResponse,
    reader: jspb.BinaryReader
  ): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}
