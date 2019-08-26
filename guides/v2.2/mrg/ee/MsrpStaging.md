---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_MsrpStaging module
menu_title: MsrpStaging
menu_order: 2
ee_only: true
---

The Magento_MsrpStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It enables you to stage the manufacturer's suggested retail price.

## Implementation details

The Magento_MsrpStaging module extends the Magento_Msrp module to be used in staging. It adds the following fields in the Advice Pricing form:

- Manufacturer's Suggested Retail Price
- Display Actual Price

## Dependencies

You can find the list of modules that have dependencies on the Magento_MsrpStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_MsrpStaging module.

## Additional information

For more Magento 2 developer documentation, see [Magento 2 Developer Documentation]({{ site.baseurl }}/). Also, there you can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
