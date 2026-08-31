---
title: "Event Delegation & Bubbling"
category: "JavaScript"
description: "Capturing, bubbling, and managing dynamic lists with a single listener."
---

# Event Delegation & Bubbling


Event delegation takes advantage of **event bubbling** to listen for events at a parent level rather than binding listeners to every individual child node.

```javascript
document.querySelector('#todo-list').addEventListener('click', (e) => {
  const btn = e.target.closest('.delete-btn');
  if (btn) {
    deleteItem(btn.dataset.id);
  }
});
```

