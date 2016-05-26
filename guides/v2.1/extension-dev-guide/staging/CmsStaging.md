---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: CmsStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/CmsStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

<h2>Magento_CmsStaging module</h2>

## Overview

The Magento_CmsStaging module is a part of the staging functionality in Magento EE. It enables you to add the CMS Page and the CMS Block updates to the existing store campaigns. These updates are shown on the campaign dashboard.

## Implementation Details

The Magento_CmsStaging module changes the CMS Pages and CMS Blocks creation pages to make them compatible with the Magento Staging Framework. This module depends on the Magento_Cms module and extends its functionality. It changes database structure of the Magento_Cms module and the way in which CMS Pages/Blocks are managed.

### CMS Pages

You can stage the following parameters:

- Enable/Disable CMS Page
- Page Title
- Content 
    - Content Heading
    - Content (WYSIWYG)
- Search Engine Optimization 
    - URL Key
    - Meta Keywords
    - Meta Description
- Page in Websites
- Design 
    - Layout
    - Layout Update XML
    - Theme

### CMS Blocks

The following parameters can be staged:

- Enable/Disable CMS Block
- Block Title
- Identifier 
- Store View
- Content (WYSIWYG)

### Installation Details

The Magento_CmsStaging module makes irreversible changes in a database during installation. It means, that you cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies with the Magento_CmsStaging module in the `require` object of the `composer.json` file. The file is located in the same directory as this `README` file.

## Extension Points

Extension points enable extension developers to interact with the Magento_CmsStaging module. For more information about Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CmsStaging module.

### UI components

You can extend product and category updates using the UI components located in the `Magento\CmsStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.1/ui-components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\CmsStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

For more Magento 2 developer documentation, see [Magento 2 Developer Documentation](http://devdocs.magento.com). Also, there you can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).