# Comprehensive SQL Notes

## Page 1: Database Setup & String Data Types

**Database Operations**
* **Create a Database:** `CREATE DATABASE database_name;`
* **Note on Multiple Creation:** You cannot create multiple databases in a single standard query (e.g., `CREATE DATABASE test1, test2, test3;` ❌). They must be executed individually:
  * `CREATE DATABASE test1;` ✅
  * `CREATE DATABASE test2;` ✅
* **Safe Deletion:** To prevent errors if a database doesn't exist, use:
  * `DROP DATABASE IF EXISTS database_name;`

**Data Types: Foundation & Strings**
* **Byte Concept:** 1 Byte = 8 bits.
  * Total possibilities ($2^8$) = 256.
  * Index range = `[0, 255]`.
* **`CHAR`:** Stores fixed-length strings.
  * Best for data with consistent lengths (e.g., country codes).
  * Max length: 255 characters.
* **`VARCHAR(50)`:** Stores variable-length strings.
  * Flexible; only occupies the memory required by the actual text (up to the defined limit, e.g., 50).
* **`BLOB`:** Binary Large Object (0 - 65,535 bytes).
  * Used to store large binary data like images or massive files.

---

## Page 2: Numeric Types & SQL Sublanguages

**Data Types: Numerics, Booleans & Dates**
* **`TINYINT`:** Small integers (`-128` to `127`).
* **`INT`:** Standard integers (`-2,147,483,648` to `+2,147,483,647`).
* **`BIGINT`:** Extremely large integers.
* **`BIT`:** Stores bit values where `X ∈ [1, 64]`. (e.g., `BIT(2)`).
* **`FLOAT`:** Decimal numbers with precision up to 23 digits.
* **`DOUBLE`:** Decimal numbers with high precision (24-53 digits).
* **`BOOLEAN`:** Stores `0` (False) or `1` (True). (Often implemented as `TINYINT(1)` under the hood).
* **`DATE`:** Format is `YYYY-MM-DD` (e.g., `2000-11-09`).
* **`YEAR`:** 4-digit format (Range: 1901 to 2155).

**Signed vs. Unsigned Data**
* **Signed (Default):** Allows both negative and positive values. (e.g., `TINYINT` = `-128` to `127`).
* **Unsigned:** Restricts to positive values only, doubling the positive maximum. (e.g., `TINYINT UNSIGNED` = `0` to `255`).

**The 5 Categories of SQL Commands**
1. **DDL (Data Definition Language):** Defines structure (`CREATE`, `ALTER`, `RENAME`, `TRUNCATE`, `DROP`).
2. **DQL (Data Query Language):** Retrieves data (`SELECT`). Equivalent to 'Read' in CRUD.
3. **DML (Data Manipulation Language):** Modifies data (`INSERT`, `UPDATE`, `DELETE`).
4. **DCL (Data Control Language):** Manages permissions (`GRANT`, `REVOKE`).
5. **TCL (Transaction Control Language):** Manages transactions (`START TRANSACTION`, `COMMIT`, `ROLLBACK`).

---

## Page 3: Tables, Insertion & Relational Keys

**Table Operations**
* **View Structure:** `SHOW DATABASES;` | `SHOW TABLES;`
* **Create a Table:**
  ```sql
  CREATE TABLE table_name (
      column1_name datatype constraint,
      column2_name datatype constraint
  );
  ```

**Inserting Data**
```sql
INSERT INTO table_name (col1, col2) 
VALUES (col1_val1, col2_val1), (col1_val2, col2_val2);
```
* *Example:* `INSERT INTO student (roll_no, name) VALUES (101, 'Ram'), (102, 'Arjun');`

**Primary Key vs. Foreign Key**
* **Primary Key (PK):**
  * A column (or set of columns) that uniquely identifies every row in a table.
  * **Rules:** Only ONE Primary Key per table. Cannot contain duplicates or `NULL` values (e.g., Employee ID).
* **Foreign Key (FK):**
  * A column that creates a relationship by referencing the Primary Key of *another* table.
  * **Rules:** A table can have MULTIPLE Foreign Keys. They *can* contain duplicates and `NULL` values.

---

## Page 4: Constraints & Data Filtering

**SQL Constraints (Rules applied to columns)**
* `NOT NULL`: Ensures a column cannot have a `NULL` value.
* `UNIQUE`: Ensures all values in a column are distinct/different.
* `PRIMARY KEY`: Uniquely identifies a record (`NOT NULL` + `UNIQUE`).
* `FOREIGN KEY`: Enforces referential integrity between tables.
* `DEFAULT`: Sets a default value if no value is explicitly provided.
* `CHECK`: Limits the specific values allowed in a column.
  * *Example:* `age INT CHECK (age >= 18)`
  * *Example:* `CONSTRAINT age_check CHECK (age >= 18 AND City = 'Delhi')`

