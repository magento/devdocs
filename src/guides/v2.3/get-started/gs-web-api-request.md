---
group: web-api
title: Construct a request
---

To configure a web API, developers define some of the elements of each API call in the `<module root dir>/vendor/<vendor-name>/<module-name>/etc/webapi.xml` file, where `<vendor-name>` is your vendor name (for example, `magento`) and `<module-name>` is your module name (which exactly matches its definition in `composer.json`). For example, the web API for the Customer service is defined in the `<magento_root>/vendor/magento/module-customer/etc/webapi.xml` configuration file. Service data interfaces and builders define the required and optional parameters and the return values for the [API](https://glossary.magento.com/api) calls.

## Overview {#request-overview}

The following table and the sections that follow the table describe [web API](https://glossary.magento.com/web-api) call elements:

Element | Specifies
--- | ---
[HTTP verb](#verbs) | The action to perform against the endpoint.
[Endpoint](#endpoints) | A combination of the _server_ that fulfills a request, the web service, and the _resource_ against which the request is being made.
[HTTP headers](#http-headers) | The authentication token, the call request and response formats, and other information.
[Call payload](#payload) | A set of input parameters and attributes that you supply with the request. API operations have both **required** and **optional** inputs. You specify input parameters in the URI and input attributes in a request body. You can specify a JSON- or XML-formatted request body.

### HTTP verb {#verbs}

Specify one of these HTTP verbs in the request:

*  `GET`. Requests transfer of a current representation of the target resource. If you omit the verb, `GET` is the default.
*  `PUT`. Requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.
*  `POST`. Requests that the origin server accept the representation enclosed in the request as data to be processed by the target resource.
*  `DELETE`. Requests that the origin server delete the target resource.

### Endpoint {#endpoints}

An endpoint is a combination of the _server_ that fulfills a request, the web service, the store code, the resource against which the request is being made, and any template parameters.

For example, in the `http://magento.ll/index.php/rest/default/V1/customerGroups/:id` endpoint, the server is `magento.ll/index.php/`, the web service is `rest`, the resource is `/V1/customerGroups`, and the template parameter is `id`.

A store code can have one of the following values.

*  The store's assigned store code.
*  `default`. This is the default value when no store code is provided.
*  `all`. This value only applies to endpoints defined in the [CMS](https://glossary.magento.com/cms) and Product modules. If this value is specified, the [API](https://glossary.magento.com/api) call affects all of the merchant's stores.

### HTTP headers {#http-headers}

 {:.bs-callout-info}
To specify an HTTP header in a cURL command, use the `-H` option.

Specify one or more of the following HTTP headers in your web API calls:

HTTP header | Description | Syntax
--- | --- | ---
`Authorization` | Required, except for calls made on behalf of a guest. Specifies the authentication token that proves you as the owner of a Magento account. You specify the token in the `Authorization` request header with the `Bearer` HTTP authorization scheme. | `Authorization: Bearer <TOKEN>` <br/><br/>`<TOKEN>` is the authentication token returned by the Magento token service. See [Authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication.html).
`Accept` | Optional. Specifies the format of the response body. Default is `JSON`. | `Accept: application/<FORMAT>` <br/><br/>`<FORMAT>` is either `JSON` or `XML`.
`Content-Type` | Required for operations with a request body. Specifies the format of the request body. | `Content-Type:application/<FORMAT>` <br/><br/>`<FORMAT>` is either `JSON` or `XML`.
`X-Captcha` | A shopper-entered CAPTCHA value. It is required when a shopper enters a CAPTCHA value on the frontend, unless an integration token is provided. Forms requiring CAPTCHA values are configured at **Stores** > **Configuration** > **Customers** > **Customer Configuration** > **CAPTCHA** > **Forms**. | String

### Call payload {#payload}

The call payload is a set of input <i>parameters</i> and <i>attributes</i> that you supply with the request. API operations have both _required_ and _optional_ inputs.

You specify input parameters in the URI. For example, in the `GET/V1/customers/:customerId` URI, you must specify the `customerId` template parameter. This parameter filters the response by the specified customer ID.

You specify input attributes in a JSON- or XML-formatted request body. For example, in the `POST /V1/customers` call, you must specify a request body like this:

```json
{
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
```

This JSON-formatted request body includes a `customer` object with the customer email, first name, and last name, and customer address information. The information in this request body is used to populate the new customer account.

## Construct a request {#construct-request}

This example shows you how to construct a REST web API call to create an account.

1. Open the [Magento/Customer/etc/webapi.xml]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/etc/webapi.xml)

1. Find the route element that defines the `createAccount` call:

   ```xml
   <route url="/V1/customers" method="POST">
      <service class="Magento\Customer\Api\AccountManagementInterface" method="createAccount"/>
      <resources>
         <resource ref="anonymous"/>
      </resources>
   </route>
   ```

1. Use the <code>method</code> and `url` values on the `route` element to construct the URI. In this example, the URI is POST `/V1/customers`.

1. Use the `class` attribute on the `service` element to identify the service interface. In this example, the service interface is the `AccountManagementInterface` [PHP](https://glossary.magento.com/php) file.

   Open the [AccountManagementInterface.php]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Api/AccountManagementInterface.php) file and find the <code>createAccount</code> method, as follows:

   ```php?start_inline=1
   public function createAccount(
        \Magento\Customer\Api\Data\CustomerInterface $customer,
        $password = null,
        $redirectUrl = ''
    )
    ```

    The `createAccount` call requires a `customer` data object. The `password` and `redirectUrl` values are optional. The default `password` value is `null` and the default `redirectUrl` value is blank.

1. To pass the <code>customer</code> data object in the POST call payload, specify [JSON](http://www.json.com/) or [XML](https://glossary.magento.com/xml) request body on the call.

### Customers Search API request example {#customers-search-api-request-example}

The following example builds a Customers Search request based on search criteria. It returns a list of customers that match given search criteria.

1. Prepare `Authorization`, `Accept` and `Content-Type` headers to be passed to a request object. Use the [Authorization](https://glossary.magento.com/authorization) token returned by the Magento token service.

   ```php?start_inline=1
   $token = 'token';
   $httpHeaders = new \Zend\Http\Headers();
   $httpHeaders->addHeaders([
      'Authorization' => 'Bearer ' . $token,
      'Accept' => 'application/json',
      'Content-Type' => 'application/json'
   ]);
   ```

1. Open the [Magento/Customer/etc/webapi.xml]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/etc/webapi.xml)  configuration file and find the [CustomerRepositoryInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Api/CustomerRepositoryInterface.php) interface with the `getList` method.

1. Set the headers, URI and method to a request object. Use URI `/V1/customers/search` and method `GET` values. Use the `searchCriteria` parameter to complete the Customer Search query. See [searchCriteria usage]({{ page.baseurl }}/rest/performing-searches.html).

   The following example finds customers whose first name contains "ver" or whose last name contains "Costello".

    ```php?start_inline=1
    $request = new \Zend\Http\Request();
    $request->setHeaders($httpHeaders);
    $request->setUri('http://magento.ll/rest/V1/customers/search');
    $request->setMethod(\Zend\Http\Request::METHOD_GET);

    $params = new \Zend\Stdlib\Parameters([
        'searchCriteria' => [
            'filterGroups' => [
                0 => [
                    'filters' => [
                        0 => [
                            'field' => 'firstname',
                            'value' => '%ver%',
                            'condition_type' => 'like'
                        ],
                        1 => [
                            'field' => 'lastname',
                            'value' => '%Costello%',
                            'condition_type' => 'like'
                        ]
                    ]
                ]
            ]
            'current_page' => 1,
            'page_size' => 10
        ],
    ]);

    $request->setQuery($params);
    ```

1. Prepare a HTTP Curl client object and pass the request object to `Client::send()` method.

   ```php?start_inline=1
   $client = new \Zend\Http\Client();
   $options = [
      'adapter'   => 'Zend\Http\Client\Adapter\Curl',
      'curloptions' => [CURLOPT_FOLLOWLOCATION => true],
      'maxredirects' => 0,
      'timeout' => 30
    ];
    $client->setOptions($options);

    $response = $client->send($request);
   ```

This request returns a list of all customers in JSON format, as shown below. You can also specify XML format by changing <code>Accept</code> header of the request.

```json
{
    "items": [
        {
            "id": 1,
            "group_id": 1,
            "default_billing": "1",
            "default_shipping": "1",
            "created_at": "2017-12-05 09:50:11",
            "updated_at": "2018-09-22 06:32:50",
            "created_in": "Default Store View",
            "dob": "1973-12-15",
            "email": "roni_cost@example.com",
            "firstname": "Veronica",
            "lastname": "Costello",
            "gender": 2,
            "store_id": 1,
            "website_id": 1,
            "addresses": [
                {
                    "id": 1,
                    "customer_id": 1,
                    "region": {
                        "region_code": "MI",
                        "region": "Michigan",
                        "region_id": 33
                    },
                    "region_id": 33,
                    "country_id": "US",
                    "street": [
                        "6146 Honey Bluff Parkway"
                    ],
                    "telephone": "(555) 229-3326",
                    "postcode": "49628-7978",
                    "city": "Calder",
                    "firstname": "Veronica",
                    "lastname": "Costello",
                    "default_shipping": true,
                    "default_billing": true
                },
                {
                    "id": 19,
                    "customer_id": 1,
                    "region": {
                        "region_code": "London ",
                        "region": "London ",
                        "region_id": 0
                    },
                    "region_id": 0,
                    "country_id": "GB",
                    "street": [
                        "1 Studio 103 The Business Centre 61"
                    ],
                    "telephone": "1234567890",
                    "postcode": "CF24 3DG",
                    "city": "Tottenham ",
                    "firstname": "Veronica",
                    "lastname": "Costello"
                }
            ],
            "disable_auto_group_change": 0
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "firstname",
                        "value": "%ver%",
                        "condition_type": "like"
                    }
                ]
            }
        ]
    },
    "total_count": 1
}
```

{:.ref-header}
Related topics

Run the web API call through a [cURL command]({{ page.baseurl }}/get-started/gs-curl.html) or a REST client.
