---
layout: tutorial
group: how-do-i
subgroup:
title: Customize using a modifier class
subtitle: Customize Product Creation Form
menu_node:
level3_subgroup: product-creation-form
menu_order: 3
---

[Modifier classes]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_modifier_concept.html) should be used when static declaration is not applicable. For example, in cases when additional data should be loaded from database. Also, modifier is a place where you add validations to display only certain fields for certain product types.

In the run time, the form structure set in the modifier is merged with the configuration that comes from the `product_form.xml` configuration.

The `Magento\Catalog\Ui\DataProvider\Product\Form\ProductDataProvider` data provider class is responsible for data and metadata preparation for the product form. The pool of modifiers `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\Pool` (virtual type) is injected to this data provider using the `__construct()` method. The pool's preference is defined in `di.xml`.

To add your custom modifier, you need to do the following:

1. [Add the modifier code.](#modifier)
1. [Add it to the modifiers' pool in `di.xml`](#pool)

## Add your modifier {#modifier}

In your custom module directory, add the modifier class that implements the `Magento\UI\DataProvider\ModifierInterface` interface or extends the `Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\AbstractModifier`class. In your modifier, the `modifyData()` and the `modifyMeta()` methods must be implemented.

In the modifier class, you can add UI elements using the same structure as in the [XML](https://glossary.magento.com/xml) configuration.

For example:

```php
<?php

use Magento\Catalog\Ui\DataProvider\Product\Form\Modifier\AbstractModifier;
use Magento\Ui\Component\Form\Field;
use Magento\Ui\Component\Form\Fieldset;

class Example extends AbstractModifier
{
    /**
    * @param array $meta
    *
    * @return array
    */
    public function modifyMeta(array $meta): array
    {
        $meta['test_fieldset_name'] = [
            'arguments' => [
                'data' => [
                    'config' => [
                        'label' => __('Label For Fieldset'),
                        'sortOrder' => 50,
                        'collapsible' => true,
                        'componentType' => Fieldset::NAME
                    ]
                ]
            ],
            'children' => [
                'test_field_name' => [
                    'arguments' => [
                        'data' => [
                            'config' => [
                                'formElement' => 'select',
                                'componentType' => Field::NAME,
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

-  [`Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/AdvancedPricing`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/AdvancedPricing.php)
-  [`Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/AttributeSet`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/AttributeSet.php)
-  [`Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/Eav`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/Eav.php)
-  [`Magento/ConfigurableProduct/Ui/DataProvider/Product/Form/Modifier/Data/AssociatedProducts`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/ConfigurableProduct/Ui/DataProvider/Product/Form/Modifier/Data/AssociatedProducts.php)

For reference about setting conditions for displaying certain elements for certain product types, view `<Magento_Catalog_module_dir>/Ui/DataProvider/Product/Form/Modifier/Eav.php#L476`.
