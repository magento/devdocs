<h2> What's in this topic</h2>

This topic contains the basic information about how to customize the shipping method list on checkout page. Lets imagine that you want to add some description for each shipping method. What we need to do:

1. Create new template for shipping method item
2. Create new template for shipping method list
3. Override shipping step configuration


## Create new template for shipping method item

In your custom module directory, create the following new file: `<your_module_dir>/view/frontend/web/template/custom-method-item-template.html`. In this file, add the following:

``` html
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

Above code it is copied `app/code/Magento/Checkout/view/frontend/web/template/shipping-address/shipping-method-item.html` template, but modified under our case. Have been added `tr` for shipping method description, column with trigger for collapsible, wrapped in `tbody` to provide general  collapsible context for rows.

## Create new template for shipping method list

In your custom module directory, create the following new file: `<your_module_dir>/view/frontend/web/template/custom-method-list-template.html`. In this file, add the following:

``` html
<div id="checkout-shipping-method-load">
    <table class="table-checkout-shipping-method">
        <thead>
        <tr class="row">
            <th class="col col-method" translate="'Select Method'"></th>
            <th class="col col-price" translate="'Price'"></th>
            <th class="col col-method" translate="'Method Title'"></th>
            <th class="col col-carrier" translate="'Carrier Title'"></th>
            <!-- Column for triggers -->
            <th class="col"></th>
        </tr>
        </thead>
        <!-- tbody was moved inside item template -->
        <!-- ko foreach: { data: rates(), as: 'method'} -->
        	<!--ko template: { name: element.shippingMethodItemTemplate} --><!-- /ko -->
        <!-- /ko -->
    </table>
</div>
```

Above code it is copied `app/code/Magento/Checkout/view/frontend/web/template/shipping-address/shipping-method-list.html` template, but modified under our case. Have been added column in `thead` for triggers, `tbody` was moved to item template for collapsible context.

## Override shipping step configuration

In your custom module directory, create the following new file: `<your_module_dir>/view/frontend/layout/checkout_index_index.xml`. In this file, add the following:

``` xml
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
In such way have been overridden shippingMethodListTemplate and shippingMethodItemTemplate properties that `app/code/Magento/Checkout/view/frontend/web/js/view/shipping.js` provides.
