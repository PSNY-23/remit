---
title: "Promises"
category: "JavaScript"
description: "Promise states, chaining, microtask scheduling, and error propagation."
---

# Promises


A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.

### Promise States
1. **`pending`**: Initial state; neither fulfilled nor rejected.
2. **`fulfilled`**: Operation completed successfully (`resolve(value)`).
3. **`rejected`**: Operation failed (`reject(error)`).

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data loaded'), 1000);
});

promise
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log('Complete'));
```

