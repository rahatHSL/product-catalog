FROM node:20-alpine

WORKDIR /app
RUN mkdir -p /app

COPY package*.json /app

RUN npm install -g @nestjs/cli 
RUN npm install

ADD . /app


RUN npm run build
