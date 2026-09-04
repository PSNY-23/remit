# NextAuth Notes

## 1. Initial Sign-In Flow
* **Browser:** User presses the **Sign-In** button.
  * The button has an `onClick` fn (`SignIn`).
  * This fn calls an api req: `GET: "api/auth/signin"`
  * This api computes the available Providers on the server from the Provider options.
* **Redirect To (Signin Page):** (Not Button)
  * This page shows all the available methods to SignIn.
  * eg (google, twitter etc)
* **User selects one method (Google):**
  * This selection sends a `POST: "api/auth/signin/github"`
  * ये api: server पर ही scope, Callback fn. etc compute (ClientId etc) करता है (This api: computes scope, Callback fn, ClientId, etc. on the server itself)
  * $\rightarrow$ `GET: "github.com/login/oauth/authorize"`
  * $\rightarrow$ Google auth

---

## 2. OAuth Authorization Code Flow
* **during whole auth flow:**
  1) temporary authorization-code
  (i) using this "temp authorization-code", backend make a direct req to the github to access user data.
  `(temp. auth-code + app id + app secret + redirect_url) -> github -> access_token`

* **Step-by-step Execution:**
  * **(1) User clicks $\Rightarrow$ Login with Google**
    * This button redirect user to the:
      `GET: "https://github.com/login/oauth/authorize"`
    * `payload: { client_id="...", redirect_url="api/auth/callback/github", scope="read:user user:email", response_type="code" }`
  * **(2) Callback Request:**
    * So this get req to the Provider gives you a temp code after authorization with redirect.
      `GET: api/auth/callback/github?code=abc`
    * Your backend makes a POST req to the token endpoint:
      `POST: https://github.com/login/oauth/access_token`
    * `Payload = { client_id, client_secret, code, redirect_url }`
    * `Response = { access_token, "token_type", scope, "read:user" }`
      *(This data later will be used to create "Account" in DB).*
  * **(3) Fetching User Data:**
    * `GET https://api.github.com/user`
    * `Authorization: Bearer access-token`
    * `Response = { P.d: login:, email:, avatar_url: }`

---

## 3. Profile Transformation & NextAuth Config
* (4) The response that we get from the Github after user fetching can be accessed in `Profile()`.
* **`auth.config.ts`**
  ```typescript
  Providers: [
      Github({
          clientId: '...',
          clientSecret: '...',
          authorization: { params: { scope: "read:user user:email" } },
          profile(profile) {
              return {
                  id: profile.id,
                  name: profile.name,
                  email: profile.email,
                  image: profile.avatar_url
              }
          }
      })
  ]
  ```
