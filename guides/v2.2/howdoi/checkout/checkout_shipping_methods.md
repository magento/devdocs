---
layout: tutorial
group: how-do-i
subgroup: checkout
title: Customize the list of shipping methods
subtitle: Customize Checkout
menu_order: 100
level3_subgroup: checkout-tutorial
---

This topic describes how to customize list of shipping methods displayed on the checkout page.

Let's consider a case where you need to add a collapsible text field with description for each shipping method in this list. To achieve this, you need to take the following steps:

1. [Create a new template for the shipping method item](#method-item).
1. [Create a new template for the shipping method list](#method-list).
1. [Override the shipping step configuration](#shipping).

## Step 1: Create new template for shipping method item {#method-item}

In your custom module directory, create a new file: `<your_module_dir>/view/frontend/web/template/custom-method-item-template.html`. In this file, add the following code.

It is copied from the `<Magento_Checkout_module_dir>/view/frontend/web/template/shipping-address/shipping-method-item.html` template, with the following modifications:

*  A `<tr>` element added to contain the shipping method description
*  A column with trigger elements that provide the collapse/expand functionality added
*  The entire sample wrapped in `<tbody>` to provide the general collapsible context for rows

```html
<!-- Initialize collapsible binding -->
<tbody collapsible="as: '$collapsible_' + method.method_code">
    <tr class="row">
        <td class="col col-method">
            <input type="radio"
                   class="radio"
                   click="element.selectShippingMethod"
                   ifnot="method.error_message"
                   ko-checked="element.isSelected"
                   ko-value="method.carrier_code + '_' + method.method_code"
                   attr="'aria-labelledby': 'label_method_' + method.method_code + '_' + method.carrier_code + ' ' + 'label_carrier_' + method.method_code + '_' + method.carrier_code,
                        'checked': element.rates().length == 1 || element.isSelected" />
        </td>
        <td class="col col-price">
            <each args="element.getRegion('price')" render="" />
        </td>
        <td class="col col-method"
            attr="'id': 'label_method_' + method.method_code + '_' + method.carrier_code"
            text="method.method_title" />
        <td class="col col-carrier"
            attr="'id': 'label_carrier_' + method.method_code + '_' + method.carrier_code"
            text="method.carrier_title" />
        <!-- Column with collapsible trigger  -->
        <td class="col">
            <a toggleCollapsible="'$collapsible_' + method.method_code">
                <span data-bind="i18n: 'Info'"></span>
            </a>
        </td>
    </tr>
    <!-- Row for shipping method description -->
    <tr class="row" visible="$context['$collapsible_' + method.method_code].opened">
        <td class="col" colspan="5" i18n="'Some description.'"/>
    </tr>
    <tr class="row row-error"
        if="method.error_message">
        <td class="col col-error" colspan="5">
            <div role="alert" class="message error">
                <div text="method.error_message"></div>
            </div>
            <span class="no-display">
                <input type="radio"
                       attr="'value' : method.method_code, 'id': 's_method_' + method.method_code" />
            </span>
        </td>
    </tr>
</tbody>
```

## Step 2: Create new template for shipping methods list {#method-list}

In your custom module directory, create a new file: `<your_module_dir>/view/frontend/web/template/custom-method-list-template.html`. In this file, add the following code. It uses the code from the `app/code/Magento/Checkout/view/frontend/web/template/shipping-address/shipping-method-list.html` template, with the following modifications:

*  A column for triggers added in `<thead>`
*  `tbody` moved to the item template for collapsible context

```html
<div id="checkout-shipping-method-load">
    <table class="table-checkout-shipping-method" markdown="1"> <thead>
        <tr class="row" markdown="1">
            <th class="col col-method" translate="'Select Method'" />
            <th class="col col-price" translate="'Price'" />
            <th class="col col-method" translate="'Method Title'" />
            <th class="col col-carrier" translate="'Carrier Title'" />
            <!-- Column for triggers -->
            <th class="col" />
        </tr>
        </thead> <!-- tbody was moved inside item template --> <!-- ko foreach: { data: rates(), as: 'method'} --> <!--ko template: { name: element.shippingMethodItemTemplate} --><!-- /ko --> <!-- /ko --> </table>
</div>
```

## Step 3: Override shipping step configuration {#shipping}

In your custom module directory, create a new file: `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`. In this file, add the following code.

It overrides the `shippingMethodListTemplate` and `shippingMethodItemTemplate` properties of `<Magento_Checkout_module_dir>/view/frontend/web/js/view/shipping.js`:

```html
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
                                                    <item name="config" xsi:type="array">
                                                        <item name="shippingMethodItemTemplate" xsi:type="string">Vendor_Checkout/custom-method-item-template</item>
                                                        <item name="shippingMethodListTemplate" xsi:type="string">Vendor_Checkout/custom-method-list-template</item>
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
