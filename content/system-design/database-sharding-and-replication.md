---
title: "Database Sharding, Partitioning, and Replication Architecture"
category: "High Availability & Scaling"
description: "Master-replica replication lag, failover mechanisms, horizontal sharding, consistent hashing, and cross-shard queries."
---

# Database Sharding & Replication

When a single database server hits its CPU, memory, or disk I/O throughput limits, data must be distributed across multiple physical nodes.

---

## 1. Primary-Replica Replication

- **Primary Node:** Handles all write operations (`INSERT`, `UPDATE`, `DELETE`) and streams its Write-Ahead Log (WAL) to replicas.
- **Replica Nodes:** Serve read queries (`SELECT`).
- **Replication Lag:** Asynchronous replication introduces a small replication lag ($<100\text{ms}$) where reads from replicas may return stale data.

---

## 2. Horizontal Sharding & Consistent Hashing

Sharding partitions large tables across multiple database instances using a **Shard Key**:

```
Shard Key (User ID) ──► Hash Function ──► Hash Ring ──► Target Shard Node
```

- **Consistent Hashing with Virtual Nodes:** When adding or removing database nodes, consistent hashing requires remapping only $K/N$ keys (where $K$ is total keys and $N$ is number of nodes), preventing catastrophic cache invalidation or full data reshuffling.
