const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content', 'system-design');
if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });

const systemDesignArticles = [
  {
    slug: 'design-a-url-shortener',
    title: 'Design a URL Shortener Like Bitly',
    category: 'System Architectures',
    description: 'Capacity estimation, Base62 encoding vs MD5 hash collisions, distributed ID generators, and Redis caching tiers.',
    content: `---
title: "Design a URL Shortener Like Bitly"
category: "System Architectures"
description: "Capacity estimation, Base62 encoding vs MD5 hash collisions, distributed ID generators, and Redis caching tiers."
---

# System Design: URL Shortener (Bitly)

Design a scalable URL shortening service that takes long URLs (e.g. \`https://example.com/very/long/path/123\`) and converts them into short, 7-character aliases (e.g. \`https://tiny.cc/aB3x9Q1\`).

---

## 1. Requirements & Scale Estimation

- **Functional:**
  1. Given a long URL, generate a unique short alias.
  2. Accessing short URL redirects user to the original long URL with HTTP 301/302.
  3. Custom alias and expiration support.
- **Scale:**
  - 100M new URLs/month $\\approx 40$ writes/sec.
  - Read-heavy (10:1 ratio): $\\approx 400$ reads/sec (peaks up to $2,000$ reads/sec).
  - Storage for 5 years $\\approx 6$ Billion URLs $\\approx 3\\text{TB}$ disk space.

---

## 2. High-Level Architecture

\`\`\`
[ Client ] ──► [ Load Balancer ] ──► [ API Gateway ] ──► [ URL Service ]
                                                             │
                              ┌──────────────────────────────┴──────────────────────────────┐
                              ▼                                                             ▼
                     [ Redis Cache Tier ]                                        [ Distributed DB ]
                     (Hot URLs - 80-20 Rule)                                   (PostgreSQL / DynamoDB)
                                                                                            │
                                                                                            ▼
                                                                                 [ Unique ID Generator ]
                                                                                   (Snowflake / Range)
\`\`\`

---

## 3. Shortening Algorithm: Base62 Encoding

Using characters \`[0-9, a-z, A-Z]\` (62 possible characters):
A 7-character string provides:
$$62^7 = 3.52 \\text{ Trillion unique combinations}$$

1. Generate an auto-incrementing 64-bit integer ID using a distributed ticket server or Twitter Snowflake.
2. Convert the integer ID to Base62 representation.
3. Map \`short_code\` $\\rightarrow$ \`long_url\` in the database with a unique index.

---

## 4. Redirect Semantics: HTTP 301 vs. 302
- **301 Moved Permanently:** Browser caches the redirect locally. Subsequent requests bypass our servers entirely (reduces backend load, but prevents analytics tracking).
- **302 Found / 307 Temporary Redirect:** Browser always contacts our service first, enabling accurate click analytics and geo-tracking.
`
  },
  {
    slug: 'design-a-messaging-chat-app',
    title: 'Design a Real-Time Messaging / Chat Application',
    category: 'System Architectures',
    description: 'WebSockets connection management, presence tracking, message delivery receipts, Kafka queuing, and Cassandra storage.',
    content: `---
title: "Design a Real-Time Messaging / Chat Application"
category: "System Architectures"
description: "WebSockets connection management, presence tracking, message delivery receipts, Kafka queuing, and Cassandra storage."
---

# System Design: Real-Time Chat Application (WhatsApp / Slack)

Designing a high-throughput, low-latency messaging platform supporting 1-on-1 direct messaging, group chats, online presence, and message delivery receipts (sent, delivered, read).

---

## 1. High-Level Architecture

\`\`\`
[ User Alice ] ──(WebSocket)──► [ Chat Gateway Server 1 ] ──► [ Kafka Topic: chat-messages ]
                                           ▲                                  │
                                           │                                  ▼
[ User Bob ]   ──(WebSocket)──► [ Chat Gateway Server 2 ] ◄── [ Message Routing Service ]
                                                                      │
                                     ┌────────────────────────────────┴────────────────────────────────┐
                                     ▼                                                                 ▼
                            [ Redis Presence Store ]                                       [ Cassandra / ScyllaDB ]
                           (Online status / Heartbeat)                                     (Append-only Chat History)
\`\`\`

---

## 2. Key Architectural Decisions

1. **Transport Protocol:** Persistent **WebSockets** for bidirectional, low-latency streaming between clients and API gateways.
2. **Storage Tier (Cassandra / ScyllaDB):**
   - Chat data is write-heavy and append-only.
   - Partition Key: \`conversation_id\`, Clustering Key: \`message_id\` (TimeUUID) for sequential chronologically ordered message history retrieval.
3. **Presence System (Online / Offline):**
   - Web clients send periodic heartbeat pings every 5 seconds to Redis with a TTL of 10 seconds (\`SET user:123:presence online EX 10\`). If no ping arrives, the key expires and the user is marked offline.
4. **Group Chat Fanout:**
   - For small groups ($< 500$ members): Fanout on write via Kafka topics.
   - For massive channels ($> 10,000$ members): Push notifications for mentions, pull on scroll.
`
  },
  {
    slug: 'design-an-ecommerce-backend',
    title: 'Design an E-Commerce Backend & Inventory Reservation',
    category: 'System Architectures',
    description: 'Flash-sale inventory locking, distributed transactions (Saga Pattern), Redis inventory decrement, payment callbacks.',
    content: `---
title: "Design an E-Commerce Backend & Inventory Reservation"
category: "System Architectures"
description: "Flash-sale inventory locking, distributed transactions (Saga Pattern), Redis inventory decrement, payment callbacks."
---

# System Design: E-Commerce Backend & Flash Sale

Designing an e-commerce platform handling catalog browsing, cart checkout, payment processing, and high-concurrency **Inventory Reservation** during flash sales without overselling.

---

## 1. The Inventory Overselling Problem

During a flash sale with 100 items and 50,000 concurrent checkout attempts:
Standard \`SELECT count ... UPDATE inventory SET stock = stock - 1\` causes race conditions leading to overselling.

---

## 2. The Multi-Tier Solution

\`\`\`
1. Redis Atomic Decr:  DECR inventory:item_42 (Lua script checks stock > 0 atomically).
2. Order Pending:      Create order record in 'PENDING_PAYMENT' state with 15-min TTL.
3. Message Queue:      Publish 'OrderCreatedEvent' to Kafka / RabbitMQ.
4. Payment Callback:   Stripe Webhook acknowledges payment ➔ Status changes to 'CONFIRMED'.
5. Expiration Worker:  If payment unpaid after 15 mins, cron reclaims stock (INCR inventory:item_42).
\`\`\`

---

## 3. Distributed Transactions: The Saga Pattern

In a microservice architecture (Order Service, Inventory Service, Payment Service), distributed 2-Phase Commit (2PC) is too slow. Instead, use an **Orchestrated Saga**:
- **Step 1:** Order Service creates order (Pending).
- **Step 2:** Inventory Service reserves stock.
- **Step 3:** Payment Service charges credit card.
- **Compensating Action:** If Step 3 fails, the Saga Orchestrator triggers compensating events: Inventory Service un-reserves stock, and Order Service marks order as Canceled.
`
  },
  {
    slug: 'design-a-notification-system',
    title: 'Design a Scalable Multi-Channel Notification System',
    category: 'System Architectures',
    description: 'Push notifications (APNs/FCM), SMS (Twilio), Email (SendGrid), user preferences, rate limiting, and priority queues.',
    content: `---
title: "Design a Scalable Multi-Channel Notification System"
category: "System Architectures"
description: "Push notifications (APNs/FCM), SMS (Twilio), Email (SendGrid), user preferences, rate limiting, and priority queues."
---

# System Design: Notification System

A centralized notification engine capable of sending millions of daily messages across **Mobile Push (APNs / FCM)**, **SMS (Twilio)**, and **Email (SendGrid)** with user preference management and deduplication.

---

## 1. High-Level Architecture

\`\`\`
[ Internal Microservices ] ──► [ Notification API ]
                                       │
                                       ▼
                       [ Rate Limiter & Deduplicator ] (Redis)
                                       │
                                       ▼
                       [ User Preference & Template Engine ]
                                       │
            ┌──────────────────────────┼──────────────────────────┐
            ▼                          ▼                          ▼
   [ Kafka: Push Queue ]      [ Kafka: SMS Queue ]      [ Kafka: Email Queue ]
            │                          │                          │
            ▼                          ▼                          ▼
   [ Push Worker Pool ]       [ SMS Worker Pool ]       [ Email Worker Pool ]
            │                          │                          │
            ▼                          ▼                          ▼
       (Apple APNs /              (Twilio /                  (SendGrid /
        Google FCM)               MessageBird)                 AWS SES)
\`\`\`

---

## 2. Critical Components

1. **Deduplication:** Generate a fingerprint hash (\`MD5(userId + notificationType + date)\`). Check Redis before enqueueing to prevent spamming duplicate alerts.
2. **Priority Queues:** Critical alerts (OTP authentication codes, fraud alerts) use dedicated high-priority queues with zero-wait worker allocation, separating them from bulk marketing emails.
3. **Third-Party Provider Circuit Breakers:** Wrap third-party APIs (SendGrid, Twilio) in circuit breakers with automatic fallback providers if latency spikes.
`
  },
  {
    slug: 'scaling-backend-to-millions-of-requests',
    title: 'How to Scale a Backend to Millions of Requests?',
    category: 'High Availability & Scaling',
    description: 'Stateless application scaling, load balancing algorithms, database sharding, connection pooling, and CDN caching.',
    content: `---
title: "How to Scale a Backend to Millions of Requests?"
category: "High Availability & Scaling"
description: "Stateless application scaling, load balancing algorithms, database sharding, connection pooling, and CDN caching."
---

# Scaling a Backend to Millions of Requests

Scaling a backend service from 1,000 to 10,000,000+ daily active requests requires eliminating bottlenecks across every tier of the stack.

---

## 1. The Scaling Hierarchy

\`\`\`
1. Edge Tier:        CDN (Cloudflare / CloudFront) caches static assets and edge responses.
2. Gateway Tier:     Load Balancers (Nginx / HAProxy / AWS ALB) distribute traffic round-robin/least-conn.
3. Application Tier: Stateless microservice containers auto-scale horizontally on Kubernetes.
4. Caching Tier:     Distributed Redis cluster handles 90%+ of read traffic.
5. Database Tier:    Read-replicas for reads, Sharding / Partitioning for high-throughput writes.
6. Async Tier:       Kafka / RabbitMQ offloads slow background processing.
\`\`\`

---

## 2. The Golden Rules of Horizontal Scaling

1. **Keep Application Servers Strictly Stateless:** Store sessions in Redis, never in local server memory or disk. Any server must be able to serve any request.
2. **Optimize Database Reads:** Introduce Read Replicas (Write to Master, Read from Replicas).
3. **Database Connection Pooling:** Prevent thread/connection starvation by putting PgBouncer between services and the database.
4. **Asynchronous Decoupling:** Never execute slow tasks (image processing, email delivery, AI inference) inside the synchronous HTTP request-response loop.
`
  },
  {
    slug: 'message-queues-kafka-vs-rabbitmq',
    title: 'What is a Message Queue? When to Choose Kafka vs. RabbitMQ',
    category: 'Distributed Systems',
    description: 'Smart broker vs dumb broker, AMQP routing topologies, event sourcing, stream processing, and consumer groups.',
    content: `---
title: "What is a Message Queue? When to Choose Kafka vs. RabbitMQ"
category: "Distributed Systems"
description: "Smart broker vs dumb broker, AMQP routing topologies, event sourcing, stream processing, and consumer groups."
---

# Message Queues: Kafka vs. RabbitMQ

Asynchronous message brokers decouple microservices, absorb bursty traffic spikes, and enable event-driven architectures.

---

## 1. Architectural Paradigms

- **RabbitMQ (Smart Broker, Dumb Consumer):** Traditional message broker based on AMQP. Focuses on complex routing (Direct, Fanout, Topic exchanges) and tracking individual message acknowledgments. Messages are deleted once acknowledged.
- **Apache Kafka (Dumb Broker, Smart Consumer):** Distributed append-only commit log. Messages are persisted to disk and retained for days/weeks. Consumers track their own offsets, allowing multiple consumer groups to replay history at their own pace.

---

## 2. Comparison Matrix

| Feature | RabbitMQ | Apache Kafka |
| :--- | :--- | :--- |
| **Model** | Message Queue (Push-based) | Distributed Append-Only Log (Pull-based) |
| **Throughput** | ~20k - 100k msgs/sec | **Millions of events/sec** (sequential disk writes) |
| **Message Ordering** | Guaranteed per queue | Guaranteed **within a partition** |
| **Routing Capabilities**| Highly flexible (AMQP exchanges, wildcards, headers)| Basic key-based partition routing |
| **Message Replay** | No (messages deleted after delivery) | **Yes** (consumers can rewind offsets and re-read) |
| **Best For** | Complex task queues, transactional background jobs | High-throughput streaming, log aggregation, event sourcing |
`
  },
  {
    slug: 'monolith-vs-microservices',
    title: 'Monolith vs. Microservices: Architectural Decision Framework',
    category: 'Distributed Systems',
    description: 'Modular monoliths, distributed system complexity, Conway’s Law, network latency, and migration strategies.',
    content: `---
title: "Monolith vs. Microservices: Architectural Decision Framework"
category: "Distributed Systems"
description: "Modular monoliths, distributed system complexity, Conway’s Law, network latency, and migration strategies."
---

# Monolith vs. Microservices

The choice between a **Monolithic Architecture** and a **Microservices Architecture** is an organizational and operational tradeoff, not merely a technical one.

---

## Comparison Matrix

| Dimension | Monolith | Microservices |
| :--- | :--- | :--- |
| **Deployment** | Single unified artifact (simple CI/CD) | Dozens of independent services (requires Kubernetes/Docker) |
| **Network Latency** | In-memory function calls (nanoseconds) | Network RPC / HTTP / gRPC calls (milliseconds) |
| **Data Consistency** | Single DB, instant ACID transactions | Distributed data, eventual consistency, Saga patterns |
| **Debugging & Observability**| Stack traces and standard logs | Distributed tracing (OpenTelemetry), correlation IDs |
| **Scaling** | Scale entire app vertically or duplicate instance | Scale specific bottleneck services independently |
| **Team Structure** | Best for small teams (1-15 engineers) | Best for large organizations (100+ engineers) via Conway's Law |

---

## The Strangler Fig Pattern (Migration Strategy)
Never attempt a full ground-up rewrite ("The Big Bang"). Instead, place an API Gateway in front of the legacy monolith, intercept specific bounded contexts (e.g. \`/api/billing\`), route them to new microservices, and gradually strangle the monolith over time.
`
  },
  {
    slug: 'database-sharding-and-replication',
    title: 'Database Sharding, Partitioning, and Replication',
    category: 'High Availability & Scaling',
    description: 'Primary-replica replication, vertical vs horizontal partitioning, consistent hashing, and cross-shard queries.',
    content: `---
title: "Database Sharding, Partitioning, and Replication"
category: "High Availability & Scaling"
description: "Primary-replica replication, vertical vs horizontal partitioning, consistent hashing, and cross-shard queries."
---

# Database Sharding and Replication

When a single database server reaches its physical disk, memory, or write-throughput limits, **Replication** and **Sharding** distribute data across multiple nodes.

---

## 1. Database Replication (Read Scaling & High Availability)

\`\`\`
              ┌──► [ Read Replica 1 ] (Async Replication)
              │
[ Primary DB ] ──► [ Read Replica 2 ] (Async Replication)
 (Handles Writes)
              │
              └──► [ Read Replica 3 ] (Async Replication)
\`\`\`

- **Primary Node:** Handles all \`INSERT\`, \`UPDATE\`, and \`DELETE\` transactions and streams its Write-Ahead Log (WAL) to replicas.
- **Replica Nodes:** Serve read traffic (\`SELECT\`). If the primary node crashes, a replica is automatically elected as the new primary (Failover).
- **Tradeoff:** **Replication Lag** (brief period where reads from replicas return stale data before catching up).

---

## 2. Database Sharding (Horizontal Partitioning for Writes)

Sharding splits a huge table across multiple separate database servers based on a **Shard Key**:

\`\`\`
Shard 0 (User ID % 3 == 0) ──► Node A: [ Users 0, 3, 6, 9... ]
Shard 1 (User ID % 3 == 1) ──► Node B: [ Users 1, 4, 7, 10... ]
Shard 2 (User ID % 3 == 2) ──► Node C: [ Users 2, 5, 8, 11... ]
\`\`\`

### Sharding Challenges
1. **Cross-Shard JOINs:** Extremely expensive and slow across network nodes.
2. **Re-Sharding & Resharding Hotspots:** Solved using **Consistent Hashing** with virtual nodes.
`
  },
  {
    slug: 'high-availability-and-traffic-spikes',
    title: 'Designing for High Availability and Handling Sudden Traffic Spikes',
    category: 'High Availability & Scaling',
    description: 'Multi-AZ redundancy, health checks, auto-scaling, circuit breakers, rate limiting, and graceful degradation.',
    content: `---
title: "Designing for High Availability and Handling Sudden Traffic Spikes"
category: "High Availability & Scaling"
description: "Multi-AZ redundancy, health checks, auto-scaling, circuit breakers, rate limiting, and graceful degradation."
---

# High Availability & Traffic Spikes

Designing systems with **High Availability (99.99% "Four Nines" Uptime)** requires anticipating failures at every infrastructure layer.

---

## 1. High Availability Architecture Principles

1. **No Single Point of Failure (SPOF):** Redundant components deployed across multiple Availability Zones (Multi-AZ) and geographic regions.
2. **Automated Health Checks & Self-Healing:** Load balancers continuously ping \`/healthz\` endpoints and remove unhealthy instances from rotation within milliseconds.
3. **Graceful Degradation:** When services are overloaded, non-critical features (like product recommendations or real-time views) are disabled to protect core checkout/billing paths.

---

## 2. Strategies for Sudden Traffic Spikes (Black Friday / Viral Events)

1. **Auto-Scaling Groups (Horizontal Pod Autoscalers):** Scale pod counts based on CPU, memory, or Kafka queue lag metrics.
2. **Queue-Based Load Leveling:** Place incoming write requests into message queues (Kafka / SQS), allowing worker pools to process them at a steady, sustainable rate without crashing the database.
3. **Edge Caching & Static Site Generation (SSG):** Offload 95%+ of traffic directly to Cloudflare/CloudFront edge nodes.
4. **Aggressive Token-Bucket Rate Limiting:** Return \`HTTP 429 Too Many Requests\` to abusive IP addresses to preserve capacity for legitimate users.
`
  }
];

for (const art of systemDesignArticles) {
  const filePath = path.join(contentDir, `${art.slug}.md`);
  fs.writeFileSync(filePath, art.content.trim() + '\n', 'utf8');
  console.log(`Created: system-design/${art.slug}.md`);
}

console.log('Successfully generated system design articles.');
