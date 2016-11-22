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

## Gateway Сommand
Gateway Command is a proxy service that takes gateway specific payload and produces _Result_ - 
in most cases it will be a response from payment processor with transaction details.

<p class="q">Do I understand correctly that payment processor is something external? (relating to Payment Gateway) Then how gateway command can produce response from it?</p>

The _Gateway Command_ allows to perform payment actions, build transaction request, call specified validators and response handlers.

Basic abstraction in such case is `\Magento\Payment\Gateway\CommandInterface`:

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

### Base implementation

The `\Magento\Payment\Gateway\Command\GatewayCommand` is a default `CommandInterface` implementation, which allows to perform most operations available for Payment Gateway.
This type is not intended to be extended through inheritance but through composition via DI configuration.
Here is an example of a typical _Command_ definition through DI:

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

GatewayCommand should be configured with:

* `\Magento\Payment\Gateway\Request\BuilderInterface` - builds a map of gateway-specific arguments from Order parts as an array
* `\Magento\Payment\Gateway\Http\TransferFactoryInterface` - maps an array of gateway-specific arguments to format, supported by gateway (JSON, XML, SOAP)
* `\Magento\Payment\Gateway\Http\ClientInterface` - service which takes gateway-specific arguments and perform low-level call to a third-party system

Optional arguments are:

* `\Magento\Payment\Gateway\Response\HandlerInterface` - applies changes to Order/Payment/etc depending on request result, may persist transaction details
* `\Magento\Payment\Gateway\Validator\ValidatorInterface` - validates transaction/gateway response

