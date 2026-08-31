---
title: "map, filter, and reduce"
category: "JavaScript"
description: "Functional array transformations and accumulator aggregation patterns."
---

# map, filter, and reduce


```javascript
const numbers = [1, 2, 3, 4, 5];

// Map: Transform every element (same length output)
const doubled = numbers.map(n => n * 2);

// Filter: Extract elements matching predicate
const evens = numbers.filter(n => n % 2 === 0);

// Reduce: Accumulate into single result
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
```

