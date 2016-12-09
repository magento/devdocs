---
layout: default
group: payments-integrations
subgroup: integration
title: Get payment information from frontend to backend 
menu_title: Get payment information from frontend to backend
menu_order: 6
version: 2.1
github_link: payments-integrations/base-integration/get-payment-info.md
---

To implement transaction authorization our payment should receive some payment details from payment form, like credit card details,
and send received details to payment processor.

Depends on your payment integration payment details might be different, but, usually, it's credit card details, tokenized cards, payment nonce, etc.

However, in any case you should write some code to retrieve payment details from payment form.

## Example: Braintree request builder for the `payment` part of the request

We have specified `BraintreeAuthorizeRequest` builder composite to process authorization and it includes the `Magento\Braintree\Gateway\Request\PaymentDataBuilder` builder. This is builder responsible for the payment information part of the request, in other words, the credit card information. Let's look closer at it's implementation.

The Braintree payment provider requires the [payment method nonce](https://developers.braintreepayments.com/start/overview#payment-method-nonce)
to process transactions, and our builder should send it for each authorization transaction. 
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
<p>You should remove any sensitive data (like credit card details) from payment additional information  when you do not use it in your code. You can remove it
 in request builder, after reading, or in response handler, after processing response. In other case it will be stored in database.</p>
</div>

## Getting payment information from frontend to backend 

In most cases, customers fill all required information (credit card, expiration date, billing address, etc) on checkout payment form.
So our payment method implementation should provide the ability to display and process payment form on checkout step. 

We can send to backend any specific data, just need to override `getData()` method in
[payment UI component]({{site.mage2100url}}app/code/Magento/Braintree/view/frontend/web/js/view/payment/method-renderer/cc-form.js):
 
{% highlight javascript %}
define(
    [..., 'Magento_Payment/js/view/payment/cc-form', ...],
    function (..., Component, ...) {
        'use strict';

        return Component.extend({
            defaults: {
                ...
                paymentMethodNonce: null,
            },
            ...

            getData: function () {
                var data = {
                    'method': this.getCode(),
                    'additional_data': {
                        'payment_method_nonce': this.paymentMethodNonce
                    }
                };

                return data;
            },

            setPaymentMethodNonce: function (paymentMethodNonce) {
                this.paymentMethodNonce = paymentMethodNonce;
            },


            beforePlaceOrder: function (data) {
                this.setPaymentMethodNonce(data.nonce);
                this.placeOrder();
            },

            ...
        });
    }
);
{% endhighlight %}
 
The `getData()` method returns data what we need and depending on payment integration the returned data can be more
complicated. we need last step to retrieve data from storefront in the backend. Magento provides some
mechanisms called [Observers]({{site.gdeurl21}}extension-dev-guide/events-and-observers.html).
 
#### Read additional data

You need to add an observer to retrieve additional data from payment form and store it
in the payment additional information. In most cases it will be enough to extend
[AbstractDataAssignObserver]({{site.mage2100url}}app/code/Magento/Payment/Observer/AbstractDataAssignObserver.php) and add custom behavior.

That's how observer might looks:

{% highlight php startinline=1 %}
class DataAssignObserver extends AbstractDataAssignObserver
{
    const PAYMENT_METHOD_NONCE = 'payment_method_nonce';

    /**
     * @var array
     */
    protected $additionalInformationList = [
        self::PAYMENT_METHOD_NONCE,
    ];

    /**
     * @param Observer $observer
     * @return void
     */
    public function execute(Observer $observer)
    {
        $data = $this->readDataArgument($observer);

        $additionalData = $data->getData(PaymentInterface::KEY_ADDITIONAL_DATA);
        if (!is_array($additionalData)) {
            return;
        }

        $paymentInfo = $this->readPaymentModelArgument($observer);

        foreach ($this->additionalInformationList as $additionalInformationKey) {
            if (isset($additionalData[$additionalInformationKey])) {
                $paymentInfo->setAdditionalInformation(
                    $additionalInformationKey,
                    $additionalData[$additionalInformationKey]
                );
            }
        }
    }
}
{% endhighlight %}

And this observer should be added to list of events (`Module_Name/etc/events.xml`):

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
    <event name="payment_method_assign_data_braintree">
        <observer name="braintree_gateway_data_assign" instance="Magento\Braintree\Observer\DataAssignObserver" />
    </event>
</config>
{% endhighlight %}

This event will be triggered in [Adapter::assignData()]({{site.mage2100url}}app/code/Magento/Payment/Model/Method/Adapter.php#L600) method call:

{% highlight php startinline=1 %}
public function assignData(\Magento\Framework\DataObject $data)
{
    $this->eventManager->dispatch(
        'payment_method_assign_data_' . $this->getCode(),
        [
            AbstractDataAssignObserver::METHOD_CODE => $this,
            AbstractDataAssignObserver::MODEL_CODE => $this->getInfoInstance(),
            AbstractDataAssignObserver::DATA_CODE => $data
        ]
    );

    $this->eventManager->dispatch(
        'payment_method_assign_data',
        [
            AbstractDataAssignObserver::METHOD_CODE => $this,
            AbstractDataAssignObserver::MODEL_CODE => $this->getInfoInstance(),
            AbstractDataAssignObserver::DATA_CODE => $data
        ]
    );

    return $this;
}
{% endhighlight %}

There are two events:

 * `payment_method_assign_data_payment_code`: specific for current method (placing order using this payment method)
 * `payment_method_assign_data`: global for all payments (place order)
 
What type of event to use depends on your implementation, but in most cases it will be enough to use the event for current payment method.