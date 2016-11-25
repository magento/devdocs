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

All implemented _Commands_ should be added to the _Command Pool_.

The basic abstraction is `\Magento\Payment\Gateway\Command\CommandPoolInterface`:

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


The default [CommandPool]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Command/CommandPool.php)
implements `CommandPoolInterface` and takes a list of commands as optional argument for construct.

And the _Command Pool_ can be configured in the following way:

{% highlight xml %}
<virtualType name="BraintreeCommandPool" type="Magento\Payment\Gateway\Command\CommandPool">
    <arguments>
        <argument name="commands" xsi:type="array">
            <item name="authorize" xsi:type="string">BraintreeAuthorizeCommand</item>
            <item name="sale" xsi:type="string">BraintreeSaleCommand</item>
            <item name="capture" xsi:type="string">BraintreeCaptureStrategyCommand</item>
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

Now, we need to add created _Command Pool_ to payment method configuration:
{% highlight xml %}
<virtualType name="BraintreeFacade" type="Magento\Payment\Model\Method\Adapter">
    <arguments>
        ...
        <argument name="commandPool" xsi:type="object">BraintreeCommandPool</argument>
    </arguments>
</virtualType>
{% endhighlight %}