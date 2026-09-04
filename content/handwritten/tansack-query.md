# TanStack : -

① Query Client :-
  ↳ It is used to interact with cache.
  `await queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: fetchPosts })`

  ↳ `queryClient.fetchQuery`
  • `fetchInfiniteQuery`
  • `prefetchQuery`
  • `prefetchInfiniteQuery`

  `getQueryData` -> `Data -> setQueryData`
  `ensureQueryData`
  `setQueriesData`
  `setQueryData`

  `invalidate -> invalidateQueries`
  `refetchQuery`
  `cancelQuery`
  `removeQuery`
  `resetQuery`

  `state -> isFetching`, `isMutating`

② QueryCache & mutation Cache
  ↳ all data & metadata of the queries
  `const queryCache = new QueryCache({ onError: () => {}, onSuccess: () => {} })`

  `queryCache.find`
  • `clear`
  • `findAll`
  • `subscribe`

③ query Observer
  `infiniteQueryObserver`
  `QueriesObserver`
  ↳ handles & track lifecycle (fetching, success, error, invalidation) of a query.
  ↳ When a query is first created, it's observed which starts fetching, managing store etc.

③ streamedQuery :-
  `import { experimental_streamedQuery as streamedQuery } from '@tanstack/react-query'`

  `const query = queryOptions({ queryKey: ['data'], queryFn: streamedQuery({ streamFn: fetchDataInChunks }) });`

④ Managers :-
  `focusManager ->`
  `onlineManager`
  `notifyManager`
  `timeoutManager`

  managers are made to handle query behaviours & state to enhance / optimize query.

⑤ hooks :-
  `useQuery` | `useMutation` | `useIsFetching` | `useSuspenseQuery`
  `useQueries` | | `useIsMutating` | `useSuspenseInfiniteQuery`
  `useInfiniteQuery` | | `useMutationState` | `useSuspenseQueries`
  (`usePrefetchQuery`, `usePrefetchInfiniteQuery`)

---

# Pagination / Infinite scroll :-

① Pagination :-
  ↳ data is divided into Pages.
  ↳ frontend send (PageNo & size) to backend.
    Backend return data of that page.

  eg: `app.get('/api/items', async (req, res) => {`
        `const { page = 1, limit = 10 } = req.query; // default data`

        `const pageNumber = parseInt(page);`
        `const pageSize = parseInt(limit);`

        `const skip = (pageNumber - 1) * pageSize;`

        `try {`
          `const items = await prisma.items.findMany({`
            `skip,`
            `take: pageSize`
          `});`

          `const totalItem = await prisma.items.count();`
          `const totalPages = Math.ceil(totalItem / pageSize);`

          `res.json({ items, page: pageNumber, totalItem, totalPages });`

        `} catch (error) {}`
      `});`

  => `fetch("/api/items?page=${pageNumber}&limit=10")`

