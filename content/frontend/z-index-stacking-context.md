---
title: "z-index & Stacking Context"
category: "HTML & CSS"
description: "Stacking order rules, criteria that create a new stacking context, and common gotchas."
---

# z-index & Stacking Context

`z-index` controls the 3D depth ordering of overlapping elements.

### Rules
- `z-index` only works on positioned elements (`relative`, `absolute`, `fixed`, `sticky`) or direct flex/grid children.
- A new **Stacking Context** is formed by:
  - Root element (`<html>`)
  - `position: fixed` or `position: sticky`
  - `position: relative` or `absolute` with `z-index` other than `auto`
  - `opacity` less than `1`
  - `transform`, `filter`, `perspective`, `clip-path`
  - `isolation: isolate`
