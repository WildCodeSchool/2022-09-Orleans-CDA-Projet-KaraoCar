FROM node:18.12.1-alpine3.17 AS base

ENV NODE_ENV production

WORKDIR /app/apps/frontend
COPY apps/frontend/web web

WORKDIR /app
COPY package*.json ./
COPY libs libs

RUN npm ci

RUN npm run build --workspace=apps/frontend/web

FROM alpine:3.17.0 AS production
WORKDIR /app
COPY --from=base /app/apps/frontend/web/dist ./
