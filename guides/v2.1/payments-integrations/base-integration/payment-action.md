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
 

## Related topics


- [Add a custom payment method to checkout]({{page.baseurl}}howdoi/checkout/checkout_payment.html): how to add a custom payment integration to checkout page.
- [Get payment information from frontend to backend]({{page.baseurl}}payments-integrations/base-integration/get-payment-info.html): how data is added to payments additional information and how to get it
- 