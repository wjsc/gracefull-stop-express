FROM node:10.16.0-alpine
ENV APP_DIR gracefull-stop-express
RUN apk add tzdata
ENV TZ=America/Buenos_Aires
WORKDIR /usr/app/${APP_DIR}
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
USER node
CMD [ "npm" , "start" ]
