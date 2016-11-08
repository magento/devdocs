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

Gateway client is responsible for transaction payload transmission.

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

Any Client implementation receives a called Transfer object and may be configured with Response Converter, which maps response to array structure.

### Useful implementations
There are two client implementations which can be used of the box:

* [\Magento\Payment\Gateway\Http\Client\Zend]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/Client/Zend.php)
* [\Magento\Payment\Gateway\Http\Client\Soap]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/Client/Soap.php)

### Example of Zend client configuration

{% highlight xml %}
<virtualType name="HtmlConverterZendClient" type="Magento\Payment\Gateway\Http\Client\Zend">
    <arguments>
        <argument name="converter" xsi:type="object">Magento\Payment\Gateway\Http\Converter\HtmlFormConverter</argument>
            <argument name="logger" xsi:type="object">MyCustomLogger</argument>
        </arguments>
</virtualType>
{% endhighlight %}
