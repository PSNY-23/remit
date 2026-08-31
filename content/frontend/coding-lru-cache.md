---
title: "Hand-Coded: LRU Cache"
category: "Coding Challenges"
description: "Least Recently Used Cache implementation in O(1) time."
---

# Hand-Coded: LRU Cache


```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // JavaScript Map preserves insertion order!
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val); // Move to MRU
    return val;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey); // Evict LRU
    }
    this.cache.set(key, value);
  }
}
```

