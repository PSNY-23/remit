# Prisma Keywords & Query Model

## Page 1: Prisma Keywords & Query Model Overview

* **Root level:** select, include, orderBy, skip, take, distinct, data
* **Methods available on the model:**
  * e.g., `Prisma.user.model`
  * `create`, `createMany`
  * `update`, `updateMany`, `upsert`
  * `delete`, `deleteMany`
  * `findUnique`, `findFirst`, `findMany`
  * `count`, `aggregate`, `groupBy`

* **Prisma Query Model Structure:**
  * **Think of Vice & Tree:**
    1. **What you are acting on** (create, find, update, delete)
    2. **What you're filtering** (`where`)
    3. **What you're including** (`include`)
    4. **What you're selecting** (`select`)
    5. **What are you nesting** (data, create, data, connect)

* **Filter operators (Used inside where):**
  * `equals`, `gt`, `gte`, `lt`, `lte`, `not`, `notIn`, `in`
  * `contains`, `startsWith`, `endsWith`
  * `AND`, `OR`, `NOT`
* **Numeric operators (Used inside data):**
  * `increment`, `decrement`, `multiply`, `divide`
* **Other parameters:**
  * `distinct`
  * `data`
  * `create`
  * `connect`
  * `disconnect`
  * `set`

---

## Page 2: Query Model Details & Methods

1. **Choose the model method:**
   * e.g., `create`, `update`, `findMany`, etc.
2. **Add core arguments depending on above method:**
   * `Prisma.user.update({})`
   * `Prisma.user.update()`
   * **To read:**
     * `where`
     * `select` / `data`
     * `include`
     * `orderBy`
     * `take`
     * `skip`
     * `cursor`
     * `distinct`
3. **Define filtering inside `where`:**
   * e.g., `where: { stock: { gt: 5 }, email: { contains: "@gmail.com" } }`
   * String: `equals`, `startsWith`, `endsWith`, `contains`, `not`, `in`, `notIn`
   * Number/Date: `gt`, `gte`, `lt`, `lte`
4. **Inside data:** set fields or related records
   * `data: { name: "Pankaj" }`
   * But you can create related models as well in a single query!

---

## Page 3: Query Output & Pagination

* e.g., `data: { name: "Pankaj", email: "Pankaj@gmail.com", Profile: { create: { ... } } }`
  * *This is essentially a new query nested on profile model!*
  * Therefore we can do all the keyword that we did previously on root query.
* **Control output with select / include:**
  * `select: { id: true, name: true }`
  * `include: { cart: true, profile: true, posts: true }`
* **Sorting, Pagination, Distinct:**
  * `orderBy: { createdAt: "desc" }`
  * `take: 10`
  * `skip: 20`
  * `distinct: ["email"]`

---

## Page 4: Include vs Select

* **select:**
  * Explicitly specifies fields to return.
  * Can't combined with `include` inside it.
  * Used when you want fine control.
* **include:**
  * Includes related models.
  * Used at top-levels.
  * When you want entire model or nested relation.
* **NOTE:** You can't use `select` and `include` at the same level.

* **Examples:**
  ```js
  const users = await Prisma.user.findFirst({
    select: { email: true },
    include: {
      posts: {
        select: { title: true }
      }
    }
  });
  ```
* **NOTE:** `include` can contain `select`, but `select` can't contain `include`.

---

## Page 5: Deep Dive & Observations (Include vs Select)

* **My observation:** अगर base model के लिए field चाहिए और उसके अंदर जो nested model है, उसकी भी चीज़ें चाहिए तो use `include`.
  * *Example:* `await Prisma.user.findFirst({ where: {}, include: { posts: true } })`
  * ➡️ **Include इसलिए किया क्योंकि user के सारे field चाहिए और user के अंदर जो posts है उसका भी सारे fields चाहिए।**
  * पर अगर user के कुछ ही field चाहिए तो select use करना पड़ेगा और एक बार select use कर लिया तो इसके अंदर जो nested model रूट की रही होगी तो भी select use करना पड़ेगा।
* **Example:** user के follower चाहिए पर सिर्फ नाम, email है।
  ```js
  const user = await Prisma.user.findFirst({
    where: { id },
    select: {
      name: true,
      email: true,
      followers: {
        select: { follower: true }
      }
    }
  });
  ```

---

## Page 6: How to Use Count

1. `const userCount = await Prisma.user.count()`
2. `const activeUsers = await Prisma.user.count({ where: { isActive: true } })`
3. **When using include/select than use _count:**
  ```js
  const userWithPostCount = await Prisma.user.findMany({
    select: {
      id: true,
      name: true,
      _count: {
        select: { posts: true }
      }
    }
  });
  ```
