---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Request Builder
menu_title: Request Builder
menu_node: 
menu_order: 4
version: 2.0
github_link: payments-integrations/payment-gateway/request-builder.md
---

Request Builder is a component of the Magento payment gateway responsible for building a request from several parts. It allows implementing complex, yet atomic and testable, building strategies. Each builder can have simple logic or contain builder composites.

## Basic interface
The basic interface for a request builder is [`\Magento\Payment\Gateway\Request\BuilderInterface`]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Request/BuilderInterface.php).

## Builder composite

`\Magento\Payment\Gateway\Request\BuilderComposite` is a container for a list of `\Magento\Payment\Gateway\Request\BuilderInterface` implementations. It gets a list of classes, or types, or virtual type names, and performs a lazy instantiation on an actual `BuilderComposite::build([])` call. So that you can have as many objects, as required, but only those, which are needed for a request are instantiated. 

`BuilderComposite` implements the [composite design pattern](http://designpatternsphp.readthedocs.io/en/latest/Structural/Composite/README.html).

The concatenation strategy is defined in the `BuilderComposite::merge()` method. So if you need to alter the strategy, you need to add your custom implementation of `BuilderComposite`.

## Adding a builder composite 

Builder composites are added using [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html) in `di.xml`. A builder composite might comprise simple builders as well as other builder composites.

Example of adding composite builders for the Braintree payment provider ([`app/code/Magento/Braintree/etc/di.xml`]({{site.mage2100url}}app/code/Magento/Braintree/etc/di.xml)):

{% highlight xml %}
...
<!--  is a builder composite comprising a number of builders -->
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

(The code sample is from Magento CE v2.1. Although the payment provider gateway was added in v2.0, the particular default implementation using the gateway were added in v2.1)

## Example: Braintree request builder for the payment part of the request

In the previous example, the `BraintreeAuthorizeRequest` builder composite includes the `Magento\Braintree\Gateway\Request\PaymentDataBuilder` builder. This is builder responsible for the payment information part of the request, in other words, the credit card information. Let's look closer at it's implementation.

The Braintree payment provider requires the [payment method nonce](https://developers.braintreepayments.com/start/overview#payment-method-nonce)
to process transactions, and our builder should send it per each authorization transaction. 
Here is how the Braintree payment builder looks:

{% highlight php startinline=1 %}
class PaymentDataBuilder implements BuilderInterface
{
    /**
     * @inheritdoc
     */
    public function build(array $buildSubject)
    {
        $paymentDO = $this->subjectReader->readPayment($buildSubject);

        $payment = $paymentDO->getPayment();
        $order = $paymentDO->getOrder();

        $result = [
            self::AMOUNT => $this->formatPrice($this->subjectReader->readAmount($buildSubject)),
            self::PAYMENT_METHOD_NONCE => $payment->getAdditionalInformation(
                DataAssignObserver::PAYMENT_METHOD_NONCE
            ),
            self::ORDER_ID => $order->getOrderIncrementId()
        ];

        ...

        return $result;
    }
}
{% endhighlight %}

As you can see, we get the payment nonce from payment additional information. And so any specific data (like credit card information) can be retrieved.

<div class="bs-callout bs-callout-info" id="info">
<p>All out of the bYou should remove any sensitive data (like credit card details) from payment additional information  when you do not use it in your code. You can remove it
 in request builder, after reading, or in response handler, after processing response. In other case it will be stored in database.</p>
</div>