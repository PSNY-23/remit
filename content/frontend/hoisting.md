---
title: "Hoisting"
category: "JavaScript"
description: "How V8 allocates memory for declarations during compilation."
---

# Hoisting


Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during the compilation/creation phase.

### Key Rules
- **Function Declarations:** Fully hoisted with their body. Can be invoked before definition.
- **Function Expressions / Arrow Functions:** Only the variable declaration is hoisted, not the function assignment.
- **`var`:** Hoisted and initialized to `undefined`.
- **`let` and `const`:** Hoisted into the Temporal Dead Zone (uninitialized).

