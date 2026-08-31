---
title: "Next.js Server Actions"
category: "Next.js"
description: "Mutations with \"use server\", progressive enhancement, and cache revalidation."
---

# Next.js Server Actions

```typescript
'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export async function addComment(formData: FormData) {
  const text = formData.get('comment') as string;
  await db.comment.create({ data: { text } });
  revalidatePath('/posts');
}
```
