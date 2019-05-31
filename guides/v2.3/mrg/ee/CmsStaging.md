---
title: Magento_CmsStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_CmsStaging module

## Overview

The Magento_CmsStaging module is a part of the staging functionality in Magento EE. It enables you to create new CMS Page and the CMS Block updates or add new changes to the existing store updates. In other words, you can modify the CMS Pages and the CMS Blocks in updates. These updates are shown on the content dashboard.

## Implementation details

The Magento_CmsStaging module changes the CMS Pages and CMS Blocks creation pages to make them compatible with the Magento Staging Framework. This module depends on the Magento_Cms module and extends its functionality. It changes the database structure of the Magento_Cms module and the way in which CMS Pages/Blocks are managed.

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

### Installation details

The Magento_CmsStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CmsStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_CmsStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CmsStaging module.

### UI components

You can extend product and category updates using the UI components located in the `Magento\CmsStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.1/ui-components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\CmsStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/).
