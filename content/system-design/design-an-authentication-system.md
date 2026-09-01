---
title: "System Design: Distributed Authentication & Identity Provider (IdP)"
category: "System Architectures"
description: "Single Sign-On (SSO), OpenID Connect (OIDC), JWT issuance, refresh token rotation, MFA, and brute-force protection."
---

# System Design: Distributed Identity Provider (IdP)

Designing an enterprise-grade Authentication & Single Sign-On (SSO) service handling millions of users across web and mobile clients.

---

## 1. High-Level Architecture

```
[ Client Applications ] ──► [ Auth API Gateway ]
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        ▼                           ▼                           ▼
[ Rate Limiter / WAF ]    [ OIDC / OAuth2 Engine ]    [ MFA Service (TOTP / SMS) ]
 (Brute-force protection) (JWT Signer / JWKS endpoint)          │
        │                           │                           ▼
        ▼                           ▼                  [ Redis Session Store ]
[ User Database (Postgres) ] [ KMS Private Key Store ] (Refresh token blacklist)
```

---

## 2. Key Security Features
1. **JSON Web Key Sets (JWKS):** Public keys hosted at `/.well-known/jwks.json` allow resource servers to verify JWT signatures asynchronously without network roundtrips to the Auth DB.
2. **Refresh Token Rotation (RTR):** Every time a refresh token is used, it is invalidated and replaced with a new token. If a stolen refresh token is reused, all tokens for that user session are automatically revoked.
