---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Gateway Command Pool
menu_title: 
menu_node: 
menu_order: 2
version: 2.0
github_link: payments-integrations/payment-gateway/command-pool.md
---

## Gateway command pool

All gateway commands implemented for a particular payment provider, should be added to the command pool for this provider, and then the pool is added to the configuration of the payment provider.

## Basic interface
The basic abstraction for a command pool is `\Magento\Payment\Gateway\Command\CommandPoolInterface`:

{% highlight php startinline=1 %}
interface CommandPoolInterface
{
    /**
     * Retrieves operation
     *
     * @param string $commandCode
     * @return CommandInterface
     * @throws NotFoundException
     */
    public function get($commandCode);
}
{% endhighlight %}

This interface implements the [Pool pattern](http://designpatternsphp.readthedocs.io/en/latest/Creational/Pool/README.html)

## Default implementation
The [default CommandPool]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Command/CommandPool.php)
implements `CommandPoolInterface` and takes a list of commands as optional argument for construct.

## Command pool configuration for a particular provider
Following is an example of the command pool configuring for the Braintree payment provider, and adding it to the provider's payment method configuration.

`app/code/Magento/Braintree/etc/di.xml` 
{% highlight xml %}
...
<!-- BrainreeCommandPool - a command pool for the Braintree payments provider -->
<virtualType name="BraintreeCommandPool" type="Magento\Payment\Gateway\Command\CommandPool">
    <arguments>
        <argument name="commands" xsi:type="array">
            <item name="authorize" xsi:type="string">BraintreeAuthorizeCommand</item>
            <item name="sale" xsi:type="string">BraintreeSaleCommand</item>
            <item name="capture" xsi:type="string">BraintreeCaptureStrategyCommand</item>
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


