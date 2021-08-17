---
group: web-api
title: OAuth-based authentication
functional_areas:
  - Integration
---

Magento OAuth authentication is based on [OAuth 1.0a](https://tools.ietf.org/html/rfc5849), an open standard for secure [API](https://glossary.magento.com/api) authentication. OAuth is a token-passing mechanism that allows a system to control which third-party applications have access to internal data without revealing or storing any user IDs or passwords.

In Magento, a third-party application that uses OAuth for authentication is called an [_integration_]( {{ page.baseurl }}/get-started/create-integration.html ). An integration defines which resources the application can access. The application can be granted access to all resources or a customized subset of resources.

As the process of registering the integration proceeds, Magento creates the tokens that the application needs for authentication. It first creates a request token. This token is short-lived and must be exchanged for an access token. Access tokens are long-lived and will not expire unless the merchant revokes access from the application.

## OAuth overview {#overview}

The following diagram shows the OAuth authentication process. Each step is described further.
![OAuth flow]({{ page.baseurl }}/get-started/authentication/images/oauthflow.png)

1. **Create an integration**.  The merchant creates an integration from [Admin](https://glossary.magento.com/admin). Magento generates a consumer key and a consumer secret.

1. **Activate the integration**. The OAuth process begins when the merchant activates the integration. Magento sends the OAuth consumer key and secret, an OAuth verifier, and the store [URL](https://glossary.magento.com/url) to the external application via HTTPS post to the page defined in the **Callback Link** field in Admin. See [Activate an integration](#activate) for more information.

1. **Process activation information**. The integrator must store the activation information received in step 2. These parameters will be used to ask for  tokens.

1. **Call the application's login page**. Magento calls the page defined in the **Identity Link** field in Admin.

1. **Merchant logs in to the external application.** If the login is successful, the application returns to the location specified in the call. The login page is dismissed.

1. **Ask for a request token**. The application uses the `POST /oauth/token/request` REST API to ask for a request token. The `Authorization` header includes the consumer key and other information. See [Get a request token](#pre-auth-token) for details about this token request.

1. **Send the request token**. Magento returns a request token and request token secret.

1. **Ask for an access token**. The application uses the `POST /oauth/token/access` REST API to ask for an access token. The `Authorization` header includes the request token and other information. See [Get an access token](#get-access-token) for details about this token request.

1. **Magento sends the access token**. If this request is successful, Magento returns an access token and access token secret.

1. **The application can access Magento resources.** All requests sent to Magento must use the full set of request parameters in `Authorization` header. See [Access the web APIs](#web-api-access) for more information.

## Activate an integration {#activate}

The integration must be configured from the [Magento Admin](https://glossary.magento.com/magento-admin) (**System > Extensions > Integrations**).  The configuration includes a callback URL and an identity link URL.  The callback URL specifies where OAuth credentials can be sent when using OAuth for token exchange. The identity link points to the login page of the third-party application that is integrating with Magento.

A merchant can choose to select **Save and Activate** when the integration is created. Alternatively, the merchant can click on **Activate** against a previously saved integration from the Integration grid.

When the integration is created, Magento generates a consumer key and a consumer secret.

Activating the integration submits the credentials to the endpoint specified when creating the Integration. An HTTP POST from Magento to the Integration endpoint will contain these attributes:

*  `store_base_url` For example, `http://my-magento-store.com/`.
*  `oauth_verifier`
*  `oauth_consumer_key`
*  `oauth_consumer_secret`

Integrations use the `oauth_consumer_key` key to get a request token and the `oauth_verifier` to get an access token.

## OAuth handshake details {#oauth-handshake}

The process of completing the OAuth handshake requires that you

*  [Get a request token](#pre-auth-token)
*  [Get an access token](#get-access-token)

This process is known as a 2-legged OAuth handshake.

### Get a request token {#pre-auth-token}

A request token is a temporary token that the user exchanges for an access token. Use the following API to get a request token from Magento:

`POST /oauth/token/request`

You must include these request parameters in the `Authorization`  header in the call:

Parameter | Description
--- | ---
`oauth_consumer_key` | The consumer key is generated when you create the integration.
`oauth_signature_method` | The name of the signature method used to sign the request. Must be the value `HMAC-SHA1`.
`oauth_signature` | A generated value (signature)
`oauth_nonce` | A random value that is uniquely generated by the application.
`oauth_timestamp` | A positive integer, expressed in the number of seconds since January 1, 1970 00:00:00 GMT.
`oauth_version` | The OAuth version.

The response contains these fields:

*  `oauth_token`. The token to be used when requesting an access token.
*  `oauth_token_secret`.  A secret value that establishes ownership of the token.

A valid response looks like this:

`oauth_token=4cqw0r7vo0s5goyyqnjb72sqj3vxwr0h&oauth_token_secret=rig3x3j5a9z5j6d4ubjwyf9f1l21itrr`

### Get an access token {#get-access-token}

The request token must be exchanged for an access token. Use the following API to get an access token from Magento:

`POST /oauth/token/access`

You must include these request parameters in the `Authorization`  header in the call:

Parameter | Description
--- | ---
`oauth_consumer_key` | The consumer key value that you retrieve after you register the integration.
`oauth_nonce` | A random value that is uniquely generated by the application.
`oauth_signature` | A generated value (signature)
`oauth_signature_method` | The name of the signature method used to sign the request. Must be the value `HMAC-SHA1`.
`oauth_timestamp` | A positive integer, expressed in the number of seconds since January 1, 1970 00:00:00 GMT.
`oauth_version` | The OAuth version.
`oauth_token` | The `oauth_token` value, or request token, obtained in [Get a request token](#pre-auth-token).
`oauth_verifier` | The verification code that is tied to the consumer and request token. It is sent as part of the initial POST operation when the integration is activated.

A valid response looks like this:
`oauth_token=0lnuajnuzeei2o8xcddii5us77xnb6v0&oauth_token_secret=1c6d2hycnir5ygf39fycs6zhtaagx8pd`

The response contains these fields:

*  `oauth_token`. The access token that provides access to protected resources.
*  `oauth_token_secret`. The secret that is associated with the access token.

## Access the web APIs {#web-api-access}

After the integration is authorized to make API calls, third-party applications (registered as integrations in Magento) can invoke Magento web APIs by using the access token.

To use the access token to make [web API](https://glossary.magento.com/web-api) calls:

`GET /rest/V1/products/1234`

You must include these request parameters in the `Authorization` request header in the call:

*  `oauth_consumer_key`. The customer key value provided after the registration of the application.
*  `oauth_nonce`. A random value, uniquely generated by the application.
*  `oauth_signature_method`. The name of the signature method used to sign the request. Valid values are: `HMAC-SHA1`, `RSA-SHA1`, and `PLAINTEXT`.
*  `oauth_signature`. A generated value (signature).
*  `oauth_timestamp`. A positive integer, expressed in the number of seconds since January 1, 1970 00:00:00 GMT.
*  `oauth_token`. The `oauth_token`, or access token, value obtained in [Get an access token](#get-access-token).

## The OAuth signature {#oauth-signature}

All OAuth handshake requests and Web Api requests include the signature as part of [Authorization](https://glossary.magento.com/authorization) header. Its generated as follows:

You concatenate a set of URL-encoded attributes and parameters to construct the signature base string.

Use the ampersand (`&`) character to concatenate these attributes and parameters:

1. HTTP method
1. URL
1. `oauth_nonce`
1. `oauth_signature_method`
1. `oauth_timestamp`
1. `oauth_version`
1. `oauth_consumer_key`
1. `oauth_token`

To generate the signature, you must use the HMAC-SHA1 signature method. The signing key is the concatenated values of the consumer secret and token secret separated by the ampersand (`&`) character (ASCII code 38), even if empty. You must use parameter encoding to encode each value.

## OAuth token exchange example {#oauth-example}

The scripts provided in this document simulate the Magento 2 [OAuth 1.0a](https://tools.ietf.org/html/rfc5849) token exchange flow. You can drop these scripts under the document root directory of your Magento application so that they can be exposed as endpoints that your Magento application can interact with to mimic the token exchange.

The OAuth client is extended from and attributed to [PHPoAuthLib](https://github.com/Lusitanian/PHPoAuthLib), which is the same lib used in the [Magento OAuth client]({{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/api-functional/framework/Magento/TestFramework/Authentication/Rest/OauthClient.php).

To simulate the OAuth 1.0a token exchange flow:

1. Login to your Magento Admin and navigate to **System > Extensions > Integrations**
1. Click on **Add New Integration**.
1. Complete all details in the Integration Info tab:
   *  **Name** : SomeUniqueIntegrationName
   *  **Callback URL** : http://your_app_host/endpoint.php
   *  **Identity link URL** : http://your_app_host/login.php
   *  Add permissions as desired on the **API** tab
1. Select the **Save and Activate** option from the drop down menu.
1. A pop-up window displays, confirming API permissions. Click **Allow**. (Make sure your browser allows pop-up windows.) The credentials are posted to `endpoint.php`. You should also see another pop-up for the identity linking step that opens the script from `login.php`.
1. Click **Login**. (There is no actual login check since this is a simulation.). The `checklogin.php` script is called. It uses the posted credentials to complete the token exchange.
1. When the token exchange completes successfully, the user is redirected back to the Integrations grid. The newly-created integration should be in the Active state.
1. Click on the edit icon of the integration and check the Integration Details on the Integration Info tab. It should show all the credentials that can be used to make an authenticated API request using OAuth 1.0.

### checklogin.php

{% collapsible Click to expand %}
```php
<?php
require './vendor/autoload.php';

$consumerKey = $_REQUEST['oauth_consumer_key'];
$callback = $_REQUEST['callback_url'];

session_id('test');
session_start();

/** Use $consumerKey to retrieve the following data in case it was stored in DB when received at "endpoint.php" */
if ($consumerKey !== $_SESSION['oauth_consumer_key']) {
    throw new \Exception("Consumer keys received on different requests do not match.");
}

$consumerSecret = $_SESSION['oauth_consumer_secret'];
$magentoBaseUrl = rtrim($_SESSION['store_base_url'], '/');
$oauthVerifier = $_SESSION['oauth_verifier'];

define('TESTS_BASE_URL', $magentoBaseUrl);

$credentials = new \OAuth\Common\Consumer\Credentials($consumerKey, $consumerSecret, $magentoBaseUrl);
$oAuthClient = new OauthClient($credentials);
$requestToken = $oAuthClient->requestRequestToken();
$accessToken = $oAuthClient->requestAccessToken(
    $requestToken->getRequestToken(),
    $oauthVerifier,
    $requestToken->getRequestTokenSecret()
);

header("location: $callback");
```
{% endcollapsible %}

### endpoint.php
{% collapsible Click to expand %}
```php
<?php
session_id('test');
session_start();

// If this data is stored in the DB, oauth_consumer_key can be used as ID to retrieve this data later in "checklogin.php"
// For simplicity of this sample, it is stored in session
$_SESSION['oauth_consumer_key'] = $_POST['oauth_consumer_key'];

$_SESSION['oauth_consumer_secret'] = $_POST['oauth_consumer_secret'];
$_SESSION['store_base_url'] = $_POST['store_base_url'];
$_SESSION['oauth_verifier'] = $_POST['oauth_verifier'];

session_write_close();

header("HTTP/1.0 200 OK");
echo "Response";
```
{% endcollapsible %}

### login.php
{% collapsible Click to expand %}
```php
<?php
$consumerKey = $_REQUEST['oauth_consumer_key'];
$callbackUrl = urlencode(urldecode($_REQUEST['success_call_back']));

echo <<<HTML
<table width="300" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#CCCCCC">
    <tr>
        <form name="form1" method="post" action="checklogin.php?oauth_consumer_key={$consumerKey}&callback_url={$callbackUrl}">
            <td>
                <table width="100%" border="0" cellpadding="3" cellspacing="1" bgcolor="#FFFFFF">
                    <tr>
                        <td colspan="3"><strong>Integrations Login</strong></td>
                    </tr>
                    <tr>
                        <td width="78">Username</td>
                        <td width="6">:</td>
                        <td width="294"><input name="myusername" type="text" id="myusername"></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>:</td>
                        <td><input name="mypassword" type="text" id="mypassword"></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td><input type="submit" name="Submit" value="Login"></td>
                    </tr>
                </table>
            </td>
        </form>
    </tr>
</table>
HTML;
```
{% endcollapsible %}

### OauthClient.php

Change the instances of `http://magento.host` in this example to a valid base URL.

{% collapsible Click to expand %}

```php
<?php

use OAuth\Common\Consumer\Credentials;
use OAuth\Common\Http\Client\ClientInterface;
use OAuth\Common\Http\Exception\TokenResponseException;
use OAuth\Common\Http\Uri\Uri;
use OAuth\Common\Http\Uri\UriInterface;
use OAuth\Common\Storage\TokenStorageInterface;
use OAuth\OAuth1\Service\AbstractService;
use OAuth\OAuth1\Signature\SignatureInterface;
use OAuth\OAuth1\Token\StdOAuth1Token;
use OAuth\OAuth1\Token\TokenInterface;

class OauthClient extends AbstractService
{
    /** @var string|null */
    protected $_oauthVerifier = null;

    public function __construct(
        Credentials $credentials,
        ClientInterface $httpClient = null,
        TokenStorageInterface $storage = null,
        SignatureInterface $signature = null,
        UriInterface $baseApiUri = null
    ) {
        if (!isset($httpClient)) {
            $httpClient = new \OAuth\Common\Http\Client\StreamClient();
        }
        if (!isset($storage)) {
            $storage = new \OAuth\Common\Storage\Session();
        }
        if (!isset($signature)) {
            $signature = new \OAuth\OAuth1\Signature\Signature($credentials);
        }
        parent::__construct($credentials, $httpClient, $storage, $signature, $baseApiUri);
    }

    /**
     * @return UriInterface
     */
    public function getRequestTokenEndpoint()
    {
        return new Uri('http://magento.host/oauth/token/request');
    }

    /**
     * Returns the authorization API endpoint.
     *
     * @throws \OAuth\Common\Exception\Exception
     */
    public function getAuthorizationEndpoint()
    {
        throw new \OAuth\Common\Exception\Exception(
            'Magento REST API is 2-legged. Current operation is not available.'
        );
    }

    /**
     * Returns the access token API endpoint.
     *
     * @return UriInterface
     */
    public function getAccessTokenEndpoint()
    {
        return new Uri('http://magento.host/oauth/token/access');
    }

    /**
     * Parses the access token response and returns a TokenInterface.
     *
     * @param string $responseBody
     * @return TokenInterface
     */
    protected function parseAccessTokenResponse($responseBody)
    {
        return $this->_parseToken($responseBody);
    }

    /**
     * Parses the request token response and returns a TokenInterface.
     *
     * @param string $responseBody
     * @return TokenInterface
     * @throws TokenResponseException
     */
    protected function parseRequestTokenResponse($responseBody)
    {
        $data = $this->_parseResponseBody($responseBody);
        if (isset($data['oauth_verifier'])) {
            $this->_oauthVerifier = $data['oauth_verifier'];
        }
        return $this->_parseToken($responseBody);
    }

    /**
     * Parse response body and create oAuth token object based on parameters provided.
     *
     * @param string $responseBody
     * @return StdOAuth1Token
     * @throws TokenResponseException
     */
    protected function _parseToken($responseBody)
    {
        $data = $this->_parseResponseBody($responseBody);
        $token = new StdOAuth1Token();
        $token->setRequestToken($data['oauth_token']);
        $token->setRequestTokenSecret($data['oauth_token_secret']);
        $token->setAccessToken($data['oauth_token']);
        $token->setAccessTokenSecret($data['oauth_token_secret']);
        $token->setEndOfLife(StdOAuth1Token::EOL_NEVER_EXPIRES);
        unset($data['oauth_token'], $data['oauth_token_secret']);
        $token->setExtraParams($data);
        return $token;
    }

    /**
     * Parse response body and return data in array.
     *
     * @param string $responseBody
     * @return array
     * @throws \OAuth\Common\Http\Exception\TokenResponseException
     */
    protected function _parseResponseBody($responseBody)
    {
        if (!is_string($responseBody)) {
            throw new TokenResponseException("Response body is expected to be a string.");
        }
        parse_str($responseBody, $data);
        if (null === $data || !is_array($data)) {
            throw new TokenResponseException('Unable to parse response.');
        } elseif (isset($data['error'])) {
            throw new TokenResponseException("Error occurred: '{$data['error']}'");
        }
        return $data;
    }

    /**
     * @override to fix since parent implementation from lib not sending the oauth_verifier when requesting access token
     * Builds the authorization header for an authenticated API request
     *
     * @param string $method
     * @param UriInterface $uri the uri the request is headed
     * @param \OAuth\OAuth1\Token\TokenInterface $token
     * @param $bodyParams array
     * @return string
     */
    protected function buildAuthorizationHeaderForAPIRequest(
        $method,
        UriInterface $uri,
        TokenInterface $token,
        $bodyParams = null
    ) {
        $this->signature->setTokenSecret($token->getAccessTokenSecret());
        $parameters = $this->getBasicAuthorizationHeaderInfo();
        if (isset($parameters['oauth_callback'])) {
            unset($parameters['oauth_callback']);
        }

        $parameters = array_merge($parameters, ['oauth_token' => $token->getAccessToken()]);
        $parameters = array_merge($parameters, $bodyParams);
        $parameters['oauth_signature'] = $this->signature->getSignature($uri, $parameters, $method);

        $authorizationHeader = 'OAuth ';
        $delimiter = '';

        foreach ($parameters as $key => $value) {
            $authorizationHeader .= $delimiter . rawurlencode($key) . '="' . rawurlencode($value) . '"';
            $delimiter = ', ';
        }

        return $authorizationHeader;
    }
}
```

{% endcollapsible %}

{:.ref-header}
Related topics

[Create an integration]( {{ page.baseurl }}/get-started/create-integration.html )

[OAuth error codes]( {{ page.baseurl }}/get-started/authentication/oauth-errors.html )

[Construct a request]( {{ page.baseurl }}/get-started/gs-web-api-request.html )

[Configure services as web APIs]( {{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html )
