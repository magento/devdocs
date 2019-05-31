---
title: Magento_ConfigurableProductStaging module
ee_only: true
---

{% include mrg/note.md %}

## Magento_ConfigurableProductStaging module

## Overview

The Magento_ConfigurableProductStaging module is a part of the staging functionality in Magento EE. It enables you to create new Configurable Product updates or add new changes to the existing store updates. In other words, you can modify the Configurable Products entity attributes in updates. These updates are shown on the content dashboard.

## Implementation details

The Magento_ConfigurableProductStaging module adds the "Configurations" tab and the configuration wizard to the Schedule Update form of a product.

### Installation details

The Magento_ConfigurableProductStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_ConfigurableProductStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_ConfigurableProductStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_ConfigurableProductStaging module.

### UI components

You can extend product and category updates using the UI components located in the `Magento\ConfigurableProductStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.1/ui-components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\ConfigurableProductStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes]({{ page.baseurl }}/release-notes/backward-incompatible-changes/).

