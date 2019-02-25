// +build wireinject

package main

import (
	"github.com/google/wire"
	pb "github.com/javiergt/library"
	"github.com/javiergt/library/library-service/internal/models"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"google.golang.org/grpc"
)

type sqlDialect string
type sqlConnectionString string

func provideDb(dialect sqlDialect, connectionString sqlConnectionString) (*gorm.DB, func(), error) {
	db, err := gorm.Open(string(dialect), string(connectionString))
	if err != nil {
		return nil, nil, err
	}
	models.Migrate(db)

	cleanup := func() {
		db.Close()
	}

	return db, cleanup, nil
}

type grpcAuthServiceUrl string

func provideAuthServiceClient(authServiceUrl grpcAuthServiceUrl, opts ...grpc.DialOption) (pb.AuthServiceClient, func(), error) {
	conn, err := grpc.Dial(string(authServiceUrl), opts...)

	if err != nil {
		return nil, nil, err
	}

	cleanup := func() {
		conn.Close()
	}

	c := pb.NewAuthServiceClient(conn)

	return c, cleanup, nil
}

func InitializeLibraryServer(dialect sqlDialect, connectionString sqlConnectionString, authServiceUrl grpcAuthServiceUrl, opts []grpc.DialOption) (*LibraryService, func(), error) {
	panic(wire.Build(NewLibraryService, provideDb, provideAuthServiceClient))
}
