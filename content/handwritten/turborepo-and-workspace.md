# Turborepo and Workspace Notes

## Page 1: Deploying Monorepo using Docker
* **Deploying monorepo using docker :-**
* (1) create a turborepo
* (2) `packages/db` $ightarrow$ This `db` is a package that will connect with data base and export a prisma for client.
  * $ightarrow$ To export prisma go to `package.json` of this.
  * `"exports": {`
    * `".": "./index.ts"`
    * `// "./client": "./index.ts"`
  * `}`
  * *(Bubble: "What is export keyword in Package.Json")*
* (3) `apps/backend` $ightarrow$ `package.json`
  * `apps/web` $ightarrow$ `package.json`
  * `apps/ws` $ightarrow$ `package.json`
  * **package.json (backend)**
    * `"dependencies": { "db": "*" }`
    * `import { Prisma } from "db/client"`
  * **package.json (web)**
    * `"dependencies": { "db": "*" }`
    * `import { Prisma } from "db/client"`
* check if all apps are working
* (4) commit & push to github
* (5) create a docker file in root directory
  * `docker`
    * `↳ Dockerfile.frontend`
    * `↳ Dockerfile.backend`
    * `↳ Dockerfile.websocket`

---

## Page 2: Dockerfile for Backend
* **Dockerfile.backend**
  ```dockerfile
  FROM oven/bun
  WORKDIR /usr/src/app
  COPY ./packages ./packages
  COPY ./bun.lockb ./bun.lockb
  COPY ./package.json ./package.json
  COPY ./turbo.json ./turbo.json
  COPY ./apps/backend ./apps/backend
  RUN npm install
  COPY . .
  RUN bun install

  EXPOSE 8080
  CMD ["bun", "run", "index.ts"]
  ```

* To add or give `DATABASE_URL` or any other env variable we can add an argument in Dockerfile.
  * `eg: ARG DATABASE_URL`
  * `↳ & --build-arg DATABASE_URL="..."`
    * *(in docker run command)*
  * **OR**
  * `RUN DATABASE_URL=... npm build`

---

## Page 3: Docker-compose and GitHub Workflows
* (6) `Docker-compose` to connect all the dockerfile.

* **.github/workflows**
  * `↳ cd-backend.yml + cd-frontend.yml + cd-ws.yml`
  * `Build the docker image`
  * `Push the docker-image to dockerhub`
  * `ssh into our VM and start the new image`

  ```yaml
  name: Continous Deploy (Prod) (Backend)
  on:
    push:
      branches: [main]
  
  jobs:
    build:
      runs-on: ubuntu
      steps:
        - ...
        - ...
  ```

---

## Page 4: Monorepo CI/CD & Scoped Installations
* `->` The monorepo will have multiple Project & Shared Packages.
* `->` Each of apps (FE, BE, WS) will be contained using Docker.
* `->` on each commit an action will trigger the CI/CD pipeli-
  * `-> Build the Docker image`
  * `-> Test the applicati-`
  * `-> Push the image to Dockerhu-`
  * `-> Deploy.`

* (1) all the Packages that are under Packages should be named as `"@repo/<packagename>"`
  * all apps would just be named as normal.

* (2) Now our backend needs access to our `db` Package.
  * So, from root of our application:
  * `> pnpm add @repo/db --filter backend`
  * `which means @repo/db package को backend app में install करो` (which means install `@repo/db` package in backend app)
  * You can even do this manually.
    * `eg: dependencies: { "@repo/db": "workspace:*" }`

---

## Page 5: Turborepo Default Example Analysis (turbo.json)
* **Turborepo: Default Example Analysis**
* **Analyzing the default turborepo package :-**
* (1) Turborepo setup have a setup rules, like how things should be setup so that turborepo works properly.
  * It's defined in a file called `https://turborepo.dev/schema.json` file.
  * Now whenever you make any project your local `turbo.json` must be validated against this `schema.json`. `ताकि ये Proof हो जाये कि turborepo properly setup है।` (So that it is proven that turborepo is properly setup.)
  * Therefore in `turbo.json` we have
    * `$schema: "https://turborepo.dev/schema.json"`

* (2) `ui: tui`
  * `↓` `↳ Terminal`
  * `user` `↳ Text/ user Interface`
  * `Interface`
  * `It means turborepo will use a terminal-based interface with user when running command or viewing progress.`
  * `ui: CLI vs TUI`
    * `↓` `↳ Richer & more interactive Experien-`
    * `basic logs`
    * `only CLI based output`

* (3) **tasks**
  * `This section defines various tasks that turborepo can run.`
  * `eg: build, dev, check-types, lint`
  * `dev`
    * `builds: { cache: false } => There won't be any caching`
    * `persistent: true } => keeps server running like nodemon.`

---

