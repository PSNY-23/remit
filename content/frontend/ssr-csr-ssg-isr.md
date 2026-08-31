---
title: "SSR vs CSR vs SSG vs ISR"
category: "Next.js"
description: "Complete rendering paradigms comparison in modern web frameworks."
---

# SSR vs CSR vs SSG vs ISR

| Mode | Generation Time | SEO | TTFB | Dynamic Data |
| :--- | :--- | :--- | :--- | :--- |
| **CSR** | Browser | Poor | Instant static shell, slow content | Real-time |
| **SSG** | Build time | Excellent | Ultra-fast (CDN) | Stale until rebuild |
| **ISR** | Build time + Background revalidation | Excellent | Ultra-fast (CDN) | Automatically updated |
| **SSR** | Request time | Excellent | Slower (Server compute) | Real-time |
