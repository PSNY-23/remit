---
title: "The this Keyword"
category: "JavaScript"
description: "Implicit, explicit, new, and lexical binding rules."
---

# The this Keyword


In JavaScript, `this` is evaluated at call time based on invocation context:

1. **Implicit Binding:** `obj.fn()` -> `this` is `obj`.
2. **Explicit Binding:** `fn.call(ctx)`, `fn.apply(ctx)`, `fn.bind(ctx)`.
3. **`new` Binding:** `new Fn()` -> `this` is the newly created object.
4. **Default Binding:** `fn()` -> `window` (or `undefined` in strict mode).
5. **Arrow Functions:** Inherit `this` lexically from outer enclosing scope.

