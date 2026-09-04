# Next.js Request & Response Handling, Modules & Utilities

## Page 1: Next.js Modules (`next/headers`, `cookies()`)
* **`next/headers`**
  * Asynchronous function.
  * Allows us to read HTTP request headers on server component (only) -> e.g., server component, server action, route handler, middleware.
  * Doesn't work in client.
  * **Example:**
    ```javascript
    const headerList = await headers();
    const userAgent = headerList.get('user-agent');
    ```
  * `headers()` has no parameters.
  * Returns read-only web-headers object, so you can't `set`/`delete`.
  * `headerList.get('something')`, `headerList.has(...)`
  * `cookies()` header is a **dynamic API**, so its values can't be known before the time, so static rendering is not possible for those pages which use this `header()`.

* **`cookies()`**
  * Asynchronous.
  * Reads HTTP cookies on server.
  * Read, write outgoing req. headers.
  * **Example:**
    ```javascript
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme');
    ```
  * Methods: `.set()`, `.has('name')`, `.set(name, value, option)`, `.delete(name)`, `.clear()`, `.toString()`.
  * **Note:** HTTP doesn't allow setting cookies after streaming starts, so you must use `.set()` in server action / route handler only, not in server component.

---

## Page 2: Edge Middleware & App Router Utilities
* **Edge Middleware-specific:**
  * `next/headers` -> `headers()`, `cookies()` works inside middleware too. Edge-compatible req/res object.

* **App Router Utilities:**
  * `next/dynamic` => `dynamic()` -> Lazy-load component.
  * `next/link` => `<Link>` -> Client-side navigation.
  * `next/script` => `<Script>` -> External script loading.

* **Miscellaneous:**
  * `next/constants`
  * `next/metadata` => for SEOs.

---

## Page 3: Core Utilities Provided by Next.js
* **Core Utilities Provided by Next.js:**
  1. `next/headers`
  2. `next/navigation`
  3. `next/server`
  4. `next/cache`
  5. `next/image`
  6. `next/font`

* **Routing & Server functions:**
  * `next/headers` => access req. headers & cookies.
  * `next/navigation` => redirect() to control routing (`notFound()`, `useRouter()`).
  * `next/server` => `NextRequest`, `NextResponse`, Route handlers & middlewares (`revalidatePath`, `revalidateTag`, cache control in server component).

---

## Page 4: HTTP Headers Reference
* **Headers:**
  * **(1) General headers:**
    * `accept`: "application/json, text/plain, *"
    * `content-type`: "application/json"
    * `host`: "localhost:5000"
    * etc.
  * **(2) Auth/Security headers:**
    * `authorization`: "Bearer alex4232340"
    * `cookie`: "session-id=abc123; theme=dark; lang=en"
    * `x-csrf-token`: "cs7230sn4or"
    * `x-api-key`: "123ner-"
  * **(3) CORS header:**
    * `Access-Control-Allow-Origin`: `*`
    * `Access-Control-Allow-Methods`: "GET, POST, PUT"
    * `Access-Control-Allow-Headers`: "..."
    * `Access-Control-Max-Age`: "3600"
  * **(4) Client and Proxy Info:**
    * `x-forwarded-for`: "192.168.1.1"
    * `x-real-ip`: "..."
  * **(5) Cache & Control header**
  * **(6) Others**
  * **To access any headers:** `headers.get('name-of-the-header')`

---

## Page 5: Extracting Data from Req Object in Route Handler
* **How to extract data from req object in Route Handler:**
  * Let's say the api request from the axios:
    ```javascript
    axios.post('/api/products/42?category=books&featured=true', {
        name: 'Javascript book',
        price: 299.3
    }, {
        headers: {
            'Authorization': 'Bearer token123',
            'X-Custom-Header': 'custom-value'
        }
    })
    ```

