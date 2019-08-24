---
title: Magento_BundleSharedCatalog module
ee_only: true
functional_areas:
  - B2B
---

{% include mrg/note.md %}

## Overview

The Magento_BundleSharedCatalog module enables bundle products to be added to a shared catalog in an B2B environment. This module extends Magento_SharedCatalog module and Magento_Bundle module.

The Magento_BundleSharedCatalog module provides the following features:

* Display and manage prices for bundle products within a shared catalog.

* Control the visibility of bundle products in quotes and orders. Only those bundle products that have been added to a shared catalog will be available for searches via the "Add by SKU" feature in quotes and orders.

## Installation details

This module has a dependency on the Magento_SharedCatalog and Magento_Bundle, which must be installed and enabled first.

The Magento_BundleSharedCatalog module does not create any backward incompatible changes and can be uninstalled at any time.

## Structure

[Learn about a typical file structure for a Magento 2 module](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the Magento_BundleSharedCatalog module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_BundleSharedCatalog module.

### Layouts

You can extend and override layouts in the `Magento\BundleSharedCatalog\view\adminhtml\layout` directories.

For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

### UI components

The following directory contains extensible UI components:

* `Magento\BundleSharedCatalog\view\adminhtml\ui_component` - renderer for pricing and structure listings

For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.2/ui-components/ui-listing-grid.html).

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release](http://devdocs.magento.com/guides/v2.2/release-notes/changes/b2b_changes.html).
