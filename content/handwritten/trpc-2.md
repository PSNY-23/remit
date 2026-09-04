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
