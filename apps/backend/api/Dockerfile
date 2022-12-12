FROM node:18.12.1-alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY src src

CMD npm run build

WORKDIR /app/dist
RUN node main.js