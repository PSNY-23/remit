---
title: "Hand-Coded: curry"
category: "Coding Challenges"
description: "Currying functions until all expected arguments are provided."
---

# Hand-Coded: curry

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}
```
