---
title: "Database Indexing, Query Optimization, and Top SQL Queries"
category: "Performance & Optimization"
description: "B+ Tree internals, Clustered vs Secondary indexes, EXPLAIN ANALYZE, composite index rules, duplicates, and Nth salary queries."
---

# Database Indexing & Query Optimization

Indexes are specialized data structures that enable logarithmic $O(\log N)$ lookup performance instead of full table scans.

---

## 1. B+ Tree Index Mechanics

```
                         [ Root Node: 50 ]
                        /                 \
            [ Internal: 25 ]            [ Internal: 75 ]
           /                \          /                \
    [ Leaf: 10, 20 ]  [ Leaf: 30, 40 ] [ Leaf: 60, 70 ] [ Leaf: 80, 90 ]
           │                 │                 │                 │
    (Doubly Linked List enables lightning-fast Range Scans: BETWEEN 20 AND 70)
```

- **Clustered Index:** Defines physical row storage order on disk (Primary Key). Only 1 per table.
- **Secondary Index:** Separate B+ Tree storing indexed column + pointer to clustered index key.

---

## 2. Query Optimization Best Practices

1. **Composite Index Column Order (Equality ➔ Range ➔ Sort):**
   ```sql
   -- Optimal for: WHERE status = 'ACTIVE' AND created_at >= '2026-01-01' ORDER BY id
   CREATE INDEX idx_orders_opt ON orders (status, created_at, id);
   ```
2. **Avoid Non-SARGable Query Predicates:** Wrapping columns in functions disables B+ tree index usage (`WHERE DATE(created_at) = '...'` ➔ use range `WHERE created_at >= ... AND created_at < ...`).
3. **Analyze Query Execution Plans:** Run `EXPLAIN (ANALYZE, BUFFERS)` to detect sequential scans (`Seq Scan`), high shared buffer reads, or slow hash joins.

---

## 3. Must-Know SQL Interview Queries

### A. Finding & Deleting Duplicate Rows
```sql
-- Find duplicates
SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;

-- Delete duplicates keeping lowest ID
DELETE FROM users WHERE id NOT IN (SELECT MIN(id) FROM users GROUP BY email);
```

### B. Finding the 2nd (or Nth) Highest Salary
```sql
WITH RankedEmployees AS (
    SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank_num
    FROM employees
)
SELECT name, salary FROM RankedEmployees WHERE rank_num = 2;
```
