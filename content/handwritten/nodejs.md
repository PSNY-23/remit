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


# Node.js Notes

## Page 83: Event Loop Deep Dive & Runtime Architecture
* **Event Loop Deep Dive :-**
  * Phases of event loop.
  * `setTimeout`, `setImmediate`, `process.nextTick` vs Promises.
  * Microtask queue vs Callback queue.

* **Runtime :-** It's an environment which provides all the necessary components in order to run a JS program.
  * **Runtime for JS (Browser):** V8 Engine (Heap, Call stack), Web APIs (DOM, console, fetch, etc.), Callback queue / Macrotask queue, Microtask queue, Thread pool, C++ Bindings.
  * **Runtime for Node.js:** V8 Engine, C++ Bindings, Thread pool.

* **History :-**
  * `->` JS was made to add interactivity in browsers only, initially there was a JS-engine to run JS in browsers.
  * `->` Chrome thought that engine is slow so made V8-engine to run JS. But V8 was embedded in the browser only.
  * `->` V8 was taken from Chrome & Node.js was developed.

* **Compilation vs Interpretation :-**
  * **Compilation:** Code $ightarrow$ [Compilation] $ightarrow$ Machine code (0/1) $ightarrow$ Code is executed.
  * **Interpreter:** Code $ightarrow$ Take one line of code, compile it & execute it.
  * **JIT (Just-In-Time) Compilation:** It's a hybrid approach.
    * `->` वैसे तो starting में interpretation होता है but repetitive task आता है तो उसे (Hot code) कहते है, So those code gets compiled to improve performance. (Initially, interpretation happens, but if a repetitive task appears it is called hot code, so those codes get compiled to improve performance.)

---

## Page 84: V8 Engine Internal Execution & Memory Allocation
* **(1) node app.js**
  * `->` Node.js C++ core wakes up & loads the file.

* **(2) Parsing & AST :-**
  * `->` V8 engine reads entire code as a string.
  * `->` It tokenizes it! Breaking it into multiple chunks.
  * `->` Creates **AST (Abstract Syntax Tree)**.
    * `↳` It is used to understand code before execution.

* **(3) Interpretation : Ignition**
  * `->` V8 compiles: `AST` $ightarrow$ `Bytecode` $ightarrow$ `Ignition Interpreter` $ightarrow$ Starts execution immediately. (But not optimized)

* **(4) Profiler & JIT Compilation (Turbofan)**
  * `->` While bytecode is running, Profiler watches it.
  * `->` If a fn. is used repeatedly (**hot function**):
    * `↳` It's sent to Turbofan for optimization.
    * `↳` Turbofan compiles: `hot code` $ightarrow$ `Machine code`.
  * **Summary of states:**
    * `Cold code` $ightarrow$ Bytecode
    * `Hot code` $ightarrow$ Machine code
    * `Messy code` $ightarrow$ Back to bytecode (**de-opt**)

* **(5) Memory Allocation :-**
  * **Heap:** Large, dynamic memory for objects, arrays, closures.
  * **Stack:** Small, fast memory for fn calls & primitives.
  * V8 manages memory + garbage collection.

---

## Page 85: Execution Context & Event Loop Coordination
* **(6) Execution Context Creation :-**
  * Each time JS code runs it creates an Execution Context (EC).
  * **Types of EC :-**
    1. **Global EC:** First created.
    2. **Functional EC:** Created every time a fn runs.

* **Phases of EC :-**
  1. **Creation phase:** `this`, arguments & memory setup $ightarrow$ **Hoisting**.
  2. **Execution phase:** Line-by-line code execution.

* **Call Stack & Event Loop Coordination :-**
  * **Call Stack:** One fn at a time code is executed. Follows **LIFO** (Last-in, First-out).
  * **Web API / Node API:** For async stuff like `setTimeout`, `fs.readFile`, `fetch`.
    * `->` These are C++ code that helps run async operations.
    * `->` These APIs are not in JS, they are provided either by Browser or Node API.

