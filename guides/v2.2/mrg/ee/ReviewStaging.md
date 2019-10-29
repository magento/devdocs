---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_ReviewStaging module
menu_title: ReviewStaging
menu_order: 2
ee_only: true
---

The Magento_ReviewStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It displays the Product Reviews grid on the Schedule Update form.

## Implementation details

The Magento_ReviewStaging module extends the following Magento_Review module functionality to be used in staging mode:

-  Adds Product Reviews grid on the Schedule Update form.

NOTE You cannot create an update for a product review.

## Dependencies

You can find the list of modules that have dependencies on the Magento_ReviewStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_ReviewStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_ReviewStaging module.

### Layouts

You can extend and override layouts in the `Magento\ReviewStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation]({{ site.baseurl }}/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
