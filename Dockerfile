FROM node:17-alpine3.15
RUN apk add --no-cache libc6-compat
ENV TZ=Japan
COPY . .
RUN npm install --force
RUN npm run build
USER node

ENTRYPOINT [ "npm", "run", "start", "--", "--port", "8080" ]