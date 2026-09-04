# Shell Scripting

`echo` => To print something `eg: echo "Pankaj"`

`use vim editor :-`
=> `vim filename.txt + Enter` (to open a file)
=> `i` (to enter into insert mode), `Esc` (to exit insert mode)
=> `:wq` (means write & quit) or `:x`
=> `:q!` (means quit without saving)
=> `:w` (save write file)
=> `:q` (quit)
=> `:` (Enter command mode from normal mode)
   `w` (write(save) the file)
   `q` (quit vim)
=> Totally it means save the file & exit vim.

---

### 1. Writing scripts
① There are multiple shells in the linux but for each script we must define for which shell ये script chalana है, so we must write/mention this in each/every file.
`eg: #!/bin/bash` => it means कि इस file के अंदर जो भी script है उसे bash के अंदर चलाओ

### 2. Understanding File Permissions
* `owner` => the user who owns the file.
  => when file is created, the creator becomes owner.
* `Group` => default permi = `r-x`
* `Other` => other users on that machine
  => default permi : `r--`

All the three, owner, Group & other should be on the same linux machine.
`eg: rwx r-x r--`

=> a typical file permi looks like this:
=> 10 characters
=> `Type + owner + Group + other`
   `(1)    (3)      (3)       (3)   = 10`

| Type | Permissions |
| :--- | :--- |
| `-` (Regular file) | `r` (read) |
| `d` (directory) | `w` (write) |
| `l` (symbolic link) | `x` (execute) |
| `c/b` (device file) | `-` (No permission) |

`eg: -rwxr-xr--`
* `-` -> Regular file
* `rwx` -> user can read, write or execute
* `r-x` -> group can read but can't write, execute
* `r--` -> other users can read

=> Octal shortcuts

| rwx | Binary | Values |
| :--- | :--- | :--- |
| `rwx` | `111` | $2^2 + 2^1 + 2^0 = 7$ |
| `rw-` | `110` | $2^2 + 2^1 + 0 = 6$ |
| `r--` | `100` | $2^2 + 0 + 0 = 4$ |
| `r-x` | `101` | $2^2 + 0 + 2^0 = 5$ |
| `---` | `000` | $0$ |

=> you can set permission like `eg. chmod 644 <filename>`
=> `chmod 764 <filename>`
* to the owner => `rwx`
* group => `rw-`
* other => `r--`

---

### 3. Running any bash script -
=> first write your script in `.sh` file.
=> change the permission to executable
   `eg: chmod 764 <filename> OR chmod +x <filename>`
=> Check the executable status using `ls -l`.
=> Running the file/script
   `(i) ./<filename>`
   `OR (ii) bash <filename>`

### 4. Multi-line comments :-
①
```bash
# This is first line of count
# This is second line of count
# -------- third line -------
```
② 
```bash
<<'COMMENT'
...
COMMENT
```

---

=> defining variables :-
`eg: name="baby"`
`echo "Name of the person is $name"`

=> defining a expression/command inside a command
`eg: date` => this command gives you current date in linux.
`echo "The user name is $name & the date is $(date)"`

*(Notes on variables)*:
* `$count` => to display dynamic value
* `$(date)` => command substitution
* `$((2+2))` => arithmetic

=> Taking input from user :-
```bash
echo "Enter the name:"
read username   # -> user input will be captured in this variable
echo "your name is $username"
```
OR
```bash
read -p "Enter email: " emailID   # -> p = for prompt / label
echo "you entered $emailID"
```

---

=> Providing & accessing arguments
`eg: ./first-script.sh pankaj tonyji` -> argument passed to the script
`eg: echo "The arguments are $1 $2"` -> ($1 = pankaj, $2 = tonyji)

=> conditionals :-
```bash
eg: read -p "what is my batch name: " batchName
if [[ $batchName == "pepe-2" ]];
then
   echo "Correct Password!"
else
   echo "incorrect Password!"
fi  # -> To close if condition
```
=> for else if you can use (`elif`)

=> comparing values :-
`$count -ge 100` -> greater than equal to

=> Loops
```bash
eg: for ((num=1; num<=5; num++))  # -> Remember two bracket
do
   echo "five number $num"
done
```

```bash
eg: num=1
while [[ $num -le 5 ]]
do
   echo "stat"
   num=$((num+1))
done
```
