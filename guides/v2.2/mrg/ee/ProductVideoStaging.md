---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_ProductVideoStaging module
menu_title: ProductVideoStaging
menu_order: 2
ee_only: true
---

The Magento_ProductVideoStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add or remove a video to a product update.

## Implementation details

The Magento_ProductVideoStaging module extends the Magento_ProductVideo functionality to be used in staging. It adds an "Add Video" button to the Schedule Update form and supports a New Video form in staging mode.

## Dependencies

You can find the list of modules that have dependencies on the Magento_ProductVideoStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_ProductVideoStaging module. [The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_ProductVideoStaging module.

### Layouts

You can extend and override layouts in the `app/code/Magento/ProductVideoStaging/view/adminhtml/layout` directory.
For more information about layouts, see the [Layout documentation]({{ site.baseurl }}/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
