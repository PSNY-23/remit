---
title: "Virtual DOM & Reconciliation"
category: "React"
description: "Fiber diffing heuristics, render vs commit phase, and keys."
---

# Virtual DOM & Reconciliation


React creates a Virtual DOM tree in memory:
1. **Render Phase:** Computes UI updates by diffing Virtual DOM trees.
2. **Commit Phase:** Applies the minimal calculated diffs to the real DOM.
3. **Keys:** Give sibling elements persistent identity across renders so React moves existing DOM nodes instead of recreating them.

