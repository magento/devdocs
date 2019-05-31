---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_CatalogUrlRewriteStaging module
menu_title: CatalogUrlRewriteStaging
menu_order: 2
ee_only: true
---

The Magento_CatalogUrlRewriteStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It extends the Magento_CatalogUrlRewrite module.

## Implementation details

The Magento_CatalogUrlRewriteStaging module disables an opportunity to change the [URL](https://glossary.magento.com/url) for a product or category, when you schedule an update. It is a technical module that doesn't have any public calls to intercept.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogUrlRewriteStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extensions points for the Magento_CatalogUrlRewriteStaging module are not available.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
