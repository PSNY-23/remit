---
title: "async / await"
category: "JavaScript"
description: "Syntactic sugar over Promises, error handling with try/catch, and sequential vs parallel execution."
---

# async / await


`async/await` provides synchronous-looking syntax for working with Promises.

```javascript
// Sequential Execution (Slow: 2s total)
const user = await fetchUser();
const posts = await fetchPosts();

// Parallel Execution (Fast: 1s total)
const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
```

