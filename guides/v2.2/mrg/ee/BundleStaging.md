---
layout: default
group: mrg
subgroup: Enterprise Edition
title: Module Reference Guide
menu_title: BundleStaging
menu_order: 2
version: 2.2


github_link: mrg/ee/BundleStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_BundleStaging module

## Overview

The Magento_BundleStaging module is a part of the staging functionality in Magento EE. This new functionality enables you to stage a bundle product in the Schedule Update form of the product.

## Implementation details

The Magento_BundleStaging module extends the functionality of the Magento_Bundle module. When you schedule an update for a bundle product, all bundle item options for that concrete product are available and can be edited. All the bundle product attributes can be staged.

### Installation details

The Magento_BundleStaging module makes irreversible changes in the database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_BundleStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_BundleStaging module. You can interact with the Magento_BundleStaging module using the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_BundleStaging module.

### UI components

You can extend Bundle updates product listing using  the grid UI component located in the `Magento/BundleStaging/view/adminhtml/ui_component/bundle_update_product_listing.xml`. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.2/ui-components/ui-listing-grid.html).

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
