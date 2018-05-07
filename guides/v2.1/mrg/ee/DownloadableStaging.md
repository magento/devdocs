---
layout: default
group: mrg
title: Magento_DownloadableStaging module
version: 2.1
ee_only: true
github_link: mrg/ee/DownloadableStaging.md
---

The Magento_DownloadableStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add the {% glossarytooltip 38fc3629-ee25-4de5-ac7a-72db8e8de6de %}Downloadable Product{% endglossarytooltip %} updates to the existing store campaigns. In other words, you can change the Downloadable Product attributes in campaigns. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_DownloadableStaging module changes the Downloadable Product creation page to make them compatible with the Magento Staging Framework. This module extends the Magento_Downloadable module functionality to be used in staging.

The Magento_DownloadableStaging module adds the "Downloadable information" tab to the Schedule Update form for a product.

### Installation details

The Magento_DownloadableStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_DownloadableStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

{% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} points enable extension developers to interact with the Magento_DownloadableStaging module.
For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_DownloadableStaging module.

### UI components

You can extend product and {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} updates using the UI components located in the `Magento\DownloadableStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.1/ui_comp_guide/components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\DownloadableStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
