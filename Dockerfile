FROM node:16-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.21.6-alpine
COPY --from=build-step /app/dist/yt-dw-client /usr/share/nginx/html
EXPOSE 80
