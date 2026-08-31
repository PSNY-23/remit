---
title: "Hand-Coded: deepClone"
category: "Coding Challenges"
description: "Handling circular references with WeakMap, Date, RegExp, Map, Set."
---

# Hand-Coded: deepClone

```javascript
function deepClone(value, hash = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value;
  if (value instanceof Date) return new Date(value);
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);

  if (hash.has(value)) return hash.get(value);

  const copy = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value));
  hash.set(value, copy);

  for (const key of Reflect.ownKeys(value)) {
    copy[key] = deepClone(value[key], hash);
  }
  return copy;
}
```
