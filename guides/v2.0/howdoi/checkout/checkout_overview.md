---
layout: default
group: howdoi
subgroup: checkout
title: Customize Checkout
menu_title: Customize Checkout
menu_node: parent
menu_order: 1
github_link: frontend-dev-guide/howdoi/checkout/checkout_overview.md
---

Magento checkout is implemented using the UI components. 
Out of the box, the checkout consists of two steps:
 
 - Shipping Information
 - Review and Payment Information


You can customize the defalt checkout in many ways. Here the following customizations are described:

 - [Add a new checkout step]({{site.gdeurl}}howdoi/checkout/checkout_new_step.html)
 - [Customize the view of an existing step]({{site.gdeurl}}howdoi/checkout/checkout_new_step.html)

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code, add your customizations in a custom module. 

For your checkout customization to be applied correctly, your custom module should depend on the Magento_Checkout module.