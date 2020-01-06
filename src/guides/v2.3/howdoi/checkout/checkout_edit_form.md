---
layout: tutorial
group: how-do-i
subgroup:
title: Add a custom template for a form field on Checkout page
subtitle: Customize Checkout
menu_order: 8
level3_subgroup: checkout-tutorial
functional_areas:
  - Checkout
---

This topic describes how to replace the [HTML](https://glossary.magento.com/html) template for a form field on the [Checkout](https://glossary.magento.com/checkout) page. You might need to replace the template in order to add elements displayed with the field, change the [CSS](https://glossary.magento.com/css) class assigned to it, add attributes and so on.

The forms used on the Checkout page are implemented using Knockout JS.

To change the template of the form field, do the following:

1. [Create a custom HTML template for knockout JS script that will render the form field](#template).
1. [Specify the new template in the Checkout page layout](#layout).
1. [Clear files after modification](#modify).

## Prerequisites

[Set Magento to the developer mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) when performing all customizations and debugging.

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code. Instead, add your customizations in a separate [module](https://glossary.magento.com/module). For your checkout customization to be applied correctly, your custom module should [depend]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html) on the Magento_Checkout module.

Do not use `Ui` for your custom module name, because `%Vendor%_Ui` notation, required when specifying paths, might cause issues.

## Step 1: Implement the HTML template for the field {#template}

Create a new `<your_template>.html` template in the following directory: `<your_module_dir>/view/frontend/web/template/form/element`

Example of a field template:

```html
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
```

 {:.bs-callout-info}
The original templates of all form field types are located in the `app/code/Magento/Ui/view/base/web/templates/form/element` directory.

## Step 2: Specify the new template in layout {#layout}

In your custom module directory, create a new `<your_module_dir>/view/frontend/layout/checkout_index_index.xml` file.
In this file, add content similar to the following:

```xml
<?xml version="1.0"?>
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
```

## Step 3: Clear files after modification {#modify}

If you modify your custom `.html` template after it was applied on the store pages, the changes will not apply until you do the following:

1. Delete all files in the `pub/static/frontend` and `var/view_preprocessed` directories.
1. Reload the pages.
