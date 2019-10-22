---
group: module-reference-guide
subgroup: 30_B2B
title: Magento_RequisitionList module
menu_title: RequisitionList
menu_order: 190
functional_areas:
  - B2B
---

## Overview

The `Magento_RequisitionList` module allows a customer to create multiple lists of frequently-purchased items and use those lists for order placement. This feature is available for both logged-in users and guests.

`RequisitionList` functionality is similar to wish lists, but it has the following differences:

*  A requisition list is not purged after sending items to the shopping cart. It can be used to place multiple orders.

*  The UI for requisition lists has been modified to a compact view in order to display large number of items.

The merchant can configure maximum number of requisition lists per customer.

## Installation details

The module does not create any backward incompatible changes. It can be deactivated and uninstalled in any time.

## Structure

[Learn about a typical file structure for a Magento 2 module]({{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the Magento_RequisitionList module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ page.baseurl }}/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_RequisitionList module.

### Layouts

You can extend and override layouts in the `Magento\RequisitionList\view\frontend\layout` directories.

For more information about layouts, see the [Layout documentation]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html).

### UI components

The following directories contain extensible UI components:

*  `Magento\RequisitionList\view\frontend\ui_component` - requisition list listing

For more information, see [UI Listing/Grid Component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html).

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release]({{ page.baseurl }}/release-notes/changes/b2b_changes.html).
