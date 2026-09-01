---
title: "System Design: Multi-Channel Notification Platform"
category: "System Architectures"
description: "Push notifications (APNs/FCM), SMS (Twilio), Email (SendGrid), deduplication via Redis, and priority queue workers."
---

# System Design: Multi-Channel Notification Platform

A scalable notification engine delivering millions of daily alerts across **Mobile Push (APNs / FCM)**, **SMS (Twilio)**, and **Email (SendGrid)**.

---

## 1. High-Level Architecture

```
[ Microservices ] ──► [ Notification API ] ──► [ Redis Deduplication ] ──► [ User Preference Engine ]
                                                                                   │
                             ┌─────────────────────────────────────────────────────┼─────────────────────────────────────────────────────┐
                             ▼                                                     ▼                                                     ▼
                    [ Kafka: Push Queue ]                                 [ Kafka: SMS Queue ]                                  [ Kafka: Email Queue ]
                             │                                                     │                                                     │
                             ▼                                                     ▼                                                     ▼
                    [ Push Worker Pool ]                                  [ SMS Worker Pool ]                                   [ Email Worker Pool ]
                    (Apple APNs / Google FCM)                             (Twilio / MessageBird)                                (SendGrid / AWS SES)
```

---

## 2. Key Reliability Features
- **Deduplication:** Generate hash (`MD5(userId + type + date)`) in Redis to eliminate duplicate spam.
- **Priority Queues:** Critical OTP login codes bypass bulk marketing queues for zero-wait delivery.
