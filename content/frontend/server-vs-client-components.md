---
title: "Server vs Client Components (RSC)"
category: "Next.js"
description: "App Router default Server Components, \"use client\" boundaries, and streaming."
---

# Server vs Client Components (RSC)


- **Server Components (Default):** Render on server only. Zero client JS bundle. Direct access to database/backend.
- **Client Components (`'use client'`):** Hydrated on client for browser events (`onClick`), `useState`, `useEffect`.

