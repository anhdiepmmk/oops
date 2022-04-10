FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY ./ ./

RUN apk update && apk add libreoffice
RUN apk add --no-cache msttcorefonts-installer fontconfig
RUN update-ms-fonts

RUN npm start
CMD ["tail", "/dev/null"]
