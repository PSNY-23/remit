---
title: "Hand-Coded: Promise.all"
category: "Coding Challenges"
description: "Implementing Promise.all with index tracking and rejection short-circuiting."
---

# Hand-Coded: Promise.all


```javascript
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Argument must be an array'));
    }
    const results = [];
    let completed = 0;
    const total = promises.length;

    if (total === 0) return resolve(results);

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(val => {
          results[i] = val;
          completed++;
          if (completed === total) resolve(results);
        })
        .catch(reject);
    });
  });
}
```

