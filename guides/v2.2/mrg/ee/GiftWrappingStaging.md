---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_GiftWrappingStaging module
menu_title: GiftWrappingStaging
menu_order: 2
ee_only: true
---

The Magento_GiftWrappingStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It allows to stage value of 'Allow Gift Wrapping' flag and price of the wrapping for each product update.

## Implementation details

The Magento_GiftWrappingStaging module adds to the Schedule Update form of a product the following functionality:

- Enable/disable gift wrapping ("Allow Gift Wrapping" field)
- Set a price for the gift wrapping ("Price for Gift Wrapping" field).

## Dependencies

You can find the list of modules that have dependencies on the Magento_GiftWrappingStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GiftWrappingStaging module.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
