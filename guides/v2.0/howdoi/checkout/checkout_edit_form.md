---
layout: default
group: howdoi
subgroup: checkout
title: Add a custom template for a form field on Checkout page
menu_title: Add a custom template for a form field on Checkout page
menu_order: 7
github_link: howdoi/checkout/checkout_edit_form.md
---

<h2> What's in this topic</h2>
This topic describes how to change the HTML template of a form field used in the Checkout pages. This refer to the forms used on both steps of the Checkout: Shipping Information step and Review and Paymetns Information step. By changing the template you can add additional elements displayed with the field, for example images, change the CSS class assigned to it, add attributes and so on.

## Overview

The view part of the forms used in Checkout are implemented using Knockout JS. 

To change the template of a Checkout form field, do the following:
1. [Implement a custom HTML template for knockout JS script that will render the form field](#template).
2. Specify the new template in the checkout page layout.

There are more details about each step in the following sections.

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should [depend]({{site.gdeurl}}extension-dev-guide/composer-integration.html) on the Magento_Checkout module.

## Implement the HTML template for the field {#template}

Create a new `<your_template>.html` template in the following directory: `<your_module_dir>/view/frontend/web/template/form/element`

Example of a field template:

{%highlight html%}
<!-- input field element and corresponding bindings -->
<input class="input-text" type="text" data-bind="
    value: value,
    valueUpdate: 'keyup',
    hasFocus: focused,
    attr: {
        name: inputName,
        placeholder: placeholder,
        'aria-describedby': noticeId,
        id: uid,
        disabled: disabled
    }" />
<!-- additional content -->
<img src="%path_to_image%" alt="image_de"/>
{%endhighlight%}

<div class="bs-callout bs-callout-info" id="info">
<p>Original templates of all form field types are located in  the `app/code/Magento/Ui/view/base/web/templates/form/element` directory.</p>
</div>

## Specify the new template in layout

In your custom module directory, create a new `<your_module_dir>/view/frontend/layout/checkout_index_index.xml` file. 
In this file, add content similar to the following:

{% highlight xml%}
<?xml version="1.0"?>
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
                                                        <!-- The name of the form the field belongs to -->
                                                        <item name="shipping-address-fieldset" xsi:type="array">
                                                            <item name="children" xsi:type="array">
                                                                <!-- the field you are customizing -->
                                                                <item name="telephone" xsi:type="array">
                                                                    <item name="config" xsi:type="array">
                                                                        <!-- Assigning a new template -->
                                                                        <item name="elementTmpl" xsi:type="string">%your_module%/form/element/%your_template%</item>
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
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
{%endhighlight%}



