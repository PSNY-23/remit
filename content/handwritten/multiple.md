# Multiple Topics Compilation

## 1. How to Obtain OAuth Credentials, Google
* Go to `console.cloud.google.com/apis` [cite: 1].
* Select a project or make a project & give it a "name" [cite: 1].
* Go to the **Credentials** section in the sidebar [cite: 1].
* Select **+ Create Credentials** from the Navbar [cite: 1].
* Select **OAuth Client ID** in the pop-up modal [cite: 1].
* Give Consent (select External) [cite: 1].
* In App registration:
  * App name, Email, logo [cite: 1].
* In scopes: you allow which kind of information the third-party app can get (select email & profile info) [cite: 1].
* Again go to the credentials section from the sidebar.
* Authorized redirect URI: `http://localhost:3000/api/auth/callback/google` [cite: 1].
* Copy **Client ID** and **Client Secret** [cite: 1].

---

## 2. Rate Limiting

**Prevents from :-**
* DDoS attack [cite: 2]
* API abuse [cite: 2]
* Server overload [cite: 2]
* Distributed Denial of Service (a bunch of computers, often hacked ones called bots, overflood a server/network) [cite: 2]

**Express Implementation :-**
* `npm i express-rate-limit` [cite: 2]
* ```javascript
  const rateLimit = require("express-rate-limit");
  const limiter = rateLimit({
      windowMs: 1 * 60 * 1000, // 1 min
      max: 5, // Limit each IP to 5 requests per windowMs
      message: "Too many requests, try again later"
  });
  app.use('/api', limiter); // used as a middleware
  ``` [cite: 2]

---

## 3 & 4. Dates

* `date = new Date()` -> Date object (Type: Date object). But in console it won't show you an object, because it automatically applies `date.toString()` [cite: 3].
  So it will be shown like: `"Thu Apr 18 2024 18:10:00 GMT+0530"` [cite: 3]

**Types of date values in JS :-**
* `new Date()` -> Date -> Actual date object [cite: 3]
* `"2024-04-18T10:30:00.00Z"` -> string -> From Input, APIs [cite: 3]
* `1713444600000` (ms since epoch) -> number -> Timestamp (Unix) [cite: 3]
* ISO String -> `"2024-04-18T10:30:00.00Z"` -> Universal format [cite: 3]
* Local string -> `"10/04/2024"` -> Display only [cite: 3]

**Conversion between diff formats :-**
* `date.toString()` => `"Thu Apr 18 2024 18:10:00 GMT+0530"` -> `1744994564467` [cite: 3]
* `date.toLocaleString()` => `17,44,99,45,64,464`, `18/4/2025, 10:16:07 PM` [cite: 3]
* `date.toDateString()` => `"Thu Apr 18 2024"` [cite: 3]
* `date.toJSON()` or `date.toISOString()` => `"2025-04-18T16:49:53.604Z"` [cite: 3]
* `date.toLocaleDateString()` => `'4/18/2025'` [cite: 3]
* `date.toLocaleTimeString()` => `'10:21:29 PM'` [cite: 3]
* `date.getFullYear()` => `2025` (type = number) [cite: 3]
* `date.getMonth()` -> [cite: 3]
* `date.getDay()` => `5` (0 -> Monday, 2 -> Tue, 3 -> Wed) [cite: 3]
* `getDate` => `18` (type = number) [cite: 3]
* `getHours` => `22` (10 बजे रात) number [cite: 3]
* `getMinutes` => `35` (10:35) [cite: 3]
* `getSeconds` / millisecs -> [cite: 3]
* `getTime` => `1744995934480` (number) [cite: 3]

**Setting / manipulating time :-**
* `date = new Date()`
  `date.setFullYear(2028)` -> यह original date के year को 2028 कर देगा => बाकी चीजें वैसी की वैसी रहेंगी: `"Thu Apr 18 2028 22:42:16 GMT+0530 (IST)"` [cite: 4]
* `date.setFullYear()`, `setMonth(1)` (Here 1 is Feb, 0 is Jan. -ve is valid), `setDate`, `setTime`, `setHours/Min/sec/ms` [cite: 4]
* `Date.now()` => `174482967898` (miliseconds) [cite: 4]
* `new Date()` => `"2025-04-18T17:19:58.759Z"` (This is similar to `new Date().toISOString()` or `new Date().toJSON()`) [cite: 4]
* **When you need to compare time :-**
  `const expiresAt = Date.now() + 60 * 1000` (after 1 min) [cite: 4]
  `Since Date.now()` gives you miliseconds so it's best format to compare. [cite: 4]
  `Date.now()` => `14678965423` [cite: 4]
  `new Date().getTime()` [cite: 4]
  बस यही दो तरीके हैं ms gain करने के। [cite: 4]
