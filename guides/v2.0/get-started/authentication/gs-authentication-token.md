---
layout: default
group: get-started
subgroup: B_Authentication
title: Token-based authentication
menu_title: Token-based authentication
menu_order: 1
version: 2.0
github_link: get-started/authentication/gs-authentication-token.md
redirect_from: /guides/v1.0/get-started/authentication/gs-authentication-token.html
---

## Authentication tokens

To make a web API call from a client such as a mobile application, you must supply an *authentication token* on the call. The token acts like an electronic key that lets you access the API.

Magento provides a separate token service for administrators and customers. When you request a token from one of these services, the service returns a unique authentication token in exchange for the user name and password for a Magento account.

The Magento web API framework allows *guest users* to access resources that are configured with the permission level of anonymous. Guest users are users who the framework cannot authenticate through existing authentication mechanisms. As a guest user, you do not need to, but you can, specify a token in a web API call for a resource with anonymous permission. [Restricting access to anonymous web APIs]({{page.baseurl}}rest/anonymous-api-security.md) contains a list of APIs that do not require a token.

Use the following calls to get an authentication token:

Request|REST|SOAP
---|---|---
Get an admin token | `POST /V1/integration/admin/token` | `integrationAdminTokenServiceV1`
Get a customer token | `POST /V1/integration/customer/token` | `integrationCustomerTokenServiceV1`

For most web API calls, you supply this token in the `Authorization` request header with the `Bearer` HTTP authorization scheme to prove your identity. The token never expires, but it can be revoked.

## Request a token

A authentication token request contains three basic elements:

<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Component</th>
      <th>Specifies</th>
   </tr>
   <tr>
      <td>Endpoint</td>
      <td>
         <p>A combination of the <i>server</i> that fulfills the request, the web service, and the <i>resource</i> against which the request is being made.</p>
         <p>For example, in the <code>POST https://magento.host/index.php/rest/V1/integration/customer/token</code> endpoint:</p>
         <p>The server is <code>magento.host/index.php/</code></p>
         <p>the web service is <code>rest</code></p>
          the resource is <code>/V1/integration/customer/token</code>.</p>
      </td>
   </tr>
   <tr>
      <td>Content&nbsp;type</td>
      <td>
         <p>The content type of the request body. Set this value to either <code>"Content-Type:application/json"</code> or <code>"Content-Type:application/xml"</code>.</p>
      </td>
   </tr>
   <tr>
      <td>Credentials</td>
      <td>
         <p>The user name and password for a Magento account.</p>
         <p>To specify these credentials in a JSON request body, include <code>'{"username":"&lt;USER-NAME&gt;", "password":"&lt;PASSWORD&gt;"}'</code> in the call.</p>
         <p> To specify these credentials in XML, include <code>&lt;login>&lt;username>customer1@example.com&lt;/username>&lt;password>customer1pw&lt;/password>&lt;/login></code> in the call.</p>
      </td>
   </tr>
</table>

#### Examples

The following image shows a token request for the admin account using a REST client:

![REST client](./gs_auth_token1.png)

The following example uses the `curl` command to request a token for a customer account:

`curl -X POST "https://magento.host/index.php/rest/V1/integration/customer/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"customer1@example.com", "password":"customer1pw"}'`

The following example makes the same request with XML for a customer account token:

`curl -X POST "http://magento.vg/index.php/rest/V1/integration/customer/token" -H "Content-Type:application/xml"  -d '<login><username>customer1@example.com</username><password>customer1pw</password></login>'`

For more information about the `curl` command, see [Use cURL to run the request]({{page.baseurl}}get-started/gs-curl.html)

## Authentication token response {#auth-response}

A successful request returns a response body with the token, as follows:

`asdf3hjklp5iuytre`

## Use the token in a Web API request {#web-api-access}

Any web API call that accesses a resource that requires a permission level higher than anonymous must contain the authentication token in the header To do this, specify a HTTP header in the following format:

`Authorization: Bearer <authentication token>`

### Admin access
Admins can access any resources for which they are authorized.

For example, to make a web API call with an admin token:

`curl -X GET "http://magento.ll/index.php/rest/V1/customers/2" -H "Authorization: Bearer vbnf3hjklp5iuytre"`

### Customer access
Customers can access only resources with `self` permissions.

For example, to make a web API call with a customer token:
`curl -X GET "http://magento.ll/index.php/rest/V1/customers/me" -H "Authorization: Bearer asdf3hjklp5iuytre"`

<h2>Related topics</h2>
[Construct a request]({{page.baseurl}}/get-started/gs-web-api-request.html)

[Configure services as web APIs]({{page.baseurl}}extension-dev-guide/service-contracts/service-to-web-service.html)

[Restricting access to anonymous web APIs]({{page.baseurl}}rest/anonymous-api-security.md)
