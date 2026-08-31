---
title: "CSS Custom Properties (Variables)"
category: "HTML & CSS"
description: "Runtime dynamic theming, cascading inheritance, and JavaScript interoperability."
---

# CSS Custom Properties (Variables)

```css
:root {
  --primary-color: #ea580c;
  --card-bg: #ffffff;
}

.dark {
  --primary-color: #f97316;
  --card-bg: #1f2937;
}

.card {
  background-color: var(--card-bg);
  color: var(--primary-color);
}
```
