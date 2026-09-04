# Git & GitHub Notes

## Page 1: Basic Git Commands & Setup
* `ls -a` $ightarrow$ all files
* `ls -la` $ightarrow$ all files with details.

* **git commands**
  1. `git config --global user.name "Pankaj Kumar"`
     `git config --global user.email "Pankajtecelact@gmail.com"`
  2. `mkdir`, `ls`, `cd`, `touch`
  3. `git status`
     `git init`
     * `ls -a` ; To get the list of all the files and folders (even the hidden one).
  4. `git add` : for Staging from Working directory.
     `git commit` : for Committing from Staging Area.
  5. `start .` OR `start <foldername>`
     * $ightarrow$ To open the root folder in the file explorer.
     * `ls <foldername>` $ightarrow$ To get inside that folder and list of all the files.
     * `clear` $ightarrow$ To clear the screen.
     * `pwd` $ightarrow$ Present working directory.
     * `rm -rf <foldername>` $ightarrow$ To remove the folder. | `rm <filename>` $ightarrow$ To remove files.
  6. **Seeing the commits :-**
     * `git log` $ightarrow$ details about all commits
       * $ightarrow$ each commit shows $ightarrow$ Author, name, date, message.

---

## Page 2: Long Commit Messages, Ammending Commits & Branching
* **Adding long commit message :-**
  * $ightarrow$ VS code: `git config --global core.editor "code --wait"`
  * $ightarrow$ VS code as command palette $ightarrow$ `code command install`
  * $ightarrow$ `git commit` $ightarrow$ You will see a new page to write message in VS code.

* **Ammending commits :-**
  * file में commit करना भूल गए, typo etc., then rather than making another commit to correct it, it's recommended to amend the last commit.
  * **eg:**
    ```bash
    git commit -m "Example of error commit"
    git add <forgotten file>
    git commit --amend
    ```

* **Branching :-**
  * $ightarrow$ Master was renamed to **main** in 2020.
  * $ightarrow$ **HEAD:** Pointer that refers to the current location in your repository.
  * $ightarrow$ `git branch` :- to view your existing branches.
  * `git branch -v` (extra info) $ightarrow$ `*` represents the current branch you are on.
  * `git branch <branch-name>` :- Create a branch based on current Head. But head doesn't switch to the new branch.

---

## Page 3: Switching Branches & Branch Management
* `git switch <branch-name>` : To switch between the different branches.
* `git commit -a -m "message"` $ightarrow$ shortcut to commit without adding/staging.
* `git switch -c <branch-name>` OR `-b` $ightarrow$ create a branch and switch to it.
* `git branch -D <branchname>` :-
  * To delete a branch, you must **not** be on that branch, the branch must be merged to the main branch.
  * **eg:** `git branch -d <branch-name>`
  * But if we want to delete it forcefully without seeing its merging status:
    * **eg:** `git branch -D <branch-name>`
* `git branch -m <new name of the branch>` :-
  * To rename a branch you must be on that branch.

---

## Page 4: Inside the `.git` Folder
* **Looking inside the `.git` file :-**
  * $ightarrow$ `.git` folder is only created in the directory where git was initialized not all the subdirectories.
  * It contains all the data $ightarrow$ eg: `HEAD`, `config`, `description`, `hooks/`, `info/`, `objects/`, `refs/` etc.
  * We can use `cat <filename>` to read the data of any file.
  * Each folder in computer has two files away hidden: `.` and `..`
    * `.` $ightarrow$ Present directory reference.
    * `..` $ightarrow$ Parent directory reference.
  * **Now we will look what is inside `.git` folder and the files inside it:**
    * `.git`
      * `HEAD`
      * `config`
      * `hooks/`
      * `index`
      * `info/`
      * `logs/`
      * `objects/`
      * `refs/`
  * **`Cat HEAD` :-** `ref: refs/heads/master` $ightarrow$ means head is pointing to master branch.
  * **`refs/`** $ightarrow$ It's a folder which contain a file for each branch and stores its respective hash.

---

## Page 5: Merging Branches & Merge Conflicts
* **Merging Branches :-**
  * $ightarrow$ We merge branches, not specific commits.
  * $ightarrow$ We always merge to the current HEAD Branch.
  * $ightarrow$ First switch or go to the branch जिसमें merge करना है. (where we want to merge).
  * $ightarrow$ Then use `"git merge <branch-name>"` to merge that branch.
  * **eg:** Let's say 2 branch हैं `master`, `bugfix` और `bugfix` को `master` में merge करना है। (Let's say there are 2 branches master and bugfix and bugfix is to be merged into master.)
    ```bash
    git switch master
    git merge bugfix
    ```
  * It's called **fast-forward merge**.