* **Callback Queue / Task Queue / Microtask Queue :-**
  * When we encounter any async operation, it's handed to Web API/Node API by the V8 engine.
  * Now we can divide the async operations into two types!
    1. **Timer related** $ightarrow$ `setTimeout`, `setInterval` $ightarrow$ **Callback Queue** (Macrotask queue)
    2. **Promises** $ightarrow$ `Catch`, `then`, `finally` $ightarrow$ **Microtask queue**

---

## Page 86: Event Loop Behavior & Examples
* **NOTE / Example:**
  ```javascript
  setTimeout(() => {
      console.log("timeout done");
  }, 3000);
  ```
  * The web api waits/starts a timer for 3 sec, उसके बाद (3sec के बाद) इट puts this fn `(() => console.log("-"))` into **callback queue**.
  * **V8 Engine:** In this case, the web API doesn't wait for anything & directly puts it in **microtask queue** *(Note: or callback queue depending on timer context)*.

* **Code Example Execution Flow:**
  ```javascript
  console.log("Pankaj"); // Immediately print hoga
  console.log("Kumar");
  setTimeout(() => {
      console.log("Tak");
  }, 5000);
  ```
  * But ये async है, तो 5 sec लेगा but खाली नहीं 6 sec पर call stack खाली हो तो भी 5 से के बाद भी wait करता रहेगा जब call stack खाली होगा तभी print होगा। (Since this is async, it will take 5 secs, but even if the call stack is empty at 6 seconds, it will wait until the call stack is completely empty before printing.)
  * 5 sec बाद Browser API/Node fn को Callback queue में डाल देता है जहाँ पर fn wait करता है। (After 5 sec, Browser API/Node puts the fn into the Callback queue where the fn waits.)

---

## Page 87: Streams & Buffers
* **Streams & Buffers :-**
  * Suppose we have a 4GB file, to read we have fs.read-file. But what if we have some file that is 5GB, reading & writing or using express server will require a large amount of space. But what if we could break the file into chunks & then send it?
  
  ```javascript
  const readableStream = fs.createReadStream("./file.txt", "utf-8");
  readableStream.on("data", (chunk) => {
      ws.write(chunk);
  });
  readableStream.on("end", () => {
      console.log("read");
  });
  ```
  * `fs.createReadStream`
  * `fs.createWriteStream`

* **Pipes :-**
  * If we have to do two things with stream like, read, write, zip etc. we can chain them.
  * `readableStream.pipe(writableStream).pipe(zip)`

---

## Page 88: Node.js Code Evolution (Modules)
* **ES Modules vs CommonJS :-**
  * **CommonJS:**
    * Synchronous.
    * Each file is treated as a module.
    * Variable, fn, classes etc are not accessible to other files by default.
    * Explicitly tell the module system which part of your code should be exported via `module.exports` or `exports`.
    * For importing use `require()`.

* **Note: What is a module system?**
  * `->` It lets you split your code into reusable pieces.
  * `->` This reusable piece is called a **module**.

* **Module Systems are of Two Types:**
  1. **CommonJS** $ightarrow$ Synchronous $ightarrow$ Node.js (default) $ightarrow$ `require`/`module.exports`.
  2. **ES Modules** $ightarrow$ Asynchronous $ightarrow$ Browsers & Node $ightarrow$ `import`/`export`.

* **Synchronous nature of CommonJS:**
  ```javascript
  const math = require('./math');
  console.log("Pankaj");
  ```
  * जब तक module पूरी तरह load ना हो जाये, तब तक execution blocked रहेगा, once loaded तभी आगे बढ़ेगा। (Execution remains blocked until the module is fully loaded, and only proceeds once loaded.)

* **Asynchronous nature of ES Module:**
  ```javascript
  import math from "math";
  ```
  * Doesn't load immediately.
  * It parses the whole module first, & then loads all dependency asynchronously in background.
  * It has a top level await by default so execution all thing के import के बाद ही होगा। (Execution happens only after all imports are resolved due to top-level await.)

---

## Page 89: Importing JSON & Built-in Modules
* **Importing JSON :-**
  * When we import any JSON data/files, the `require()` fn automatically converts it into an object.

* **Built-in Modules :-**
  * **Types of modules:**
    * **Local modules:** You write & import it.
    * **Built-in modules:** Given by Node.js itself (e.g., `fs`, `http`).
    * **Third party modules:** npm ie packages.

