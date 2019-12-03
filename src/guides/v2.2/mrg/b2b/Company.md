---
group: module-reference-guide
subgroup: 30_B2B
title: Magento_Company module
menu_title: Company
menu_order: 50
functional_areas:
  - B2B
---

## Overview

The `Magento_Company` module allows a merchant to create a company account and assign multiple members of the company to the account.

The module also implements roles and permissions for the company members. The company admin builds a hierarchical company structure (which consists of teams and users) in the storefront and assigns roles and permissions to the company members. This hierarchy allows the company admin to control user activity within the account. This hierarchy as well as roles and permissions are currently available in the storefront only. A merchant can only view the list of company members in Admin.

A merchant can view and manage company profiles in Admin. A company's status controls what kind of access the company members have to the website. An admin user can also configure company-level emails and allow or disallow a company registration from the storefront. Also, this module adds a 'customer type' attribute to the customer in Admin: individual user, company member or company admin.

## Installation details

This module does not create any backward incompatible changes. This module can be deactivated after all the other B2B modules (except `QuickOrder` and `RequisitionList`) are deactivated.

## Structure

[Learn about a typical file structure for a Magento 2 module]({{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the Magento_Company module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ page.baseurl }}/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_Company module.

### Layouts

You can extend and override layouts in the `Magento\Company\view\adminhtml\layout` and `Magento\Company\view\frontend\layout` directories.

For more information about layouts, see the [Layout documentation]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html).

### UI components

The following directories contain extensible UI components:

*  `Magento\Company\view\adminhtml\ui_component` -  customer listing, invitation form, sales order grid

*  `Magento\Company\view\base\ui_component` - company listing, company creation form, customer creation form

*  `Magento\Company\view\frontend\ui_component` - company users listing, role listing

For more information, see [UI Listing/Grid Component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html).

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release]({{ page.baseurl }}/release-notes/changes/b2b_changes.html).
