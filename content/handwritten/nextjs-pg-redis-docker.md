# How to Setup Next.js + Postgres + Redis in Docker

## Page 5: Running Docker Containers
1. **First we need both the images of the Postgres & Redis & run them using docker at specific port.**
   * **Postgres:**
     ```bash
     docker run --name my-postgres \
       -e POSTGRES_USER=postgres \
       -e POSTGRES_PASSWORD=password \
       -e POSTGRES_DB=mydb \
       -p 5432:5432 \
       -d postgres:15
     ```
     * `DATABASE_URL=postgresql://postgres:password@localhost:5432/my-db`

   * **Redis:**
     ```bash
     docker run --name my-redis \
       -p 6379:6379 \
       -d redis:alpine
     ```
     * `REDIS_URL=redis://localhost:6379`

2. **But there are just address for the Next.js client, we need a client at Next.js that can talk to these servers.**
   * Install packages:
     ```bash
     npm i pg redis
     npm i --save-dev @types/pg @types/redis
     ```

3. **Create single client point for both in `lib/` folder**
   * (i) `lib/db.ts`
   * (ii) `lib/redis.ts`
     ```typescript
     import { createClient } from "redis";
     
     export const getRedisClient = () => {
         if (!redisClient) {
             redisClient = createClient({ url: process.env.REDIS_URL });
             redisClient.on('error', (err) => console.error('Redis error', err));
             redisClient.connect();
         }
         return redisClient;
     }
     ```

---

## Page 6: Using Clients & Database Inspection via CLI
* **Now wherever you want to use redis you can use:**
  ```typescript
  const redis = getRedisClient();
  if (!redis.isOpen) await redis.connect();
  
  await redis.set("greeting", "Hello from redis!");
  const redisMessage = await redis.get("greeting");
  ```

* **Setting up PG-Client (`lib/pg-db.ts`):**
  ```typescript
  import { Client } from "pg";
  
  export const getPgClient = async () => {
      const client = new Client({ connectionString: process.env.DATABASE_URL });
      await client.connect();
      return client;
  }
  ```
  * `↳` Now use this anywhere:
    ```typescript
    const pg = await getPgClient();
    ```

* **4. How to see data of the databases? :-**
  * **Redis CLI:**
    ```bash
    docker exec -it <redis-container-id> redis-cli
    ```
    * *Commands:* `KEYS *` (to see all keys), `GET keyname`, etc.
  * **Postgres CLI:**
    ```bash
    docker exec -it <pg-container-id> psql -U postgres -d <your-db>
    ```
    * *Commands:* `\dt` (For tables), `\du` (list users), `SELECT * FROM table-name;` etc.

---

## Page 7: Using GUI Tools (TablePlus & Redis Insight)
* **But But But, we can use GUI as well.**
  * **TablePlus:**
    1. Download TablePlus.
    2. Create a Pg database.
    3. Put the string (`DATABASE_URL`) or manually fill all data.
    4. Press **Connect**.
    5. All the tables will be visible there.

  * **Redis Insight:**
    1. Open Redis Insight after downloading locally.
    2. Add Redis database by filling details.
    3. Connect.


# How to Setup Next.js + Postgres + Redis in Docker

## Page 5: Running Docker Containers
1. **First we need both the images of the Postgres & Redis & run them using docker at specific port.**
   * **Postgres:**
     ```bash
     docker run --name my-postgres \
       -e POSTGRES_USER=postgres \
       -e POSTGRES_PASSWORD=password \
       -e POSTGRES_DB=mydb \
       -p 5432:5432 \
       -d postgres:15
     ```
     * `DATABASE_URL=postgresql://postgres:password@localhost:5432/my-db`

   * **Redis:**
     ```bash
     docker run --name my-redis \
       -p 6379:6379 \
       -d redis:alpine
     ```
     * `REDIS_URL=redis://localhost:6379`

2. **But there are just address for the Next.js client, we need a client at Next.js that can talk to these servers.**
   * Install packages:
     ```bash
     npm i pg redis
     npm i --save-dev @types/pg @types/redis
     ```

3. **Create single client point for both in `lib/` folder**
   * (i) `lib/db.ts`
   * (ii) `lib/redis.ts`
     ```typescript
     import { createClient } from "redis";
     
     let redisClient: any = null;

     export const getRedisClient = () => {
         if (!redisClient) {
             redisClient = createClient({ url: process.env.REDIS_URL });
             redisClient.on('error', (err) => console.error('Redis error', err));
             redisClient.connect();
         }
         return redisClient;
     }
     ```

---

## Page 6: Using Clients & Database Inspection via CLI
* **Now wherever you want to use redis you can use:**
  ```typescript
  const redis = getRedisClient();
  if (!redis.isOpen) await redis.connect();
  
  await redis.set("greeting", "Hello from redis!");
  const redisMessage = await redis.get("greeting");
  ```

* **Setting up PG-Client (`lib/pg-db.ts`):**
  ```typescript
  import { Client } from "pg";
  
  export const getPgClient = async () => {
      const client = new Client({ connectionString: process.env.DATABASE_URL });
      await client.connect();
      return client;
  }
  ```
  * `↳` Now use this anywhere:
    ```typescript
    const pg = await getPgClient();
    ```

* **4. How to see data of the databases? :-**
  * **Redis CLI:**
    ```bash
    docker exec -it <redis-container-id> redis-cli
    ```
    * *Commands:* `KEYS *` (to see all keys), `GET keyname`, etc.
  * **Postgres CLI:**
    ```bash
    docker exec -it <pg-container-id> psql -U postgres -d <your-db>
    ```
    * *Commands:* `\dt` (For tables), `\du` (list users), `SELECT * FROM table-name;` etc.

---

## Page 7: Using GUI Tools (TablePlus & Redis Insight)
* **But But But, we can use GUI as well.**
  * **TablePlus:**
    1. Download TablePlus.
    2. Create a Pg database.
    3. Put the string (`DATABASE_URL`) or manually fill all data.
    4. Press **Connect**.
    5. All the tables will be visible there.

  * **Redis Insight:**
    1. Open Redis Insight after downloading locally.
    2. Add Redis database by filling details.
    3. Connect.
