# Supabase Notes

## Page 1: Setup & Data Querying
1. **Create a Supabase Project** and make a table + add some demo data. + RLS Policy.
2. `npx create-next-app@latest -e with-supabase`
   * It will be pre-configured with:
     (i) Cookie-based Auth
     (ii) TypeScript
     (iii) Tailwindcss
3. Remove `.env.example` to `.env.local` & add Supabase variables.
4. **Query data :-**
   * `app/instruments/page.tsx` $ightarrow$ `import { createClient } from "@/utils/supabase/server"`
   * This will select all the rows from the instruments table & order them.
     ```typescript
     const supabase = await createClient();
     const { data } = await supabase.from("instruments").select();
     ```

* **Better Way to organize :-**
  1. Make a file separate to make a supabase client:
     ```typescript
     import { createClient } from "@supabase/supabase-js";
     export const supabase = createClient(
         // Give project-url / api key.
     );
     ```
  2. So to any component:
     ```typescript
     await supabase.from('tasks').insert(data).single();
     //         ↳ tablename
     ```

* **CRUD operations summary:**
  * **READ:** `await Supabase.from("todo").select('*')`
  * **CREATE:** `await supabase.from("todo").insert({...})`
  * **UPDATE:** `await supabase.from("todo").update({...}).eq("id", 1)`
  * **DELETE:** `await supabase.from("todo").delete().eq("id", 1)`
  * `{ data, error, count, status } = await supabase.from(...).select()`

---

## Page 2: Google OAuth & Authentication
* **Authentication with Google OAuth :-**
  1. Make an app in google.console & put the **Authorized Domain** = `<Project-ID>.supabase.co`
  2. **Auth methods:**
     * Signup:
       ```typescript
       const { data, error } = await supabase.auth.signUp({
           email: "Sam@gmail.com",
           password: "yourpassword"
       });
       ```
     * Signin with password:
       ```typescript
       const { data, error } = await supabase.auth.signInWithPassword({
           email: "...",
           password: "..."
       });
       ```
     * Signout:
       ```typescript
       await supabase.auth.signOut();
       ```
     * Get User:
       ```typescript
       const { data: { user } } = await supabase.auth.getUser();
       ```
     * Signin with OAuth (Google):
       ```typescript
       const { data, error } = await supabase.auth.signInWithOAuth({
           provider: "google"
       });
       ```
       * `↳` SignIn में `redirectTo` भी लगा सकते हैं ताकि login के बाद उस page पर चले जाए। (Can also add `redirectTo` in signIn so that it goes to that page after login.)
       * **eg:**
         ```typescript
         await supabase.auth.signInWithOAuth({
             provider: "google",
             options: { redirectTo: "https://w..." }
         });
         ```

  3. **Callback :-**
     * `app/auth/callback/routes.ts`
     * `↳` Copy the code from Supabase docs.
     * `=>` This callback will set the cookies after login.
