---
layout: default
group: mrg
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_CmsStaging module
menu_title: CmsStaging
menu_order: 2
version: 2.2
ee_only: true
github_link: mrg/ee/CmsStaging.md
---

The Magento_CmsStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add the {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} Page and the {% glossarytooltip edfe0b48-7c21-41e8-9c83-3a0afe8a8ce9 %}CMS Block{% endglossarytooltip %} updates to the existing store campaigns. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_CmsStaging module changes the CMS Pages and CMS Blocks creation pages to make them compatible with the Magento Staging Framework. This module depends on the Magento_Cms module and extends its functionality. It changes the database structure of the Magento_Cms module and the way in which CMS Pages/Blocks are managed.

### CMS Pages

You can stage the following parameters:

- Enable/Disable CMS Page
- Page Title
- Content
    - Content Heading
    - Content (WYSIWYG)
- {% glossarytooltip ae8f7f2b-ddfb-41ed-bec3-bed191406fdd %}Search Engine Optimization{% endglossarytooltip %}
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
- {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}Store View{% endglossarytooltip %}
- Content (WYSIWYG)

### Installation details

The Magento_CmsStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CmsStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

{% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} points enable extension developers to interact with the Magento_CmsStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CmsStaging module.

### UI components

You can extend product and {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} updates using the UI components located in the `Magento\CmsStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.2/ui_comp_guide/components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\CmsStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
