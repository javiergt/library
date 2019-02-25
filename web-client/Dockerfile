FROM node:alpine as builder
WORKDIR /app

COPY ./web-client/package.json .
COPY ./web-client/package-lock.json .
RUN npm install

COPY ./web-client .
RUN npm run build -- --output-path=dist --prod

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./web-client/default.conf /etc/nginx/conf.d
