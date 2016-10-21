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

The next recommended way is creating virtual type for _Command Manager_ and configuring it by early specified _Command Pool_:

{% highlight xml %}
<virtualType name="BraintreeCommandManager" type="Magento\Payment\Gateway\Command\CommandManager">
    <arguments>
        <argument name="commandPool" xsi:type="object">BraintreeCommandPool</argument>   
    </arguments>
</virtualType>
{% endhighlight %}

Then a configured command manager should be added to payment adapter configuration:

{% highlight xml %}
<virtualType name="BraintreeFacade" type="Magento\Payment\Model\Method\Adapter">
    <arguments>
        <argument name="commandExecutor" xsi:type="object">BraintreeCommandManager</argument>
    </arguments>
</virtualType>
{% endhighlight %}