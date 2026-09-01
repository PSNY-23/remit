const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content', 'databases');
if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });

const databaseArticles = [
  {
    slug: 'sql-vs-nosql',
    title: 'SQL vs. NoSQL: Architectural Comparison & Selection Matrix',
    category: 'Relational vs. Non-Relational',
    description: 'Relational schema, ACID compliance, document, key-value, column-family, and graph databases.',
    content: `---
title: "SQL vs. NoSQL: Architectural Comparison & Selection Matrix"
category: "Relational vs. Non-Relational"
description: "Relational schema, ACID compliance, document, key-value, column-family, and graph databases."
---

# SQL vs. NoSQL

Choosing between a **Relational Database (SQL)** and a **Non-Relational Database (NoSQL)** is one of the most critical foundational decisions in software engineering.

---

## 1. High-Level Comparison

| Feature | SQL (PostgreSQL, MySQL, Oracle) | NoSQL (MongoDB, DynamoDB, Cassandra) |
| :--- | :--- | :--- |
| **Data Model** | Relational tables with fixed rows & columns | Documents (JSON/BSON), Key-Value, Graphs, Wide-Column |
| **Schema** | Rigid, predefined schema (enforced constraints) | Dynamic / Schema-less (flexible per record) |
| **Transactions** | Strong **ACID** guarantees by default | Eventual Consistency (**BASE** model), configurable ACID |
| **Scaling** | Primarily **Vertical Scaling** (CPU/RAM); Read-replicas for reads | Built for **Horizontal Scaling** (Sharding / Partitioning) |
| **Complex Queries** | High-performance multi-table \`JOIN\`s, aggregations | Optimized for key-based lookups and embedded documents; \`JOIN\`s are expensive or unsupported |
| **Data Integrity** | Foreign keys, unique constraints, referential integrity | Handled predominantly in application-level logic |

---

## 2. Decision Framework

- **Choose SQL When:**
  - Data structure is consistent and well-defined with complex multi-entity relationships.
  - Transactions require strict financial-grade ACID guarantees (e.g. banking, billing, order checkout).
  - You need flexible multi-table ad-hoc querying and analytics.

- **Choose NoSQL When:**
  - Handling unstructured or rapidly mutating semi-structured data (e.g., content catalogs, telemetry, IoT logs).
  - Massive write throughput requiring seamless multi-node horizontal sharding across regions.
`
  },
  {
    slug: 'primary-vs-foreign-keys',
    title: 'Primary Keys vs. Foreign Keys: Referential Integrity',
    category: 'SQL Core',
    description: 'Surrogate vs Natural keys, UUIDs vs Auto-increment integers, indexing behavior, and cascading constraints.',
    content: `---
title: "Primary Keys vs. Foreign Keys: Referential Integrity"
category: "SQL Core"
description: "Surrogate vs Natural keys, UUIDs vs Auto-increment integers, indexing behavior, and cascading constraints."
---

# Primary Keys vs. Foreign Keys

Primary and Foreign keys form the backbone of relational database design, enforcing uniqueness and referential integrity across related tables.

---

## 1. Core Differences

| Attribute | Primary Key (PK) | Foreign Key (FK) |
| :--- | :--- | :--- |
| **Definition** | Column(s) that uniquely identify each row in a table. | Column that references a Primary Key in another table. |
| **Nullability** | Strictly **NOT NULL**. | Can be \`NULL\` (unless explicitly marked \`NOT NULL\`). |
| **Uniqueness** | Strictly unique per table. | Can contain duplicate values (many rows referencing same parent). |
| **Count Per Table** | Exactly **one** primary key per table. | A table can have **multiple** foreign keys. |
| **Clustering** | By default forms the **Clustered Index** in engines like MySQL InnoDB. | Automatically benefits from secondary indexing for fast \`JOIN\`s. |

---

## 2. Foreign Key Cascade Actions

\`\`\`sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2),
    CONSTRAINT fk_user 
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);
\`\`\`

- \`ON DELETE CASCADE\`: Deleting a user automatically deletes all orders placed by that user.
- \`ON DELETE SET NULL\`: Deleting a user sets \`user_id\` to \`NULL\` on their orders.
- \`ON DELETE RESTRICT\` / \`NO ACTION\`: Blocks deletion of a user if active orders exist (recommended for financial auditability).
`
  },
  {
    slug: 'database-normalization-vs-denormalization',
    title: 'Database Normalization vs. Denormalization',
    category: 'SQL Core',
    description: '1NF, 2NF, 3NF, BCNF rules, update anomalies, write efficiency vs read performance tradeoffs.',
    content: `---
title: "Database Normalization vs. Denormalization"
category: "SQL Core"
description: "1NF, 2NF, 3NF, BCNF rules, update anomalies, write efficiency vs read performance tradeoffs."
---

# Normalization vs. Denormalization

**Normalization** is the systematic process of structuring a database schema to minimize data redundancy and prevent update anomalies. **Denormalization** intentionally introduces redundancy to optimize read query performance.

---

## 1. Normal Forms Summary

1. **First Normal Form (1NF):** Each column contains atomic (indivisible) values; no repeating arrays/groups.
2. **Second Normal Form (2NF):** Must be in 1NF and all non-key columns are fully functionally dependent on the entire primary key (eliminates partial key dependencies).
3. **Third Normal Form (3NF):** Must be in 2NF and has no transitive dependencies (non-key columns do not depend on other non-key columns).

---

## 2. Trade-Off Analysis

| Dimension | Normalized Schema (OLTP) | Denormalized Schema (OLAP / High-Read) |
| :--- | :--- | :--- |
| **Write Performance** | **Fast:** Updates occur in exactly one place with no duplicate maintenance. | **Slower:** Modifying a field requires updating multiple redundant copies. |
| **Read Performance** | **Slower:** Requires complex multi-table \`JOIN\`s across normalized tables. | **Extremely Fast:** Query reads data from a single pre-joined row. |
| **Storage Overhead** | Minimal (no duplicated strings). | Higher (duplicated redundant columns). |
| **Anomalies Risk** | Protected against insertion, update, and deletion anomalies. | Risk of data inconsistency if background sync fails. |
`
  },
  {
    slug: 'sql-joins-explained',
    title: 'Explain Different Types of SQL JOINs',
    category: 'SQL Core',
    description: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and SELF JOIN with Venn diagrams.',
    content: `---
title: "Explain Different Types of SQL JOINs"
category: "SQL Core"
description: "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and SELF JOIN with Venn diagrams."
---

# SQL JOINs Explained

A \`JOIN\` clause combines rows from two or more tables based on a related column between them.

---

## 1. The Core JOIN Types

\`\`\`
1. INNER JOIN:      Returns records that have matching values in both tables.
2. LEFT JOIN:       Returns all records from the left table, and matched records from the right table (NULL if no match).
3. RIGHT JOIN:      Returns all records from the right table, and matched records from the left table.
4. FULL OUTER JOIN: Returns all records when there is a match in either left or right table.
5. CROSS JOIN:      Produces the Cartesian product (Table A rows * Table B rows).
6. SELF JOIN:       A table joined with itself (e.g. employee-manager hierarchies).
\`\`\`

---

## 2. Production Examples

\`\`\`sql
-- 1. INNER JOIN: Only users who have placed orders
SELECT u.name, o.id AS order_id, o.total_amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- 2. LEFT JOIN: All users, including those with zero orders
SELECT u.name, o.id AS order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- 3. Find users who have NEVER placed an order (Anti-Join Pattern)
SELECT u.name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;
\`\`\`
`
  },
  {
    slug: 'database-indexing-explained',
    title: 'What is a Database Index and Why Does It Improve Performance?',
    category: 'Performance & Optimization',
    description: 'B-Tree vs Hash indexes, Clustered vs Secondary indexes, Index selectivity, and write overhead penalties.',
    content: `---
title: "What is a Database Index and Why Does It Improve Performance?"
category: "Performance & Optimization"
description: "B-Tree vs Hash indexes, Clustered vs Secondary indexes, Index selectivity, and write overhead penalties."
---

# Database Indexing Explained

A **Database Index** is a specialized data structure (predominantly a self-balancing **B+ Tree**) that maintains sorted references to table rows, allowing the database engine to locate records in $O(\\log N)$ time instead of performing an $O(N)$ full table scan.

---

## 1. How a B+ Tree Index Works

\`\`\`
                         [ Root Node: 50 ]
                        /                 \\
            [ Internal: 25 ]            [ Internal: 75 ]
           /                \\          /                \\
    [ Leaf: 10, 20 ]  [ Leaf: 30, 40 ] [ Leaf: 60, 70 ] [ Leaf: 80, 90 ]
           │                 │                 │                 │
    (Row Pointers)    (Row Pointers)    (Row Pointers)    (Row Pointers)
\`\`\`

- **B+ Tree Benefits:** All leaf nodes are linked sequentially in a doubly linked list, enabling lightning-fast **Range Queries** (\`WHERE age BETWEEN 20 AND 40\`).

---

## 2. Clustered vs. Secondary Indexes

- **Clustered Index:** Determines the physical storage order of rows on disk. Only **one** clustered index per table (typically the Primary Key).
- **Secondary (Non-Clustered) Index:** Stored in a separate structure containing the indexed column and a pointer to the clustered index key.

---

## 3. The Cost of Indexing
- **Write Penalty:** Every \`INSERT\`, \`UPDATE\`, and \`DELETE\` must rebalance and write to all associated B+ trees on disk.
- **Memory Consumption:** Indexes reside in RAM (Buffer Pool) for speed; over-indexing consumes critical cache memory.
`
  },
  {
    slug: 'database-transactions-and-acid-properties',
    title: 'What are Transactions? Explain ACID Properties in Detail',
    category: 'Transactions & Concurrency',
    description: 'Atomicity, Consistency, Isolation, and Durability guarantees with write-ahead logging (WAL).',
    content: `---
title: "What are Transactions? Explain ACID Properties in Detail"
category: "Transactions & Concurrency"
description: "Atomicity, Consistency, Isolation, and Durability guarantees with write-ahead logging (WAL)."
---

# Database Transactions and ACID Properties

A **Transaction** is a logical sequence of database operations executed as a single indivisible unit of work. Relational databases enforce the **ACID** guarantees.

---

## The 4 ACID Properties

### 1. Atomicity ("All or Nothing")
Every statement in the transaction must succeed; if any operation fails, the entire transaction is rolled back.
\`\`\`sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1; -- Debit Alice
UPDATE accounts SET balance = balance + 100 WHERE id = 2; -- Credit Bob
COMMIT; -- If power cuts before 2nd update, 1st update is rolled back automatically.
\`\`\`

### 2. Consistency
The database transitions only between valid states, strictly preserving all schema constraints, foreign keys, and business validation rules.

### 3. Isolation
Concurrent transactions execute without interfering with one another or reading intermediate uncommitted states.

### 4. Durability
Once a transaction is committed, its changes survive system crashes and power outages via **Write-Ahead Logging (WAL)** flushed to persistent disk.
`
  },
  {
    slug: 'database-isolation-levels',
    title: 'What are Isolation Levels? Dirty Reads, Non-Repeatable Reads, Phantom Reads',
    category: 'Transactions & Concurrency',
    description: 'Read Uncommitted, Read Committed, Repeatable Read, and Serializable levels with concurrency anomalies.',
    content: `---
title: "What are Isolation Levels? Dirty Reads, Non-Repeatable Reads, Phantom Reads"
category: "Transactions & Concurrency"
description: "Read Uncommitted, Read Committed, Repeatable Read, and Serializable levels with concurrency anomalies."
---

# Database Isolation Levels

SQL standard defines 4 transaction isolation levels that balance concurrency throughput against data isolation guarantees.

---

## 1. Concurrency Anomalies

1. **Dirty Read:** Transaction A reads uncommitted data written by Transaction B (which might later roll back).
2. **Non-Repeatable Read:** Transaction A re-reads the same row within a transaction and finds modified column values because Transaction B committed an update.
3. **Phantom Read:** Transaction A executes a range query (\`WHERE age > 30\`), and Transaction B inserts new rows matching the range, causing subsequent reads to return "phantom" rows.

---

## 2. Isolation Levels Matrix

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read | Default In |
| :--- | :---: | :---: | :---: | :--- |
| **Read Uncommitted** | Possible | Possible | Possible | Rarely used |
| **Read Committed** | **Prevented** | Possible | Possible | PostgreSQL, Oracle, SQL Server |
| **Repeatable Read** | **Prevented** | **Prevented** | Possible (MVCC prevents in PG) | MySQL InnoDB |
| **Serializable** | **Prevented** | **Prevented** | **Prevented** | Strict financial systems |

---

## 3. How Modern Engines Implement Isolation: MVCC
**Multi-Version Concurrency Control (MVCC):** Instead of locking rows on reads, engines (Postgres/MySQL) maintain snapshot versions of rows with creation/deletion transaction IDs (\`xmin\`, \`xmax\`), allowing **readers to never block writers and writers to never block readers**.
`
  },
  {
    slug: 'deadlocks-in-databases',
    title: 'What is a Deadlock and How Do You Prevent It?',
    category: 'Transactions & Concurrency',
    description: 'Wait-for graphs, exclusive lock contention, deadlock detection algorithms, and prevention strategies.',
    content: `---
title: "What is a Deadlock and How Do You Prevent It?"
category: "Transactions & Concurrency"
description: "Wait-for graphs, exclusive lock contention, deadlock detection algorithms, and prevention strategies."
---

# Deadlocks in Databases

A **Deadlock** occurs when two or more concurrent transactions hold locks on resources the other transaction needs to proceed, creating a circular dependency where neither can proceed.

---

## 1. Deadlock Scenario Example

\`\`\`
Transaction 1:                               Transaction 2:
BEGIN;                                       BEGIN;
1. UPDATE accounts SET balance=... WHERE id=1;
   (Holds exclusive lock on row 1)
                                             2. UPDATE accounts SET balance=... WHERE id=2;
                                                (Holds exclusive lock on row 2)

3. UPDATE accounts SET balance=... WHERE id=2;
   (BLOCKED: Waiting for Tx 2 to release row 2)
                                             4. UPDATE accounts SET balance=... WHERE id=1;
                                                (BLOCKED: Waiting for Tx 1 to release row 1)
         [ DEADLOCK DETECTED! Both transactions blocked forever ]
\`\`\`

---

## 2. Detection & Resolution

1. **Deadlock Detection Thread:** Database engines maintain a **Wait-For Graph**. When a directed cycle is detected, the engine aborts the transaction with lower cost, rolls it back, and throws a deadlock error (\`SQLSTATE 40P01\`).
2. **Lock Timeout:** Setting \`lock_timeout = '3s'\` prevents transactions from hanging indefinitely.

---

## 3. Prevention Strategies

1. **Consistent Lock Ordering:** Always update resources in the exact same sorted order across all codebase handlers (\`ORDER BY id\`).
2. **Keep Transactions Short:** Avoid long computations or third-party HTTP calls inside database transactions.
3. **Use Optimistic Locking:** Compare row version numbers (\`WHERE version = 3\`) instead of taking explicit pessimistic locks (\`SELECT FOR UPDATE\`).
`
  },
  {
    slug: 'where-vs-having',
    title: 'What is the Difference Between WHERE and HAVING in SQL?',
    category: 'SQL Core',
    description: 'Row-level filtering before aggregation vs group-level filtering after aggregate functions.',
    content: `---
title: "What is the Difference Between WHERE and HAVING in SQL?"
category: "SQL Core"
description: "Row-level filtering before aggregation vs group-level filtering after aggregate functions."
---

# WHERE vs. HAVING in SQL

Both clauses filter datasets, but execute at completely different stages in the SQL execution lifecycle.

---

## Comparison Matrix

| Feature | WHERE Clause | HAVING Clause |
| :--- | :--- | :--- |
| **Execution Stage** | Evaluated **before** \`GROUP BY\` and aggregation. | Evaluated **after** \`GROUP BY\` and aggregation. |
| **Operates On** | Individual table rows. | Grouped rows / aggregated summary buckets. |
| **Aggregate Functions** | **Cannot** use aggregate functions (\`SUM\`, \`AVG\`, \`COUNT\`). | **Can and must** filter on aggregate functions. |
| **Index Usage** | Can leverage B-tree indexes efficiently. | Cannot leverage indexes directly on aggregated values. |

---

## SQL Example

\`\`\`sql
-- Find departments with average salary > 80,000, excluding interns (status = 'INTERN')
SELECT department_id, AVG(salary) AS avg_salary, COUNT(*) AS employee_count
FROM employees
WHERE status != 'INTERN'             -- 1. Filters individual rows BEFORE grouping
GROUP BY department_id              -- 2. Groups remaining employees by department
HAVING AVG(salary) > 80000;         -- 3. Filters aggregate groups AFTER calculation
\`\`\`
`
  },
  {
    slug: 'delete-vs-truncate-vs-drop',
    title: 'Difference Between DELETE, TRUNCATE, and DROP in SQL',
    category: 'SQL Core',
    description: 'DML vs DDL commands, transaction rollback capabilities, space deallocation, and trigger activation.',
    content: `---
title: "Difference Between DELETE, TRUNCATE, and DROP in SQL"
category: "SQL Core"
description: "DML vs DDL commands, transaction rollback capabilities, space deallocation, and trigger activation."
---

# DELETE vs. TRUNCATE vs. DROP

These three commands remove data or database objects with significant differences in performance, logging, and rollback safety.

---

## Comparison Table

| Attribute | DELETE | TRUNCATE | DROP |
| :--- | :--- | :--- | :--- |
| **Command Type** | **DML** (Data Manipulation Language) | **DDL** (Data Definition Language) | **DDL** (Data Definition Language) |
| **Scope** | Deletes specific rows matching \`WHERE\` clause (or all rows if omitted). | Removes **all** rows from a table instantly. | Completely deletes the table schema, indexes, and data. |
| **Speed / Performance**| Slower (logs deletion of every single row in WAL/transaction log). | Extremely fast (deallocates data pages instead of logging row-by-row). | Instantaneous. |
| **Rollback Capability**| Fully rollbackable inside transaction. | Rollbackable in PostgreSQL; cannot be rolled back in MySQL. | Cannot be rolled back in MySQL. |
| **Triggers** | Fires \`ON DELETE\` row triggers. | Does **not** fire triggers. | Does **not** fire triggers. |
| **Auto-Increment ID** | Does **not** reset auto-increment sequence counter. | **Resets** auto-increment counter back to 1. | Table ceases to exist. |
`
  },
  {
    slug: 'sql-interview-queries-duplicates-second-highest-salary',
    title: 'Top SQL Interview Queries: Duplicates & Nth Highest Salary',
    category: 'SQL Core',
    description: 'Finding duplicate rows with GROUP BY and window functions (ROW_NUMBER, DENSE_RANK), self-joins.',
    content: `---
title: "Top SQL Interview Queries: Duplicates & Nth Highest Salary"
category: "SQL Core"
description: "Finding duplicate rows with GROUP BY and window functions (ROW_NUMBER, DENSE_RANK), self-joins."
---

# Top SQL Interview Queries

Two of the most frequently asked practical SQL interview questions testing window functions and aggregation logic.

---

## 1. Finding & Deleting Duplicate Records

### A. Finding Duplicates
\`\`\`sql
-- Find emails that appear more than once
SELECT email, COUNT(*) AS occurrences
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
\`\`\`

### B. Deleting Duplicates (Keeping Lowest ID)
\`\`\`sql
DELETE FROM users
WHERE id NOT IN (
    SELECT MIN(id)
    FROM users
    GROUP BY email
);
\`\`\`

---

## 2. Finding the Second (or Nth) Highest Salary

### Approach 1: Using \`DENSE_RANK()\` Window Function (Recommended)
\`\`\`sql
WITH RankedSalaries AS (
    SELECT id, name, salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) as rank_pos
    FROM employees
)
SELECT name, salary 
FROM RankedSalaries 
WHERE rank_pos = 2;
\`\`\`

### Approach 2: Using Subquery (\`LIMIT / OFFSET\`)
\`\`\`sql
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;
\`\`\`
`
  },
  {
    slug: 'optimizing-slow-sql-queries',
    title: 'How Do You Optimize a Slow SQL Query?',
    category: 'Performance & Optimization',
    description: 'EXPLAIN ANALYZE, sequential scans vs index scans, composite indexes, avoiding SELECT *, connection pooling.',
    content: `---
title: "How Do You Optimize a Slow SQL Query?"
category: "Performance & Optimization"
description: "EXPLAIN ANALYZE, sequential scans vs index scans, composite indexes, avoiding SELECT *, connection pooling."
---

# How Do You Optimize a Slow SQL Query?

A systematic step-by-step methodology for diagnosing and resolving database bottlenecks in production.

---

## 1. The Diagnostic Workflow

\`\`\`
1. Identify Bottleneck ➔ Check Slow Query Logs / APM (Datadog, pg_stat_statements)
2. Run EXPLAIN ANALYZE ➔ Check Execution Plan (Seq Scan vs Index Scan, Join algorithms)
3. Optimize Strategy   ➔ Add Composite Index, Refactor Query, Denormalize, Partition
4. Verify & Benchmark  ➔ Ensure Execution Time & Buffer Reads Drop
\`\`\`

---

## 2. Core Optimization Strategies

1. **Eliminate \`SELECT *\`:** Fetch only required columns. Avoids reading unused columns from disk and enables **Covering Indexes** (Index-Only Scans).
2. **Add Composite Indexes for Multi-Column Filters:** Follow the **Equality ➔ Range ➔ Sort** rule when defining composite index column order (\`INDEX (tenant_id, status, created_at)\`).
3. **Avoid Non-SARGable Queries:** Wrapping indexed columns in functions disables B-tree index lookups:
   \`\`\`sql
   -- BAD (Disables index on created_at):
   SELECT * FROM orders WHERE DATE(created_at) = '2026-03-01';

   -- GOOD (Utilizes B-tree index scan):
   SELECT * FROM orders WHERE created_at >= '2026-03-01 00:00:00' AND created_at < '2026-03-02 00:00:00';
   \`\`\`
4. **Use Cursor-Based Pagination:** Replace high-offset queries (\`OFFSET 100000\`) with keyset pagination (\`WHERE id > :last_id\`).
5. **Connection Pooling:** Use PgBouncer / HikariCP to reuse database TCP connections instead of opening costly connections per HTTP request.
`
  },
  {
    slug: 'embedding-vs-referencing-mongodb',
    title: 'MongoDB: Embedding vs. Referencing Data Models',
    category: 'NoSQL & MongoDB',
    description: '1:1, 1:N, and N:M relationships, 16MB document limit, join performance, and schema design rules.',
    content: `---
title: "MongoDB: Embedding vs. Referencing Data Models"
category: "NoSQL & MongoDB"
description: "1:1, 1:N, and N:M relationships, 16MB document limit, join performance, and schema design rules."
---

# Embedding vs. Referencing in MongoDB

In MongoDB document modeling, determining whether to **Embed (Denormalize)** or **Reference (Normalize)** related entities dictates query performance and data consistency.

---

## 1. Comparison Matrix

| Approach | Embedding (Subdocuments / Arrays) | Referencing (Normalized ObjectIds) |
| :--- | :--- | :--- |
| **Query Pattern** | Single atomic read retrieves all nested data in one operation ($O(1)$). | Requires multiple queries or \`$lookup\` aggregation pipeline. |
| **Atomicity** | Updates within a single document are **atomic by default**. | Requires multi-document transactions for atomic consistency. |
| **Document Size Limit**| Risk of exceeding MongoDB's strict **16MB BSON document size limit**. | Infinite scalability (documents remain small). |
| **Data Duplication** | High if embedded subdocuments are shared across entities. | Zero duplication (canonical single source of truth). |

---

## 2. Practical Design Rules

- **Embed When:**
  - **1-to-Few relationships:** A User with 2-3 shipping addresses.
  - Data is always queried together with parent entity.
  - Nested data does not change independently.

- **Reference When:**
  - **1-to-Many / 1-to-Squillions:** A Post with 500,000 comments (unbounded arrays will blow out the 16MB document limit).
  - Many-to-Many relationships (Students and Courses).
  - Referenced entity is frequently updated in isolation.
`
  }
];

for (const art of databaseArticles) {
  const filePath = path.join(contentDir, `${art.slug}.md`);
  fs.writeFileSync(filePath, art.content.trim() + '\n', 'utf8');
  console.log(`Created: databases/${art.slug}.md`);
}

console.log('Successfully generated database articles.');
