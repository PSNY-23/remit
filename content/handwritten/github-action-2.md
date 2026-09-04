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
