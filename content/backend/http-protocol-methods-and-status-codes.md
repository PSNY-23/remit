---
title: "HTTP Protocol, Methods, and Status Codes: The Complete Guide"
category: "Architecture & APIs"
description: "Deep dive into HTTP/1.1 vs HTTP/2 vs HTTP/3, verb semantics (GET, POST, PUT, PATCH, DELETE), idempotency, and 1xx-5xx status code taxonomy."
---

# HTTP Protocol, Methods, and Status Codes

The **Hypertext Transfer Protocol (HTTP)** is the foundational application-layer protocol powering modern web APIs, microservices, and distributed systems.

---

## 1. HTTP Protocol Evolution: HTTP/1.1 vs. HTTP/2 vs. HTTP/3

| Feature | HTTP/1.1 | HTTP/2 | HTTP/3 (QUIC) |
| :--- | :--- | :--- | :--- |
| **Transport Layer** | TCP | TCP | **UDP (QUIC)** |
| **Data Framing** | Plain text (ASCII) | Binary frames | Binary frames |
| **Multiplexing** | No (Head-of-line blocking per connection; requires 6 parallel TCP sockets) | **Yes** (Multiple streams over 1 TCP connection) | **Yes** (Zero HOL blocking across independent UDP streams) |
| **Header Compression**| None | **HPACK** (static/dynamic table) | **QPACK** (out-of-order stream compression) |
| **Connection Setup** | TCP 3-Way + TLS (2-3 RTTs) | TCP 3-Way + TLS (2 RTTs) | **0-RTT / 1-RTT Combined Handshake** |

---

## 2. HTTP Methods: Semantics, Safety, and Idempotency

### Method Characteristics Matrix

| Method | Safe? | Idempotent? | Request Body? | Typical Success Status | Semantic Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | **Yes** | **Yes** | No | `200 OK` | Retrieve representation of a resource without side effects. |
| **POST** | No | No | **Yes** | `201 Created` / `200 OK` | Create a subordinate resource or trigger state processing. |
| **PUT** | No | **Yes** | **Yes** | `200 OK` / `204 No Content` | Completely replace or create resource at specific target URI. |
| **PATCH** | No | No (usually) | **Yes** | `200 OK` / `204 No Content` | Apply partial modifications to an existing resource. |
| **DELETE**| No | **Yes** | Optional | `200 OK` / `204 No Content` | Remove target resource. |
| **OPTIONS**| **Yes** | **Yes** | No | `204 No Content` | Describe communication options (CORS preflight). |
| **HEAD** | **Yes** | **Yes** | No | `200 OK` | Same as GET, but returns only headers (no body). |

### Safe vs. Idempotent
- **Safe:** Reading resource data produces zero mutating side-effects on server state (`GET`, `HEAD`, `OPTIONS`).
- **Idempotent:** Executing the identical request $N$ times leaves the server in the exact same state as executing it once ($f(f(x)) = f(x)$).

```
# PUT vs PATCH Example:
# Initial Resource: { "id": 42, "name": "Alice", "role": "Engineer", "email": "alice@corp.com" }

# PUT Request:   { "name": "Alice", "role": "Staff Engineer" }
# Resulting DB:  { "id": 42, "name": "Alice", "role": "Staff Engineer", "email": null } (email wiped if omitted)

# PATCH Request: { "role": "Staff Engineer" }
# Resulting DB:  { "id": 42, "name": "Alice", "role": "Staff Engineer", "email": "alice@corp.com" } (only role updated)
```

---

## 3. Comprehensive HTTP Status Codes Taxonomy

### 2xx Success
- `200 OK`: Standard response for successful GET, PUT, PATCH, or DELETE operations.
- `201 Created`: Resource successfully created. Returns `Location` header pointing to new resource.
- `202 Accepted`: Request accepted for asynchronous processing; execution not yet completed.
- `204 No Content`: Action completed successfully; response body intentionally empty.

### 3xx Redirection
- `301 Moved Permanently`: Target resource has permanently moved to new URI (cached by browser).
- `302 Found / 307 Temporary Redirect`: Temporary redirection. 307 guarantees method is not changed to GET.
- `304 Not Modified`: Client's cached version is fresh based on `ETag` or `If-Modified-Since`.

### 4xx Client Errors
- `400 Bad Request`: Malformed JSON syntax, invalid query parameters, schema validation failure.
- `401 Unauthorized`: Missing, expired, or invalid authentication credentials (JWT/Session).
- `403 Forbidden`: Authenticated user lacks permission/role (RBAC) to access the resource.
- `404 Not Found`: Target resource does not exist.
- `409 Conflict`: Request conflicts with current database state (e.g. duplicate unique username/email).
- `422 Unprocessable Entity`: Syntax is valid, but semantic business constraints fail.
- `429 Too Many Requests`: Rate limit exceeded (should return `Retry-After` header).

### 5xx Server Errors
- `500 Internal Server Error`: Unhandled runtime exception in backend code.
- `502 Bad Gateway`: Reverse proxy / API Gateway received invalid response from upstream microservice.
- `503 Service Unavailable`: Server is overloaded or undergoing maintenance.
- `504 Gateway Timeout`: Upstream microservice or database failed to respond before gateway timeout.
