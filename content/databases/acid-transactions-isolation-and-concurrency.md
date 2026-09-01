---
title: "ACID Transactions, Isolation Levels, MVCC, and Deadlocks"
category: "Transactions & Concurrency"
description: "Atomicity, Consistency, Isolation, Durability, Write-Ahead Logging, Dirty/Phantom reads, MVCC, and deadlock resolution."
---

# ACID Transactions, Isolation Levels & MVCC

Relational databases guarantee transactional correctness through the **ACID** properties and configurable isolation levels.

---

## 1. The 4 ACID Properties

1. **Atomicity ("All or Nothing"):** All operations in a transaction commit together; on any error, changes roll back completely.
2. **Consistency:** Transitions database state while preserving all foreign keys, unique constraints, and schema rules.
3. **Isolation:** Concurrent transactions execute without observing intermediate uncommitted states of other transactions.
4. **Durability:** Committed transactions persist permanently across crashes via **Write-Ahead Logging (WAL)** flushed to non-volatile disk.

---

## 2. Concurrency Anomalies & Isolation Levels

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read | Default Engine |
| :--- | :---: | :---: | :---: | :--- |
| **Read Uncommitted** | Possible | Possible | Possible | Rarely used |
| **Read Committed** | **Prevented** | Possible | Possible | PostgreSQL, Oracle, SQL Server |
| **Repeatable Read** | **Prevented** | **Prevented** | Prevented via MVCC | MySQL InnoDB |
| **Serializable** | **Prevented** | **Prevented** | **Prevented** | Strict financial platforms |

- **Dirty Read:** Reading uncommitted data from a concurrent transaction that later rolls back.
- **Non-Repeatable Read:** Re-reading the same row within a transaction returns modified column values because another transaction committed an update.
- **Phantom Read:** Re-executing a range query (`WHERE age > 25`) returns newly inserted "phantom" rows.

---

## 3. Multi-Version Concurrency Control (MVCC)
Modern database engines (PostgreSQL, MySQL) avoid read locks by maintaining version snapshots of rows tagged with transaction IDs (`xmin`, `xmax`). **Readers never block writers, and writers never block readers.**

---

## 4. Deadlock Detection and Prevention

```
Transaction A: Locks Row 1 ──► Waiting for Row 2 (Held by B)
                                      ▲
                                      │
Transaction B: Locks Row 2 ──► Waiting for Row 1 (Held by A)
          [ DEADLOCK CYCLE: Engine aborts lowest cost transaction ]
```

- **Prevention:**
  1. Enforce strict, identical lock acquisition order across all backend services (`ORDER BY id`).
  2. Keep transactions short (never make external HTTP API calls inside database transactions).
  3. Use Optimistic Locking with version columns (`UPDATE items SET stock = stock - 1, version = version + 1 WHERE id = :id AND version = :version`).
