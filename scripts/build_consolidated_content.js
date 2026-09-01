const fs = require('fs');
const path = require('path');

const contentRoot = path.join(__dirname, '..', 'content');

// Helper to clean directory before rebuilding consolidated articles
function cleanAndWrite(section, articles) {
  const dir = path.join(contentRoot, section);
  if (fs.existsSync(dir)) {
    const existing = fs.readdirSync(dir);
    for (const file of existing) {
      if (file.endsWith('.md')) {
        fs.unlinkSync(path.join(dir, file));
      }
    }
  } else {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const art of articles) {
    const filePath = path.join(dir, `${art.slug}.md`);
    fs.writeFileSync(filePath, art.content.trim() + '\n', 'utf8');
    console.log(`[${section}] Built: ${art.slug}.md`);
  }
}

// ============================================================================
// 1. BACKEND CONSOLIDATED ARTICLES
// ============================================================================
const backendArticles = [
  {
    slug: 'url-to-browser-request-lifecycle',
    title: 'What Happens When You Enter a URL in a Browser?',
    category: 'Fundamentals',
    description: 'Complete lifecycle from keystroke, DNS hierarchy, TCP handshake, TLS 1.3 negotiation, reverse proxies, to DOM rendering.',
    content: `---
title: "What Happens When You Enter a URL in a Browser?"
category: "Fundamentals"
description: "Complete lifecycle from keystroke, DNS hierarchy, TCP handshake, TLS 1.3 negotiation, reverse proxies, to DOM rendering."
---

# The Complete URL Navigation & Network Lifecycle

When a user types a URL such as \`https://api.example.com/users\` into a modern browser and presses **Enter**, a complex sequence of networking protocols, cryptographic handshakes, operating system routines, and backend distributed systems execute within milliseconds.

---

## 1. Architectural Sequence Diagram

\`\`\`
[User Types URL]
       │
       ▼
[URL Parsing & HSTS Check] ──► (Verify protocol, port, HSTS Preload List)
       │
       ▼
[DNS Resolution Hierarchy] ──► (Browser Cache ➔ OS Cache ➔ Local DNS / ISP ➔ Root (.) ➔ TLD (.com) ➔ Authoritative)
       │
       ▼
[TCP 3-Way Handshake]      ──► (SYN ➔ SYN-ACK ➔ ACK)
       │
       ▼
[TLS 1.3 Handshake]        ──► (ClientHello + KeyShare ➔ ServerHello + Cert ➔ Session Key Derived)
       │
       ▼
[HTTP Request Sent]        ──► (GET /users, Host, Headers, Cookies via Socket)
       │
       ▼
[Edge / CDN & Gateway]     ──► (Cloudflare Anycast ➔ Load Balancer ➔ Reverse Proxy Nginx)
       │
       ▼
[Application & DB Tier]    ──► (Middleware Auth ➔ Controller ➔ Redis Cache ➔ PostgreSQL DB)
       │
       ▼
[HTTP 200 OK Response]     ──► (Headers, Content-Type: application/json, Body streamed back)
       │
       ▼
[Browser Processing]       ──► (DOM Tree ➔ CSSOM ➔ Layout ➔ Paint ➔ Compositing)
\`\`\`

---

## 2. Deep Dive Into Each Phase

### Phase 1: URL Parsing & HSTS Preload
1. **Parsing:** The browser decomposes \`https://api.example.com:443/users?sort=desc#profile\` into:
   - **Protocol:** \`https\` (Port 443 default)
   - **Hostname:** \`api.example.com\`
   - **Path:** \`/users\`
   - **Query string:** \`?sort=desc\`
   - **Fragment:** \`#profile\` (handled strictly on client side)
2. **HSTS Preload List:** The browser checks its hardcoded **HTTP Strict Transport Security (HSTS)** list. If matched, it upgrades any \`http://\` request to \`https://\` internally before sending a single network packet, preventing SSL-stripping man-in-the-middle attacks.

---

### Phase 2: DNS Resolution (Domain Name System)
Before opening a TCP connection, the domain name must resolve to an IPv4 (\`A\` record) or IPv6 (\`AAAA\` record) IP address.

1. **Browser Cache:** Chrome/Firefox inspects its local in-memory DNS cache (viewable at \`chrome://net-internals/#dns\`).
2. **OS Resolver Cache:** Queries OS network cache (via \`getaddrinfo\` / \`/etc/hosts\`).
3. **Recursive DNS Resolver (e.g. ISP or 1.1.1.1):** If missed locally, the resolver performs iterative queries:
   - Queries **Root Nameservers (\`.\`)** ➔ Returns **TLD Nameservers (\`.com\`)**.
   - Queries **TLD Nameservers (\`.com\`)** ➔ Returns **Authoritative Nameservers** for \`example.com\` (e.g., Cloudflare DNS).
   - Queries **Authoritative Nameserver** ➔ Returns \`A 104.21.42.99\` with a **TTL (Time To Live)**.

---

### Phase 3: TCP Connection (3-Way Handshake)
Once the client has the destination IP, it opens a TCP socket connection across port 443:

\`\`\`
Client                                          Server
  │                                               │
  ├── 1. SYN (seq = x) ──────────────────────────►│  (Client requests connection with ISN x)
  │                                               │
  │◄── 2. SYN-ACK (seq = y, ack = x + 1) ─────────┤  (Server acknowledges and sends ISN y)
  │                                               │
  ├── 3. ACK (seq = x + 1, ack = y + 1) ─────────►│  (Connection Established - Ready for data)
\`\`\`

---

### Phase 4: TLS 1.3 Cryptographic Handshake
TLS 1.3 reduces the handshake overhead to **1 Round Trip Time (1-RTT)** (and supports 0-RTT resumption):

1. **ClientHello:** Sends supported cipher suites and public Diffie-Hellman **KeyShare**.
2. **ServerHello:** Server selects cipher suite (e.g., \`TLS_AES_256_GCM_SHA384\`), sends its public KeyShare, and presents its **X.509 SSL/TLS Certificate**.
3. **Verification & Symmetric Session Key:** Client verifies the certificate against built-in Root Certificate Authorities (CAs). Both parties compute the shared symmetric session key. All subsequent traffic is encrypted via AES-GCM or ChaCha20.

---

### Phase 5: Server-Side Request Execution
1. **Anycast Routing & Edge CDN:** The packet reaches the nearest edge Point of Presence (PoP). If cached, the CDN responds immediately.
2. **Load Balancer (Nginx / AWS ALB):** Terminates TLS, enforces DDoS rate limiting, and forwards the raw HTTP request to an internal application pod.
3. **Application Pipeline:**
   - **Middleware Chain:** Logging, CORS verification, JWT authentication token decoding, request body validation.
   - **Service & Cache Tier:** Queries Redis cache for hot data (\`Cache-Aside\`).
   - **Database Query:** On cache miss, queries primary PostgreSQL database via indexed lookup.
4. **Serialization & Streaming:** Converts database entity into JSON/HTML, compresses payload with Gzip/Brotli, and sends response with status \`200 OK\` and \`Content-Type: application/json\`.

---

## 3. Interview Summary & Follow-Up Checklist
- **DNS Optimizations:** EDNS Client Subnet (ECS), DNS-over-HTTPS (DoH), low TTL vs high TTL tradeoffs.
- **Transport Enhancements:** HTTP/2 multiplexing over single TCP connection; HTTP/3 (QUIC) eliminating head-of-line blocking using UDP.
`
  },
  {
    slug: 'http-protocol-methods-and-status-codes',
    title: 'HTTP Protocol, Methods, and Status Codes: The Complete Guide',
    category: 'Architecture & APIs',
    description: 'Deep dive into HTTP/1.1 vs HTTP/2 vs HTTP/3, verb semantics (GET, POST, PUT, PATCH, DELETE), idempotency, and 1xx-5xx status code taxonomy.',
    content: `---
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
| **GET** | **Yes** | **Yes** | No | \`200 OK\` | Retrieve representation of a resource without side effects. |
| **POST** | No | No | **Yes** | \`201 Created\` / \`200 OK\` | Create a subordinate resource or trigger state processing. |
| **PUT** | No | **Yes** | **Yes** | \`200 OK\` / \`204 No Content\` | Completely replace or create resource at specific target URI. |
| **PATCH** | No | No (usually) | **Yes** | \`200 OK\` / \`204 No Content\` | Apply partial modifications to an existing resource. |
| **DELETE**| No | **Yes** | Optional | \`200 OK\` / \`204 No Content\` | Remove target resource. |
| **OPTIONS**| **Yes** | **Yes** | No | \`204 No Content\` | Describe communication options (CORS preflight). |
| **HEAD** | **Yes** | **Yes** | No | \`200 OK\` | Same as GET, but returns only headers (no body). |

### Safe vs. Idempotent
- **Safe:** Reading resource data produces zero mutating side-effects on server state (\`GET\`, \`HEAD\`, \`OPTIONS\`).
- **Idempotent:** Executing the identical request $N$ times leaves the server in the exact same state as executing it once ($f(f(x)) = f(x)$).

\`\`\`
# PUT vs PATCH Example:
# Initial Resource: { "id": 42, "name": "Alice", "role": "Engineer", "email": "alice@corp.com" }

# PUT Request:   { "name": "Alice", "role": "Staff Engineer" }
# Resulting DB:  { "id": 42, "name": "Alice", "role": "Staff Engineer", "email": null } (email wiped if omitted)

# PATCH Request: { "role": "Staff Engineer" }
# Resulting DB:  { "id": 42, "name": "Alice", "role": "Staff Engineer", "email": "alice@corp.com" } (only role updated)
\`\`\`

---

## 3. Comprehensive HTTP Status Codes Taxonomy

### 2xx Success
- \`200 OK\`: Standard response for successful GET, PUT, PATCH, or DELETE operations.
- \`201 Created\`: Resource successfully created. Returns \`Location\` header pointing to new resource.
- \`202 Accepted\`: Request accepted for asynchronous processing; execution not yet completed.
- \`204 No Content\`: Action completed successfully; response body intentionally empty.

### 3xx Redirection
- \`301 Moved Permanently\`: Target resource has permanently moved to new URI (cached by browser).
- \`302 Found / 307 Temporary Redirect\`: Temporary redirection. 307 guarantees method is not changed to GET.
- \`304 Not Modified\`: Client's cached version is fresh based on \`ETag\` or \`If-Modified-Since\`.

### 4xx Client Errors
- \`400 Bad Request\`: Malformed JSON syntax, invalid query parameters, schema validation failure.
- \`401 Unauthorized\`: Missing, expired, or invalid authentication credentials (JWT/Session).
- \`403 Forbidden\`: Authenticated user lacks permission/role (RBAC) to access the resource.
- \`404 Not Found\`: Target resource does not exist.
- \`409 Conflict\`: Request conflicts with current database state (e.g. duplicate unique username/email).
- \`422 Unprocessable Entity\`: Syntax is valid, but semantic business constraints fail.
- \`429 Too Many Requests\`: Rate limit exceeded (should return \`Retry-After\` header).

### 5xx Server Errors
- \`500 Internal Server Error\`: Unhandled runtime exception in backend code.
- \`502 Bad Gateway\`: Reverse proxy / API Gateway received invalid response from upstream microservice.
- \`503 Service Unavailable\`: Server is overloaded or undergoing maintenance.
- \`504 Gateway Timeout\`: Upstream microservice or database failed to respond before gateway timeout.
`
  },
  {
    slug: 'rest-api-design-and-protocols',
    title: 'REST API Design, Architectural Constraints, and Protocol Comparisons',
    category: 'Architecture & APIs',
    description: 'REST vs SOAP vs GraphQL vs gRPC, 6 Fielding constraints, Richardson Maturity Model, and resource-oriented URI design.',
    content: `---
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
3. **Cacheability:** Responses must explicitly define cache contracts via \`Cache-Control\` (\`max-age\`, \`no-store\`, \`must-revalidate\`) and \`ETag\`.
4. **Uniform Interface:** Standardized URIs, standard HTTP verbs, self-descriptive messages, and HATEOAS.
5. **Layered System:** The client cannot tell whether it is communicating with the origin server, an API gateway, or a caching proxy.
6. **Code on Demand (Optional):** Servers can temporarily extend client functionality by executing transferred scripts.

---

## 3. The Richardson Maturity Model

\`\`\`
Level 3: HATEOAS (Hypermedia As The Engine Of Application State - responses contain dynamic navigational links)
   ▲
Level 2: HTTP Verbs & Status Codes (GET, POST, DELETE with 200, 201, 404, 400)
   ▲
Level 1: Individual Resources (Distinct URIs like /users/42, /orders/99)
   ▲
Level 0: The Swamp of POX (Single endpoint, single POST verb, RPC style /api?action=getUser)
\`\`\`

---

## 4. Production RESTful URI Design Best Practices

\`\`\`
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
\`\`\`
`
  },
  {
    slug: 'web-and-api-security-guide',
    title: 'Web & API Security: OWASP Top 10, SQLi, XSS, CSRF, and CORS',
    category: 'Security & Auth',
    description: 'Comprehensive defense against SQL injection, Cross-Site Scripting, Cross-Site Request Forgery, CORS misconfigurations, and API vulnerabilities.',
    content: `---
title: "Web & API Security: OWASP Top 10, SQLi, XSS, CSRF, and CORS"
category: "Security & Auth"
description: "Comprehensive defense against SQL injection, Cross-Site Scripting, Cross-Site Request Forgery, CORS misconfigurations, and API vulnerabilities."
---

# Web & API Security Engineering

Securing web applications and APIs requires defending against input manipulation, browser trust exploitation, and identity forgery.

---

## 1. OWASP Top 10 API Security Vulnerabilities

| Risk | Name | Attack Vector | Production Defense |
| :--- | :--- | :--- | :--- |
| **API1** | **BOLA (Broken Object Level Auth)** | Changing ID in URL (\`/api/orders/992\`) to view another user's private data. | Validate user ownership in database query (\`WHERE id = :id AND user_id = :authUserId\`). |
| **API2** | **Broken Authentication** | Weak password hashing, missing token expiration, credential stuffing. | Use Argon2id/bcrypt, short-lived JWTs, and rate-limited login endpoints. |
| **API3** | **Broken Object Property Auth** | Mass assignment: Passing \`{ "isAdmin": true }\` in \`req.body\` updates privileged fields. | Strict DTO whitelisting using schema validators (Zod/Joi). |
| **API4** | **Unrestricted Resource Consumption**| DoS via massive unbounded queries or unthrottled API loops. | Redis Token Bucket rate limiting; enforced maximum \`LIMIT\` on pagination. |
| **API5** | **Broken Function Level Auth** | Regular users invoking admin endpoints (\`/api/admin/users\`). | Role-Based Access Control (RBAC) middleware guards on all protected routes. |

---

## 2. SQL Injection (SQLi) & Defense

SQL injection occurs when untrusted input concatenates directly into raw SQL strings:

\`\`\`typescript
// VULNERABLE: Direct string interpolation
const query = \`SELECT * FROM users WHERE email = '\${req.body.email}' AND password = '\${req.body.password}'\`;

// SECURE: Parameterized Prepared Statement
const query = 'SELECT id, email, role, password_hash FROM users WHERE email = $1';
const result = await pool.query(query, [req.body.email]);
\`\`\`

---

## 3. Cross-Site Scripting (XSS)

XSS executes malicious JavaScript in a victim's browser session.
1. **Stored XSS:** Malicious script stored in database (e.g. comment field) and served to all readers.
2. **Reflected XSS:** Script injected via URL parameters and reflected in immediate server output.
3. **DOM XSS:** Vulnerable client JS APIs (\`innerHTML\`, \`eval()\`) parsing untrusted hashes.

### Defenses:
- **Contextual Output Encoding:** React JSX automatically escapes variables (\`<div>{userInput}</div>\`). Avoid \`dangerouslySetInnerHTML\`.
- **HttpOnly Cookies:** Prevents JavaScript (\`document.cookie\`) from accessing sensitive session tokens.
- **Content Security Policy (CSP):**
  \`\`\`http
  Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.trusted.com; object-src 'none';
  \`\`\`

---

## 4. Cross-Site Request Forgery (CSRF) & CORS

### CSRF Defense
- Set \`SameSite=Lax\` or \`SameSite=Strict\` on session cookies.
- Implement Anti-CSRF Synchronizer Tokens submitted via custom header (\`X-CSRF-Token\`) on mutating requests.

### CORS (Cross-Origin Resource Sharing)
- Enforces browser Same-Origin Policy (SOP).
- For non-simple requests, browser sends an automatic preflight \`OPTIONS\` request:
  \`\`\`http
  Access-Control-Allow-Origin: https://app.example.com
  Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
  Access-Control-Allow-Headers: Authorization, Content-Type
  Access-Control-Allow-Credentials: true
  \`\`\`
`
  },
  {
    slug: 'authentication-authorization-oauth-jwt',
    title: 'Authentication, Authorization, OAuth 2.0, and JWT Architecture',
    category: 'Security & Auth',
    description: 'AuthN vs AuthZ, RBAC/ABAC models, Stateful Sessions vs Stateless JWT, Dual-Token architecture, and OAuth 2.0 PKCE flow.',
    content: `---
title: "Authentication, Authorization, OAuth 2.0, and JWT Architecture"
category: "Security & Auth"
description: "AuthN vs AuthZ, RBAC/ABAC models, Stateful Sessions vs Stateless JWT, Dual-Token architecture, and OAuth 2.0 PKCE flow."
---

# Authentication, Authorization, OAuth 2.0, and JWT

Modern application security rests on establishing verified identity (**Authentication**) and enforcing granular permissions (**Authorization**).

---

## 1. Authentication (AuthN) vs. Authorization (AuthZ)

| Attribute | Authentication (AuthN) | Authorization (AuthZ) |
| :--- | :--- | :--- |
| **Core Question** | *"Who are you?"* (Identity verification) | *"What are you allowed to do?"* (Permissions evaluation) |
| **Execution Order** | Must happen **first** | Evaluated **after** identity is confirmed |
| **Mechanisms** | Passwords, Passkeys, WebAuthn, OAuth SSO, MFA | **RBAC** (Role-Based), **ABAC** (Attribute-Based), ACLs |
| **Failure Code** | \`401 Unauthorized\` | \`403 Forbidden\` |

---

## 2. Stateful Sessions vs. Stateless JWT

| Dimension | Stateful Server Sessions | Stateless JSON Web Tokens (JWT) |
| :--- | :--- | :--- |
| **Storage Location** | Session record stored in Redis/DB | Token self-contains claims; stored in client memory/cookie |
| **Scalability** | Requires central Redis cluster across server nodes | Highly scalable; verified cryptographically by any node without DB hit |
| **Revocation** | Instantaneous (\`DEL session:123\`) | Hard (tokens remain valid until expiration unless blacklisted in Redis) |
| **Payload Size** | Tiny 32-byte UUID cookie | 500-1500 bytes sent on every HTTP request header |

---

## 3. The Dual-Token Production Architecture

\`\`\`
Client (SPA / Mobile)                         API Gateway / Backend                     Auth Database / Redis
        │                                               │                                         │
        ├── 1. POST /login (Credentials) ──────────────►│                                         │
        │                                               ├── 2. Verify Credentials                 │
        │                                               ├── 3. Create Refresh Token ─────────────►│
        │◄── 4. Set HttpOnly Cookie (Refresh Token) ────┤                                         │
        │       Body: { accessToken: "jwt..." (15min) } │                                         │
        │                                               │                                         │
        │   --- Normal API Calls ---                    │                                         │
        ├── 5. GET /orders (Bearer <AccessToken>) ─────►│ (Verify signature locally - No DB hit) │
        │◄── 6. 200 OK { orders } ──────────────────────┤                                         │
        │                                               │                                         │
        │   --- Access Token Expires ---                │                                         │
        ├── 7. POST /refresh (Cookie: RefreshToken) ───►│                                         │
        │                                               ├── 8. Check Token Valid in Redis ───────►│
        │◄── 9. New Access Token (15min) ───────────────┤                                         │
\`\`\`

---

## 4. OAuth 2.0 Authorization Code Grant with PKCE

For Single Page Applications (React) and Mobile apps, **PKCE (Proof Key for Code Exchange)** prevents authorization code interception attacks:

1. **Code Verifier & Code Challenge:** Client generates random string \`verifier\` and hashes it into \`challenge = SHA256(verifier)\`.
2. **Authorize Request:** Client redirects user to Auth Server with \`code_challenge=...&code_challenge_method=S256\`.
3. **User Authenticates:** User logs in and approves consent. Auth server redirects back with temporary \`?code=auth_123\`.
4. **Token Exchange:** Client sends \`code=auth_123\` + \`code_verifier=...\`. The Auth Server hashes the verifier to ensure it matches the original challenge before returning tokens.
`
  },
  {
    slug: 'cryptography-hashing-and-password-security',
    title: 'Cryptography, Password Hashing, and Secrets Management',
    category: 'Security & Auth',
    description: 'Hashing vs Symmetric/Asymmetric Encryption, Argon2id, bcrypt, PBKDF2, AES-256-GCM, and cloud secrets managers.',
    content: `---
title: "Cryptography, Password Hashing, and Secrets Management"
category: "Security & Auth"
description: "Hashing vs Symmetric/Asymmetric Encryption, Argon2id, bcrypt, PBKDF2, AES-256-GCM, and cloud secrets managers."
---

# Cryptography, Password Hashing & Secrets Management

Protecting sensitive credentials and data at rest requires distinguishing between irreversible mathematical hashing and reversible cryptographic encryption.

---

## 1. Hashing vs. Encryption

| Property | Hashing | Encryption |
| :--- | :--- | :--- |
| **Direction** | **One-way** (Mathematically irreversible) | **Two-way** (Reversible with valid decryption key) |
| **Input / Output** | Variable length $\\rightarrow$ Fixed length hash digest | Plaintext $\\rightarrow$ Ciphertext (Variable length) |
| **Key Requirement** | No keys required (except HMAC) | Requires Symmetric (AES) or Asymmetric (RSA/ECC) keys |
| **Primary Goal** | Password verification, data integrity (checksums) | Data confidentiality in transit (TLS) and at rest |
| **Standard Ciphers** | **Argon2id**, **bcrypt**, **PBKDF2**, SHA-256 | **AES-256-GCM**, ChaCha20-Poly1305, RSA-4096 |

---

## 2. Secure Password Storage: Why MD5 / SHA-256 Fail

Fast hash algorithms (MD5, SHA-256) compute billions of operations per second on commodity GPUs, rendering passwords vulnerable to dictionary and brute-force cracking.

$$\\text{Password Hash} = \\text{SlowKDF}(\\text{Password} + \\text{Cryptographic Salt}, \\text{Work Factor / Memory Cost})$$

- **Unique Salt:** A 16+ byte random string generated per user prevents **Rainbow Table attacks** and ensures two users with identical passwords produce completely different hashes.
- **Memory-Hard KDFs (Argon2id):** Consumes configurable RAM (e.g. 64MB) per hash calculation, neutralizing GPU and custom ASIC cracking farms.

\`\`\`typescript
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12; // 2^12 iterations (approx 250ms computation time)

export async function hashPassword(plainText: string): Promise<string> {
  return await bcrypt.hash(plainText, SALT_ROUNDS);
}

export async function verifyPassword(plainText: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(plainText, hash);
}
\`\`\`

---

## 3. Secrets & API Credential Management

1. **Never Commit Secrets to Git:** Use pre-commit scanning hooks (\`TruffleHog\`, \`git-secrets\`).
2. **Environment Variables:** Inject secrets at container runtime (12-Factor App Principle III).
3. **Dedicated Vaults (AWS Secrets Manager / HashiCorp Vault):** Store production database credentials, enable automatic 30-day credential rotation, and restrict access using IAM roles.
`
  },
  {
    slug: 'backend-caching-and-rate-limiting',
    title: 'Backend Caching Strategies and Distributed Rate Limiting',
    category: 'Architecture & APIs',
    description: 'Cache-Aside, Write-Through, Write-Behind, Cache Stampede solutions, Token Bucket, Leaky Bucket, and Redis Lua scripts.',
    content: `---
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
| **Cache Penetration** | Non-existent IDs (e.g. \`id = -1\`) repeatedly query DB on cache miss. | **Bloom Filters** before cache lookup or caching null values (\`SET key null EX 60\`). |
| **Cache Avalanche** | Thousands of cache keys share the exact same TTL and expire simultaneously. | Add **Randomized Jitter** to TTL values (\`TTL = baseTTL + random(0, 300)\`). |

---

## 3. Rate Limiting Algorithms

1. **Token Bucket:** Tokens added at steady rate up to bucket capacity. Accommodates short traffic bursts.
2. **Leaky Bucket:** Requests enter FIFO queue; processed at fixed constant rate. Enforces smooth output.
3. **Sliding Window Counter:** Blends weighted counts of previous and current time windows for high precision without memory overhead.

\`\`\`lua
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
\`\`\`
`
  },
  {
    slug: 'api-reliability-pagination-idempotency-errors',
    title: 'API Reliability: Keyset Pagination, Idempotency Keys, and Error Handling',
    category: 'Architecture & APIs',
    description: 'Offset vs Cursor pagination on large datasets, Idempotency-Key headers in payment systems, and RFC 7807 error patterns.',
    content: `---
title: "API Reliability: Keyset Pagination, Idempotency Keys, and Error Handling"
category: "Architecture & APIs"
description: "Offset vs Cursor pagination on large datasets, Idempotency-Key headers in payment systems, and RFC 7807 error patterns."
---

# API Reliability: Pagination, Idempotency, and Errors

Building resilient APIs requires handling large datasets efficiently, preventing duplicate operations on network retries, and returning predictable error contracts.

---

## 1. Pagination: Offset vs. Cursor-Based (Keyset)

### Offset-Based Pagination
\`\`\`sql
-- Inefficient for deep pages: Scans and discards 100,000 rows from disk (O(N))
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20 OFFSET 100000;
\`\`\`
- **Flaws:** Performance degrades linearly on deep pages; prone to duplicate/skipped items when new rows insert during pagination.

### Cursor-Based (Keyset) Pagination (Recommended)
\`\`\`sql
-- Efficient: Seeks directly using B+ Tree index in O(log N)
SELECT id, created_at, total FROM orders 
WHERE (created_at, id) < ('2026-03-01T12:00:00Z', 9520)
ORDER BY created_at DESC, id DESC 
LIMIT 20;
\`\`\`
- **Pros:** Constant $O(1)$ seek time regardless of dataset size; immune to insertion row drift.

---

## 2. Idempotency Keys in Payment & Mutation APIs

If an HTTP client sends a charge request and the network drops before receiving the response, an automated retry must **not** charge the customer twice.

\`\`\`
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
\`\`\`

---

## 3. RFC 7807 Problem Details Error Contract

Standardizing error payloads across all backend endpoints:

\`\`\`json
{
  "type": "https://api.example.com/errors/insufficient-funds",
  "title": "Insufficient Account Balance",
  "status": 400,
  "detail": "Account balance of $12.50 is lower than required payment of $50.00.",
  "instance": "/accounts/acc_9921/transfers",
  "code": "INSUFFICIENT_FUNDS",
  "timestamp": "2026-03-01T15:30:00Z"
}
\`\`\`
`
  },
  {
    slug: 'concurrency-async-and-event-loop',
    title: 'Concurrency, Asynchronous Programming, and the Node.js Event Loop',
    category: 'Programming & Logic',
    description: 'Multithreading vs Async I/O, Node.js libuv event loop phases, microtasks vs macrotasks, Callbacks, Promises, and async/await.',
    content: `---
title: "Concurrency, Asynchronous Programming, and the Node.js Event Loop"
category: "Programming & Logic"
description: "Multithreading vs Async I/O, Node.js libuv event loop phases, microtasks vs macrotasks, Callbacks, Promises, and async/await."
---

# Concurrency, Async Programming & the Event Loop

Understanding concurrency models separates entry-level developers from senior backend engineers who build high-throughput systems.

---

## 1. Multithreading vs. Asynchronous Non-Blocking I/O

| Feature | Multithreading (Java, Go, C++, Rust) | Asynchronous Single-Threaded (Node.js) |
| :--- | :--- | :--- |
| **Execution Model** | Multiple OS threads executing in parallel across CPU cores. | Single main thread executing non-blocking I/O via **Event Loop**. |
| **Memory Footprint** | High (1MB-8MB stack memory allocated per thread). | Very low (single thread registering lightweight event callbacks). |
| **Concurrency Pitfalls**| Race conditions, deadlocks, mutex locking contention. | Blocking the event loop with heavy synchronous CPU tasks. |
| **Ideal For** | **CPU-Bound** (video encoding, cryptography, ML inference). | **I/O-Bound** (high-concurrency REST APIs, microservices, chat). |

---

## 2. The Node.js Event Loop (libuv) Architecture

\`\`\`
   ┌───────────────────────────┐
┌─►│   Timers (setTimeout)     │
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Pending I/O Callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Idle, Prepare             │
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Poll (Retrieve I/O events)│ ◄─── (Incoming network requests / DB responses)
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Check (setImmediate)      │
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │ Close Callbacks           │
└──┴─────────────┬─────────────┘
                 │
  [ Microtask Queue (process.nextTick, Promise.then) runs between every phase! ]
\`\`\`

---

## 3. Microtasks vs. Macrotasks Execution Order

1. **Microtasks:** \`process.nextTick\` (highest priority) and \`Promise.then/catch/finally\`. Executed immediately after the current operation finishes, before moving to the next Event Loop phase.
2. **Macrotasks:** \`setTimeout\`, \`setInterval\`, \`setImmediate\`, I/O callbacks.

\`\`\`javascript
console.log('1: Sync Start');

setTimeout(() => console.log('2: setTimeout (Macrotask)'), 0);

Promise.resolve().then(() => console.log('3: Promise (Microtask)'));

process.nextTick(() => console.log('4: nextTick (Microtask)'));

console.log('5: Sync End');

// Output:
// 1: Sync Start
// 5: Sync End
// 4: nextTick (Microtask)
// 3: Promise (Microtask)
// 2: setTimeout (Macrotask)
\`\`\`
`
  },
  {
    slug: 'object-oriented-programming-and-design-patterns',
    title: 'OOP Principles, Interfaces, Abstract Classes, and SOLID Design',
    category: 'Programming & Logic',
    description: 'The 4 OOP pillars (Encapsulation, Abstraction, Inheritance, Polymorphism), Interface vs Abstract class, and SOLID principles.',
    content: `---
title: "OOP Principles, Interfaces, Abstract Classes, and SOLID Design"
category: "Programming & Logic"
description: "The 4 OOP pillars (Encapsulation, Abstraction, Inheritance, Polymorphism), Interface vs Abstract class, and SOLID principles."
---

# OOP Principles, Interfaces & SOLID Architecture

Object-Oriented Programming and design patterns structure maintainable, scalable backend codebases.

---

## 1. The 4 Fundamental Pillars of OOP

1. **Encapsulation:** Bundles data and methods within a class while restricting direct external access using visibility modifiers (\`private\`, \`protected\`).
2. **Abstraction:** Exposes essential interfaces while hiding internal complex implementation details.
3. **Inheritance:** Enables child classes to inherit attributes and methods from a parent class for code reuse.
4. **Polymorphism:** Allows different concrete classes to be treated as instances of a shared interface or abstract base class.

---

## 2. Interface vs. Abstract Class

| Dimension | Interface | Abstract Class |
| :--- | :--- | :--- |
| **Implementation** | Pure contract (no method bodies) | Can contain both abstract methods and concrete implementations |
| **State / Variables** | Cannot store instance state | Can define instance fields, constructors, and default state |
| **Inheritance** | A class can implement **multiple** interfaces | A class can extend **only one** abstract class |
| **Runtime Overhead** | Zero (compiled away in TypeScript) | Class prototype inheritance hierarchy |
| **Core Concept** | Defines *"What an object can DO"* (Role / Capability) | Defines *"What an object IS"* (Shared identity / Base logic) |

---

## 3. The SOLID Principles in Backend Engineering

- **S - Single Responsibility Principle (SRP):** A class or module should have one, and only one, reason to change.
- **O - Open/Closed Principle (OCP):** Software entities should be open for extension, but closed for modification (use Strategy pattern / interfaces).
- **L - Liskov Substitution Principle (LSP):** Subtypes must be substitutable for their base types without altering program correctness.
- **I - Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use (prefer small, role-specific interfaces).
- **D - Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules; both should depend on abstractions (Dependency Injection).
`
  },
  {
    slug: 'backend-project-interview-guide',
    title: 'Project-Based Interview Questions & Architecture Defense',
    category: 'Projects & Practice',
    description: 'Senior STAR framework, explaining request flows, trade-off justifications, CI/CD, Docker, and incident post-mortems.',
    content: `---
title: "Project-Based Interview Questions & Architecture Defense"
category: "Projects & Practice"
description: "Senior STAR framework, explaining request flows, trade-off justifications, CI/CD, Docker, and incident post-mortems."
---

# Project-Based Interview Questions & Architecture Defense

Interviewers spend significant time drilling into your past projects to test practical engineering judgment, troubleshooting depth, and system ownership.

---

## 1. The STAR Framework for Architecture Interviews

- **Situation:** Business context, daily active users, requests per second, and performance bottlenecks.
- **Task:** Your specific technical ownership, objectives, and SLA targets.
- **Action:** Architectural design decisions, technology selection trade-offs, and implementation milestones.
- **Result:** Measurable outcomes (e.g. 99.99% uptime, p99 latency cut from 650ms to 45ms, 40% cloud cost reduction).

---

## 2. Core Project Interview Questions & Answer Frameworks

### Q1: "Explain the end-to-end request flow of your system."
- **Answer Structure:** Client ➔ Cloudflare Edge CDN ➔ Nginx / AWS ALB ➔ API Gateway ➔ Microservices (Node.js/Go) ➔ Redis Cache Tier (Cache-Aside) ➔ PostgreSQL (Read-Replicas) ➔ Kafka Event Bus for async worker processing (Elasticsearch/Notification queue).

### Q2: "What was the most difficult production incident you resolved?"
- **Answer Structure:** Describe a specific high-severity issue (e.g. Connection Pool Starvation under traffic spike). Explain how you identified it using APM metrics/logs, the immediate mitigation (increasing connection pool bounds + circuit breaker), and the permanent fix (introducing PgBouncer connection pooling and caching hot queries in Redis).

### Q3: "How did you handle deployments, testing, and CI/CD?"
- **Answer Structure:** Automated GitHub Actions pipeline running linting, unit tests, and integration tests against containerized test databases in Docker. Successful builds produce immutable Docker images pushed to ECR and deployed via zero-downtime rolling updates on Kubernetes with automated health-check rollbacks.
`
  }
];

