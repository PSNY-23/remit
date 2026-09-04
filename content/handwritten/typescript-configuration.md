# TS configuration

1. `target: ES2017` => Targeted JS version जिसमें code compile होगा
2. `lib: [dom, dom.iterable, esnext]`
   -> which set of libraries to consider/include when compiling
   (for types)
   -> it will include dom types.
      dom.iterable types
      esnext
   -> overall it's says, include all the types from these 3 lib.
3. `allowJs: true` => allow js along with ts for compilation.
4. `skipLibCheck: true` => It mean don't check types from node_modules file.d.ts. only check for the code we have written & implementation of those lib in our code.
   => हमें दूसरो की lib की type perfect है या नहीं, नहीं जानना
5. `noEmit` => Just check our types, don't Produce js. because js is produced by swc in nextjs not tsc compiler.
6. `esModuleInterop: true` => Means that let commonjs & ESM work together
7. `module: esnext` => while it doesn't say to convert ts to esm (import/export) but it says, when you are resolving imports of modules use latest esm (esnext) syntax.
8. `moduleResolution` => "bundler" this is the module resolution
   *(Paths is used by)* `Paths: { "@/*":["./*"] }` mean export with @ & start with root of project
   -> that all modern compiler like swc, Rollup, vite, webpack are expecting.
9. `isolatedModule : true` => consider all files as seperated module & compile them seperately.
10. `resolveJsonModule : true` => allows you to import Json file as module
    => it's important if you want to work with json in ts.
    => Good for checking types in Json Data & map also.
11. `jsx: react-jsx` => Now you dont need to import react in all the files/components.
12. `incremental: true` => Cache the compilation for next time, so only chnges are recompiled.
13. `plugins: [ { name: "next" } ]` => There are plugin made for diff kind of framework like next.
    => Since we can't/don't want to write about all the typescript require for next js again & again, next js has given us a plugin
    other plugin:
    name: @typescript-eslint/eslint-plugin
    name: Prettier-plugin-typescript
    name: @babel/plugin-transform-typescript
    name: tsconfig-paths
    name: tsc
14. `include / exclude` => which files should be included/excluded in compilation process
    `Paths` => alias for simplifying imports. It doesn't control which files to include/exclude from compilation.

---

# Typescript keywords

declare, interface, namespace, as, read only, tuple :
asserts, symbol, keyof, infer, from, module, abstract

1. `declare` :- To declare variables, class, fn. etc types that exists somewhere else but aren't defined in the current file.
   -> commonly used in (.d.ts) files.
   -> External libraries => if you are using external library & you don't have type definition of that library, then, you can use (declare) to tell typescript about the types of the library.
   Global variables => you can use declare to provide the type definition of global variable
   eg: `declare var myGlobalVar : string.`
   Augmenting Types => if you want to add/modify the existing types.

Note :- But we can defines the definition just using type
why declare ?

`type myFunction = (a: string, b: string) => string.`
`declare myFuct = (a: string, b: string) => string;`
   (my fn. exists in External library.)
