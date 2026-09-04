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