## Page 6: Tasks Dependencies & Cache (turbo.json)
* **build: { dependsOn: ["^build"] }**
  * `inputs : ["$TURBO_DEFAULT$", ".env*"]`
  * `outputs : ["onext/**", "!.next/cache/**"]`
  * *(Arrow from `dependsOn: ["^build"]`)*: `this means run this task for all dependencies in the graph before running it for the current Projec-`
  * *(Arrow from `inputs`)*:
    * `-> Files the build task will watch for changes.`
    * `-> if any of these files changes build task will trigger`
    * `-> TURBO_DEFAULT (means that by default turborepo watches som- files included in turbos defaul-)`
    * `-> .env* => means also watch for these files .env.local, .env, .env.example etc.`
  * *(Arrow from `outputs`)*:
    * `Turborepo needs to know where is the build files. So it could save/trace the build.`
    * `↳ .next/** (all builds in inside .next folder)`
    * `↳ ! .next/cache/** (no builds are in cache folder).`
    * `So, it remains cached`

* **lint: { dependsOn: ["^lint"] }**
  * `do linting on all other projects that depend on the current projects before linting the current project.`

* **check-types: { dependsOn: ["^check-types"] }**

---

## Page 7: Analysing `package.json` Workspaces
* `apps -> web, doc`
* `packages -> @repo/ui, @repo/eslint-config, @repo/typescript-config.`

* **Analysing package.json :-**
  * `workspaces: [ "apps/*", "packages/*" ]`
  * `It means all the folder inside apps & packages are workspaces / projects in this turborepo.`

* **Analysing apps/packages :-** (Arrow: `all projects will have package.json & tsconfig.`)

* (1) **packages/ui/tsconfig.json**
  * `extends: @repo/typescript-config/react-library.json.`
  * `means the tsconfig.json has all the option defined in the json located there.`
  * `↳ Basically it's importing other ts configs.`

* **packages/ui/package.json**
  * `↳ name: @repo/ui`
  * `exports: { "./*": "./src/*.tsx" }`
    * `↳ export commands specify how your package can be imported in other packages.`
    * `↳ Now basically define this is the entry point of my package, if you want to import something you can do through this only.`
    * `↳ If you don't define other projects can import anything from your package & it is not a good practice.`
    * `↳ Whatever tsx file is inside src folder can be directly imported`

---

## Page 8: Workspaces & Dependencies
* `Since we are in (ui) package which is exporting some components like button, card, input etc.`
* `But in this package we want to make sure, everything is linted & typescript configured.`
* `And for this we already have packages for the-`
  * `↳ @repo/eslint-config`
  * `↳ @repo/typescript-config`
* `Therefore these two must be present in the dev dependency of the ui/package.json. So it could use those packa-.`

* `To use it we must write command.`
  * `eg: scripts: { lint: "eslint . --max-warnings 0", check-types: "tsc --noEmit" }`

* **Analyzing web & docs :-**
* **docs/tsconfig.json**
  * `↳ since we have a bare typescript configuration package so, we will use it`
  * `extends: @repo/typescript-config/nextjs.json.`
  * `exclude: ["node_modules"]`
  * `include: ["**/*.ts", "**/*.tsx"]`

* **docs/package.json**
  * `dependency : { "@repo/ui" : "*" }` *(Arrow: all version of @repo/ui)*
  * `devDependency : { "@repo/eslint-config" : "*", "@repo/typescript-config" : "*" }`
  * `This is how we import other packages inside other.`

---

## Page 9: Web App Dependencies
* **web/tsconfig.json**
  * `extends: @repo/typescript-config/nextjs.json.`
  * `compilerOptions: { }`
  * `include: [ ]`
  * `exclude: ["node_modules"]`

* **web/package.json**
  * `↳ we know that our web project will need the ui, typescript & eslint config from the root project.`
  * `dependency: { "@repo/ui": "*" }`
  * `devDependency: { "@repo/eslint-config": "*", "@repo/typescript-config": "*" }`
  * `& Now we can use it's use.`
  * **example**
    * `scripts: { lint: "eslint . --max-warnings 0", check-types: "next typegen && tsc --noEmit" }`
    * `import { Button, Card } from "@repo/ui/button"`

---

## Page 10: Understanding Bun Workspaces
* **Understanding Bun Workspaces**
  * `=> Bun support workspaces in package.json like npm, yarn etc but unlike pnpm which works in pnpm-workspace.yaml.`
  * `=> Each package will have its own two file.`
    * `-> tsconfig.json (Because Bun is always typescript)`
    * `-> package.json`
  * `=> To know we are using workspaces, we first need to tell in the root package.json, what's all directories are workspaces in the entire repo.`
    * `eg: workspaces: ["apps/*", "packages/*"]`

* `=> When referencing other packages in the monorepo, we can use workspace protocol.`
  * `eg: "dependencies": { "package-1": "workspace:*" }`
  * `It means the current package depends or have a dependency of package-1, which comes not from npm registry but workspace.`

* `=> bun install`
  * `↳ will install dependencies of all the packa-`
  * `↳ on entire repo.`
* `bun install --filter package-1`
  * `↳ will install dependencies of package-1 only`
* `bun install --filter ...`


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
