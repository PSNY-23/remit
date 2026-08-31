---
title: "Next.js 4-Layer Caching Architecture"
category: "Next.js"
description: "Request memoization, Data Cache, Full Route Cache, Router Cache."
---

# Next.js 4-Layer Caching Architecture


1. **Request Memoization:** Deduplicates identical `fetch` requests within single render pass.
2. **Data Cache:** Persists across user sessions (`revalidate`).
3. **Full Route Cache:** Caches HTML & RSC payload for static pages.
4. **Router Cache:** Client in-memory RSC cache during navigation.

