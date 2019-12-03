---
group: module-reference-guide
subgroup: 30_B2B
title: Magento_CompanyPayment module
menu_title: CompanyPayment
menu_order: 70
functional_areas:
  - B2B
---

## Overview

The `Magento_CompanyPayment` module allows a merchant to configure which payment methods are available for B2B companies.

In Admin, the `CompanyPayment` module adds an additional panel (on the Company profile page and on the B2B Features page) where a merchant configures payment methods for companies. Payment methods can be configured on the store level or on the company level.

## Installation details

The module has a dependency on the `Magento_Company` module, which must be installed and enabled first. This module does not create any backward incompatible changes. It can be deactivated and uninstalled at any time.

## Structure

[Learn about a typical file structure for a Magento 2 module]({{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the `Magento_CompanyPayment` module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ page.baseurl }}/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CompanyPayment module.

### Layouts

You can extend and override layouts in the `Magento\CompanyPayment\view\frontend\layout` directory.

For more information about layouts, see the [Layout documentation]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html).

### UI components

The following directory contains extensible UI components:

*  `Magento\CompanyPayment\view\frontend\ui_component` - company form

For more information, see [UI Form Component]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html).

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release]({{ page.baseurl }}/release-notes/changes/b2b_changes.html).
