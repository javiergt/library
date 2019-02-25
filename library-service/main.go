//go:generate protoc -I ../proto --go_out=plugins=grpc:../ ../proto/library.proto
//go:generate protoc -I ../proto --go_out=plugins=grpc:../ ../proto/auth.proto

package main

import (
	"log"
	"net"
	"os"

	pb "github.com/javiergt/library"
	"google.golang.org/grpc"
)

const (
	port      = ":8080"
	dbDialect = "postgres"
)

func main() {
	connectionString := os.Getenv("DB_CONNECTION_STRING")
	authServiceURL := os.Getenv("AUTH_SERVICE_URL")
	server, cleanup, err := InitializeLibraryServer(dbDialect, sqlConnectionString(connectionString), grpcAuthServiceUrl(authServiceURL), []grpc.DialOption{grpc.WithInsecure()})
	if err != nil {
		log.Fatalf("could not start server: %v", err)
	}
	defer cleanup()

	s := grpc.NewServer()
	pb.RegisterLibraryServiceServer(s, server)

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
