---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_RmaStaging module
menu_title: RmaStaging
menu_order: 2
ee_only: true
---

The Magento_RmaStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It enables you to create updates for the parameters of the Autosettings field set of a product.

RMA stands for a return merchandise [authorization](https://glossary.magento.com/authorization).

## Implementation details

The Magento_RmaStaging module extends the following Magento_Rma module functionality to be used in staging mode:

- Adds the Autosettings field set to the Schedule update form of a product.

## Dependencies

You can find the list of modules that have dependencies on the Magento_RmaStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_RmaStaging module. [The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_RmaStaging module.

## Additional information

For more Magento 2 developer documentation, see [Magento 2 Developer Documentation]({{ site.baseurl }}/). Also, there you can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
