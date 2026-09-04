# npm vs Pnpm vs Yarn vs Bun

## Page 1: npm, Yarn, and pnpm

* **(1) npm :-**
  * -> It works on the principle of primary & secondary dependency.
  * -> It sees `package.json` file, which by default has the listing in alphabetical order.
  * -> Recursively installs packages :-
    * mean if `package.json` has a dependency => `convex`
    * It will install convex & then see if convex has any other dependency if yes it will install that too & then will keep going to the end.
  * -> The packages that are direct descendents of `node_modules` are called primary / flat-spot.
  * -> npm try to make the deps tree as much flat as possible but sometime there is some complex cases.
    * where nesting will happen.
    * **eg:** `node_modules`
      * `-> express` (now express needs -> `example1@1.0.0`)
      * `-> cors` (cors needs -> `example1@2.0.0`)
    * Now they both can't be in the flat-spot, so, whichever was installed first will take the flat-spot & the other will be in the `node_modules`
      * `-> cors`
        * `-> node_modules`
          * `-> example1@2.0.0`

* **(2) Yarn :- by facebook (Better for large projects)**
  * -> offline_installation : It has a local cache so don't need to download each time.
  * -> Parallel downloads (fast).
  * -> workspaces.
  * -> `yarn.lock` Produce exact `node_modules` across all machine / environment.

* **(3) Pnpm :- (Better for modern monorepos)**
  * -> npm & yarn uses *(scribbled)*
  * **Pnpm uses -> symlinked global store**
  * -> Efficient disk storage (Global store).
  * -> faster installation as no need to re-download.
  * -> It also supports workspaces.
  * -> strict dependency resolution.

---

## Page 2: Bun and Comparisons

> **Note:** npm 7+ also do Parallelization & Caching, but yarn & pnpm still has usecase because:
> * Yarn -> offline cache
> * pnpm -> global store.

* **(4) Bun :- (most modern)** 
  * Written in **zig** (extremely fast system language) -> *Much faster than JS/TS which is used in Yarn/Pnpm.*
  * -> Super-fast installation, because it doesn't uses the `node_modules` in traditional sense.
  * -> Bun has it's own Bundler for JS which is optimized for speed.
    * other uses separate tools for package manager & bundling eg: `(npm + webpack)`
      * npm -> for Package Manager
      * webpack -> for Bundling
    * Bun combines these process. When you install a package, it immediately bundle & serve it.
  * -> There is no `node_modules` folder initially.
    * Dependency installation happens in **global bun store**.
    * Then dependencies are resolved.
  * -> Bun has native support for ESM & TypeScript, but for other they need to use babel or TS-compiler that will add another overhead.
    * **eg.** `(npm + webpack + babel)` **vs** `Bun अकेला ही` *(Bun alone)*
