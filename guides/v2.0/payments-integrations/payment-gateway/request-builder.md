---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Request Builder
menu_title: 
menu_node: 
menu_order: 5
version: 2.0
github_link: payments-integrations/payment-gateway/request-builder.md
---

## Request Builder

Request builder is responsible for building a transaction payload/request from several parts.
This abstract interface allows you to have complex building strategies, but still atomic and testable.

<p class="q">What strategies are possible at all?</p>

{% highlight php startinline=1 %}
interface BuilderInterface
{
    /**
     * Builds ENV request
     *
     * @param array $buildSubject
     * @return array
     */
    public function build(array $buildSubject);
}
{% endhighlight %}


### Builder Composite

The `\Magento\Payment\Gateway\Request\BuilderComposite` is a container for a list of `\Magento\Payment\Gateway\Request\BuilderInterface` which takes a list of class/type/virtualType
names and performs a lazy instantiation on an actual `BuilderComposite::build([])` call.
So you may have as many objects as required but only those which are needed for a request will be instantiated. 

<p class="q">Why is it needed, having many objects?</p>

Inspect the behavior of the `merge()` method, and in a case you want another strategy of parts concatenation, create `BuilderComposite` of your own.

### Example of a simple request decomposition

Configuration below may be used as a reference of a case when a simple decomposition can be applied

{% highlight xml %}
<virtualType name="BraintreeAuthorizeRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
    <arguments>
        <argument name="builders" xsi:type="array">
            <item name="customer" xsi:type="string">Magento\Braintree\Gateway\Request\CustomerDataBuilder</item>
            <item name="payment" xsi:type="string">Magento\Braintree\Gateway\Request\PaymentDataBuilder</item>
            <item name="channel" xsi:type="string">Magento\Braintree\Gateway\Request\ChannelDataBuilder</item>
            <item name="address" xsi:type="string">Magento\Braintree\Gateway\Request\AddressDataBuilder</item>
            <item name="3dsecure" xsi:type="string">Magento\Braintree\Gateway\Request\ThreeDSecureDataBuilder</item>
            <item name="device_data" xsi:type="string">Magento\Braintree\Gateway\Request\KountPaymentDataBuilder</item>
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}
