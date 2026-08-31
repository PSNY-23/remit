---
title: "The Event Loop & Concurrency"
category: "JavaScript"
description: "How single-threaded JavaScript handles asynchronous I/O and task queues."
---

# The Event Loop & Concurrency


The V8 engine runs in a single thread with a call stack. Asynchronous operations (Timers, Network, DOM events) are handled by Web APIs and queued:

```
+-----------------------+
|      Call Stack       |
+-----------------------+
            |
            v
+-----------------------+
|    Microtask Queue    | -> Promise.then, queueMicrotask (Flushed first)
+-----------------------+
            |
            v
+-----------------------+
|    Macrotask Queue    | -> setTimeout, setInterval, I/O (One per tick)
+-----------------------+
```

