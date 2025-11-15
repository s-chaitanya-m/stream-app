#Build React App

FROM node:24-alpine as build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

#Serve via Nginx
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/ngnix/html
COPY nginx.conf /etc/ngnix/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]

