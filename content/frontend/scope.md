---
title: "Scope in JavaScript"
category: "JavaScript"
description: "Global, function, block, and lexical scope hierarchies."
---

# Scope in JavaScript


Scope determines the accessibility (visibility) of variables in different parts of code.

### Types of Scope
1. **Global Scope:** Variables declared outside any function or block are accessible anywhere.
2. **Function Scope:** Variables declared with `var` inside a function are only accessible within that function.
3. **Block Scope:** Variables declared with `let` and `const` inside `{ ... }` blocks (if-statements, loops) are restricted to that block.
4. **Lexical (Static) Scope:** Functions resolve variables based on where they were *defined*, not where they are *invoked*.

