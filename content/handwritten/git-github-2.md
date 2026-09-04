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
