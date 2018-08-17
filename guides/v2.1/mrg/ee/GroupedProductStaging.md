---
group: mrg
title: Magento_GroupedProductStaging module
version: 2.1
ee_only: true
---

The Magento_GroupedProductStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It enables you to stage products assigned to {% glossarytooltip 47841e42-b8b3-4030-9eb1-286137065be2 %}grouped product{% endglossarytooltip %}.

## Implementation details

The Magento_GroupedProductStaging module extends functionality of the Magento_GroupedProduct to be used in staging. It adds Grouped Products field set to the Schedule Update form of a product.

## Dependencies

You can find the list of modules that have dependencies on the Magento_GroupedProductStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GroupedProductStaging module.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ site.baseurl }}/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
