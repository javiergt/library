/**
 * @fileoverview gRPC-Web generated client stub for library
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

import * as grpcWeb from 'grpc-web';

import {
  AddUserRequest,
  AddUserResponse,
  GetUserRequest,
  GetUserResponse,
  ListUsersRequest,
  ListUsersResponse,
} from './auth_pb';

export class AuthServiceClient {
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

  methodInfoAddUser = new grpcWeb.AbstractClientBase.MethodInfo(
    AddUserResponse,
    (request: AddUserRequest) => {
      return request.serializeBinary();
    },
    AddUserResponse.deserializeBinary
  );

  addUser(
    request: AddUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: AddUserResponse) => void
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/library.AuthService/AddUser',
      request,
      metadata || {},
      this.methodInfoAddUser,
      callback
    );
  }

  methodInfoGetUser = new grpcWeb.AbstractClientBase.MethodInfo(
    GetUserResponse,
    (request: GetUserRequest) => {
      return request.serializeBinary();
    },
    GetUserResponse.deserializeBinary
  );

  getUser(
    request: GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: GetUserResponse) => void
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/library.AuthService/GetUser',
      request,
      metadata || {},
      this.methodInfoGetUser,
      callback
    );
  }

  methodInfoListUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    ListUsersResponse,
    (request: ListUsersRequest) => {
      return request.serializeBinary();
    },
    ListUsersResponse.deserializeBinary
  );

  listUsers(request: ListUsersRequest, metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ + '/library.AuthService/ListUsers',
      request,
      metadata || {},
      this.methodInfoListUsers
    );
  }
}
