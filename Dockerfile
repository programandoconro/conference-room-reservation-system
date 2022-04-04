FROM node:17-alpine3.15
ENV TZ=Japan
COPY . .
RUN npm install
RUN npx prisma generate && npx prisma db push
RUN npm run build
USER node

ENTRYPOINT [ "npm", "run", "start", "--", "--port", "8080" ]