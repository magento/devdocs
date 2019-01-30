---
title: Magento_CompanyCredit module
ee_only: true
functional_areas:
  - B2B
---

{% include mrg/note.md %}

## Overview

The Magento_CompanyCredit module adds the "Payment on Account" payment method for B2B companies. It also allows the credit history to be viewed from both Admin and the storefront. 

With the Magento_Company Credit module
- a customer can pay orders with Payment on Account method (or in credit);
- an admin user can manage credit and credit settings for a company (in the admin panel);
- merchants and customers can track credit history, and specifically: credit allocation, order placement, credit reimbursement, credit change (amount, currency or possibility to exceed credit limit).

The company credit functionality is available for company users only.
 
## Installation details
 
The module has a dependency on the Magento_Company module, which must be installed and enabled the first. The module does not create any backward incompatible changes. The CompanyCredit module can be deactivated and uninstalled at any time. 
 
## Structure
 
[Learn about a typical file structure for a Magento 2 module]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/build/module-file-structure.html).
 
## Extensibility
 
Extension developers can interact with the Magento_CompanyCredit module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html).
 
[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CompanyCredit module.

[Payment method configuration]({{ site.baseurl }}/guides/v2.2/payments-integrations/base-integration/payment-option-config.html) will allow you additional configuration to extend module functionality.

### Layouts
 
You can extend and override layouts in the `Magento\CompanyCredit\view\adminhtml\layout` and `Magento\CompanyCredit\view\frontend\layout` directories.

For more information about layouts, see the [Layout documentation]({{ site.baseurl }}/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).
 
### UI components

The following directories contain extensible UI components: 

* `Magento\CompanyCredit\view\adminhtml\ui_component` -  company form, company listing, history listing

* `Magento\CompanyCredit\view\frontend\ui_component` - balance history listing

For more information, see [UI Listing/Grid Component]({{ site.baseurl }}/guides/v2.2/ui-components/ui-listing-grid.html) and [UI Form Component]({{ site.baseurl }}/guides/v2.2/ui_comp_guide/components/ui-form.html)

## Additional information
 
You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release]({{ site.baseurl }}/guides/v2.2/release-notes/changes/b2b_changes.html).
