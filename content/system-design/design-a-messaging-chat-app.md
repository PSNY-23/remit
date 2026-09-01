---
title: "System Design: Real-Time Chat Application (WhatsApp / Slack)"
category: "System Architectures"
description: "Persistent WebSockets, presence tracking via Redis, message delivery receipts, Kafka queuing, and Cassandra history storage."
---

# System Design: Real-Time Chat Application

Designing a high-throughput, low-latency messaging platform supporting 1-on-1 chat, group messaging, online presence, and message delivery receipts.

---

## 1. High-Level Architecture

```
[ User Alice ] ──(WebSocket)──► [ Gateway Server 1 ] ──► [ Kafka: chat-messages ]
                                           ▲                           │
                                           │                           ▼
[ User Bob ]   ──(WebSocket)──► [ Gateway Server 2 ] ◄── [ Message Routing Service ]
                                                               │
                               ┌───────────────────────────────┴───────────────────────────────┐
                               ▼                                                               ▼
                      [ Redis Presence Store ]                                     [ Cassandra / ScyllaDB ]
                     (Heartbeat TTL: 10 seconds)                                   (Append-Only Message History)
```

---

## 2. Key Architecture Details
1. **WebSockets:** Persistent full-duplex connections for instant delivery.
2. **Storage Tier (Cassandra / ScyllaDB):** Partition Key: `conversation_id`, Clustering Key: `message_id` (TimeUUID) ensures efficient chronological range queries.
3. **Presence:** Clients send heartbeat pings every 5s to Redis with a 10s TTL (`SET user:123:presence online EX 10`).
