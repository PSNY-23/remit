# SQL Notes: Joins, Subqueries & Functions (Exact Transcription)

## Page 1: Cascading FK & Alter Table
* **Cascading for FK :-**
  * `-> ON DELETE CASCADE`
  * `-> ON UPDATE CASCADE`
  * When we create a FK, using this option, it deletes the referencing rows in the child table. When the transfered row is deleted in the parent table which has a primary key.
  
  * **eg:** 
    ```sql
    CREATE TABLE student (
        id -> INT PRIMARY KEY
        courseID -> INT
        FOREIGN KEY (courseID) REFERENCES Course(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );
    ```
    *-> foreign key के साथ ही ये भी define करेंगे*

* **ALTER => To change the schema**
  * **ADD Column**
    ```sql
    ALTER TABLE table_name 
    ADD COLUMN column_name datatype constraints;
    ```
  * **DROP Column**
    ```sql
    ALTER TABLE table_name 
    DROP COLUMN column_name;
    ```
  * **RENAME Table**
    ```sql
    ALTER TABLE table_name 
    RENAME TO new_table_name;
    ```
  * **CHANGE/MODIFY Column (rename)**
    ```sql
    ALTER TABLE table_name 
    CHANGE COLUMN old_name, new_name new_datatype, new_cont;
    ```

---

## Page 2: Truncate & Inner Joins
* **Truncate :-**
  * `DROP` -> delete the table itself
  * `Truncate` -> delete the data of table, table (empty) still remains.

* **Joins :-**
  * Joins is used to combine rows from two/more tables, based on a related column between them.

* **(1) Inner Joins :-** *(Venn diagram intersecting)*
  * Returns records that have matching values in both tables.
  * **eg:**
    ```sql
    SELECT column(s)
    FROM tableA
    INNER JOIN tableB
    ON tableA.col_name = tableB.col_name;
    ```

  * **Tables Example:**
    * **Student Table:**
      | student_id | name |
      | :--- | :--- |
      | 101 | adam |
      | 102 | bob |
      | 103 | casey |
    * **Course Table:**
      | student_id | course |
      | :--- | :--- |
      | 102 | english |
      | 105 | math |
      | 103 | science |
      | 107 | CSE |

  * दोनो का inner join वाला table क्या होगा
  * Since 3 unique column है so, final में 3 column होंगे (student_id, name, course)

    | student_id | name | course |
    | :--- | :--- | :--- |
    | 102 | bob | english |
    | 103 | casey | science |
    
  * *(Row 101 adam is crossed out)* -> बाकी सारे row ignore हो जायेंगे | 101, 105, 107 दोनो column में नहीं है |

---

## Page 3: Left Join & Full Join
* **Left Join :-** 
  * Returns all records from the left table, and the matched records from the right table. *(Venn diagram left side and intersection shaded)*
  ```sql
  SELECT column(s)
  FROM tableA
  LEFT JOIN tableB
  ON tableA.col_name = tableB.col_name;
  ```
  * **Result =>** क्योकि सारे col select करते है, So, 3 unique col होंगे
    
    | student_id | name | course |
    | :--- | :--- | :--- |
    | 101 | adam | **null** |
    | 102 | bob | english |
    | 103 | casey | science |
    
  * क्योकि student का तो सारा लौटना है But हो सकता है की सारे student id का course ना हो तो null रख देंगे |

* **Full Join :-**
  * Returns all records when there is a match in either left / right table.
  ```sql
  SELECT * FROM table_nameA
  LEFT JOIN tableB
  ON tableA.col_name = tableB.col_name
  UNION
  SELECT * FROM tableA
  RIGHT JOIN tableB
  ON tableA.col_name = tableB.col_name
  ```
  * **eg:**
  ```sql
  SELECT a.column, b.column 
  FROM tableA as a 
  LEFT JOIN tableB as b 
  ON a.id = b.id
  UNION
  SELECT a.column, b.column 
  FROM tableA as a 
  RIGHT JOIN tableB as b 
  ON a.id = b.id
  ```

---

## Page 4: Exclusive Joins, Self Join & Sub-Queries
* **Left / Right Exclusive Join :-**
  * *(Venn diagrams: Left Exclusive Join (only left shaded), Right Exclusive Join (only right shaded))*
  * **eg:**
    ```sql
    SELECT *
    FROM tableA
    LEFT JOIN tableB
    ON tableA.id = tableB.id
    WHERE tableB.id IS NULL;
    ```