* **Understanding `Profile()`:**
  * This Profile contains everything return by the OAuth Provider after authentication.
  * $\Rightarrow$ When access_token gets exchanged with the OAuth Provider it gives us full user details.
  * Most of the things in user details are unnecessary and database में available भी है तो उस नाम से नहीं जिस नाम से database और cookies में save है। (Even if available in the database, it's not by the same name as saved in the database and cookies).
  * So we need to transform the raw user Profile. This is what `Profile()` function do.
  * $\Rightarrow$ Whatever the Profile function returns becomes "user".

---

## 4. User Creation & Cookies
* **(5) After Profile() returns shaped user:**
  * $\rightarrow$ Next auth checks: is user already in db?
  * $\rightarrow$ if not: Calls `createUser()` (behind the scene) $\rightarrow$ stores $\rightarrow$ `User`, `Account`
    * `Account` $\rightarrow$ This is created using what has been returned in the profile.
    * `User` $\rightarrow$ is created using Db session. Session (if using Db session).
  * $\rightarrow$ When we made a req. to github with the temp authorization-code to get the access-token.

* **(6) Cookies :-**
  * $\rightarrow$ Cookies are set after saving in db.
  * $\rightarrow$ This happen during the final step of the Sign-in flow.
  * (1) NextAuth creates a session-token.
  * (2) This session-token will be saved in cookies.

* **JWT Callback:**
  * `JWT()` $\rightarrow$ This is the callback that creates session token.
    ```javascript
    jwt({token, user, account}) {
        if(user) {
            token.id = user.id;
            token.role = user.role;
        }
        return token;
    }
    ```
  * out of the three `user` & `accounts` are available only during first signIn.

---

## 5. Callbacks Execution Order
* These are created automatically by JWT library $\rightarrow$ JWT $\rightarrow$ only in browser not on server.
* **The Order in which callback should run:**
  1. `SignIn(user, account, profile, email, credentials)`
     * Return `true`/`false` (allowed or denied).
  2. `JWT({token, user, account, profile, isNewUser})`
     * Returns updated token object.
     * When user signIn for first time `user`, `account` is defined.
     * Subsequent calls $\rightarrow$ `user`, `account` is not defined, `token` is defined.
  3. `Session({session, token, user})`
     * Is customize the session object sent to the client.

---

## 6. JWT vs Session
* **JWT({token, user, account}):**
  * When user SignIn it gets the raw user data from github.
  * This data gets formatted/restricted in the `Profile()`.
  * Saved in db.
  * When `JWT()` call back runs $\rightarrow$ On first SignIn it sets `user` & `account` from DB.
  * using `(user, account)` $\rightarrow$ token is created/updated.
  * token of user $\rightarrow$ may have other field as well (`id`, `name`, `email`, `image`, `emailVerified`, `role`)
  * token $\Rightarrow$ it is not always a fixed schema.
  * This token gets saved in cookie of browser (e.g., `sub`, `name`, `email`, `picture`). This is equal to `id` in the user table of the db.

* **Session:-**
  * It's not created just after the jwt callback.
  * When you call `useSession()` or `auth()` from the frontend/server, Nextjs reads the cookie, extract JWT token, Runs session callback, & gives you a nice session object.
  * $\rightarrow$ session data is used to check authorization or UI state.

---

## 7. Events in Next-Auth
* **Configuration:**
  ```javascript
  export const { handlers, signIn, signOut, auth } = NextAuth({
      // ... auth config,
      adapter: PrismaAdapter(prisma),
      callbacks: { signIn, jwt, session },
      events: { signIn, signOut, createUser, updateUser, linkAccount, session },
      pages: { signIn: "/auth/signin", error: "/auth/error" }
  })
  ```
* **Events:** These are part of NextAuth flow but run alongside without blocking the core process.
  * $\hookrightarrow$ like side effects/listeners that gets triggered when something happen.
  * $\hookrightarrow$ for stuff like $\rightarrow$ sending email, analytics etc.

---

## 8. Middleware
* $\rightarrow$ middleware runs before you hit route handler. eg: `/api/auth`.
* $\rightarrow$ It runs on every request to the routes, so it can act before NextAuth's logic.
* **Use of middleware:**
  * $\rightarrow$ Protect routes.
  * $\rightarrow$ Automatic refresh.
  * $\rightarrow$ manage session.

* **(1) As per NextAuth doc middleware.ts:**
  ```javascript
  export { auth as middleware } from "@/auth"
  ```
  * $\rightarrow$ This is the minimal recommended way.
  * $\rightarrow$ This middleware automatically reads session cookie, verifies the user, & redirect unauth to the SignIn Page.
  * But this won't do it automatically, we need to set thing up. There are two ways to set things up:

  * **Basic (Not scalable):**
    * `middleware.ts`
      ```javascript
      export { auth as middleware } from "@/auth"
      ```

  * **Better:**
    * `auth.ts`
      ```javascript
      export const { handlers, auth... } = NextAuth({
          callbacks: {
              authorized: async({auth}) => {
                  return !!auth?.user;
                  // if logged in: return true
                  // otherwise false
              }
          }
      })
      ```


# NextAuth Middleware & Authentication

## Better way :-
Instead of checking the authorization in the authorized callback, just check the authorization in middleware itself.

`middleware.ts`
```ts
import { auth3 } from "@/auth";

export default auth3((req) => {
    // अगर authenticated नहीं है और login page पे भी नहीं है तो login page पे redirect
    if (!req.auth && req.nextUrl.pathname !== "/login") {
        const newUrl = new URL("/login", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})
```
-> `!req.auth` => if user is authenticated or not.
-> `req.nextUrl.pathname !== "/login"` => User is not already on login page.

=> But wait a min, where does the `req` get access to `auth` method:
-> `auth3 = NextAuth({})`
-> it does middleware magic.
-> it's a fn. (`auth()`)
-> What this `auth()` fn do is
   -> read the `req` including cookies, header etc.
   -> parses the session-token & gets user info.
   -> attach a new field in req object `req.auth = userInfo`.
`auth(callback)` -> Then call the callback with updated `req`.

---

## Big confusion :-
Ultimately in middleware we have to check if the user is authenticated or not. There are two ways for this:
(i) `session = await auth()`
    ↳ `if(session)` => authenticated
    ↳ no session => not authenticated
(ii) `req.auth` in `auth((req) => { })`

**First wala :-**
This works only on server, but in node.js environment, middleware node पे run नहीं करता.

**Second wala :-**
In Next.js / Vercel there is something called Edge.
Edge -> is near the user's location,
-> extremely fast.
-> Best place to run middleware.
But it's not like node.js environment.
So, we can't run `await` fn there.
That's why for middleware `req.auth` is the best method to check if the user is authenticated or not.

---

## Edge Compatibility in Middleware
It is recommended to run the middleware on the Edge.
So, we want our middleware to also run on edge, but there is some problem:

**Problem :-**
-> Database Adapter
   -> Database client uses TCP connection to communicate with database server.
      eg: PostgreSQL.
   -> TCP on Node.js feature so can't run on edge.

**Solution :-**
(i) middleware
    -> in vercel middleware always runs on edge.
(ii) split config
    -> make a `auth.config.ts` file & export `default & Providers: []`
    -> Satisfies NextAuth config.
(iii) second, create a separate file called `auth.js` which requires trust configuration.
    `auth.ts`
    ```js
    export const { handlers, auth } = NextAuth({
        ...authConfig,
        adapter: ...
    })
    ```
(iv) Third, It will create its own auth client `middleware.ts`
    `export const { auth: middleware } = NextAuth(authConfig)`
    => In middleware either it will redirect or not. It will always return null.

---

## Routing in middleware :-
We make all routes as Protected unless we define the public route explicitly.

```js
export default auth((req) => {
    const { nextUrl } = req
    // This is how we check whether the route is public or not.
})
```

**Assigning the Routes :-**
* Public => `publicRoutes = ["/", "/about"]`
* Private =>
  `authRoutes = ["/auth/signin", "/auth/signup", "/auth/error", "/auth/reset"]`
  `apiAuthPrefix = "/api/auth"`

Now we will match this routes with `nextUrl` to decide whether the `nextUrl` is which kind of route.

```js
const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
const isAuthRoute = authRoutes.includes(nextUrl.pathname);
const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
```

1. `isApiAuthRoute` -> return (nothing)
2. `isPublicRoute` & `logged-in` -> redirect to dashboard / default-redirect
3. `isPublicRoute` & `not-logged-in` -> next()
4. `isAuthRoute` & `logged-in` -> redirect (default-login-route)
5. `isAuthRoute` & `not-logged-in` -> next()
6. `Protected-Route` & `logged-in` -> next()
   `Protected-Route` & `not-logged-in` -> redirect (`/auth/signin?callbackUrl=...`)

---

## Next-auth / react
-> One of the things for Client Side (only client)
`eg => SessionProvider, useSession, signIn(), signOut(), getProviders(), getSession(), getCsrfToken()`
↳ Works on both Client & Server

1. `import { SessionProvider } from 'next-auth/react'`
```jsx
const session = await auth()
<SessionProvider session={session}>
    {children}
</SessionProvider>
```

---

## Accessing session in Routes/Middleware

1. **`useSession`**
   -> for client component only.
   -> It's a react hook.
   -> Best for showing user info in the UI.

2. **`getServerSession() / auth()`**
   -> `auth()` -> for Node.js environment
   -> on server (route handlers, etc)
   -> doesn't work on middleware's edge runtime.
   -> so not good for middleware.

3. **`getToken()`**
   `import { getToken } from "next-auth/jwt"`
   ↳ Works in middleware, Edge, API handlers.
   ↳ Very fast, No session logic.
   ↳ great when all you need is userId etc.

4. **`cookie()`**
   ↳ This is Next.js App router helper.
   ↳ reads raw cookies.
   `const sessionCookie = cookies().get("next-auth.session-token")`
   -> doesn't decode or verify the JWT.
   -> ❌ Not recommended.

5. **`req.cookies` or `req.headers.cookie`**
   ↳ This is just like cookie().
   `const cookieHeader = req.headers.get("cookie")`
   -> raw access to cookie.
   -> Not safe, No verifying etc.

---

## How to access the params & query from the api call url

**Params:**
```js
GET/POST = async (req, { params }) => {
    const id = await params.id;
}
```

**Query:**
```js
const { searchParams } = new URL(req.url)
const query = searchParams.get('query')
```
OR
```js
const url = new URL(req.url)
const token = url.searchParams.get('token');
if(!token) { return NextResponse.redirect(''); }
```

---

## When to use Server action / route handler :-

=> always prefer server action over route handler.
=> use route handler only when you must expose HTTP endpoint or need advanced HTTP control.

**Server action**
-> Internal UI logic (eg: form, button).
-> Support optimistic UI updates.

**Route Handler**
-> External / public api (access देता है).
-> Webhooks.
-> you need access to header, CDN etc.
-> Third Party services APIs.

=> Though it seems Server action runs on Server so it can be called in server component only but it can be called from client also.

=> The service layer will be used in both the server action & route handlers.
