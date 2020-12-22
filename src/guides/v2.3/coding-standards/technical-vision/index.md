---
group: coding-standards
title: Magento technical vision
---

The Magento technical vision is a collection of documents that describe the desired state of the Magento platform.

Each individual technical vision document relates to a set of modules that are logically grouped together.
Individual documents typically describe a component's place in the system, its architecture, extension scenarios, and a list of invariants that must be preserved at all times during component refactoring or extension to ensure consistency.
It usually makes sense to group modules in a component if they together represent a large functional part of the application. For example, Shipping, Catalog, Payments.

Technical vision documents are targeting architects and developers to **guide** them in **making decisions** based on high-level picture of the system in its desired state.

In contrast,

*  **specifications** are documents that describe current implementation of the system. Though they are also targeting architects and developers, they help with initial investigation, but may be insufficient to make decisions that improve the system.
*  **Technical Guidelines** is a low-level document that provides specific recommendations for a developer in their every day work.
