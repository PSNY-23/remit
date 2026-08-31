---
title: "Cookies vs localStorage vs sessionStorage"
category: "Browser & Web"
description: "Capacity, security, expiration, and use cases."
---

# Cookies vs localStorage vs sessionStorage

| Storage | Capacity | Lifetime | Security |
| :--- | :--- | :--- | :--- |
| **Cookies** | 4 KB | Set by expiration | Can be protected with `HttpOnly`, `Secure`, `SameSite` |
| **localStorage** | 5-10 MB | Persistent until cleared | Vulnerable to XSS |
| **sessionStorage** | 5 MB | Cleared on tab close | Vulnerable to XSS |
| **IndexedDB** | >500 MB | Persistent | Client database for offline storage |
