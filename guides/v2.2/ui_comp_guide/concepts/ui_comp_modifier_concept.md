---
group: UI_Components_guide
subgroup: concepts
title: About PHP modifiers in UI components
menu_title: About PHP modifiers in UI components
menu_order: 40
version: 2.2
---

## What's in this topic

This topic describes how to use {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} modifiers that are the server-side part of [UI components configuration]({{ page.baseurl }}/ui_comp_guide/concepts//ui_comp_config_flow_concept.html). Using modifiers is optional and might be necessary when [static declaration in XML configuration files]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html) is not suitable for the tasks. For example, in cases when additional data should be loaded from database. Or the other specific example is the [default product creation form]({{ page.baseurl }}/howdoi/customize_product.html), for which the modifier is a place where validations are added to display only certain fields for certain {% glossarytooltip 6e836354-0067-48ac-84ce-a4ab7c0c492e %}product types{% endglossarytooltip %}.

## General implementation overview

`DataProvider()` is a PHP part of a UI component, a class responsible for the component's data and metadata preparation. The pool of modifiers (virtual type) is injected to this data provider using the `__construct()` method. The pool's preference is defined in `di.xml`.

So in runtime, the component structure set in the modifier is merged with the configuration that comes from the {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} configuration.

## Adding a custom PHP modifier

To add a PHP modifier for a UI component, take the following steps:

**Step 1**

In your custom module, add a class that implements [`\Magento\Ui\DataProvider\Modifier\ModifierInterface`]({{ site.mage2100url }}app/code/Magento/Ui/DataProvider/Modifier/ModifierInterface.php) with the following methods:

- `modifyData()`: for modifying UI component's data (for example, the list of options for a select element)
- `modifyMeta()`: for modifying UI component's {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} (for example, name, label, description, type)

Sample modifier:

{% highlight php%}

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

**Step 2**

Declare your modifier in your module Di configuration `<Your_Module_dir>/etc/adminhtml/di.xml`. This declaration looks like the following:

{% highlight xml %}
<virtualType name="%YourNamespace\YourModule\DataProvider\Modifier\Pool%" type="Magento\Ui\DataProvider\Modifier\Pool">
     <arguments>
         <argument name="modifiers" xsi:type="array">
             <item name="modifier_name" xsi:type="array">
                 <item name="class" xsi:type="string">%YourNamespce\YourModule\Modifier\YourModifierClass%</item>
                 <item name="sortOrder" xsi:type="number">10</item>
             </item>
         </argument>
     </arguments>
</virtualType>
{% endhighlight %}

, where `YourNamespace\YourModule\DataProvider\Modifier\Pool` is a [virtual class]({{ page.baseurl }}/extension-dev-guide/depend-inj.html#configuring-a-type).

(If you want to use this sample in your `di.xml`, replace the sample values with with the real names of your entities.)

**Step 3**

To use your modifier, add a dependency on [`\Magento\Ui\DataProvider\Modifier\PoolInterface`]({{ site.mage2100url }}app/code/Magento/Ui/DataProvider/Modifier/PoolInterface.php) to your UI component data provider. For illustration see [`\Magento\Catalog\Ui\DataProvider\Product\Form\ProductDataProvider`]({{ site.mage2100url }}app/code/Magento/Catalog/Ui/DataProvider/Product/Form/ProductDataProvider.php)

## Related reading

- [Dependency injection]( {{ page.baseurl }}/extension-dev-guide/depend-inj.html)
- [How Do I: Customize product creation form]({{ page.baseurl }}/howdoi/customize_product.html#modifier)
