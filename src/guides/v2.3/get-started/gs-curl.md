---
group: web-api
title: Use cURL to run the request
functional_areas:
  - Integration
---

['cURL'](https://curl.haxx.se/) is a command-line tool that lets you transmit HTTP requests and receive responses from the command line or a shell script. It is available for Linux distributions, Mac OS X, and Windows.

To use cURL to run your REST web [API](https://glossary.magento.com/api) call, use the cURL command syntax to construct the command.

To create the endpoint in the call, append the REST URI that you constructed in [Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html) to this URL:

`https://<MAGENTO_HOST_OR_IP>/<MAGENTO_BASE_INSTALL_DIR>/rest/`

To pass the customer data object in the POST call payload, specify a JSON or [XML](https://glossary.magento.com/xml) request body on the call.

For a complete list of cURL command options, see [curl.1 the man page](http://curl.haxx.se/docs/manpage.html).

The cURL examples in this guide use the following command-line options:

Option | Description
--- | ---
`-d` `-data` | Sends the specified data in a POST request to the HTTP server. Use this option to send a JSON or XML request body to the server.
`-H` `-header` | Specifies an extra HTTP header in the request. Precede each header with the `-H` option. You can specify any number of extra headers. For a list of common headers used in Magento web API requests, see [HTTP headers]({{ page.baseurl }}/get-started/gs-web-api-request.html#http-headers)
`-i` `-input` | Includes the HTTP header in the output.
`-s` `-silent` | Specifies silent or quiet mode, which makes cURL mute. Progress and error messages are suppressed.
`-T` `-upload-file` | Transfers the specified local file to the remote URL.
`-X` `-request` | Specifies the request method to use when communicating with the HTTP server. The specified request method is used instead of the default GET method.

## Using cUrl in Magento

Magento provides its own service-wrapper for using cURL instead of using the default PHP cURL. The class ``Magento\Framework\HTTP\Client\Curl`` may be used to work with HTTP protocol using cURL library.
First, create an instance of `Magento\Framework\HTTP\Client\Curl`.

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

### Make GET request using cURL

```php
// get method
$this->curl->get($url);

// output of curl request
$result = $this->curl->getBody();
```

where `$url` is the endpoint URL.

### Make POST request using cURL

```php
// post method
$this->curl->post($url, $params);

// output of curl requestt
$result = $this->curl->getBody();
```

where  `$url` is the endpoint URL, `$params` is an array of data that is being sent via the POST request. Other parameters may be added in the URL directly.
A `$params` example:

```php
$params = [
  'user[email]' => $user->getEmail(),
  'user[cellphone]' => $providerInfo['phone_number'],
  'user[country_code]' => $providerInfo['country_code'],
]
```

The cURL client can also add headers, basic authorization, additional cURL options, and cookies in the cURL request. The cURL client provides these methods before using `get` or `post` method.

### Set cURL header using addHeader method

The `addHeader` method accepts two parameters. The cURL header name and a cURL header value.

```php
$this->curl->addHeader("Content-Type", "application/json");
$this->curl->addHeader("Content-Length", 200);
```

### Set cURL header using setHeaders method

The `setHeaders` method accepts an array as a parameter.

```php
$headers = ["Content-Type" => "application/json", "Content-Length" => "200"];
$this->curl->setHeaders($headers);
```

### Set basic authorization in cURL

Set the basic authorization using the `setCredentials` method.

```php
$userName = "User_Name";
$password = "User_Password";

$this->curl->setCredentials($userName, $password);
```

It is equivalent to setting CURLOPT_HTTPHEADER value:

```php
"Authorization : " . "Basic " . base64_encode($userName . ":" . $password)
```

### Set cURL option using setOption method

The `setOption` method accepts two parameters. The cURL option name and the cURL option value.

```php
$this->curl->setOption(CURLOPT_RETURNTRANSFER, true);
$this->curl->setOption(CURLOPT_PORT, 8080);
```

### Set cURL option using setOptions method

The `setOptions` method accepts an array as a parameter.

```php
$options = [CURLOPT_RETURNTRANSFER => true, CURLOPT_PORT => 8080];

$this->curl->setOptions($options);
```

### Set cURL cookies using addCookie method

The `addCookie` method accepts an array as a parameter. The cookie name and the cookie value.

```php
$this->curl->addCookie("cookie-name", "cookie-value");
```

### Set cURL cookies using setCookies method

The ``setCookies`` method accepts an array as a parameter.

```php
$cookies = ["cookie-name-1" => "cookie-value-1", "cookie-name-2" => "cookie-value-2"];
$this->curl->setCookies($cookies);
```

### How to use cURL with Magento

For example, the `Magento\Marketplace\Model\Partners` class gets partners info using cURL from the api of Magento connect.

```php
namespace Magento\Marketplace\Model;

use Magento\Framework\HTTP\Client\Curl;
use Magento\Marketplace\Helper\Cache;
use Magento\Backend\Model\UrlInterface;

/**
 * @api
 * @since 100.0.2
 */
class Partners
{
    /**
     * @var Curl
     */
    protected $curlClient;

    /**
     * @var string
     */
    protected $urlPrefix = 'https://';

    /**
     * @var string
     */
    protected $apiUrl = 'magento.com/magento-connect/platinumpartners/list';

    /**
     * @var \Magento\Marketplace\Helper\Cache
     */
    protected $cache;

    /**
     * @param Curl $curl
     * @param Cache $cache
     * @param UrlInterface $backendUrl
     */
    public function __construct(Curl $curl, Cache $cache, UrlInterface $backendUrl)
    {
        $this->curlClient = $curl;
        $this->cache = $cache;
        $this->backendUrl = $backendUrl;
    }

    /**
     * @return string
     */
    public function getApiUrl()
    {
        return $this->urlPrefix . $this->apiUrl;
    }

    /**
     * Gets partners json
     *
     * @return array
     */
    public function getPartners()
    {
        $apiUrl = $this->getApiUrl();
        try {
            $this->getCurlClient()->post($apiUrl, []);
            $this->getCurlClient()->setOptions(
                [
                    CURLOPT_REFERER => $this->getReferer()
                ]
            );
            $response = json_decode($this->getCurlClient()->getBody(), true);
            if ($response['partners']) {
                $this->getCache()->savePartnersToCache($response['partners']);
                return $response['partners'];
            } else {
                return $this->getCache()->loadPartnersFromCache();
            }
        } catch (\Exception $e) {
            return $this->getCache()->loadPartnersFromCache();
        }
    }

    /**
     * @return Curl
     */
    public function getCurlClient()
    {
        return $this->curlClient;
    }

    /**
     * @return cache
     */
    public function getCache()
    {
        return $this->cache;
    }

    /**
     * @return string
     */
    public function getReferer()
    {
        return \Magento\Framework\App\Request\Http::getUrlNoScript($this->backendUrl->getBaseUrl())
        . 'admin/marketplace/index/index';
    }
}
```

First off all the cURL client instance is created in `__construct`.
Method `getPartners` uses the cURL client makes POST request using cURL, the `post` method takes the first parameter the URL to the api of Magento connect, second parameter is empty array, then the option `CURLOPT_REFERER` added by `setOptions` method of the cURL client.
As result the script call `getBody` method of the cURL client.

{:.ref-header}
Related topics

[Status codes and responses]({{ page.baseurl }}/get-started/gs-web-api-response.html)