* **(2) Accessing everything:**
  ```javascript
  export const POST = async (req) => {
      const body = await req.json();
      const { name, price } = body;
  }
  ```
  * **URL related:**
    * `method = req.method`
    * `full URL = req.nextUrl.href`
    * `pathname = req.nextUrl.pathname` (it's `/api/...`)
    * `baseURL = req.nextUrl.origin` (`http://localhost:3000`)
  * **Route Params:**
    * `/api/products/[id]/page.tsx`
      ```javascript
      export GET/POST = (req, { params }) => {
          const productID = params.id;
      }
      ```
      *OR*
      `/api/test/[id1]/[id2]/[id3]/page.tsx`
      ```javascript
      export GET/POST = (req, { params }) => {
          const id1 = params.id1;
          const id2 = params.id2;
          const id3 = params.id3;
      }
      ```
  * **Query Params:**
    * `/api/products ? category=shoes & id=123` => Query string / Query Parameters / Search Parameters. Both query search and URL.
    * ```javascript
      const searchParams = req.nextUrl.searchParams;
      const category = searchParams.get('category');
      const id = searchParams.get('id');
      ```

---

## Page 6: Headers in API Routes & Server Components
* **Headers :-**
  * `userAgent = req.headers.get('user-agent')`
  * `cookies = req.headers.get('cookie')`
  * **Generally to access any header:**
    `headerValue = req.headers.get(header-name)`

---

## Page 7: Next.js Navigation & Client/Server Utilities
* **(1) Next/navigation:**
  * **Client side:**
    * `useRouter()`
    * `usePathname()`
    * `useParams()`
    * `useSelectedLayoutSegments()`
    * `useSearchParams()`
  * **Server side:**
    * `redirect()`
    * `notFound()`
  * `=> Utilities for navigation in Client/Server comps.`
* **How to read headers/cookies in client/middleware:**
  * `request.cookies.get(cookie-name)?.value`
  * `request.headers.get(header-name)`
* **(2) usePathname():**
  * `=> let's read you current URI's pathname. in client.`
  * `const pathname = usePathname();`
* **Router methods (`useRouter()`):**
  * `router.back()` => go to last route from history stack.
  * `router.forward()` => go forward in browser history.
  * `router.prefetch(href)` => for faster client transitions.
  * `router.refresh()`
  * `router.push(href, {scroll: boolean})` => adds in history.
  * `router.replace(href, {scroll: boolean})` => doesn't add.
  * `router.push('/dashboard')`
  * **Only client comp (as its hook)**
  * `const router = useRouter();`

---

## Page 8: `useSearchParams` & Dynamic Rendering
* **(iv) useSearchParams():**
  * `=> To read current URL's query string.`
  * `=> returns a readOnly.`
  * **Example:** `/dashboard?search=my-project`
    ```javascript
    const searchParams = useSearchParams();
    const search = searchParams.get('search');
    ```
* **(iii) useParams():**
  * `=> to read routes dynamic params`
  * **Example:** `/shop/[id]/[itemid] => /shop/swp2/123`
    ```javascript
    const params = useParams();
    const { id, itemid } = params;
    ```
* **Suspense Boundary Requirement:**
  * If the route is statically rendered & you use `useSearchParams()` inside a client component, Next.js will throw an error because search params cannot be statically pre-rendered (since they depend on request time).
  * To fix this, you must wrap the client side render (component using `useSearchParams`) with a `<Suspense> Boundary (Parent Suspense)` to be client-side rendered.
  * *Static vs Dynamic rendering note:* If a route is statically rendered, using `useSearchParams` forces it to be dynamically rendered unless wrapped in Suspense, or it causes errors if not handled correctly.

---

## Page 9: Redirect and NotFound Utilities
* **(i) use/server-redirect():**
  * `=> a fn allows you to redirect user to another URL.`
  * `=> can be used on server comp.`
  * `Server action.`
  * `Route handler.`
  * **Example:** `redirect(path, type)`
    * `type` -> `push` (default in server action), `replace` (default)
* **It can also be made in client component:**
  * **NOTE:** `return redirect()` ❌
  * But when the user component is being rendered on the server (during initial page load), it will perform the redirect here. And because `redirect()` called on server, it will be called **Server-side redirect**.
  * Or called on client using form, we can say on the client using form, we can say: Client and server action can be performed because we can use server action on the client components (through server actions).
  * `=> redirect()` can also be used in client component (`useRedirect()` serves if needed, but `redirect()` from `next/navigation` throws an error, stops rendering, and renders a `not-found.tsx` file).
* **(ii) notFound():**
  * `notFound()` calling throws an `404 error`, stops rendering of route segment in which it was thrown, and render a `not-found.tsx` file.
  * Mapped through client.

---

## Page 10: `NextRequest`, `NextResponse` & UserAgent
* **(3) Next/servers:**
  * **i) NextRequest / NextResponse:** => extend the native Request/Response object to give additional properties/web api.
  * **ii) useragent:** => extended web API
    * `const { isBot, browser, devices, os, cpu } = UserAgent(request)`
    * **Device details object properties:**
      * `browser: { name: string }`
      * `version: string`
      * `device: { model?: string, type?: string, vendor?: string }` (mobile, tab, tv, etc.)
      * `os: { name: string }`
      * `engine: { name: string }`
      * `cpu: { architecture: string }`
  * **NextResponse methods:**
    * return NextResponse.json({ ... }, { status: 400 })
    * `NextResponse.redirect(new URL('/proxy', request))`
    * `NextResponse.rewrite(new URL('/proxy', request))`
    * `NextResponse.next()`
* **NextRequest methods:**
  * `req.cookies.get(cookie-name)?.value`
  * `req.nextUrl.pathname`
  * `req.nextUrl.searchParams`
  * `.clear()`
  * `.has()`
  * `.delete()`
  * `.set(Cookies)`
