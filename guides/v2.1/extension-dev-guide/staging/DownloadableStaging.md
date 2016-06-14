---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: DownloadableStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/DownloadableStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_DownloadableStaging module

## Overview

The Magento_DownloadableStaging module is a part of the staging functionality in Magento EE. It enables you to add the Downloadable Product updates to the existing store campaigns. In other words, you can change the Downloadable Product attributes in campaigns. These updates are shown on the campaign dashboard.

## Implementation Details

The Magento_DownloadableStaging module changes the Downloadable Product creation page to make them compatible with the Magento Staging Framework. This module extends the Magento_Downloadable module functionality to be used in staging.

The Magento_DownloadableStaging module adds the "Downloadable information" tab to the Schedule Update form for a product.

### Installation Details

The Magento_DownloadableStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_DownloadableStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension Points

Extension points enable extension developers to interact with the Magento_DownloadableStaging module.
For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_DownloadableStaging module.

### UI components

You can extend product and category updates using the UI components located in the `Magento\DownloadableStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.1/ui-components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\DownloadableStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).