* **Prisma :-**
  It uses ISO string dates. [cite: 4]
  `createdAt DateTime @default(now())` -> `new Date().toISOString()` -> `"2025-04-18T10:27:45.090Z"` [cite: 4]

---

## 5 - 8. Zod

① `z.string()`
* `z.string().min(5)`, `max(5)`, `length(5)`, `email()`, `url()`, `emoji()`, `uuid()`, `nanoid()`, `cuid()`, etc. [cite: 6]
* `includes(string)`, `startsWith(string)`, `endsWith()` [cite: 6]
* `datetime({ local, offset, precision })` -> `YYYY-MM-DD` / `Iso string` -> `HH:mm:ss` [cite: 6]
* `z.string().min(5, { message: "Must be 5 or more characters long" })` [cite: 6]

② Data types in Zod :-
* `z.string()` -> string [cite: 5]
* `z.number()` -> numbers [cite: 5]
* `z.boolean()` -> true/false [cite: 5]
* `z.date()` -> date objects, not string date, you must use `new Date("string")` before `Parse()` [cite: 5]
* `z.symbol()` [cite: 5]
* `z.undefined()` -> only allows undefined [cite: 5]
* `z.null()` -> only allows null [cite: 5]
* `z.void()` -> accepts anything, but no return values [cite: 5]
* `z.any()` -> accepts anything, but no validation of data [cite: 5]
* `z.unknown()` -> accepts anything, but always throws error if any values is passed [cite: 5].
* `z.never()` -> accepts nothing, always throws error if any value is passed [cite: 5].

③ Coercion :-
* Coerces & converts number, null, undefined, boolean to "String". [cite: 5]
* ```javascript
  const testSchema = z.coerce.string()
  testSchema.parse(12) // "12"
  ``` [cite: 5]

④ Literals :-
* `z.literal("admin")` -> allows only one specific value. [cite: 5]
* `roleSchema = z.union([z.literal("admin"), z.literal("user"), z.literal("guest")])` [cite: 5]

⑤ Important Zod methods :-
* `schema.parse(data)` -> Returns validated data/error. If data fails schema, throws ZodError [cite: 7].
* `schema.safeParse(data)` -> Always returns `{ success: boolean, data?: parsedData, error?: ZodError }` [cite: 7].
* `z.object({ name: z.string() })` -> to define object schemas [cite: 7].
* `schema.partial()` -> makes all fields optional [cite: 7].
* `schema.pick({ name: true, email: true })` -> picks only selected fields [cite: 8].
* `schema.omit({ age: true })` -> removes selected fields [cite: 8].
* `schema.merge(schema2)` -> merges two schemas [cite: 8].
* `schema.extend({ role: "user" })` -> extends or adds new fields to existing schema [cite: 8].
* `z.string().transform(val => Number(val))` -> transform & refine [cite: 8].

---

## 9. Multer

* **What is Multer?** Multer is a Node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
* **Core Behavior:** Multer adds a `body` object and a `file` or `files` object to the request object (`req`). The `body` object contains text field values, while `file`/`files` contain the uploaded files. Note that Multer will not process forms that are not `multipart/form-data`.

**Basic Setup & Usage :-**
* Install dependencies: `npm i express multer`
* Single file upload middleware:
  ```javascript
  const multer = require('multer');
  const upload = multer({ dest: 'uploads/' });

  app.post('/single', upload.single('profile'), (req, res) => {
      try {
          res.send(req.file);
      } catch(err) {
          res.status(400).send(err);
      }
  });
  ```

**Disk Storage Configuration :-**
For complete control over file destinations and custom filenames, use `multer.diskStorage`:
```javascript
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
```

**Multiple Files Upload :-**
* Use `upload.array(fieldname, maxCount)` to handle multiple files under a single field name, which stores results in `req.files`:
  ```javascript
  app.post('/bulk', upload.array('profiles', 4), (req, res) => {
      try {
          res.send(req.files);
      } catch (error) {
          res.status(400).send(error);
      }
  });
  ```