* **What if we add a commit on master :-**
  * Imagine one of your teammates merged in a new feature or change to master while you were working on a branch.
  * Merging in this case is same as previous: `git merge <branch-name>`
  * यहाँ तक ठीक है, But sometimes, एक branch में कुछ change हुआ और उसे दूसरे branch से merge करना है, but branch 1 का code ऐसा है कि branch 2 के code के साथ co-exist नहीं कर सकता। So, there is **"merge conflict"**.
  * **eg:** Branch 1 $ightarrow$ color = red, Branch 2 $ightarrow$ color = blue.

---

## Page 6: Manually Fixing Conflicts
* **Manually fixing conflicts :-**
  * When you encounter a merge conflict, git warns you in the console that it could not automatically merge.
  * It also changes contents of your file to indicate the conflicts that it wants you to resolve.
* **Conflict Markers :-**
  * The content from the branch you are trying to merge from & to displayed between `<<<<<<<`, `=======`, and `>>>>>>>` symbols.
* **Steps to Resolve Conflict :-**
  1. Open the file(s) with merge conflicts.
  2. Edit the file(s) to remove the conflicts. Decide which branch's content you want to keep, or keep the content from both.
  3. Remove the conflict markers.
  4. Add your changes and then make a commit.

---

## Page 7: Git Diff & Understanding Chunks
* **Git diff :-**
  * To view changes between commits, branches, files, pushed etc.
  * We often use $ightarrow$ `git diff` just like `git log`, `git status`.
  * Compares Staging Area and Working Directory.
* **Intuition:** Let's say you made the last commit and now you changed something to your file, now you want to compare what was previous and what you change before making commit, this is what diff do.
  * `git diff` $ightarrow$ compares Working Directory & Staging Area (current state of file & staged state).
  * `git diff --cached` / `--staged` $ightarrow$ compares Staging Area & Last commit (staged file & last commit).
* **Chunks :-**
  * Diff won't show you the entire contents of a file, but only a portion/chunks that were modified.
  * $ightarrow$ It also includes some unchanged lines before and after a change to provide some context.
  * In a single diff reference there could be 100s of chunks.
  * `git commit -am "first commit"`

* **Structure of chunks :-**
  * `@@ -3,4 +3,5 @@` $ightarrow$ Chunk header: starting from line 3, 4 lines are extracted. 5 lines are extracted from line 3.
  * `-` $ightarrow$ Staging area (old).
  * `+` $ightarrow$ Current working dir (new).
  * Any thing which has `-` in start means it came from staging area.
  * `+` means came from working directory.

* **git diff HEAD :-**
  * Lists all the changes in the working tree space last commit. (diff/change in the HEAD (last commit) & working directory).
* **git diff HEAD [filename]** $ightarrow$ To view the change within a specific file.
* **git diff --staged [filename]** / `--cached` $ightarrow$ किसी फाइल को last commit और added/staged file के diff को show करेगा। (Shows diff of a file between last commit and added/staged file.)

---

## Page 8: Comparing Branches & Stashing
* **Comparing two branches :-**
  * `git diff branch1..branch2`
  * $ightarrow$ It will list the changes between the tips of branch1 and branch2.

