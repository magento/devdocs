---
layout: default
group: mrg
subgroup: Enterprise Edition
title: Module Reference Guide
menu_title: CatalogInventoryStaging
menu_order: 2
version: 2.1
level3_menu_node: level3child
level3_subgroup: ee_modules
github_link: mrg/ee/CatalogInventoryStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_CatalogInventoryStaging module

## Overview

The Magento_CatalogInventoryStaging module is a part of the staging functionality in Magento EE. It extends the Magento_CatalogInventory module functionality, adding the capability to monitor the "Stock Status" field on the Schedule Update form of a product.

## Implementation details

The Magento_CatalogInventoryStaging module adds the disabled "Stock Status" field on the Schedule Update form of a product during form rendering.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogInventoryStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

You can interact with the Magento_CatalogInventoryStaging module using the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/mrg/plugins.html).

[The The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/mrg/depend-inj.html) enables you to override the functionality of the Magento_CatalogInventoryStaging module.

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
