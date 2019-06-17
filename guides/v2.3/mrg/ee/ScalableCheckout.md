---
title: Magento_ScalableCheckout module
ee_only: true
---

{% include mrg/note.md %}

Magento\ScalableCheckout module provides ability for system extension (Checkout can be configured to work with separate DataBase).
Extraction of Checkout tables to separate database will guarantee better scalability for Magento,
and will allow main server to be optimized for read operations which will reduce latency.
