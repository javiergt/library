FROM golang AS builder
WORKDIR /src
COPY ./go.mod ./go.sum ./
RUN go mod download
COPY . .
RUN go install ./library-service

FROM envoyproxy/envoy
RUN mkdir /var/log/envoy
COPY --from=builder /go/bin/library-service /usr/local/bin/srv
COPY ./library-service/envoy.yaml /etc/envoy.yaml
COPY ./library-service/start.sh /etc/start.sh
RUN chmod +x /etc/start.sh
ENTRYPOINT ["/etc/start.sh"]
