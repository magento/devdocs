---
layout: tutorial
group: how-do-i
subgroup: checkout
title: Customize Checkout
menu_title: Initial Tasks
menu_node:
level3_subgroup: checkout-tutorial
menu_order: 0
functional_areas:
  - Checkout
---

Magento [checkout](https://glossary.magento.com/checkout) is implemented using the [UI components]({{ page.baseurl }}/ui_comp_guide/bk-ui_comps.html).
Out of the box, the checkout consists of two steps:

-  Shipping Information
-  Review and Payment Information

The checkout totals and the corresponding side-bar are only displayed after the first step is completed.

The only [exception](https://glossary.magento.com/exception) is checkout of virtual and/or downloadable products: if there are only these  types of products in the shopping cart, checkout is automatically transformed to one-step procedure, because shipping information is not required.

 {:.bs-callout-info}
For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code. Add your customizations in a custom [module](https://glossary.magento.com/module).

## List of available customizations

You can customize the default checkout in multiple ways. This tutorial includes the following customizations:

-  [Add a new checkout step]({{ page.baseurl }}/howdoi/checkout/checkout_new_step.html)
-  [Customize the view of an existing step]({{ page.baseurl }}/howdoi/checkout/checkout_customize.html)
-  [Add a custom payment method to checkout]({{ page.baseurl }}/howdoi/checkout/checkout_payment.html)
-  [Add custom validations before order placement]({{ page.baseurl }}/howdoi/checkout/checkout_order.html)
-  [Add custom shipping carrier]({{ page.baseurl }}/howdoi/checkout/checkout-add-custom-carrier.html)
-  [Add custom shipping carrier validations]({{ page.baseurl }}/howdoi/checkout/checkout_carrier.html)
-  [Add custom input mask for ZIP code]({{ page.baseurl }}/howdoi/checkout/checkout_zip.html)
-  [Add a custom template for a form field on Checkout page]({{ page.baseurl }}/howdoi/checkout/checkout_edit_form.html)
-  [Add a new input form to checkout]({{ page.baseurl }}/howdoi/checkout/checkout_form.html)
-  [Add a new field in address form]({{ page.baseurl }}/howdoi/checkout/checkout_new_field.html)
-  [Add custom shipping address renderer]({{ page.baseurl }}/howdoi/checkout/checkout_address.html)
