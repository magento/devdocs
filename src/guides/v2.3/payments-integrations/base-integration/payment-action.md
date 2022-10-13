---
group: payments-integrations
subgroup: B_integration
title: Add a payment action
menu_title: Add a payment action
menu_order: 5
functional_areas:
  - Integration
---

For each payment action available for the payment method, you must implement the following:

-  Creating a request with payment details. Described in [Get payment information from frontend to backend]({{ page.baseurl }}/payments-integrations/base-integration/get-payment-info.html).
-  Request processing using [response handler]({{ page.baseurl }}/payments-integrations/payment-gateway/response-handler.html) and [response validator]({{ page.baseurl }}/payments-integrations/payment-gateway/response-validator.html).
-  Specify and configure the gateway command. Described in the [Gateway Command]({{ page.baseurl }}/payments-integrations/payment-gateway/gateway-command.html#adding-gateway-commands) topic.
-  Add the command to the commands pool, as described in [Command Pool]({{ page.baseurl }}/payments-integrations/payment-gateway/command-pool.html#command-pool-configuration-for-a-particular-provider).

## Configure the command

The gateway command for the payment action must be configured in the `di.xml` file of your module. Conventionally, its location must be `<your_module_dir>/etc/di.xml`

Configure the command as described in [Gateway Command]({{ page.baseurl }}/payments-integrations/payment-gateway/gateway-command.html).

## Example: `authorize` payment action for Braintree

Configuring the gateway command and adding it to command pool (`app/code/Magento/Braintree/etc/di.xml`):

```xml
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
```

In the command configuration we see that `BraintreeAuthorizeRequest` is specified as `requestBuilder`, that is a
Let's look closer on the `requestBuilder` arguments. This argument value is a list of builders, builder composite.

The `BraintreeAuthorizeRequest` builder contains the following builders (`app/code/Magento/Braintree/etc/di.xml`):

```xml
<virtualType name="BraintreeAuthorizeRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
        <arguments>
            <argument name="builders" xsi:type="array">
                <item name="customer" xsi:type="string">Magento\Braintree\Gateway\Request\CustomerDataBuilder</item>
                <item name="payment" xsi:type="string">Magento\Braintree\Gateway\Request\PaymentDataBuilder</item>
                <item name="channel" xsi:type="string">Magento\Braintree\Gateway\Request\ChannelDataBuilder</item>
                <item name="address" xsi:type="string">Magento\Braintree\Gateway\Request\AddressDataBuilder</item>
                <item name="vault" xsi:type="string">Magento\Braintree\Gateway\Request\VaultDataBuilder</item>
                <item name="3dsecure" xsi:type="string">Magento\Braintree\Gateway\Request\ThreeDSecureDataBuilder</item>
                <item name="device_data" xsi:type="string">Magento\Braintree\Gateway\Request\KountPaymentDataBuilder</item>
                <item name="dynamic_descriptor" xsi:type="string">Magento\Braintree\Gateway\Request\DescriptorDataBuilder</item>
                <item name="store" xsi:type="string">Magento\Braintree\Gateway\Request\StoreConfigBuilder</item>
                <item name="merchant_account" xsi:type="string">Magento\Braintree\Gateway\Request\MerchantAccountDataBuilder</item>
            </argument>
        </arguments>
    </virtualType>
```

The most important builder in this pool is `Magento\Braintree\Gateway\Request\PaymentDataBuilder`, the `payment` builder. It is responsible for the payment information part of the request.

Please see the [Get payment information from frontend to backend]({{ page.baseurl }}/payments-integrations/base-integration/get-payment-info.html) for details about how payment information can be handled.

{:.ref-header}
Related topics

-  [Add a custom payment method to checkout]({{ page.baseurl }}/howdoi/checkout/checkout_payment.html): how to add a custom payment integration to [checkout](https://glossary.magento.com/checkout) page.