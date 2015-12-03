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
2. Copy the content from the `<Magento_Checkout_module_dir>/view/frontend/layout/checkout_index_index.xml`.
3. Leave only the structure related to the component you need to customize, and remove the rest. 
4. Change the path to the component's .js file in the 

{%highlight xml%}
{%endhighlight xml%}

## Create the component's files

Create the component's `.js` file and the `.html` template (if necessary) as described in [Add a new checkout step]({{site.gdeurl}}howdoi/checkout/checkout_new_step.html). 

Your component's `.js` file might implement a new component, or extend the existing one. Extending the existing `.js` component is described in the [Use custom JavaScript]({{site.gdeurl}}javascript-dev-guide/javascript/custom_js.html#extend_js_component) topic.


## Add the new component to the checkout page layout
The Checkout page layout is defined in `checkout_index_index.xml`.

In the layout file, you need to declare the new component file, and disable the previously used component.

To declare the new component, add it as 
`<item name="component" xsi:type="string">path_to_file_in_terms_of_RequireJS</item>`, as demonstrated in the code sample in [Add a new checkout step]({{site.gdeurl}}howdoi/checkout/checkout_new_step.html#add-your-step-to-the-checkout-page-layout).

To disable the component, use the following instructions:

{%highlight xml%}
<item name="%the_previously_used_component%" xsi:type="array">
    <item name="config" xsi:type="array">
        <item name="componentDisabled" xsi:type="boolean">true</item>
    </item>
</item>
{%endhighlight xml%}

