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
