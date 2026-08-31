---
title: "Stale Closures in React"
category: "React"
description: "Why async callbacks capture outdated state and how to fix with functional updates or refs."
---

# Stale Closures in React


```javascript
// Stale Bug: captures count === 0
useEffect(() => {
  const timer = setInterval(() => setCount(count + 1), 1000);
  return () => clearInterval(timer);
}, []);

// Fix: Functional update receives latest state
useEffect(() => {
  const timer = setInterval(() => setCount(prev => prev + 1), 1000);
  return () => clearInterval(timer);
}, []);
```

