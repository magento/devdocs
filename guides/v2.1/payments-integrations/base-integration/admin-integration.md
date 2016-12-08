---
layout: default
group: payments-integrations
subgroup: integration
title: Configure payment method by area
menu_title: Configure payment method by area 
menu_order: 10
version: 2.1
github_link: payments-integrations/base-integration/admin-integration.md
---

You define whether the payment method is available for the storefront and checkout in the [payment method configuration in `config.xml`]({{page.baseurl}}payments-integrations/base-integration/payment-options-config.html):

- `can_use_checkout`: whether payment method is available in storefront checkout
- `can_use_internal`: whether payment method is available in Admin order creation 

If your payment flow should be different for storefront and Admin panel, you can use a separate DI configuration for each [area]({{page.baseurl}}architecture/archi_perspectives/components/modules/mod_and_areas.html#magento-area-types):

- `%Vendor_Module%/etc/adminhtml/di.xml`: DI configuration for the Admin panel
- `%Vendor_Module%/etc/frontend/di.xml`: DI configuration for the storefront

## Example

For example, on the storefront 3D Secure verification is integrated for the Braintree payment method, but it should not be available in Admin panel
The ВI configuration for authorization request builder for [admin area]({{site.mage2100url}}app/code/Magento/Braintree/etc/adminhtml/di.xml) looks like following:

{% highlight xml %}
<virtualType name="BraintreeAuthorizeRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
    <arguments>
        <argument name="builders" xsi:type="array">
            <item name="customer" xsi:type="string">Magento\Braintree\Gateway\Request\CustomerDataBuilder</item>
            <item name="payment" xsi:type="string">Magento\Braintree\Gateway\Request\PaymentDataBuilder</item>
            ...
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

While the general [app/code/Magento/Braintree/etc/di.xml]({{site.mage2100url}}app/code/Magento/Braintree/etc/di.xml#L140) does not
have 3D secure verification builder for Admin panel, but virtual type has the same name (object will be created according to context of area).
