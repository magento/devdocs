---
layout: default
group: howdoi
subgroup: checkout
title: Add a custom template for a form field on Checkout page
menu_title: Add a custom template for a form field on Checkout page
menu_order: 7
version: 2.0
github_link: howdoi/checkout/checkout_edit_form.md
---

<h2> What's in this topic</h2>
This topic describes how to replace the HTML template for a form field on the Checkout page. You might need to replace the template in order to add elements displayed with the field, change the CSS class assigned to it, add attributes and so on.

<h2> Overview </h2>

The forms used on the Checkout page are implemented using Knockout JS. 

To change the template of the form field, do the following:

1. [Create a custom HTML template for knockout JS script that will render the form field](#template).
2. [Specify the new template in the Checkout page layout](#layout).

There are more details about each step in the following sections.

**Contents**:

* TOC
{:toc}

## Prerequisites 

[Set Magento to the developer mode]({{site.gdeurl}}config-guide/cli/config-cli-subcommands-mode.html) while you perform all customizations and debugging. 

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code. Instead, add your customizations in a separate module. For your checkout customization to be applied correctly, your custom module should [depend]({{site.gdeurl}}extension-dev-guide/build/composer-integration.html) on the Magento_Checkout module.

Do not use `Ui` for your custom module name, because `%Vendor%_Ui` notation, required when specifying paths, might cause issues. 

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
<p>The original templates of all form field types are located in the <code>app/code/Magento/Ui/view/base/web/templates/form/element</code> directory.</p>
</div>

## Specify the new template in layout {#layout}

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
                                                                        <item name="elementTmpl" xsi:type="string">%Vendor_Module%/form/element/%your_template%</item>
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

## Modifying the custom template after it was applied {#modify}

If you modify your custom `.html` template after it was applied on the store pages, the changes will not apply until you do the following: 

1. Delete all files in the `pub/static/frontend` and `var/view_preprocessing` directories.
2. Reload the pages.


