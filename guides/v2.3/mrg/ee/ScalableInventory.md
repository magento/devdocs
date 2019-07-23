---
title: Magento_ScalableInventory module
ee_only: true
---

{% include mrg/note.md %}

Magento\ScalableInventory module provides ability for system extension (CatalogInventory can be configured to work with separate quantity storage).
Extraction of quantity updates to separate storage will guarantee better scalability for Magento,
and will allow main server to be optimised for read operations which will reduce latency.

