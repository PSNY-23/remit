---
title: "Controlled vs Uncontrolled Components"
category: "React"
description: "Form input state management, single source of truth vs DOM refs."
---

# Controlled vs Uncontrolled Components

- **Controlled Component:** Input value is driven entirely by React state (`value={val}`, `onChange={e => setVal(e.target.value)}`). Single source of truth.
- **Uncontrolled Component:** Input value is handled by the DOM itself. Access value on submit via `useRef()` or `FormData`.
