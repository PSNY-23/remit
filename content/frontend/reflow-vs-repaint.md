---
title: "Reflow vs Repaint"
category: "HTML & CSS"
description: "Browser layout recalculations and GPU compositing."
---

# Reflow vs Repaint


- **Reflow (Layout):** Recalculating geometry/dimensions (`width`, `height`, `fontSize`, `offsetTop`). Expensive!
- **Repaint:** Redrawing visual styles without geometric change (`color`, `background`).
- **Compositing:** GPU-accelerated layer transforms (`transform`, `opacity`). Zero reflow/repaint.

