# Working with Tailwind CSS v4

To make a design system we need to configure what should be the color, size etc of different things on different modes light/dark.

* **eg: foreground, background color**
  * `Primary`, `Primary-foreground` color
  * `Secondary`, `secondary-foreground` color
  * `muted`, `muted-foreground` color
  * `accent`, `accent-foreground` color

* **Semantic Color Roles:**
  * `background` $ightarrow$ for the color of the page.
  * `foreground` $ightarrow$ for color of text/icons.
  * `primary` $ightarrow$ for elements like buttons etc. The website must have a primary color.
  * `primary-foreground` $ightarrow$ But if the background color of the button is `Primary`, what should be the color of the text/icon which is in button? It should be `"primary-foreground"`.

* **Secondary / Secondary-foreground :-**
  * `Primary` $ightarrow$ main action, call to action, brand logo, high attention, eg: submit button, links, highlights, active etc.
  * `Secondary` $ightarrow$ medium attention, cancel button, tags, info.

* **Accent vs Muted :-**
  * `accent` $ightarrow$ slightly bold, stylish, eg: active UI, toggle, pressed, hover.
  * `muted` $ightarrow$ low visibility, background, disabled etc.
  * `accent-foreground` $ightarrow$ means agar background ये है तो इसके ऊपर आने वाले element का color accent foreground होना चाहिए। (Means if this is the background, then the color of the element coming over it should be accent foreground.)

---

## Getting Design Colors from Shadcn Frame
1. To get design colors already made is from shadcn frame.
2. Go to shadcn "theme" tab.
3. Copy the whole colors:
   ```css
   :root {
       --background: oklch(...);
       --foreground: oklch(...);
       --primary: ...
   }
   .dark {
       --background: ...
       --foreground: ...
   }
   ```
   *(These are corresponding colors of the root colors above for dark mode).*

---

## Applying in `global.css` (Next.js Project)
You have two ways to apply the light & dark theme:
1. **Media query (automatic based on system preference):**
   ```css
   @media (prefers-color-scheme: dark) {
       :root {
           --background: ...
           --foreground: ...
       }
   }
   ```
   * `->` Use this method when the browser automatically assigns the dark/light mode without you toggling them. **(Not Recommended)**.
2. **Custom Variant (manual toggle):**
   ```css
   @custom-variant dark (&:is(.dark *));
   ```
   * `->` Use this when you want a toggle button to toggle theme manually.
   * `->` You don't need to write this because when you install `next-theme` it automatically comes in your CSS.

---

## Using Copied Shadcn Colors in Tailwind v4
1. **When using `media (prefers-color-scheme)`:**
   * `@import "tailwindcss";` $ightarrow$ Imports all the default tailwind utility classes.
   * `:root { ... }` $ightarrow$ Exactly like what we copied from the shadcn.
   * `@media (prefers-color-scheme: dark) { :root { ... } }` $ightarrow$ Dark mode colors yahan par paste kar do. (Paste dark mode colors here.)

2. **Mapping to Tailwind Utilities (`@theme inline`):**
   * But this is not the end, we have just defined the CSS variables, we need to map them to the tailwind's color utility (using variable name-spaces).
   * **Name-spaces $ightarrow$ Utility-classes:**
     * `--color-*` $ightarrow$ color utilities like `bg-red-500` etc.
     * `--font-*` $ightarrow$ font family utilities.
     * `--text-*` $ightarrow$ font-size utilities.
   * **So, map the css variable to tailwind utility:**
     ```css
     @theme inline {
         --color-background: var(--background);
         --color-foreground: var(--foreground);
         --color-muted-foreground: var(--muted-foreground);
     }
     ```

3. **When using `@custom-variant dark` (Manual Theme Toggle):**
   * `@import "tailwindcss";`
   * `:root { ... }` $ightarrow$ Same as previous one (direct from shadcn, no modification).
   * `.dark { ... }` $ightarrow$ Directly from shadcn.
   * `@theme inline { ... }` $ightarrow$ Exactly as you did in the previous part.
   * **Just add this line:**
     ```css
     @custom-variant dark (&:is(.dark *));
     ```
     * `↳` जो कि `next-theme` के installation में सही जगह है। (Which is correctly placed during `next-theme` installation.)
