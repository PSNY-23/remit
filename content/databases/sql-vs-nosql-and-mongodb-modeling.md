---
title: "SQL vs. NoSQL and MongoDB Document Modeling"
category: "NoSQL & Data Modeling"
description: "Relational ACID vs BASE, Document/Key-Value/Column stores, Embedding vs Referencing in MongoDB, and 16MB document limits."
---

# SQL vs. NoSQL & MongoDB Modeling

Choosing between Relational and Document databases depends on data access patterns, transactional guarantees, and scalability needs.

---

## 1. Relational (SQL) vs. Non-Relational (NoSQL)

| Dimension | SQL (PostgreSQL, MySQL) | NoSQL (MongoDB, DynamoDB, Cassandra) |
| :--- | :--- | :--- |
| **Schema** | Rigid, predefined schema with strict validation | Dynamic / Schema-less BSON documents |
| **Consistency**| Immediate ACID consistency | Eventual Consistency (**BASE** model), configurable multi-doc ACID |
| **Scaling** | Vertical scaling; Read-replicas for reads | Built-in native **Horizontal Sharding** |
| **Relationships**| Native multi-table `JOIN`s, Foreign Keys | Denormalized embedded structures; `$lookup` aggregation |

---

## 2. MongoDB Document Modeling: Embedding vs. Referencing

### Embed When:
- **1-to-Few relationships** (User with 2-3 shipping addresses).
- Nested data is always queried together with the parent document.
- Subdocuments are updated together atomically.

### Reference When:
- **1-to-Many / Unbounded Arrays** (Post with 500,000 comments - prevents exceeding MongoDB's **16MB BSON Document Limit**).
- Many-to-Many relationships (Students and Courses).
- Referenced data is frequently updated in isolation.
