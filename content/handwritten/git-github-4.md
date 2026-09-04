# Git & GitHub - Part 4 Notes

## 1. Forking, Origin & Upstream Workflow (Open Source Contributions)
* **Terminology:**
  * **Original / Upstream:** The main repository owned by the project maintainers.
  * **Forked / Origin:** Your personal copy of the repository on your GitHub.
  * **Cloned:** The local copy of your forked repository on your computer.

* **Why setup Upstream?**
  If you clone your fork (origin), pulling updates directly fetches from your fork. To pull latest updates from the original repository, you need to configure an **upstream** remote.

### Step-by-Step Guide to Contribute via Pull Request (PR) :-
1. Make a **fork** of the main repository on GitHub.
2. Clone your forked repo locally:
   ```bash
   git clone <forked-repo-url>
   ```
3. Add the original repo as **upstream**:
   ```bash
   git remote add upstream <original-repo-url>
   ```
4. Ensure your local `main` branch is up to date:
   ```bash
   git checkout main
   git pull origin main  # just to make sure
   ```
5. Create and switch to a new feature branch:
   ```bash
   git checkout -b feature-branch-name
   # OR: git switch -c feature-branch-name
   ```
6. Make your changes, then sync with upstream before pushing (if needed):
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   git push origin main
   ```
7. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "your commit message"
   ```
8. Push your feature branch to your origin (fork):
   ```bash
   git push origin feature-branch-name
   ```
9. Go to GitHub and **Create PR (Pull Request)** against the original repository.

---

## 2. Rebasing :- The Scariest Git Command
There are two main ways to use the `git rebase` command:
1. As an **Alternative to merging**.
2. As a **Cleanup tool** (rewriting history).

* **How it works conceptually:** Instead of creating a merge commit that joins two branch histories together, rebasing takes the commits from your current branch and "re-plants" them on top of another branch's tip, rewriting the commit history to be linear.
* **WARNING:** **Don't use rebase when multiple people are working on a single branch**, because it rewrites commit hashes and history, causing conflicts for collaborators.

---

## 3. Rewriting History (Interactive Rebase)
* To rewrite, delete, rename, or reorder commits before sharing them with others, we use **Interactive Rebase**.
* **Command:** `git rebase -i` (Enters interactive mode).
* Once inside, you can edit, add files, drop commits, squash, etc.
* **Note:** We are not necessarily rebasing onto another branch here; instead, we are rebasing a series of commits onto the HEAD they are currently on.
  * *Example:* `git rebase -i HEAD~4`

---

## 4. Comprehensive Git Commands & Cheat Sheet

### Configuration & Setup
* `git config --global user.name "Pankaj Kumar"`
* `git config --global user.email "..."`
* `git config --global core.editor "code --wait"`
* `git init`

### Basic Inspection & Status
* `ls` (lists folders)
* `ls -a` (lists all files including hidden)
* `ls -la` (detailed listing)
* `git status`
* `git log`
* `git gui`

### Staging, Restoring & Committing
* `git add <filename>`
* `git restore --staged <filename>` (Unstaging files)
* `git restore <filename>`
* `git commit`
* `git commit -m "message"`
* `git commit --amend -m "message"` (Amend last commit message)

### Branching & Merging
* `git branch -v`
* `git branch <branch-name>`
* `git switch <branch-name>`
* `git switch -c <branch-name>`
* `git branch -d <branch-name>` (Delete branch safely)
* `git branch -D <branch-name>` (Delete branch forcefully)
* `git branch -m <new-name>` (Rename current branch)
* `git merge <branch-name>`

### Diff Variations
* `git diff` (Diff between working area & last commit)
* `git diff --cached` / `git diff --staged` (Diff between staged file & last commit)
* `git diff HEAD` (Diff between working area & last commit)

### Stashing
* `git stash`
* `git stash pop`
* `git stash apply`
* `git stash list`
* `git stash apply @{sn}`
* `git stash drop @{sn}`
* `git stash clear`

### Checkout & Time Travelling
* `git checkout <commit-hash>`
* `git checkout HEAD~n` (Go `n` steps before HEAD)
* `git checkout <filename>` or `git checkout -- <filename>`

### Restore Variations
* `git restore <filename>`
* `git restore --source HEAD~1 <filename>`
* `git restore --staged <filename>`

### Resetting & Reverting
* `git reset <commit-hash>` (Resets repo to specific commit; files remain modified/unstaged)
* `git reset --hard <commit-hash>` (Completely removes changes and commits back to that point)
* `git revert <commit-hash>` (Creates a brand new commit that undoes changes from a specific past commit; safe for collaboration)
