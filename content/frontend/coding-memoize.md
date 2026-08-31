---
title: "Hand-Coded: memoize"
category: "Coding Challenges"
description: "Caching expensive function returns with custom resolver."
---

# Hand-Coded: memoize

```javascript
function memoize(fn, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
```
