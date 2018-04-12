---
layout: default
group: mrg
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_CatalogImportExportStaging module
menu_title: CatalogImportExportStaging
menu_order: 2
version: 2.2
ee_only: true
github_link: mrg/ee/CatalogImportExportStaging.md
---

The Magento_CatalogImportExportStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It extends the Magento_CatalogImportExport module functionality to be used in staging mode.

## Implementation details

The Magento_CatalogImportExportStaging module:

 * adds a plugin on `Magento\CatalogImportExport\Model\Import\Product::saveProductEntity` to add version and sequence information to the product {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %}
 * listens to the `catalog_product_import_bunch_delete_commit_before` {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} to delete values from the sequence table when products are being deleted

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogImportExportStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

The Magento_CatalogImportExportStaging module does not provide any specific {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} points. You can extend it using the Magento extension mechanism.

For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/plugins.html) and [Magento dependency injection](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
