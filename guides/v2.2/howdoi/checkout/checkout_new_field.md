---
layout: tutorial
group: how-do-i
subgroup:
title: Add a new field in address form
subtitle: Customize Checkout
menu_order: 9
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

You can add new fields to default {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} forms, such as shipping address or billing address forms. To illustrate this ability, this topic describes adding a field to the shipping address form.

To add your custom field to the checkout address form and access its value on the client side:

1. [Add the field to layout](#add).
2. [Add a JS mixin to modify data submission](#mixin).
3. [Load your mixin](#load_mixin).
4. [Add the field to address model](#field).
5. [Access the value of the custom field on server side](#access).

## Step 1: Add the field to layout {#add}

Both shipping address and billing address forms are [generated dynamically]({{ page.baseurl }}/howdoi/checkout/checkout_form.html#dynamic_form). To modify their layouts, create a [plugin]({{ page.baseurl }}/extension-dev-guide/plugins.html) for the `\Magento\Checkout\Block\Checkout\LayoutProcessor::process` method and declare it in the `di.xml` file in your module.

The following code snippet enumerates sample logic for adding a field named `Custom Attribute` to the shipping address form:

```php?start_inline=1
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
```

Via the previous example, the field is added to the `customAttributes` property of `'Magento_Checkout/js/model/new-customer-address.js`, a JavaScript object that lists all predefined address attributes and matches the corresponding server-side interface `\Magento\Quote\Api\Data\AddressInterface`.

The `customAttributes` property was designed to contain custom EAV address attributes and is related to the `\Magento\Quote\Model\Quote\Address\CustomAttributeListInterface::getAttributes` method. The sample code above will automatically handle local storage persistence on the {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %}.

Optionally, instead of adding a plugin, you can use a [dependency injection (DI)]({{ page.baseurl }}/extension-dev-guide/depend-inj.html). To use a DI, add the `LayoutProcessor`, which adds the custom field to the address form class, to the `<your_module_dir>/Block/Checkout/` directory. The class must implement the `\Magento\Checkout\Block\Checkout\LayoutProcessorInterface` interface. Use the code sample above as an example of the `\Magento\Checkout\Block\Checkout\LayoutProcessorInterface::process()` method implementation.

To add your `LayoutProcessor` class the corresponding pool of processors, specify the following (where `%unique_name%` and `%path\to\your\LayoutProcessor%` must be replaced by your real values) in the `<your_module_dir>/etc/frontend/di.xml` file:

```xml
<type name="Magento\Checkout\Block\Onepage">
        <arguments>
            <argument name="layoutProcessors" xsi:type="array">
                <item name="%unique_name%" xsi:type="object">%path\to\your\LayoutProcessor%</item>
            </argument>
        </arguments>
</type>
```

## Step 2: Add a JS mixin to modify data submission {#mixin}

Add a JS {% glossarytooltip 1a305bdb-9be8-44aa-adad-98758821d6a7 %}mixin{% endglossarytooltip %}, to the {% glossarytooltip ebe2cd14-d6d4-4d75-b3d7-a4f2384e5af9 %}server side{% endglossarytooltip %}, to change the behavior of the component responsible for the data submission.

In your custom module, define a mixin as a separate AMD module that returns a callback function. Add the mixin file anywhere in the `<your_module_dir>/view/frontend/web` directory. There are no strict requirements for the mixin file naming.

The following code sample is a sample mixin modifying the behavior of `Magento_Checkout/js/action/set-shipping-information`, the component responsible for data submission between shipping and billing checkout steps:

```js
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
```

When adding a field to the billing address form, you must modify the behavior of the `Magento_Checkout/js/action/place-order` or `Magento_Checkout/js/action/set-payment-information` component, depending on when do you need the custom field valued to be passed to the server side.

To see an example of a mixing that modifies one of these components, see the [place-order-mixin.js]({{ site.mage2100url }}app/code/Magento/CheckoutAgreements/view/frontend/web/js/model/place-order-mixin.js) in the Magento_CheckoutAgreements {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.

## Step 3: Load your mixin {#load_mixin}

Tell Magento to load your mixin for the corresponding JS component by adding the `requirejs-config.js` to the `<YourModule_dir>/view/frontend/` directory.

The following code sample shows an example utilizing the sample mixin added earlier:

```js
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-shipping-information': {
                '<YourNamespace_YourModule>/js/action/set-shipping-information-mixin': true
            }
        }
    }
};
```

## Step 4: Add field to address model {#field}

To add the field to the address model on the server side, add the `extension_attributes.xml` file in the `<YourModule_dir>/etc/` directory.

The following code is an example of an `extension_attributes.xml` file:

```xml
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="Magento\Quote\Api\Data\AddressInterface">
        <attribute code="custom_field" type="string" />
    </extension_attributes>
</config>
```

Clear the `var/generated/code` directory when you run the `setup:di:compile` command. New getter and setter methods will be added in `/var/generated/code/Magento/Quote/Api/Data/AddressInterface.php` file.

## Step 5: Access the value of the custom field on server side {#access}

If you completed all the steps described in the previous sections, Magento will generate the interface that includes your custom attribute and you can access your field value.

You can set/get these attributes values by creating an instance of the  `Magento/Quote/Api/Data/AddressInterface.php interface`.

```php
$objectManager = \Magento\Framework\App\ObjectManager::getInstance();
$addressInformation = $objectManager->create('Magento\Checkout\Api\Data\ShippingInformationInterface');
$extAttributes = $addressInformation->getExtensionAttributes();
$selectedShipping = $extAttributes->getCustomShippingCharge(); //get custom attribute data.
```

### Related topics

- [EAV and extension attributes]({{ page.baseurl }}/extension-dev-guide/attributes.html)
