---
layout: default
group: get-started
subgroup: Authentication
title: Authentication
menu_title: Authentication
menu_order: 1
menu_node: parent
github_link: get-started/gs-authentication.md
---

<p>To make REST web API calls, you must supply an <i>authentication token</i> on the call. The token acts like an electronic key that lets you access the web APIs.</p>
<p>To get a token, you request one from the Magento token service. You make a token request to the token REST endpoint that is defined for your user type:</p>
<table style="width:50%">
   <tr bgcolor="lightgray">
      <th>User type</th>
      <th>Token REST endpoint</th>
   </tr>
   <tr>
      <td>
         <p>Customer</p>
      </td>
      <td>
         <p>/V1/integration/customer/token</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Admin</p>
      </td>
      <td>
         <p>/V1/integration/admin/token</p>
      </td>
   </tr>
</table>
<p>The token service returns
   a unique authentication token in exchange for valid credentials, which are a customer or admin user name and password for a Magento account.
</p>
<p>When you make web API calls, you supply this token in the
   <b>Authorization</b> header to prove that you are who you claim to be.
</p>
<p>The token never expires but it can be revoked.
</p>
<h3 id="auth-request-syntax">Token request syntax</h3>
<p>To request an authentication token for the REST web APIs, use the following command syntax:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/{customer|admin}/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"test@example.com", "password":"123123q"}'</pre>
<p>In the endpoint, specify <code>customer</code> or <code>admin</code> to indicate your user type. Specify your user name and password for your Magento account.This example syntax shows a JSON-formatted request body, but XML requests are also allowed.</p>
<p>To make an XML request, specify the <code>Content-Type:application/xml</code> header and specify the an XML request body, as follows:</p>
<pre>-d '&lt;login>&lt;username>test@xample.com&lt;/username>&lt;password>123123q&lt;/password>&lt;/login>'</pre>
<h3 id="auth-request">Request an authentication token</h3>
<p>To request an authentication token for a customer user for the REST web API:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/customer/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"test@example.com", "password":"123123q"}'</pre>
<p>To request an authentication token for an admin user for the REST web API:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/admin/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"test@example.com", "password":"123123q"}'</pre>
<a name="auth-response"></a>
<h3 id="auth-response">Authentication token response</h3>
<p>A successful request returns a response body with the token, as follows:</p>
<pre>"asdf3hjklp5iuytre"</pre>
<a name="web-api-request-with-token"></a>
<h3>Web API authenticated access</h3>
<p>You can specify a customer or admin token in a web API call. You specify the token in the <code>Authorization</code> request header with the <code>Bearer</code> HTTP authorization scheme.</p>
<p>Customers can access only resources with <code>self</code> permissions. To make a web API call with a customer token:</p>
<pre>curl -X GET "http://magento.ll/index.php/rest/V1/customer/me" \
     -H "Authorization: Bearer asdf3hjklp5iuytre"</pre>
<p>Admins can access any resources for which they are authorized. To make a web API call with an admin token:</p>
<pre>curl -X GET "http://magento.ll/index.php/rest/V1/customerAccounts/2" \
     -H "Authorization: Bearer vbnf3hjklp5iuytre"</pre>
<a name="guest-access"></a>
<h3>Web API guest access</h3>
<p>The Magento web API framework enables <i>guest users</i> to access resources that are configured with anonymous permission
   in the <code>webapi.xml</code> configuration file. Users who cannot be authenticated by the framework through the existing authentication
   mechanisms are considered guest users. Guest users can optionally authenticate themselves
   when they access these resources with anonymous permission.
</p>
<p>For information about configuring a resource with anonymous permission, see <a href="{{ site.githuburl }}extension-dev-guide/service-contracts/service-to-web-service.html">Configure services as web APIs</a>.</p>







