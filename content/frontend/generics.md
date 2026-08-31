---
title: "TypeScript Generics"
category: "TypeScript"
description: "Creating flexible, reusable type parameters and generic constraints."
---

# TypeScript Generics

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserListResponse = ApiResponse<User[]>;
```
