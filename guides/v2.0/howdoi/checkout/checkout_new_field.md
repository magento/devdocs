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
{:.no_toc}

This topic describes how to add a new field to default checkout forms: shipping address or billing address form. For illustration we use a case of adding a field to the shipping address form. 

**Contents**

* TOC
{:toc}

## Add the field to layout and processing models

**Step 1**

Add the field to layout. Both shipping address and billing address forms are [generated dynamically]({{page.baseurl}}howdoi/checkout/checkout_form.html#dynamic_form). So to modify its layout, you need to create a [plugin]({{page.baseurl}}extension-dev-guide/plugins.html) for the `\Magento\Checkout\Block\Checkout\LayoutProcessor::process` method. 

Following is a sample logic for a plugin method adding a field named `Custom Attribute` to the shipping address form:

{%highlight php%}
<?php
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

This way, your field is added to the `customAttributes` property of `'Magento_Checkout/js/model/new-customer-address.js`, a JS object that lists all predefined address attributes and matches the corresponding server-side interface `\Magento\Quote\Api\Data\AddressInterface`. The `customAttributes` property was designed to contain custom EAV address attributes and is related to `\Magento\Quote\Model\Quote\Address\CustomAttributeListInterface::getAttributes` method. The code above will automatically handle local storage persistence on frontend.


**Step 2**

Add a JS mixin to change the behavior of the component responsible for the data submission to the server-side. 
There is no mandatory requirements for the mixin file name and location. If you want it to be consisted with Magento approach, place the mixin in the `view/frontend/web/js/` directory in your custom module.


Following is a sample mixin modifying the behavior of `Magento_Checkout/js/action/set-shipping-information` (this component is responsible for data submission between shipping and billing checkout steps):
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

When adding a field to the billing address form, you need to modify the behavior of one of the following components: `Magento_Checkout/js/action/place-order` or `Magento_Checkout/js/action/set-payment-information`, depending on when do you need the custom field valued to be passed to the server-side. For example of a mixin, modifying one of these components, see the [place-order-mixin.js]({{site.mage2100url}}app/code/Magento/CheckoutAgreements/view/frontend/web/js/model/place-order-mixin.js) in the Magento_CheckoutAgreements module.

**Step 3**

Tell Magento to load your mixin for the corresponding JS component. For this, in the `<YourModule_dir>/view/frontend/` directory, add the `requirejs-config.js`.

Following is a sample of such `requirejs-config.js` for the sample mixin added in the Step 2:

{%highlight js%}

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-shipping-information': {
                '<YourNamespace_YourModule>/js/action/set-shipping-information-mixin': true
            }
        }
    }
};
{%endhighlight%}


**Step 4**

To add an extension attribute to the address model on the server-side, add the `extension_attributes.xml` file in the `<YourModule_dir>/etc/` directory.

Following is a sample `extension_attributes.xml`:

{%highlight xml%}
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Quote\Api\Data\AddressInterface">
        <attribute code="custom_field" type="string" />
    </extension_attributes>
</config>
{%endhighlight%}

## Access the value of the custom field
If you took all the steps described in the previous paragraphs, 
Magento will generate the interface that includes your custom attribute and you can access your field value like this:

    $value = $address->getExtensionAttributes()->getCustomField();

## Related reading

- [EAV and extension attributes]({{page.baseurl}}extension-dev-guide/attributes.html) 