cleanAndWrite('backend', backendArticles);

// ============================================================================
// 2. DATABASE CONSOLIDATED ARTICLES
// ============================================================================
const databaseArticles = [
  {
    slug: 'sql-fundamentals-and-joins',
    title: 'SQL Fundamentals, Relational Keys, JOINs, and Execution Stages',
    category: 'SQL Core',
    description: 'Primary vs Foreign keys, all 6 SQL JOIN types, WHERE vs HAVING, DELETE vs TRUNCATE vs DROP, and query execution lifecycle.',
    content: `---
title: "SQL Fundamentals, Relational Keys, JOINs, and Execution Stages"
category: "SQL Core"
description: "Primary vs Foreign keys, all 6 SQL JOIN types, WHERE vs HAVING, DELETE vs TRUNCATE vs DROP, and query execution lifecycle."
---

# SQL Fundamentals, Relational Keys & JOINs

Relational databases structure data into tables with enforced schemas, referential integrity, and relational algebra operations.

---

## 1. Primary Keys vs. Foreign Keys

| Attribute | Primary Key (PK) | Foreign Key (FK) |
| :--- | :--- | :--- |
| **Definition** | Uniquely identifies each record in a table. | References a Primary Key in another table to establish relationships. |
| **Nullability** | Strictly **NOT NULL**. | Can be \`NULL\` (unless explicitly declared \`NOT NULL\`). |
| **Count** | Exactly **one** per table. | A table can have **multiple** foreign keys. |
| **Indexing** | Automatically clustered index in InnoDB. | Secondary index recommended to accelerate \`JOIN\` lookups. |

---

## 2. All 6 SQL JOIN Types

\`\`\`sql
-- 1. INNER JOIN: Only rows matching in both tables
SELECT u.name, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id;

-- 2. LEFT JOIN: All left table rows + matching right table rows (NULL if no match)
SELECT u.name, o.total FROM users u LEFT JOIN orders o ON u.id = o.user_id;

-- 3. RIGHT JOIN: All right table rows + matching left table rows
SELECT u.name, o.total FROM users u RIGHT JOIN orders o ON u.id = o.user_id;

-- 4. FULL OUTER JOIN: All rows when there is a match in either table
SELECT u.name, o.total FROM users u FULL OUTER JOIN orders o ON u.id = o.user_id;

-- 5. CROSS JOIN: Cartesian product (N * M rows)
SELECT * FROM colors CROSS JOIN sizes;

-- 6. Anti-Join (Find users with ZERO orders)
SELECT u.name FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.id IS NULL;
\`\`\`

---

## 3. SQL Execution Lifecycle Order

SQL queries are **not** executed in the order they are written:

$$\\text{1. FROM} \\rightarrow \\text{2. JOIN} \\rightarrow \\text{3. WHERE} \\rightarrow \\text{4. GROUP BY} \\rightarrow \\text{5. HAVING} \\rightarrow \\text{6. SELECT} \\rightarrow \\text{7. DISTINCT} \\rightarrow \\text{8. ORDER BY} \\rightarrow \\text{9. LIMIT}$$

- **WHERE vs. HAVING:** \`WHERE\` filters individual records **before** grouping; \`HAVING\` filters aggregated group summaries **after** \`GROUP BY\`.

---

## 4. DELETE vs. TRUNCATE vs. DROP

| Feature | DELETE | TRUNCATE | DROP |
| :--- | :--- | :--- | :--- |
| **Type** | **DML** (Data Manipulation) | **DDL** (Data Definition) | **DDL** (Data Definition) |
| **Scope** | Deletes rows matching \`WHERE\` clause | Deletes **all** rows instantly | Completely removes table schema and data |
| **Speed** | Slower (logs row-by-row deletions) | Extremely fast (deallocates pages) | Instantaneous |
| **Auto-Increment**| Does **not** reset ID counter | **Resets** auto-increment to 1 | Table ceases to exist |
`
  },
  {
    slug: 'acid-transactions-isolation-and-concurrency',
    title: 'ACID Transactions, Isolation Levels, MVCC, and Deadlocks',
    category: 'Transactions & Concurrency',
    description: 'Atomicity, Consistency, Isolation, Durability, Write-Ahead Logging, Dirty/Phantom reads, MVCC, and deadlock resolution.',
    content: `---
title: "ACID Transactions, Isolation Levels, MVCC, and Deadlocks"
category: "Transactions & Concurrency"
description: "Atomicity, Consistency, Isolation, Durability, Write-Ahead Logging, Dirty/Phantom reads, MVCC, and deadlock resolution."
---

# ACID Transactions, Isolation Levels & MVCC

Relational databases guarantee transactional correctness through the **ACID** properties and configurable isolation levels.

---

## 1. The 4 ACID Properties

1. **Atomicity ("All or Nothing"):** All operations in a transaction commit together; on any error, changes roll back completely.
2. **Consistency:** Transitions database state while preserving all foreign keys, unique constraints, and schema rules.
3. **Isolation:** Concurrent transactions execute without observing intermediate uncommitted states of other transactions.
4. **Durability:** Committed transactions persist permanently across crashes via **Write-Ahead Logging (WAL)** flushed to non-volatile disk.

---

## 2. Concurrency Anomalies & Isolation Levels

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read | Default Engine |
| :--- | :---: | :---: | :---: | :--- |
| **Read Uncommitted** | Possible | Possible | Possible | Rarely used |
| **Read Committed** | **Prevented** | Possible | Possible | PostgreSQL, Oracle, SQL Server |
| **Repeatable Read** | **Prevented** | **Prevented** | Prevented via MVCC | MySQL InnoDB |
| **Serializable** | **Prevented** | **Prevented** | **Prevented** | Strict financial platforms |

- **Dirty Read:** Reading uncommitted data from a concurrent transaction that later rolls back.
- **Non-Repeatable Read:** Re-reading the same row within a transaction returns modified column values because another transaction committed an update.
- **Phantom Read:** Re-executing a range query (\`WHERE age > 25\`) returns newly inserted "phantom" rows.

---

## 3. Multi-Version Concurrency Control (MVCC)
Modern database engines (PostgreSQL, MySQL) avoid read locks by maintaining version snapshots of rows tagged with transaction IDs (\`xmin\`, \`xmax\`). **Readers never block writers, and writers never block readers.**

---

## 4. Deadlock Detection and Prevention

\`\`\`
Transaction A: Locks Row 1 ──► Waiting for Row 2 (Held by B)
                                      ▲
                                      │
Transaction B: Locks Row 2 ──► Waiting for Row 1 (Held by A)
          [ DEADLOCK CYCLE: Engine aborts lowest cost transaction ]
\`\`\`

- **Prevention:**
  1. Enforce strict, identical lock acquisition order across all backend services (\`ORDER BY id\`).
  2. Keep transactions short (never make external HTTP API calls inside database transactions).
  3. Use Optimistic Locking with version columns (\`UPDATE items SET stock = stock - 1, version = version + 1 WHERE id = :id AND version = :version\`).
`
  },
  {
    slug: 'database-indexing-and-query-optimization',
    title: 'Database Indexing, Query Optimization, and Top SQL Queries',
    category: 'Performance & Optimization',
    description: 'B+ Tree internals, Clustered vs Secondary indexes, EXPLAIN ANALYZE, composite index rules, duplicates, and Nth salary queries.',
    content: `---
title: "Database Indexing, Query Optimization, and Top SQL Queries"
category: "Performance & Optimization"
description: "B+ Tree internals, Clustered vs Secondary indexes, EXPLAIN ANALYZE, composite index rules, duplicates, and Nth salary queries."
---

# Database Indexing & Query Optimization

Indexes are specialized data structures that enable logarithmic $O(\\log N)$ lookup performance instead of full table scans.

---

## 1. B+ Tree Index Mechanics

\`\`\`
                         [ Root Node: 50 ]
                        /                 \\
            [ Internal: 25 ]            [ Internal: 75 ]
           /                \\          /                \\
    [ Leaf: 10, 20 ]  [ Leaf: 30, 40 ] [ Leaf: 60, 70 ] [ Leaf: 80, 90 ]
           │                 │                 │                 │
    (Doubly Linked List enables lightning-fast Range Scans: BETWEEN 20 AND 70)
\`\`\`

- **Clustered Index:** Defines physical row storage order on disk (Primary Key). Only 1 per table.
- **Secondary Index:** Separate B+ Tree storing indexed column + pointer to clustered index key.

---

## 2. Query Optimization Best Practices

1. **Composite Index Column Order (Equality ➔ Range ➔ Sort):**
   \`\`\`sql
   -- Optimal for: WHERE status = 'ACTIVE' AND created_at >= '2026-01-01' ORDER BY id
   CREATE INDEX idx_orders_opt ON orders (status, created_at, id);
   \`\`\`
2. **Avoid Non-SARGable Query Predicates:** Wrapping columns in functions disables B+ tree index usage (\`WHERE DATE(created_at) = '...'\` ➔ use range \`WHERE created_at >= ... AND created_at < ...\`).
3. **Analyze Query Execution Plans:** Run \`EXPLAIN (ANALYZE, BUFFERS)\` to detect sequential scans (\`Seq Scan\`), high shared buffer reads, or slow hash joins.

---

## 3. Must-Know SQL Interview Queries

### A. Finding & Deleting Duplicate Rows
\`\`\`sql
-- Find duplicates
SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;

-- Delete duplicates keeping lowest ID
DELETE FROM users WHERE id NOT IN (SELECT MIN(id) FROM users GROUP BY email);
\`\`\`

### B. Finding the 2nd (or Nth) Highest Salary
\`\`\`sql
WITH RankedEmployees AS (
    SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank_num
    FROM employees
)
SELECT name, salary FROM RankedEmployees WHERE rank_num = 2;
\`\`\`
`
  },
  {
    slug: 'sql-vs-nosql-and-mongodb-modeling',
    title: 'SQL vs. NoSQL and MongoDB Document Modeling',
    category: 'NoSQL & Data Modeling',
    description: 'Relational ACID vs BASE, Document/Key-Value/Column stores, Embedding vs Referencing in MongoDB, and 16MB document limits.',
    content: `---
title: "SQL vs. NoSQL and MongoDB Document Modeling"
category: "NoSQL & Data Modeling"
description: "Relational ACID vs BASE, Document/Key-Value/Column stores, Embedding vs Referencing in MongoDB, and 16MB document limits."
---

# SQL vs. NoSQL & MongoDB Modeling

Choosing between Relational and Document databases depends on data access patterns, transactional guarantees, and scalability needs.

---

## 1. Relational (SQL) vs. Non-Relational (NoSQL)

| Dimension | SQL (PostgreSQL, MySQL) | NoSQL (MongoDB, DynamoDB, Cassandra) |
| :--- | :--- | :--- |
| **Schema** | Rigid, predefined schema with strict validation | Dynamic / Schema-less BSON documents |
| **Consistency**| Immediate ACID consistency | Eventual Consistency (**BASE** model), configurable multi-doc ACID |
| **Scaling** | Vertical scaling; Read-replicas for reads | Built-in native **Horizontal Sharding** |
| **Relationships**| Native multi-table \`JOIN\`s, Foreign Keys | Denormalized embedded structures; \`$lookup\` aggregation |

---

## 2. MongoDB Document Modeling: Embedding vs. Referencing

### Embed When:
- **1-to-Few relationships** (User with 2-3 shipping addresses).
- Nested data is always queried together with the parent document.
- Subdocuments are updated together atomically.

### Reference When:
- **1-to-Many / Unbounded Arrays** (Post with 500,000 comments - prevents exceeding MongoDB's **16MB BSON Document Limit**).
- Many-to-Many relationships (Students and Courses).
- Referenced data is frequently updated in isolation.
`
  }
];

