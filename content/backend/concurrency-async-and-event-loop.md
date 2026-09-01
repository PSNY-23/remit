---
title: "Concurrency, Asynchronous Programming, and the Node.js Event Loop"
category: "Programming & Logic"
description: "Multithreading vs Async I/O, Node.js libuv event loop phases, microtasks vs macrotasks, Callbacks, Promises, and async/await."
---

# Concurrency, Async Programming & the Event Loop

Understanding concurrency models separates entry-level developers from senior backend engineers who build high-throughput systems.

---

## 1. Multithreading vs. Asynchronous Non-Blocking I/O

| Feature | Multithreading (Java, Go, C++, Rust) | Asynchronous Single-Threaded (Node.js) |
| :--- | :--- | :--- |
| **Execution Model** | Multiple OS threads executing in parallel across CPU cores. | Single main thread executing non-blocking I/O via **Event Loop**. |
| **Memory Footprint** | High (1MB-8MB stack memory allocated per thread). | Very low (single thread registering lightweight event callbacks). |
| **Concurrency Pitfalls**| Race conditions, deadlocks, mutex locking contention. | Blocking the event loop with heavy synchronous CPU tasks. |
| **Ideal For** | **CPU-Bound** (video encoding, cryptography, ML inference). | **I/O-Bound** (high-concurrency REST APIs, microservices, chat). |

---

## 2. The Node.js Event Loop (libuv) Architecture

```
   ┌───────────────────────────┐
┌─►│   Timers (setTimeout)     │
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Pending I/O Callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Idle, Prepare             │
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Poll (Retrieve I/O events)│ ◄─── (Incoming network requests / DB responses)
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Check (setImmediate)      │
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Close Callbacks           │
└──┴─────────────┬─────────────┘
                 │
  [ Microtask Queue (process.nextTick, Promise.then) runs between every phase! ]
```

---

## 3. Microtasks vs. Macrotasks Execution Order

1. **Microtasks:** `process.nextTick` (highest priority) and `Promise.then/catch/finally`. Executed immediately after the current operation finishes, before moving to the next Event Loop phase.
2. **Macrotasks:** `setTimeout`, `setInterval`, `setImmediate`, I/O callbacks.

```javascript
console.log('1: Sync Start');

setTimeout(() => console.log('2: setTimeout (Macrotask)'), 0);

Promise.resolve().then(() => console.log('3: Promise (Microtask)'));

process.nextTick(() => console.log('4: nextTick (Microtask)'));

console.log('5: Sync End');

// Output:
// 1: Sync Start
// 5: Sync End
// 4: nextTick (Microtask)
// 3: Promise (Microtask)
// 2: setTimeout (Macrotask)
```
