---
title: "System Design: E-Commerce Flash Sale & Inventory Reservation"
category: "System Architectures"
description: "High-concurrency inventory reservation, Redis atomic decrement, distributed Saga transactions, and payment webhooks."
---

# System Design: E-Commerce & Flash Sale Backend

Designing an e-commerce platform capable of handling flash sale traffic spikes with 50,000 concurrent checkout attempts on limited inventory.

---

## 1. Flash Sale Inventory Architecture

```
1. Redis Atomic Decr:  DECR inventory:item_42 (Lua script ensures stock > 0 atomically).
2. Order Pending:      Create order record in 'PENDING_PAYMENT' state with 15-minute TTL.
3. Message Queue:      Publish 'OrderCreatedEvent' to Kafka / RabbitMQ.
4. Payment Callback:   Stripe Webhook acknowledges payment ➔ Status changes to 'CONFIRMED'.
5. Expiration Worker:  If payment unpaid after 15 mins, cron reclaims stock (INCR inventory:item_42).
```

---

## 2. Distributed Transactions: The Saga Pattern
- **Step 1:** Order Service creates order (Pending).
- **Step 2:** Inventory Service reserves stock.
- **Step 3:** Payment Service charges credit card.
- **Compensating Action:** If Step 3 fails, the Saga Orchestrator triggers compensating events: Inventory Service un-reserves stock, and Order Service marks order as Canceled.
