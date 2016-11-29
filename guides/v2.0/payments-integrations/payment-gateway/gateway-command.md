---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Gateway Command
menu_title: Gateway Command 
menu_node: 
menu_order: 1 
version: 2.0
github_link: payments-integrations/payment-gateway/gateway-command.md
---

## Gateway Command overview
*Gateway Command* in general is a component of the Magento payment gateway that takes the [payload]({{page.baseurl}}payments-integrations/payment-gateway/payment-gateway-intro.html#terms) required for a particular payment service and sends, receives, and processes the response from the payment service provider. 
For each operation of a certain payment provider a separate gateway command is added.

## Basic interface
Basic interface of a gateway command is `\Magento\Payment\Gateway\CommandInterface`:

{% highlight php startinline=1%}
interface CommandInterface
{
    /**
     * Executes command basing on business object
     *
     * @param array $commandSubject
     * @return null|Command\ResultInterface
     * @throws CommandException
     */
    public function execute(array $commandSubject);
}
{% endhighlight %}

`CommandInterface` implements the [Command design pattern](http://designpatternsphp.readthedocs.io/en/latest/Behavioral/Command/README.html).

## Basic implementation

The `\Magento\Payment\Gateway\Command\GatewayCommand` class is the default `CommandInterface` implementation. It allows performing most of the operations implemented in the [Magento sales management]({{page.baseurl}}payments-integrations/payment-gateway/payment-gateway-intro.md#terms).

## Particular gateway commands
For each particular integration with a payment provider, gateway commands are added by extending this class using composition in [dependency injection (DI)]({{page.baseurl}}extension-dev-guide/depend-inj.html) configuration.

Example of Gateway Command extension for the "authorize" operation for the Braintree payment provider:

{% highlight xml %}
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

A Gateway Command must be configured with the following arguments:

* `\Magento\Payment\Gateway\Request\BuilderInterface`: builds an array of gateway-specific arguments using the order information. For details about `BuilderInterface`, see the [Request Builder topic]({{page.baseurl}}payments-integrations/payment-gateway/request-builder.html). 

* `\Magento\Payment\Gateway\Http\TransferFactoryInterface`: maps the array of provider-specific arguments with the format, supported by this provider (JSON, XML, SOAP).

* `\Magento\Payment\Gateway\Http\ClientInterface`: takes the provider-specific arguments and performs a low-level call to the provider. For details about `ClientInterface`, see the [Gateway Client topic]({{page.baseurl}}payments-integrations/payment-gateway/gateway-client.html).

Optional arguments :

* `\Magento\Payment\Gateway\Response\HandlerInterface`: changes the order and payment status depending on the payment provider response. For details about `HandlerInterface`, see the [Response Handler topic]({{page.baseurl}}payments-integrations/payment-gateway/response-handler.html). 
* `\Magento\Payment\Gateway\Validator\ValidatorInterface`: validates provider response. For details about `ValidatorInterface`, see the [Response Validator topic]({{page.baseurl}}payments-integrations/payment-gateway/response-validator.html). 

