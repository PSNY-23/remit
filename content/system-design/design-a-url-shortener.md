---
title: "System Design: Scalable URL Shortener (Bitly)"
category: "System Architectures"
description: "Capacity estimation, Base62 encoding vs MD5 hash collisions, distributed ID generators (Snowflake), and Redis caching tiers."
---

# System Design: URL Shortener (Bitly)

Design a globally distributed service that generates short 7-character aliases for long URLs and handles billions of high-speed redirects.

---

## 1. Scale Estimation & Requirements
- **Write Throughput:** 100M URLs/month $\approx 40$ writes/sec.
- **Read Throughput:** 10:1 Read-to-Write ratio $\approx 400$ reads/sec (peaks up to $2,000$ reads/sec).
- **Storage (5 Years):** 6 Billion URLs $\times 500\text{ bytes} \approx 3\text{TB}$.

---

## 2. High-Level Architecture

```
[ Client ] ──► [ Cloudflare Anycast CDN ] ──► [ Load Balancer ] ──► [ URL Service ]
                                                                        │
                                      ┌─────────────────────────────────┴─────────────────────────────────┐
                                      ▼                                                                   ▼
                             [ Redis Cache Tier ]                                                [ Distributed DB ]
                            (Stores hot 20% URLs)                                               (PostgreSQL / DynamoDB)
                                                                                                          │
                                                                                                          ▼
                                                                                              [ Distributed ID Generator ]
                                                                                                (Twitter Snowflake 64-bit)
```

---

## 3. Shortening Algorithm: Base62 Encoding
- 62 alphanumeric characters (`0-9`, `a-z`, `A-Z`).
- A 7-character Base62 string yields $62^7 = 3.52 \text{ Trillion}$ unique IDs.
- Generate a unique 64-bit auto-incrementing ID and convert to Base62 representation.
