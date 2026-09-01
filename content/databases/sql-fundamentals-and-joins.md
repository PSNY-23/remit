---
title: "SQL Fundamentals, Relational Keys, JOINs, and Execution Stages"
category: "SQL Core"
description: "Primary vs Foreign keys, all 6 SQL JOIN types, WHERE vs HAVING, DELETE vs TRUNCATE vs DROP, and query execution lifecycle."
---

# SQL Fundamentals, Relational Keys & JOINs

Relational databases structure data into tables with enforced schemas, referential integrity, and relational algebra operations.

---

## 1. Primary Keys vs. Foreign Keys

| Attribute | Primary Key (PK) | Foreign Key (FK) |
| :--- | :--- | :--- |
| **Definition** | Uniquely identifies each record in a table. | References a Primary Key in another table to establish relationships. |
| **Nullability** | Strictly **NOT NULL**. | Can be `NULL` (unless explicitly declared `NOT NULL`). |
| **Count** | Exactly **one** per table. | A table can have **multiple** foreign keys. |
| **Indexing** | Automatically clustered index in InnoDB. | Secondary index recommended to accelerate `JOIN` lookups. |

---

## 2. All 6 SQL JOIN Types

```sql
-- 1. INNER JOIN: Only rows matching in both tables
SELECT u.name, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id;

-- 2. LEFT JOIN: All left table rows + matching right table rows (NULL if no match)
SELECT u.name, o.total FROM users u LEFT JOIN orders o ON u.id = o.user_id;

-- 3. RIGHT JOIN: All right table rows + matching left table rows
SELECT u.name, o.total FROM users u RIGHT JOIN orders o ON u.id = o.user_id;

-- 4. FULL OUTER JOIN: All rows when there is a match in either table
SELECT u.name, o.total FROM users u FULL OUTER JOIN orders o ON u.id = o.user_id;

-- 5. CROSS JOIN: Cartesian product (N * M rows)
SELECT * FROM colors CROSS JOIN sizes;

-- 6. Anti-Join (Find users with ZERO orders)
SELECT u.name FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.id IS NULL;
```

---

## 3. SQL Execution Lifecycle Order

SQL queries are **not** executed in the order they are written:

$$\text{1. FROM} \rightarrow \text{2. JOIN} \rightarrow \text{3. WHERE} \rightarrow \text{4. GROUP BY} \rightarrow \text{5. HAVING} \rightarrow \text{6. SELECT} \rightarrow \text{7. DISTINCT} \rightarrow \text{8. ORDER BY} \rightarrow \text{9. LIMIT}$$

- **WHERE vs. HAVING:** `WHERE` filters individual records **before** grouping; `HAVING` filters aggregated group summaries **after** `GROUP BY`.

---

## 4. DELETE vs. TRUNCATE vs. DROP

| Feature | DELETE | TRUNCATE | DROP |
| :--- | :--- | :--- | :--- |
| **Type** | **DML** (Data Manipulation) | **DDL** (Data Definition) | **DDL** (Data Definition) |
| **Scope** | Deletes rows matching `WHERE` clause | Deletes **all** rows instantly | Completely removes table schema and data |
| **Speed** | Slower (logs row-by-row deletions) | Extremely fast (deallocates pages) | Instantaneous |
| **Auto-Increment**| Does **not** reset ID counter | **Resets** auto-increment to 1 | Table ceases to exist |
