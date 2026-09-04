# GitHub Actions: Comprehensive Notes

## 1. Introduction to GitHub Actions
**What is GitHub Actions?**
It is a workflow automation service provided by GitHub. It allows you to automate all kinds of repository-related processes and actions (like testing, building, and deploying).

**Architecture Hierarchy:**
`Code Repo` $\rightarrow$ `Workflows` $\rightarrow$ `Jobs` $\rightarrow$ `Steps`

*   **Workflows:**
    *   Attached to a GitHub repo.
    *   Contains multiple Jobs.
    *   Triggered upon specific events (e.g., push, pull request).
*   **Jobs:**
    *   Define a runner (the execution environment/machine, e.g., Ubuntu).
    *   Contains multiple Steps.
    *   Can run in parallel or sequentially (based on conditions).
*   **Steps:**
    *   Execute a shell script or an "action".
    *   An "action" can be your custom action or a third-party action.
    *   Steps are executed in order.
    *   Can be conditional.

---

## 2. Writing Your First Workflow
To write your first workflow, create a simple GitHub repository (even an empty one with just a few files is fine). 
1. Go to the **Actions** tab in your repository.
2. Create a workflow file. It must be placed in this exact directory structure:
   `.github/workflows/first-action.yml`
3. This is the YAML file where you will define all workflows, jobs, and steps.
4. After creating and committing this file, the Actions tab UI will change to show all workflows from your repo. You can run workflows, view running stats, and check details of completed ones.

**Code Example (`first-action.yml`):**
```yaml
name: first workflow
on: workflow_dispatch  # This is the event trigger (allows manual triggering)

jobs:
  first-job:
    runs-on: ubuntu-latest
    steps:
      - name: Print greeting
        run: echo "Hello World!"
        
      - name: Print goodbye
        run: echo "Done-bye!"
```

---

## 3. Workflow for a Realistic Project (e.g., React)
When building a project, we usually write automated tests and run commands like `npm run test`. While we can run this locally, we want automated testing directly on GitHub so we don't have to manually clone and test small code changes.

**Common Event Triggers provided by GitHub:**
*   `push`
*   `pull_request`
*   **Other events:** `workflow_dispatch` (manual), `repository_dispatch`, `schedule`, `workflow_call`, `issues`, `issue_comment`, `discussion`, etc. (Most are repository-related).

**Code Example: Realistic Test Workflow**
```yaml
name: Test Project
on: push  # Default trigger provided by GitHub

jobs:
  test:  # Represents a single job
    runs-on: ubuntu-latest  # GitHub provides many runners/base systems
    steps:
      - name: Get code
        # 'uses' runs a prebuilt GitHub Action.
        # actions/checkout clones your repo onto the ubuntu runner.
        uses: actions/checkout@v4 
        
      - name: Install NodeJS
        # This action sets up Node.js environment
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        # 'run' executes shell commands on the workflow runner.
        # Note: 'npm ci' installs exact versions from package-lock.json (better for CI/CD), 
        # while 'npm i' uses package.json.
        run: npm ci 
        
      - name: Run tests
        run: npm test
```

---

## 4. Failing Workflows & Adding Multiple Jobs

**Analyzing Failures:**
When a workflow fails, an error will be shown in the Actions tab. By looking at the logs inside the workflow run, you can identify and manually fix the error. A whole workflow gets cancelled if any job fails, and a job fails if any of its steps fail.

**Adding Multiple Jobs (Sequential vs. Parallel):**
Just like we wrote a single `test` job, we can add other jobs to the same workflow. 
*   **Parallel (Default):** By default, multiple jobs run simultaneously in parallel.
*   **Sequential (`needs`):** If you want jobs to run one after another (e.g., Job 2 should only run if Job 1 succeeds), you use the `needs` keyword. This sequential relationship is represented visually in the Actions tab.

```yaml
jobs:
  Job1:
    runs-on: ubuntu-latest
    steps:
      # ... steps ...

  Job2:
    needs: Job1  # Job2 waits for Job1 to finish successfully
    runs-on: ubuntu-latest
    steps:
      # ... steps ...
```

---

## 5. Multiple Triggers, Contexts & Expressions

