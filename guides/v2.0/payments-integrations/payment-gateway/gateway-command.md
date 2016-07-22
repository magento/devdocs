---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Gateway Command
menu_title: 
menu_node: 
menu_order: 1 
version: 2.0
github_link: payments-integrations/payment-gateway/gateway-command.md
---

As was said in Introduction article, _Gateway Command_ is a proxy service, which takes gateway specific payload and produces _Result_.
Basic abstraction in such case is _\Magento\Payment\Gateway\CommandInterface_
```php
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
```

### Base implementation

_\Magento\Payment\Gateway\Command\GatewayCommand_ is a default _CommandInterface_ implementation, which allows to perform most operations available be Payment Gateway.
This type is not intended to be extended through inheritance but through composition via DI configuration.
Here is an example of a typical _Command_ definition through DI:

```xml
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

GatewayCommand should be configured with:

* _\Magento\Payment\Gateway\Request\BuilderInterface_ - builds a map of gateway-specific arguments from Order parts as an array
* _\Magento\Payment\Gateway\Http\TransferFactoryInterface_ - maps an array of gateway-specific arguments to format, supported by gateway (JSON, XML, SOAP)
* _\Magento\Payment\Gateway\Http\ClientInterface_ - service which takes gateway-specific arguments and perform low-level call to a third-party system

Optional arguments are:

* _\Magento\Payment\Gateway\Response\HandlerInterface_ - applies changes to Order/Payment/etc depending on request result, may persist transaction details
* _\Magento\Payment\Gateway\Validator\ValidatorInterface_ - validates transaction/gateway response

