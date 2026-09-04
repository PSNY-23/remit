# How to install typescript - express :-

* (1) `npm install typescript ts-node @types/node --save-dev`
  * *(Arrow pointing to typescript)*: `compiles`
  * *(Arrow pointing to ts-node)*: `execution engine (It runs ts directly without converting/compiling to JS)`
  * *(Arrow pointing to @types/node)*: `types for node.js`
  * *(Side note)*: `all three are dev dependency`

* (2) `npx tsc --init => generate tsconfig.json.`
  * `Note -> inside this file change 2 things`
    * `(i) rootDir -> ./src/`
    * `(ii) outDir -> ./dist/`
  * `(iii) include : ["src/**/*/*.ts"]`
    * `exclude : ["node_modules"]`

* (3) 
  * `"dev" => "ts-node src/app.ts"`
  * `"build" => "tsc"`
  * `"start" => "node dist/app.js"`

---

## add Jest + supertest :-

* (1) 
  * `jest, supertest`
  * `@types/jest @types/supertest`
  * `ts-jest`
  * *(Bracket pointing to all)*: `all dev Dependency.`

* (2) `tsconfig.json में change करे to accomodate test folder`
  * `{ rootDir: "."`
  * `  types: ["node", "jest"] }`
  * `  include: ["src", "test"]`

* (3) `npx ts-jest config:init`

* (4) `jest.config.ts update this file for typescript`
  * `eg: preset: 'ts-jest'`
  * `    testEnv: node`
  * `    testMatch: ['**/test/**/*.test.ts']`

* (5) `Package.json`
  * `"test" : "jest"`
