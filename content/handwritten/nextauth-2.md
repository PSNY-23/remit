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