**Multiple Event Triggers:**
You can add multiple events to trigger a workflow.
```yaml
on: [push, workflow_dispatch, issues]
```

**Context Objects:**
GitHub provides Context objects that hold data about the workflow run.
*   `github context`: Event name, repo info, commit info, etc.
*   `runner context`: OS types, version, etc.
*   `env context`: Environment variables.
*   `job / steps context`: Progress details, status, etc.

**Expressions (`${{ }}`):**
Expressions are small pieces of logic you write inside workflows to check conditions, access variables, etc. (Similar to expressions in JavaScript).

*Example:* Trigger a step only when a Pull Request is opened, and print the PR author's username.
```yaml
jobs:
  pr-info:
    runs-on: ubuntu-latest
    steps:
      - name: Show PR username
        # The 'if' condition uses expressions to evaluate logic
        if: github.event_name == 'pull_request' && github.event.action == 'opened'
        # The ${{ }} syntax dynamically injects context data
        run: echo "Pull request opened by ${{ github.event.pull_request.user.login }}"
```

---

## 6. Module 4: Workflow Events Deep Dive

**Advanced Event Configurations (Activity Types & Filters):**
Sometimes, basic events like `push` or `pull_request` are not specific enough. We can narrow them down using Activity Types and Filters.

*   **Activity Types:** Provide detailed control over the state of an event.
    ```yaml
    on:
      pull_request:
        types:
          - opened
          - closed
          - edited
    ```
*   **Filters:** Provide detailed control over *when* a workflow triggers based on specific branches, tags, or paths.
    *Example:* Trigger deployment only when code is pushed to `main` or specific `dev` branches.
    ```yaml
    on:
      push:
        branches:
          - main
          - 'dev-*' # Targets branches like dev-1, dev-feature, etc.
    ```

**Cancelling & Skipping Workflows:**
*   **Security on Public Repos:** If you have an automated workflow running on `pull_request`, anyone can fork your public repo and submit a PR. To prevent malicious spamming (which costs money/compute time), GitHub defaults to requiring owner approval before running workflows from non-collaborators.
*   **Skipping Commits:** You can skip triggering a workflow entirely by including specific commands (like `[skip ci]`) in your commit message.

---

## 7. Module 5: Job Artifacts & Outputs

**What are Artifacts?**
Artifacts are files or data generated by a Job in a workflow that you want to save, download, or pass to another Job. Because each Job runs on a fresh, isolated runner (machine) with different memory, they cannot directly share local files.

**1. Uploading Artifacts:**
Uploading is usually the last step of a job. We use the prebuilt `actions/upload-artifact` action.

```yaml
      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist-files  # Name of the artifact container
          path: |           # The files/folders to store
            dist
            package.json
```
Once the workflow runs, these artifacts are generated and attached to the workflow run. They can be downloaded manually from the GitHub UI or accessed by downstream jobs.

**2. Downloading Artifacts in Another Job:**
To use the artifacts in a subsequent job, you must download them using `actions/download-artifact` and ensure the job `needs` the previous build job.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # ... build steps ...
      - name: Upload Artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist-folder
          path: |
            dist
            package.json

  deploy:
    needs: build  # Ensures deploy waits for build to finish
    runs-on: ubuntu-latest
    steps:
      - name: Get Build Artifacts
        uses: actions/download-artifact@v3
        with:
          name: dist-folder  # Must match the uploaded artifact name
          
      - name: Output contents
        run: ls  # Verifies the downloaded files exist
        
      - name: Deploy
        run: echo "deploying..."
