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

Request builder is an abstract interface responsible for building a transaction payload/request from several parts. It allows you to implement complex, but still atomic and testable, building strategies: each builder can have simple logic or contain builder composites.

<p class="q">"transaction payload/request"  payload ?</p>
<p class="q">atomic?</p>

The basic abstraction for Request builder is `\Magento\Payment\Gateway\Request\BuilderInterface`:

<p class="q">true?</p>

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


### Builder composite

`\Magento\Payment\Gateway\Request\BuilderComposite` is a container for a list of `\Magento\Payment\Gateway\Request\BuilderInterface` implementations. It gets a list of classes, or types, or virtualType names, and performs a lazy instantiation on an actual `BuilderComposite::build([])` call. So that you can have as many objects, as required, but only those, which are needed for a request are instantiated. 

`BuilderComposite` implements the [composite design pattern](http://designpatternsphp.readthedocs.io/en/latest/Structural/Composite/README.html pattern).

The concatenation strategy is defined in the `BuilderComposite::merge()` method. So if you need to alter the strategy, you need to add your custom implementation of `BuilderComposite`.

### Builder composite configuration

Builder composite is configured in `di.xml`. A builder composite might comprise simple builders, and other builder composites.

Example of composite builders configurations for the Braintree payment provider:

    /app/code/Magento/Braintree/etc/di.xml
{% highlight xml %}
...
<!--  is a composite builder comprising a number of builders -->
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
...
<!-- The same BraintreeAuthorizeRequest builder composite is a part of the BraintreeSaleRequest builder composite -->
<virtualType name="BraintreeSaleRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
    <arguments>
        <argument name="builders" xsi:type="array">
            <item name="authorize" xsi:type="string">BraintreeAuthorizeRequest</item>
            <item name="settlement" xsi:type="string">Magento\Braintree\Gateway\Request\SettlementDataBuilder</item>
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

