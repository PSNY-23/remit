---
title: "Hand-Coded: Debounce & Throttle"
category: "Coding Challenges"
description: "Writing debounce and throttle from scratch."
---

# Hand-Coded: Debounce & Throttle


### Debounce
```javascript
function debounce(fn, delay) {
  let timerId = null;
  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
      timerId = null;
    }, delay);
  };
}
```

### Throttle
```javascript
function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
```

