---
layout: default
group: payments-integrations
subgroup: integration
title: Add a gateway command
menu_title: Add a gateway command
menu_order: 5
version: 2.1
github_link: payments-integrations/base-integration/payment-action.md
---

You need to add a [gateway command]({{page.baseurl}}/payments-integrations/payment-gateway/gateway-command.html#particular-gateway-commands) for each payment action available for the payment method. There should be a separate command for "authorize", "void" and so on.

To add a gateway command. take the following steps:
1. Specify and configure the gateway command as described in [Gateway command]({{page.baseurl}}/payments-integrations/payment-gateway/gateway-command.html#particular-gateway-commands)
	
2. Add the command to the [commands pool]({{page.baseurl}}/payments-integrations/payment-gateway/command-pool.html).


## Configure the command

The gateway command for the payment action must be configured in the `di.xml` file of your module. Conventionally its location must be `<your_module_dir>/etc/di.xml`

Configure the command as described in [Gateway Command]({{page.baseurl}}/payments-integrations/payment-gateway/gateway-command.html#particular-gateway-commands).


## Example: Implementing the `authorize` payment action
We have already created payment method and in this topic will create `authorize` payment action.

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

Let's look into common command arguments

 * `requestBuilder` - list of builders to process transaction details, more information in
 [Request Builder]({{site.gdeurl21}}payments-integrations/payment-gateway/request-builder.html) component description.
 * `transferFactory` - creates transfer object and should implement `Magento\Payment\Gateway\Http\TransferFactoryInterface`.
 * `client` - processes transaction, more details in [Gateway Client]({{site.gdeurl21}}payments-integrations/payment-gateway/gateway-client.html) section.
 * `handler` - handles response from payment provider, [more details]({{site.gdeurl21}}payments-integrations/payment-gateway/response-handler.html).
 * `validator` - processes response validations, the [component description]({{site.gdeurl21}}payments-integrations/payment-gateway/response-validator.html).
 

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


## Related topics

You can find detailed information on how to add a custom payment integration to checkout page in [Add a custom payment method to checkout]({{site.gdeurl21}}howdoi/checkout/checkout_payment.html) topic. 