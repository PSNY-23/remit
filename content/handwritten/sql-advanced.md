# Advanced SQL Concepts: Control Flow, Execution Order & DML

## 1. Control Flow (`CASE` Statement)
The `CASE` statement acts like an `if-else` condition within SQL queries. It allows you to return specific values based on evaluated conditions.
```sql
CASE 
    WHEN condition1 THEN result1 
    WHEN condition2 THEN result2 
    ELSE result3 
END;
```

---

## 2. Order of Execution vs. Order of Writing
It is crucial to understand that SQL queries are **not** executed top-to-bottom as they are written. 

### How you *Write* a Query (Order of Clauses):
1. `SELECT` ...
2. `FROM` ...
3. `[JOIN ... ON ...]`
4. `WHERE` 
5. `GROUP BY`
6. `HAVING`
7. `ORDER BY`
8. `LIMIT` / `OFFSET`

### How the SQL Engine *Executes* the Query:
1. **`FROM`**: Identifies the base table(s).
2. **`JOIN`**: Merges data from multiple tables.
3. **`WHERE`**: Filters individual rows *before* any grouping or aggregation happens.
4. **`GROUP BY`**: Groups the filtered rows based on common column values.
5. **`HAVING`**: Filters the *groups* after aggregation (used for evaluating aggregate values like `SUM()`, `COUNT()`, etc.).
6. **`SELECT`**: Determines which columns or aggregate results to return.
7. **`ORDER BY`**: Sorts the final result set.
8. **`LIMIT` / `OFFSET`**: Restricts the number of output rows.

> **Important Note on Grouping:** 
> * `GROUP BY` and `HAVING` usually operate together. 
> * To select from groups, you almost always need an aggregate function. You can **only** select the columns you are grouping by, OR aggregate functions applied to other columns.

---

## 3. Data Modification (`UPDATE` and `DELETE`)
*After learning how to create and query (read) tables, the next step is modifying existing data.*

### Update Command
Modifies existing records in a table.
```sql
UPDATE table_name 
SET col1 = val1, col2 = val2 
WHERE condition;
```
*(**Tip:** The `WHERE` clause is critical here—it selects the specific row(s) that need to be updated. Omitting it will update every row in the table!)*

### Delete Command
Removes existing records from a table.
```sql
DELETE FROM table_name 
WHERE condition;
```

---

## 4. Revisiting Foreign Keys (Schema Example)
A Foreign Key (FK) links two tables together, establishing a relationship. 

**Example Setup:**
```sql
-- 1. Create the parent table first
CREATE TABLE dept (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

-- 2. Create the child table that references the parent
CREATE TABLE teacher (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES dept(id)
);
```
*(**Tool Tip:** In MySQL Workbench, you can visualize these relationships by going to `Database` -> `Reverse Engineer` -> `Next` -> `View` to see the generated Entity-Relationship (ER) diagram.)*