```

**Job Artifacts vs. Job Outputs:**
*   **Job Artifacts:** Used to share physical **files/folders** between jobs or to download them after a workflow runs (e.g., storing build folders, test result logs).
*   **Job Outputs:** Used to pass small pieces of **values/data** (like a string or a boolean, not files) from one job to another downstream job (e.g., passing computed variables or status flags).


NOTE: Github doesn't support artifacts sharing across workflows.

## Working with Job outputs :- (come job to another job)
Just like we have seen in past example how any job when completes creates some job files/folders, which we can save/download or reference in another job.

Similarly we can publish the output of a job by running some script.
-> Let's say in the job we build the project and :
   dist folder we get is output but we want to access the name of that build file.
   eg:
   ```yaml
   - name: Publish JS filename
     run: find dist/assets/*.js -type f -execdir echo "script-file={}" >> $GITHUB_OUTPUT ';'
   ```
   This command finds `.js` files inside `dist/assets` directory.
   But this command only gives you name of the js file, but we need to publish it.
   To publish it we need to create an output.

   ```yaml
   outputs:
     script-file: ${{ steps.publish.outputs.script-file }}
   steps:
     - name: Publish JS filename
       id: publish
       run: find dist/assets/*.js -type f -execdir echo 'script-file={}' >> $GITHUB_OUTPUT ';'
   ```
   Here we are publishing the output of the step in the `$GITHUB_OUTPUT` context which is a global context & also giving it an id so that we could access these output from `$GITHUB_OUTPUT` later.

=> And in the job output
   We are outputting the value of job output step by accessing the published id by this id.

=> Steps -> global context of all steps
   steps.publish -> choose steps with id publish & get output

=> In the last step we published the job output but we need to consume it in other jobs as well.
   eg:
   ```yaml
   - name: Output Filename
     run: echo "${{ needs.build.outputs.script-file }}"
   ```
   `build` -> job id
   `outputs` -> global object
   `script-file` -> Publish id

## 3. The need for dependency caching :-
Now if we have many jobs, we need to install the dependency each time (as each job runs on diff runner).
This is inefficient.

We need to cache it & use it everywhere.
=> Cache it first time you install it.

eg:
```yaml
- name: Cache dependencies
  uses: actions/cache@v3
- name: Install dependencies
  run: npm install
```
you can also define path that needs to be cached.

eg:
```yaml
- name: Cache dependency
  uses: actions/cache@v3
  with:
    path: ~/.npm  # -> see docs for details it gets cached on github cloud
    key: deps-node-modules-${{ hashFiles('**/package-lock.json') }}
```
key is for tagging the cache so that we can retrieve it.

---

# Module-6
# Using env variables & secrets

=> When we make application, we need `.env` file, not available / pushed on github.

=> But github needs to get env to run project & test etc.
=> How to provide env variable to workflows.
   In workflow file:

```yaml
name:
on:

env:  => env:
           MONGODB_URL: "gna-demo.com"
jobs:
```

But we can define diff env variables at diff levels, workflow level, job level & even step level.

eg: `http://localhost:$PORT`
or `${{ env.MONGODB_URL }}`

Secrets :- All provider like github action etc, provides you a way to store the secrets so no one can actually see them.
=> go to setting of project repo
=> security/actions
=> Add the secret like
   `MONGO_URL = "mongodb:..."`
=> use that secrets in the workflow/jobs like env:
   `MONGODB_URL: ${{ secrets.MONGO_URL }}`
   a secret context provided by github.

Github repo environment :-
There are two kind of secrets in github.
i) Environment secret => used by your workflows for deployments
ii) repository secret => that we have used above

---

# 7: controlling workflow & Job execution

=> Running jobs & steps conditionally
=> Running jobs with a matrix.
=> Reusing Workflows.

① Running jobs & steps conditionally :-

```yaml
jobs:
  steps:
```
=> conditional execution
   via `if` Field
=> ignore error via `continue-on-error` field.

-> Default behavior of workflow
   By default, all jobs runs parallely & each steps of a job sequentially.

   steps of a job -> one by one top to bottom
   -> if step 1 fails, the job stops there & step 2 won't run.

   Jobs -> runs parallely (unless you define dependency between them using `needs`)
   -> if a job fails other jobs keep running.

=> But we can control the execution flow using conditional `if`.
   eg:
   ```yaml
   - name: Upload Test Report
     if: steps.run-steps.outcome == 'failure'
     # steps context
     # This is the id of other above step which we are referencing
   ```
   Now with this if condition this steps check if the outcome of the above step is failure only then run this step.

