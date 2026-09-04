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
