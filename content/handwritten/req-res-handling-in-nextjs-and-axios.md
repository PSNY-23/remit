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


# Next.js Advanced Request & Response Handling, Caching, Axios & TypeScript

## Page 1: Next.js Cache (`unstable_cache`)
* **(iv) Next/cache**
  * `(i) unstable_cache :-`
    * Allows you to cache the result of expensive operations like db queries & reuse them across multiple req.
    * **Example Code:**
      ```javascript
      const getData = unstable_cache(
          async () => {
              // fetch data, db queries, etc.
              return data;
          },
          ['key1', 'key2'], // array of keys (identification to the cache)
          {
              revalidate: 36, // No. of second after which the cache should be revalidated
              tags: ['tag1', 'tag2']
          }
      )
      ```

---

## Page 2: Caching with `fetch` API
* **(ii) fetch :-**
  * We can cache also by extending the fetch api provided:
    ```javascript
    fetch(url, {
        cache: 'force-cache',
        next: {
            revalidate: 3600,
            tags: ['data']
        }
    })
    ```
  * **Cache options:** `"no-store"`, `"no-cache"`, `"force-cache"` *(default)*.
    * By default, Next.js fetches responses from db on each req. If dynamic apis are detected, but will fetch only once and use cache during build time if no dynamic API, static rendering.
  * **`no-store`** => fetch resources from server on every req. Even if dynamic APIs are not detected.
  * **`force-cache`** => Next.js looks for the matching request in its Data Cache. If there is a match, is fresh => return cache. If no match/stale, matches => fetch from server and update the cache.
  * **`revalidate`** => `false`, `0`, `number`
    * `false` => always cached.
    * `0` => always fresh / not cached.
    * `number` => like 100, 200 etc. s/t part cache and number of seconds after which cache expires.
  * **Note:** If revalidate is set to a number like 100, 200 etc. it's part cache and cache options.
  * **Tags & Revalidation:**
    ```javascript
    // To revalidate the cached data where we triggered it with a collection:
    revalidateTag('collection')
    ```

---

## Page 3: Cache Tags and Cache Life
* **B) Cache Tag :-**
  * This function allows you to get cached data for on-demand invalidation.
  * `i) first you need to enable dynamic/so flag in next.config.js.`
  * `ii) ConfigTag function takes string or array of string.`
    ```javascript
    const getData = async () => {
        // ...
        return data;
    }
    ```
  * Now you can invalidate the cache from anywhere using this tag:
    ```javascript
    revalidateTag('my-data');
    ```

* **(4) cacheLife :-**
  * It is a function used to set the cache lifetime of a function or components. It should be used alongside the `use cache` directive, and within the scope of a function or component.
  * **Example:**
    ```javascript
    // To use this function first, enable dynamic Do the 'use cache' directive in Next.js
    export async function Page() {
        'use cache'
        cacheLife('hours');
        // ...
        return <div>Page</div>
    }
    ```
  * Custom cache life config object:
    ```javascript
    cacheLife({
        stale: 3600,
        revalidate: 900,
        expire: 864003
    })
    ```

---

## Page 4: Fetch vs Axios & Response Object Structure
* **Structure of Reg and Response, FETCH vs AXIOS / Route Handlers / Prisma**
  * **(1) Fetch :-** We need to parse the JSON, unlike axios.
    ```javascript
    const res = fetch(url);
    const data = res.json();
    
    const res = fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) => for POST (Post req.)
    });
    ```
  * We again need to do `res.json()` because the response we get from the server are JSON-String so we need to parse it.
  * **Structure of Response Object of Fetch call:**
    * `body: ReadableStream/null`
    * `headers: Headers`
    * `ok: true/false` => true if [200-299], false => 500 etc. If the response is a result of redirect. False means no redirect happened.
    * `redirected: false/true`
    * `status: 200`
    * `statusText: "OK"` etc. => 200 -> OK, 201 -> Created, 404 -> Not Found, 500 -> Internal server error.
    * `type: "basic"` => basic -> response from same-origin, cors -> response from cors-origin req. with CORS headers.
    * `url: ""`
    * `useRequested: "opaque-redirect" / "error"`

