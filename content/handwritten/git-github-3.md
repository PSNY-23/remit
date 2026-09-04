# Git & GitHub Advanced Notes (Collaboration & Workflows)

## Page 1: Working with Multiple Remote Branches
* **Workflow when working with a GitHub repo that has multiple branches on GitHub:**
  * Clone the repo.
  * `git branch` $ightarrow$ will not show all the branch the GitHub repo has (only `main`).
    * $ightarrow$ Why? (Though we have all the data GitHub repo had).
  * $ightarrow$ To see the remote branches run:
    `git branch -r`
  * The `master` branch in my local repo is already (default) tracks the master branch of the remote (`origin/master`).
  
  * **Diagram representation:**
    * Local: `[main]` $ightarrow$ default connection $ightarrow$ GitHub: `origin/master`, `origin/puppies`, `origin/dogs`, `origin/foods`.
  
  * But I want to work on `puppies` branch locally. I could checkout `origin/puppies` but will be in detached HEAD state.
  * I want my local branch called `puppies` and I want it to be connected to `origin/puppies` just like my local master branch is connected to origin master.

---

## Page 2: Tracking Remote Branches & Fetching
* **To Proceed :-**
  * (i) `git switch <remote-branch-name>`
    * To create a new local branch from the remote branch of the same name.
    * `git switch puppies` $ightarrow$ makes me a local `puppies` branch AND sets it up to track the remote branch `origin/puppies`.
  * (ii) make changes & commit
  * (iii) `git push origin <branch-name>` $ightarrow$ Push on that branch only, not main.

* **Fetching :-**
  * Let's say you were working on a repo and as you were working, other collaborators made some commit. But you don't know what was committed. So you need to update your local repo.

---

## Page 3: Git Lifecycle & Fetching Concepts
* **Diagram:**
  * `Working Space` $ightarrow$ git add $ightarrow$ `Staging Area` $ightarrow$ git commit $ightarrow$ `Local Repo` $ightarrow$ git push $ightarrow$ `Remote Repo (Github)`
  * `git fetch` updates `Local Repo` from `Remote Repo`.
  * `git pull` updates `Working Space` directly from `Remote Repo`.

* **Fetching :-**
  * It allows you to download changes from a remote repo. But those changes will not be automatically integrated into our working files.
  * $ightarrow$ It lets you see what others have been working on, without having to merge those changes into your local repo.
  * $ightarrow$ Think of it as `"please go and get the latest information from GitHub, but don't screw up my working directory"`.
  * $ightarrow$ Then you can see the difference using `git diff`.
    * **eg:** `git diff main origin/main`
  * **Commands:**
    * `git fetch <remote>` (e.g., `git fetch origin`)
    * `git fetch origin <branch-name>`

---

## Page 4: Viewing Remote Changes & Pulling
* **Example Diagram:**
  * Github vs My Local branches after teammate commits.
  * To see the changes $ightarrow$ `git log origin/main`
  * $ightarrow$ `git diff <branch-name> origin/<branch-name>`

* **Pulling :-**
  * It actually updates our HEAD Branch with whatever changes are fetched from the remote.
  * $ightarrow$ It's like `"go and download data from GitHub AND immediately update my local repo with those changes"`.
  * $ightarrow$ `git pull = git fetch + git merge`
  * **Command:** `git pull <remote> <branch>` (e.g., `git pull origin master`)
  * $ightarrow$ Pulls can result in **conflicts**.

---

## Page 5: GitHub Features & Collaboration Workflows
* Public repo
* Private repo
* Collaborative Permission
* **Readme file** $ightarrow$ It automatically gets rendered to the viewers.
* **GitHub gists** $ightarrow$ A simple way to share code snippets & useful fragments with others.
  * $ightarrow$ easier to create but very less feature compared to a git repo.
* **GitHub Pages :-**
  * GitHub allows you to create and host and publish a website.
  * $ightarrow$ for static webpages. (html, css, js)
  * $ightarrow$ doesn't support server-side code. (e.g., Python, Node.js, Ruby etc.)

* **Git Collaboration Workflows :-**
  1. **Centralized Workflow :-**
     * $ightarrow$ Everyone works on single branch (main/master).
     * $ightarrow$ May work for tiny projects/team.
     * **eg:** Let's say Ram & Shyam are working on a project that have just one branch (master).
     * Both Ram & Shyam clones the repository for the first time so identical for both of them.
     * Ram made a commit feature 1.
     * Shyam: He was still working on feature 2, but now he completed it, if he will try to push it, there will be error.

