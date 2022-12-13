FROM node:18.12.1-alpine3.17 AS base
WORKDIR /app/apps/backend
COPY apps/backend/api api

WORKDIR /app
COPY package*.json ./
COPY libs libs

RUN npm ci

RUN npm run build --workspace=apps/backend/api


FROM node:18.12.1-alpine3.17 AS production
WORKDIR /app
COPY --from=base /app/apps/backend/api/dist apps/backend/api/dist
COPY --from=base /app/node_modules node_modules
COPY --from=base /app/apps/backend/api/node_modules apps/backend/api/node_modules

CMD node apps/backend/api/dist/main.js