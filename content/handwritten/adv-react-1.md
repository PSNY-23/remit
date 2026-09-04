# Advanced React & Better Auth Notes

## Page 1: Why `router.push('/login')` should always be inside a `useEffect`
* **(1) What is rendering in React :-**
  * `->` Render is supposed to be only related to UI calculations.
  * free of any side effects like:
    * `-> router.push()`
    * `-> fetch()`
    * `-> localStorage.setItem()`
    * `-> setTimeout`
* **-> Render : (Render phase is just about UI)**
  ```javascript
  const Page = () => {
      return <div> Hello World </div>
  }
  ```
  * `↳` The render can happen multiple time automatically because react is built this way.
* **-> Why can't use `router.push` outside `useEffect` :-**
  * `router.push()` will run during react rendering, but react doesn't guarantee it will run just once.
  * So, it may run `router.push()` multiple times.
* **-> `useEffect` solves this Problem** because it runs after rendering of react is complete.
  * This guarantees, it runs only once.

---

## Page 2: Better-auth Deep Dive
* **(1) Everything about the better-auth related on**
  * Server side => `auth.api`
  * client side => `authClient` + plugins for extra function + hooks
  * *से handle होगा।* (will be handled by this.)

* **(2) How to access headers, req, body, query on server**
  * is `await headers()` -> from `next/headers`.

  ```javascript
  const { headers, response } = await auth.api.signUpEmail({
      returnHeaders: true, 
      asResponse: true,
      body: { email, password, name }
  });
  ```
  * *(Arrows from `returnHeaders: true` and `asResponse: true`)*: `ये दोनो server side में ही headers, response मिलेंगे।` (These two headers and response will only be available on the server side.)
  * Here this `headers` is the response headers sent by the server.
  * It may contain information about the Content-Type, Authorization (eg: access-token, Session, cookie etc), rate-limit.
  * `response ->` This is the whole HTTP response you receive from server.

---

## Page 3: Handling Errors & AuthClient Options
* **(3) How to handle errors related to api :-**
  * `->` there is a
    `import { APIError } from "better-auth/api"`
  ```javascript
  try {
      await auth.api.signInEmail(...)
  } catch(error) {
      if(error instanceof APIError) {
          console.log(error.message, error.status)
      }
  }
  ```

* **(4) authClient**
  * `-> authClient.useSession() => { data: session, isPending, error, refetch }`
  * `->`
    ```javascript
    await authClient.signIn.email({ ... }, {
        onSuccess: (ctx) => { },
        onError: (ctx) => { }
    });
    ```
    **OR**
    ```javascript
    await authClient.signIn.email({ ... },
        fetchOptions: {
            onSuccess: (ctx) => { },
            onError: (ctx) => { }
        }
    );
    ```

---

## Page 4: Disabling Hook Renders & Cookies
* **(5) Disabling hook render :-**
  * Certain api endpoints (of client) will trigger something called an atom signal.
* **Task:** complete the better-auth today.

  ```javascript
  const auth = betterAuth({
      database: { },
      emailAndPassword: { },
      plugins: [nextCookies()]
  })
  ```
* **Understanding Cookies :-**
  * Cookies are used to store data -> eg: session tokens, session data, Auth state etc.

---

## Page 5: Browser Application Tab & Storage Types
* **Under application tab in chrome :-**
  * `Application`
    * `-> Manifest` (storage for Progressive Web App)
    * `-> Service workers` (if website uses service workers for offline functionality/background task you can view their status here.)
    * `-> Storage`
      * `↳ a chart showing total storage of this site.`

* **Storage ->** all client-side storage mechanism the website uses.
  * **(1) Local storage ->** Persistent client-side storage -> smaller data.
  * **(2) Session Storage ->** Temp storage, that's only available for the duration of the session.
  * **(3) Extension storage ->** 
  * **(4) IndexedDB ->** complex client-data storage. -> large scale, structured data storage.
  * **(5) Cookies ->** smallest scope, server-integrated.
    * `->` limited to a specific domain/path.
    * `->` It is sent with the req automatically.
    * `->` 4KB -> Data accessible by both browser/server.

---

## Page 6: Storage Comparisons
| Type | Capacity | Traits |
| :--- | :--- | :--- |
| **Cookies** | ~4KB | Fastest, Scope: Domain & Path. Sent to server automatically. Expires at set time or session. |
| **Session Storage** | ~5MB | Per-session. Scope: Specific tab/window. Lifetime: Until tab/window is closed. Good for temp data (shop cart), form data. |
| **Local Storage** | 5-10MB | Per-domain. Scope: Domain (shared across tabs). Lifetime: जब तक manually delete नहीं करते (Until manually deleted). eg: setting, light, color, Preferences. |
| **Extension-storage** | 5MB - 10MB | Per-domain. Extension specific. |
| **IndexedDB** | 50MB - 1GB | Per-domain. Slow. Structured/husky data. |
| **Cache API** | 50MB+ | Fast. eg: HTML, CSS, JS. |

