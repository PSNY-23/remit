# Node.js Advanced Concepts

## Page 2: Architecture & Process vs Thread
* **100% JS** $ightarrow$ JS Code
* **Node.js** $ightarrow$ Node also gives some wrappers over C++ libraries (eg: http, fs, path, crypto).
* **V8 (30% JS, 70% C++)** & **Libuv (100% C++)**

### Thread and Process
* **A process** = a running program.
  * Every time you run a Node.js app, a new process is created.
  * This process has $ightarrow$ memory, call stack, event loop.
* **eg:** Think of it like a kitchen where all the ingredients to cook the food is available.
  * `↳` It has it's own memory & resources.
  * `↳` One process (kitchen) can't directly access another kitchen's food or tools.

* **Thread:** It's like a chef working in that kitchen.
  * `->` Thread executes codes.
  * `->` A process can have one or multiple threads.
  * `->` Because Node.js is single threaded, it has one main thread.
  * Main thread executes codes very fast but only one at a time.

---

## Page 3: Worker Threads, OS Scheduling & Event Loop
* `->` When the main thread get some heavy task, they don't wait for the task to finish.
* `->` Main thread ask for **helper** to watch for that task & main thread starts cooking other food.

### Worker Thread :-
* Sometimes the tasks are so heavy that, main thread want to delegate that task to another process with another main thread of that process called (worker thread).
* `Node.js app (runs) $ightarrow$ Process $ightarrow$ Process has a units to execute code called thread. (Main thread + helper/thread pool).`

* `->` Now in a cpu/machine, there can be multiple processes running, & for each process there would be a thread. But Node.js is single threaded - so how will it execute it?
  * **OS Scheduler** $ightarrow$ decides which thread should be processed.

### Event Loop :-
* It's like a **smart manager**, who watches a list of orders (eg: reading a file, waiting for user clicks).
* `->` decides what main thread should do next.
* `->` keeps things moving smoothly & efficiently.

---

## Page 4: Kitchen Analogy Summary
* **Process** = Kitchen
* **Main thread** = Chef (master)
* **Libuv Thread pool** = Helper chef
* **Worker thread** = New kitchen
* **Event loop** = Kitchen manager