---

## Page 5: Axios Configuration and Response Object
* **(2) Axios :-**
  * `axios.get(url, config)`
  * `axios.post(url, data, config)`
  * `axios.put(url, data, config)`
  * `axios.delete(url, config)`
  * **Axios Request Config:**
    * `config = { params: {}, paramsSerializer, timeout, responseType, withCredentials, headers, auth, maxRedirects: 5, maxContentLength, maxBodyLength, validateStatus: (status) => { return status >= 200 && status < 300 }, transformRequest: modify req. data before sending, transformResponse: ... }`
  * **Axios Response Object:**
    * `data: { ... }`
    * `status: 200`
    * `statusText: "OK"`
    * `headers: { ... }`
    * `config: { ... }` -> req. object
    * `request: { ... }`

---

## Page 6: Axios Error Handling
* **Axios error :-**
  * `message: "Request failed with status code 404"`
  * `stack: "..."`
  * `config: { ... }` => req. config
  * `code: "ERR_BAD_REQUEST"`
  * `status: 404`
  * `response: { ... }`
  * `request: { ... }`
* **Example Use case:**
  ```javascript
  try {
      const res = await axios.post(url, data);
      return res.data;
  } catch (error) {
      console.error(error.message);
  }
  ```

---

## Page 7: Route Handlers in Next.js (Request Handling)
* **(3) Route handler :-**
  * The req. that comes from the sides is what becomes the `NextReq`.
  * **Client sending via Axios:**
    ```javascript
    axios.post(url, { name: "John", age: 25 }, {
        headers: { 'Authorization': '...', 'X-Custom': '...' }
    })
    ```
  * **NextRequest Received :-**
    ```javascript
    export const POST = async (req: NextRequest) => {
        const body = await req.json(); // We need to convert the json string to object and that's why we made req. using axios.
        const url = req.nextUrl;
        const params = req.nextUrl.searchParams;
        const auth = req.headers.get("authorization");
        // ...
    }
    ```
  * **Response from Route Handler:**
    ```javascript
    return NextResponse.json({ success: true, name: "Pankaj" }, { status: 200 });
    ```

---

## Page 8: Handling Axios Response & Errors in Next.js
* **Axios response received :-**
  * If error occurs:
    ```javascript
    catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
            status: 500
        }, { status: 500 })
    }
    ```

---

## Page 9: TypeScript Safety in Next.js: Prisma Types & Zod
* **TypeScript in NEXT.JS :-**
  * **1) define types in Prisma first**
    * It gives you types eg: for each model (includes ID, createdat, updatedAt)
    * **Example:**
      * `Prisma.User`
      * `Prisma.Post`
      * `Prisma.PostCreateInput`
      * `Prisma.PostUpdateInput`
      * `PostWhereUniqueInput`
      * and a lot of other types as well.
    * It also gives you select/include types.
  * **2) Zod for define schema**
    * If Prisma is for database only, we need to define our own Schema so we use zod everywhere!
    * **Example:**
      ```typescript
      export type PostInput = z.infer<typeof PostSchema>
      ```
    * `export type PostInput = z.infer<typeof PostSchema>` -> *This is Zod doing validation schema.*

---

## Page 10: TypeScript Utility Types for Route Handlers / APIs
* **(3) Create a types folder for helper types for all Route handler / APIs :-**
  * `=> Create the PostInterface and all schema from Schema.`
  * `=> make types for each api action.`
  * **Example:**
    ```typescript
    export interface CreatePostRequest {
        title: string;
        content?: string;
    }

    export interface CreatePostResponse {
        success: boolean;
        postId: string;
    }
    ```
  * **CRUD types pattern:**
    * `CreatePostSchema`
    * `UpdatePostSchema`
    * `PostResponse`
    * `PostListResponse`
