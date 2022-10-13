---
group: web-api
title: Token-based authentication
functional_areas:
  - Integration
---

To make a web [API](https://glossary.magento.com/api) call from a client such as a mobile application, you must supply an *access token* on the call. The token acts like an electronic key that lets you access the API.

Magento issues the following types of access tokens:

Token type | Description | Default lifetime
--- | --- | ---
Integration | The merchant determines which Magento resources the integration has access to. | Indefinite. It lasts until it is manually revoked.
Admin | The merchant determines which Magento resources an admin user has access to. | 4 hours
Customer | Magento grants access to resources with the `anonymous` or `self` permission. Merchants cannot edit these settings. | 1 hour

## Integration tokens

When a merchant creates and activates an integration, Magento generates a consumer key, consumer secret, access token, and access token secret. All of these entities are used for [OAuth-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html), but token-based authentication requires only the access token.

Use the following steps to generate an access token:

1. Log in to Admin and click **System** > **Extensions** > **Integrations** to display the Integrations page.
1. Click **Add New Integration** to display the New Integration page.
1. Enter a unique name for the integration in the **Name** field. Then enter your admin password in the **Your Password** field. Leave all other fields blank.
1. Click the API tab. Select the Magento resources the integration can access. You can select all resources, or select a custom list.
1. Click **Save** to save your changes and return to the Integrations page.
1. Click the **Activate** link in the grid that corresponds to the newly-created integration.
1. Click **Allow** . A dialog similar to the following displays:

   ![REST client]({{ page.baseurl }}/get-started/authentication/images/integration-tokens.png)

The access token can be used in all calls made on behalf of the integration.

## Admin and customer access tokens

Magento provides a separate token service for administrators and customers. When you request a token from one of these services, the service returns a unique access token in exchange for the username and password for a Magento account.

The Magento web API framework allows *guest users* to access resources that are configured with the permission level of anonymous. Guest users are users who the framework cannot authenticate through existing authentication mechanisms. As a guest user, you do not need to, but you can, specify a token in a web API call for a resource with anonymous permission. [Restricting access to anonymous web APIs]({{ page.baseurl }}/rest/anonymous-api-security.html) contains a list of APIs that do not require a token.

Use the following calls to get an authentication token:

Request|REST|SOAP
---|---|---
Get an admin token | `POST /V1/integration/admin/token` | `integrationAdminTokenServiceV1`
Get a customer token | `POST /V1/integration/customer/token` | `integrationCustomerTokenServiceV1`

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
