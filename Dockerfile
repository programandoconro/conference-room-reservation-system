FROM node:17-alpine3.15 AS builder
RUN apk add --no-cache libc6-compat openssl
ENV TZ=Japan
COPY . .
RUN npm install
RUN npx prisma generate && npx prisma db push
RUN npm run build
USER node

ENTRYPOINT [ "npm", "run", "start", "--", "--port", "8080" ]