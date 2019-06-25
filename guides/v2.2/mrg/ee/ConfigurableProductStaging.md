---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_ConfigurableProductStaging module
menu_title: ConfigurableProductStaging
menu_order: 2
ee_only: true
---

The Magento_ConfigurableProductStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add the [Configurable Product](https://glossary.magento.com/configurable-product) updates to the existing store campaigns. In other words, you can change the Configurable Product attributes in campaigns. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_ConfigurableProductStaging module adds the "Configurations" tab and the configuration wizard to the Schedule Update form of a product.

### Installation details

The Magento_ConfigurableProductStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_ConfigurableProductStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_ConfigurableProductStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_ConfigurableProductStaging module.

### UI components

You can extend product and [category](https://glossary.magento.com/category) updates using the UI components located in the `Magento\ConfigurableProductStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component]({{ site.baseurl }}/guides/v2.2/ui_comp_guide/components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\ConfigurableProductStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation]({{ site.baseurl }}/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
