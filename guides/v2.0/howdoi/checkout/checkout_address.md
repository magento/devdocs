---
layout: default
group: howdoi
subgroup: checkout
title: Add custom shipping address renderer
menu_title: Add custom shipping address renderer
menu_order: 9
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

1. [Create the JS renderer component (shipping address renderer)](#create).
2. [Create the JS model for the shipping rate processor](#rate_processor).
3. [Create the JS model for the shipping address saving processor](#save).
4. [Create the JS component registering the processors](#register).
5. Create template?
<p class="q">do we need a template?</p>
4. [Declare the new components in the checkout page layout.](#layout).
5. [Add the shipping address renderer to the "Ship-To" block (optional)](#ship_to).

All the steps are described further.


## Create the JS renderer component (shipping address renderer) {#create}

Your shipping address renderer must be implemented as a UI component. That is, it must be a RequireJS module, and must return a factory function, that takes a configurable object.

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should depend on the Magento_Checkout module. Module dependencies are specified in the [module's `composer.json`]({{site.gdeurl}}extension-dev-guide/build/composer-integration.html).

In you custom module directory create the component's `.js` file (shipping address renderer). It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory. For example in the Magento modules, the payment methods renderers are stored in the ... directory.

<p class="q">any conventions on this?</p>

Usually, your component will extend the default payment method component (default payment method renderer) implemented in the `<Magento_Checkout_module_dir>/view/frontend/web/js/view/payment/default.js` file. The following table contains the list of the `default` component's methods.

<p class="q">Is there smth similar for shipping address?</p>

The general view of the shipping address renderer is the following:

<p class="q">what template do we need to specify?</p>

{%highlight js%}
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
{%endhighlight%}

## Create the JS model for the shipping rate processor {#rate_processor}

A shipping rate processor is responsible for retrieving the shipping rates available for the given shipping address.

In you custom module directory create the component's `.js` file for the processor. It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory. 

<p class="q">any additional conventions?</p>

<p class="q">What is %URL for shipping rate estimation%, %address parameters%</p>

Following is a sample of the shipping rate processor code:

{%highlight js%}
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

{%endhighlight%}

## Create the JS model for the shipping address saving processor {#save}

This processor is responsible for saving the shipping address. 

In you custom module directory create the component's `.js` file for the processor. It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory. 

<p class="q">any additional conventions?</p>

Following is a sample of the shipping rate processor code:

{%highlight js%}
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
{%endhighlight%}

## Create the JS component registering the processors {#register}

In you custom module directory create the `.js` UI component that registers the rate and saving processors. It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory.
<p class="q">true?</p>
<p class="q">Are the processors added to some list of processors?</p>

The file content must be similar to the following:

<p class="q">what is address type</p>

{%highlight js%}
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
 
        //Register rate processor
        shippingRateService.registerProcessor(%address type%, customShippingRateProcessor);
 
        //Register save shipping address processor
        shippingSaveProcessor.registerProcessor(%address type%, custormShippingSaveProcessor);
 
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
{%endhighlight%}

## Declare the new components in the checkout page layout {#layout}

In your custom module directory, create a new `<your_module_dir>/view/frontend/layout/checkout_index_index.xml` file. In this file, add the following:

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="1column" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
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
{%endhighlight%}

### Add the shipping address renderer to the "Ship-To" block (optional) {#ship_to}

If you need the ...

<p class="q">why do you need to </p>

In your `<your_module_dir>/view/frontend/layout/checkout_index_index.xml` file add the following:

<p class="q">indents of the first two nodes?</p>
<p class="q">where exactly in layout shoul it go?</p>

{%highlight xml%}
....
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
...
{%endhighlight%}