* **Self Join :-** consider same table in place of tableA & tableB.

* **SUB-Queries :-**
  * -> a subquery / inner query is a query within another SQL Query.
  * -> it involves 2 SELECT statement.
  * **eg:**
    ```sql
    SELECT column(s)
    FROM table_name
    WHERE col_name operator (subquery)
    ```
  * **Student table:**
    | rollno | name | marks |
    | :--- | :--- | :--- |
    | 101 | anil | 78 |
    | 102 | bhumika| 93 |
    | 103 | chetan | 85 |
    | 104 | dhruv | 96 |
    | 105 | emanuel| 92 |
    | 106 | farah | 82 |
  
  * => find the names of all students who scored more than class avg;
    * Step 1 -> Find the avg of class
    * Step 2 -> Find the names of students with marks > avg.
  
  ```sql
  SELECT name 
  FROM student 
  WHERE marks > (SELECT AVG(marks) FROM student); -- This part is the sub-query
  ```

---

## Page 5: String Patterns & Complex Queries
* **(3) How to select / check if a string starts with 'S', ends with 'S' and is atleast 6 character long.**
  ```sql
  WHERE string LIKE "S____%S"
  ```
* **(4) If there are multiple steps of ordering to get the desired result:**
  ```sql
  ORDER BY first_step, second_step, ...
  ```
* **(5) There is a Patient table, which has a field gender. You have to return a new table that has two column.**
  * `[ male-patient | female-patient ]`
  * `[ 2709 | 2888 ]`
  
  * *(Initial attempt crossed out in notes)*
    ~~SELECT~~ 
    ~~(SELECT COUNT(*) FROM Patients WHERE gender="M") AS male_patients,~~
    ~~(SELECT COUNT(*) FROM Patients WHERE gender="F") AS female_patients;~~
    
  * **sol =>**
    ```sql
    SELECT 
        SUM(gender = "M") AS male_cnt,
        SUM(gender = "F") AS female_cnt
    FROM patients;
    ```

---

## Page 6: Dates & String Functions
* **(1) How to manipulate dates in SQL?** string -> data type.
  * dates are stored as => `'2025-10-09'` (DATE)
  * date-time => `'2025-10-09 14:30:00'` (DATETIME or TIMESTAMP)
  * **eg:**
    ```sql
    CREATE TABLE events (
        id INT,
        name VARCHAR(100),
        event_date DATE
    );
    ```
  * => `YEAR("2025-10-09")` => `2025`
  * => `MONTH("2025-10-09")` => `10`, also you can extract DATE.
  * **=> Filtering by year :-**
    * `WHERE YEAR(date) = 2025` => will fetch all data where date = 2025 (But slow)
    * `WHERE date >= "2025-01-01" AND date < "2026-01-01"` => fetches same as above but fastly.
    * *(you can directly compare string date.)*
  * => `CURDATE()` gives you today's date.
    * eg: `SELECT CURDATE();`
  * **=> Adding / subtracting dates / years / months :-**
    1. add 10 days:
       `SELECT DATE_ADD("2025-10-09", INTERVAL 10 DAY);`
    2. add 1 Year:
       `SELECT DATE_ADD("2025-10-09", INTERVAL 1 YEAR);`
    3. Subtract two dates:
       `SELECT DATEDIFF("2025-12-01", "2025-10-01"); // 61`

* **(2) How to get length of a string ?**
  * `LENGTH(string)` or `CHAR_LENGTH(string)`

---

## Page 7: More Functions & Subqueries
* **(4) CONCAT(first_name, " ", last_name)**
  * -> To add strings

* **(5) How to select the details of patient, who has max height in Patient table.**
  * => To get max height:
    ```sql
    SELECT MAX(height) FROM Patients
    ```
    *-> This won't give you the row but what is max height eg: 5, or 8*
  * Now with that height we need to find the row with that height.
  * **eg:**
    ```sql
    SELECT * 
    FROM Patients 
    WHERE Height = (SELECT MAX(height) FROM Patients);
    ```

* **(6) How to convert string in upper case / lower case**
  * `UPPER(string/column)`
  * `LOWER(string/column)`

* **(7) How to select second highest ?**
  ```sql
  SELECT (
      SELECT DISTINCT Salary 
      FROM Employee 
      ORDER BY Salary DESC 
      LIMIT 1 OFFSET 1
  ) as second_highest
  ```
  * => Select the distinct salary
  * -> Then, order them in descending order.
  * -> Then skip the first & take next one row
