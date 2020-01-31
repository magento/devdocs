---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_SearchStaging module
menu_title: SearchStaging
menu_order: 2
ee_only: true
---

The Magento_SearchStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It disables searching in the staging preview mode.

## Implementation details

The Magento_SearchStaging module extends the Magento_Search module functionality. It adds Search to the staging preview but disables the searching functionality.

## Dependencies

You can find the list of modules that have dependencies on the Magento_SearchStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_SearchStaging module. [The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_SearchStaging module.

### Layouts

You can extend and override layouts in the `Magento/SearchStaging/view/frontend/layout/` directory.
For more information about layouts, see the [Layout documentation]({{ site.baseurl }}/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
