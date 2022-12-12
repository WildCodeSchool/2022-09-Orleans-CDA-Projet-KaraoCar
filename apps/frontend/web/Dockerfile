FROM node:18.12.1-alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY index.html ./
COPY vite.config.ts ./
COPY src src
COPY public public

CMD npm run build