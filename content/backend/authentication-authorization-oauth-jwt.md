---
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
| **Failure Code** | `401 Unauthorized` | `403 Forbidden` |

---

## 2. Stateful Sessions vs. Stateless JWT

| Dimension | Stateful Server Sessions | Stateless JSON Web Tokens (JWT) |
| :--- | :--- | :--- |
| **Storage Location** | Session record stored in Redis/DB | Token self-contains claims; stored in client memory/cookie |
| **Scalability** | Requires central Redis cluster across server nodes | Highly scalable; verified cryptographically by any node without DB hit |
| **Revocation** | Instantaneous (`DEL session:123`) | Hard (tokens remain valid until expiration unless blacklisted in Redis) |
| **Payload Size** | Tiny 32-byte UUID cookie | 500-1500 bytes sent on every HTTP request header |

---

## 3. The Dual-Token Production Architecture

```
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
```

---

## 4. OAuth 2.0 Authorization Code Grant with PKCE

For Single Page Applications (React) and Mobile apps, **PKCE (Proof Key for Code Exchange)** prevents authorization code interception attacks:

1. **Code Verifier & Code Challenge:** Client generates random string `verifier` and hashes it into `challenge = SHA256(verifier)`.
2. **Authorize Request:** Client redirects user to Auth Server with `code_challenge=...&code_challenge_method=S256`.
3. **User Authenticates:** User logs in and approves consent. Auth server redirects back with temporary `?code=auth_123`.
4. **Token Exchange:** Client sends `code=auth_123` + `code_verifier=...`. The Auth Server hashes the verifier to ensure it matches the original challenge before returning tokens.
