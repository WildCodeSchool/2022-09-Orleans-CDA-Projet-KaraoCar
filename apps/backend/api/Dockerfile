FROM node:18.12.1-alpine3.17 AS base
WORKDIR /app/apps/backend/api
COPY apps/backend/api/package*.json ./
COPY apps/backend/api/src src

WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY libs libs

RUN npm ci

RUN npm run build --workspace=apps/backend/api


FROM node:18.12.1-alpine3.17 AS production
WORKDIR /app
COPY --from=base /app/apps/frontend/web/dist ./dist
COPY --from=base /app/apps/frontend/web/node_modules ./node_modules

CMD node dist/main.js