② Database Setup for infinite scroll :-
  ↳ when user reaches bottom, & there is no data, so next request for next page of data.
  ↳ frontend (cursor / last-item's ID) -> Backend
    + page-size (limit)
    Backend sends that no. (pageSize) of data starting from that itemID or cursor.

  `app.get('/api/items', async (req, res) => {`
    `const { cursor, limit = 10 } = req.query;`

    `const take = parseInt(limit);`
    `const cursorID = cursor ? parseInt(cursor) : null; // Cursor is basically last id of items`

    `try {`
      `const items = await prisma.items.findMany({`
        `take,`
        `skip: cursorID ? 1 : 0,`
        `where: cursorID ? { id: { gt: cursorID } } : {},`
        `orderBy: { id: 'asc' },`
      `});`

      `const nextCursor = items.length === take ? items[items.length - 1].id : null; // It's basically the id of last item of this batch`

      `res.json({ items, nextCursor });`

    `}`
  `});`

---

① Tanstack-Query setup for Paginations :-

```javascript
fetchItems = async ({ queryKey }) => { // Provided by tanstack automatically
  const [, { page, limit }] = queryKey;
  const res = await fetch(`/api/items?page=${page}&limit=${limit}`);
  const data = await res.json();
  return data;
}

const [page, setPage] = useState(1);
const pageSize = 10;
const { data, isLoading, error } = useQuery({
  queryKey: ['items', { page, limit: pageSize }],
  queryFn: fetchItems,
  placeholderData: keepPreviousData // This is magic
});
```

=> `useQuery` automatically passes `{ page, limit: pageSize }` from queryKey to the queryFn.

```jsx
if (isLoading) { <div>Loading...</div> }
if (error) { <div>Error loading items</div> }

const { items, totalPages, totalItems } = data || {}

<div>
  <h1> Total Item : {totalItems} </h1>
  <div> {items.map(...)} </div>
  <button onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))} disabled={page === 1}>
    Previous
  </button>
  <span> Page {page} of {totalPages} </span>
  <button onClick={() => setPage((prevPage) => Math.min(prevPage + 1, totalPages))} disabled={page === totalPages}>
    Next
  </button>
</div>
```

---

# Tanstack - Tutorial

-> all data are stale by default
```javascript
useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // React-query fetches data again in background if the data is stale. If data is not stale no fetching will happen.
    refetchInterval: 1000, // Polling, it mean fetch data every 1s, irrespective of state of data
    refetchIntervalInBackground: true, // even if the tab is not open / in focus, the data will be kept on fetching
    enabled: false,
    placeholderData: keepPreviousData
})
```

[ When you switch between tabs it's called going into focus or out of focus. React query fetch data on focus change also if data is stale. ]

`enabled: false` => disable automatic refetching when query mounts or queryKey changes.
  ↳ To refetch we can import our refetch method from useQuery.
  `<button onClick={refetch}> Fetch Posts </button>`

=> For post details page
  `queryKey = ["post", postId]`

---

# infinite scroll :-
=> instead of useQuery now use `useInfiniteQuery`

```javascript
useInfiniteQuery({
  queryKey: ['fruits'],
  queryFn: fetchFruits,
  initialPageParam: 1,
  getNextPageParam: (lastPage, allPages) => {
      // Calculate next page number
      // If page does not exist return undefined.
      // => It has two Parameter
      // lastPage:
      // allPages: array of objects.
  }
});
```
`useInfiniteQuery` automatically passes the Page No. (`pageParam`) in queryFn.

```javascript
const fetchFruits = ({ pageParam }) => {
  return fetch(`/fruits/?_page=${pageParam}`);
}
```

`Get Next Page Param ()` => Calculate next page number
`{ pageParams, pages } = useInfiniteQuery()`
↳ `pageParams`: जिस Page को fetch करना है
↳ `pages`: Pages, data in api response

We have next function to fetch next page which can be triggered with Page-intersection-observer, button or anything.
`fetchNextPage` -> `hasNextPage` -> `isFetchingNextPage`

---

# React-intersection-observer

If this is attached to any element, if the element comes in view, it's inView variable become true.

```javascript
import { useInView } from "react-intersection-observer"

const { ref, inView } = useInView();

<div ref={ref}></div>
// अब अगर ये element scroll करते हुए view में आयेगा inView = true हो जायेगा

useEffect(() => {
    if (inView) { fetchNextPage(); }
}, [fetchNextPage, inView]);
```

# Mutation :-

```javascript
const { data, error, isError, isPending, isSuccess, mutate, status } = useMutation({
    mutationKey: '...',
    mutationFn: ...
});

mutate(data, { onSuccess: () => {} });
```

If we want to get the data on our screen instantly after making Post request we can use invalidateQuery.
```javascript
useMutation({
  onSuccess: () => { queryClient.invalidateQueries(["posts"]) }
});
```

But mutation request always return the mutation/created data as response, why not just add/use that data instead of refetching all data again from Database by (`queryClient.invalidateQuery`).

```javascript
useMutation({
    onSuccess: (data) => {
        queryClient.setQueryData(['posts'], (oldQueryData) => {
            return {
                ...oldQueryData,
                data: [...oldQueryData.data, newUserData] // new Data
            }
        });
    }
});
```

# Optimistic Updates :-
Updating the local state, even before the request finishes.

```javascript
useMutation({
    mutationFn: ...,
    onMutate: async (newPost) => {
        await queryClient.cancelQueries(['posts']);
    }
});
```
