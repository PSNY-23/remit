---
title: "var vs let vs const"
category: "JavaScript"
description: "Differences in scope, hoisting, re-declaration, and the temporal dead zone."
---

# var vs let vs const


### Comparison Matrix

| Property | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function-scoped | Block-scoped (`{ ... }`) | Block-scoped (`{ ... }`) |
| **Hoisting** | Hoisted and initialized with `undefined` | Hoisted in Temporal Dead Zone (TDZ) | Hoisted in Temporal Dead Zone (TDZ) |
| **Re-declaration** | Allowed in the same scope | SyntaxError | SyntaxError |
| **Re-assignment** | Allowed | Allowed | TypeError (binding is immutable) |
| **Global Object** | Creates property on `window` | Does not attach to `window` | Does not attach to `window` |

### The Temporal Dead Zone (TDZ)
TDZ is the phase between entering scope and the declaration execution where accessing the variable throws `ReferenceError`.

```javascript
console.log(a); // undefined
console.log(b); // ReferenceError: Cannot access 'b' before initialization

var a = 1;
let b = 2;
```

