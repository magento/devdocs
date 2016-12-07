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

## Transfer Factory

Transfer factory, specified in [Gateway Command]({{page.baseurl}}payments-integrations/payment-gateway/gateway-command.html) allows to
create transfer object with all data from request builders and this object will be used by _Gateway Client_ to process
requests to payment processor.

In your payment integration you need to implement [Transfer Factory Interface]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/TransferFactoryInterface.php)
and use [Transfer Builder]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Http/TransferBuilder.php) to set all required params for request.

The similar example of factory might looks like this:

{% highlight php startinline=1 %}
 public function create(array $request)
 {
    return $this->transferBuilder
        ->setBody($request)
        ->build();
 }
{% endhighlight %}

This method just use _Transfer Builder_ to set request data and returns created object, but your integration might be
more complicated, like:

{% highlight php startinline=1 %}
public function create(array $request)
{
    return $this->transferBuilder
        ->setMethod(Curl::POST)
        ->setHeaders(['Content-Type' => 'application/json'])
        ->setBody(json_encode($request, JSON_UNESCAPED_SLASHES))
        ->setAuthUsername($this->getApiKey())
        ->setAuthPassword($this->getApiPassword())
        ->setUri($this->getUrl())
        ->build();
}
{% endhighlight%}

Second example sets all needed data to process requests using API credentials and all data will be sent in JSON format.
If you open _Transfer Builder_ source code, you will see what it has useful methods to configure request data like, authentication, request headers,
data encoding, etc.