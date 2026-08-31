---
title: "display: none vs visibility: hidden"
category: "HTML & CSS"
description: "DOM layout space, accessibility tree inclusion, reflow vs repaint."
---

# display: none vs visibility: hidden

| Property | Layout Space | In Accessibility Tree? | Triggers |
| :--- | :--- | :--- | :--- |
| **`display: none`** | 0px (Removed from layout) | No (Screen readers ignore) | Reflow + Repaint |
| **`visibility: hidden`** | Retained in layout | No (Visual hidden) | Repaint only |
| **`opacity: 0`** | Retained in layout | Yes (Unless `aria-hidden="true"`) | Compositing only (GPU) |
