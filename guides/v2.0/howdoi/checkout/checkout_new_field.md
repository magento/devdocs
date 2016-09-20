---
layout: default
group: howdoi
subgroup: checkout
title: Add a new field in address form (Add custom address attribute?) 
menu_title: Add a new field in address form
menu_order: 9
version: 2.0
github_link: howdoi/checkout/checkout_new_field.md
---
## What's in this topic

This topic describes how to add a new field to the shipping address or billing address form used on checkout. 

`new-customer-address.js` lists all predefined address attributes and matches corresponding backend interface `\Magento\Quote\Api\Data\AddressInterface`. But Magento provides ability to pass any custom attributes to backend without modification of the backend/frontend components. `new-customer-address.js` component has the `customAttributes` property. Your custom attributes will be automatically handled if their `$dataScopePrefix` is `shippindAddress.custom_attributes`.


## Add a custom field in the address form

**Step 1**
Add the field to layout by creating a [plugin]({{page.baseurl}}extension-dev-guide/plugins.html) for the `\Magento\Checkout\Block\Checkout\LayoutProcessor::process` method. 

Sample plugin, adding a field named `Custom Attribute` to the shipping address form:

{%highlight php%}
/**
 * @author aakimov
 */
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
            'description' => 'Yes, this works. I tested it. Sacrificed my lunch break but verified this.',
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

This way, your field is added to the `customAttributes` property of `new-customer-address.js`б the JS address object. This property was designed to contain custom EAV address attributes and is related to `\Magento\Quote\Model\Quote\Address\CustomAttributeListInterface::getAttributes` method. The code above will automatically handle local storage persistence on frontend. You can get your field value from local storage using `checkoutData.getShippingAddressFromData()` (where `checkoutData` is `Magento_Checkout/js/checkout-data`).


**Step 2**
Add a JS mixin to change the behavior of `Magento_Checkout/js/action/set-shipping-information` (this component is responsible for data submission between shipping and billing checkout steps)

<p class="q">Why do we need to change it?</p>

1. Create `<YourModule_dir>/view/frontend/requirejs-config.js` with content similar to the following:

{%highlight js%}
/**
 * @author aakimov
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-shipping-information': {
                '<your_module_name>/js/action/set-shipping-information-mixin': true
            }
        }
    }
};
{%endhighlight%}

<p class="q"><your_module_name>/js/action/set-shipping-information-mixin - is it a full class name or some other notation?</p>

2. Create `<YourModule_dir>/js/action/set-shipping-information-mixin.js`. 

<p class="q">why do we need a mixin?</p>  
 
   Sample mixin:
{%highlight js%}
/**
 * @author aakimov
 */
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

3.  To add an extension attribute to address model on the server side, add the <YourModule_dir>/etc/extension_attributes.xml file

<?xml version="1.0"?>
<!--
/**
 * @author aakimov
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Quote\Api\Data\AddressInterface">
        <attribute code="custom_field" type="string" />
    </extension_attributes>
</config>

## Access the value of the field
If you took all the steps described in the previous paragraph, 
Magento will generate interface that includes your custom attribute and you can access your field value like this:

    $value = $address->getExtensionAttributes()->getCustomField();