* **Stashing :- (Hidden commit)**
  * Assume you are not on master branch but feature1 and you want have something staged on feature branch to commit, but because of some urgency you need to go to other branch. Then what will happen to the Staged changes on feature branch?
  * **(i) My changes on the feature branch will come to the master branch** (where I switched to) and अगर master पर भी हमने commit नहीं किया और autocratic दोबारा feature branch में आया, तो changes दोबारा feature branch में आ जाएंगे। (बोझा लेके होना) (If we don't commit on master and return to feature branch, changes come back.)
  * **(ii) If we don't want the changes to come directly from one branch to another do stashing.**
    * $ightarrow$ Stashes are not branch specific (But Branch aur label रहता है). (Has branch label.)
    * `1 stash` = `2 hidden commit` (for staged changes + unstaged changes).

---

## Page 9: Git Stash Commands
* **git stash :-**
  * It helps to save changes of on a branch without that you are yet not ready to commit.
  * You can stash the changes and come back later.
  * Running `"git stash"` will take all the uncommitted changes (staged & unstaged) and stash them, reverting the changes in your working copy.
* **git stash pop :-** (Stashed/save area से दोबारा working director में आ जायेगा)
  * It is used to remove the most recently stashed changes in your stash and reapply them to your working copy.
* **git stash apply :-**
  * To apply whatever is stashed away, without removing it from the stash. This can be useful if you want to apply stashed changes to multiple branch.
* **Managing multiple stashes:**
  * **Viewing stashed:** `git stash list`
  * **Clear stash:** `git stash clear`
  * **Delete/drop a stash:** `git stash drop stash@{3}`
  * **Apply specific stash:** `git stash apply stash@{2}`


# Git & GitHub - Part 2 Notes

## 10. Undoing changes & Time travelling

### ① Checkout :-
* The `git checkout` command is like a Git swiss army knife. Many developers think it's overloaded, which is what led to the addition of the `git switch` and `git restore` commands.
* We can use checkout to:
  * Create branches
  * Switch to new branches
  * Restore files
  * Undo history

* **`git checkout <commit-hash>`**
  * We will move in history and will see how things looked liked after that commit.
  * If you want to see how things looked before that commit, use the hash of the prev commit.
  * **Detached Head:** What does it mean?
    * Head points to a specific branch reference rather than a particular commit. A branch reference point to the last commit of that branch.
    * When you checkout a commit directly, Head points to that commit instead of a branch.

---

### On Detached Head State :-
* Head history में travel करता है, But branch तो last commit पर ही रहता है।
* If we run `git switch master`, we go back to the master branch.
* We can go back in history and make a new branch:
  * `git checkout <hash>`
  * `git switch -c feature1` (creates and switches to a new branch from that historical point)

* **`git checkout HEAD~n`** -> commit `n` steps before HEAD.

---

### Unstaging files with restore :-
* अगर गलती से कोई file staging area में पहुँच गई है और हम नहीं चाहते कि next commit में include हो (क्योंकि commit में कोई specific file नहीं पूरा staging area जाता है) तो we can use `git restore` to remove it from staging.
  `git restore --staged <filename>`

---

### Git Reset :-
* Suppose you have made a couple of commits on master branch, but you actually meant to make them on a separate branch instead. To undo those commits, you can use `git reset`.
* `git reset <commit-hash>` $ightarrow$ Will reset the repo back to a specific commit.
  * The commits are gone! But files mein changes रहेंगे ही — unstaged state में या modified कह सकते हैं।
* To remove the changes + commit & go completely back to that commit:
  `git reset --hard <commit-hash>`

---

### Git Revert :-
* Yet another similar sounding and confusing command that has to do with undoing changes.
* Similar to git reset (undoing changes), but:
  * `reset` $ightarrow$ actually moves the branch pointer backward eliminating commits.
  * `revert` $ightarrow$ creates a brand new commit which undoes the changes from a commit.
  * Since it's a new commit you will be prompted to enter a commit message.
* `git revert <commit-hash>`

**NOTE:** If you are in collaboration then use `revert`. Otherwise क्या होगा कि हम अभी 10th commit पर हैं और तुमने reset करके 5th commit पर आ गये, अब 6th, 7th, 8th, 9th, 10th commit delete हो गया पर बाकी तो 10th commit पर ही काम कर ही रहे थे — उनको Problem होगी तो use `revert`.

---

## GitHub & Remote Repositories

* Before cloning any project make sure you are not in a git repository.
* `git clone <git-project-link>`

### SSH Key :-
* You need to be authenticated on GitHub to do certain operations, like pushing up code from your local machine. You will be prompted to fill GitHub mail & password unless you generate & configure an SSH key.
* Once configured you can connect to GitHub without username/password.
* **Checking for existing SSH keys command:** `ls -al ~/.ssh`
  * Meaning $ightarrow$ list all the files in your `.ssh` directory if they exist.
* **Generating new ssh key :-**
  * Command: `ssh-keygen -t ed25519 -c "email"`
  * Then enter password.

---

### Connecting your local repo to remote :-
* To view any existing remote:
  * `git remote -v`
* **Adding a new Remote :-**
  * A remote is really two things:
    * A URL
    * A label (To create a new remote we need to provide both)
  * `git remote add <name> <url>`
  * `eg: git remote add origin <https://github.com/...> `
    * Means: "Okay git, anytime I use the name 'origin', I'm referring to this particular GitHub repo URL."
  * **Origin** $ightarrow$ Just a name for a URL. When we clone a repo, the default repo name is "origin".
* **Other commands :-**
  * `git remote rename <old> <new>`
  * `git remote remove <name>`

---

## 12. Fetching & Pulling

* When you clone a repo, you have only one local branch, but all remote branch references.
* The main of local will be mapped to `origin/master`.
* `git branch -r` $ightarrow$ Remote tracking branch:
  * It's a "remote tracking branch". It's a reference to the state of the master branch on the remote.
  * I can't move this myself.
  * It's like a bookmark pointing to the last known commit on the master branch on origin.
* To switch to other branches like `origin/feature` that are available on remote:
  * `git fetch origin` + `git checkout -b feature origin/feature`
  * Or `git checkout feature`

### Remote Branches :-
* `git remote branch -r` $ightarrow$ To know the remote branches our local repository knows about.
* Now if after cloning & on our local repo we do some more commit, you can see even after new commit, remote reference stays same (`origin/master` stays behind until fetched/pulled).
* If you make new commits on local repo but didn't push on GitHub, then if you run `git status`:
  * It will shows you how many commits you are behind the GitHub repo.
  * Detached Head state.
* `git checkout origin/master` (To checkout the remote branch pointers). `git switch origin/master` won't work, but doing the same thing as switching branch.


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
