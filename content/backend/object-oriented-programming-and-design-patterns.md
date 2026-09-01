---
title: "OOP Principles, Interfaces, Abstract Classes, and SOLID Design"
category: "Programming & Logic"
description: "The 4 OOP pillars (Encapsulation, Abstraction, Inheritance, Polymorphism), Interface vs Abstract class, and SOLID principles."
---

# OOP Principles, Interfaces & SOLID Architecture

Object-Oriented Programming and design patterns structure maintainable, scalable backend codebases.

---

## 1. The 4 Fundamental Pillars of OOP

1. **Encapsulation:** Bundles data and methods within a class while restricting direct external access using visibility modifiers (`private`, `protected`).
2. **Abstraction:** Exposes essential interfaces while hiding internal complex implementation details.
3. **Inheritance:** Enables child classes to inherit attributes and methods from a parent class for code reuse.
4. **Polymorphism:** Allows different concrete classes to be treated as instances of a shared interface or abstract base class.

---

## 2. Interface vs. Abstract Class

| Dimension | Interface | Abstract Class |
| :--- | :--- | :--- |
| **Implementation** | Pure contract (no method bodies) | Can contain both abstract methods and concrete implementations |
| **State / Variables** | Cannot store instance state | Can define instance fields, constructors, and default state |
| **Inheritance** | A class can implement **multiple** interfaces | A class can extend **only one** abstract class |
| **Runtime Overhead** | Zero (compiled away in TypeScript) | Class prototype inheritance hierarchy |
| **Core Concept** | Defines *"What an object can DO"* (Role / Capability) | Defines *"What an object IS"* (Shared identity / Base logic) |

---

## 3. The SOLID Principles in Backend Engineering

- **S - Single Responsibility Principle (SRP):** A class or module should have one, and only one, reason to change.
- **O - Open/Closed Principle (OCP):** Software entities should be open for extension, but closed for modification (use Strategy pattern / interfaces).
- **L - Liskov Substitution Principle (LSP):** Subtypes must be substitutable for their base types without altering program correctness.
- **I - Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use (prefer small, role-specific interfaces).
- **D - Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules; both should depend on abstractions (Dependency Injection).
