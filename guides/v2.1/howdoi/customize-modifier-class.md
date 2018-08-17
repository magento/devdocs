---
layout: tutorial
group: howdoi
subgroup:
title: Customize using a modifier class
subtitle: Customize Product Creation Form
menu_node:
level3_subgroup: product-creation-form
menu_order: 3
version: 2.1
---

[Modifier classes]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_modifier_concept.html) should be used when static declaration is not applicable. For example, in cases when additional data should be loaded from database. Also, modifier is a place where you add validations to display only certain fields for certain product types.

In the run time, the form structure set in the modifier is merged with the configuration that comes from the `product_form.xml` configuration.

The `Magento\Catalog\Ui\DataProvider\Product\Form\ProductDataProvider` data provider class is responsible for data and metadata preparation for the product form. The pool of modifiers `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool` (virtual type) is injected to this data provider using the `__construct()` method. The pool's preference is defined in `di.xml`.

To add your custom modifier, you need to do the following:

1. [Add the modifier code.](#modifier)
2. [Add it to the modifiers' pool in `di.xml`](#pool)

## Add your modifier {#modifier}

In your custom module directory, add the modifier class that implements the `Magento\UI\DataProvider\ModifierInterface` interface or extends the `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\AbstractModifier`class. In your modifier, the `modifyData()` and the `modifyMeta()` methods must be implemented.

In the modifier class, you can add UI elements using the same structure as in the {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} configuration.

For example:

```php?start_inline=1
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
```

You can create nested structures of elements by adding them to the `children` key of any element.

## Add modifier to the pool {#pool}

In `<your_module_dir>/etc/adminhtml/di.xml` define your modifier as a dependency for `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool`.


The following is an example of such a definition:

`app/code/Magento/CatalogInventory/etc/adminhtml/di.xml`:

```xml
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
```

The `sortOrder` parameter defines the order of invocation for your `modifyData()` and `modifyMeta()` methods among other these methods of other modifiers in the pool. If a modifier is first in a pool, its `modifyData()` and `modifyMeta()` are invoked with empty arguments.

To access product model within your modifier, it's recommended to use an instance of `Magento\Catalog\Model\Locator\LocatorInterface`.

For reference, view the modifier classes in the Magento modules, for example:

* `<Magento_Catalog_module_dir>/Ui/DataProvider/Product/Form/Modifier/AdvancedPricing.php`
* `<Magento_Catalog_module_dir>/Ui/DataProvider/Product/Form/Modifier/AttributeSet.php`
* `<Magento_Catalog_module_dir>/Ui/DataProvider/Product/Form/Modifier/Eav.php`
* `<Magento_ConfigurableProduct_module_dir>/Ui/DataProvider/Product/Form/Modifier/Data/AssociatedProducts.php`


For reference about setting conditions for displaying certain elements for certain product types, view `<Magento_Catalog_module_dir>/Ui/DataProvider/Product/Form/Modifier/Eav.php#L476`.
