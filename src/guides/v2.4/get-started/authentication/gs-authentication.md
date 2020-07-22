---
group: web-api
title: Authentication
functional_areas:
  - Integration
---

Magento allows developers to define web [API](https://glossary.magento.com/api) resources and their permissions in the `webapi.xml` configuration file. See [Services as Web APIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html).

Before you can make [web API](https://glossary.magento.com/web-api) calls, you must authenticate your identity and have necessary permissions (authorization) to access the API resource. Authentication allows Magento to identify the caller's user type. A user's (administrator, integration, customer, or guest) access rights determine an API call's resource accessibility.

## Accessible resources

The list of resources that you can access depends on your user type. All customers have the same permissions, and as a result the same resources accessible. The preceding statement is true for guest users as well.
Each administrator or integration user can have a unique set of permissions which is configured in the [Magento Admin](https://glossary.magento.com/magento-admin).
Permissions required to access particular resource are configured in the `webapi.xml` file. This table lists the resources that each user type can access:

User type | Accessible resources (defined in webapi.xml)
--- | ---
Administrator or Integration | Resources for which administrators or integrators are authorized. For example, if administrators are authorized for the `Magento_Customer::group` resource, they can make a `GET /V1/customerGroups/:id` call.
Customer | Resources with `anonymous` or `self` permission
Guest user | Resources with `anonymous` permission

## Relationship between acl.xml and webapi.xml

The `acl.xml` file defines the access control list (ACL) for a given [module](https://glossary.magento.com/module). It defines the available set of permissions to access resources.

All `acl.xml` files across all Magento modules are consolidated to build an ACL tree, which is used to select allowed [Admin](https://glossary.magento.com/admin) role resources or third-party integration access (**System** > **Extension** > **Integration** > **Add New Integration** > **Available APIs**).

### Sample customer acl.xml

For example, account management, customer configuration, and customer group resource permissions are defined in the Customer module's [`acl.xml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/etc/acl.xml).

When a developer creates the Web API configuration file (<code>webapi.xml</code>), the permissions defined in acl.xml are referenced to create access rights for each API resource.

### Sample (truncated) customer webapi.xml

```xml
<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">
    <!-- Customer Group -->
    <route url="/V1/customerGroups/:id" method="GET">
        <service class="Magento\Customer\Api\GroupRepositoryInterface" method="getById"/>
        <resources>
            <resource ref="Magento_Customer::group"/>
        </resources>
    </route>
............
.......
.....
    <!-- Customer Account -->
    <route url="/V1/customers/:customerId" method="GET">
        <service class="Magento\Customer\Api\CustomerRepositoryInterface" method="getById"/>
        <resources>
            <resource ref="Magento_Customer::customer"/>
        </resources>
    </route>
    <route url="/V1/customers" method="POST">
        <service class="Magento\Customer\Api\AccountManagementInterface" method="createAccount"/>
        <resources>
            <resource ref="anonymous"/>
        </resources>
    </route>
    <route url="/V1/customers/:customerId" method="PUT">
        <service class="Magento\Customer\Api\CustomerRepositoryInterface" method="save"/>
        <resources>
            <resource ref="Magento_Customer::manage"/>
        </resources>
    </route>
    <route url="/V1/customers/me" method="PUT">
        <service class="Magento\Customer\Api\CustomerRepositoryInterface" method="save"/>
        <resources>
            <resource ref="self"/>
        </resources>
        <data>
            <parameter name="customer.id" force="true">%customer_id%</parameter>
        </data>
    </route>
..........
.....
...
```

For example, in the preceding `webapi.xml` for the customerGroups resource, only a user with `Magento_Customer::group` authorization can `GET /V1/customerGroups/:id`. On the other hand, you can create a customer using `POST /V1/customers` anonymously (or by a guest).

[Authorization](https://glossary.magento.com/authorization) is granted to either an administrator (or an integration) defined in the Magento Admin with the customer group selected as one of the resources in the ACL tree.

{:.bs-callout-info}
A guest or anonymous is a special permission that doesn't need to be defined in `acl.xml` (and will not show up in the permissions tree in the Magento Admin). It just indicates that the current resource in `webapi.xml` can be accessed without the need for authentication.
<br/><br/>
Similarly, self is a special access used if you already have an authenticated session with the system. Self access enables a user to access resources they own. For example, `GET /V1/customers/me` fetches the logged-in customer's details. This is typically useful for JavaScript-based widgets.

## Web API clients and authentication methods

You must use a client, such as a mobile application or an external batch job, to access Magento services using web APIs.

Each type of client has a preferred authentication method. To authenticate, use the authentication method for your preferred client:

<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Client</th>
      <th>Authentication method and process</th>
   </tr>
   <tr>
      <td>
         <p>Mobile application</p>
      </td>
      <td>
         <p>Registered users use <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication-token.html">token-based authentication</a> to make web API calls using a mobile application. The token acts like an electronic key that provides access to the API(s).</p>
         <ol>
            <li>
               <p>As a registered Magento user, you request a token from the Magento token service at the endpoint that is defined for your user type.</p>
            </li>
            <li>
               <p>The token service returns a unique authentication token in exchange for a username and password for a Magento account.</p>
            </li>
            <li>
               <p>
                  To prove your identity, specify this token in the <code>Authorization</code> request header <!-- with the <code>Bearer</code> HTTP authorization scheme  -->on web API calls.
               </p>
            </li>
         </ol>
         <!--  <p>The token never expires but it can be revoked.</p> -->
      </td>
   </tr>
   <tr>
      <td>
         <p>Third-party application</p>
      </td>
      <td>
         <p>Third-party applications use <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html">OAuth-based authentication</a> to access the web APIs.</p>
         <ol>
            <li>
               <p>The third-party Integration registers with Magento.</p>
            </li>
            <li>
               <p>Merchants authorize extensions and applications to access or update store data.</p>
            </li>
         </ol>
      </td>
   </tr>
   <tr>
      <td>
         <p>JavaScript widget on the Magento storefront or Magento Admin</p>
      </td>
      <td>
         <p>Registered users use <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication-session.html">session-based authentication</a> to log in to the Magento storefront or Magento Admin.</p>
         <p>A session is identified by a cookie and time out after a period of inactivity. Additionally, you can have a session as a guest user without logging in.</p>
         <ol>
            <li>
               <p>As a customer, you log in to the Magento storefront with your customer credentials. As an administrator, you log in to the Magento Admin with your administrator credentials.</p>
            </li>
            <li>
               <p>The Magento web API framework identifies you and controls access to the requested resource.
               </p>
            </li>
         </ol>
      </td>
   </tr>
</table>

The following sections describe tips about which type of authentication method you should use depending on your use case.

### Token based (Bearer Authentication)

This method is a good choice for authenticating customers and Admin users in third-party applications that need to make authorized API calls to the Magento store.

*  **Customer Token**—Use this token in applications to authorize specific customer and query data related to that customer (for example, customer details, cart, and orders).
*  **Admin Token**—Use this token in applications to authorize an Admin user and access Admin-related APIs.

[Request a token]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html#request-token) and then (include it in future requests)({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html#web-api-access).

{:.bs-callout-info}
You should use this type of authentication mechanism over HTTPS.

### Integration (Bearer Authentication)

This method is a good choice for integrating with a third-party system that supports this kind of authentication. You can restrict access to specific resources.

Magento generates a consumer key, consumer secret, access token, and access token secret when you create an active integration (self activated).

To use bearer authentication for API requests, you can use an access token. [Create an active integration]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html#integration-tokens) (self activated) and [use the access token]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html#web-api-access) in the authorization header:

```bash
curl -X GET "http://magento2ce74.loc:8080/index.php/rest/V1/customers/1" -H "Authorization: Bearer 9xvitupdkju0cabq2i3dxyg6bblqmg5h"
```

{:.bs-callout-info}
You should use this type of authentication mechanism over HTTPS.

### Integration (Oauth)

This method is a good choice for integrating with a third-party system that supports OAuth 1.0a.

After activating an integration (self activated), you can use the generated consumer key, consumer secret, access token, and access token secret to provide third-party systems access to Magento Store resources. You do not need to make calls to the `/oauth/token/request` or `/oauth/token/access` endpoints to exchange tokens.

If a third-party system provides endpoints, you can use them to [activate an integration]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html#activate) and link your account. After completing the activation process, a third-party service can use the consumer key, consumer secret, access token, and access token secret provided by Magento during activation to make API calls.

{:.ref-header}
Related topics

Proceed to the authentication method for your preferred client:

*  Mobile application. [Token-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html).

*  Third-party application. [OAuth-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html).

*  JavaScript [widget](https://glossary.magento.com/widget) on the Magento Admin or [storefront](https://glossary.magento.com/storefront). [Session-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

*  [Extension attribute authentication]({{ page.baseurl }}/extension-dev-guide/attributes.html)

*  [Configure services as web APIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html)

*  [Create an ACL rule]({{ page.baseurl }}/ext-best-practices/tutorials/create-access-control-list-rule.html)
