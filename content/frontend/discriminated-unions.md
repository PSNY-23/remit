---
title: "Discriminated Unions & Narrowing"
category: "TypeScript"
description: "Type guards, exhaustiveness checking with never."
---

# Discriminated Unions & Narrowing


```typescript
type ResponseState =
  | { status: 'loading' }
  | { status: 'success'; data: string[] }
  | { status: 'error'; error: Error };

function handle(state: ResponseState) {
  if (state.status === 'success') {
    console.log(state.data.length); // TypeScript narrows to success variant
  }
}
```

