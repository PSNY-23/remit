# Auth - Antonio (NextAuth.js Setup & Architecture)

## Form-Antonio
① **Create a `<CardWrapper>`** -> It will contain the common layout for login, register, modal (login, registering).
② **If anything that is not going to change & doesn't have interactivity** make them a separate component -> e.g. from header.
③ **Making Form :-**
* Define schema for form in `schema/` directory.
  This schema will be used both in front & backend.
  -> e.g. go into `login/page.tsx` -> `zod` -> `import`
  -> e.g. `login-form-schema`
* Modify the inputfield as per your need & add a `<Button type="submit">Login</Button>`
* Create a handleSubmit function which will automatically have access to formData.
  ```javascript
  const handleSubmit = (values: z.infer<typeof LoginSchema>) => {
      // form data will exactly be like our login schema.
      // like our logic schema of validation.
      axios.post("/api/login", values)
  }
  ```
* **To show addition details of form like, user doesn't exist, invalid credentials, routing out wrong:** We can make a separate `<FormError message="Account doesn't exist" />` which will show the error message & place them just above the button.
* `<FormSuccess />` -> render conditionally.
* **Now we can send the formData/values from handleSubmit to server using server action (other methods are also there):**
  * create actions folder in root, man `login.ts`
  * mark it on `"use server"`.

---

## Edge Compatibility in NextAuth
* Next.Auth strictly uses standard web-apis so it can run on any environment (edge/node.js).
* But some libraries & ORM you use with Next.Auth may be using web-APIs but node-internals which run only in Node environment e.g. Prisma.
* **Problem:** NextAuth has 2 session strategies $ightarrow$ Database session (uses adapters) vs JWT.
  * But store database-session uses adapters which are not edge-compatible. But we can use JWT since it is edge-compatible.

### Solution for the above Problem :-
① **Create an `auth.config.ts` file with your config & export `auth.config`:**
   * Add its adapter (Prisma) only if it can be run on the edge runtime (otherwise remove it).
   * So we make another separate file `auth-config.ts` for that.
   ```javascript
   import Github from "next-auth/providers/github";
   import type { NextAuthConfig } from "next-auth";
   
   export default {
       providers: [Github]
   } satisfies NextAuthConfig;
   ```
② **`auth.ts` :-**
   ```javascript
   import NextAuth from "next-auth";
   import authConfig from "./auth.config";
   import { PrismaAdapter } from "@auth/prisma-adapter";
   import { db } from "@/lib/db";
   
   export const { handlers, signIn, signOut, auth } = NextAuth({
       adapter: PrismaAdapter(db),
       session: { strategy: "jwt" },
       ...authConfig,
   });
   ```
③ **Make sure that middleware is not using import with a non-edge compatible adapter:**
   ```javascript
   import authConfig from "@/auth.config";
   import NextAuth from "next-auth";
   
   export const { auth: middleware } = NextAuth(authConfig);
   ```

---

## How to create a button that redirects but is a Server Component?
* `<Button asChild>`
  `<Link href="/">`
  `</Link>`
  `</Button>`
* **Add Link redirect me hai** $ightarrow$ Link redirect होता है Server side से, तो button onclick से अलग है.
* `<Link>` is not a client component.

---

## Admin Dashboard :- (Server Comp)
`<Layout> -> check auth() -> redirect()`
`<Sidebar>`
* `<Avatar />` $ightarrow$ It must be a **client component** so that it can handle links & user info to highlight conditionally.
* `<Header />` $ightarrow$ It will also be a **server comp.** $ightarrow$ All data will already be fetched in the session -> no need to fetch in the server comp. -> Native promise.
* Inside `<Header>`: `<Input />` allowed, `<Button />` allowed.

---

## Server Components vs Client Components :-
* **Intuition:** Server में हर चीज का access है (database, api), तो ये API नहीं client को code भेजती है, और जो server component render होता है, अब अगर client component है, तो वो तो browser में render होगी, अब अगर client component, server action etc. को call करने लगे, तो: e.g. Server comp, server action etc. को कैसे लेगी? यानी Server comp, Server action etc. को access तो है नहीं.
* Header में Profile Icon on clicked $ightarrow$ We know off because Header have links, so it must be a client component, but now can we render a `<Profile>` component which is a server-component in header (Client Component)?
* The latest React has something called **Server Forms** that can make this form a Server Component.
  ```jsx
  <form action={async () => {
      "use server"
      await signOut();
  }}>
      <Button>Logout</Button>
  </form>
  ```

---

## Implementing Global Session Auth :-
* If user is logged in, then Signin/Signup Page नहीं दिखना चाहिए, सीधे सीधे आप को डैशबोर्ड नहीं दिखाना चाहिए.
* **3.** Go into the layout file of your dashboard or root folder and check for session using:
  ```javascript
  const session = await auth();
  if (!session) {
      router.push("/"); // Server component में router.push नहीं होता!
      // Server component में redirect("/") होता है
  }
  ```

---

## Matching Auth Form :-
* We will use `<AuthForm />` component.
  * It will accept some props: `types = "SIGN_IN" | "SIGN_UP"`.
  * It will accept some props: `type` $ightarrow$ It's a boolean.
* Now using this IsSignIN we can render different heading of the form $ightarrow$ "Sign In" if already signed in, & also the bottom links like, "Sign In if already registered, Don't have an account Signup", etc.
* Also a modal accent, Don't have an account? Signup, etc.

---

## Making Auth Form :-
* We will have a root folder auth under app layout.
* `Header.tsx` $ightarrow$ **Server component**
  `<head>` $ightarrow$ `<Link> logo </Link>` $ightarrow$ `<logo>` $ightarrow$ `usePathname()` $ightarrow$ `usePathname()` $ightarrow$ `<Link> client </Link>` $ightarrow$ `pathname` $ightarrow$ For a link that goes to "/library".
* **NOTE:** When making any component first you have to add some dummy data to make UI. Later you can add the db. We have many types so define them in `types.ts`.
* **Layout.tsx** -> Will have: `logo`, `header text`, `Layout.tsx` $ightarrow$ `layout will have`: `logo, header text`. It will either be Signup / Signin page.
* **Signup/Sign-in page :-**
  * Try with a form-component as children.
  * Both Signin/Signup page must be a **Server Component**, because they accept client components, because they accept inputs, buttons etc.
  * `AuthForm` gets embedded in AuthFrom. So `AuthFrom` is a client component.
