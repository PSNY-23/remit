---
title: "React Portals (createPortal)"
category: "React"
description: "Rendering overlays, modals, and tooltips outside parent DOM trees."
---

# React Portals (createPortal)

`createPortal(children, domNode)` renders elements into a separate DOM container outside the root hierarchy while preserving React event bubbling.

```tsx
import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-overlay">{children}</div>,
    document.body
  );
}
```
