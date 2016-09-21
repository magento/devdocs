---
layout: default
group: get-started
subgroup: B_Authentication
title: Authentication
menu_title: Authentication
menu_order: 1
menu_node: parent
version: 2.0
github_link: get-started/authentication/gs-authentication.md
redirect_from: /guides/v1.0/get-started/authentication/gs-authentication.html
---

<h2 id="overview-authenticate">Web API authentication overview</h2>
<p>
Magento allows developers to define web API resources and their permissions in a configuration file <code>webapi.xml</code>. 
Here are more details on exposing <a href="http://devdocs.magento.com/guides/v1.0/extension-dev-guide/service-contracts/service-to-web-service.html">services as Web APIs.</a> 

Before you can make web API calls, you must authenticate your identity and have necessary permissions (authorization) to access the API resource. Authentication allows Magento to identify the caller's user type. Based on the user's (administrator, integration, customer or guest) access rights, API calls' resource accessibility is determined.
</p>

<h3 id="accessible-resources">Accessible resources</h3>
<p>The list of resources that you can access depends on your user type. All customers have the same permissions, and as a result the same resources accessible. The preceding statement is true for guest users as well. 
Each administrator or integration user can have a unique set of permissions which is configured in the Magento Admin. 
Permissions required to access particular resource are configured in the <code>webapi.xml</code> file. This table lists the resources that each user type can access:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>User type</th>
      <th>Accessible resources (defined in <code>webapi.xml</code>)</th>
   </tr>
   <tr>
      <td>
         <p>Administrator or Integration</p>
      </td>
      <td>
         <p>Resources for which administrators or integrators are authorized. For example, if administrators are authorized for the <code>Magento_Customer::group</code> resource, they can make a <code>GET&nbsp;/V1/customerGroups/:id</code> call.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Customer</p>
      </td>
      <td>
         <p>Resources with <code>anonymous</code> or <code>self</code> permission.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Guest user</p>
      </td>
      <td>
         <p> Resources with <code>anonymous</code> permission.</p>
      </td>
   </tr>
</table>

<h3 id="acl-webapi-relation">Relation between acl.xml and webapi.xml</h3>
<p>The <code>acl.xml</code> file defines the access control list (ACL) for a given module. It defines available set of permissions to access the resources.
<code>acl.xml</code> files across all Magento modules are consolidated to build an ACL tree which is used to select allowed Admin role resources or third party Integration's access (System > Extension > Integration > Add New Integration > Available APIs).
</p>

<h4 id="acl-webapi-relation">Sample customer acl.xml</h4>
For example, account management, customer configuration, and customer group resource permissions are defined in the Customer module's <code><a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/acl.xml" target="_blank">acl.xml</a></code>.

When a developer creates the Web API configuration file (<code>webapi.xml</code>), the permissions defined in acl.xml are referenced to create access rights for each API resource.

<h4 id="acl-webapi-relation">Sample (truncated) customer webapi.xml</h4>

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

Authorization is granted to either an administrator (or an integration) defined in the Magento Admin with the customer group selected as one of the resources in the ACL tree.

<div class="bs-callout bs-callout-info" id="info">
   <p>A guest or anonymous is a special permission that doesn't need to be defined in <code>acl.xml</code> (and will not show up in the permissions tree in the Magento Admin). It just indicates that the current resource in <code>webapi.xml</code> can be accessed without the need for authentication.</p>
   <p>Similarly, self is a special access used if you already have an authenticated session with the system. Self access enables a user to access resources they own. For example, <code>GET /V1/customers/me</code> fetches the logged-in customer's details. This is typically useful for JavaScript-based widgets. </p>
</div>

<h3 id="webapi-clients">Web API clients and authentication methods</h3>
<p>You use a client, such as a mobile application or an external batch job, to access Magento services using web APIs.</p>
<p>Each type of client has a preferred authentication method. To authenticate, use the authentication method for your preferred client:</p>
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
         <p>Registered users use <a href="{{page.baseurl}}get-started/authentication/gs-authentication-token.html">token-based authentication</a> to make web API calls using a mobile application. The token acts like an electronic key that provides access to the API(s).</p>
         <ol>
            <li>
               <p>As a registered Magento user, you request a token from the Magento token service at the endpoint that is defined for your user type.</p>
            </li>
            <li>
               <p>The token service returns a unique authentication token in exchange for a user name and password for a Magento account.</p>
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
         <p>Third-party applications use <a href="{{page.baseurl}}get-started/authentication/gs-authentication-oauth.html">OAuth-based authentication</a> to access the web APIs.</p>
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
         <p>Registered users use <a href="{{page.baseurl}}get-started/authentication/gs-authentication-session.html">session-based authentication</a> to log in to the Magento storefront or Magento Admin.</p>
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
<h2 id="next-step-auth">Next step</h2>
<p>Proceed to the authentication method for your preferred client:</p>
<ul>
   <li>Mobile application. <a href="{{page.baseurl}}get-started/authentication/gs-authentication-token.html">Token-based authentication</a>.</li>
   <li>Third-party application. <a href="{{page.baseurl}}get-started/authentication/gs-authentication-oauth.html">OAuth-based authentication</a>.</li>
   <li>JavaScript widget on the Magento Admin or storefront. <a href="{{page.baseurl}}get-started/authentication/gs-authentication-session.html">Session-based authentication</a>.</li>
</ul>

<h2 id="related">Related topics</h2>
<a href="{{page.baseurl}}extension-dev-guide/attributes.html">Extension attribute authentication</a>
