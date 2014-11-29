---
layout: default
group: get-started
subgroup: B_Authentication
title: Authentication
menu_title: Step 1. Authenticate
menu_order: 1
menu_node: parent
github_link: get-started/gs-authentication.md
---

<p>To make REST web API calls, you must supply an <i>authentication token</i> on the call. The token acts like an electronic key that lets you access the web APIs.</p>
<p>You request a token from the Magento token service at the REST endpoint that is defined for your user type. The token service returns
   a unique authentication token in exchange for valid credentials. Valid credentials are a customer or admin user name and password for a Magento account.
</p>
<p>When you make web API calls, you supply this token in the
   <code>Authorization: Bearer</code> header to prove your identity.
</p>
<p>The token never expires but it can be revoked.
</p>
<p>The examples on this page use cURL commands. For more information, see
         <a href="{{ site.gdeurl }}get-started/gs-curl.html">How cURL commands work</a>.</p>

<a name="auth-request-syntax"></a>
<h3>Token request syntax</h3>
<p>This syntax shows a JSON-formatted request body, but you can specify an XML-formatted request body.</p>
<p>To request an authentication token from the Magento token service, use this command syntax:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/{customer|admin}/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"test@example.com", "password":"123123q"}'</pre>

<p>This table describes the components in the command syntax:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Component</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>REST endpoint for your user type</td>
      <td>
      <p>The REST endpoint includes the server and the resource.</p>
      <ul><li><p>The server is <code>https://magento.host/index.php/rest</code>.</p></li>
      <li>
         <p>For a customer, the resource is: <code>/V1/integration/customer/token</code></p>
         <p>For an admin, the resource is: <code>/V1/integration/admin/token</code></p></li></ul>
      </td>
   </tr>
   <tr>
      <td>Content type of the request body</td>
      <td>
      <p>Use the <code>-H</code> option to specify the <code>Content-Type</code> header.</p>
      <ul><li>
         <p>For JSON: <code>-H "Content-Type:application/json"</code></p></li>
         <li><p>For XML: <code>-H "Content-Type:application/xml"</code></p></li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Magento user name and password in a request body</td>
      <td>
         <p>Use the <code>-d</code> option to
            specify the request body.
         </p>
         <p>The example syntax shows a JSON-formatted request body.</p>
         <p>For an XML-formatted request body, specify:</p>
         <pre>-d '&lt;login>&lt;username>test@xample.com&lt;/username>&lt;password>123123q&lt;/password>&lt;/login>'</pre>
      </td>
   </tr>
</table>

<a name="auth-request"></a>
<h3>Request an authentication token</h3>
<p>To request an authentication token for a customer user for the REST web API:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/customer/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"test@example.com", "password":"123123q"}'</pre>
<p>To request an authentication token for an admin user for the REST web API:</p>
<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/admin/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"test@example.com", "password":"123123q"}'</pre>
<a name="auth-response"></a>
<h3>Authentication token response</h3>
<p>A successful request returns a response body with the token, as follows:</p>
<pre>"asdf3hjklp5iuytre"</pre>






