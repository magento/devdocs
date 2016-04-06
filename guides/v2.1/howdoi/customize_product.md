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

1. In your custom module, add an empty `product_form.xml` in the `<your_module_dir>/view/adminhtml/ui_component/`.

All you need to do - is create file of UI form at path Vendor/ModuleName/view/adminhtml/ui_component/product_form.xml.
All that you declare in own file will be merged with one that declared in Catalog module (Magento/Catalog/view/adminhtml/ui_component/product_form.xml).
As you can see - mechanism is very similar to layouts merging.
By the way this method works for all UI forms and listings that exist in Magento.

Here, we'll discover product form extension on example of CatalogInventory module.

CatalogInventory/view/adminhtml/ui_component/product_form.xml:

{%highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <modal name="advanced_inventory_modal">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
               <!-- modal configuration -->
            </item>
        </argument>
        <fieldset name="stock_data">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="label" xsi:type="string"/>
                    <item name="dataScope" xsi:type="string"/>
                </item>
            </argument>
            <container name="container_manage_stock">
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <!-- container config -->
                    </item>
                </argument>
                <field name="manage_stock">
                    <argument name="data" xsi:type="array">
                        <item name="config" xsi:type="array">
                            <item name="formElement" xsi:type="string">select</item>
                            <item name="dataScope" xsi:type="string">manage_stock</item>
                            <item name="value" xsi:type="object">Magento\CatalogInventory\Model\Source\StockConfiguration</item>
                        </item>
                        <item name="options" xsi:type="object">Magento\Config\Model\Config\Source\Yesno</item>
                    </argument>
                </field>
                <!-- other fields -->
            </container>
        </fieldset>
        <!-- other fieldsets and fields -->
    </modal>
</form>
{%endhighlight%}

Summarizing, in this method you only need to create product_form.xml in your module with custom declarations of UI elements.

<div class="bs-callout bs-callout-tip">
  <p>See also extension of product form in ConfigurableProduct module</p>
</div>

## Customize using a modifier class
Modifier classes should be used when static declaration is not applicable. For example, meta structure of form can vary significantly depending
on product type, attribute set, ACL, additional data that should be loaded from DB according to meta structure and vice a versa -
additional meta should be declared dynamically according to DB data and structure.

Class responsible for data and metadata preparation for product form is `Magento\Catalog\Ui\DataProvider\Product\Form\ProductDataProvider`.
Modifiers pool `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool` (virtual type) is injected to it using `__construct()` method
and preference for it is defined in di.xml. All modifiers that are located in pool are added to it via di.xml.
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

The `sortOrder` parameter defines order of invocation (of methods `modifyData()`, `modifyMeta()`) among other modifiers in pool.

Code of Modifier class:

`Magento\CatalogInventory\Ui\DataProvider\Product\Form\Modifier\AdvancedInventory`:

{%highlight php%}
...

use Magento\Catalog\Model\Locator\LocatorInterface;
use Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\AbstractModifier;
use Magento\CatalogInventory\Api\StockRegistryInterface;
use Magento\CatalogInventory\Model\Source\Stock;
use Magento\Framework\Stdlib\ArrayManager;

class AdvancedInventory extends AbstractModifier
{
    const STOCK_DATA_FIELDS = 'stock_data';

    /**
     * @var LocatorInterface
     */
    protected $locator;

    /**
     * @var StockRegistryInterface
     */
    private $stockRegistry;

    /**
     * @var Stock
     */
    private $stock;

    /**
     * @var ArrayManager
     */
    protected $arrayManager;

    /**
     * @var array
     */
    protected $meta = [];

     ...

    public function modifyData(array $data)
    {
        $fieldCode = 'quantity_and_stock_status';

        $model = $this->locator->getProduct();
        $modelId = $model->getId();

        $stockItem = $this->stockRegistry->getStockItem(
            $modelId,
            $model->getStore()->getWebsiteId()
        );

        $stockData = $stockItem->getData();
        if (!empty($stockData)) {
            $data[$modelId][self::DATA_SOURCE_DEFAULT][self::STOCK_DATA_FIELDS] = $stockData;
        }
        if (isset($stockData['is_in_stock'])) {
            $data[$modelId][self::DATA_SOURCE_DEFAULT][$fieldCode]['is_in_stock'] =
                (int)$stockData['is_in_stock'];
        }

        return $this->prepareStockData($data);
    }

    protected function prepareStockData(array $data)
    {
        $productId = $this->locator->getProduct()->getId();
        $stockDataFields = [
            'qty_increments',
            'min_qty',
            'min_sale_qty',
            'max_sale_qty',
            'notify_stock_qty',
        ];

        foreach ($stockDataFields as $field) {
            if (isset($data[$productId][self::DATA_SOURCE_DEFAULT][self::STOCK_DATA_FIELDS][$field])) {
                $data[$productId][self::DATA_SOURCE_DEFAULT][self::STOCK_DATA_FIELDS][$field] =
                    (float)$data[$productId][self::DATA_SOURCE_DEFAULT][self::STOCK_DATA_FIELDS][$field];
            }
        }

        return $data;
    }

    public function modifyMeta(array $meta)
    {
        $this->meta = $meta;
        $this->prepareMeta();
        return $this->meta;
    }

    private function prepareMeta()
    {
        $fieldCode = 'quantity_and_stock_status';
        $pathField = $this->arrayManager->findPath($fieldCode, $this->meta, null, 'children');

        if ($pathField) {
            $labelField = $this->arrayManager->get(
                $this->arrayManager->slicePath($pathField, 0, -2) . '/arguments/data/config/label',
                $this->meta
            );
            $fieldsetPath = $this->arrayManager->slicePath($pathField, 0, -4);

            $this->meta = $this->arrayManager->merge(
                $pathField . '/arguments/data/config',
                $this->meta,
                [
                    'label' => __('Stock Status'),
                    'value' => '1',
                    'dataScope' => $fieldCode . '.is_in_stock',
                    'scopeLabel' => '[GLOBAL]',
                ]
            );
            $this->meta = $this->arrayManager->merge(
                $this->arrayManager->slicePath($pathField, 0, -2) . '/arguments/data/config',
                $this->meta,
                [
                    'label' => __('Stock Status'),
                    'scopeLabel' => '[GLOBAL]',
                ]
            );

            $container['arguments']['data']['config'] = [
                'formElement' => 'container',
                'componentType' => 'container',
                'component' => "Magento_Ui/js/form/components/group",
                'label' => $labelField,
                'breakLine' => false,
                'dataScope' => $fieldCode,
                'scopeLabel' => '[GLOBAL]',
                'source' => 'product_details',
                'sortOrder' =>
                    (int) $this->arrayManager->get(
                        $this->arrayManager->slicePath($pathField, 0, -2) . '/arguments/data/config/sortOrder',
                        $this->meta
                    ) - 1,
            ];
            $qty['arguments']['data']['config'] = [
                'component' => 'Magento_CatalogInventory/js/components/qty-validator-changer',
                'dataType' => 'number',
                'formElement' => 'input',
                'componentType' => 'field',
                'visible' => '1',
                'require' => '0',
                'additionalClasses' => 'admin__field-small',
                'dataScope' => 'qty',
                'validation' => [
                    'validate-number' => true,
                    'validate-digits' => true,
                ],
                'imports' => [
                    'handleChanges' => '${$.provider}:data.product.stock_data.is_qty_decimal',
                ],
                'sortOrder' => 10,
            ];
            $advancedInventoryButton['arguments']['data']['config'] = [
                'displayAsLink' => true,
                'formElement' => 'container',
                'componentType' => 'container',
                'component' => 'Magento_Ui/js/form/components/button',
                'template' => 'ui/form/components/button/container',
                'actions' => [
                    [
                        'targetName' => 'product_form.product_form.advanced_inventory_modal',
                        'actionName' => 'toggleModal',
                    ],
                ],
                'title' => __('Advanced Inventory'),
                'provider' => false,
                'additionalForGroup' => true,
                'source' => 'product_details',
                'sortOrder' => 20,
            ];
            $container['children'] = [
                'qty' => $qty,
                'advanced_inventory_button' => $advancedInventoryButton,
            ];

            $this->meta = $this->arrayManager->merge(
                $fieldsetPath . '/children',
                $this->meta,
                ['quantity_and_stock_status_qty' => $container]
            );
        }
    }
}
{%endhighlight%}

Modifier class should implement interface `Magento\Ui\DataProvider\Modifier` (or extend `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier`).
As you can see, methods `modifyMeta(array $meta)` and `modifyData(array $data)` accept as a parameter data and meta created/modified by previous modifiers.
If modifier is first in pool - meta and data will be empty.

UI elements can be added to meta property having structure same as in xml declaration.
You can create nested structures of elements adding them to "children" key of any element.

Added meta/data will be merged with meta/data that comes from xml declaration (last can be absent).

Let's summarize steps that you need for customization of product form via Modifier classes
1. Create modifier class that implements interface Magento\Ui\DataProvider\Modifier (or extends Magento\Catalog\Ui\DataProvider\Product\Form\Modifier).
Implement methods modifyData() and/or modifyMeta().
2. Define modifier as dependency to pool Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool via adminhtml/di.xml of your module.

<div class="bs-callout bs-callout-tip">
  <p>To access product model within your modifier it's recommended to use instance of Magento\Catalog\Model\Locator\LocatorInterface.</p>
</div>

Please, take a look at other examples of modifiers in code base of Magento:
app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/AdvancedPricing.php
app/code/Magento/ConfigurableProduct/Ui/DataProvider/Product/Form/Modifier/Data/AssociatedProducts.php
app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/AttributeSet.php
app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/Eav.php
etc