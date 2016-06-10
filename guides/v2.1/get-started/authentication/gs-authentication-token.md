---
layout: default
group: get-started
subgroup: B_Authentication
title: Token-based authentication
menu_title: Token-based authentication
menu_order: 1
version: 2.1
github_link: get-started/authentication/gs-authentication-token.md
---

<p>To make a web API call from a client such as a mobile application, you must supply an <i>authentication token</i> on the call. The token acts like an electronic key that lets you access the API.</p>
<p>You request a token from the Magento token service at the REST endpoint that is defined for your user type. The token service returns
   a unique authentication token in exchange for a user name and password for a Magento account.
</p>
<p>When you make web API calls, you supply this token in the <code>Authorization</code> request header with the <code>Bearer</code> HTTP authorization scheme to prove your identity. The token never expires but it can be revoked.</p>
<p>To request an authentication token and learn how to use it in web API calls, read these sections:</p>
<ul>
   <li><a href="#curl-command-syntax">cURL command syntax</a></li>
   <li><a href="#auth-request">Authentication token request</a></li>
   <li><a href="#auth-response">Authentication token response</a></li>
   <li><a href="#web-api-access">Web API request</a></li>
</ul>
<a name="curl-command-syntax"></a>
<h2>cURL command syntax</h2>
<p>The examples on this page use cURL commands. For more information, see
   <a href="{{ site.gdeurl21 }}get-started/gs-curl.html">How cURL commands work</a>.
</p>
<p>To use cURL to request an authentication token from the Magento token service, use this syntax:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/{customer|admin}/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"&lt;USER-NAME&gt;", "password":"&lt;PASSWORD&gt;"}'</pre>
<p>This syntax shows a JSON request body. Alternatively, you can specify an <a href="#xml-auth-request-syntax">XML request body</a>.</p>
<p>The components in the command syntax are:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Component</th>
      <th>Specifies</th>
   </tr>
   <tr>
      <td>Endpoint</td>
      <td>
         <p>A combination of the <i>server</i> that fulfills the request, the web service, and the <i>resource</i> against which the request is being made.</p>
         <p>For example, in the <code>https://magento.host/index.php/rest/V1/integration/customer/token</code> endpoint, the server is <code>magento.host/index.php/</code>, the web service is <code>rest</code>, and the resource is <code>/V1/integration/customer/token</code>.</p>
         <p>For an admin user, the resource is <code>/V1/integration/admin/token</code>.</p>
      </td>
   </tr>
   <tr>
      <td>Content&nbsp;type</td>
      <td>
         <p>The content type of the request body.</p>
         <p>To specify a JSON request body, include <code>-H&nbsp;"Content-Type:application/json"</code> in the call.</p>
      </td>
   </tr>
   <tr>
      <td>Credentials</td>
      <td>
         <p>The user name and password for a Magento account.</p>
         <p>To specify these credentials in a JSON request body, include <code>-d '{"username":"&lt;USER-NAME&gt;", "password":"&lt;PASSWORD&gt;"}'</code> in the call.</p>
      </td>
   </tr>
</table>
<a name="xml-auth-request-syntax"></a>
<h3>XML request body</h3>
<p>To specify an XML request body:</p>
<ul>
   <li>Append <code>.xml</code> to the endpoint.</li>
   <li>Include the <code>Content-Type:application/xml</code> header in the call.</li>
   <li>Use the <code>-d</code> option to specify the XML-formatted request body.</li>
</ul>
<p>For example:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/customer/token" \
     -H "Content-Type:application/xml" \
     -d '&lt;login>&lt;username>user_example&lt;/username>&lt;password>123123q&lt;/password>&lt;/login>'</pre>
<a name="auth-request"></a>
<h2>Authentication token request</h2>
<p>To request an authentication token for a customer user for the REST web API:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/customer/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"user_example", "password":"123123q"}'</pre>
<p>To request an authentication token for an admin user for the REST web API:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/admin/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"user_example", "password":"123123q"}'</pre>
<a name="auth-response"></a>
<h2>Authentication token response</h2>
<p>A successful request returns a response body with the token, as follows:</p>
<pre>"asdf3hjklp5iuytre"</pre>
<a name="web-api-access"></a>
<h2>Web API request</h2>
<p>You must specify an authentication token in a web API call for a resource for which you are authorized.</p>
<p>You specify the token in the <code>Authorization</code> request header with the <code>Bearer</code> HTTP authorization scheme.</p>
<h3>Customer access</h3>
<p>Customers can access only resources with <code>self</code> permissions.</p>
<p>For example, to make a web API call with a customer token:</p>
<pre>curl -X GET "http://magento.ll/index.php/rest/V1/customers/me" \
     -H "Authorization: Bearer asdf3hjklp5iuytre"</pre>
<h3>Admin access</h3>
<p>Admins can access any resources for which they are authorized.</p>
<p>For example, to make a web API call with an admin token:</p>
<pre>curl -X GET "http://magento.ll/index.php/rest/V1/customers/2" \
     -H "Authorization: Bearer vbnf3hjklp5iuytre"</pre>
<h3>Guest access</h3>
<p>The Magento web API framework allows <i>guest users</i> to access resources that are configured with anonymous permission. Guest users are users who the framework cannot authenticate through existing authentication
   mechanisms. As a guest user, you do not need to, but you can, specify a token in a web API call for a resource with anonymous permission.
</p>
<h2>Next step</h2>
<ul>
   <li><a href="{{ site.gdeurl21 }}/get-started/gs-web-api-request.html">Step 2. Construct a request</a></li>
</ul>
<h2>Related topic</h2>
<ul>

   <li><a href="{{ site.gdeurl21 }}extension-dev-guide/service-contracts/service-to-web-service.html">Configure services as web APIs</a></li>
</ul>
