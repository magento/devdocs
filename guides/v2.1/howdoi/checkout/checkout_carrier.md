---
layout: default
group: howdoi
subgroup: checkout
title: Add custom shipping carrier validations
menu_title: Add custom shipping carrier validations
menu_order: 5
version: 2.1
github_link: howdoi/checkout/checkout_carrier.md
---
<h2>What's in this topic</h2>
This topic describes how to add shipping address validations for a custom shipping carrier to the Magento checkout. This is a part of the bigger task of adding a custom shipping method to your Magento store.


## Overview

To add new shipping carrier validations to the Magento checkout, do the following:

1. [Create validation rules](#rules).
2. [Create validator](#validator).
3. [Register validator and rules in the vaidators pool](#register).
4. [Add the the validators and rules to the checkout layout](#layout).

More details about each step follow.

## Create validation rules {#rules}
Shipping carrier validation rules declare which fields of the shipping address are required for the corresponding shipping method to be available. The validation itself is performed by the [validator](#validator).

During checkout, if the shipping address fields declared in the rules are filled, the further validation of fields' values (for example, whether a carrier is available for the specified country) is carried on the server side.

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should [depend]({{site.gdeurl21}}extension-dev-guide/build/composer-integration.html) on the `Magento_Checkout` module. Do not use `Ui` for your custom module name, because `%Vendor%_Ui` notation, required when specifying paths, might cause issues.

In your `<your_module_dir>/view/frontend/web/js/model` directory, create a `.js` file implementing the validation rules.

The script must implement the `getRules()` method.

For example, the FedEx shipping method requires only two fields of the shipping address to be filled: **Country** and **Zip Code**. This is how the validation rules for FedEx look:

    <Magento_Fedex_dir>/view/frontend/web/js/model/shipping-rates-validation-rules.js
{%highlight js%}
define(
    [],
    function () {
        'use strict';
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

Create the validator `.js` script that checks if the fields defined by the validation rules are filled. The script must be located in the `<your_module_dir>/view/frontend/web/js/model` directory.

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
        'use strict';
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

You can use this sample for your validator, but you need to specify your validation rules script instead of `./shipping-rates-validation-rules` in the list of used modules.

## Register validator and rules in the validators pool {#register}

Your custom validator must be added to the pool of validators. To do this, in the `<your_module_dir>/view/frontend/web/js/view` directory create a new `<your-validation>.js` file with the following content:


{%highlight js%}
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/shipping-rates-validator',
        'Magento_Checkout/js/model/shipping-rates-validation-rules',
        '../model/<your_validator>',
        '../model/<your_validation_rules>'
    ],
    function (
        Component,
        defaultShippingRatesValidator,
        defaultShippingRatesValidationRules,
        shippingRatesValidator,
        shippingRatesValidationRules
    ) {
        'use strict';
        defaultShippingRatesValidator.registerValidator('carrierName', shippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('carrierName', shippingRatesValidationRules);
        return Component;
    }
);
{%endhighlight%}

## Add the validation to the checkout layout {#layout}

The last step is specifying the script you created on the previous step in the checkout page layout.

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
                                                                <item name="<your-validation-name>" xsi:type="array">
                                                                    <item name="component" xsi:type="string">%your_module%/js/view/%your-validation%</item>
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
