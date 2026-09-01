---
title: "API Reliability: Keyset Pagination, Idempotency Keys, and Error Handling"
category: "Architecture & APIs"
description: "Offset vs Cursor pagination on large datasets, Idempotency-Key headers in payment systems, and RFC 7807 error patterns."
---

# API Reliability: Pagination, Idempotency, and Errors

Building resilient APIs requires handling large datasets efficiently, preventing duplicate operations on network retries, and returning predictable error contracts.

---

## 1. Pagination: Offset vs. Cursor-Based (Keyset)

### Offset-Based Pagination
```sql
-- Inefficient for deep pages: Scans and discards 100,000 rows from disk (O(N))
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20 OFFSET 100000;
```
- **Flaws:** Performance degrades linearly on deep pages; prone to duplicate/skipped items when new rows insert during pagination.

### Cursor-Based (Keyset) Pagination (Recommended)
```sql
-- Efficient: Seeks directly using B+ Tree index in O(log N)
SELECT id, created_at, total FROM orders 
WHERE (created_at, id) < ('2026-03-01T12:00:00Z', 9520)
ORDER BY created_at DESC, id DESC 
LIMIT 20;
```
- **Pros:** Constant $O(1)$ seek time regardless of dataset size; immune to insertion row drift.

---

## 2. Idempotency Keys in Payment & Mutation APIs

If an HTTP client sends a charge request and the network drops before receiving the response, an automated retry must **not** charge the customer twice.

```
Client                          API Gateway / Server                      Redis / DB
  │                                      │                                    │
  ├── 1. POST /charge (Key: "uuid-1") ──►│                                    │
  │                                      ├── 2. SETNX "idemp:uuid-1" "LOCK" ─►│
  │                                      ├── 3. Execute Stripe Payment        │
  │                                      ├── 4. Save Response in Redis ──────►│
  │◄── 5. 200 OK { id: "ch_99", $50 } ───┤                                    │
  │                                      │                                    │
  │  --- Network drops / Client Retries  │                                    │
  ├── 6. POST /charge (Key: "uuid-1") ──►│                                    │
  │                                      ├── 7. GET "idemp:uuid-1" ──────────►│
  │◄── 8. 200 OK (Cached result returned)┤                                    │
```

---

## 3. RFC 7807 Problem Details Error Contract

Standardizing error payloads across all backend endpoints:

```json
{
  "type": "https://api.example.com/errors/insufficient-funds",
  "title": "Insufficient Account Balance",
  "status": 400,
  "detail": "Account balance of $12.50 is lower than required payment of $50.00.",
  "instance": "/accounts/acc_9921/transfers",
  "code": "INSUFFICIENT_FUNDS",
  "timestamp": "2026-03-01T15:30:00Z"
}
```
