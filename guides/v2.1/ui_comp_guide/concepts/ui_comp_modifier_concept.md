---
layout: default
group: UI_Components_guide
subgroup: concepts
title: About PHP modifiers in UI components
menu_title: About PHP modifiers in UI components
menu_order: 16
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_modifier_concept.md
---

## {{page.menu_title}}  
{:.no_toc}

* TOC
{:toc}

## What's in this topic

This topics describes how to use PHP modifiers, that are the server-side part of [UI components configuration]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_architecture_concept.html). Using modifiers is optional, and might be necessary when static declaration is not applicable. For example, in cases when additional data should be loaded from database. Or, like in the default product creation form, modifier is a place where validations were added to display only certain fields for certain product types.

## General implementation overview

`DataProvider()` is a PHP part of a UI component, a class responsible for the component's data and metadata preparation. The pool of modifiers (virtual type) is injected to this data provider using the `__construct()` method. The pool's preference is defined in `di.xml`.

In the run time, the component structure set in the modifier is merged with the configuration that comes from the XML configuration.

## Adding a custom PHP modifier

To add a PHP modifier for a UI component, take the following steps:

1. In your custom module, add a class that implements `\Magento\Ui\DataProvider\Modifier\ModifierInterface` with the following methods:
	- `modifyData()`: for modifying UI component's data (for example, the list of options for a select element)
	- `modifyMeta()`: for modifying UI component's metadata (for example, name, label, description, type)
   
   Sample PHP modifier:
{% highlight php %}

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

2. Declare your modifier, by adding the following to your module Di configuration `<Your_Module>/etc/adminhtml/di.xml`:

{% highlight xml %}
    <virtualType name="My_Module\Ui\DataProvider\Modifier\Pool" type="Magento\Ui\DataProvider      \Modifier\Pool">
        <arguments>
            <argument name="modifiers" xsi:type="array">
                <item name="modifier_name" xsi:type="array">
                    <item name="class" xsi:type="string">My_Module\DataProvider\Modifier\Your_Class</item>
                    <item name="sortOrder" xsi:type="number">10</item>
                </item>
            </argument>
        </arguments>
    </virtualType>
{% endhighlight %}

3. To actually use your modifier, add a dependency on `\Magento\Ui\DataProvider\Modifier\PoolInterface` to your UI component data provider. For illustration see [`\Magento\Catalog\Ui\DataProvider\Product\Form\ProductDataProvider`]({{site.mage2100url}}app/code/Magento/Catalog/Ui/DataProvider/Product/Form/ProductDataProvider.php)


## Related reading

- [Dependency injection]( {{page.baseurl}}extension-dev-guide/depend-inj.html)
- [How Do I: Customize product creation form]({{page.baseurl}}howdoi/customize_product.html#modifier)