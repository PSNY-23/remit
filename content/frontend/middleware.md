---
title: "Next.js Edge Middleware"
category: "Next.js"
description: "Running logic before request completion for auth, redirects, and headers."
---

# Next.js Edge Middleware

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}
```
