---
title: "Microtasks vs Macrotasks"
category: "JavaScript"
description: "Task prioritization, execution order, and starvation."
---

# Microtasks vs Macrotasks


Between every task execution on the Call Stack:
1. The **entire Microtask Queue** is drained until empty (including newly enqueued microtasks).
2. The browser may render UI updates.
3. The event loop picks **one** Macrotask from the Macrotask Queue.

