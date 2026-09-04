# Appwrite Tutorial & Integration Notes

## Page 1: Overview & Next.js Context
* **Appwrite** is a Backend-as-a-Service (BaaS) that helps you build backends (e.g., Node backend, Next.js, etc.).
* **Client vs Server Components:**
  * Appwrite works out-of-the-box in **Client Components**.
  * You *can* use it in **Server Components**, but it comes with several challenges. You can use API routes / serverless functions / middleware to interact with Appwrite from the backend.
* **Architecture in Next.js (The 3 Parties):**
  1. **Next.js Client** (User's device - UI)
  2. **Next.js Server** (Vercel server - Backend/API routes)
  3. **Appwrite Server** (Appwrite Cloud - Database & Auth)
* **Communication flow:**
  * Communication from the **Client to Appwrite directly** is straightforward because JWT, session, and `userId` reside on the client side, allowing direct requests to the Appwrite server.
  * **Server Components** cannot directly contact Appwrite easily because they lack access to the client's cookies, `userId`, and Appwrite session context.
  * Therefore, we use an **API key** on the server side to connect securely, and we can use props/middleware to pass cookies and make calls from the client to the Next.js server, which in turn communicates with the Appwrite server.

---

## Page 2: Authentication & Setup
* **User Roles:**
  * Suppose we want an Appwrite project with two types of users: `users` and `admin`.
  * The best way to implement this is using `role: "user"` (default) and `role: "admin"`.
  * Since Appwrite's core user schema is fixed, it provides a `prefs` (preferences) object for storing custom user attributes:
    ```json
    {
      "$id": "user-id",
      "email": "string",
      "name": "string",
      "prefs": {
        "role": "admin"
      }
    }
    ```

* **Step-by-Step Setup:**
  1. Go to the Appwrite console, create a project, and copy your **Endpoint** and **Project ID** into your Next.js `.env` file.
  2. Install Appwrite: `npm i appwrite`
  3. Create a folder called `appwrite` (to contain all Appwrite-related logic).
  4. Authentication requires **no schema**, whereas collections/tables require a predefined schema.
  5. Create an `appwrite.ts` file in that folder and export 3 main utilities: `ID`, `Client`, and `Account`.
     * `Client`: Helps send requests from Next.js (client/server) to Appwrite.
     * `Account`: Handles authentication-related features.
     * `ID`: Generates unique IDs.
  6. **Example Auth Methods:**
     ```typescript
     // Register user
     const register = async () => {
         await account.create(ID.unique(), email, password, name);
     };

     // Login user
     const login = async () => {
         await account.createEmailPasswordSession(email, password);
     };

     // Update user role in preferences
     const updateRole = async () => {
         await account.updatePrefs({ role: "admin" });
     };

     // Get current user and role
     const getUser = async () => {
         const user = await account.get();
         const role = user.prefs.role;
     };
     ```

---

## Page 3: The "Better Way" (Client vs. Server Clients)
* The previous approach works fine on the client side, but it is problematic for **Server Components** because `account.get()` requires access to request cookies.
* **The Better Approach:**
  * Appwrite provides three core credentials: **Project ID**, **Endpoint**, and **API Key**.
  * Using these, we can set up **two separate clients**: one for regular users (client-side) and one for admin/server operations.

* **Client Setup Structure:**
  * **Appwrite Client (for Users / Auth):**
    ```typescript
    const client = new Client()
        .setEndpoint('...')
        .setProject('...');
    export const account = new Account(client);
    ```
  * **Appwrite Server Client (for Admin / Databases):**
    ```typescript
    const serverClient = new Client()
        .setEndpoint('...')
        .setProject('...')
        .setKey(API_KEY); // Uses API Key for server-side privileges
    export const db = new Databases(serverClient);
    ```

* **Important Rule:**
  * **Always remember:** For authentication, always use the **Client SDK** (`account`), never the Server-Client (Admin API Key).

---

## Page 4: Databases & Service Structure
* **Database Concepts:**
  * When you create a database in Appwrite, you receive a **Database ID** and collection IDs where you can store all your application data.
* **Structuring Collections:**
  * Just like a single database in MongoDB can hold multiple collections (tables), an e-commerce app requires core collections like **Products**, **Orders**, and **Cart**.
* **Example Service Implementation (`appwrite/products.services.ts`):**
  ```typescript
  class ProductServices {
      async getProducts() {
          return await databases.listDocuments(
              DatabaseID, 
              CollectionID, 
              [Query.limit(10)]
          );
      }
  }

  export const productServices = new ProductServices();
  ```
