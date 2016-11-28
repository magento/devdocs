---
layout: default
group: payments-integrations
subgroup: integration
title: Process payment action
menu_title: Process payment action
menu_order: 5
version: 2.1
github_link: payments-integrations/base-integration/payment-action.md
---

## Payments Processing

We already have created payment method and in this topic will create `authorize` payment action.

In the [previous topic]({{site.gdeurl21}}payments-integrations/base-integration/configuration.html#payment-method-facade)
we configured payment method with _Command Pool_ and now need to add authorize command to our command pool:

{% highlight xml %}
<virtualType name="BraintreeCommandPool" type="Magento\Payment\Gateway\Command\CommandPool">
    <arguments>
        <argument name="commands" xsi:type="array">
            <item name="authorize" xsi:type="string">BraintreeAuthorizeCommand</item>
        </argument>
    </arguments>
</virtualType>

<virtualType name="BraintreeAuthorizeCommand" type="Magento\Payment\Gateway\Command\GatewayCommand">
    <arguments>
        <argument name="requestBuilder" xsi:type="object">BraintreeAuthorizeRequest</argument>
        <argument name="transferFactory" xsi:type="object">Magento\Braintree\Gateway\Http\TransferFactory</argument>
        <argument name="client" xsi:type="object">Magento\Braintree\Gateway\Http\Client\TransactionSale</argument>
        <argument name="handler" xsi:type="object">BraintreeAuthorizationHandler</argument>
        <argument name="validator" xsi:type="object">Magento\Braintree\Gateway\Validator\ResponseValidator</argument>
    </arguments>
</virtualType>
{% endhighlight %}

#### Let's look into common command arguments
 * `requestBuilder` - list of builders to process transaction details, more information in
 [Request Builder]({{site.gdeurl21}}payments-integrations/payment-gateway/request-builder.html) component description.
 * `transferFactory` - creates transfer object and should implement `Magento\Payment\Gateway\Http\TransferFactoryInterface`.
 * `client` - processes transaction, more details in [Gateway Client]({{site.gdeurl21}}payments-integrations/payment-gateway/gateway-client.html) section.
 * `handler` - handles response from payment provider, [more details]({{site.gdeurl21}}payments-integrations/payment-gateway/response-handler.html).
 * `validator` - processes response validations, the [component description]({{site.gdeurl21}}payments-integrations/payment-gateway/response-validator.html).
 
Most of described components you can find in topics _Payment Gateway_, but we will focus our attention on some important things.

### Request Builder

Our _authorize command_ has request builder composite and it looks like this:

{% highlight xml %}
<virtualType name="BraintreeAuthorizeRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
    <arguments>
        <argument name="builders" xsi:type="array">
            <item name="customer" xsi:type="string">Magento\Braintree\Gateway\Request\CustomerDataBuilder</item>
            <item name="payment" xsi:type="string">Magento\Braintree\Gateway\Request\PaymentDataBuilder</item>
            <item name="3dsecure" xsi:type="string">Magento\Braintree\Gateway\Request\ThreeDSecureDataBuilder</item>
            ...
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

The most important builder for us - `payment` builder. The Braintree payment processor requires [Payment Nonce](https://developers.braintreepayments.com/start/overview#payment-method-nonce)
to process transactions and our builder should send it per each authorization transaction. Your custom payment integrations can
require similar data (this way is more secure, then receiving card details), and next topic will describes to get
specific payment data from payment form, now, let's assume, we already have _Payment Nonce_ in payment additional information.

And that's how payment builder looks:

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

As you can see, we get _Payment Nonce_ from payment additional information and in this way you can get any
specific data according to your requirements.

Perhaps, you have a question - "How to set some data from payment form to payment additional information?" - the next
section will show how to retrieve all required data.

### From frontend to backend

Our payment request builder can read payment information, but how this data will be set into additional information?

In most cases, customers fill all required information (credit card, expiration date, billing address, etc) on payment form.
So, our payment should provide an ability to display and process payment form on checkout step. Information,
how to add a custom payment integration to checkout page you can find in [this topic]({{site.gdeurl21}}howdoi/checkout/checkout_payment.html),
but we should pay our attention on some important things.

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
complicated. we need last step to retrieve data from storefront in the backend. Fortunately for us, Magento provides some
mechanisms - where are called [Observers]({{site.gdeurl21}}extension-dev-guide/events-and-observers.html).
 
### Read additional data
 
Our payment implementation will use _Magento Observers_ to retrieve additional data from payment from and store it
in the payment additional information. In most cases it will be enough to extend
[AbstractDataAssignObserver]({{site.mage2100url}}app/code/Magento/Payment/Observer/AbstractDataAssignObserver.php)
and add custom behavior.

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

 * `payment_method_assign_data_payment_code` - specific for current method
 * `payment_method_assign_data` - global for all payments
 
What type of event to use - depends on your implementation, but in most cases it will be enough to use the event for
current payment method.

Now, you can read all payment specific data in request builders.