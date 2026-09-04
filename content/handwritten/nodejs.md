# Problems before Node.js

1. **CERN HTTPd (1990)**
   * First web server
   * Simple text file sharing so easy
   * Few users only

2. **Multi-Processing ERA (1990s)**
   * If multiple people are visiting your site at same time, (concurrency)
   * Your application (server) is running on a thread
   * One thread can be executed on only one core at a time.
   * If multiple people are making req, that req will be handled by that single thread/cpu core
   * & if the processing takes time, other user will need to wait.
   * To solve this problem, we started using multi threading
   * Here we create a new thread for each user (forking). But it is also causing a problem.
   * Each new thread will take nearly 1-3 MB of RAM, if 10000 concurrent user, you need 30 GB RAM, which was very tough for that time.

3. **The threading ERA (1995-Present)**
   * Instead of full clone of the process, Apache HTTP server used "worker threads".
   * Worker threads were much lighter than cloning whole process.
   * This worked for a while but soon **[C10K]** Problem came. This worker thread couldn't solve that problem as well.

4. **Event-Driven shift : Nginx (2004) :-**
   * Nginx solved **[C10K]** Problem.
   * It used Async/event-driven model.
   * Instead of a worker thread for each user, Nginx used a single "Event loop", extremely fast.

---

# Why Was Node.js Invented

1. **Node.js was created in 2009 by Ryan Dahl to solve a C10k Problem :- (1999)**
   * Problem, where traditional server were inefficient at handling huge simultaneous connection.
   * Single server can't handle 10K concurrent connection easily.

2. **Light-bulb moment for Ryan Dahl.**
   * Dahl was trying to make a Progress bar for file upload.
   * Smaller file → HTTP
   * larger file → FTP
   * The status of upload was required so queried using long Polling. The downside of this was that server was blocked (as Ruby had single thread). No other req could be handled during this uploading.
   * Dahl was searching for Solution in all other language.
   * He found that, JS already was handling clicks, events without freezing the page.
   * Google released V8 which was extremely fast at converting JS to machine code.
   * Now instead of creating a new library, Dahl combined 3 things:
     1. C++ binding (The glue)
     2. V8-engine
     3. libuv (C-library)

---

# How is Node.js Executed :-

* **CPU only understand machine code.** It means that the application that we are starting and turn off is moved from SSD/Disk to the DRAM must be machine code.
* **CPU don't understood even machine code**, but only the instruction list that it already has.
* **When we run "node index.js"**
  1. Node.js executable → loaded into → DRAM
     * Node.js executable = V8 engine + Node Runtime + libuv
  2. A node.js Process starts. (a single thread created)
  3. server.js is loaded in RAM, now you have both node.js and server.js in RAM.
  4. Node.js handover server.js to the V8-engine.
     * V8 (Parser) → Parses JS into AST
     * Ignition (Interpreter) → AST into bytecode
     * Starts executing bytecode
     * *(This all happens on node.js single thread.)*

---

# Components of node.js :-

Node.js
* **Node.js executable** (V8 engine)
* **libuv:** Handles async I/O (fs, network, timers)
* **Node.js APIs**

### 1. V8 engine
* **V8 - parser →** JS to AST
* **Ignition - Interpreter →** AST to bytecode
  * Executes bytecode line by line
  * Provides immediate execution without JIT.
* **Turbofan (JIT compiler) →**
  * Detects hot code (frequently executed).
  * bytecode to machine-code
* **Profiler →**
  * Monitors which functions/loop are executed often
  * Determines which code Turbofan should compile.
* **GC (garbage collection)**
  * manages JS memory automatically
  * clears up unused object in RAM

### 2. libuv (Event loop) + (callbacks)
* It's a C++ library
* It was integrated to handle async I/O
* It's a C-library
* **libuv** provides a event loop, that manages heavy tasks behind the scene.
* Once task is complete, libuv queues a V8-event that triggers your JS callback with the resulting data. (event-driven)

### 3. C++ bindings (The glue)
* JS can't talk to computer's hardware like fs.
* Dahl wrote C++ bindings which act as a bridge.
* Eq: `fs.readFile()` is converted into System-level command that OS understands by C++ binding.
* Once the OS executes the command, the result is again passed back into the V8-engine, so your code can use the result.
