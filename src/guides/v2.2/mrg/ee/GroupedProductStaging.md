---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_GroupedProductStaging module
menu_title: GroupedProductStaging
menu_order: 2
ee_only: true
---

The Magento_GroupedProductStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It enables you to stage products assigned to [grouped product](https://glossary.magento.com/grouped-product).

## Implementation details

The Magento_GroupedProductStaging module extends functionality of the Magento_GroupedProduct to be used in staging. It adds Grouped Products field set to the Schedule Update form of a product.

## Dependencies

You can find the list of modules that have dependencies on the Magento_GroupedProductStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GroupedProductStaging module.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
