---
title: Magento_CatalogInventoryStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_CatalogInventoryStaging module

## Overview

The Magento_CatalogInventoryStaging module is a part of the staging functionality in Magento EE. It extends the Magento_CatalogInventory module functionality, adding the capability to monitor the "Stock Status" field on the Schedule Update form of a product. 

## Implementation details

The Magento_CatalogInventoryStaging module adds the disabled "Stock Status" field on the Schedule Update form of a product during form rendering.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogInventoryStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

You can interact with the Magento_CatalogInventoryStaging module using the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CatalogInventoryStaging module.

## Additional information

You can track [backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/).
