---
layout: default
group: howdoi
subgroup: Checkout
title: Customize Checkout
menu_title: Customize Checkout
menu_node: parent
menu_order: 1
github_link: howdoi/checkout/checkout-intro.md
---

Checkout contains only user specific data. All the UI rendering happens on frontend (browser). Communication with server happens in JS models using asynchronous calls. All views displays UI using templates. 

Currently checkout has two steps 
* shipping
* billing.
Below you can find information how to extend checkout with your own step, add custom payment method, new forms and fields to existing forms.


The default Checkout flow consists of two steps:
 - Shipping Information
 - Review and Payments information.

They are implemented using...(what modules?)

This section describes how to perform the following Checkout customization tasks:
 - Custom checkout step: create the view files and add the step to checkout flow.
 - Changing the UI part of a checkout step
 - Adding a new payment method to checkout
 - Adding a new form 
 - Adding content to the existing form
 - Adding validators for the order placing
 - Adding a custom shipping address renderer
 - Adding shopping carrier validation rules
 