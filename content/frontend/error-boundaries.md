---
title: "Error Boundaries in React"
category: "React"
description: "Catching runtime errors in child trees and rendering fallback UIs."
---

# Error Boundaries in React

Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

```tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```
