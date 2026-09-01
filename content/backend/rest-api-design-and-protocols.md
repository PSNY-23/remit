---
title: "REST API Design, Architectural Constraints, and Protocol Comparisons"
category: "Architecture & APIs"
description: "REST vs SOAP vs GraphQL vs gRPC, 6 Fielding constraints, Richardson Maturity Model, and resource-oriented URI design."
---

# RESTful API Design & Modern Protocols

Building clean, maintainable APIs requires understanding architectural constraints, resource modeling, and protocol tradeoffs.

---

## 1. Modern API Protocols Matrix

| Protocol | Transport | Payload | Communication Pattern | Primary Strengths | Ideal Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **REST** | HTTP/1.1, HTTP/2 | JSON, XML | Request-Response (Stateless) | Universal compatibility, HTTP caching | Public APIs, CRUD web services |
| **GraphQL** | HTTP (POST) | JSON | Declarative Query-Response | Eliminates over/under-fetching, single endpoint | Mobile apps, complex dashboard aggregations |
| **gRPC** | HTTP/2 | Protobuf (Binary) | Bidirectional Streaming, RPC | Low latency, strict type contracts, multiplexing | Internal microservice-to-microservice RPC |
| **SOAP** | HTTP, SMTP, JMS | XML strictly | Strict Messaging Envelope | WS-Security, ACID distributed transactions | Legacy banking, enterprise ERP integrations |
| **WebSockets**| TCP (Upgraded) | Binary, Text | Full-Duplex Bidirectional | Sub-millisecond continuous data streaming | Real-time chat, collaborative docs, financial tickers |

---

## 2. The 6 REST Architectural Constraints (Roy Fielding)

1. **Client-Server Architecture:** Separation of concerns between user interface and backend persistence.
2. **Statelessness:** The server stores no client context between requests. Every request carries complete authentication state.
3. **Cacheability:** Responses must explicitly define cache contracts via `Cache-Control` (`max-age`, `no-store`, `must-revalidate`) and `ETag`.
4. **Uniform Interface:** Standardized URIs, standard HTTP verbs, self-descriptive messages, and HATEOAS.
5. **Layered System:** The client cannot tell whether it is communicating with the origin server, an API gateway, or a caching proxy.
6. **Code on Demand (Optional):** Servers can temporarily extend client functionality by executing transferred scripts.

---

## 3. The Richardson Maturity Model

```
Level 3: HATEOAS (Hypermedia As The Engine Of Application State - responses contain dynamic navigational links)
   ▲
Level 2: HTTP Verbs & Status Codes (GET, POST, DELETE with 200, 201, 404, 400)
   ▲
Level 1: Individual Resources (Distinct URIs like /users/42, /orders/99)
   ▲
Level 0: The Swamp of POX (Single endpoint, single POST verb, RPC style /api?action=getUser)
```

---

## 4. Production RESTful URI Design Best Practices

```
# 1. Use plural nouns for resources (avoid verbs)
GET    /api/v1/users                 # List users
POST   /api/v1/users                 # Create new user
GET    /api/v1/users/42              # Get user 42
PATCH  /api/v1/users/42              # Partial update user 42
DELETE /api/v1/users/42              # Delete user 42

# 2. Represent hierarchical relationships naturally
GET    /api/v1/users/42/orders       # Get all orders placed by user 42
POST   /api/v1/users/42/orders       # Create order for user 42
GET    /api/v1/users/42/orders/10    # Get order 10 for user 42

# 3. Filtering, Sorting, and Pagination via Query Parameters
GET    /api/v1/orders?status=shipped&sort=-created_at&limit=20&cursor=eyJpZCI6OTUyfQ
```
