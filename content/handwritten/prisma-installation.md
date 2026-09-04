# Prisma client :-

① `npm install prisma` ↳ dev-dependency, `@prisma/client` ↳ necessary
② `npx prisma init`
③ put the database link/string in `.env`:
   `DATABASE_URL = "...."`
④ define your schema in `schema.prisma`.
⑤ `npx prisma migrate dev (--name "init")`

⑥ Optional: To generate prisma client (`npx prisma generate`)
⑦ go into `server.js` :-
   `const { PrismaClient } from "@prisma/client";`

   `const prisma = new PrismaClient();`
      ↳ `prisma.user.findMany();`
      ↳ `prisma.user.create({ data: {} });`

⑧ If you have made any changes in the model/schema.
   -> `npx prisma migrate dev` (create migration, update db, for Prodn)
   -> `npx prisma db push` (doesn't create migration files, but updates database. Used only in development)
   `npx prisma generate`
