---
group: mrg
title: Magento_CatalogInventoryStaging module
version: 2.1
ee_only: true
---

The Magento_CatalogInventoryStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It extends the Magento_CatalogInventory module functionality, adding the capability to monitor the "Stock Status" field on the Schedule Update form of a product.

## Implementation details

The Magento_CatalogInventoryStaging module adds the disabled "Stock Status" field on the Schedule Update form of a product during form rendering.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogInventoryStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

You can interact with the Magento_CatalogInventoryStaging module using the Magento {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.1/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CatalogInventoryStaging module.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ site.baseurl }}/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
