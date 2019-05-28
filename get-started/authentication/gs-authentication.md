---
group: web-api
subgroup: 40_Authentication
title: Authentication
menu_title: Authentication
menu_order: 1
menu_node: parent
functional_areas:
  - Integration
---

## Web API authentication overview   {#overview-authenticate}

Magento allows developers to define web {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} resources and their permissions in a configuration file <code>webapi.xml</code>.
Here are more details on exposing [services as Web APIs]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html).

Before you can make {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}web API{% endglossarytooltip %} calls, you must authenticate your identity and have necessary permissions (authorization) to access the API resource. Authentication allows Magento to identify the caller's user type. Based on the user's (administrator, integration, customer or guest) access rights, API calls' resource accessibility is determined.

### Accessible resources   {#accessible-resources}

The list of resources that you can access depends on your user type. All customers have the same permissions, and as a result the same resources accessible. The preceding statement is true for guest users as well.
Each administrator or integration user can have a unique set of permissions which is configured in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.
Permissions required to access particular resource are configured in the `webapi.xml` file. This table lists the resources that each user type can access:


User type | Accessible resources (defined in webapi.xml)
Administrator or Integration | Resources for which administrators or integrators are authorized. For example, if administrators are authorized for the `Magento_Customer::group` resource, they can make a `GET /V1/customerGroups/:id` call.
Customer | Resources with `anonymous` or `self` permission.
Guest user | Resources with `anonymous` permission.

### Relation between acl.xml and webapi.xml   {#acl-webapi-relation}

The <code>acl.xml</code> file defines the access control list (ACL) for a given {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}. It defines available set of permissions to access the resources.
`acl.xml` files across all Magento modules are consolidated to build an ACL tree which is used to select allowed {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} role resources or third party Integration's access (System > {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} > Integration > Add New Integration > Available APIs).

#### Sample customer acl.xml   {#acl-webapi-relation}

For example, account management, customer configuration, and customer group resource permissions are defined in the Customer module's <code><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/etc/acl.xml" target="_blank">acl.xml</a></code>.

When a developer creates the Web API configuration file (<code>webapi.xml</code>), the permissions defined in acl.xml are referenced to create access rights for each API resource.

#### Sample (truncated) customer webapi.xml   {#acl-webapi-relation}

{% highlight XML %}
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
    <route url="/V1/customers/:id" method="PUT">
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
{% endhighlight %}

For example, in the preceding `webapi.xml` for the customerGroups resource, only a user with `Magento_Customer::group` authorization can `GET /V1/customerGroups/:id`. On the other hand, you can create a customer using `POST /V1/customers` anonymously (or by a guest).

{% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}Authorization{% endglossarytooltip %} is granted to either an administrator (or an integration) defined in the Magento Admin with the customer group selected as one of the resources in the ACL tree.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
A guest or anonymous is a special permission that doesn't need to be defined in `acl.xml` (and will not show up in the permissions tree in the Magento Admin). It just indicates that the current resource in `webapi.xml` can be accessed without the need for authentication.

Similarly, self is a special access used if you already have an authenticated session with the system. Self access enables a user to access resources they own. For example, `GET /V1/customers/me` fetches the logged-in customer's details. This is typically useful for JavaScript-based widgets.
</div>

### Web API clients and authentication methods   {#webapi-clients}

You use a client, such as a mobile application or an external batch job, to access Magento services using web APIs.

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
               <p>As a customer, you log in to the Magento storefront with your customer credentials. As an administrator, you log in to the Magento Magento Admin with your administrator credentials.</p>
            </li>
            <li>
               <p>The Magento web API framework identifies you and controls access to the requested resource.
               </p>
            </li>
         </ol>
      </td>
   </tr>
</table>

## Related topics   {#related}

Proceed to the authentication method for your preferred client:

* Mobile application. <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication-token.html">Token-based authentication</a>.

* Third-party application. <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html">OAuth-based authentication</a>.

* JavaScript {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} on the Magento Admin or {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}. <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication-session.html">Session-based authentication</a>.

* <a href="{{ page.baseurl }}/extension-dev-guide/attributes.html">Extension attribute authentication</a>
