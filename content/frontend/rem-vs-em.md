---
title: "rem vs em vs Viewport Units"
category: "HTML & CSS"
description: "Typography scaling, root scaling, and accessibility implications."
---

# rem vs em vs Viewport Units

- **`rem` (Root EM):** Computed relative to the root font-size (`<html>`, defaults to `16px`). Changing user browser font settings scales all `rem` units predictably.
- **`em`:** Computed relative to the font-size of the current element (or parent). Great for button padding that scales with font size.
- **`vw / vh / dvh / svh`:** Viewport percentages. `dvh` dynamically adjusts to mobile address bar state.
