---
layout: default
group: howdoi
subgroup: checkout
title: Add custom shipping carrier validations
menu_title: Add custom shipping carrier validations
menu_order: 5
github_link: howdoi/checkout/checkout_carrier.md
---
<h2>What's in this topic</h2>
This topic describes how to add custom shipping carrier validations to the Magento checkout.

## Overview

To add new shipping carrier validations to the Magento checkout, do the following:

1. [Create validation rules](#rules).
2. [Create validator](#validator).
3. [Register validator and rules in the vaidators pool](#register).
4. [Add the the validators and rules to the checkout layout](#layout).

## Create validation rules {#rules}
Shipping carrier validation rules declare which fields of the Shipping Address are required for the corresponding shipping method to be available. The validation itself is performed by the [validator](#validator). 
 
If the requirements declared in the rules are fulfilled, thr further validation of fields values (for example, whether a carrier is available for the specified country) is carried on the server side.

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should [depend]({{site.gdeurl}}extension-dev-guide/composer-integration.html) on the Magento_Checkout module.

In your `<your_module_dir>/view/frontend/web/js/model` directory, create a `.js` file implementing the validation rules. 

The script must implement the `getRules()` method.

For example, the FedEx shipping method requires only two fields to be filled: Country and Zip code. This is how the the validation rules for FedEx look: 

**    <Magento_Fedex_dir>/view/frontend/web/js/model/shipping-rates-validation-rules.js**
{%highlight js%}
define(
    [],
    function () {
        "use strict";
        return {
            getRules: function() {
                return {
                    'postcode': {
                        'required': true
                    },
                    'country_id': {
                        'required': true
                    }
                };
            }
        };
    }
)
{% endhighlight%}

## Create validator {#validator}

Creator the validator `.js` script, which act. It must be located in the `<your_module_dir>/view/frontend/web/js/view` directory. 

A sample validator script follows:

{%highlight js%}
define(
    [
        'jquery',
        'mageUtils',

        './shipping-rates-validation-rules',
        'mage/translate'
    ],
    function ($, utils, validationRules, $t) {
        "use strict";
        return {
            validationErrors: [],
            validate: function(address) {
                var self = this;
                this.validationErrors = [];
                $.each(validationRules.getRules(), function(field, rule) {
                    if (rule.required && utils.isEmpty(address[field])) {
                        var message = $t('Field ') + field + $t(' is required.');
                        self.validationErrors.push(message);
                    }
                });
                return !Boolean(this.validationErrors.length);
            }
        };
    }
);
{%endhighlight%}

You can use this sample for your validator, you only need to specify your `.js` file with validation rules instead of `./shipping-rates-validation-rules` in the list of used modules.

## Register validator and rules in the validators pool {#register}

Your custom validator must be added to the pool of "additional validators". To do this, in the `<your_module_dir>/view/frontend/web/js` directory create a new `<your-validation>.js` file with the following content:


{%highlight js%}
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/shipping-rates-validator',
        'Magento_Checkout/js/model/shipping-rates-validation-rules',
        '../model/<your_validator>',
        '../model/<your_validation)>'
    ],
    function (
        Component,
        defaultShippingRatesValidator,
        defaultShippingRatesValidationRules,
        shippingRatesValidator,
        shippingRatesValidationRules
    ) {
        "use strict";
        defaultShippingRatesValidator.registerValidator('carrierName', shippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('carrierName', shippingRatesValidationRules);
        return Component;
    }
);
{%endhighlight%}

## Add the the validators and rules to the checkout layout {#layout}

The last step is specifying the validation rules and validator in the checkout page layout. 

In your custom module directory, create a new `<your_module_dir>/view/frontend/layout/checkout_index_index.xml` file. 
In this file, add the following:
{% highlight xml%}
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
                                                <item name="step-config" xsi:type="array">
                                                    <item name="children" xsi:type="array">
                                                        <item name="shipping-rates-validation" xsi:type="array">
                                                            <item name="children" xsi:type="array">
                                                                <item name="dhl-rates-validation" xsi:type="array">
                                                                    <item name="component" xsi:type="string">Magento_Dhl/js/view/shipping-rates-validation</item>
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
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
{%endhighlight%}
