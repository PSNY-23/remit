---
title: "Hand-Coded: compose & pipe"
category: "Coding Challenges"
description: "Right-to-left and left-to-right function composition."
---

# Hand-Coded: compose & pipe

```javascript
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
```
