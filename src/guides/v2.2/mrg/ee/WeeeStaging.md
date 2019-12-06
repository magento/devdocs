---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_WeeeStaging module
menu_title: WeeeStaging
menu_order: 2
ee_only: true
---

The Magento_WeeeStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It enables you to stage a value of Fixed Product Tax.

## Implementation details

The Magento_WeeeStaging module extends the Magento_Weee module functionality to be used in staging. It adds an opportunity to schedule a Fixed Product Tax type attribute using the Schedule Update form of a product.

## Dependencies

You can find the list of modules that have dependencies on the Magento_WeeeStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_WeeeStaging module. [The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the module.

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_WeeeStaging module

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
