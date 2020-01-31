---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_CmsStaging module
menu_title: CmsStaging
menu_order: 2
ee_only: true
---

The Magento_CmsStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add the [CMS](https://glossary.magento.com/cms) Page and the [CMS Block](https://glossary.magento.com/cms-block) updates to the existing store campaigns. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_CmsStaging module changes the CMS Pages and CMS Blocks creation pages to make them compatible with the Magento Staging Framework. This module depends on the Magento_Cms module and extends its functionality. It changes the database structure of the Magento_Cms module and the way in which CMS Pages/Blocks are managed.

### CMS Pages

You can stage the following parameters:

-  Enable/Disable CMS Page
-  Page Title
-  Content
   -  Content Heading
   -  Content (WYSIWYG)
-  [Search Engine Optimization](https://glossary.magento.com/search-engine-optimization)
   -  URL Key
   -  Meta Keywords
   -  Meta Description
-  Design
   -  Layout
   -  Layout Update XML
   -  Theme

### CMS Blocks

The following parameters can be staged:

-  Enable/Disable CMS Block
-  Block Title
-  Identifier
-  [Store View](https://glossary.magento.com/store-view)
-  Content (WYSIWYG)

### Installation details

The Magento_CmsStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CmsStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_CmsStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CmsStaging module.

### UI components

You can extend product and [category](https://glossary.magento.com/category) updates using the UI components located in the `Magento\CmsStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component]({{ site.baseurl }}/guides/v2.2/ui_comp_guide/components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\CmsStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation]({{ site.baseurl }}/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
