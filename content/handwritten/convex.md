# Convex Database Notes

## Page 1: Introduction to Convex & Basic Schema/Query
* **Convex Databases :-**
  * It's a **reactive db**, meaning no additional setup for reactive updates like polling/websockets etc.
  * It's different from Postgres/Mongo, as we don't make a single client & use it everywhere in the application.
  * **Convex = Realtime-DB + Server Functions (Query/Mutation) + Storage + Auth.**

* **How to write schema :-**
  ```typescript
  import { defineSchema, v } from "convex/schema";

  export default defineSchema({
      users: {
          name: v.string(),
          email: v.string(),
      },
      othermodels: {
          // ...
      }
  });
  ```

* **Now querying & updating/creating data in the above schema :-**
  ```typescript
  import { query } from "./_generated/server";

  export const getAllUser = query({
      handler: async (ctx) => {
          return await ctx.db.query("users").collect();
      }
  });
  ```
  ```typescript
  import { mutation } from "./_generated/server";

  export const addUser = mutation({
      args: { name: v.string(), email: v.string() },
      handler: async (ctx, args) => {
          await ctx.db.insert("users", args);
      }
  });
  ```

---

## Page 2: Frontend Usage (React Integration)
* **Now using those functions from frontend :-**
  ```typescript
  import { useQuery, useMutation } from "convex/react";
  import { api } from "../convex/_generated/api";

  const users = useQuery(api.users.getAllUsers);
  //         ↳ Table Name | Method that we defined

  const addUser = useMutation(api.users.addUser);

  // Usage:
  addUser({ name: "Pankaj", email: "pankaj@smile.com" });
  //                  ↳ data object
  ```

---

## Page 3: React `useContext` with TypeScript
* **How to Use `useContext` with TS :-**
  * Make a folder called `"contexts"` to store all contexts at one place.
    * `contexts/`
      * `AuthContext.tsx` $ightarrow$ extension will be a component like `.tsx`
      * `UserContext.tsx`
      * `ThemeContext.tsx`
      * `types.ts` *(If you want all types at one place, or you can define it in individual files too)*
  * In each file we would write two things & export both of them:
    1. Auth Context
    2. Auth Provider

* **eg:** *(Note: Mark the component as Client Component $ightarrow$ `"use client"`)*
  ```typescript
  export const AuthContext = createContext<AuthContextType | null>(null);

  export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
      const [user, setUser] = useState(null); // State
      const login = (newUser: any) => setUser(newUser); // for to modify/
      const logout = () => setUser(null);               // mutate state

      return (
          <AuthContext.Provider value={{ user, login, logout }}>
              {children}
          </AuthContext.Provider>
      );
  }
  ```

* **Accessing in Component :-**
  ```typescript
  const { user, login, logout } = useContext(AuthContext);
  ```

---

## Page 4: Convex Tutorial & Defining Schema
* **Convex Tutorial :-**
  1. Installing convex
  2. Defining schema
  3. Making server fn for CRUD operations
  4. Setting up convex-client
  5. Using client to run server fn (CRUD) on the server.

* **Defining Schema :-**
  * Make a file called `schema.ts`
  ```typescript
  import { defineSchema, defineTable } from "convex/schema";
  import { v } from "convex/values";

  export default defineSchema({
      posts: defineTable({
          title: v.string(),
          content: v.string(),
          author: v.string(),
          createdAt: v.number(),
      }),
      users: defineTable({
          // ...
      }),
  });
  ```

* **Supported field types :-**
  * `v.string()`
  * `v.number()`
  * `v.boolean()`
  * `v.id("table-Name")` $ightarrow$ foreign key reference to another table.
  * `v.array(...)`
  * `v.optional(v.string())`
  * `v.array(v.string())` $ightarrow$ array of string.
  * `v.array(v.object({ author: v.string(), text: v.string() }))`

---

## Page 5: Defining Relationships & Indexing
* **How to define relationship between tables/fields :-**
  ```typescript
  export default defineSchema({
      users: defineTable({
          name: v.string(),
          email: v.string(),
      }),
      posts: defineTable({
          title: v.string(),
          content: v.string(),
          authorId: v.id("users"), // This is relationship with users table
      }),
  });
  ```
  * *It says the `id` field of the users table will be the `authorId` of the posts table.*

* **Indexing :-**
  * Indexes in Convex let you efficiently query documents by specific fields.
  * Adding index is simple (just add `.index()` onto the `defineTable`).
  * **eg:**
    ```typescript
    export default defineTable({
        title: v.string(),
        authorId: v.id("users"),
        createdAt: v.number(),
    })
    .index("by_author", ["authorId"])
    .index("by_author_created", ["authorId", "createdAt"])
    ```
  * This lets you quickly find all posts by a user & order/filter them by time.
  * Querying with index:
    ```typescript
    const posts = await ctx.db
        .query("posts")
        .withIndex("by_author", (q) => q.eq("authorId", userId))
        .collect();
    ```

---

## Page 6: CRUD Operations in Convex Server Functions
* **CRUD :-**

* **(1) Reading :-**
  ```typescript
  export const getTask = query({
      args: { taskId: v.id("tasks") },
      handler: async (ctx, args) => {
          const task = await ctx.db.get(args.taskId);
          return task;
      }
  });
  ```

* **General function :-**
  ```typescript
  export const getAllTasks = query/mutation({
      args: { /* ... */ },
      handler: async (ctx, args) => {
          // ...
      }
  });
  ```

* **Database API methods on `ctx.db`:**
  * `ctx.db.insert(table, data)` $ightarrow$ insert a new document.
  * `ctx.db.get(id)` $ightarrow$ get a single document by ID.
  * `ctx.db.patch(id, data)` $ightarrow$ update fields in a document.
  * `ctx.db.delete(id)` $ightarrow$ delete a document.
  * `ctx.db.query(table)` $ightarrow$ start a query chain for filtering/ordering.
    * **eg:** `ctx.db.query("posts")`
      * `.withIndex("by_user", q => q.eq("userId", id))`
      * `.filter(...)`
      * `.order("desc" / "asc")`
      * `.take(10)`
      * `.collect()`

---

## Page 7: Authentication Methods
* **Authentication methods :-**
  ```typescript
  const identity = await ctx.auth.getUserIdentity();
  // Returns { email, sub, ... }
  const userId = identity?.sub;
  ```
