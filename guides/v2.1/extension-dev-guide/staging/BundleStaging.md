---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: BundleStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/BundleStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

<h2>Magento_BundleStaging module</h2>

## Overview

The Magento_BundleStaging module is a part of the staging functionality in Magento EE. This new functionality enables you to stage a bundle product in the Schedule Update form of the product.

## Implementation Details

The Magento_BundleStaging module extends the functionality of the Magento_Bundle module. When you schedule an update for a bundle product, all bundle item options for that concrete product are available and can be edited. All the bundle product attributes can be staged.

### Installation Details

The Magento_BundleStaging module makes irreversible changes in a database during installation. It means, that you cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies with the Magento_BundleStaging module in the `require` object of the `composer.json` file. The file is located in the same directory as this `README` file.

## Extension Points

Extension points enable extension developers to interact with the Magento_BundleStaging module. You can interact with the Magento_BundleStaging module using the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_BundleStaging module.

### UI components

You can extend Bundle updates product listing using  the grid UI component located in the `Magento/BundleStaging/view/adminhtml/ui_component/bundle_update_product_listing.xml`. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.1/ui-components/ui-listing-grid.html).

## Additional information

For more Magento 2 developer documentation, see [Magento 2 Developer Documentation](http://devdocs.magento.com). Also, there you can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).