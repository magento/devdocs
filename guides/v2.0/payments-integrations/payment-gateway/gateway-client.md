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

Gateway client is a component of the Magento payment gateway that transfers the payload to the payment provider and gets the response.

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

A gateway client receives a called [`Transfer`]({{site.mage2000url}}/app/code/Magento/Payment/Gateway/Http/Transfer.php) object and may be configured with response converter, which converts response to the array structure.

### Default implementations
There are two gateway client implementations that can be used of the box:

* [\Magento\Payment\Gateway\Http\Client\Zend]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/Client/Zend.php)
* [\Magento\Payment\Gateway\Http\Client\Soap]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/Client/Soap.php)


Following is the example of Zend client configuration:

{% highlight xml %}
<virtualType name="HtmlConverterZendClient" type="Magento\Payment\Gateway\Http\Client\Zend">
    <arguments>
        <argument name="converter" xsi:type="object">Magento\Payment\Gateway\Http\Converter\HtmlFormConverter</argument>
            <argument name="logger" xsi:type="object">MyCustomLogger</argument>
        </arguments>
</virtualType>
{% endhighlight %}

<p class="q">Gateway Client is command specific, is configured in di.xml (need a link here and there)</p>
