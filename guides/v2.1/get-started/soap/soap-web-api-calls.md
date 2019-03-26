---
group: web-api
subgroup: 30_SOAP
title: Use SOAP Services
menu_title: Use SOAP Services
menu_order: 1
menu_node: parent
redirect_from:
  - /guides/v2.0/get-started/soap/soap-front.html

---

## WSDL File {#wsdl}

A WSDL file is generated only for services that you request. This means that different clients may use different services and therefore use different WSDLs.

The Magento web {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} uses WSDL 1.2, which complies with WS-I 2.0 Basic Profile.

Each Magento service interface that is part of a {% glossarytooltip cdf644c4-bc99-4550-a954-dd5ae165785a %}service contract{% endglossarytooltip %} is represented as a separate service in the WSDL.

To consume several services, you must specify them in the WSDL endpoint {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}.


<table style="width:100%">
   <colgroup>
      <col width="20%" />
      <col width="40%" />
      <col width="40%" />
   </colgroup>
   <thead>
      <tr>
         <th>Service</th>
         <th>WSDL endpoint URL</th>
         <th>Available services</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>customer</td>
         <td>http://magentohost/soap?wsdl&services=customerV1</td>
         <td>\Magento\Customer\Service\V1\CustomerService</td>
      </tr>
       <tr>
         <td>customer, catalogProduct</td>
         <td>http://magentohost/soap/custom_store?wsdl&services=customerCustomerAccountServiceV1,catalogProductV2</td>
         <td>\Magento\Customer\Service\V1\CustomerAccountServiceInterface, \Magento\Catalog\Service\V2\ProductInterface</td>
      </tr>
   </tbody>
</table>

The WSDL URL follows the following pattern:

`http://<magento.host>/soap/<optional_store_code>?wsdl&services=<service_name_1>,<service_name_2>`

You must specify each service version in the endpoint URL.

This way, you can have a strict contract between your application and the service provider.
### Service class-to-service name conversion rules

Service names use the following conventions:

* CamelCase is used for service naming.
* The string `Service` is omitted.
* The `Magento` prefix is omitted.
* The `Interface` suffix is omitted.
* If the service name is the same as the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} name, the module name is omitted. For example, if there is a customer service interface in the customer module, the word `customer` will be used in the service name only once.

| Original Service Interface Name | Service Name |
|----------
| \Magento\Customer\Service\V1\CustomerInterface | customerV1 |
| \Magento\Customer\Service\V1\CustomerAccountServiceInterface | customerCustomerAccountServiceV1 |
| \Enterprise\Customer\Service\V3\Customer\AddressInterface | enterpriseCustomerAddressV3 |

## Authentication {#auth}

Protected SOAP resources can be accessed using bearer tokens (OAuth access tokens) over HTTP. Access tokens are strings representing an access {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} issued to the client. For more information, see [OAuth-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html)

The following {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} script illustrates how to get an access token:

{% highlight php %}
<?php
$opts = array(
            'http'=>array(
                'header' => 'Authorization: Bearer 36849300bca4fbff758d93a3379f1b8e'
            )
        );
$wsdlUrl = 'http://magento.ll/soap/default?wsdl=1&services=testModule1AllSoapAndRestV1';
$serviceArgs = array("id"=>1);

$context = stream_context_create($opts);
$soapClient = new SoapClient($wsdlUrl, ['version' => SOAP_1_2, 'stream_context' => $context]);

$soapResponse = $soapClient->testModule1AllSoapAndRestV1Item($serviceArgs); ?>
{% endhighlight %}

## Related topics {#related}

* [OAuth-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html)
* [Service contracts]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-contracts.html)
* [SOAP Reference]({{ page.baseurl }}/soap/bk-soap.html)
