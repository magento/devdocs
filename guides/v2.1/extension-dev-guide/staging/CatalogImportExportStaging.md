---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: CatalogImportExportStaging
menu_order: 2
version: 2.1
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/CatalogImportExportStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_CatalogImportExportStaging module

## Overview

The Magento_CatalogImportExportStaging module is a part of the staging functionality in Magento EE. It extends the Magento_CatalogImportExport module functionality to be used in staging mode.

## Implementation details

The Magento_CatalogImportExportStaging module:

 * adds a plugin on `Magento\CatalogImportExport\Model\Import\Product::saveProductEntity` to add version and sequence information to the product entity
 * listens to the `catalog_product_import_bunch_delete_commit_before` event to delete values from the sequence table when products are being deleted

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogImportExportStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

The Magento_CatalogImportExportStaging module does not provide any specific extension points. You can extend it using the Magento extension mechanism.

For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.0/extension-dev-guide/plugins.html) and [Magento dependency injection](http://devdocs.magento.com/guides/v2.0/extension-dev-guide/depend-inj.html).

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