**Selection & Filtering**
* **Select Specific Columns:** `SELECT col1, col2 FROM table_name;`
* **Select Unique Values:** `SELECT DISTINCT city FROM student_table;` *(Returns only unique cities)*

**The `WHERE` Clause (Row-level filtering)**
* `WHERE marks > 80;`
* `WHERE marks > 80 AND city = 'Mumbai';`
* `WHERE marks BETWEEN 80 AND 90;`
* `WHERE city IN ('Delhi', 'Mumbai');`

**Basic Operators**
* **Arithmetic:** `+`, `-`, `*`, `/`, `%`
* **Comparison:** `=`, `!=`, `>`, `<`, `>=`, `<=`

---

## Page 5: Advanced Logical & Membership Operators

**1. Logical Operators (`AND`, `OR`, `NOT`)**
* Used to combine or negate conditions in a `WHERE` clause.
* **`AND`:** Both conditions must be true. (e.g., `WHERE age > 18 AND status = 'active'`)
* **`OR`:** At least one condition must be true.

**2. Null Comparison Operators (`IS NULL`, `IS NOT NULL`)**
* Standard equals `=` does not work for `NULL`. You must use `IS`.
* *Example:* `WHERE email IS NULL` (Finds records missing an email).
* *Example:* `WHERE email IS NOT NULL` (Finds records with an email).

**3. Set Membership Operators (`IN`, `ANY`, `ALL`, `EXISTS`)**
* **`IN`:** Checks if a value matches any value in a defined list or subquery. (e.g., `Country IN ('US', 'UK')`).
* **`> ANY`:** True if the value is greater than *at least one* value returned by a subquery.
* **`>= ALL`:** True if the value is greater than or equal to *every* value returned by a subquery.
* **`EXISTS`:** Returns True if the subquery returns one or more rows.

---

## Page 6: Pattern Matching & Ranges

**4. Pattern Matching Operators (`LIKE`, `NOT LIKE`)**
* Used to search for specific text patterns (similar to basic regex).
* Often used with wildcards (`%` represents zero or more characters).
* *Example:* `WHERE name LIKE 'A%'` (Finds all names starting with 'A').
* *Example:* `WHERE email NOT LIKE '%@spam.com'` (Excludes specific email domains).

**5. Range Operators (`BETWEEN`, `NOT BETWEEN`)**
* Checks if a value falls within (or outside) a specific continuous range.
* *Example:* `Price BETWEEN 100 AND 500` (Inclusive check).
* *Example:* `Score NOT BETWEEN 50 AND 90`.

---

## Page 7: Order of Execution & Data Modification

**The SQL Order of Execution (Crucial Concept)**
The order in which you *write* SQL is different from how the engine *executes* it:
1. **`FROM`**: Choose the initial base tables.
2. **`JOIN` ... `ON`**: Combine related tables.
3. **`WHERE`**: Filter individual rows *before* any grouping occurs.
4. **`GROUP BY`**: Aggregate rows into groups based on common values.
5. **`HAVING`**: Filter the grouped records (used *after* aggregation, often with `SUM()`, `COUNT()`).
6. **`SELECT`**: Choose the specific columns/aggregations to return.
7. **`ORDER BY`**: Sort the final result set.
8. **`LIMIT` / `OFFSET`**: Restrict the number of rows returned.
> *Note on Grouping:* `GROUP BY` and `HAVING` usually operate together. When grouping, your `SELECT` statement should generally only contain the grouped columns or aggregate functions applied to other columns.

**Modifying Existing Data (DML)**
* **Update Records:**
  ```sql
  UPDATE table_name 
  SET col1 = new_val1, col2 = new_val2 
  WHERE condition; 
  ```
  *(Always use a `WHERE` clause to target specific rows and avoid updating the entire table!)*

* **Delete Records:**
  ```sql
  DELETE FROM table_name 
  WHERE condition;
  ```

**Relational Schema Example (Foreign Key)**
```sql
CREATE TABLE dept (
    id INT PRIMARY KEY, 
    name VARCHAR(50)
);

CREATE TABLE teacher (
    id INT PRIMARY KEY, 
    name VARCHAR(50), 
    dept_id INT, 
    FOREIGN KEY (dept_id) REFERENCES dept(id)
);
```
