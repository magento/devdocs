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

## Gateway Command Pool

All _Commands_ implemented for a particular payment provider, should be added to the _Command Pool_ for this provider, and then the Pool is added to the configuration of the payment provider.

<p class="q">What are these entities?</p>

The basic abstraction for a _Command Pool_ is `\Magento\Payment\Gateway\Command\CommandPoolInterface`
Implements the [Pool pattern](http://designpatternsphp.readthedocs.io/en/latest/Creational/Pool/README.html):

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


The [default CommandPool]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Command/CommandPool.php)
implements `CommandPoolInterface` and takes a list of commands as optional argument for construct.

Following is an example of the _Command Pool_ configuring for the Braintree payment provider, and adding it to the provider's payment method configuration.

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


