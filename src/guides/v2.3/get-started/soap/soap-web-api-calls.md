---
group: web-api
subgroup: 30_SOAP
title: Use SOAP Services
menu_title: Use SOAP Services
menu_order: 1
menu_node: parent
---

## WSDL File {#wsdl}

A WSDL file is generated only for services that you request. This means that different clients may use different services and therefore use different WSDLs.

The Magento web [API](https://glossary.magento.com/api) uses WSDL 1.2, which complies with WS-I 2.0 Basic Profile.

Each Magento service interface that is part of a [service contract](https://glossary.magento.com/service-contract) is represented as a separate service in the WSDL.

To consume several services, you must specify them in the WSDL endpoint [URL](https://glossary.magento.com/url).

| Service | WSDL endpoint URL | Available services |
| --------- | ---------- | ------------------------------------------ |
| customer | http://magentohost/soap?wsdl&services=customerCustomerRepositoryV1 | \Magento\Customer\Api\Data\CustomerInterface |
| customer, catalogProduct | http://magentohost/soap/custom_store?wsdl&services=customerCustomerRepositoryV1,catalogProductRepositoryV1 | \Magento\Customer\Api\Data\CustomerInterface, \Magento\Catalog\Api\Data\ProductInterface |

The WSDL URL follows the following pattern:

`http://<magento.host>/soap/<optional_store_code>?wsdl&services=<service_name_1>,<service_name_2>`

You must specify each service version in the endpoint URL.

This way, you can have a strict contract between your application and the service provider.

If you want an overview to all the available Web Services, use the following URL format to get a list of all SOAP Services:

`http://<magento.host>/soap/all?wsdl_list=1`

```xml
<response>
    ...
    <storeStoreRepositoryV1>
        <wsdl_endpoint>http://<magento.host>/soap/all?wsdl&services=storeStoreRepositoryV1</wsdl_endpoint>
    </storeStoreRepositoryV1>
    <storeGroupRepositoryV1>
        <wsdl_endpoint>http://<magento.host>/soap/all?wsdl&services=storeGroupRepositoryV1</wsdl_endpoint>
    </storeGroupRepositoryV1>
    <storeWebsiteRepositoryV1>
        <wsdl_endpoint>http://<magento.host>/soap/all?wsdl&services=storeWebsiteRepositoryV1</wsdl_endpoint>
    </storeWebsiteRepositoryV1>
    ...
</response>
```

### Service class-to-service name conversion rules

Service names use the following conventions:

*  CamelCase is used for service naming.
*  The string `Service` is omitted.
*  The `Magento` prefix is omitted.
*  The `Interface` suffix is omitted.
*  If the service name is the same as the [module](https://glossary.magento.com/module) name, the module name is omitted. For example, if there is a customer service interface in the customer module, the word `customer` will be used in the service name only once.

| Original Service Interface Name | Service Name |
|----------
| \Magento\Customer\Api\Data\CustomerInterface | customerCustomerRepositoryV1 |
| \Magento\Customer\Api\AccountManagementInterface | customerAccountManagementV1 |
| \Enterprise\Customer\Service\V3\Customer\AddressInterface | enterpriseCustomerAddressV3 |

## Authentication {#auth}

Protected SOAP resources can be accessed using bearer tokens (OAuth access tokens) over HTTP. Access tokens are strings representing an access [authorization](https://glossary.magento.com/authorization) issued to the client. For more information, see [OAuth-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html)

The following [PHP](https://glossary.magento.com/php) script illustrates how to get an access token:

```php
<?php
$opts = [
            'http'=> [
                'header' => 'Authorization: Bearer 36849300bca4fbff758d93a3379f1b8e'
            ]
        ];
$wsdlUrl = 'http://magento.ll/soap/default?wsdl=1&services=testModule1AllSoapAndRestV1';
$serviceArgs = ["id" => 1];

$context = stream_context_create($opts);
$soapClient = new SoapClient($wsdlUrl, ['version' => SOAP_1_2, 'stream_context' => $context]);

$soapResponse = $soapClient->testModule1AllSoapAndRestV1Item($serviceArgs); ?>
```

{:.ref-header}
Related topics

*  [OAuth-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html)
*  [Service contracts]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-contracts.html)
*  [SOAP Reference]({{ page.baseurl }}/soap/bk-soap.html)
