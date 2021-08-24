---
layout: tutorial
group: how-do-i
subgroup:
title: Add custom validation rules to checkout address form
contributor_name: Ziffity
contributor_link: https://www.ziffity.com/
subtitle: Customize Checkout
menu_order: 110
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

This topic describes how to add custom address validation to the Magento checkout.  By default it has own set of validations for the address fields in the checkout step. But sometimes you may want to add some custom validations to the different address fields. One example may be limiting the character limit in the firstname and lastname of the shipping and billing addresses.

To change the existing address validations to the Magento checkout, do the following steps:

1. [Create a new module](#create-module).
1. [Create a di.xml file](#add-dixml-file).
1. [Adding validation to the Shipping Address](#add-shipping-validation).
1. [Adding validation to the Billing Address](#add-billing-validation).

## Step 1: Create a new module {#create-module}

[Create a new module](https://devdocs.magento.com/videos/fundamentals/create-a-new-module/) named `Vendor/AddressRestriction` and register it.

## Step 2: Create a di.xml file {#add-dixml-file}

Create the file `app/code/Vendor/AddressRestriction/etc/di.xml`:

```php?start_inline=1
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Checkout\Block\Checkout\LayoutProcessor">
        <plugin name="Vendor_AddressRestriction_Checkout" type="Vendor\AddressRestriction\Block\LayoutProcessor" sortOrder="100"/>
    </type>
</config>
```

## Step 3: Add validation for the shipping address {#add-shipping-validation}

Create the file `app/code/Vendor/AddressRestriction/Block/LayoutProcessor.php`:

```php?start_inline=1
<?php
namespace Vendor\AddressRestriction\Block;

class LayoutProcessor
{
    /**
    * @param \Magento\Checkout\Block\Checkout\LayoutProcessor $subject
    * @param array $jsLayout
    * @return array
    */
    public function afterProcess(
    \Magento\Checkout\Block\Checkout\LayoutProcessor $subject,
    array $jsLayout,
    array $fields
    ) {
        // Firstname
        $fields = $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['firstname']['validation']['max_text_length'] = 20;

        // Lastname
        $fields = $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['lastname']['validation']['max_text_length'] = 20;

        // Company name
        $fields = $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['company']['validation']['max_text_length'] = 31;

        // City
        $fields = $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['city']['validation']['max_text_length'] = 31;

        // Region
        $fields = $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['region']['validation']['max_text_length'] = 21;

        // Country
        $fields = $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['country_id']['validation']['max_text_length'] = 31;

        // Postcode
        $fields = $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['postcode']['validation']['max_text_length'] = 13;

        // Street address
        $fields = $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']
                ['children']['street']['children'][0]['validation']['max_text_length'] = 40;

        return $fields;
    }
}
```

## Step 4: Add validation for the billing address {#add-billing-validation}

```php?start_inline=1
$fields = $jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['firstname']['validation']['max_text_length'] = 20;

// Lastname
$fields = $jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['lastname']['validation']['max_text_length'] = 20;

// Company name
$fields = $jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['company']['validation']['max_text_length'] = 31;

// City
$fields = $jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['city']['validation']['max_text_length'] = 31;

// Region
$fields = $jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['region']['validation']['max_text_length'] = 21;

// Country
$fields = $jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['country_id']['validation']['max_text_length'] = 31;

// Postcode
$fields = $jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['postcode']['validation']['max_text_length'] = 13;

// Street address
$fields = $jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']
        ['children']['street']['children'][0]['validation']['max_text_length'] = 40;
```
