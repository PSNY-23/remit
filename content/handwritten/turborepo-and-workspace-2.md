# Catalogs :-

catalog/catalogs helps you define the packages once in your root package.json once & use it in all the packages inside.

root package.json
```json
{
  "name": "repo",
  "workspaces": {
    "packages": ["app/*", "packages/*"]
  },
  "catalog": { 
    "react": "19.0.0",
    "react-dom": "19.0.3" 
  },
  "catalogs": {
    "testing": { 
      "jest": "30.0.0",
      "testing-lib": "14.0.3"
    },
    "build": { 
      "jest": "29.8.2",
      "react-test-lib": "20.0.3"
    }
  }
}
```

app/package.json
```json
{
  "name": "app",
  "dependencies": { 
    "react": "catalog:",
    "react-dom": "catalog:",
    "@repo/ui": "workspace:*" 
  },
  "devDependencies": { 
    "webpack": "catalog:build",
    "babel": "catalog:build",
    "jest": "catalog:testing",
    "react-testing-lib": "catalog:testing"
  }
}
```

---

# Turborepo

Turborepo doesn't tell you, how to structure your monorepo, how to manage dependencies etc.

It's a build system for typescript/JS codebase.
It helps you in building/caching, so you could publish fast, work fast.

But in docs they give you tips on how to make monorepos.

① Structuring a repo :-
=> add Packages in workspace
   `workspaces: ["apps/*", "packages/*"]`
-> package.json should be in all the packages/workspaces
=> root package.json would look like.
```json
{
  "private": true,
  "scripts": { 
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint" 
  },
  "devDependencies": { "turbo": "latest" },
  "packageManager": "bun@1.2.0",
  "workspaces": ["apps/*", "packages/*"]
}
```
=> root turbo.json to configure the behavior of turbo.
=> bun.lock / other lock file will be a key for reproducible behavior for both your package manager & turbo.

---

=> Assume - each workspace/projects are a standalone project in itself, they will have their own package.json node_modules etc.

Also, each package has a specific entry point `{ exports: {} }` in package.json, so your other workspaces could use it.

=> package.json for packages
```json
{
  "name": "@repo/<package-name>", // To identify a package
  "scripts": { }, // the defined script can be run in the package's context
  "exports": { }  // Other package will get the entry point to use this package.
}
```

=> Don't make tsconfig.json in root workspace :-
- tsconfig.json will be in all the packages, & you can also make a seper package especially dedicated for tsconfig & use it inside all packages.

---

Managing dependencies :-
External dependencies -> from npm registry.
internal dependencies -> from local packages.

To install dependencies
```json
dependencies: {
  "next": "latest", // => from npm
  "@repo/ui": "workspace:*" // => from internal 
}
```
(Both Extern/Int)

When you are installing dependencies, install it exactly where/in which packages its needed not in any other packages/root.

-> Now it may feel counter intuitive that if we install the required package (external lib) in the package itself.
Then both too if our frontend & docs both needs axios we would be installing it two times.

Yes, that's correct. It's inefficient. But -
It gives you
* clarity (no confusion of what packages is needed in a workspace)
* flexibility (frontend can use any version, backend can use any version)
* Better caching (too many dependencies in root of your repo, you will be changing your root too often, so entire repo will be build again no benefit of caching)

---

=> Keep only few dependencies in root
eg: tools like turbo, husky, lint etc.

Managing dependency
-> Turborepo doesn't manages dependencies.
-> Turborepo has no role in managing your dependencies, it's upto package manager only.
-> Package manager -> yarn, npm, bun, pnpm
Different Package manager has diff. module resolution algorithms and so have unpredictable behavior.

Creating an Internal Package :-
Creating a new package called math, to export math tools.
① create a folder math -> packages/math.
② Initialize a project in here. so we have a package.json here.
   name : @repo/math.
   exports : { "./add": ... },
   devDependencies: { "@repo/typescript-config": "workspace:*" }
③ add a tsconfig.json
   extends: "@repo/typescript-config/base.json"
   compilerOptions: { rootDir: "src", outDir: "dist" }
   include: []   exclude: []
③ bun install (Inside the package) as you add new dependencies after initialization.
④ Now you can do bun dev if this package ...
⑦ turbo build => To build entire project.

---

Configuring Tasks :-
-> A task is a script your turbo runs.
-> There could be many tasks and you can define their relation in turbo.json.
-> Parallelization => Turborepo will always do it/if it can to ensure everything runs as fast as possible.
   => This is USP and default behaviour of turborepo.

eg: if you don't use turborepo -
   lint app/web > lint Packages/shared > lint app/docs > build Packages/shared < build app/docs < build web

eg: if you use Turborepo.
   Everything will run in parallel.
   lint app/web           lint Packages/shared -- build / test
   lint app/docs       /

-> All tasks are written in the tasks object of turbo.json.
->
```json
build: { dependsOn: ["^build"] }
```
It means before running the build in the currnt package, run the build in all its dependents packages.

->
```json
tasks: {
  test: { dependsOn: ["build"] }
}
```
means before running test of this package run the build for this package.

---

=>
```json
tasks: {
  lint: { dependsOn: ["utils#build"] }
}
```
run the lint in the current package after running the build task in utils package (Build of utils).

=>
```json
"#web#lint": {
  dependsOn: ["utils#build"]
}
```
lint task in web will run after build task in utils.

=>
```json
build: { dependsOn: [] }
```
empty `[]`, means no dependency so it will run directly.

Caching / outputs :-
-> Turborepo caches the outputs of your tasks so, that you never do the same work again.
-> Output keyword tells turborepo files/directoris it should cache when the task has successfully completed.

if you don't specify it, turborepo won't cache anything & you need to build everything from scratch again and again.

->
```json
tasks: {
  build: {
    dependsOn: [],
    outputs: [".next/**", "!.next/cache/**"]
  }
}
```
`.next/**` को cache करेगा क्योंकि यही में build files होती है।

---

inputs :-
-> Specifies files you want to include in the task's hash for caching
-> By default turborepo includes all the files in packages tracked by git.
->
```json
tasks: {
  "spell-check": {
    "inputs": ["**/*.md"]
  }
}
```

Registering root tasks :-
Now sometime ts files are not inside your package but in your root workspace.
so how would you lint them?
-> we can use package.json of the root workspace.
eg: root package.json
```json
{
  "scripts": {
    "lint": "turbo run lint lint:root",
    "lint:root": "eslint ..."
  }
}
```

turbo.json
```json
tasks: {
  lint: { dependsOn: ["^lint"] },
  "//#lint:root": {}
}
```

---

Turborepo :-
① How to tell turborepo to cache the dist folder of nodejs server.
=> apps/backend/turbo.json
```json
{
  "extends": ["//"],
  "pipeline": { 
    "build": {
      "outputs": ["dist/**"]
    }
  }
}
```

② Cache behaviour :-
If there is not any change in any file of a package and you try to build it. You will get a copy of cached build.

Even if you delete .next/build folder, & run npm run build. The cached folder will automatically come in your apps/packages.
