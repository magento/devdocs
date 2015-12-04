---
layout: default
group: howdoi
subgroup: checkout
title: Customize the view of a checkout step
menu_title: Customize the view of a checkout step
menu_order: 1
github_link: howdoi/checkout/checkout_customize.md
---

## What's in this topic

This topic contains the basic information about how to customize the view of an existing checkout step. In the Magento application, checkout is implemented using UI components, so step customization means changing the .js implementation or template for a component, adding or disabling a component.


## Declare a component's new .js implementation and template in layout

To declare a new .js file and a template for a component used in checkout:

1. In you custom module directory create `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`. 
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
    </body>
</page>
{%endhighlight xml%}

3. Copy the content from the In the `<Magento_Checkout_module_dir>/view/frontend/layout/checkout_index_index.xml` file, find the component you need to customize you need to re-assign and copy this node and all parent nodes up to `<argument>` (no need to leave the attributes and values). Leave only those child nodes which correspond to the properties which you need to re-assign. 

4. Change the path to the component's `.js` file, template or any other property.

Example:

To change the title property of the Shipping component from "Shipping" to "Shipping Information", the extending checkout_index_index.xml looks like following:

<p class="q">Could you help to add a good illustration</p>

{%highlight xml%}<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="1column" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="checkout.root">
                <arguments>
                    <argument name="jsLayout" xsi:type="array">

                        ...
                    </argument>
                </arguments>
    </body>
</page>

{%endhighlight xml%}


## Add the new component to the checkout page layout

Any UI component is added in the `checkout_index_index.xml` similar to the way a [checkout step component is added]({{site.gdeurl}}howdoi/checkout/checkout_new_step.html#add-your-step-to-the-checkout-page-layout). 

Make sure that you declare a component so that it will be rendered correctly by the parent component. If a parent component is a general UI component, its child components are rendered without any conditions. But if a parent component is a an extenstion of a general UI components, then children rendering might be restricted in certain way. For example it can render only children from a certain `displayArea`.

<p class="q">How is it called correctly, if not "general"</p>
In the layout file, you need to declare the new component file, and disable the previously 

## Disable a component
To disable the component, in your `checkout_index_index.xml` use the following instructions:

{%highlight xml%}
<item name="%the_previously_used_component%" xsi:type="array">
    <item name="config" xsi:type="array">
        <item name="componentDisabled" xsi:type="boolean">true</item>
    </item>
</item>
{%endhighlight xml%}

