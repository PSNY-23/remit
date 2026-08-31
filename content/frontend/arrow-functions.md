---
title: "Arrow Functions vs Regular Functions"
category: "JavaScript"
description: "Differences in this binding, arguments object, constructors, and syntax."
---

# Arrow Functions vs Regular Functions


### Key Differences

| Feature | Regular Function | Arrow Function |
| :--- | :--- | :--- |
| **`this`** | Dynamic (bound at call time) | Lexical (inherited from definition scope) |
| **`arguments`** | Has local `arguments` object | No `arguments` object (use rest `...args`) |
| **Constructor (`new`)** | Can be called with `new` | Cannot be called with `new` (TypeError) |
| **Prototype** | Has `prototype` property | No `prototype` property |

