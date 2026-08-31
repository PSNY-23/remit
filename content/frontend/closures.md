---
title: "Closures"
category: "JavaScript"
description: "Lexical scope retention, data encapsulation, and private variables."
---

# Closures


A **closure** is the combination of a function bundled together with references to its surrounding state (the lexical environment).

```javascript
function makeCounter(initial = 0) {
  let count = initial; // Private variable encapsulated via closure
  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count
  };
}

const counter = makeCounter(10);
counter.increment(); // 11
console.log(counter.get()); // 11
```

### Classic `for` Loop Gotcha
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints 3, 3, 3 (shared function scope)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints 0, 1, 2 (new lexical block scope per iteration)
}
```

