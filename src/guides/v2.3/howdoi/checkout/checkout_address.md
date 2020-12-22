---
layout: tutorial
group: how-do-i
subgroup:
title: Add a custom shipping address renderer
subtitle: Customize Checkout
menu_order: 11
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

This topic describes how to implement a custom shipping address renderer.

Out of the box, Magento [checkout](https://glossary.magento.com/checkout) consists of two steps:

-  Shipping Information
-  Review and Payment Information

On the Shipping Information checkout step Magento renders all addresses previously saved by a shopper. The shopper can then select the one to be used for shipping by clicking it. The default address renderers cover the majority of use cases, but Magento provides way to register custom address renderer for a new address type.

To implement shipping address rendering in checkout, you need to take the following steps:

1. [Create the JS renderer component (shipping address renderer)](#create).
1. [Create a template for the shipping address renderer.](#template)
1. [Create the JS model for the shipping rate processor](#rate_processor).
1. [Create the JS model for the shipping address saving processor](#save).
1. [Create the JS component registering the processors](#register).
1. [Declare the new components in the checkout page layout.](#layout).
1. [Add the shipping address renderer to the "Ship-To" block (optional)](#ship_to).

## Step 1: Create the JS renderer component (shipping address renderer) {#create}

Your shipping address renderer must be implemented as a [JavaScript](https://glossary.magento.com/javascript) [UI component](https://glossary.magento.com/ui-component). That is, it must be a RequireJS module, and must return a factory function, that takes a configurable object.

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code. Instead add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module must depend on the `Magento_Checkout` module. Module dependencies are specified in the [module's `composer.json`]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html). Do not use `Ui` for your custom module name, because `%Vendor%_Ui` notation, required when specifying paths, might cause issues.

In your custom module directory, create the component's `.js` file (shipping address renderer). It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory.

The following is a general view of the shipping address renderer:

```js
define([
    'ko',
    'uiComponent',
    'Magento_Checkout/js/action/select-shipping-address',
    'Magento_Checkout/js/model/quote'
], function(ko, Component, selectShippingAddressAction, quote) {
    'use strict';
    return Component.extend({
        defaults: {
            template: '%path to your template%'
        },

        initProperties: function () {
            this._super();
            this.isSelected = ko.computed(function() {
                var isSelected = false;
                var shippingAddress = quote.shippingAddress();
                if (shippingAddress) {
                    isSelected = shippingAddress.getKey() == this.address().getKey();
                }
                return isSelected;
            }, this);

            return this;
        },

        /** Set selected customer shipping address  */
        selectAddress: function() {
            selectShippingAddressAction(this.address());
        },

        /** additional logic required for this renderer  **/

    });
});
```

## Step 2: Create a template for the shipping address renderer {#template}

In your custom module directory, create a new `<your_module_dir>/view/frontend/web/template/<your_template>.html` file. The template can use [Knockout JS](http://knockoutjs.com/) syntax.

The template should contain a button for setting the address to be used for shipping.

You can use the code from the default template: [app/code/Magento/Checkout/view/frontend/web/template/shipping-address/address-renderer/default.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Checkout/view/frontend/web/template/shipping-address/address-renderer/default.html).

## Step 3: Create the JS model for the shipping rate processor {#rate_processor}

A shipping rate processor is responsible for retrieving the shipping rates available for the given shipping address.

In your custom module directory, create the component's `.js` file for the processor. It must be located under the `<your_module_dir>/view/frontend/web/js/model/` directory.

Here you need to specify the [URL](https://glossary.magento.com/url) used for calculating the shipping rates for your custom address type.

The following is a sample of the shipping rate processor code:

```js
define(
    [
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/model/shipping-service',
        'Magento_Checkout/js/model/shipping-rate-registry',
        'magento/storage',
        'Magento_Checkout/js/model/error-processor',
        // additional dependencies
    ],
    function (quote, shippingService, rateRegistry, storage, errorProcessor, ...) {
        'use strict';
        return {
            getRates: function(address) {
                var cache = rateRegistry.get(address.getKey());
                if (cache) {
                    shippingService.setShippingRates(cache);
                } else {
                    shippingService.isLoading(true);
                    storage.post(
                        %URL for shipping rate estimation%,
                        JSON.stringify({
                            %address parameters%
                        }),
                        false
                    ).done(
                        function (result) {
                            rateRegistry.set(address.getKey(), result);
                            shippingService.setShippingRates(result);
                        }
                    ).fail(
                        function (response) {
                            shippingService.setShippingRates([]);
                            errorProcessor.process(response);
                        }
                    ).always(
                        function () {
                            shippingService.isLoading(false);
                        }
                    );
                }
            }
        };
    }
);
```

## Step 4: Create the JS model for the shipping address saving processor {#save}

This processor is responsible for sending the shipping address and the selected rate to the server.

In your custom module directory, create the component's `.js` file for the processor. It must be located under the `<your_module_dir>/view/frontend/web/js/model/` directory.

The following is a sample of the shipping rate processor code:

```js
define(
    [
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/model/resource-url-manager',
        'mage/storage',
        'Magento_Checkout/js/model/payment-service',
        'Magento_Checkout/js/model/error-processor',
        'Magento_Checkout/js/model/payment/method-converter'
    ],
    function (quote, resourceUrlManager, storage, paymentService, errorProcessor, methodConverter) {
        'use strict';
        return {
            saveShippingInformation: function() {
                var shippingAddress = {},
                    payload;

                shippingAddress.extension_attributes = {
                    %address extension attributes%
                };

                payload = {
                    addressInformation: {
                        shipping_address: shippingAddress,
                        shipping_method_code: quote.shippingMethod().method_code,
                        shipping_carrier_code: quote.shippingMethod().carrier_code
                    }
                };

                return storage.post(
                    resourceUrlManager.getUrlForSetShippingInformation(quote),
                    JSON.stringify(payload)
                ).done(
                    function (response) {
                        paymentService.setPaymentMethods(methodConverter(response.payment_methods));
                        quote.setTotals(response.totals)
                    }
                ).fail(
                    function (response) {
                        errorProcessor.process(response);
                    }
                );
            }
        }
    }
);
```

## Step 5: Create the JS component registering the processors {#register}

In your custom module directory, create the `.js` UI component that registers the rate processor and the saving processor. It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory.

The file content must be similar to the following:

```js
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/shipping-rate-service',
        %custom shipping rate processor%,
        'Magento_Checkout/js/model/shipping-save-processor',
        %custom shipping save processor%
    ],
    function (
        Component,
        shippingRateService,
        customShippingRateProcessor,
        shippingSaveProcessor,
        customShippingSaveProcessor
    ) {
        'use strict';

        /** Register rate processor */
        shippingRateService.registerProcessor(%address type%, customShippingRateProcessor);

        /** Register save shipping address processor */
        shippingSaveProcessor.registerProcessor(%address type%, custormShippingSaveProcessor);

        /** Add view logic here if needed */
        return Component.extend({});
    }
);
```

## Step 6: Declare the new components in the checkout page layout {#layout}

In your custom module directory, create a new `<your_module_dir>/view/frontend/layout/checkout_index_index.xml` file. In this file, add the following:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="checkout.root">
            <arguments>
                <argument name="jsLayout" xsi:type="array">
                    <item name="components" xsi:type="array">
                        <item name="checkout" xsi:type="array">
                            <item name="children" xsi:type="array">
                                <item name="steps" xsi:type="array">
                                    <item name="children" xsi:type="array">
                                        <item name="shipping-step" xsi:type="array">
                                            <item name="children" xsi:type="array">
                                                <!-- Declare the component that registers the shipping address and rates processors -->
                                                <item name="custom-address-provider" xsi:type="array">
                                                    <item name="component" xsi:type="string">%component that registers address/rate processors%</item>
                                                </item>
                                                <!-- Declare the component that renders the shipping address -->
                                                <item name="shippingAddress" xsi:type="array">
                                                    <item name="children" xsi:type="array">
                                                        <item name="rendererTemplates" xsi:type="array">
                                                            <item name="%address type%" xsi:type="array">
                                                                <item name="component" xsi:type="string">%address renderer JS component%</item>
                                                            </item>
                                                        </item>
                                                    </item>
                                                </item>
                                           </item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

The `address_type` you need to specify in the layout, is the value you set in the JS model of your custom address type.

## Step 7: Add the shipping address renderer to the "Ship-To" block (optional) {#ship_to}

On the Review and Payment Information step of checkout, the shipping address is displayed in the **Ship-To** section for customer to make sure everything is set correctly.

If you want your custom address type to be displayed here as well, you need to create an `.html` template for rendering it, and declare in the corresponding location in [layout](https://glossary.magento.com/layout).

### Add template for displaying the address in the Ship-To section

In your custom module directory create a new `<your_module_dir>/view/frontend/web/template/<your_template>.html` file. The template can use [Knockout JS](http://knockoutjs.com/) syntax.

You can use the code from the default template: [app/code/Magento/Checkout/view/frontend/web/template/shipping-information/address-renderer/default.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Checkout/view/frontend/web/template/shipping-information/address-renderer/default.html).

### Declare the address to be used in the Ship-To section in layout

In your `<your_module_dir>/view/frontend/layout/checkout_index_index.xml` file, add the following:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <block class="Magento\Checkout\Block\Onepage" name="checkout.root" template="onepage.phtml" cacheable="false">
                <arguments>
                    <argument name="jsLayout" xsi:type="array">
                        <item name="components" xsi:type="array">
                            <item name="sidebar" xsi:type="array">
                                <item name="children" xsi:type="array">
                                    <item name="shipping-information" xsi:type="array">
                                        <item name="children" xsi:type="array">
                                            <item name="ship-to" xsi:type="array">
                                                <item name="rendererTemplates" xsi:type="array">
                                                    <item name="%address type%" xsi:type="array">
                                                        <item name="component" xsi:type="string">uiComponent</item>
                                                        <item name="config" xsi:type="array">
                                                                <item name="template" xsi:type="string">%custom template%</item>
                                                        </item>
                                                    </item>
                                                </item>
                                            </item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </argument>
                </arguments>
            </block>
        </referenceContainer>
    </body>
</page>
```

## Step 8: Deploy the static content and clean the cache

1. Deploy static content:

   ```bash
   bin/magento setup:static-content:deploy
   ```

1. Then clean the cache:

   ```bash
   bin/magento cache:clean
   ```
