---
group: extension-best-practices
title: Creating an integration with an external API
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

This tutorial shows you how to create an integration with an external API using [GuzzleHttp](http://docs.guzzlephp.org/en/stable/quickstart.html){:target="_blank"} library, that is included into Magento package.

Guzzle is a PHP HTTP client that makes it easy to create some integrations with some web services.
Its implementation code is more simpler, cleaner and readable, in comparision with cURL.

GuzzleHttp uses cURL by default, but it can use any HTTP client that you want other than cURL like PHP's stream wrapper or sockets, in case `curl` isn't installed on your Web Server.

{:.bs-callout-info}
It's much easier to cover a GuzzleHttp implementation by [Unit Tests]({{ page.baseurl }}/test/unit/writing_testable_code.html), as you're able to mock the HTTP requests.

## Request options

| Option | Description | Type |
| --- | --- | --- |
| `method` | HTTP method, any of `GET`, `POST`, `PUT`, `DELETE` | String |
| `uri` | The API endpoint that needs to be called | String |
| `params` | A list of parameters that needs to be passed to the API  | Array |

## Create a Github API integration

In the following example, we're using the [Github API](https://api.github.com/) as web service, and will fetch some data regarding the Magento 2 Git repository.

```php
<?php

declare(strict_types=1);

namespace Vendor\Module\Service;

use GuzzleHttp\Client;
use GuzzleHttp\ClientFactory;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Psr7\ResponseFactory;
use Magento\Framework\Webapi\Rest\Request;

/**
 * Class GitApiService
 */
class GitApiService
{
    /**
     * API request URL
     */
    const API_REQUEST_URI = 'https://api.github.com/';

    /**
     * API request endpoint
     */
    const API_REQUEST_ENDPOINT = 'repos/';

    /**
     * @var ResponseFactory
     */
    private $responseFactory;

    /**
     * @var ClientFactory
     */
    private $clientFactory;

    /**
     * GitApiService constructor
     *
     * @param ClientFactory $clientFactory
     * @param ResponseFactory $responseFactory
     */
    public function __construct(
        ClientFactory $clientFactory,
        ResponseFactory $responseFactory
    ) {
        $this->clientFactory = $clientFactory;
        $this->responseFactory = $responseFactory;
    }

    /**
     * Fetch some data from API
     */
    public function execute(): void
    {
        $repositoryName = 'magento/magento2';
        $response = $this->doRequest(static::API_REQUEST_ENDPOINT . $repositoryName);
        $status = $response->getStatusCode(); // 200 status code
        $responseBody = $response->getBody();
        $responseContent = $responseBody->getContents(); // here you will have the API response in JSON format
        // Add your logic using $responseContent
    }

    /**
     * Do API request with provided params
     *
     * @param string $uriEndpoint
     * @param array $params
     * @param string $requestMethod
     *
     * @return Response
     */
    private function doRequest(
        string $uriEndpoint,
        array $params = [],
        string $requestMethod = Request::HTTP_METHOD_GET
    ): Response {
        /** @var Client $client */
        $client = $this->clientFactory->create(['config' => [
            'base_uri' => self::API_REQUEST_URI
        ]]);

        try {
            $response = $client->request(
                $requestMethod,
                $uriEndpoint,
                $params
            );
        } catch (GuzzleException $exception) {
            /** @var Response $response */
            $response = $this->responseFactory->create([
                'status' => $exception->getCode(),
                'reason' => $exception->getMessage()
            ]);
        }

        return $response;
    }
}
```

## Result

As result, you get all the available information regarding the Magento repository.

```json
{
  ...
  "name": "magento2",
  "full_name": "magento/magento2",
  "private": false,
  "html_url": "https://github.com/magento/magento2",
  "description": "All Submissions you make to Magento Inc. (\"Magento\") through GitHub are subject to the following terms and conditions: (1) You grant Magento a perpetual, worldwide, non-exclusive, no charge, royalty free, irrevocable license under your applicable copyrights and patents to reproduce, prepare derivative works of, display, publically perform, sublicense and distribute any feedback, ideas, code, or other information (“Submission\") you submit through GitHub. (2) Your Submission is an original work of authorship and you are the owner or are legally entitled to grant the license stated above. (3) You agree to the Contributor License Agreement found here:  https://github.com/magento/magento2/blob/master/CONTRIBUTOR_LICENSE_AGREEMENT.html",
  "fork": false,
  "url": "https://api.github.com/repos/magento/magento2",
  "homepage": "http://www.magento.com",
  "size": 559209,
  "stargazers_count": 8379,
  "watchers_count": 8379,
  "language": "PHP",
  "has_issues": true,
  "has_projects": false,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 7405,
  "archived": false,
  "disabled": false,
  "open_issues_count": 1535,
  "forks": 7405,
  "open_issues": 1535,
  "watchers": 8379,
  "default_branch": "2.4-develop",
  "subscribers_count": 1421,
  ...
}
```