cleanAndWrite('databases', databaseArticles);

// ============================================================================
// 3. SYSTEM DESIGN CONSOLIDATED ARTICLES
// ============================================================================
const systemDesignArticles = [
  {
    slug: 'scaling-and-high-availability-guide',
    title: 'Scaling Distributed Systems to Millions of Requests & High Availability',
    category: 'High Availability & Scaling',
    description: 'Stateless microservice scaling, load balancing algorithms, multi-AZ redundancy, circuit breakers, and traffic leveling.',
    content: `---
title: "Scaling Distributed Systems to Millions of Requests & High Availability"
category: "High Availability & Scaling"
description: "Stateless microservice scaling, load balancing algorithms, multi-AZ redundancy, circuit breakers, and traffic leveling."
---

# Scaling Distributed Systems & High Availability

Scaling a system to millions of concurrent requests while maintaining **99.99% ("Four Nines") Availability** requires eliminating single points of failure across all architectural tiers.

---

## 1. The Full-Stack Scaling Hierarchy

\`\`\`
[ Anycast DNS / Cloudflare Edge CDN ] ──► (Caches static assets, DDoS mitigation)
                  │
                  ▼
[ Load Balancer Tier (Nginx / ALB) ]   ──► (Round Robin / Least Connections / SSL Termination)
                  │
                  ▼
[ Stateless App Tier (Kubernetes HPA) ]──► (Auto-scales on CPU / Kafka consumer lag)
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
[ Redis Cache Cluster ]  [ Primary SQL Database (Writes) ]
 (Handles 90%+ reads)       │
                            ├──► [ Read Replica 1 ] (Async replication)
                            └──► [ Read Replica 2 ] (Async replication)
\`\`\`

---

## 2. Golden Rules of High Availability

1. **Stateless Application Servers:** Store user sessions in Redis clusters, never in local server memory.
2. **Database Read-Replicas & Connection Pooling:** Use PgBouncer to prevent connection exhaustion.
3. **Queue-Based Load Leveling:** Buffer bursty traffic spikes into Kafka/RabbitMQ queues so worker pools process at a sustainable rate.
4. **Resilience Patterns:**
   - **Circuit Breakers:** Open circuit when downstream service error rates cross 50% threshold.
   - **Jitter in Retries:** Add randomized jitter to exponential backoffs to prevent thundering herd spikes.
`
  },
  {
    slug: 'database-sharding-and-replication',
    title: 'Database Sharding, Partitioning, and Replication Architecture',
    category: 'High Availability & Scaling',
    description: 'Master-replica replication lag, failover mechanisms, horizontal sharding, consistent hashing, and cross-shard queries.',
    content: `---
title: "Database Sharding, Partitioning, and Replication Architecture"
category: "High Availability & Scaling"
description: "Master-replica replication lag, failover mechanisms, horizontal sharding, consistent hashing, and cross-shard queries."
---

# Database Sharding & Replication

When a single database server hits its CPU, memory, or disk I/O throughput limits, data must be distributed across multiple physical nodes.

---

## 1. Primary-Replica Replication

- **Primary Node:** Handles all write operations (\`INSERT\`, \`UPDATE\`, \`DELETE\`) and streams its Write-Ahead Log (WAL) to replicas.
- **Replica Nodes:** Serve read queries (\`SELECT\`).
- **Replication Lag:** Asynchronous replication introduces a small replication lag ($<100\\text{ms}$) where reads from replicas may return stale data.

---

## 2. Horizontal Sharding & Consistent Hashing

Sharding partitions large tables across multiple database instances using a **Shard Key**:

\`\`\`
Shard Key (User ID) ──► Hash Function ──► Hash Ring ──► Target Shard Node
\`\`\`

- **Consistent Hashing with Virtual Nodes:** When adding or removing database nodes, consistent hashing requires remapping only $K/N$ keys (where $K$ is total keys and $N$ is number of nodes), preventing catastrophic cache invalidation or full data reshuffling.
`
  },
  {
    slug: 'message-queues-kafka-vs-rabbitmq',
    title: 'Message Queues: Apache Kafka vs. RabbitMQ Architecture',
    category: 'Distributed Systems',
    description: 'Smart broker vs dumb broker, AMQP routing, distributed commit logs, partitions, consumer groups, and delivery semantics.',
    content: `---
title: "Message Queues: Apache Kafka vs. RabbitMQ Architecture"
category: "Distributed Systems"
description: "Smart broker vs dumb broker, AMQP routing, distributed commit logs, partitions, consumer groups, and delivery semantics."
---

# Message Queues: Kafka vs. RabbitMQ

Asynchronous message brokers decouple microservices, absorb bursty workloads, and enable distributed event-driven architectures.

---

## 1. Architectural Paradigms

| Dimension | RabbitMQ (Smart Broker) | Apache Kafka (Distributed Log) |
| :--- | :--- | :--- |
| **Model** | Push-based message queue (AMQP) | Pull-based distributed append-only commit log |
| **Throughput** | ~20k - 100k msgs/sec | **Millions of events/sec** (Sequential disk I/O) |
| **Message Ordering** | Guaranteed per queue | Guaranteed **within a single partition** |
| **Persistence** | Messages deleted once acknowledged | Messages retained for days/weeks on disk |
| **Message Replay** | No | **Yes** (Consumers can rewind offsets) |
| **Ideal For** | Complex task queues, transactional background jobs | High-throughput event streaming, log aggregation, CDC |

---

## 2. Kafka Partitioning & Consumer Groups

\`\`\`
Topic: "orders" (3 Partitions)
┌─────────────────┐ ──► Partition 0 ──► Consumer Instance A (Group 1)
│ Producer App    │ ──► Partition 1 ──► Consumer Instance B (Group 1)
└─────────────────┘ ──► Partition 2 ──► Consumer Instance C (Group 1)
\`\`\`

- Messages with the same **Partition Key** (e.g. \`order.userId\`) always route to the exact same partition, guaranteeing strict chronological ordering per user.
`
  },
  {
    slug: 'monolith-vs-microservices',
    title: 'Monolith vs. Microservices: Decision Matrix & Strangler Migration',
    category: 'Distributed Systems',
    description: 'Modular monoliths, distributed system complexity, Conway’s Law, distributed tracing, and the Strangler Fig migration pattern.',
    content: `---
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
3. Incrementally route legacy endpoints (e.g. \`/api/payments\`) to the new microservice until the legacy monolith is completely decommissioned.
`
  },
  {
    slug: 'design-a-url-shortener',
    title: 'System Design: Scalable URL Shortener (Bitly)',
    category: 'System Architectures',
    description: 'Capacity estimation, Base62 encoding vs MD5 hash collisions, distributed ID generators (Snowflake), and Redis caching tiers.',
    content: `---
title: "System Design: Scalable URL Shortener (Bitly)"
category: "System Architectures"
description: "Capacity estimation, Base62 encoding vs MD5 hash collisions, distributed ID generators (Snowflake), and Redis caching tiers."
---

# System Design: URL Shortener (Bitly)

Design a globally distributed service that generates short 7-character aliases for long URLs and handles billions of high-speed redirects.

---

## 1. Scale Estimation & Requirements
- **Write Throughput:** 100M URLs/month $\\approx 40$ writes/sec.
- **Read Throughput:** 10:1 Read-to-Write ratio $\\approx 400$ reads/sec (peaks up to $2,000$ reads/sec).
- **Storage (5 Years):** 6 Billion URLs $\\times 500\\text{ bytes} \\approx 3\\text{TB}$.

---

## 2. High-Level Architecture

\`\`\`
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
\`\`\`

---

## 3. Shortening Algorithm: Base62 Encoding
- 62 alphanumeric characters (\`0-9\`, \`a-z\`, \`A-Z\`).
- A 7-character Base62 string yields $62^7 = 3.52 \\text{ Trillion}$ unique IDs.
- Generate a unique 64-bit auto-incrementing ID and convert to Base62 representation.
`
  },
  {
    slug: 'design-a-messaging-chat-app',
    title: 'System Design: Real-Time Chat Application (WhatsApp / Slack)',
    category: 'System Architectures',
    description: 'Persistent WebSockets, presence tracking via Redis, message delivery receipts, Kafka queuing, and Cassandra history storage.',
    content: `---
title: "System Design: Real-Time Chat Application (WhatsApp / Slack)"
category: "System Architectures"
description: "Persistent WebSockets, presence tracking via Redis, message delivery receipts, Kafka queuing, and Cassandra history storage."
---

# System Design: Real-Time Chat Application

Designing a high-throughput, low-latency messaging platform supporting 1-on-1 chat, group messaging, online presence, and message delivery receipts.

---

## 1. High-Level Architecture

\`\`\`
[ User Alice ] ──(WebSocket)──► [ Gateway Server 1 ] ──► [ Kafka: chat-messages ]
                                           ▲                           │
                                           │                           ▼
[ User Bob ]   ──(WebSocket)──► [ Gateway Server 2 ] ◄── [ Message Routing Service ]
                                                               │
                               ┌───────────────────────────────┴───────────────────────────────┐
                               ▼                                                               ▼
                      [ Redis Presence Store ]                                     [ Cassandra / ScyllaDB ]
                     (Heartbeat TTL: 10 seconds)                                   (Append-Only Message History)
\`\`\`

---

## 2. Key Architecture Details
1. **WebSockets:** Persistent full-duplex connections for instant delivery.
2. **Storage Tier (Cassandra / ScyllaDB):** Partition Key: \`conversation_id\`, Clustering Key: \`message_id\` (TimeUUID) ensures efficient chronological range queries.
3. **Presence:** Clients send heartbeat pings every 5s to Redis with a 10s TTL (\`SET user:123:presence online EX 10\`).
`
  },
  {
    slug: 'design-an-ecommerce-backend',
    title: 'System Design: E-Commerce Flash Sale & Inventory Reservation',
    category: 'System Architectures',
    description: 'High-concurrency inventory reservation, Redis atomic decrement, distributed Saga transactions, and payment webhooks.',
    content: `---
title: "System Design: E-Commerce Flash Sale & Inventory Reservation"
category: "System Architectures"
description: "High-concurrency inventory reservation, Redis atomic decrement, distributed Saga transactions, and payment webhooks."
---

# System Design: E-Commerce & Flash Sale Backend

Designing an e-commerce platform capable of handling flash sale traffic spikes with 50,000 concurrent checkout attempts on limited inventory.

---

## 1. Flash Sale Inventory Architecture

\`\`\`
1. Redis Atomic Decr:  DECR inventory:item_42 (Lua script ensures stock > 0 atomically).
2. Order Pending:      Create order record in 'PENDING_PAYMENT' state with 15-minute TTL.
3. Message Queue:      Publish 'OrderCreatedEvent' to Kafka / RabbitMQ.
4. Payment Callback:   Stripe Webhook acknowledges payment ➔ Status changes to 'CONFIRMED'.
5. Expiration Worker:  If payment unpaid after 15 mins, cron reclaims stock (INCR inventory:item_42).
\`\`\`

---

## 2. Distributed Transactions: The Saga Pattern
- **Step 1:** Order Service creates order (Pending).
- **Step 2:** Inventory Service reserves stock.
- **Step 3:** Payment Service charges credit card.
- **Compensating Action:** If Step 3 fails, the Saga Orchestrator triggers compensating events: Inventory Service un-reserves stock, and Order Service marks order as Canceled.
`
  },
  {
    slug: 'design-a-notification-system',
    title: 'System Design: Multi-Channel Notification Platform',
    category: 'System Architectures',
    description: 'Push notifications (APNs/FCM), SMS (Twilio), Email (SendGrid), deduplication via Redis, and priority queue workers.',
    content: `---
title: "System Design: Multi-Channel Notification Platform"
category: "System Architectures"
description: "Push notifications (APNs/FCM), SMS (Twilio), Email (SendGrid), deduplication via Redis, and priority queue workers."
---

# System Design: Multi-Channel Notification Platform

A scalable notification engine delivering millions of daily alerts across **Mobile Push (APNs / FCM)**, **SMS (Twilio)**, and **Email (SendGrid)**.

---

## 1. High-Level Architecture

\`\`\`
[ Microservices ] ──► [ Notification API ] ──► [ Redis Deduplication ] ──► [ User Preference Engine ]
                                                                                   │
                             ┌─────────────────────────────────────────────────────┼─────────────────────────────────────────────────────┐
                             ▼                                                     ▼                                                     ▼
                    [ Kafka: Push Queue ]                                 [ Kafka: SMS Queue ]                                  [ Kafka: Email Queue ]
                             │                                                     │                                                     │
                             ▼                                                     ▼                                                     ▼
                    [ Push Worker Pool ]                                  [ SMS Worker Pool ]                                   [ Email Worker Pool ]
                    (Apple APNs / Google FCM)                             (Twilio / MessageBird)                                (SendGrid / AWS SES)
\`\`\`

---

## 2. Key Reliability Features
- **Deduplication:** Generate hash (\`MD5(userId + type + date)\`) in Redis to eliminate duplicate spam.
- **Priority Queues:** Critical OTP login codes bypass bulk marketing queues for zero-wait delivery.
`
  },
  {
    slug: 'design-a-food-delivery-backend',
    title: 'System Design: Real-Time Food Delivery Backend (UberEats / DoorDash)',
    category: 'System Architectures',
    description: 'Geospatial indexing with Uber H3 / Quadtrees, real-time driver tracking, matching algorithms, and order state machines.',
    content: `---
title: "System Design: Real-Time Food Delivery Backend (UberEats / DoorDash)"
category: "System Architectures"
description: "Geospatial indexing with Uber H3 / Quadtrees, real-time driver tracking, matching algorithms, and order state machines."
---

# System Design: Real-Time Food Delivery Platform

Designing a real-time food delivery backend handling three concurrent actors: **Customers**, **Restaurants**, and **Delivery Drivers**.

---

## 1. High-Level Architecture

\`\`\`
[ Customer App ] ──► [ API Gateway ] ──► [ Order Service ] ──► [ Restaurant Gateway (Kitchen Display) ]
                                                │
                                                ▼
                                    [ Dispatch & Matching Engine ]
                                                │
                 ┌──────────────────────────────┴──────────────────────────────┐
                 ▼                                                             ▼
       [ Geospatial Index (Redis H3) ]                               [ WebSockets Location Service ]
      (Stores active driver GPS coordinates)                        (Continuous real-time courier tracking)
\`\`\`

---

## 2. Geospatial Indexing & Driver Matching
1. **Hexagonal Hierarchical Spatial Indexing (Uber H3 / S2 Geometry):** Earth is partitioned into hexagonal cells.
2. Drivers stream GPS coordinates every 4 seconds via WebSockets.
3. When an order is ready for pickup, the Dispatch Service queries the restaurant's H3 cell and radius $k=1,2$ rings to locate and dispatch the nearest available driver using bipartite matching algorithms.
`
  },
  {
    slug: 'design-a-file-upload-service',
    title: 'System Design: Scalable File & Video Upload Service',
    category: 'System Architectures',
    description: 'S3 Presigned URLs, multipart chunked uploads, resumable uploads, metadata extraction, and CDN distribution.',
    content: `---
title: "System Design: Scalable File & Video Upload Service"
category: "System Architectures"
description: "S3 Presigned URLs, multipart chunked uploads, resumable uploads, metadata extraction, and CDN distribution."
---

# System Design: Scalable File Upload Service

Designing a high-throughput file upload service capable of handling multi-gigabyte video uploads without saturating application server bandwidth.

---

## 1. Direct-to-Storage Upload Architecture (Presigned URLs)

\`\`\`
Client (Browser / Mobile)                 API Gateway / Service                     Amazon S3 Bucket
        │                                           │                                       │
        ├── 1. POST /files/upload-request ─────────►│                                       │
        │   (filename, size, MIME type)             ├── 2. Generate S3 Presigned URL        │
        │◄── 3. Return Presigned URL (Expires 15m) ─┤                                       │
        │                                                                                   │
        ├── 4. PUT File Binary Directly to S3 Presigned URL ───────────────────────────────►│
        │                                                                                   │
        │                                                                                   ├── 5. S3 Event Notification
        │                                                                                   │   (s3:ObjectCreated:*)
        │                                                                                   ▼
        │                                                                           [ Kafka / SQS Queue ]
        │                                                                                   │
        │                                                                                   ▼
        │                                                                           [ Transcoder Worker Pool ]
        │                                                                           (FFmpeg thumbnail & HLS)
\`\`\`

---

## 2. Multipart Chunked & Resumable Uploads
- Large files ($>100\\text{MB}$) are split into 5MB chunks on client.
- Chunks upload in parallel. If network disconnects, only failed chunks retry instead of restarting the entire upload.
`
  },
  {
    slug: 'design-an-authentication-system',
    title: 'System Design: Distributed Authentication & Identity Provider (IdP)',
    category: 'System Architectures',
    description: 'Single Sign-On (SSO), OpenID Connect (OIDC), JWT issuance, refresh token rotation, MFA, and brute-force protection.',
    content: `---
title: "System Design: Distributed Authentication & Identity Provider (IdP)"
category: "System Architectures"
description: "Single Sign-On (SSO), OpenID Connect (OIDC), JWT issuance, refresh token rotation, MFA, and brute-force protection."
---

# System Design: Distributed Identity Provider (IdP)

Designing an enterprise-grade Authentication & Single Sign-On (SSO) service handling millions of users across web and mobile clients.

---

## 1. High-Level Architecture

\`\`\`
[ Client Applications ] ──► [ Auth API Gateway ]
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        ▼                           ▼                           ▼
[ Rate Limiter / WAF ]    [ OIDC / OAuth2 Engine ]    [ MFA Service (TOTP / SMS) ]
 (Brute-force protection) (JWT Signer / JWKS endpoint)          │
        │                           │                           ▼
        ▼                           ▼                  [ Redis Session Store ]
[ User Database (Postgres) ] [ KMS Private Key Store ] (Refresh token blacklist)
\`\`\`

---

## 2. Key Security Features
1. **JSON Web Key Sets (JWKS):** Public keys hosted at \`/.well-known/jwks.json\` allow resource servers to verify JWT signatures asynchronously without network roundtrips to the Auth DB.
2. **Refresh Token Rotation (RTR):** Every time a refresh token is used, it is invalidated and replaced with a new token. If a stolen refresh token is reused, all tokens for that user session are automatically revoked.
`
  }
];

cleanAndWrite('system-design', systemDesignArticles);

console.log('Successfully consolidated all content into high-depth master articles.');
