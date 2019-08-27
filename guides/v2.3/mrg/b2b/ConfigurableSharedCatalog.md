---
title: Magento_ConfigurableSharedCatalog module
ee_only: true
functional_areas:
  - B2B
---

{% include mrg/note.md %}

## Overview

The Magento_ConfigurableSharedCatalog module enables configurable products to be added to a shared catalog in an B2B environment. This module extends Magento_SharedCatalog and Magento_Configurable modules.

The Magento_ConfigurableSharedCatalog module provides the following features:

* Display base and custom prices for configurable products within a shared catalog. There is no ability to edit the price of a configurable product.

* Control the visibility of configurable products in quotes and orders. Only those configurable products that have been added to a shared catalog will be available for searches via the "Add by SKU" feature in quotes and orders.

## Installation details

The Magento_ConfigurableSharedCatalog module has a dependency on the Magento_SharedCatalog and Magento_Configurable modules, which must be installed and enabled first. This module does not create any backward incompatible changes. It can be uninstalled or deactivated at any time.

## Structure

[Learn about a typical file structure for a Magento 2 module](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the Magento_ConfigurableSharedCatalog module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_ConfigurableSharedCatalog module.

### Layouts

You can extend and override layouts in the `Magento\ConfigurableSharedCatalog\view\adminhtml\layout` directories.

For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

### UI components

The following directory contains extensible UI components:

* `Magento\ConfigurableSharedCatalog\view\adminhtml\ui_component` - renderer for pricing and structure listings

For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.2/ui-components/ui-listing-grid.html).

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release](http://devdocs.magento.com/guides/v2.2/release-notes/changes/b2b_changes.html).
