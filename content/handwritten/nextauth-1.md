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
