---
layout: default
group: howdoi
subgroup: checkout
title: Customize the view of a checkout step
menu_title: Customize the view of a checkout step
menu_order: 2
version: 2.0
github_link: howdoi/checkout/checkout_customize.md
---

<h2> What's in this topic</h2>

This topic contains the basic information about how to customize the view of an existing checkout step. In the Magento application, checkout is implemented using UI components. You can customize each step by changing the JavaScript implementation or template for a component, adding, removing or disabling a component.

* TOC
{:toc}


## Change the component's .js implementation and template 

To change the `.js` implementation and template used for components rendering, you need to declare the new files in the checkout page layout. To do this, take the following steps:

1. In your custom module directory, create the following new file: `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`. (For your checkout customization to be applied correctly, your custom module should depend on the Magento_Checkout module.)
2. In this file, add the following:

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="1column" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
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
{%endhighlight xml%}

3. In the `<Magento_Checkout_module_dir>/view/frontend/layout/checkout_index_index.xml` file, find the component that you need to customize. Copy the corresponding node and all parent nodes up to `<argument>`. There is no need to leave all the attributes and values of parente nodes, as you are not going to change them. 

4. Change the path to the component's `.js` file, template or any other property.

Example:

The Magento_Shipping module adds a component rendered as a link to the Shipping Policy info to the Shipping step:

`<Magento_Shipping_module_dir>/view/frontend/layout/checkout_index_index.xml` looks like following:


{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="1column" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
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

{%endhighlight xml%}


## Add the new component to the checkout page layout

Any UI component is added in the `checkout_index_index.xml` similar to the way a [checkout step component is added]({{page.baseurl}}howdoi/checkout/checkout_new_step.html#add-your-step-to-the-checkout-page-layout). 

Make sure that you declare a component so that it is rendered correctly by the parent component. If a parent component is a general UI component (referenced by the `uiComponent` alias), its child components are rendered without any conditions. But if a parent component is a an extension of a general UI components, then children rendering might be restricted in certain way. For example a component can render only children from a certain `displayArea`.


## Disable a component
To disable the component in your `checkout_index_index.xml` use the following instructions:

{%highlight xml%}
<item name="%the_component_to_be_disabled%" xsi:type="array">
    <item name="config" xsi:type="array">
        <item name="componentDisabled" xsi:type="boolean">true</item>
    </item>
</item>
{%endhighlight xml%}

## Remove a component

To remove a component from layout rendering, you need to create a [plugin]({{page.baseurl}}guides/v2.1/extension-dev-guide/plugins.html) for the `\Magento\Checkout\Block\Checkout\LayoutProcessor::process` method. In your plugin, implement the around method removing the corresponding layout nodes at run-time. 

The following sample is an example of the around method removing a component:

{%highlight php%}
unset($jsLayout['components']['checkout']['children']['steps'][%path_to_target_node%]); //%path_to_target_node% is the path to the component's node in checkout_index_index.xml
return $jsLayout;
{%endhighlight%} 

(If you want to use this sample in your code, replace the `%path_to_target_node%` placeholder with real value.)