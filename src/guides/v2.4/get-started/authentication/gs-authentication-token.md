---
group: web-api
title: Token-based authentication
functional_areas:
  - Integration
migrated_to: https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-token/
layout: migrated
---

To make a web [API](https://glossary.magento.com/api) call from a client such as a mobile application, you must supply an *access token* on the call. The token acts like an electronic key that lets you access the API.

Magento issues the following types of access tokens:

Token type | Description | Default lifetime
--- | --- | ---
Integration | The merchant determines which Magento resources the integration has access to. | Indefinite. It lasts until it is manually revoked.
Admin | The merchant determines which Magento resources an admin user has access to. | 4 hours
Customer | Magento grants access to resources with the `anonymous` or `self` permission. Merchants cannot edit these settings. | 1 hour

## Integration tokens

When a merchant creates and activates an integration, Magento generates a consumer key, consumer secret, access token, and access token secret. All of these entities are used for [OAuth-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html).

In previous versions of Magento, the access token could be used on its own for token-based authentication. This behavior has been disabled by default due to the security implications of a never-expiring access token. Namely, if the access token is compromised it provides undetected persistent access to a store.

However, while it is not recommended, this behavior can be restored in the Admin by setting the **Stores** > **Configuration** > **Services** > **OAuth** > **Consumer Settings** > **Allow OAuth Access Tokens to be used as standalone Bearer tokens** option to **Yes**. You can also enable this setting from the CLI by running the following command:

```bash
bin/magento config:set oauth/consumer/enable_integration_as_bearer 1
```

If you are trying to upgrade from a previous version and need to update your integration implementation to properly utilize the OAuth workflow, review [OAuth-based Authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html). Otherwise, you can partially update your integration to simply store and utilize all four credentials to sign your requests.

There is a comprehensive guide for this on the OAuth-based authentication page, but can also be done in isolation without supporting the entire OAuth workflow. For example, in the following script the four credentials are used to create a new CMS page without using external libraries or implementing the full OAuth handshake.

### standalone-oauth.php

{% collapsible Click to expand %}
```php
<?php
const CONSUMER_KEY = '<placeholder>';
const CONSUMER_SECRET = '<placeholder>';
const ACCESS_TOKEN = '<placeholder>';
const ACCESS_TOKEN_SECRET = '<placeholder>';

class RequestDTO {
    public function __construct(
        public string $url,
        public string $method = 'GET',
        public ?string $body = null,
        public array $headers = [],
    ) {}
}
class OAuthCredentialsDTO {
    public function __construct(
        public string $consumerKey,
        public string $consumerSecret,
        public string $accessToken,
        public string $accessTokenSecret
    ) {}
}

class OAuthRequestSigner
{
    public function sign(
        RequestDTO $request,
        OAuthCredentialsDTO $credentials
    ): string {
        $urlParts = parse_url($request->url);
        // Normalize the OAuth params for the base string
        $normalizedHeaders = $request->headers;
        sort($normalizedHeaders);
        $oauthParams = [
            'oauth_consumer_key' => $credentials->consumerKey,
            'oauth_nonce' => base64_encode(random_bytes(32)),
            'oauth_signature_method' => 'HMAC-SHA256',
            'oauth_timestamp' => time(),
            'oauth_token' => $credentials->accessToken
        ];
        // Create the base string
        $signingUrl = $urlParts['scheme'] . '://' . $urlParts['host'] . $urlParts['path'];
        $paramString = $this->createParamString($urlParts['query'] ?? null, $oauthParams);
        $baseString = strtoupper($request->method) . '&' . rawurlencode($signingUrl) . '&' . rawurlencode($paramString);
        // Create the signature
        $signatureKey = $credentials->consumerSecret . '&' . $credentials->accessTokenSecret;
        $signature = base64_encode(hash_hmac('sha256', $baseString, $signatureKey, true));
        return $this->createOAuthHeader($oauthParams, $signature);
    }
    private function createParamString(?string $query, array $oauthParams): string
    {
        // Create the params string
        $params = array_merge([], $oauthParams);
        if (!empty($query)) {
            foreach (explode('&', $query) as $paramToValue) {
                $paramData = explode('=', $paramToValue);
                if (count($paramData) === 2) {
                    $params[rawurldecode($paramData[0])] = rawurldecode($paramData[1]);
                }
            }
        }
        ksort($params);
        $paramString = '';
        foreach ($params as $param => $value) {
            $paramString .= rawurlencode($param) . '=' . rawurlencode($value) . '&';
        }
        return rtrim($paramString, '&');
    }
    private function createOAuthHeader(array $oauthParams, string $signature): string
    {
        // Create the OAuth header
        $oauthHeader = "Authorization: Oauth ";
        foreach ($oauthParams as $param => $value) {
            $oauthHeader .= "$param=\"$value\",";
        }
        return $oauthHeader . "oauth_signature=\"$signature\"";
    }
}

function send(RequestDTO $request): string
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $request->url);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $request->headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $request->method);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $request->body ?? '');
    return (string)curl_exec($ch);
}

$oauthSigner = new OAuthRequestSigner();
$request = new RequestDTO(
    'https://example.com/rest/V1/cmsPage',
    'POST',
    '{
          "page": {
            "identifier": "test-page",
            "title": "my-page",
            "content": "<h1>hello</h1>",
            "active": true
          }
        }',
    ['Content-Type: application/json']
);
$request->headers[] = $oauthSigner->sign(
    $request,
    new OAuthCredentialsDTO(
        CONSUMER_KEY,
        CONSUMER_SECRET,
        ACCESS_TOKEN,
        ACCESS_TOKEN_SECRET
    )
);
echo send($request);
```
{% endcollapsible %}

## Admin and customer access tokens

Magento provides a separate token service for administrators and customers. When you request a token from one of these services, the service returns a unique access token in exchange for the username and password for a Magento account.

The Magento web API framework allows *guest users* to access resources that are configured with the permission level of anonymous. Guest users are users who the framework cannot authenticate through existing authentication mechanisms. As a guest user, you do not need to, but you can, specify a token in a web API call for a resource with anonymous permission. [Restricting access to anonymous web APIs]({{ page.baseurl }}/rest/anonymous-api-security.html) contains a list of APIs that do not require a token.

The following table lists endpoints and services that can be used to get an authentication token. Admin accounts must be authenticated with a [two factor authentication]({{page.baseurl}}/security/two-factor-authentication.html) provider. Some providers may require multiple calls.

Token type |REST| SOAP
---|---|---
Admin with Google Authenticator | `POST /V1/tfa/provider/google/authenticate` | `twoFactorAuthGoogleAuthenticateV1`
Admin with Duo Security | `POST /V1/tfa/provider/duo-security/authenticate` | `twoFactorAuthDuoAuthenticateV1`
Admin with Authy | `POST /V1/tfa/provider/authy/authenticate` | `twoFactorAuthAuthyAuthenticateV1`
Admin with U2F | `POST /V1/tfa/provider/u2fkey/verify` | `twoFactorAuthU2fKeyAuthenticateV1`
Customer | `POST /V1/integration/customer/token` | `integrationCustomerTokenServiceV1`

For most [web API](https://glossary.magento.com/web-api) calls, you supply this token in the `Authorization` request header with the `Bearer` HTTP [authorization](https://glossary.magento.com/authorization) scheme to prove your identity. By default, an admin token is valid for 4 hours, while a customer token is valid for 1 hour. You can change these values from Admin by selecting **Stores** > **Settings** > **Configuration** > **Services** > **OAuth** > **Access Token Expiration**.

A cron job that runs hourly removes all expired tokens.

## Request a token {#request-token}

A access token request contains three basic elements:

Component | Specifies
--- | ---
Endpoint |  A combination of the _server_ that fulfills the request, the web service, and the `resource` against which the request is being made.<br/><br/>For example, in the `POST <host>/rest/<store_code>/V1/integration/customer/token` endpoint:<br/>The server is `magento.host/index.php/`,<br/> the web service is `rest`.<br/> and the resource is `/V1/integration/customer/token`.
Content type | The content type of the request body. Set this value to either `"Content-Type:application/json"` or `"Content-Type:application/xml"`.
Credentials | The username and password for a Magento account.<br/><br/>To specify these credentials in a JSON request body, include code similar to the following in the call: <br/><br/>`{"username":"<USER-NAME>;", "password":"<PASSWORD>"}`<br/><br/>To specify these credentials in XML, include code similar to the following in the call:<br/><br/>`<login><username>customer1</username><password>customer1pw</password></login>`

### Examples {#token-example}

The following image shows a token request for the [admin](https://glossary.magento.com/admin) account using a REST client:

![REST client]({{ page.baseurl }}/get-started/authentication/images/gs_auth_token1.png)

The following example uses the `curl` command to request a token for a customer account:

```bash
curl -X POST "https://magento.host/index.php/rest/V1/integration/customer/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"customer@example.com", "password":"customer_password"}'
```

The following example makes the same request with [XML](https://glossary.magento.com/xml) for a customer account token:

```bash
curl -X POST "http://magento.vg/index.php/rest/V1/integration/customer/token" \
     -H "Content-Type:application/xml"  \
     -d "<login><username>customer1</username><password>customer1pw</password></login>"
```

For more information about the `curl` command, see [Use cURL to run the request]({{ page.baseurl }}/get-started/gs-curl.html)

## Authentication token response {#auth-response}

A successful request returns a response body with the token, as follows:

`asdf3hjklp5iuytre`

## Use the token in a Web API request {#web-api-access}

Any web API call that accesses a resource that requires a permission level higher than anonymous must contain the authentication token in the header To do this, specify a HTTP header in the following format:

`Authorization: Bearer <authentication token>`

### Admin access {#admin-access}

Admins can access any resources for which they are authorized.

For example, to make a web API call with an admin token:

`curl -X GET "http://magento.ll/index.php/rest/V1/customers/2" -H "Authorization: Bearer vbnf3hjklp5iuytre"`

### Customer access

Customers can access only resources with `self` permissions.

For example, to make a web API call with a customer token:
`curl -X GET "http://magento.ll/index.php/rest/V1/customers/me" -H "Authorization: Bearer asdf3hjklp5iuytre"`

{:.ref-header}
Related topics

[Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html)

[Configure services as web APIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html)

[Restricting access to anonymous web APIs]({{ page.baseurl }}/rest/anonymous-api-security.html)