=> Special conditional function :-
   i) `failure()` => Returns "true" if any prev. step/job fails.
   ii) `success()` => Returns "true" when none of prev steps have failed.
   iii) `always()` => Causes the step to always execute, even when cancelled.
   iv) `cancelled()` => Return true if the workflow has been cancelled.

   eg: `if: failure() && steps.run-test.outcome == 'failure'`
       ↳ only run this step if the above step/job has a failure.

---

# 8. Jobs & docker-containers

① Runner Vs Container
↳ Runner => you will have full control over env & installed software.
↳ container => List of pre-made/defined env (includes installed softwares)
  eg: what we were using up until now.
      `runs-on: ubuntu-latest`

NOTE
② => docker containers can be run on the github-action, it supports it out of the box.
  -> you run your container on those predefined runners.
=> you will also have to put env variable on github actions instead of dockerfile.
  * go to github settings
  * go to environment tab & click on testing
  * add secret
  * access these secret in the docker file like
    `${{ secrets.MONGO_PASSWORD }}`

③ How to run gh-actions on container instead of runner directly
=> Just blow the runner add container
eg:
```yaml
runs-on: ubuntu-latest
container: node:16
```
or
```yaml
runs-on: ubuntu-latest
container:
  image: node:16
  env:
    # env: mongodb credentials
```

④ Using service Container (services):-

When we do CI/CD we always want to check if all the test passed before pushing to / merging.
But the backend/api test may create some data in database.
-> Now if i have just a single database then these unnecessary test data will corrupt the database. Production database.
Therefore, for tests we define another seperate databases.
-> But even if you have a seperate database it will cause some irritation to your production VM/cluster/services.
Therefore, we make a seperate service/cluster to host our data base there.
-> Not only that, we need the testing services only when we need to test, we can't let it running always.
Therefore, we make container once & turn on/off whenever req. comes.

⑤ Adding services (via service containers) :-

When you run any jobs/workflow on gh-actions it may need some other server to perform the function like if we are running api tests, then we must have db in the github action workflow.
So, in the workflow we create a container for Postgres etc.
To provide the workflow these services that is why it is called service containers.

eg: This example provides Postgres services in the workflow jobs.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    services: # services
      postgres: # gives to belongs to a specific job
        image: postgres:13
        env:
          POSTGRES_USER: user
          POSTGRES_PASSWORD: password
          POSTGRES_DB: testdb
        ports:
          - 5432:5432
        options: >-
          ...
    steps:
      - uses: actions/checkout@v4
      - name: Wait for Postgres Ready
        run: |
          until pg_isready...
          some scripts.
      - name: Run tests
        run:
        env:
          PGPASSWORD: password
```

---

# Module: 9
# Building & Using custom actions

=> Thus far we have used the actions created by community only.
   eg: `actions/checkout@v4`
       `actions/cache@v4` etc

=> why custom actions?
   when you see you are doing same things / step inside steps and also in diff jobs.
   you make a custom action combining them and now you can use them anywhere.

=> Types of custom actions?
   1. Javascript actions
      -> Execute a JS file inside which you write actions.
   2. docker actions
      -> create a dockerfile with required config.
      -> perform any tasks of your choice with any language
      -> lots of flexibility but requires docker knowledge
   3. composite actions
      -> combine multiple workflow steps in one single action
      -> combine run commands or uses (actions)
      -> allows for reusing shared steps (without extra skills)
         This is exactly what doing here, find if I don't making custom utils

① composite actions :-
  -> go to `.github/actions/<action-name>/action.yml`
  -> Inside this file you will write what all things you want to do when this action is run.
     eg: you want a custom-action that should cache & install dependency.


# GitHub Actions: Custom Actions, Security, and OIDC

## Page 9: Custom Actions (Composite)
* **eg: `name: "Get Cache and Install dependency"`**
  * `description: "Get dependencies & cache them"`
  * `runs:`
    * `using: "composite"` *(Arrow pointing here: `Type of custom-action`)*
    * `steps:`
      * `- name: Cache dependencies`
        `id: cache`
        `uses: actions/cache@v4`
        `with:`
          `path: node_modules`
          `key: deps-node-modules-${{ hashFiles('**/package-lock.json') }}`
      * `- name: Install dependencies`
        `if: steps.cache.outputs.cache-hit != 'true'`
        `run: npm ci`
        `shell: bash` *(Arrow pointing here: `-> This is extra we need to add.`)*

* *(Side note boxed)*: `This is exactly we would be doing all the time if we don't make a custom-action utility`
* `Now once you have defined the custom you can use it easily anywhere.`
* **eg: consuming custom-action :-**
  ```yaml
  - name: Get cache & install dependencies
    uses: ./.github/actions/cached-deps
  ```

