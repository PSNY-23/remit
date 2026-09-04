# Better Auth :-

## Page 1: Setup & Configuration
* `-> bun add better-auth.`
  * `↳ if client/server are separate install on both repo.`
* `-> BETTER_AUTH_SECRET -> .env`
  `BETTER_AUTH_URL -> http://localhost:3000`

* `-> lib/auth.ts`
  ```javascript
  export const auth = betterAuth({
      database: PrismaAdapter(Prisma, { provider: 'postgres' })
  })
  ```

* `-> Adding auth method :-`
  ```javascript
  // inside betterAuth({})
  emailAndPassword: { enabled: true },
  socialProviders: {
      github: {}
  }
  ```

* `-> app/api/auth/[...all]/route.ts`
  ```javascript
  export const { POST, GET } = toNextJsHandler(auth)
  ```

* `-> Create a Client Instance :-`
  ```javascript
  import { createAuthClient } from "better-auth/react";
  export const authClient = createAuthClient({ baseURL: "localhost:3000" })
  ```
  *(From authClient you can access:)*
  * `authClient.signIn`
  * `.signUp`
  * `.useSession`

---

## Page 2: Client & Server Usage
* **=> How to do signUp :-**

* **[For client side]**
  ```javascript
  const { data, error } = await authClient.signUp.email({ email, password, name }, {
      onRequest: (ctx) => {},
      onSuccess: (ctx) => {},
      onError: (ctx) => {}
  });
  ```
  * `✔ await authClient.signIn.email({})`
  * `✔ await authClient.signOut();`
  * `authClient.useSession()` $\rightarrow$ *(gives session on client)*
  * `authClient.getSession()` $\rightarrow$ *(If you don't want to use hooks)*

* **[Fetching/Actions on server side]**
  ```javascript
  await auth.api.signInEmail(...)
  
  // fetching session on server side
  await auth.api.getSession({
      headers: await headers()
  })
  ```
  
  ```javascript
  await auth.api.signInEmail({
      body: { email, password }
  });
  
  await auth.api.verifyEmail({
      query: { token: "any-token" }
  });
  ```
