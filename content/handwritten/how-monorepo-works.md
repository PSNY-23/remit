# How do workspaces works

## Problem before workspace
Let's say you have a mono-repo with following projects bundled together.

mono-repo
  ↳ frontend
  ↳ backend
  ↳ common-lib
  ↳ utils

=> both frontend & backend needs -> axios@1.0.0
So, you need to install it in both the frontend & backend.
So, There is duplication of lodash.

=> Now if someone updated the axios@2.0.0 in backend
backend -> axios@2.0.0
frontend -> axios@1.0.0
So, things are out of sync.

=> you need to do npm install in all frontend, backend, comp-lib, utils. Even for test/build you need to do this seperately.

## What workspace gives
↳ Centralized dependency management
  eg: Install axios at once for whole project & share it across the projects so no duplication/Redundancy.

↳ linking local packages :-
  eg: let's say you updated some fn in shared-lib library that both FE & BE uses. Now traditionally you need to reinstall the shared package in the frontend & BE again.
  But with linking => you don't need to, linking will automatically make FE & BE uses updated codes of shared-lib.

↳ unified Versioning :-
  only one version for all the projects.

↳ You don't need to go into any folder & run command
  All command can be run from root level of the monorepo

---

# Example :- let's make a mono repo.

monorepo-project
  ↳ frontend
  ↳ backend
  ↳ shared-lib
  package.json

① In package.json of root define.
```json
  workspaces: [ "frontend",
                "backend",
                "shared-lib" ]
```

② The dependency of frontend/BE will be in their own package.json. Each package will have it's own package.json.

③ But there will be only one node_modules folder in root, which will have all the dependency of all the package.

④ Since FE & BE both uses shared-lib so, shared-lib should be a deps in both's package.json.
  eg: frontend/package.json or backend/package.json.
```json
  "dependencies": { 
      "lodash": "4.17.21",
      "shared-lib": "1.0.0" 
  }
```
  Even the local package dependency must be explicitely listed

⑤ Now do npm install from root => no need to go in FE, BE, etc & do npm install seperately.

⑥ write start script in each packages => package.json
  याद रहे हम start script individual package में लिख रहे पर run root से ही करेंगे -
  => `npm run start --workspace frontend` (from root)
     `npm run start --workspace backend`
  => you can also go into each package & do npm start that will also work.
  => you can also write a single script in roots package.json to run both frontend & backend using a single command.

---

# making a Mono-repo using pnpm :-

① make a mono-project folder => `pnpm init`.

② `mkdir packages` -> FE, BE, shared-utils, ui-library. (सारे में individually pnpm init करें)

③ In root create a file
  `pnpm-workspace.yaml` => 
```yaml
  packages:
    - 'packages/*'
```
  It will tell all the folder inside packages are projects in itself. (Packages folder के अंदर वाले सभी workspace कहलायेंगे)

④ linking projects/Packages :-
  => Since shared-utils is used by both FE, BE so we need to mention that in the FE, BE.
  frontend/package.json: dependency: {
      "shared-utils": "workspace:*",
      "ui-library": "workspace:*"
  }

  => backend/package.json:
  dependency: {
      "shared-utils": "workspace:*"  <- Fetch this package from the monorepos workspace not from npm registry.
  }

⑤ write the respective, dev, start, build command in your respective package.
  => `pnpm -r run dev` => recursively run all packages from root at once.
  => `pnpm --filter frontend run dev` => Run frontend from workspace
  => `pnpm add <package name> --workspace`
      will install the package globally.

⑥ when working Install React, npm packages in FE/BE/etc whenever you need. Don't worry about anything pnpm will take care of anything.
