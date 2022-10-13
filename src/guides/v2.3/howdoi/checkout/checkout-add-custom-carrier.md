---
layout: tutorial
group: how-do-i
subgroup:
title: Add custom shipping carrier
subtitle: Customize Checkout
contributor_name: Atwix
contributor_link: https://www.atwix.com/
menu_order: 5
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

This topic describes how to add a custom shipping carrier.

To add a new shipping carrier to the Magento checkout:

1. [Create a new module](#create-module)
1. [Add the carrier configuration](#create-configuration)
1. [Create the carrier model](#carrier-model)
1. [Enable the module](#enable-module)

## Step 1: Create a new module {#create-module}

The example module for use here is `Vendor_CustomShipping`.

### Source code of `app/code/Vendor/CustomShipping/registration.php`

```php
<?php

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    'Vendor_CustomShipping',
    __DIR__
);

```

### Source code of `app/code/Vendor/CustomShipping/composer.json`

```json
{
    "name": "vendor/custom-shipping",
    "description": "Custom shipping module",
    "require": {
        "php": "~7.2.0||~7.3.0",
        "magento/framework": "102.0.*",
        "magento/module-backend": "101.0.*",
        "magento/module-catalog": "103.0.*",
        "magento/module-config": "101.1.*",
        "magento/module-directory": "100.3.*",
        "magento/module-quote": "101.1.*",
        "magento/module-sales": "102.0.*",
        "magento/module-sales-rule": "101.1.*",
        "magento/module-shipping": "100.3.*",
        "magento/module-store": "101.0.*"
    },
    "type": "magento2-module",
    "license": [
        "OSL-3.0",
        "AFL-3.0"
    ],
    "autoload": {
        "files": [
            "registration.php"
        ],
        "psr-4": {
            "Vendor\\CustomShipping\\": ""
        }
    },
    "version": "1.0.0"
}
```

### Source code of `app/code/Vendor/CustomShipping/etc/module.xml`

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Vendor_CustomShipping" >
        <sequence>
            <module name="Magento_Store"/>
            <module name="Magento_Sales"/>
            <module name="Magento_Quote"/>
            <module name="Magento_SalesRule"/>
        </sequence>
    </module>
</config>
```

## Step 2: Add the module configuration {#create-configuration}

To add a module configuration use the following source code snippets.

### Source code of `app/code/Vendor/CustomShipping/etc/adminhtml/system.xml`

The `system.xml` source code declares custom shipping module options:

-  Enabled
-  Title
-  Method Name
-  Shipping Cost
-  Ship to Applicable Countries
-  Ship to Specific Countries
-  Show Method if Not Applicable
-  Sort Order

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Config:etc/system_file.xsd">
    <system>
        <section id="carriers" translate="label" type="text" sortOrder="320" showInDefault="1" showInWebsite="1" showInStore="1">
            <group id="customshipping" translate="label" type="text" sortOrder="900" showInDefault="1" showInWebsite="1" showInStore="1">
                <label>Custom Shipping Module</label>
                <field id="active" translate="label" type="select" sortOrder="10" showInDefault="1" showInWebsite="1" showInStore="0" canRestore="1">
                    <label>Enabled</label>
                    <source_model>Magento\Config\Model\Config\Source\Yesno</source_model>
                </field>
                <field id="title" translate="label" type="text" sortOrder="20" showInDefault="1" showInWebsite="1" showInStore="0">
                    <label>Title</label>
                </field>
                <field id="name" translate="label" type="text" sortOrder="30" showInDefault="1" showInWebsite="1" showInStore="0">
                    <label>Method Name</label>
                </field>
                <field id="shipping_cost" translate="label" type="text" sortOrder="40" showInDefault="1" showInWebsite="1" showInStore="0" >
                    <label>Shipping Cost</label>
                    <validate>validate-number validate-zero-or-greater</validate>
                </field>
                <field id="sallowspecific" translate="label" type="select" sortOrder="60" showInDefault="1" showInWebsite="1" showInStore="0" canRestore="1">
                    <label>Ship to Applicable Countries</label>
                    <frontend_class>shipping-applicable-country</frontend_class>
                    <source_model>Magento\Shipping\Model\Config\Source\Allspecificcountries</source_model>
                </field>
                <field id="specificcountry" translate="label" type="multiselect" sortOrder="70" showInDefault="1" showInWebsite="1" showInStore="0">
                    <label>Ship to Specific Countries</label>
                    <source_model>Magento\Directory\Model\Config\Source\Country</source_model>
                    <can_be_empty>1</can_be_empty>
                </field>
                <field id="showmethod" translate="label" type="select" sortOrder="80" showInDefault="1" showInWebsite="1" showInStore="0">
                    <label>Show Method if Not Applicable</label>
                    <source_model>Magento\Config\Model\Config\Source\Yesno</source_model>
                    <frontend_class>shipping-skip-hide</frontend_class>
                </field>
                <field id="sort_order" translate="label" type="text" sortOrder="90" showInDefault="1" showInWebsite="1" showInStore="0">
                    <label>Sort Order</label>
                </field>
            </group>
        </section>
    </system>
</config>
```

### Source code of `app/code/Vendor/CustomShipping/etc/config.xml`

The `config.xml` file specifies default values for custom shipping module options and the shipping module model, `Vendor\CustomShipping\Model\Carrier\Customshipping`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <carriers>
            <customshipping>
                <active>0</active>
                <title>Custom Shipping Title</title>
                <name>Custom Shipping Method Name</name>
                <shipping_cost>10</shipping_cost>
                <sallowspecific>0</sallowspecific>
                <sort_order>15</sort_order>
                <model>Vendor\CustomShipping\Model\Carrier\Customshipping</model>
            </customshipping>
        </carriers>
    </default>
</config>
```

## Step 3: Create the carrier model {#carrier-model}

In this example, the `Vendor\CustomShipping\Model\Carrier\Customshipping` class is a skeleton of a carrier model. You can extend it to fit your needs.

The carrier class implements the `CarrierInterface` interface and retrieves all available shipping methods in the `getAllowedMethods` function. The `collectRates` function returns the `\Magento\Shipping\Model\Rate\Result` object if the carrier method is available on checkout. Otherwise, it returns `false`---the carrier method is not applicable to the shopping cart.

### Source code of `app/code/Vendor/CustomShipping/Model/Carrier/Customshipping.php`

```php
<?php

namespace Vendor\CustomShipping\Model\Carrier;

use Magento\Quote\Model\Quote\Address\RateRequest;
use Magento\Shipping\Model\Carrier\AbstractCarrier;
use Magento\Shipping\Model\Carrier\CarrierInterface;

/**
 * Custom shipping model
 */
class Customshipping extends AbstractCarrier implements CarrierInterface
{
    /**
     * @var string
     */
    protected $_code = 'customshipping';

    /**
     * @var bool
     */
    protected $_isFixed = true;

    /**
     * @var \Magento\Shipping\Model\Rate\ResultFactory
     */
    private $rateResultFactory;

    /**
     * @var \Magento\Quote\Model\Quote\Address\RateResult\MethodFactory
     */
    private $rateMethodFactory;

    /**
     * @param \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig
     * @param \Magento\Quote\Model\Quote\Address\RateResult\ErrorFactory $rateErrorFactory
     * @param \Psr\Log\LoggerInterface $logger
     * @param \Magento\Shipping\Model\Rate\ResultFactory $rateResultFactory
     * @param \Magento\Quote\Model\Quote\Address\RateResult\MethodFactory $rateMethodFactory
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig,
        \Magento\Quote\Model\Quote\Address\RateResult\ErrorFactory $rateErrorFactory,
        \Psr\Log\LoggerInterface $logger,
        \Magento\Shipping\Model\Rate\ResultFactory $rateResultFactory,
        \Magento\Quote\Model\Quote\Address\RateResult\MethodFactory $rateMethodFactory,
        array $data = []
    ) {
        parent::__construct($scopeConfig, $rateErrorFactory, $logger, $data);

        $this->rateResultFactory = $rateResultFactory;
        $this->rateMethodFactory = $rateMethodFactory;
    }

    /**
     * Custom Shipping Rates Collector
     *
     * @param RateRequest $request
     * @return \Magento\Shipping\Model\Rate\Result|bool
     */
    public function collectRates(RateRequest $request)
    {
        if (!$this->getConfigFlag('active')) {
            return false;
        }

        /** @var \Magento\Shipping\Model\Rate\Result $result */
        $result = $this->rateResultFactory->create();

        /** @var \Magento\Quote\Model\Quote\Address\RateResult\Method $method */
        $method = $this->rateMethodFactory->create();

        $method->setCarrier($this->_code);
        $method->setCarrierTitle($this->getConfigData('title'));

        $method->setMethod($this->_code);
        $method->setMethodTitle($this->getConfigData('name'));

        $shippingCost = (float)$this->getConfigData('shipping_cost');

        $method->setPrice($shippingCost);
        $method->setCost($shippingCost);

        $result->append($method);

        return $result;
    }

    /**
     * @return array
     */
    public function getAllowedMethods()
    {
        return [$this->_code => $this->getConfigData('name')];
    }
}
```

## Step 4: Enable the module {#enable-module}

Run the commands below to register `Vendor_CustomShipping` module:

```bash
bin/magento module:enable Vendor_CustomShipping
```

```bash
bin/magento setup:upgrade
```

## Screenshots

The backend settings for the custom shipping carrier appear as shown below.

![Custom shipping carrier backend settings]({{ page.baseurl }}/howdoi/checkout/images/checkout-add-custom-carrier-01.png)

The custom shipping carrier will appear on checkout as shown below.

![Custom shipping carrier on checkout]({{ page.baseurl }}/howdoi/checkout/images/checkout-add-custom-carrier-02.png)
