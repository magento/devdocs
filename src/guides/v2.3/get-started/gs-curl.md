---
group: web-api
title: Use cURL to run the request
functional_areas:
  - Integration
---

cURL is a command-line tool that lets you transmit and receive HTTP requests and responses from the command line or a shell script. It is available for Linux distributions, Mac OS X, and Windows.

To use cURL to run your REST web [API](https://glossary.magento.com/api) call, use the cURL command syntax to construct the cURL command.

To create the endpoint in the call, append the REST URI that you constructed in [Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html) to this URL:

`https://<MAGENTO_HOST_OR_IP>/<MAGENTO_BASE_INSTALL_DIR>/rest/`

To pass the customer data object in the POST call payload, specify a JSON or [XML](https://glossary.magento.com/xml) request body on the call.

For a complete list of cURL command options, see [curl.1 the man page](http://curl.haxx.se/docs/manpage.html).

The cURL examples in this guide use the following command-line options:

Option | Description
--- | ---
`-d` | Sends the specified data in a POST request to the HTTP server. Use this option to send a JSON or XML request body to the server.
`-H` | Specifies an extra HTTP header in the request. Precede each header with the `-H` option. You can specify any number of extra headers. For a list of common headers used in Magento web API requests, see [HTTP headers]({{ page.baseurl }}/get-started/gs-web-api-request.html#http-headers)
`-i` | Includes the HTTP header in the output.
`-s` | Specifies silent or quiet mode, which makes cURL mute. Progress and error messages are suppressed.
`-T` | Transfers the specified local file to the remote URL.
`-X` | Specifies the request method to use when communicating with the HTTP server. The specified request method is used instead of the default GET method.

### Using cUrl in Magento

Magento provides its own service-wrapper for using cURL instead of using default php cURL. The class ``Magento\Framework\HTTP\Client\Curl`` can be used to work with HTTP protocol using cURL library.
At first, the instance of ``Magento\Framework\HTTP\Client\Curl`` should be created.

```php
/**
* Constructor.
*
* @param Magento\Framework\HTTP\Client\Curl $curl
*/
public function __construct(
   Magento\Framework\HTTP\Client\Curl $curl
) {
   $this->curl = $curl;
}
```
#### Make GET request using cURL

```php
// get method
$this->curl->get($url);

// output of curl request
$result = $this->curl->getBody();
```

Where the ``$url`` is the endpoint url

#### Make POST request using cURL

```php
// post method
$this->curl->post($url, $params);

// output of curl requestt
$result = $this->curl->getBody();
```

Where the ``$url`` is the endpoint url, ``$params`` is an array of data that is being sent via the POST request, the extra parameters can be added in the url.
``$params`` example:

```php
$params = [
  'user[email]' => $user->getEmail(),
  'user[cellphone]' => $providerInfo['phone_number'],
  'user[country_code]' => $providerInfo['country_code'],
]
```

The Curl client can also adds headers, basic authorization, additional cURL options and cookies in the curl request. The Curl client provides these methods before using ``get`` or ``post`` method.

#### Set curl header using addHeader method

The ``addHeader`` method accepts two parameters. The curl header name and a curl header value.

```php
$this->curl->addHeader("Content-Type", "application/json");
$this->curl->addHeader("Content-Length", 200);
```

#### Set curl header using setHeaders method

The ``setHeaders`` method accepts an array as a parameter.

```php
$headers = ["Content-Type" => "application/json", "Content-Length" => "200"];
$this->curl->setHeaders($headers);
```

#### Set basic authorization in Curl
Set the basic authorization using the ``setCredentials`` method.

```php
$userName = "User_Name";
$password = "User_Password";

$this->curl->setCredentials($userName, $password);
```

It is equivalent to setting CURLOPT_HTTPHEADER value

```php
"Authorization : ". "Basic ".base64_encode($userName.":".$password)
```

#### Set curl option using setOption method

The ``setOption`` method accepts two parameters. The curl option name and the cURL option value.

```php
$this->curl->setOption(CURLOPT_RETURNTRANSFER, true);
$this->curl->setOption(CURLOPT_PORT, 8080);
```

#### Set curl option using setOptions method

The ``setOptions`` method accepts a parameter as an array.

```php
$options = [CURLOPT_RETURNTRANSFER => true, CURLOPT_PORT => 8080];

$this->curl->setOptions($options);
```

#### Set curl cookies using addCookie method

The ``addCookie`` method accepts an array as a parameter. The cookie name and the cookie value.

```php
$this->curl->addCookie("cookie-name", "cookie-value");
```

#### Set curl cookies using setCookies method

The ``setCookies`` method accepts an array as a parameter.

```php
$cookies = ["cookie-name-1" => "cookie-value-1", "cookie-name-2" => "cookie-value-2"];
$this->curl->setCookies($cookies);
```

{:.ref-header}
Related topics

[Status codes and responses]({{ page.baseurl }}/get-started/gs-web-api-response.html)
