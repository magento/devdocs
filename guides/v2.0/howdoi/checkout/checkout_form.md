---
layout: default
group: howdoi
subgroup: checkout
title: Add a new input form to Checkout
menu_title: Add a new input form to Checkout
menu_order: 8
github_link: howdoi/checkout/checkout_form.md
---
## What's in this topic

This topic describes how to add a custom input form to the Checkout page. 

<p class="q">should this form be a UI component? Would a link to the Form component be appropriate http://devdocs.magento.com/guides/v2.0/ui-components/ui-form.html?</p>

Magento provides ability to add a custom form to any of the checkout steps: Shipping Information, Review and Payment Information, or custom. In order to add a custom form developer has to follow the following steps:

Add checkout_index_index layout handle;
Add JS component that will handle form submit;
Add template that will render form fields and corresponding content;