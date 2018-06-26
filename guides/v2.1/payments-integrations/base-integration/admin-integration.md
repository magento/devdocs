---
group: payments-integrations
subgroup: B_integration
title: Configure payment method by area
menu_title: Configure payment method by area
menu_order: 10
version: 2.1
github_link: payments-integrations/base-integration/admin-integration.md
functional_areas:
  - Integration
---

You can define whether the payment method is available for the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} and {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} in the [payment method configuration in `config.xml`]({{ page.baseurl }}/payments-integrations/base-integration/payment-option-config.html):

- `can_use_checkout`: whether {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} is available in storefront checkout
- `can_use_internal`: whether payment method is available in {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} order creation 

If your payment flow should be different for storefront and Admin panel, you can use a separate DI configuration for each [area]({{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_and_areas.html#magento-area-types):

- `%Vendor_Module%/etc/adminhtml/di.xml`: DI configuration for the Admin panel
- `%Vendor_Module%/etc/frontend/di.xml`: DI configuration for the storefront

## Example

For example, on the storefront 3D Secure verification is integrated for the Braintree payment method, but it should not be available in Admin panel
The ВI configuration for {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} request builder for [admin area]({{ site.mage2100url }}app/code/Magento/Braintree/etc/adminhtml/di.xml) looks like following:

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

While the general [app/code/Magento/Braintree/etc/di.xml]({{ site.mage2100url }}app/code/Magento/Braintree/etc/di.xml#L140) does not
have 3D secure verification builder for Admin panel, but {% glossarytooltip 058b2be4-3247-4cb0-860d-6292ce75d1f0 %}virtual type{% endglossarytooltip %} has the same name (object will be created according to context of area).
