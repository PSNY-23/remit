---
title: "Backend Caching Strategies and Distributed Rate Limiting"
category: "Architecture & APIs"
description: "Cache-Aside, Write-Through, Write-Behind, Cache Stampede solutions, Token Bucket, Leaky Bucket, and Redis Lua scripts."
---

# Caching Strategies & Distributed Rate Limiting

High-throughput backend architectures leverage in-memory caching and distributed rate limiters to protect databases and downstream services from saturation.

---

## 1. Primary Caching Patterns

### 1. Cache-Aside (Lazy Loading)
- Application reads cache first. On cache miss, it queries database, writes result to cache with a TTL, and returns.
- *Pros:* Resilient (system operates even if cache crashes).
- *Cons:* Cache miss latency spike; potential stale reads if DB updates without cache invalidation.

### 2. Write-Through
- Application writes to cache; cache synchronously writes to DB before acknowledging success.
- *Pros:* Data in cache is guaranteed fresh.
- *Cons:* Higher write latency.

### 3. Write-Behind (Write-Back)
- Application writes to cache; cache acknowledges immediately and flushes batches to DB asynchronously.
- *Pros:* Ultra-high write throughput.
- *Cons:* Data loss risk if cache crashes before flushing to disk.

---

## 2. Classic Caching Pitfalls & Production Solutions

| Problem | Root Cause | Production Solution |
| :--- | :--- | :--- |
| **Cache Stampede (Thundering Herd)** | A high-traffic key expires; 10,000 concurrent requests miss cache and overload the database simultaneously. | **Distributed Mutex Lock** (only 1 thread queries DB while others wait) or **Probabilistic Early Expiration (XFetch)**. |
| **Cache Penetration** | Non-existent IDs (e.g. `id = -1`) repeatedly query DB on cache miss. | **Bloom Filters** before cache lookup or caching null values (`SET key null EX 60`). |
| **Cache Avalanche** | Thousands of cache keys share the exact same TTL and expire simultaneously. | Add **Randomized Jitter** to TTL values (`TTL = baseTTL + random(0, 300)`). |

---

## 3. Rate Limiting Algorithms

1. **Token Bucket:** Tokens added at steady rate up to bucket capacity. Accommodates short traffic bursts.
2. **Leaky Bucket:** Requests enter FIFO queue; processed at fixed constant rate. Enforces smooth output.
3. **Sliding Window Counter:** Blends weighted counts of previous and current time windows for high precision without memory overhead.

```lua
-- Atomic Sliding Window Counter in Redis (Lua Script)
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window = tonumber(ARGV[2])

local current = redis.call('INCR', key)
if current == 1 then
    redis.call('EXPIRE', key, window)
end

if current > limit then
    return 0 -- Rejected: HTTP 429 Too Many Requests
else
    return 1 -- Allowed
end
```
