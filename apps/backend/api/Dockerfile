FROM node:18.12.1-alpine3.17
WORKDIR /app/apps/backend/api
COPY apps/backend/api/package*.json ./
COPY apps/backend/api/tsconfig*.json ./
COPY apps/backend/api/src src

WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY libs libs

RUN npm ci

RUN npm run build --workspace=apps/backend/api

CMD node apps/backend/api/dist/main.js