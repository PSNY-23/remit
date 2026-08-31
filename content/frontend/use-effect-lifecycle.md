---
title: "useEffect & Lifecycle Management"
category: "React"
description: "Dependency arrays, cleanup functions, and aborting network requests."
---

# useEffect & Lifecycle Management


```javascript
useEffect(() => {
  const controller = new AbortController();
  fetchData({ signal: controller.signal });

  return () => {
    // Cleanup runs on unmount & before effect re-runs
    controller.abort();
  };
}, [dep]);
```

