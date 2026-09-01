---
title: "Message Queues: Apache Kafka vs. RabbitMQ Architecture"
category: "Distributed Systems"
description: "Smart broker vs dumb broker, AMQP routing, distributed commit logs, partitions, consumer groups, and delivery semantics."
---

# Message Queues: Kafka vs. RabbitMQ

Asynchronous message brokers decouple microservices, absorb bursty workloads, and enable distributed event-driven architectures.

---

## 1. Architectural Paradigms

| Dimension | RabbitMQ (Smart Broker) | Apache Kafka (Distributed Log) |
| :--- | :--- | :--- |
| **Model** | Push-based message queue (AMQP) | Pull-based distributed append-only commit log |
| **Throughput** | ~20k - 100k msgs/sec | **Millions of events/sec** (Sequential disk I/O) |
| **Message Ordering** | Guaranteed per queue | Guaranteed **within a single partition** |
| **Persistence** | Messages deleted once acknowledged | Messages retained for days/weeks on disk |
| **Message Replay** | No | **Yes** (Consumers can rewind offsets) |
| **Ideal For** | Complex task queues, transactional background jobs | High-throughput event streaming, log aggregation, CDC |

---

## 2. Kafka Partitioning & Consumer Groups

```
Topic: "orders" (3 Partitions)
┌─────────────────┐ ──► Partition 0 ──► Consumer Instance A (Group 1)
│ Producer App    │ ──► Partition 1 ──► Consumer Instance B (Group 1)
└─────────────────┘ ──► Partition 2 ──► Consumer Instance C (Group 1)
```

- Messages with the same **Partition Key** (e.g. `order.userId`) always route to the exact same partition, guaranteeing strict chronological ordering per user.
