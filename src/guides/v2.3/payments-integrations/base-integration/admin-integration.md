---
group: payments-integrations
subgroup: B_integration
title: Configure payment method by area
menu_title: Configure payment method by area
menu_order: 10
functional_areas:
  - Integration
---

You can define whether the payment method is available for the [storefront](https://glossary.magento.com/storefront) and [checkout](https://glossary.magento.com/checkout) in the [payment method configuration in `config.xml`]({{ page.baseurl }}/payments-integrations/base-integration/payment-option-config.html):

-  `can_use_checkout`: whether [payment method](https://glossary.magento.com/payment-method) is available in storefront checkout
-  `can_use_internal`: whether payment method is available in [Admin](https://glossary.magento.com/admin) order creation

If your payment flow should be different for storefront and Admin panel, you can use a separate DI configuration for each [area]({{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_and_areas.html#magento-area-types):

-  `%Vendor_Module%/etc/adminhtml/di.xml`: DI configuration for the Admin panel
-  `%Vendor_Module%/etc/frontend/di.xml`: DI configuration for the storefront

## Example

For example, on the storefront 3D Secure verification is integrated for the Braintree payment method, but it should not be available in Admin panel
The DI configuration for [authorization](https://glossary.magento.com/authorization) request builder for [admin area]({{ site.mage2bloburl }}/2.3/app/code/Magento/Braintree/etc/adminhtml/di.xml) looks like following:

```xml
<virtualType name="BraintreeAuthorizeRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
    <arguments>
        <argument name="builders" xsi:type="array">
            <item name="customer" xsi:type="string">Magento\Braintree\Gateway\Request\CustomerDataBuilder</item>
            <item name="payment" xsi:type="string">Magento\Braintree\Gateway\Request\PaymentDataBuilder</item>
            ...
        </argument>
    </arguments>
</virtualType>
```

While the general [app/code/Magento/Braintree/etc/di.xml]({{ site.mage2bloburl }}/2.3/app/code/Magento/Braintree/etc/di.xml) does not have 3D secure verification builder for Admin panel, but [virtual type](https://glossary.magento.com/virtual-type) has the same name (object will be created according to context of area).
