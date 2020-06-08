---
layout: tutorial
group: how-do-i
subgroup:
title: Customize the view of a checkout step
subtitle: Customize Checkout
menu_order: 2
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

This topic contains the basic information about how to customize the view of an existing [checkout](https://glossary.magento.com/checkout) step. In the Magento application, checkout is implemented using UI components. You can customize each step by [changing the JavaScript implementation or template](#change-component) for a component, [adding](#add), [disabling](#disable), or [removing](#remove) a component.

## Change the component's .js implementation and template {#change-component}

To change the `.js` implementation and template used for components rendering, you need to declare the new files in the checkout page [layout](https://glossary.magento.com/layout). To do this, take the following steps:

1. In your custom module directory, create the following new file: `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`. (For your checkout customization to be applied correctly, your custom [module](https://glossary.magento.com/module) should depend on the Magento_Checkout module.)
1. In this file, add the following:

    ```xml
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <body>
            <referenceBlock name="checkout.root">
                    <arguments>
                        <argument name="jsLayout" xsi:type="array">
                            <!-- Your customization will be here -->
                            ...
                        </argument>
                    </arguments>
            </referenceBlock>
        </body>
    </page>
    ```

1. In the `<Magento_Checkout_module_dir>/view/frontend/layout/checkout_index_index.xml` file, find the component that you need to customize. Copy the corresponding node and all parent nodes up to `<argument>`. There is no need to leave all the attributes and values of parent nodes, as you are not going to change them.

1. Change the path to the component's `.js` file, template or any other property.

Example:

The Magento_Shipping module adds a component rendered as a link to the Shipping Policy info to the Shipping step:

`<Magento_Shipping_module_dir>/view/frontend/layout/checkout_index_index.xml` looks like following:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="checkout.root">
            <arguments>
                <argument name="jsLayout" xsi:type="array">
                    <item name="components" xsi:type="array">
                        <item name="checkout" xsi:type="array">
                            <item name="children" xsi:type="array">
                                <item name="steps" xsi:type="array">
                                    <item name="children" xsi:type="array">
                                        <item name="shipping-step" xsi:type="array">
                                            <item name="children" xsi:type="array">
                                                <item name="shippingAddress" xsi:type="array">
                                                    <item name="children" xsi:type="array">
                                                        <item name="before-shipping-method-form" xsi:type="array">
                                                            <item name="children" xsi:type="array">
                                                                <item name="shipping_policy" xsi:type="array">
                                                                    <item name="component" xsi:type="string">Magento_Shipping/js/view/checkout/shipping/shipping-policy</item>
                                                                </item>
                                                            </item>
                                                        </item>
                                                    </item>
                                                </item>
                                            </item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>

```

## Add the new component to the checkout page layout {#add}

Any [UI component](https://glossary.magento.com/ui-component) is added in the `checkout_index_index.xml` similar to the way a [checkout step component is added]({{ page.baseurl }}/howdoi/checkout/checkout_new_step.html#checkout).

Make sure that you declare a component so that it is rendered correctly by the parent component. If a parent component is a general UI component (referenced by the `uiComponent` alias), its child components are rendered without any conditions. But if a parent component is an extension of a general UI components, then children rendering might be restricted in certain way. For example a component can render only children from a certain `displayArea`.

## Move a component

To move any component on your checkout page, find the component (parent) where it needs to be placed, and paste your component as a child of the parent.

The following example shows how to move the discount component to the order summary block, which will display on both shipping and billing steps.

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="checkout.root">
            <arguments>
                <argument name="jsLayout" xsi:type="array">
                    <item name="components" xsi:type="array">
                        <item name="checkout" xsi:type="array">
                            <item name="children" xsi:type="array">
                                <item name="sidebar" xsi:type="array">
                                    <item name="children" xsi:type="array">
                                        <item name="summary" xsi:type="array">
                                            <item name="children" xsi:type="array">
                                                <item name="summary-discount" xsi:type="array">
                                                    <item name="component" xsi:type="string">Magento_SalesRule/js/view/payment/discount</item>
                                                    <item name="children" xsi:type="array">
                                                        <item name="errors" xsi:type="array">
                                                            <item name="sortOrder" xsi:type="string">0</item>
                                                            <item name="component" xsi:type="string">Magento_SalesRule/js/view/payment/discount-messages</item>
                                                            <item name="displayArea" xsi:type="string">messages</item>
                                                        </item>
                                                    </item>
                                                </item>
                                            </item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

{:.bs-callout-info}
Remember to [disable](#disable) or [remove](#remove) the component from its original location, or they will conflict with each other.

### Order Summary Result

![Discount Component]({{ site.baseurl }}/common/images/ui_comps/discount_component.png)

## Disable a component {#disable}

To disable the component in your `checkout_index_index.xml` use the following instructions:

```xml
<item name="%the_component_to_be_disabled%" xsi:type="array">
    <item name="config" xsi:type="array">
        <item name="componentDisabled" xsi:type="boolean">true</item>
    </item>
</item>
```

## Remove a component {#remove}

To remove a component from layout rendering, you need to create a [plugin]({{ page.baseurl }}/extension-dev-guide/plugins.html) for the `\Magento\Checkout\Block\Checkout\LayoutProcessor::process` method. In your plugin, implement the around method removing the corresponding layout nodes at run-time.

The following sample is an example of the around method removing a component:

```php?start_inline=1
unset($jsLayout['components']['checkout']['children']['steps'][%path_to_target_node%]); //%path_to_target_node% is the path to the component's node in checkout_index_index.xml
return $jsLayout;
```

If you want to use this sample in your code, replace the `%path_to_target_node%` placeholder with real value.

{:.bs-callout-info}
Disable vs remove a component: If you disable a component, it is loaded but not rendered. If you remove a component, it is removed and not loaded.