* **Important built-in modules :-**
  * Path
  * Events
  * fs
  * Streams
  * http.

* **Path Modules :-** Provides utilities for working with files/dir.
  * `const path = require("node:path");` OR `require("path")`
  * `console.log(__dirname);` $ightarrow$ gives you full path of directory or file.
  * `console.log(__filename);`
  * `console.log(path.basename(__filename));` $ightarrow$ exact name of file/folder.
  * `console.log(path.basename(__dirname));`
  * `console.log(path.extname(__filename));` $ightarrow$ gives you the extension of file. Directory has extension empty string होती है (is empty string).

  * `console.log(path.parse(__filename));`
    * `↳` Returns an object:
      * `root: '/'`
      * `dir: '/Users/documents/cours/node'`
      * `base: 'index.js'`
      * `ext: '.js'`
      * `name: 'index'`

---

## Page 90: Path Formatting & Callbacks
* `path.format(path.parse(__filename))` $ightarrow$ `/Users/docs/node/index.js`
* `path.isAbsolute(__filename)` $ightarrow$ `false` / `true`
* `path.isAbsolute("./data.json")` $ightarrow$ `false`
* `path.join("folder1", "folder2", "folder3")` $ightarrow$ `folder1/folder2/folder3`
* `path.join(__dirname, "/data.json")`

* **Callbacks :-**
  * **IN JS $ightarrow$ Fn are first class objects** means:
    * It can be passed as an argument to a fn.
    * It can be returned as a value.
  * **HOF $\leftarrow$ Callback**
    ```javascript
    function greet(name, logger) {
        const msg = `Hello ${name}`;
        logger(msg);
    }
    ```
* **Typing of Callbacks:**
  * **Sync callback:** gets executed immediately.
  * **Async cb eg:**
    ```javascript
    function callback() {
        document.getElementById('demo').innerHTML = "helloworld";
    }
    document.getElementById('btn').addEventListener("click", callback);
    ```
    * `↳` ये callback button click पर ही चलेगा। (This callback will only run on button click.)

---

## Page 91: Events Module & Character Sets/Encoding
* **Events module :-**
  * It helps us to work with events.
  ```javascript
  const EventEmitter = require("node:events");
  const emitter = new EventEmitter();

  emitter.on("order-pizza", (size, topping) => {
      console.log(`Order Placed! for Pizza ${size} ${topping}`);
  });

  emitter.emit("order-pizza", "large", "sweet");
  ```
  * `emitter.emit(...)` $ightarrow$ This will match the emitter.on handler which will run callback.
  * Parameters passed to `.emit()` are passed as arguments to callback automatically.

* **Character Sets & Encoding :-**
  * **Characters in Binary:**
    * Character $ightarrow$ Number $ightarrow$ Binary (Character Code)
  * **Character Sets:** Predefined lists of characters represented by numbers. (e.g., ASCII)
  * **Character Encodings:** Dictates how to represent a no. in a character set as binary data before it can be stored in a computer.
    * It dictates how many bits to use to represent the no.
    * **Example of character encoding system is UTF-8.**
    * **UTF-8** states that characters should be encoded in bytes (8 bits = 1 byte or 1).
    * `eg:` `4` $ightarrow$ `100` $ightarrow$ `00000100`
    * `V` $ightarrow$ `86` $ightarrow$ `01010110`
  * Images & videos are also encoded & stored in binary format.

---

## Page 92: FS Module & FS Promises
* **fs module :-**
  ```javascript
  const fs = require("node:fs");
  
  // Synchronous read
  fs.readFileSync("./file.txt", "utf-8");
  ```
  * `↳` जब तक पूरा file read नहीं होगा, next line पे नहीं जायेगा। (Until the entire file is read, it won't move to the next line.)
  * `fs.readFile` (Asynchronous)
  * `fs.writeFileSync`
  * `fs.writeFile`

* **fs Promise module :-**
  ```javascript
  const fs = require("node:fs/promises");

  fs.readFile("file.txt", "utf-8")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
  ```
  * This won't block the execution of code below this fn. because it's async in nature.
