---
group: payment-services
title: Customize buttons and messaging
---

{:.bs-callout-warning}
Refer to the [Configure in the Dashboard](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/configure/configure-dashboard.html?lang=en) page for more information.

You can easily customize [PayPal Smart button styling](#paypal-smart-buttons) and [PayPal PayLater messaging, styling, and layout](#paypal-paylater) on the product page, the checkout page, in the shopping cart, and in the mini cart.

## PayPal Smart Buttons

To customize Smart Button styling, create a module with a dependency on `Magento_PaymentServicesPaypal`.

1. In the [`di.xml` file]({{ site.baseurl }}{{ site.gdeurl }}/extension-dev-guide/build/di-xml-file.html), create a new type named `Magento\PaymentServicesPaypal\Block\SmartButtons`.
1. In the `arguments` block, specify one argument named `componentConfig` and `xsi:type="array"`.
1. Under this new argument, specify three items named `product`, `cart`, and `minicart` with `xsi:type="array"`.
1. Under each item, specify a nested item named `styles` with `xsi:type="array"`.
1. Reference [PayPal's available styling](https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/) and apply any desired parameters as nested items.

``` xml
<type name="Magento\PaymentServicesPaypal\Block\SmartButtons">
        <arguments>
            <argument name="componentConfig" xsi:type="array">
                <item name="product" xsi:type="array">
                    <item name="styles" xsi:type="array">
                        <item name="layout" xsi:type="string">horizontal</item>
                        <item name="color" xsi:type="string">gold</item>
                        <item name="shape" xsi:type="string">rect</item>
                        <item name="label" xsi:type="string">paypal</item>
                        <item name="tagline" xsi:type="boolean">false</item>
                    </item>
                </item>
                <item name="cart" xsi:type="array">
                    <item name="styles" xsi:type="array">
                        <item name="layout" xsi:type="string">vertical</item>
                        <item name="color" xsi:type="string">gold</item>
                        <item name="shape" xsi:type="string">rect</item>
                        <item name="label" xsi:type="string">paypal</item>
                        <item name="tagline" xsi:type="boolean">false</item>
                    </item>
                </item>
                <item name="minicart" xsi:type="array">
                    <item name="styles" xsi:type="array">
                        <item name="layout" xsi:type="string">vertical</item>
                        <item name="color" xsi:type="string">gold</item>
                        <item name="shape" xsi:type="string">rect</item>
                        <item name="label" xsi:type="string">paypal</item>
                        <item name="tagline" xsi:type="boolean">false</item>
                    </item>
                </item>
            </argument>
        </arguments>
</type>
```
> Sample Smart Buttons customization

## PayPal PayLater

To customize the PayPal PayLater messaging, style, and layout, create a module with a dependency on `Magento_PaymentServicesPaypal`, for the [product page, cart, minicart](#create-module-for-product-page-cart-and-minicart), or [checkout page](#create-module-for-checkout-page), and then [edit the styling of the module](#edit-the-styling).

### Create module for product page, cart, and minicart

1. In the [`di.xml` file]({{ site.baseurl }}{{ site.gdeurl }}/extension-dev-guide/build/di-xml-file.html), create a new `type` named `Magento\PaymentServicesPaypal\Block\Message`.
1. In the `arguments` block, specify one argument named `componentConfig` and `xsi:type="array"`.
1. Under this new argument, specify three items named `product`, `cart`, and `minicart` with `xsi:type="array"`.

### Create module for checkout page

1. In the [`di.xml` file]({{ site.baseurl }}{{ site.gdeurl }}/extension-dev-guide/build/di-xml-file.html), create a new type named `Magento\PaymentServicesPaypal\Model\SmartButtonsConfigProvider`.
1. In the `arguments` block, specify one argument named `messageStyles` and `xsi:type="array"`.

### Edit the styling

1. Under each element (for the `product`, `cart`, `minicart`, or `checkout`), specify a nested item named `styles` with `xsi:type="array"`.
1. Reference [PayPal's available styling](https://developer.paypal.com/docs/business/pay-later/us/integrate/customize-messages/) and apply any desired parameters as nested items.

``` xml
<type name="Magento\PaymentServicesPaypal\Block\Message">
        <arguments>
            <argument name="componentConfig" xsi:type="array">
                <item name="product" xsi:type="array">
                    <item name="styles" xsi:type="array">
                        <item name="layout" xsi:type="string">text</item>
                        <item name="logo" xsi:type="array">
                            <item name="type" xsi:type="string">inline</item>
                        </item>
                    </item>
                </item>
                <item name="cart" xsi:type="array">
                    <item name="styles" xsi:type="array">
                        <item name="layout" xsi:type="string">text</item>
                        <item name="logo" xsi:type="array">
                            <item name="type" xsi:type="string">inline</item>
                        </item>
                    </item>
                </item>
                <item name="minicart" xsi:type="array">
                    <item name="styles" xsi:type="array">
                        <item name="layout" xsi:type="string">text</item>
                        <item name="logo" xsi:type="array">
                            <item name="type" xsi:type="string">inline</item>
                        </item>
                    </item>
                </item>
            </argument>
        </arguments>
</type>
<type name="Magento\PaymentServicesPaypal\Model\SmartButtonsConfigProvider">
        <arguments>
            <argument name="messageStyles" xsi:type="array">
                <item name="layout" xsi:type="string">text</item>
                <item name="logo" xsi:type="array">
                    <item name="type" xsi:type="string">inline</item>
                </item>
            </argument>
        </arguments>
    </type>
```
> Sample PayLater customization
