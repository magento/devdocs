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

## Payment integration for Admin panel

Payment integration for Admin panel is similar to Storefront integration and contain few additional steps:

 - Payment configuration
 - Blocks implementation
 - Block template
 - Specific DI settings
 
### Payment configuration

At, we need to update payment configuration file (`Braintree/etc/config.xml`):

{% highlight xml %}
<payment>
    <braintree>
        ...
        <can_use_internal>1</can_use_internal>
    </braintree>
</payment>
{% endhighlight %}

The `can_use_internal` option allows to display our payment method in Admin panel.



All other customization depends on your payment integration, but some important thing. If your payment flow should be different for Storefront and Admin panel,
for example, on Storefront you integrated 3D Secure verification, but it should not be available in Admin panel,
you can use own DI configurations for different areas. As example, DI configuration for authorization request builder for 
[admin area]({{site.mage2100url}}app/code/Magento/Braintree/etc/adminhtml/di.xml):

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

With comparision to [payment global DI]({{site.mage2100url}}app/code/Magento/Braintree/etc/di.xml#L140), we do not
have 3D secure verification builder for Admin panel, but virtual type has the same name (object will be created according to context of area).
Similar to this example, you can specify any DI configuration for frontend area.