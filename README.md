## Start database:

```
docker-compose up -d
docker-compose start
```

## Connect prisma to database:

```
npx prisma generate
npx prisma db push
```

## Start App:

```
npm install
npm run dev
```
