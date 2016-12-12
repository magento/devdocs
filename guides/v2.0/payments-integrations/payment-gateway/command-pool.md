---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Gateway Command Pool
menu_title:  Gateway Command Pool
menu_node: 
menu_order: 3
version: 2.0
github_link: payments-integrations/payment-gateway/command-pool.md
---

## Gateway command pool

All [gateway commands]({{page.baseurl}}payments-integrations/payment-gateway/gateway-command.html) implemented for a particular payment provider, should be added to a command pool for this provider. A command pool is a set of gateway commands available for integration with a particular payment provider. The pool is added to the configuration of the payment provider using [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html).

## Interface
The basic interface for a command pool is [`\Magento\Payment\Gateway\Command\CommandPoolInterface`]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Command/CommandPoolInterface.php). It implements the [Pool pattern](http://designpatternsphp.readthedocs.io/en/latest/Creational/Pool/README.html)

## Default implementation
The [default CommandPool]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Command/CommandPool.php)
implements `CommandPoolInterface` and takes a list of commands as an optional argument for the constructor.

## Command pool configuration for a particular provider
Following is an example of the command pool configuring for the Braintree payment provider, and adding it to the provider's payment method configuration ([`app/code/Magento/Braintree/etc/di.xml`]({{site.mage2100url}}app/code/Magento/Braintree/etc/di.xml)).

{% highlight xml %}
...
<!-- BrainreeCommandPool - a command pool for the Braintree payments provider -->
<virtualType name="BraintreeCommandPool" type="Magento\Payment\Gateway\Command\CommandPool">
    <arguments>
        <argument name="commands" xsi:type="array">
            <item name="authorize" xsi:type="string">BraintreeAuthorizeCommand</item>
            <item name="sale" xsi:type="string">BraintreeSaleCommand</item>
            <item name="capture" xsi:type="string">BraintreeCaptureStrategyCommand</item>
			...
        </argument>
    </arguments>
</virtualType>
...
<!-- Adding BrainreeCommandPool to the Braintree payment method configuration:-->
<virtualType name="BraintreeFacade" type="Magento\Payment\Model\Method\Adapter">
    <arguments>
        ...
        <argument name="commandPool" xsi:type="object">BraintreeCommandPool</argument>
    </arguments>
</virtualType>
...
{% endhighlight %}

(The code sample is from Magento CE v2.1. Although the payment provider gateway was added in v2.0, the particular default implementation using the gateway were added in v2.1.)
