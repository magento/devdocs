---
group: mrg
subgroup: 30_B2B
title: Magento_QuickOrder module
menu_title: QuickOrder
menu_order: 180
version: 2.2
functional_areas:
  - B2B
---

## Overview

The `Magento_QuickOrder` module allows customers to improve their user experience by creating a new order from a list of multiple SKUs.

Multiple items can be sent to the shopping cart from a CSV file, by copy and pasting multiple SKUs from another source, or by manually entering SKUs one-by-one into the Quick Order form. This feature is available for both logged-in users and guests.

## Installation details

The module does not create any backward incompatible changes. It heavily depends on the `Magento_AdvancedCheckout` module and cannot work without it. Can be deactivated and uninstalled at any time.

## Structure

[Learn about a typical file structure for a Magento 2 module]({{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the `Magento_QuickOrder` module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ page.baseurl }}/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) enables you to override the functionality of the `Magento_QuickOrder` module.

### Layouts

You can extend and override layouts in the `Magento\QuickOrder\view\frontend\layout` directory.

For more information about layouts, see the [Layout documentation]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release]({{ page.baseurl }}/release-notes/changes/b2b_changes.html).
