---
layout: default
group: howdoi
subgroup: checkout
title: Add a new field in address form
menu_title: Add a new field in address form
menu_order: 9
version: 2.0
github_link: howdoi/checkout/checkout_new_field.md
---
## What's in this topic

This topic describes how to add a new field to the shipping address or billing address form used on checkout. 

`new-customer-address.js` lists all predefined address attributes and matches corresponding backend interface `\Magento\Quote\Api\Data\AddressInterface`. 

## Add a custom field in the address form

**Step 1**


Add the field to layout. Both shipping address and billing address are [dynamic forms]({{page.baseurl}}howdoi/checkout/checkout_form.html#dynamic_form). So to modify its layout, you need to create a [plugin]({{page.baseurl}}extension-dev-guide/plugins.html) for the `\Magento\Checkout\Block\Checkout\LayoutProcessor::process` method. 

Sample plugin (adding a field named `Custom Attribute` to the shipping address form):

{%highlight php%}
$customAttributeCode = 'custom_field';
$customField = [
    'component' => 'Magento_Ui/js/form/element/abstract',
    'config' => [
        // customScope is used to group elements within a single form (e.g. they can be validated separately)
        'customScope' => 'shippingAddress.custom_attributes',
        'customEntry' => null,
        'template' => 'ui/form/field',
        'elementTmpl' => 'ui/form/element/input',
        'tooltip' => [
            'description' => 'this is what the field is for',
        ],
    ],
    'dataScope' => 'shippingAddress.custom_attributes' . '.' . $customAttributeCode,
    'label' => 'Custom Attribute',
    'provider' => 'checkoutProvider',
    'sortOrder' => 0,
    'validation' => [
       'required-entry' => true
    ],
    'options' => [],
    'filterBy' => null,
    'customEntry' => null,
    'visible' => true,
];

$jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children'][$customAttributeCode] = $customField;
{%endhighlight%}

This way, your field is added to the `customAttributes` property of `new-customer-address.js`, a JS object that lists all predefined address attributes and matches corresponding server-side interface `\Magento\Quote\Api\Data\AddressInterface`. The `customAttributes` property was designed to contain custom EAV address attributes and is related to `\Magento\Quote\Model\Quote\Address\CustomAttributeListInterface::getAttributes` method. The code above will automatically handle local storage persistence on frontend. You can get your field value from local storage using `checkoutData.getShippingAddressFromData()`, where `checkoutData` is `Magento_Checkout/js/checkout-data`.


**Step 2**

Add a JS mixin to change the behavior of `Magento_Checkout/js/action/set-shipping-information` (this component is responsible for data submission between shipping and billing checkout steps)

There no mandatory requirements on the file name and location. If want it to be consisted with Magento approach, place the mixin in the `js/model/`directory in your custom module.

<p class="q">should the name of the mixin coincide with the name of the component it relates to? should we add info about what should be the name in case of billing address?</p>

Sample mixin:
{%highlight js%}

/*jshint browser:true jquery:true*/
/*global alert*/
define([
    'jquery',
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote'
], function ($, wrapper, quote) {
    'use strict';

    return function (setShippingInformationAction) {

        return wrapper.wrap(setShippingInformationAction, function (originalAction) {
            var shippingAddress = quote.shippingAddress();
            if (shippingAddress['extension_attributes'] === undefined) {
                shippingAddress['extension_attributes'] = {};
            }

            shippingAddress['extension_attributes']['custom_field'] = shippingAddress.customAttributes['custom_field'];
            // pass execution to original action ('Magento_Checkout/js/action/set-shipping-information')
            return originalAction();
        });
    };
});
{%endhighlight%}

**Step 3**

Create `<YourModule_dir>/view/frontend/requirejs-config.js` with content similar to the following:

{%highlight js%}

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-shipping-information': {
                '<>/js/action/set-shipping-information-mixin': true
            }
        }
    }
};
{%endhighlight%}


**Step 4**

To add an extension attribute to address model on the server side, add the <YourModule_dir>/etc/extension_attributes.xml file

<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Quote\Api\Data\AddressInterface">
        <attribute code="custom_field" type="string" />
    </extension_attributes>
</config>

## Access the value of the field
If you took all the steps described in the previous paragraph, 
Magento will generate interface that includes your custom attribute and you can access your field value like this:

    $value = $address->getExtensionAttributes()->getCustomField();
