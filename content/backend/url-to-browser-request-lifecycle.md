---
title: "What Happens When You Enter a URL in a Browser?"
category: "Fundamentals"
description: "Complete lifecycle from keystroke, DNS hierarchy, TCP handshake, TLS 1.3 negotiation, reverse proxies, to DOM rendering."
---

# The Complete URL Navigation & Network Lifecycle

When a user types a URL such as `https://api.example.com/users` into a modern browser and presses **Enter**, a complex sequence of networking protocols, cryptographic handshakes, operating system routines, and backend distributed systems execute within milliseconds.

---

## 1. Architectural Sequence Diagram

```
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
```

---

## 2. Deep Dive Into Each Phase

### Phase 1: URL Parsing & HSTS Preload
1. **Parsing:** The browser decomposes `https://api.example.com:443/users?sort=desc#profile` into:
   - **Protocol:** `https` (Port 443 default)
   - **Hostname:** `api.example.com`
   - **Path:** `/users`
   - **Query string:** `?sort=desc`
   - **Fragment:** `#profile` (handled strictly on client side)
2. **HSTS Preload List:** The browser checks its hardcoded **HTTP Strict Transport Security (HSTS)** list. If matched, it upgrades any `http://` request to `https://` internally before sending a single network packet, preventing SSL-stripping man-in-the-middle attacks.

---

### Phase 2: DNS Resolution (Domain Name System)
Before opening a TCP connection, the domain name must resolve to an IPv4 (`A` record) or IPv6 (`AAAA` record) IP address.

1. **Browser Cache:** Chrome/Firefox inspects its local in-memory DNS cache (viewable at `chrome://net-internals/#dns`).
2. **OS Resolver Cache:** Queries OS network cache (via `getaddrinfo` / `/etc/hosts`).
3. **Recursive DNS Resolver (e.g. ISP or 1.1.1.1):** If missed locally, the resolver performs iterative queries:
   - Queries **Root Nameservers (`.`)** ➔ Returns **TLD Nameservers (`.com`)**.
   - Queries **TLD Nameservers (`.com`)** ➔ Returns **Authoritative Nameservers** for `example.com` (e.g., Cloudflare DNS).
   - Queries **Authoritative Nameserver** ➔ Returns `A 104.21.42.99` with a **TTL (Time To Live)**.

---

### Phase 3: TCP Connection (3-Way Handshake)
Once the client has the destination IP, it opens a TCP socket connection across port 443:

```
Client                                          Server
  │                                               │
  ├── 1. SYN (seq = x) ──────────────────────────►│  (Client requests connection with ISN x)
  │                                               │
  │◄── 2. SYN-ACK (seq = y, ack = x + 1) ─────────┤  (Server acknowledges and sends ISN y)
  │                                               │
  ├── 3. ACK (seq = x + 1, ack = y + 1) ─────────►│  (Connection Established - Ready for data)
```

---

### Phase 4: TLS 1.3 Cryptographic Handshake
TLS 1.3 reduces the handshake overhead to **1 Round Trip Time (1-RTT)** (and supports 0-RTT resumption):

1. **ClientHello:** Sends supported cipher suites and public Diffie-Hellman **KeyShare**.
2. **ServerHello:** Server selects cipher suite (e.g., `TLS_AES_256_GCM_SHA384`), sends its public KeyShare, and presents its **X.509 SSL/TLS Certificate**.
3. **Verification & Symmetric Session Key:** Client verifies the certificate against built-in Root Certificate Authorities (CAs). Both parties compute the shared symmetric session key. All subsequent traffic is encrypted via AES-GCM or ChaCha20.

---

### Phase 5: Server-Side Request Execution
1. **Anycast Routing & Edge CDN:** The packet reaches the nearest edge Point of Presence (PoP). If cached, the CDN responds immediately.
2. **Load Balancer (Nginx / AWS ALB):** Terminates TLS, enforces DDoS rate limiting, and forwards the raw HTTP request to an internal application pod.
3. **Application Pipeline:**
   - **Middleware Chain:** Logging, CORS verification, JWT authentication token decoding, request body validation.
   - **Service & Cache Tier:** Queries Redis cache for hot data (`Cache-Aside`).
   - **Database Query:** On cache miss, queries primary PostgreSQL database via indexed lookup.
4. **Serialization & Streaming:** Converts database entity into JSON/HTML, compresses payload with Gzip/Brotli, and sends response with status `200 OK` and `Content-Type: application/json`.

---

## 3. Interview Summary & Follow-Up Checklist
- **DNS Optimizations:** EDNS Client Subnet (ECS), DNS-over-HTTPS (DoH), low TTL vs high TTL tradeoffs.
- **Transport Enhancements:** HTTP/2 multiplexing over single TCP connection; HTTP/3 (QUIC) eliminating head-of-line blocking using UDP.
