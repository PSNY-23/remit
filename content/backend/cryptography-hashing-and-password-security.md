---
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
| **Input / Output** | Variable length $\rightarrow$ Fixed length hash digest | Plaintext $\rightarrow$ Ciphertext (Variable length) |
| **Key Requirement** | No keys required (except HMAC) | Requires Symmetric (AES) or Asymmetric (RSA/ECC) keys |
| **Primary Goal** | Password verification, data integrity (checksums) | Data confidentiality in transit (TLS) and at rest |
| **Standard Ciphers** | **Argon2id**, **bcrypt**, **PBKDF2**, SHA-256 | **AES-256-GCM**, ChaCha20-Poly1305, RSA-4096 |

---

## 2. Secure Password Storage: Why MD5 / SHA-256 Fail

Fast hash algorithms (MD5, SHA-256) compute billions of operations per second on commodity GPUs, rendering passwords vulnerable to dictionary and brute-force cracking.

$$\text{Password Hash} = \text{SlowKDF}(\text{Password} + \text{Cryptographic Salt}, \text{Work Factor / Memory Cost})$$

- **Unique Salt:** A 16+ byte random string generated per user prevents **Rainbow Table attacks** and ensures two users with identical passwords produce completely different hashes.
- **Memory-Hard KDFs (Argon2id):** Consumes configurable RAM (e.g. 64MB) per hash calculation, neutralizing GPU and custom ASIC cracking farms.

```typescript
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12; // 2^12 iterations (approx 250ms computation time)

export async function hashPassword(plainText: string): Promise<string> {
  return await bcrypt.hash(plainText, SALT_ROUNDS);
}

export async function verifyPassword(plainText: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(plainText, hash);
}
```

---

## 3. Secrets & API Credential Management

1. **Never Commit Secrets to Git:** Use pre-commit scanning hooks (`TruffleHog`, `git-secrets`).
2. **Environment Variables:** Inject secrets at container runtime (12-Factor App Principle III).
3. **Dedicated Vaults (AWS Secrets Manager / HashiCorp Vault):** Store production database credentials, enable automatic 30-day credential rotation, and restrict access using IAM roles.
