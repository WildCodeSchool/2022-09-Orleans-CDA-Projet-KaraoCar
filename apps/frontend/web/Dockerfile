FROM node:18.12.1-alpine3.17 AS base
WORKDIR /app/apps/frontend/web
COPY apps/frontend/web/package*.json ./
COPY apps/frontend/web/index.html ./
COPY apps/frontend/web/vite.config.ts ./
COPY apps/frontend/web/src src
COPY apps/frontend/web/public public

WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY libs libs

RUN npm ci

RUN npm run build --workspace=apps/frontend/web

FROM alpine:3.17.0 AS production
WORKDIR /app
COPY --from=base /app/apps/frontend/web/dist ./
