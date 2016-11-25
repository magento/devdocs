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
Gateway Command is a proxy service that takes the [payload]({{page.baseurl}}payments-integrations/payment-gateway/payment-gateway-intro.md#terms) required for a particular payment service, receives and processes the response from the payment service provider.
in most cases it will be a response from payment processor with transaction details.


<p class="q">does it send the response? does it receive from the external provider or some internal component</p>

Basic abstraction of the Gateway Command is:

`\Magento\Payment\Gateway\CommandInterface`

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

### Basic implementation

The `\Magento\Payment\Gateway\Command\GatewayCommand` class is a default `CommandInterface` implementation, that allows performing most operations available for Payment Gateway.

<p class="q">which Payment Gateway?</p>

This type must be extended using composition in [dependency injection (DI)]({{page.baseurl}}extension-dev-guide/depend-inj.html) configuration.

<p class="q">Is it type or class?</p>
<p class="q">Why should we extend it all? If we want to add custom integration?</p>

Following is an example of a typical _Command_ definition using DI:
<p class="q">What sort of entity is _Command_?</p>
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

<p class="q">What is GatewayCommand? class? type? what is the difference between _Command_ and GatewayCommand</p>

* `\Magento\Payment\Gateway\Request\BuilderInterface`: builds an array of gateway-specific arguments using the order information 

<p class="q">Is it the RequestBuilder described further?</p>
* `\Magento\Payment\Gateway\Http\TransferFactoryInterface`: maps the array of gateway-specific arguments with the format, supported by a gateway (JSON, XML, SOAP)
<p class="q">is it Magento gateway or payment gateway?</p>

* `\Magento\Payment\Gateway\Http\ClientInterface`:takes the gateway-specific arguments and performs a low-level call to a third-party system

<p class="q">this third-party system - is it payment gateway</p>

Optional arguments:

* `\Magento\Payment\Gateway\Response\HandlerInterface`: applies changes to Order/Payment/etc depending on request result, may persist transaction details
* `\Magento\Payment\Gateway\Validator\ValidatorInterface` - validates transaction/gateway response

