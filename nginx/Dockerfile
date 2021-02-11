#build web app
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./fe ./
RUN npm install -f
RUN npm run build

#lightweight container for a static files
FROM nginx:alpine
RUN mkdir -p /app/static
COPY --from=build-stage /app/dist /app/static