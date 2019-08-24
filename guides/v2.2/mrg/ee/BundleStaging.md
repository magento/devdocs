---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_BundleStaging module
menu_title: BundleStaging
menu_order: 2
ee_only: true
---

The Magento_BundleStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. This new functionality enables you to stage a [bundle product](https://glossary.magento.com/bundle-product) in the Schedule Update form of the product.

## Implementation details

The Magento_BundleStaging module extends the functionality of the Magento_Bundle module. When you schedule an update for a bundle product, all bundle item options for that concrete product are available and can be edited. All the bundle product attributes can be staged.

### Installation details

The Magento_BundleStaging module makes irreversible changes in the database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_BundleStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_BundleStaging module. You can interact with the Magento_BundleStaging module using the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_BundleStaging module.

### UI components

You can extend Bundle updates product listing using  the grid [UI component](https://glossary.magento.com/ui-component) located in the `Magento/BundleStaging/view/adminhtml/ui_component/bundle_update_product_listing.xml`. For more information, see [UI Listing/Grid Component]({{ site.baseurl }}/guides/v2.2/ui_comp_guide/components/ui-listing-grid.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
