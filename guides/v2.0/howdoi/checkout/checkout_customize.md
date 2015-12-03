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
Checkout steps are implemented as UI components. So if you want to customize the view of a checkout step, you need to create a new `.js` file, implementing a different component or customizing the existing one, and declare this new component instead of the existing one in the checkout layout file `checkout_index_index.html`. This topic provides the most important information you need to be able to perform this.

## Create the component's files

Add the `.js` file and the `.html` template (if necessary) as described in [Add a new checkout step]({{site.gdeurl}}howdoi/checkout/checkout_new_step.html)

Extending the existing .js component is described in the [Use custom JavaScript]({{site.gdeurl}}javascript-dev-guide/javascript/custom_js.html#extend_js_component) topic.


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

