---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Gateway Client
menu_title: 
menu_node: 
menu_order: 10
version: 2.0
github_link: payments-integrations/payment-gateway/gateway-client.md
---

## Gateway Client

Gateway client is an interface responsible for transmission of the transaction payload.

<p class="q">can we say it simpler? where does it transfer the payload?
Transfers the payload to the payment provider and gets the response</p>

{% highlight php startinline=1 %}
interface ClientInterface
{
    /**
     * Places request to gateway. Returns result as array
     *
     * @param \Magento\Payment\Gateway\Http\TransferInterface $transferObject
     * @return array
     * @throws \Magento\Payment\Gateway\Http\ClientException
     * @throws \Magento\Payment\Gateway\Http\ConverterException
     */
    public function placeRequest(TransferInterface $transferObject);
}
{% endhighlight %}

Any ClientInterface implementation receives a called (`Transfer`)[https://github.com/magento/magento2/blob/develop/app/code/Magento/Payment/Gateway/Http/Transfer.php] object and may be configured with response converter, which maps response to array structure.

<p class="q">Do we need to say more about Transfer and Converter, perhaps?</p>
<p class="q">Does it convert to array format or changes the structure to array? A: changes</p>

### Default implementations
There are two Client implementations which can be used of the box:

* [\Magento\Payment\Gateway\Http\Client\Zend]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/Client/Zend.php)
* [\Magento\Payment\Gateway\Http\Client\Soap]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/Client/Soap.php)

### Example of Zend client configuration
<p class="q">Should we move this to the previous paragraph? as illustration of Any Client implementation receives a called Transfer object and may be configured with Response Converter, which maps response to array structure.</p>

{% highlight xml %}
<virtualType name="HtmlConverterZendClient" type="Magento\Payment\Gateway\Http\Client\Zend">
    <arguments>
        <argument name="converter" xsi:type="object">Magento\Payment\Gateway\Http\Converter\HtmlFormConverter</argument>
            <argument name="logger" xsi:type="object">MyCustomLogger</argument>
        </arguments>
</virtualType>
{% endhighlight %}

Gateway Client is command specific, is configured in di.xml (need a link here and there)