---

## Page 10: Inputs in Custom Actions
* **(2) inputs in custom-act :-**
  * `=> inputs are parameters you define that allows users to pass data or options into the action when they use it.`
  * `=> you define them in action.yml.`
  * `=> This input makes the custom-actions customizable as per users needs.`

* **eg:**
  ```yaml
  name: 'Greet User'
  description: "A simple greeting action"
  inputs:  # (Boxed: 'These codes we just to provide inputs')
    username:
      description: "The name of user to greet"
      required: true
    emoji:
      description: "A fun emoji"
      required: false
      default: "⭐"
  runs:
    using: "composite"
    steps:
      - name: say hello
        run: echo "${{ inputs.emoji }} Hello ${{ inputs.username }}"
        shell: bash
  ```

* `=> Now above we have defined the custom-action with inputs. But we need to provide the values for these inputs when using these custom-action in our workflows.`
* **eg:**
  ```yaml
  - name: Greet user
    uses: ./.github/actions/greet-user/
    with:
      username: "Pankaj"
      emoji: "🚀"
  ```

---

## Page 11: Outputs & Custom Javascript Actions
* **(4) Adding outputs to your custom-actions**
  * `Just like we defined the input in our custom action, we can define the output as well.`
  * **eg:**
    ```yaml
    name: my-custom-action
    description: description for my-custom-action.
    inputs: ...
    outputs:
      used-cache:
        description: "Whether cache was used or not?"
        value: ${{ steps.[id].outputs.[anything] }} # (Arrow pointing here: 'could be anything')
    ```

* **(5) Custom-Javascript action :-**
  * `=> So into .github/actions/ create a new folder for our JS action.`
  * `=> This action will be designed to upload the build files to the aws s3 bucket.`
  * `=> Create .github/actions/deploy-s3-javascript/action.yml.`
  * `=> write the custom-action inside it.`
  * **eg:**
    ```yaml
    name: 'Deploy to AWS S3'
    description: 'Deploy a static website via AWS S3.'
    runs:
      using: 'node16' # (Cloud bubble: 'you can read what it does')
      main: 'main.js'
    ```
  * `=> Create a main.js file where we will write all our js logic.`
    * `=> inside deploy-s3-javascript`
    * `eg: write a fn here`
      `function run() { run it } run()`
  * `=> inside the deploy-s3-javascript; do npm init -y so it becomes a node.js project.`
  * `=> npm i @actions/core and @actions/github @actions/exec`

---

## Page 12: Implementing & Using JS Actions
* `=> main.js`
  ```javascript
  const core = require('@actions/core');
  const github = require('@actions/github');
  const exec = require('@actions/exec');

  function run() {
      core.notice('Hello from my javascript action!');
  }
  run()
  ```

* `=> Now that we have the action logic define in main.js and we can run this file/project in our custom-action.`
* `& we can use this custom action anywhere.`
* `When these custom-action will run in any workflow it will automatically run the main.js.`
* `=> Let's say in some workflow under some jobs you can use it.`

* **eg:**
  ```yaml
  name: my-workflow
  on: push
  jobs:
    information:
      runs-on: ubuntu-latest
      steps:
        - name: Get copy of code
          uses: actions/checkout@v4
        - name: Setup NodeJS
          uses: actions/setup-node@v4
          with:
            node-version: 20
        - name: Install custom-action dep
          run: npm ci
          working-directory: ./.github/actions/deploy-s3-javascript
        - name: Run custom-js-action
          uses: ./.github/actions/deploy-s3-javascript
  ```

---

