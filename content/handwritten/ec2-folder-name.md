# List of all Folders on EC2

* **Root =>** `bin`, `boot`, `bin -> usr - is merged`, `dev`
  * `etc`, `home`, `lib`, `lib -> usr - is merged`
  * `lib64`, `lost+found`
  * `media`, `mnt`, `opt`, `proc`, `root`, `run`
  * `sbin`, `sbin -> usr - is merged`
  * `snap`, `srv`, `sys`
  * `tmp`, `usr`, `var` -> actual data

* **Classification =>**
  1. **System stuff =>** `bin`, `sbin`, `lib`, `etc` -> Configuration
  2. **Users =>** `home`, `root`, `usr` -> Installed software
  3. **Running system =>** `proc`, `run`, `sys`
  4. **Storage / data =>** `var` (logs, database, Docker), `mnt` (Mounted volume), `media`
  5. **Extra software =>** `opt`, `snap`

* (1) Default location in terminal of EC2 => `/home/ubuntu`
* (2) When you make any project => `/home/ubuntu/my-app`
* (3) **Webserver :-**
  * website => `/var/www/html`
  * config => `/etc/apache`
  * logs => `/var/log/apache`

---

# SQL Notes Continuation

* **(5) How to use variables in Query?**
  * eg: `getNthHighestSalary(N)`, So, now the `N` is variable and we need to use this in our SQL Query.
  * eg: `OFFSET N-1 => X.` (Because `N-1` is not calculated & SQL doesn't takes any expression).
  * **Solution :-**
    * Make a variable outside the Query to compute the expression before using in SQL Query.
    * eg: 
      ```sql
      DECLARE computed_val INT;
      SET offset_val = N-1; 
      ```
      *(Note: Arrow in notes points from offset_val to computed_val)* 
      -> Now you can use this `offset_val` in your query.

* **(6) How to add a new column to an existing table?**
  ```sql
  ALTER TABLE table_name
  ADD COLUMN column_name datatype constraints;
  ```