---

## Page 7: Google OAuth & Email Verification
* `=>` **when using google OAuth :-**
  * By default google will signIn with already selected account. But if you provide a prompt field, it will ask your consent.
  * **eg: google:**
    ```javascript
    google: {
        clientId: "---",
        clientSecret: "---",
        prompt: 'select_account' // -> This forces account selection
    }
    ```
* `=>` **How to implement Email in authentication -**
  * `-> Resend -> get API key.`
  ```javascript
  const auth = betterAuth({
      emailVerification: {
          autoSignInAfterVerification: true,
          sendVerificationEmail: async() => {}
      },
      emailAndPassword: {
          enabled: true,
          requireEmailVerification: true
      }
  })
  ```

---

## Page 8: Better-Auth Concepts
* **Better-auth concepts :-**
  * **Concepts:** api, cli, etc, Client, Cookies, database, Email, Hooks, Plugins, OAuth, Rate Limit, Session, TS, UI & Access
  * **Plugins:**
    * `↳ Authentication` -> anonymous, Two Factor, Username, magic link, Email OTP, Passkey, Generic OAuth, One Tap.
    * `↳ Authorization` -> Admin, API key, MCP, organization.
    * `↳ Enterprise`
    * `↳ Utility`
    * `↳ Payments`
    * `↳ Others`

---

## Page 9: Advanced React (`useState` & Rendering)
* **Advanced React :-**
  * `(1) useState`
  * `(2) useEffect`
  * `(3) useRef`
  * `(4) useContext`
  * `(5) useMemo`
  * `(6) useCallback`
  * `(7) useReducer`
  * `(8) useImperativeHandle`
  * `(9) useLayoutEffect`
  * `(10) Custom Hooks`
  * Error Boundary, Lazy Loading, Suspense, useTransition, useDeferredValue, Concurrent Mode.

* **(1) useState :-**
  ```javascript
  let count = 0
  const handleIncrease = () => {
      count++;
  }
  return <button onClick={handleIncrease}>Increase</button>
  ```
  * `->` once you click the btn `count++`, the value increases but the count variable doesn't get updated in DOM -> The DOM client doesn't get update.
  * `=>` When the JSX has to re-render is handled by React we never render the manually.

* **=> When do React Render :-**
  * When there is any change in the state defined by the react (`useState`) it records the whole component.
  * `eg: const [count, setCount] = useState(2)`
  * `->` Now whenever there is any change in count, The react will render the Component.
  * `=>` It doesn't immediately cause Re-rendering, it schedule, then it thinks it's time to render. It re-render.

---

## Page 10: `useState` Asynchrony & Batching
* **Example:**
  ```javascript
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
      setCount(count + 1);
      console.log(count);
  }
  ```
  * `So, when you press the button -> setCount(1) runs -> update the count value -> so Now count = 1, but UI will still show 0. Because React won't immediately re-render on state change.`
  * `-> After setCount -> console.log(count) runs.`
  * Now that the handle increase is complete, there is nothing to do. React will re-render the compnt. with updated (`count=1`) from the state. Now JSX will show 1.

* **State Batching Example:**
  ```javascript
  const [count, setCount] = useState(0);

  handleIncrease = () => {
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      console.log(count);
  }
  ```
  * `->` जब `handleIncrease` call होगा, `count = 0` है So, `count+1 = 1` होगा.
  * `setCount(1)` होगा `count` को 1 नहीं set करेगा ये schedule करेगा
  * इसलिए `setCount(count+1)` -> ये 0 ही है अभी भी -> `setCount(1)` queue हो गया.
  * सब Run हो जाने के बाद `console.log(0)` Print होगा और जो भी Queue में था उसके बाद सारे queue (`setCount(1)`, `setCount(1)`, `setCount(1)`, `setCount(1)`) run होगे। 
  * *(When `handleIncrease` is called, `count = 0`, so `count+1 = 1`. `setCount(1)` will run, but it won't set `count` to 1 immediately; it will schedule it. Therefore, the next `setCount(count+1)` still evaluates to `setCount(0+1)` and just queues `setCount(1)` again. After everything executes, `console.log(0)` prints, and then React processes the batched queue where all operations just set it to 1.)*
