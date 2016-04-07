---
layout: default
group: howdoi
subgroup: product-create-page
title: Customize Product Creation Form
menu_title: Customize Product Creation Form 
menu_node: parent
menu_order: 1
github_link: howdoi/customize_product.md
---

<h2>What's in this topic</h2>

This topic describes how developers can customize the product creation form used on the New Product page in Admin. In the default Magento installation the page opens on **Add Product** click, for example from **PRODUCTS** > **CATALOG**. 

**Contents**

* TOC
{:toc}

## Overview

In Magento 2.1 the product creation form was completely refactored. Now it is implemented usign the [form UI component]({{site.gdeurl21}}ui-components/ui-form.html). 

In the Admin, product attributes and attribute sets can be customized and added under **STORES** > **Attributes**. 

But you can also customize the form code using the following approaches:

* Add your customization statically in the form configuration file.
* Create a modifier class to perform customization dynamically.


In this section we'll describe how customization of product form can be done on example of Magento_CatalogInventory module.
It uses both methods: declarative xml and modifiers classes for data and metadata.

## Prerequisites

[Set Magento to developer mode]({{site.gdeurl21}}config-guide/cli/config-cli-subcommands-mode.html) while you perform all customizations and debugging.

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code. Instead, add your customizations in a separate module. 

## Customize using xml configuration

Declarative method is preferable for customizations like introducing new fields, field sets and modals.

To customize the product creation form, take the following steps: 

1. In your custom module, add an empty `product_form.xml` in the `<your_module_dir>/view/adminhtml/ui_component/` directory.

2. Add content similar to the following:

{%highlight xml%} 
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">

...

    <fieldset name="%fieldset_name%">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="label" xsi:type="string" translate="true">%Fieldset Label as displayed in UI%</item>
                <item name="sortOrder" xsi:type="number">%order for displaying%</item>
            </item>
         </argument>
        <!--Field sets can be nested --> 
        <fieldset name="%nested_fieldset_name%">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="label" xsi:type="string" translate="true">%Nested fieldset Label as displayed in UI%</item>
                    <item name="collapsible" xsi:type="boolean">true</item>
                    <!-- Nesting level, the value should correspond to the actual nesting level in the config xml file. For the top field set level = 0 -->
                    <item name="level" xsi:type="number">%level of nesting%</item>
                </item>
            </argument>  
            <field name="%field_name%">
    			<argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array"
                        <item name="%field_option1%" xsi:type="%option_type%">%value%</item>
                        <item name="%field_option2%" xsi:type="%option_type%">%value%</item>
....
                    </item>
                </argument>
            </field>
        </fieldset>
    </fieldset>
...
</form>
{%endhighlight%}

Your `product_form.xml` is merged with the same files from the other modules. So there is no need to copy their content, you only need to add your customizations.

To customize an existing entity, declare only those options, the values of which are customized, do not copy its entire configuration. 

To delete an existing field, or field set, in your `product_form.xml` use the following syntax:

{%highlight xml%}
...
    <fieldset name="%fieldset_name%">
        <argument name="data" xsi:type="array">
            <item name="disabled" xsi:type="boolean">true</item>
        </argument>
    </fieldset> 
...
{%endhighlight%}

For reference, view the product form configuration files of the Magento modules:

- `<Magento_Catalog_module_dir>/view/adminhtml/ui_component/product_form.xml`
- `<Magento_CatalogInventory_module_dir>/view/adminhtml/ui_component/product_form.xml`
- `<Magento_ConfigurableProduct_module_dir>view/adminhtml/ui_component/product_form.xml`

## Customize using a modifier class

Modifier classes should be used when static declaration is not applicable. For example, in cases when additional data should be loaded from DB.

In the run time, meta and data information set in modifier is merged with meta/data that comes from the `product_form.xml` configuration.

### General implementation overview

The `Magento\Catalog\Ui\DataProvider\Product\Form\ProductDataProvider` data provider class responsible for data and metadata preparation for the product form. The pool of modifiers `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool` (virtual type) is injected to this data provider using the `__construct()` method. Its preference is defined in `di.xml`.

### Add your modifier class

To add your custom modifier:

1. In your custom module directory, add the modifier class that implements the `Magento\Ui\DataProvider\Modifier` interface or extends `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier`. In your class, the `modifyData()` and/or `modifyMeta()` must be implemented.

In the modifier class, you can add UI elements using the same structure as in the xml configuration.

For example:
{%highlight php%}
<?php

use Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\AbstractModifier;

class Example extends AbstractModifier
{
    public function modifyMeta(array $meta)
    {
        $meta['test_fieldset_name'] = [
            'arguments' => [
                'data' => [
                    'config' => [
                        'label' => __('Label For Fieldset'),
                        'sortOrder' => 50,
                        'collapsible' => true
                    ]
                ]
            ],
            'children' => [
                'test_field_name' => [
                    'arguments' => [
                        'data' => [
                            'config' => [
                                'formElement' => 'select',
                                'componentType' => 'field',
                                'options' => [
                                    ['value' => 'test_value_1', 'label' => 'Test Value 1'],
                                    ['value' => 'test_value_2', 'label' => 'Test Value 2'],
                                    ['value' => 'test_value_3', 'label' => 'Test Value 3'],
                                ],
                                'visible' => 1,
                                'required' => 1,
                                'label' => __('Label For Element')
                            ]
                        ]
                    ]
                ]
            ]
        ];

 return $meta;
    }

    /**
     * {@inheritdoc}
     */
    public function modifyData(array $data)
    {
        return $data;
    }
}
{%endhighlight%}


You can create nested structures of elements by adding them to "children" key of any element.

The configuration you add in `@meta` and `@data` is merged with the configuration from `product_form.xml`.

2. In `<your_module_dir>/etc/adminhtml/di.xml` define your modifier as a dependency for `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool`.


Example of how custom modifier can be added in `di.xml` of module:

`app/code/Magento/CatalogInventory/etc/adminhtml/di.xml`:

{%highlight xml%}
     <virtualType name="Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool">
        <arguments>
            <argument name="modifiers" xsi:type="array">
                <item name="advancedInventory" xsi:type="array">
                    <item name="class" xsi:type="string">Magento\CatalogInventory\Ui\DataProvider\Product\Form\Modifier\AdvancedInventory</item>
                    <item name="sortOrder" xsi:type="number">20</item>
                </item>
            </argument>
        </arguments>
    </virtualType>
{%endhighlight%}

The `sortOrder` parameter defines the order of invocation for your `modifyData()` and `modifyMeta()` methods among other modifiers in the pool. If a modifier is first in a pool, its `modifyData()` and `modifyMeta()` are invoced with empty arguments. 

To access product model within your modifier it's recommended to use an instance of `Magento\Catalog\Model\Locator\LocatorInterface`.


For reference, view the modifier of the Magento modules, for example:

- `<Magento_Catalog_module_dir>/Ui/DataProvider/Product/Form/Modifier/AdvancedPricing.php`
- `<Magento_Catalog_module_dir>/Ui/DataProvider/Product/Form/Modifier/AttributeSet.php`
- `<Magento_Catalog_module_dir>/Ui/DataProvider/Product/Form/Modifier/Eav.php`
- `<Magento_ConfigurableProduct_module_dir>/Ui/DataProvider/Product/Form/Modifier/Data/AssociatedProducts.php`


## Recommended reading:
 - [Dependency injection]({{site.gdeurl21}}extension-dev-guide/depend-inj.html)