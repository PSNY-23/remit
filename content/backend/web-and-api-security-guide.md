---
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
| **API1** | **BOLA (Broken Object Level Auth)** | Changing ID in URL (`/api/orders/992`) to view another user's private data. | Validate user ownership in database query (`WHERE id = :id AND user_id = :authUserId`). |
| **API2** | **Broken Authentication** | Weak password hashing, missing token expiration, credential stuffing. | Use Argon2id/bcrypt, short-lived JWTs, and rate-limited login endpoints. |
| **API3** | **Broken Object Property Auth** | Mass assignment: Passing `{ "isAdmin": true }` in `req.body` updates privileged fields. | Strict DTO whitelisting using schema validators (Zod/Joi). |
| **API4** | **Unrestricted Resource Consumption**| DoS via massive unbounded queries or unthrottled API loops. | Redis Token Bucket rate limiting; enforced maximum `LIMIT` on pagination. |
| **API5** | **Broken Function Level Auth** | Regular users invoking admin endpoints (`/api/admin/users`). | Role-Based Access Control (RBAC) middleware guards on all protected routes. |

---

## 2. SQL Injection (SQLi) & Defense

SQL injection occurs when untrusted input concatenates directly into raw SQL strings:

```typescript
// VULNERABLE: Direct string interpolation
const query = `SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;

// SECURE: Parameterized Prepared Statement
const query = 'SELECT id, email, role, password_hash FROM users WHERE email = $1';
const result = await pool.query(query, [req.body.email]);
```

---

## 3. Cross-Site Scripting (XSS)

XSS executes malicious JavaScript in a victim's browser session.
1. **Stored XSS:** Malicious script stored in database (e.g. comment field) and served to all readers.
2. **Reflected XSS:** Script injected via URL parameters and reflected in immediate server output.
3. **DOM XSS:** Vulnerable client JS APIs (`innerHTML`, `eval()`) parsing untrusted hashes.

### Defenses:
- **Contextual Output Encoding:** React JSX automatically escapes variables (`<div>{userInput}</div>`). Avoid `dangerouslySetInnerHTML`.
- **HttpOnly Cookies:** Prevents JavaScript (`document.cookie`) from accessing sensitive session tokens.
- **Content Security Policy (CSP):**
  ```http
  Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.trusted.com; object-src 'none';
  ```

---

## 4. Cross-Site Request Forgery (CSRF) & CORS

### CSRF Defense
- Set `SameSite=Lax` or `SameSite=Strict` on session cookies.
- Implement Anti-CSRF Synchronizer Tokens submitted via custom header (`X-CSRF-Token`) on mutating requests.

### CORS (Cross-Origin Resource Sharing)
- Enforces browser Same-Origin Policy (SOP).
- For non-simple requests, browser sends an automatic preflight `OPTIONS` request:
  ```http
  Access-Control-Allow-Origin: https://app.example.com
  Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
  Access-Control-Allow-Headers: Authorization, Content-Type
  Access-Control-Allow-Credentials: true
  ```
