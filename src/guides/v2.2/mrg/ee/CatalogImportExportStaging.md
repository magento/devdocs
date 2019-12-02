---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_CatalogImportExportStaging module
menu_title: CatalogImportExportStaging
menu_order: 2
ee_only: true
---

The Magento_CatalogImportExportStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It extends the Magento_CatalogImportExport module functionality to be used in staging mode.

## Implementation details

The Magento_CatalogImportExportStaging module:

*  adds a plugin on `Magento\CatalogImportExport\Model\Import\Product::saveProductEntity` to add version and sequence information to the product [entity](https://glossary.magento.com/entity)
*  listens to the `catalog_product_import_bunch_delete_commit_before` [event](https://glossary.magento.com/event) to delete values from the sequence table when products are being deleted

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogImportExportStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

The Magento_CatalogImportExportStaging module does not provide any specific [extension](https://glossary.magento.com/extension) points. You can extend it using the Magento extension mechanism.

For more information about the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html) and [Magento dependency injection]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
