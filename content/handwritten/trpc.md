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


# tRPC :-

① `@trpc/server` -> Server-only
   `@trpc/client` -> Client-only
   `@trpc/react-query`
   `@tanstack/react-query@latest`

② Create a tRPC Router :-

(a) `init.ts`
```ts
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
```

(b) `trpc/routers/_app.ts` :-
```ts
export const appRouter = createTRPCRouter({
    user: userRouter,
    post: postRouter,
});

export type AppRouter = typeof appRouter;
```

`user.ts`
```ts
export const userRouter = createTRPCRouter({
    hello: baseProcedure.query(() => {}),
    updateUser: baseProcedure.mutation(() => {}),
});
```

(c) `app/api/trpc/[trpc]/route.ts`

---

# tRPC without Tanstack :-

① `@trpc/server`
   `@trpc/client`

② Defining backend :-
**Server/trpc.ts**
```ts
import { initTRPC } from "@trpc/server";
const t = initTRPC.create();

export const router = t.router;
export const procedure = t.procedure;
```

**_app.ts**
```ts
export const appRouter = router({
    user: userRouter // <--- router/user.ts
});
export type AppRouter = typeof appRouter;
```

**router/user.ts**
```ts
export const userRouter = router({
    createUser: procedure.query(async () => {
        const user = await db.user.create(...);
        return user;
    }),
    deleteUser: ---
});
```

③ Accessing Backend from Client Side :-
`@trpc/client`
```ts
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/_app";

const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({ url: "http://localhost:3000" })
    ],
});
```

Now our client is connected to the backend, & we can query/do mutation.

```ts
eg: const user = await trpc.user.findById.query("1");
const createdUser = await trpc.user.create.mutate({
    name: "Pankaj",
    email: "pankaj@gmail.com"
});
```

---

④ How to integrate tanstack Query with trpc-client

`useQuery` -> These are two hooks we use always in tanstack query.
`useMutation`

```ts
const { data, error, isLoading, isError, refetch, status } = useQuery({
    queryKey: ["user", userId],
    queryFn: fetchUser(userId),
    options?: {
        enabled,
        retry,
        refetchOnWindowFocus,
        cacheTime,
        staleTime,
        onSuccess,
        onError etc.
    }
})

const mutation = useMutation({
    mutationFn: (newUserData) => axios.post('/users', newUserData),
    onSuccess: (data) => {},
    onError: (error) => {}
});

await mutation.mutateAsync(newUserData);
```

**Query Client**
↳ While `useQuery`/`useMutation` are basically to fetch/mutate data from server.
↳ QueryClient is to manage those data in the client side.
  -> caching data, refetching, return managing query state, Query invalidation.

```tsx
const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    )
}
```

And now the queryClient is accessible throughout the application via using its respective hook.
`import { useQueryClient } from "@tanstack/react-query"`
`const queryClient = useQueryClient()`

```ts
const { data, isLoading, isError } = useQuery(["user", userId], fetchUserData)
const mutation = useMutation(updateUser, {
    onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
    }
})
```

---

⑤ Do you need `trpc` + `tanstack` integration?

No, you can absolutely use them separately like from:

```ts
export const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({ url: "http://localhost:3000" })
    ]
});
```
This is the client for tRPC

Now here you see, you have to manage query keys & data on your own.
```ts
const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => trpc.post.list.query()
});
```

BUT, if we use integration we could simply do this:
```tsx
const { data } = trpc.hello.useQuery({ name: "Pankaj" });
const goodbyeMutation = trpc.goodbye.useMutation();

<p>{helloQuery.data?.greeting}</p>
<button onClick={() => goodbyeMutation.mutate()}>
    Say goodbye
</button>
```

In here, Query Keys are managed by tRPC, on your behalf.
Keys are decided from what you have put in the inputs of server trpc.
If you can see all the TRPC keys using => `getQueryKey()`

---

But The Java Code was for React Query Integration.
In Integrating trpc & tanstack we do something like this.

```ts
const trpc = useTRPC();
const greetingQuery = useQuery(trpc.greeting.queryOptions({ name: "Pankaj" }))
```
Here we are using the `queryOptions` query mutation option interface of tanstack instead of wrapping `useQuery`/`useMutation` with our own client, like we were doing in the past implementation.

This new implementation is better, because we will be using the base syntax we are accustomed to while using tanstack.

**Tanstack :-**
```ts
const { data } = useQuery({
    queryKey: [],
    queryFn: () => {},
    options?: {}
});
```

**Tanstack + tRPC (new):-**
```ts
const { data } = useQuery(trpc.greeting.queryOptions({}));
```

So you see both are kind of similar looking syntax wise.

---

⑥ How to query/mutate in newer trpc + tanstack

`trpc-useTRPC();`

```ts
const userQuery = useQuery(trpc.user.queryOptions({}))
// userQuery.data
// userQuery.error
// userQuery.isLoading
// => It is similar to 
// const { data, error, isLoading } = useQuery(...)
// Just destructuring of returned object
```

```ts
const userCreator = useMutation(trpc.createUser.mutationOptions())
onClick = {() => userCreator.mutate(data)}
```

Since we are not modifying any internal working of tanstack, so we can also:
`const queryClient = useQueryClient()`
as we were doing in tanstack.

```ts
const myQueryKey = trpc.user.queryKey()
queryClient.invalidateQueries({ queryKey: myQueryKey })
```
