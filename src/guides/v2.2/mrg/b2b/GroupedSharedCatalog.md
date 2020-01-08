---
group: module-reference-guide
subgroup: 30_B2B
title: Magento_GroupedSharedCatalog module
menu_title: GroupedSharedCatalog
menu_order: 150
functional_areas:
  - B2B
---

## Overview

The `Magento_GroupedSharedCatalog` module enables grouped products to be added to a shared catalog in an B2B environment. This module extends `Magento_SharedCatalog` and `Magento_Grouped` modules.

The `Magento_GroupedSharedCatalog` module provides the following features:

*  Display base and custom prices for grouped products within a shared catalog. There is no ability to edit the price of a grouped product.

*  Control the visibility of grouped products in quotes and orders. Only those grouped products that have been added to a shared catalog will be available for searches via the "Add by SKU" feature in quotes and orders.

## Installation details

The module has dependency on the `Magento_SharedCatalog` module and `Magento_Grouped` modules, which must be installed and enabled first. This module does not create any backward incompatible changes. Can be uninstalled or deactivated at any time.

## Structure

[Learn about a typical file structure for a Magento 2 module]({{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the Magento_GroupedSharedCatalog module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ page.baseurl }}/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GroupedSharedCatalog module.

### Layouts

You can extend and override layouts in the `Magento\GroupedSharedCatalog\view\adminhtml\layout` directories.

For more information about layouts, see the [Layout documentation]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html).

### UI components

The following directory contains extensible UI components:

*  `Magento\GroupedSharedCatalog\view\adminhtml\ui_component` - renderer for pricing and structure listings

For more information, see [UI Listing/Grid Component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html).

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release]({{ page.baseurl }}/release-notes/changes/b2b_changes.html).
