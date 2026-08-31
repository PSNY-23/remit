---
title: "Shallow vs Deep Copy"
category: "JavaScript"
description: "Object cloning methods, structuredClone, and handling circular references."
---

# Shallow vs Deep Copy


- **Shallow Copy:** Copies top-level values; nested references are shared (`Object.assign({}, obj)`, `{ ...obj }`).
- **Deep Copy:** Recursively duplicates all nested values (`structuredClone(obj)` or custom recursive cloning).

