---
title: "Hand-Coded: EventEmitter"
category: "Coding Challenges"
description: "Custom observer pattern with on, off, emit, once."
---

# Hand-Coded: EventEmitter

```javascript
class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  on(event, fn) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event).push(fn);
    return () => this.off(event, fn);
  }
  off(event, fn) {
    if (!this.events.has(event)) return;
    this.events.set(event, this.events.get(event).filter(l => l !== fn));
  }
  emit(event, ...args) {
    if (!this.events.has(event)) return false;
    this.events.get(event).forEach(fn => fn.apply(this, args));
    return true;
  }
  once(event, fn) {
    const wrapper = (...args) => {
      this.off(event, wrapper);
      fn.apply(this, args);
    };
    return this.on(event, wrapper);
  }
}
```
