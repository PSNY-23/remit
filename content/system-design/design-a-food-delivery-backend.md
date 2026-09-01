---
title: "System Design: Real-Time Food Delivery Backend (UberEats / DoorDash)"
category: "System Architectures"
description: "Geospatial indexing with Uber H3 / Quadtrees, real-time driver tracking, matching algorithms, and order state machines."
---

# System Design: Real-Time Food Delivery Platform

Designing a real-time food delivery backend handling three concurrent actors: **Customers**, **Restaurants**, and **Delivery Drivers**.

---

## 1. High-Level Architecture

```
[ Customer App ] ──► [ API Gateway ] ──► [ Order Service ] ──► [ Restaurant Gateway (Kitchen Display) ]
                                                │
                                                ▼
                                    [ Dispatch & Matching Engine ]
                                                │
                 ┌──────────────────────────────┴──────────────────────────────┐
                 ▼                                                             ▼
       [ Geospatial Index (Redis H3) ]                               [ WebSockets Location Service ]
      (Stores active driver GPS coordinates)                        (Continuous real-time courier tracking)
```

---

## 2. Geospatial Indexing & Driver Matching
1. **Hexagonal Hierarchical Spatial Indexing (Uber H3 / S2 Geometry):** Earth is partitioned into hexagonal cells.
2. Drivers stream GPS coordinates every 4 seconds via WebSockets.
3. When an order is ready for pickup, the Dispatch Service queries the restaurant's H3 cell and radius $k=1,2$ rings to locate and dispatch the nearest available driver using bipartite matching algorithms.
