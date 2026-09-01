---
title: "Monolith vs. Microservices: Decision Matrix & Strangler Migration"
category: "Distributed Systems"
description: "Modular monoliths, distributed system complexity, Conway’s Law, distributed tracing, and the Strangler Fig migration pattern."
---

# Monolith vs. Microservices

Selecting between a Monolith and Microservices is an organizational and operational trade-off balancing developer velocity against distributed system complexity.

---

## 1. Architectural Trade-off Matrix

| Dimension | Monolith | Microservices |
| :--- | :--- | :--- |
| **Deployment** | Single unified deployment artifact | Dozens of independently deployed containers (Kubernetes) |
| **Network Latency** | In-memory function calls (nanoseconds) | Network RPC / gRPC / HTTP calls (milliseconds) |
| **Data Consistency** | Single database with immediate ACID transactions | Distributed data stores with eventual consistency & Saga patterns |
| **Observability** | Single server log and stack traces | Distributed tracing (OpenTelemetry, Jaeger, Correlation IDs) |
| **Ideal Team Size**| 1 - 20 engineers | 100+ engineers across autonomous domain teams (Conway's Law) |

---

## 2. Migration Strategy: The Strangler Fig Pattern

Never attempt a high-risk ground-up rewrite ("The Big Bang"). Instead:
1. Place an **API Gateway** in front of the legacy monolithic application.
2. Build new features as isolated microservices.
3. Incrementally route legacy endpoints (e.g. `/api/payments`) to the new microservice until the legacy monolith is completely decommissioned.
