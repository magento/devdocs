---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Gateway Client
menu_title: Gateway Client
menu_order: 5
version: 2.0
github_link: payments-integrations/payment-gateway/gateway-client.md
---

*Gateway Client* is a component of the Magento payment gateway that transfers the payload to the payment provider and gets the response.

## Basic interface 

The basic interface for a gateway client is [`Magento\Payment\Gateway\Http\ClientInterface`]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/ClientInterface.php).

A gateway client receives a called [`Transfer`]({{site.mage2000url}}/app/code/Magento/Payment/Gateway/Http/Transfer.php) object and may be configured with response converter using [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html).

## Default implementations
The following gateway client implementations can be used out-of-the-box:

* [\Magento\Payment\Gateway\Http\Client\Zend]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/Client/Zend.php)
* [\Magento\Payment\Gateway\Http\Client\Soap]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/Client/Soap.php)

## Example
Following is the illustration of how a Zend client can be added in `di.xml`:

{% highlight xml %}
...
<virtualType name="HtmlConverterZendClient" type="Magento\Payment\Gateway\Http\Client\Zend">
    <arguments>
        <argument name="converter" xsi:type="object">Magento\Payment\Gateway\Http\Converter\HtmlFormConverter</argument>
        <argument name="logger" xsi:type="object">CustomLogger</argument>
    </arguments>
</virtualType>
...
{% endhighlight %}

