FROM mcr.microsoft.com/dotnet/core/sdk:2.2-bionic AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY ./auth-service/AuthService/*.csproj ./auth-service/AuthService/
WORKDIR /app/auth-service/AuthService
RUN dotnet restore

# copy and publish app and libraries
WORKDIR /app/
COPY ./auth-service/AuthService/. ./auth-service/AuthService/
COPY ./proto/auth.proto ./proto/auth.proto
WORKDIR /app/auth-service/AuthService
RUN dotnet publish -c Release -o out

FROM envoyproxy/envoy
RUN mkdir /var/log/envoy
WORKDIR /app
RUN apt-get update && \
    apt-get -y install apt-transport-https && \
    wget -q https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
    dpkg -i packages-microsoft-prod.deb && \
    apt-get update && \
    apt-get -y install aspnetcore-runtime-2.2 
COPY --from=build /app/auth-service/AuthService/out ./
COPY ./auth-service/AuthService/envoy.yaml /etc/envoy.yaml
COPY ./auth-service/AuthService/start.sh /etc/start.sh
RUN chmod +x /etc/start.sh
ENTRYPOINT ["/etc/start.sh"]
