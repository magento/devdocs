---
layout: default
group: howdoi
subgroup: checkout
title: Add custom shipping address renderers
menu_title: Add custom shipping address renderers
menu_order: 8
github_link: howdoi/checkout/checkout_address.md
---
## What's in this topic

Out of the box, Magento checkout consists of two steps:

- Shipping Information
- Review and Payment Information

On the Shipping Information step Magento renders the shipping address form. Default address renderers cover the majority of use cases, but Magento provides way to register custom address renderer for a new address type.
<p class="q">Is it really the form?</p>
<p class="q">What is meant by most use cases?</p>

This topic describes how to implement a custom shipping address renderer.

To implement a payment method rendering in checkout, you need to take the following steps:

1. [Create the JS renderer component (shipping address renderer).](#create)
2. Create the JS model for the shipping rate processor
3. Create the JS model for the shipping address saving processor
4. Create the JS component registering the processors
5. Create template?
<p class="q">do we need a template?</p>
3. [Create a template for the payment method renderer.](#template)
4. [Declare the new components in the checkout page layout.](#layout)
5. [Add the shipping address renderer to the "Ship-To" block (optional)](#ship_to)

All the steps are described further.


## Create the JS renderer component (shipping address renderer) {#create}

Your shipping address renderer must be implemented as a UI component. That is, it must be a RequireJS module, and must return a factory function, that takes a configurable object.


For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should depend on the Magento_Checkout module. Module dependencies are specified in the [module's `composer.json`]({{site.gdeurl}}extension-dev-guide/build/composer-integration.html).

In you custom module directory create the component's `.js` file (payment method renderer). It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory. For example in the Magento modules, the payment methods renderers are stored in the `<your_module_dir>/view/frontend/web/js/view/payment/method-renderer/` directory.

Usually, your component will extend the default payment method component (default payment method renderer) implemented in the `<Magento_Checkout_module_dir>/view/frontend/web/js/view/payment/default.js` file. The following table contains the list of the `default` component's methods.
 