---

## Page 6: Why to Pull & Conflict Resolution in Centralized Workflow
* **Why to pull?**
  * When you add something or commit something on your local branch, it doesn't affect remote tracking branch you have. If some other person pushed something on GitHub, your remote tracking branch doesn't know about it.
  * $ightarrow$ To push successfully, your remote tracking branch should be identical to GitHub's commit history.
  * $ightarrow$ So first pull all the changes to your local remote tracking branch, then push.
  * **Shyam's fix:** He will have to pull the changes from the GitHub repo, then merge the feature 2 locally (will be a merge commit) & if there is any conflict resolve it. And after that he will be able to push the project with feature 2 on GitHub.
  * **Next day:** Let's say next day they both clones the repo again so had identical copy.
  * Ram: working on feature 3, but wasn't able to make it, he needs some help from Shyam. So he pushed the broken code on the repo.
  * Shyam: He was working on feature 4, and hasn't finished yet, but he got a message that he has to look for the code of Ram.
  * Now if he tries to pull the latest updates from the repo, there will be an error. It will say that stash or commit your changes or commit locally then you can pull from remote repo.

---

## Page 7: Feature Branch Workflow & Day-to-Day Commands
* **(i) Git Clone `<url>`**
  * `cd ecommerce-app`
* **(ii) Create a feature branch :-**
  * `git fetch origin`
  * `git checkout -b feature/checkout-page`
  * `// do your work`
  * `git add .`
  * `git commit -m "..."`
  * `git push origin feature/checkout-page`
* **(iii) PR :-** Make a PR from `feature/checkout-page` $ightarrow$ `main`.
* **(iv) For Next days :-**
  * `git checkout main`
  * `git fetch origin`
  * `git rebase origin/main`
  * `git checkout -b feature/input-ui`
  * `// do work`
  * `git fetch origin`
  * `git rebase origin/main`
  * `git push origin feature/input-ui`
  * `git checkout main`
  * `git branch -d feature/input-ui`
  * `git fetch -p`

---

## Page 8: Workflows for Feature Branches & Code Reviews
* **Workflows for Feature Branches :-**
  * $ightarrow$ All new development should be done on separate branches.
  * $ightarrow$ Master/main (Official Project History).
  * $ightarrow$ Multiple teammates can work on a single feature branch.
* **eg:** Ram & Shyam are working on a repo that has a master & two feature $ightarrow$ feature 1 & feature 2 $ightarrow$ on which they work.
  * Shyam: Working on feature 1, made some commits etc. & pushed to GitHub. (Now he wants Ram to look the code & suggest).
  * Ram: Ram was working on feature 2 branch but it is still working, has made some commits too. But he doesn't know what updates happened on GitHub repo.
  * So, when Shyam texts him, he can pull that branch (feature 1) and see it. His feature 2 branch will remain unaffected.
  * **Done:** Let's say now feature 1 is complete & he test the owner to see the feature 1. Owner thinks it's perfect so he will merge it.

---

## Page 9: Merging in Feature Branches & Pull Requests (PR)
* **Merging in Feature Branches :-**
  * Let's say we made the feature branch and it's completed, now we want to merge it in master branch.
* **Pull Request (PR) :-**
  * It's a feature built into products like GitHub & Bitbucket.
  * It allows developers to alert team members about new work that needs to be reviewed.
* **Workflow :-**
  1. Do some work locally on feature branch.
  2. Push up the feature branch on GitHub.
  3. Open a Pull Request (PR) using feature branch just pushed to the GitHub (from GitHub GUI).
  4. Wait for PR to be approved & merged. Start a discussion on the PR.

---

## Page 10: Fork & Clone Workflow (Open Source Contributions)
* **Fork & Clone Workflow :-**
  * $ightarrow$ Instead of just one centralized group repo, every developer has their own group repo, in addition to the main repo.
  * $ightarrow$ Developer makes changes & push to their own fork before making Pull Request.
  * $ightarrow$ Quite common in large scale projects. (Meets contributor, lead maintainer).
* **Forking:** making a personal copy of someone else's repository.
* **Cloning:** getting your own side locally, but you can merge it or push it.
* **Tracking:** linking your local repo to upstream (fork) then client.
