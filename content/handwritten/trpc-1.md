# TRPC

## Page 1: Using your API (React Query)
* **Using your api :-**
  * **(1) `useQuery` ->**
    ```javascript
    const { data, error, isLoading, isError } = useQuery(['queryKey'], fetchData);
    ```
  * **`useMutation` :**
    ```javascript
    const { data, error, isPending, status, etc, mutate } = useMutation({ mutationFn, key });
    ```
    * `-> mutate(variables, { onSuccess, onError })`
  * **`useInfiniteQuery` ->** For Pagination.
  * **`useQueryClient` ->** To Invalidate / manage queries / mutation.
    * eg: `const queryClient = useQueryClient();`
      * `queryClient.invalidateQueries(['some-query'])`
  * **`useQueries` ->** To fetch multiple queries in parallel.
    * `const queries = useQueries([...])`
  * **`useMutation` ->**
    * `const mutation = useMutation(mutateData, { onSuccess, onError });`

* **React-Query :-**
  * `useQuery`
  * `useMutation`
  * `useQueryClient`
  * `usePrefetch`
  * `useInfiniteQuery`
  * *(Arrow points to)* `-> Comes from TanStack query. Not tRPC`

---

## Page 2: tRPC & React Query Integration
* `Now that we understand what are all the Actions from react-query, this is time to see how it works with tRPC.`
* **(1)**
  ```javascript
  const trpc = useTRPC(); 
  // (Arrow: tRPC hook from @/server/trpc)
  // (Arrow: type = useTRPC() for client comps)
  // OR
  const userQuery = useQuery(trpc.getUser.queryOptions({ id: 'xyz' }));
  
  const { data } = useQuery(trpc.getUser.queryOptions({ id: 'xyz' }));
  
  const { mutate } = useMutation(trpc.createUser.mutationOptions());
  ```

* **(2) Diff between prefetch & Suspense :-**
  * **Prefetching ->** React-Query
  * **Suspense ->** React + React-Query
  * *(Diagram: Squiggly lines and arrows pointing from Prefetch to Suspense)*
  * `Prefetching => fetching the data even before it's needed.`

---

## Page 3: Suspense in React & React Query
* **Suspense :-**
  * `It's a React feature.`
  * `It helps handle async rendering of components.`
  * `allows to pause rendering of a component until data it's waiting for has been loaded.`
* **(React-Query + Suspense) =>** `loading + rendering (Good UX)`
* `React-Query has built-in support for suspense.`
  * `It means, when a Query is being fetched, It will suspend rendering until data is ready.`

* **Example:**
  ```javascript
  const UserDetail = ({ userId }) => {
      const { data } = useQuery(['user', userId], () => fetchUser(userId), {
          suspense: true
      });
      return <div>{data.name}</div>
  }
  
  const App = () => {
      return (
          <Suspense fallback={<div>Loading...</div>}>
              <UserDetail userId={123} />
          </Suspense>
      )
  }
  ```
  * *(Arrow from fallback)*: `-> Render fallback until data is not fetched in UserDetail.`

---

## Page 4: Hydration & Server Side Rendering (SSR)
* **Diff between Hydration**
  * `Server generates HTML sent to client.`
  * `Now client attaches event-listener or re-initializes state to that rendered HTML.`
  * `=> This attaching is called Hydration.`

* **How does it works :-**
  * `[ HTML from Server + No event listener ]` **+** `[ Client side React Tree ]` **$\Rightarrow$** `React checks if both HTML & React Tree are matching.`
  * `If they match React directly attaches event listener to the server-rendered HTML instead of rendering the client side JS bundle to make new HTML (re-rendering).`
  * `If there is a mismatch, React will re-render the content to ensure consistency.`

* **Hydration Boundary :-**
  * `Specific part of application that React is responsible for hydrating.`
  * `It's a boundary between HTML rendered by server & HTML created by React.`
  * `Page => a Page is divided into many parts, so that we know which parts need interactivity & which don't.`
  * `=> It help to optimize our rendering strategy.`
  * `Hydration Boundaries are created using Suspense with React.lazy.`

---

## Page 5: Lazy Loading & Hydration Boundaries
* **eg: import React, { Suspense } from 'react';**
  * `We will lazy load components:`
  ```javascript
  const Header = React.lazy(() => import('./Header'));
  const Content = React.lazy(() => import('./Content'));
  
  const App = () => {
      return (
          <div>
              <Suspense fallback={<div>Loading Header...</div>}>
                  <Header />
              </Suspense>
              
              <Suspense fallback={<div>Loading Content...</div>}>
                  <Content />
              </Suspense>
          </div>
      )
  }
  ```
* `Now here we have two Hydration Boundaries.`
* `Parts of the Page will be loaded only when it's required.`
* `Why this Hydration Boundary Why not just "use client"`
  * `Though Nextjs clearly defines which component are client & server. But Client component often contains dynamic / interactive part that don't need to be loaded immediately (as page loads).`
  * `eg: you have an Editor component on a Page. Now this Editor component is too heavy it will not be a good idea to load in the page early when that heavy component is loaded.`
  * `That's why we use Lazy Loading.`

---

## Page 6: Heavy Component Lazy Loading
* **eg: `const HeavyClientComp = React.lazy(() => import('./...'));`**
  ```javascript
  const MyServerComponent = () => {
      return (
          <div>
              <h1>Server Content</h1>
              <Suspense fallback={<div>Loading...</div>}>
                  <HeavyClientComponent />
              </Suspense>
          </div>
      )
  }
  ```

---

## Page 7: tRPC & React Query Example
* **tRPC + React Query**
  * **How to query / use api :-**
  * **(1) In Server Components:**
    ```javascript
    import { caller } from "@/trpc/server";
    const data = await caller.getUser();
    ```
  * **(2) for Client Components :-**
    * `चूँकि Server side में React-query नहीं use होता So caller.getUser() simple है like Pure tRPC no React query.` (Since React-query is not used on Server side, `caller.getUser()` is simple like Pure tRPC, no React query.)
    ```javascript
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    // ↳ To manage/invalidate queries
    
    // To fetch data
    const { data } = useQuery(trpc.getUser.queryOptions());
    ```
    * *(Arrow from `useQueryClient` and `useQuery`)*: `From React-Query`
    * *(Arrow from `trpc`)*: `From tRPC`

    ```javascript
    const create = useMutation(trpc.createUser.mutationOptions({
        onSuccess: () => {
            queryClient.invalidateQueries(
                trpc.getUser.queryOptions()
            )
        }
    }))
    ```
    * *(Arrow from `create`)*: `To mutate/create User`
    * *(Arrow from `onSuccess` block)*:
      `Also we are invalidating the old data saved in react-query in client.`
      `ऐसा होने पर जब React-Query में data stored रहता है But Next req. में data change हुआ है तो old data को remove करन पड़ता है | data save रहता है` (When this happens, the data remains stored in React-Query. But if the data has changed in the next req, the old data has to be removed. The data remains saved.)