## Page 13: Docker Actions
* **Docker-action :-**
  * `=> Inside .github/actions/ create a new folder for deployment new custom-action using docker let's say -> action-deploy-s3-docker`
  * `=> Inside this folder create two files, just like we did in JS.`
    * `-> deployment.py`
    * `-> Dockerfile`
    *(Arrow from both files)*: `This contains the code to connect/send the things to aws S3 bucket (Basically it contains a python fn) & run it in the Dockerfile.`
  * `-> action.yml`
    ```yaml
    name: 'Deploy to S3'
    description: 'Deploy to static website via aws S3.'
    # [inputs & outputs:]
    runs:
      using: 'docker' # (Arrow: Types of action)
      image: 'Dockerfile'
    ```

---

## Page 14: Security & Permissions (Script Injection)
* **10. Security & Permission**

* **(1) Script injection**
  * `Let's say you have made, some workflow which uses the some part of the change/code to test it. the changes are compatible. Now these part should be simple strings but someone maliciously wrote some code.`
  * `Now this code will break your workflow.`
  * `=> similar to Sql injection.`

* **(2) Malicious 3rd party action**
* **(3) Permission Issues.**

* **(1) Script injection (Example) :-**
  * `let's say your workflow uses the title of issue to label/tag them if this is a fix or bug issue.`
  * **eg: steps:**
    ```yaml
    - name: Assign Labels
      if: contains(github.event.issue.title, "bug")
      // code to label the issue as bug.
      if: contains(github.event.issue.title, "fix")
      // code to label the issue as fix.
    ```
  * **eg: jobs:**
    ```yaml
    assign-label:
      runs-on: ubuntu-latest
      steps:
        - name: Assign-label
          run: |
            issue_title="${{ github.event.issue.title }}"
            echo "$issue_title"
    ```
  * `Now someone can set title as ("a" ; echo got your secrets")`
    * `-> "a" ; echo got your secrets`
    * `-> This is a new command in itself.`

---

## Page 15: Protecting Against Injection & Permissions
* **How to protect it :-**
  ```yaml
  jobs:
    assign-label:
      runs-on: ubuntu-latest
      steps:
        - name: Assign label
          env:
            TITLE: ${{ github.event.issue.title }}
          run: |
            if [[ "$TITLE" == * "bug" * ]]; then
              // code to tag.
  ```

* **(2) Third-Party actions :-**
  * `=> only use verified creator's action from the action marketplace.`

* **(3) Permission & Permission issues :-**
  * `=> By default workflow have all the permission to run.`
  * `=> permission are managed at Job level. or workflow level`
  * **eg:**
    ```yaml
    name: test
    on: push
    permissions: # (Circled: -> It will apply to all jobs.)
      actions: read | write | none
      checks: --
      pull-requests: --
      deployments: --
    jobs:
      assign-label:
        permissions: ...
    ```

* **(4) Understanding GITHUB_TOKEN :-**
  * `Whenever you send an api req to github to access/manipulate your repo. you must be authenticated so they can make that api req. or not.`
  * `For this github provides a ${{ secrets.GITHUB_TOKEN }} automatically based on your permission you don't need to create it.`
  * `eg: -H 'Authorization: Bearer ${{ secrets.GITHUB_TOKEN }}'`

---

## Page 16: Security Settings & OIDC
* `* Other actions we have used earlier eg:`
  * `actions/checkout@v4 It also actually send a get req. to github-api with the token under the hood.`

* **=> Security settings :-**

* **=> OpenID Connect :-**
  * `In modern ways,`
    * `AWS IAM + OIDC (OpenID Connect)`
  * `works together which give your git-action workflows secure, temporary access to aws resources without long-term aws credentials.`

* **High-level Flow :-**
  * `-> git-actions asks github for an OIDC token.`
  * `-> this token proves "this job is running in github, in this specific repo & branch".`
  * `-> In AWS, you create a role with trust policy that says "I trust git-action (via its OIDC provider), but only if the token matches certain condition like repo/branch name etc."`
  * `-> The github workflows uses the OIDC token to assume the aws role, & temporarily get permission (eg: access to s3, deploy to lambda)`
  * `-> Aws returns short-lived credentials, used by the workflow. (STS: AssumeRoleWithWebIdentity)`
  * `-> Now you don't need to store AWS credentials in secrets.`
