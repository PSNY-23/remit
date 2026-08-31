---
title: "useMemo, useCallback & React.memo"
category: "React"
description: "Avoiding redundant calculations and preserving referential equality."
---

# useMemo, useCallback & React.memo


- **`React.memo(Component)`**: Skips child re-render if props haven't shallowly changed.
- **`useMemo(() => value, [deps])`**: Caches expensive computed values.
- **`useCallback(fn, [deps])`**: Caches function references passed to memoized children.

