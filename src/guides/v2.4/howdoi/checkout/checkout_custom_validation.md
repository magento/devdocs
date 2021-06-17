---
layout: tutorial
group: how-do-i
subgroup:
title: Add custom validation rules to checkout address form
subtitle: Customize Checkout
menu_order: 101
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

This topic describes how to add custom address validation in to the Magento checkout.  By default it has own set of validations for the address fields in the checkout step. But sometimes you may want to add some custom validations in to the different address fields. Some examples may be like limiting the character limit in the firstname and lastname of shipping and billing address.

To change existing address validations to the Magento checkout, do the following steps:

## Step 1: Create a new module

```bash
cd <magento2_root>/app/code
```

```bash
mkdir Vendor
```

```bash
mkdir Vendor/AddressRestriction
```

Now, create two files:

`etc/module.xml`

{% collapsible Show code %}

```xml
<?xml version="1.0"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
  <module name="Vendor_AddressRestriction" setup_version="0.0.1">
  </module>
</config>
```

{% endcollapsible %}

`registration.php`

{% collapsible Show code %}

```php?start_inline=1
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Vendor_AddressRestriction',
    __DIR__
);
```

{% endcollapsible %}

## Step 2 Create a di.xml file.

Create the file `app/code/Vendor/AddressRestriction/etc/di.xml`:

```php?start_inline=1
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Checkout\Block\Checkout\LayoutProcessor">
        <plugin name="Vendor_AddressRestriction_Checkout" type="Vendor\AddressRestriction\Block\LayoutProcessor" sortOrder="100"/>
    </type>
</config>
```

## Step 3 Adding validation to Shipping Address

Create the `app/code/Vendor/AddressRestriction/Block/LayoutProcessor.php`;
    
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
    array $jsLayout
    ) {
        // Firstname
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['firstname']['validation']['max_text_length'] = 20;

        // Lastname
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['lastname']['validation']['max_text_length'] = 20;

        // Company name
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['company']['validation']['max_text_length'] = 31;

        // City
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['city']['validation']['max_text_length'] = 31;

        // Region
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['region']['validation']['max_text_length'] = 21;

        // Country
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['country_id']['validation']['max_text_length'] = 31;

        // Postcode
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']['children']['postcode']['validation']['max_text_length'] = 13;

        // Street address
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
                ['shippingAddress']['children']['shipping-address-fieldset']
                ['children']['street']['children'][0]['validation']['max_text_length'] = 40;

        return $jsLayout;
    }
}   
```

## Step 4 Adding validation to Billing Address

```php?start_inline=1
$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['firstname']['validation']['max_text_length'] = 20;

// Lastname
$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['lastname']['validation']['max_text_length'] = 20;

// Company name
$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['company']['validation']['max_text_length'] = 31;

// City
$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['city']['validation']['max_text_length'] = 31;

// Region
$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['region']['validation']['max_text_length'] = 21;

// Country
$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['country_id']['validation']['max_text_length'] = 31;

// Postcode
$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['postcode']['validation']['max_text_length'] = 13;

// Street address
$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']
        ['children']['street']['children'][0]['validation']['max_text_length'] = 40;
        
```

## Step 5 Now install the new module like

1. Install the module:
    
    ```bash
    bin/magento setup:upgrade
    ```

1. Compile the code with:

    ```bash
    bin/magento setup:di:compile
    ```

1. Next, deploy static content:

   ```bash
   bin/magento setup:static-content:deploy
   ```
