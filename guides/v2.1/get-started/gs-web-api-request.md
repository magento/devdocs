---
group: get-started
subgroup: 20_REST
title: Construct a request
menu_title: Construct a request
menu_order: 1

version: 2.1
redirect_from: /guides/v1.0/get-started/gs-web-api-request.html
---

To configure a web API, developers define some of the elements of each API call in the `<module root dir>/vendor/<vendor-name>/<module-name>/etc/webapi.xml` file, where `<vendor-name>` is your vendor name (for example, `magento`) and `<module-name>` is your module name (which exactly matches its definition in `composer.json`). For example, the web API for the Customer service is defined in the `<your Magento install dir>/vendor/magento/module-customer/etc/webapi.xml` configuration file. Service data interfaces and builders define the required and optional parameters and the return values for the {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} calls.

## Overview {#request-overview}

The following table and the sections that follow the table describe {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}web API{% endglossarytooltip %} call elements:

Element | Specifies
--- | ---
[HTTP verb](#verbs) | The action to perform against the endpoint.
[Endpoint](#endpoints) | A combination of the _server_ that fulfills a request, the web service, and the _resource_ against which the request is being made.
[HTTP headers](#http-headers) | The authentication token, the call request and response formats, and other information.
[Call payload](#payload) | A set of input parameters and attributes that you supply with the request. API operations have both **required** and **optional** inputs. You specify input parameters in the URI and input attributes in a request body. You can specify a JSON- or XML-formatted request body.

### HTTP verb {#verbs}

Specify one of these HTTP verbs in the request:

* `GET`. Requests transfer of a current representation of the target resource. If you omit the verb, `GET` is the default.
* `PUT`. Requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.
* `POST`. Requests that the origin server accept the representation enclosed in the request as data to be processed by the target resource.
* `DELETE`. Requests that the origin server delete the target resource.

### Endpoint {#endpoints}

An endpoint is a combination of the _server_ that fulfills a request, the web service, the store code, the resource against which the request is being made, and any template parameters.

For example, in the `http://magento.ll/index.php/rest/default/V1/customerGroups/:id` endpoint, the server is `magento.ll/index.php/`, the web service is `rest`, the resource is `/V1/customerGroups`, and the template parameter is `id`.

A store code can have one of the following values.

* The store's assigned store code.
* `default`. This is the default value when no store code is provided.
* `all`. This value only applies to endpoints defined in the {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} and Product modules. If this value is specified, the {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} call affects all of the merchant's stores.

### HTTP headers {#http-headers}

<div class="bs-callout bs-callout-info" id="info" markdown="1">
To specify an HTTP header in a cURL command, use the `-H` option.
</div>

Specify one or more of the following HTTP headers in your web API calls:

HTTP header | Description | Syntax
--- | --- | ---
`Authorization` | Required. Specifies the authentication token that proves you as the owner of a Magento account. You specify the token in the `Authorization` request header with the `Bearer` HTTP authorization scheme. | `Authorization: Bearer <TOKEN>` <br/><br/>`<TOKEN>` is the authentication token returned by the Magento token service. See [Authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication.html).
`Accept` | Optional. Specifies the format of the response body. Default is `JSON`. | `Accept: application/<FORMAT>` <br/><br/>`<FORMAT>` is either `JSON` or `XML`.
`Content-Type` | Required for operations with a request body. Specifies the format of the request body. | `Content-Type:application/<FORMAT>` <br/><br/>`<FORMAT>` is either `JSON` or `XML`.

### Call payload {#payload}

The call payload is set of input <i>parameters</i> and <i>attributes</i> that you supply with the request. API operations have both _required_ and _optional_ inputs.

You specify input parameters in the URI. For example, in the `GET/V1/customers/:customerId` URI, you must specify the `customerId` template parameter. This parameter filters the response by the specified customer ID.

You specify input attributes in a JSON- or XML-formatted request body. For example, in the `POST /V1/customers` call, you must specify a request body like this:

{% highlight json %}
{
    "customers": {
        "customer": {
            "email": "user@example.com",
            "firstname": "John",
            "lastname": "Doe"
        },
        "addresses": [
            {
                "defaultShipping": true,
                "defaultBilling": true,
                "firstname": "John",
                "lastname": "Doe",
                "region": {
                    "regionCode": "CA",
                    "region": "California",
                    "regionId": 12
                },
                "postcode": "90001",
                "street": ["Zoe Ave"],
                "city": "Los Angeles",
                "telephone": "555-000-00-00",
                "countryId": "US"
            }
        ]
    }
}
{% endhighlight %}

This JSON-formatted request body includes a `customer` object with the customer email, first name, and last name, and customer address information. The information in this request body is used to populate the new customer account.

## Construct a request {#construct-request}

This example shows you how to construct a REST web API call to create an account.

<ol><li>Open the <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">Magento/Customer/etc/webapi.xml</a> configuration file.</li>
<li><p>Find the route element that defines the <code>createAccount</code> call:</p>
<pre>
&lt;route url="/V1/customers" method="POST">
    &lt;service class="Magento\Customer\Api\AccountManagementInterface" method="createAccount"/>
    &lt;resources>
        &lt;resource ref="anonymous"/>
    &lt;/resources>
&lt;/route>
</pre>
</li>
<li><p>Use the <code>method</code> and <code>url</code> values on the <code>route</code> element to construct the URI.</p><p>In this example, the URI is:</p>
<pre>POST /V1/customers</pre></li>
<li><p>Use the <code>class</code> attribute on the <code>service</code> element to identify the service interface.</p>
<p>In this example, the service interface is the <code>AccountManagementInterface</code> {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} file.</p>
<p>Open the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Api/AccountManagementInterface.php" target="_blank">AccountManagementInterface.php</a> file and find the <code>createAccount</code> method, as follows:</p>
<pre>public function createAccount(
        \Magento\Customer\Api\Data\CustomerInterface $customer,
        $password = null,
        $redirectUrl = ''
    );</pre>
<p>The <code>createAccount</code> call requires a <code>customer</code> data object. The <code>password</code> and <code>redirectUrl</code> values are optional. The default <code>password</code> value is <code>null</code> and the default <code>redirectUrl</code> value is blank.</p>
</li>
<li><p>To pass the <code>customer</code> data object in the POST call payload, specify a <a href="http://www.json.com/" target="_blank">JSON</a> or {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} request body on the call.</p></li>
</ol>

### Customers Search API request example {#customers-search-api-request-example}

The following example builds a Customers Search request based on search criteria. It returns a list of customers that match given search criteria.
<ol>
<li><p>Prepare <code>Authorization</code>, <code>Accept</code> and <code>Content-Type</code> headers to be passed to a request object. Use the {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}Authorization{% endglossarytooltip %} token returned by the Magento token service.</p></li>
<pre>
$token = 'token';
$httpHeaders = new \Zend\Http\Headers();
$httpHeaders->addHeaders([
   'Authorization' => 'Bearer ' . $token,
   'Accept' => 'application/json',
   'Content-Type' => 'application/json'
]);
</pre>
<li><p>Open the <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">Magento/Customer/etc/webapi.xml</a> configuration file and find the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Api/CustomerRepositoryInterface.php" target="_blank">CustomerRepositoryInterface</a> interface with the <code>getList</code> method.</p></li>
<li><p>Set the headers, URI and method to a request object. Use URI <code>/V1/customers/search</code> and method <code>GET</code> values. Also, the <code>searchCriteria</code> parameter should be used to complete the Customer Search query. See <a href="{{ page.baseurl }}/rest/performing-searches.html" target="_blank">searchCriteria usage</a>.</p></li>
<pre>
$request = new \Zend\Http\Request();
$request->setHeaders($httpHeaders);
$request->setUri('http://magento.ll/rest/V1/customers/search');
$request->setMethod(\Zend\Http\Request::METHOD_GET);

$params = new \Zend\Stdlib\Parameters([
   'searchCriteria' => '*'
]);
$request->setQuery($params);
</pre>
<li><p>Prepare a HTTP Curl client object and pass the request object to <code>Client::send()</code> method.</p></li>
<pre>
$client = new \Zend\Http\Client();
$options = [
   'adapter'   => 'Zend\Http\Client\Adapter\Curl',
   'curloptions' => [CURLOPT_FOLLOWLOCATION => true],
   'maxredirects' => 0,
   'timeout' => 30
];
$client->setOptions($options);

$response = $client->send($request);
</pre>
<li><p>This request returns a list of all customers in JSON format. You can also specify XML format by changing <code>Accept</code> header of the request.</p></li>
</ol>

## Next step

Run the web API call through a <a href="{{ page.baseurl }}/get-started/gs-curl.html">cURL command</a> or a REST client.
