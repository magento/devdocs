---
group: payments-integrations
subgroup: A_gateway
title: Gateway Client
menu_title: Gateway Client
menu_order: 5
---

Gateway Client is a component of the Magento [payment gateway](https://glossary.magento.com/payment-gateway) that transfers the payload to the payment provider and gets the response.

## Basic interface

The basic interface for a gateway client is [`Magento\Payment\Gateway\Http\ClientInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Gateway/Http/ClientInterface.php).

A gateway client receives a called [`Transfer`](#transfer_factory) object. The client may be configured with response converter using [dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html).

## Default implementations

The following gateway client implementations can be used out-of-the-box:

*  [\Magento\Payment\Gateway\Http\Client\Zend]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Gateway/Http/Client/Zend.php)
*  [\Magento\Payment\Gateway\Http\Client\Soap]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Gateway/Http/Client/Soap.php)

## Example

Following is the illustration of how a Zend client can be added in `di.xml`:

```xml
...
<virtualType name="HtmlConverterZendClient" type="Magento\Payment\Gateway\Http\Client\Zend">
    <arguments>
        <argument name="converter" xsi:type="object">Magento\Payment\Gateway\Http\Converter\HtmlFormConverter</argument>
        <argument name="logger" xsi:type="object">CustomLogger</argument>
    </arguments>
</virtualType>
...
```

## Transfer Factory {#transfer_factory}

Transfer Factory allows to create transfer object with all data from [request builders]({{ page.baseurl }}/payments-integrations/payment-gateway/request-builder.html). This object is then used by Gateway Client to process requests to payment processor.

Transfer Factory uses [Transfer Builder]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Gateway/Http/TransferBuilder.php) to set required request parameters.

The basic Transfer Factory interface is [Magento\Payment\Gateway\Http\TransferFactoryInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Gateway/Http/TransferFactoryInterface.php).

The similar example of factory might looks like this:

```php
 public function create(array $request)
 {
    return $this->transferBuilder
        ->setBody($request)
        ->build();
 }
```

In this example transfer factory simply sets request data using Transfer Builder and returns the created object.

Following is an example of a more complicated behavior. Here transfer factory sets all required data to process requests using [API](https://glossary.magento.com/api) credentials and all data is sent in JSON format.

```php
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
```