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
