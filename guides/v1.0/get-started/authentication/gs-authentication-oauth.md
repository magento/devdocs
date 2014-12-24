---
layout: default
group: get-started
subgroup: B_Authentication
title: OAuth-based authentication
menu_title: OAuth-based authentication
menu_order: 2
github_link: get-started/authentication/gs-authentication-oauth.md
---

<p>Third-party applications that integrate with Magento use OAuth-based authentication to access the Magento web APIs. This authentication method uses an OAuth 1.0a handshake process that exchanges a request token for an access token that enables access to Magento APIs.</p>
<p>Magento instances can use the OAuth-based authentication process for both SOAP and REST web API calls.</p>
<p>For details about OAuth 1.0a, see <a href="https://tools.ietf.org/html/rfc5849">The OAuth 1.0 Protocol</a>.</p>
<p>To configure your third-party application to use OAuth-based authentication to access the Magento web APIs, read these sections:</p>
<ul>
<li><a href="#oauth-process">Add-on registration and OAuth-based authentication</a></li>
   <li><a href="#pre-auth-token">Step 1. Get a request token</a></li>
   <li><a href="#get-access-token">Step 2. Get an access token</a></li>
   <li><a href="#web-api-access">Step 3. Access the web APIs</a></li>
</ul>
<h2 id="oauth-process">Add-on registration and OAuth-based authentication</h2>
<p>As an add-on developer, you must register add-ons in the Magento system. After registration, you must get a <i>request token</i>, which is a pre-authorized token, and a token secret to authenticate the add-on to make API calls.</p>
<p>You can register add-ons through Magento Connect. After successful registration, Magento Connect generates a configuration file. If you choose not to register the add-on through Magento Connect, you can manually create the configuration file and make it available to merchants.</p>
<p>An add-on configuration file contains add-on details like the endpoint that receives credentials and the required permissions. Any metadata that is defined in the configuration file enables Magento to pass credentials to add-ons. However, you must use these credentials to get an access token in fewer than three minutes or the credentials are disabled. The use of an HTTPS endpoint to pass the credentials eliminates this risk to a certain extent. The add-on must expose an HTTPS endpoint to which a Magento instance can POST temporary credentials. Magento can then validate the SSL certificate for the server to confirm its identity.</p>
<p>Add-ons use the passed credentials to get a request token, which is a pre-authorized token. Add-ons then use credentials plus the request token to get a long-lived access token.</p>
<h3 id="oauth-endpoints">OAuth authentication endpoints</h3>
<p>The OAuth authentication endpoints are:</p>
<ul>
<li><code>/oauth/token/request</code>. Used to get the <i>request token</i>, which is a pre-authorized token.</li>
<li><code>/oauth/token/access</code>. Used to get the <i>access token</i>.</li>
</ul>
<p>To use the simple form for authentication, add the </code>/simple</code> endpoint to the authentication endpoint. For example:</p>
<pre>/oauth/authorize/simple</pre>
<h3 id="oauth-signature">The OAuth signature</h3>
<p>You concatenate a set of URL-encoded attributes and parameters to construct the signature base string.</p>
<p>Use the ampersand (<code>&</code>) character to concatenate these attributes and parameters:</p>
<ol>
<li>HTTP method</li>
<li>URL</li>
<li><code>oauth_nonce</code></li>
<li><code>oauth_signature_method</code></li>
<li><code>oauth_timestamp</code></li>
<li><code>oauth_version</code></li>
<li><code>oauth_consumer_key</code></li>
<li><code>oauth_token</code></li>
</ol>

<p>To generate the signature, you must use the HMAC-SHA1 signature method.
   The signing key is the concatenated values of the consumer secret and token secret separated by the ampersand (<code>&</code>) character (ASCII code 38), even if empty. You must use parameter encoding to encode each value.
</p>
<h3 id="http-post">HTTP POST with OAuth credentials</h3>
<p>When the add-on is installed in a Magento instance, Magento creates and passes the <code>oauth_consumer_key</code> and <code>oauth_consumer_secret</code> values to the add-on through HTTP POST to a HTTP endpoint that the add-on defines.</p>
<p>HTTP POST must contain these attributes:</p>
<ul><li>Magento store URL. For example, <code>http://mystore.magentogo.com</code>.</li>
<li>Magento store API endpoint base: <code>http://mystore.magentogo.com/api</code>.</li>
<li>OAuth consumer key</li>
<li>OAuth consumer key secret</li>
</ul>
<h3 id="oauth-error-codes">OAuth error codes</h3>
<p>When the third-party application makes an invalid request to Magento, the following OAuth-related errors can occur:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>HTTP code</th>
      <th>Error code</th>
      <th>Text representation</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>400</td>
      <td>1</td>
      <td>version_rejected</td>
      <td>The oauth_version parameter does not correspond to the "1.0" value.</td>
   </tr>
   <tr>
      <td>400</td>
      <td>2</td>
      <td>parameter_absent</td>
      <td>A required parameter is missing in the request. The name of the missing parameter is specified additionally in the response.</td>
   </tr>
   <tr>
      <td>400</td>
      <td>3</td>
      <td>parameter_rejected</td>
      <td>The type of the parameter or its value do not meet the protocol requirements (for example,  array is passed instead of the string).</td>
   </tr>
   <tr>
      <td>400</td>
      <td>4</td>
      <td>timestamp_refused</td>
      <td>The timestamp value in the oauth_timestamp parameter is incorrect.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>5</td>
      <td>nonce_used</td>
      <td>The nonce-timestamp combination has already been used.</td>
   </tr>
   <tr>
      <td>400</td>
      <td>6</td>
      <td>signature_method_rejected</td>
      <td>The signature method is not supported. The following methods are supported: HMAC-SHA1.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>7</td>
      <td>signature_invalid</td>
      <td>The signature is invalid.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>8</td>
      <td>consumer_key_rejected</td>
      <td>The Consumer Key has incorrect length or does not exist.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>9</td>
      <td>token_used</td>
      <td>An attempt of authorization of an already authorized token or an attempt to exchange a not temporary token for a permanent one.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>10</td>
      <td>token_expired</td>
      <td>The temporary token has expired. At the moment, the mechanism of expiration of temporary tokens is not implemented and the current error is not used.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>11</td>
      <td>token_revoked</td>
      <td>The token is revoked by the user who authorized it.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>12</td>
      <td>token_rejected</td>
      <td>The token is not valid, or does not exist, or is not valid for using in the current type of request.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>13</td>
      <td>verifier_invalid</td>
      <td>The confirmation string does not correspond to the token.</td>
   </tr>
</table>
<h2 id="pre-auth-token">Step 1. Get a request token</h2>
<p>A request token is a temporary token that the user exchanges for an access token.</p>
<p>To get a request token from Magento:</p>
<pre>POST /oauth/token/request</pre>
<p>You must include these request parameters in the <code>Authorization</code> request header in the call:</p>
<ul>
   <li><code>oauth_consumer_key</code>. The consumer key value that you retrieve after you register the application.</li>
   <li><code>oauth_nonce</code>. A random value that is uniquely generated by the application.</li>
   <li><code>oauth_signature_method</code>. The name of the signature method used to sign the request. Must have this value: <code>HMAC-SHA1</code>.</li>
   <li><code>oauth_signature</code>. A generated value (signature).</li>
   <li><code>oauth_timestamp</code>. A positive integer, expressed in the number of seconds since January 1, 1970 00:00:00 GMT.</li>
   <li><code>oauth_version</code>. The OAuth version.</li>
</ul>
<p>A valid response looks like this:</p>
<pre>oauth_token=4cqw0r7vo0s5goyyqnjb72sqj3vxwr0h&oauth_token_secret=rig3x3j5a9z5j6d4ubjwyf9f1l21itrr</pre>
<h2 id="get-access-token">Step 2. Get an access token</h2>
<p>To get an access token from Magento:</p>
<pre>POST /oauth/token/access</pre>
<p>You must include these request parameters in the <code>Authorization</code> request header in the call:</p>
<ul>
   <li><code>oauth_consumer_key</code>. The consumer key value provided after the registration of the application.</li>
   <li><code>oauth_nonce</code>. A random value, uniquely generated by the application.</li>
   <li><code>oauth_signature_method</code>. The name of the signature method used to sign the request. Can have one of the following values: <code>HMAC-SHA1</code>, <code>RSA-SHA1</code>, or <code>PLAINTEXT</code>.</li>
   <li><code>oauth_signature</code>. A generated value (signature).</li>
   <li><code>oauth_timestamp</code>. A positive integer, expressed in the number of seconds since January 1, 1970 00:00:00 GMT.</li>
   <li><code>oauth_token</code>. The <code>oauth_token</code> value, or request token, obtained in <a href="#pre-auth-token">Step 1. Get a request token</a>.</li>
   <li><code>oauth_verifier</code>. The verification code that is tied to the request token.</li>
</ul>
<p>A valid response looks like this:</p>
<pre>oauth_token=0lnuajnuzeei2o8xcddii5us77xnb6v0&oauth_token_secret=1c6d2hycnir5ygf39fycs6zhtaagx8pd</pre>
<p>The response contains these fields:</p>
<ul>
   <li><code>oauth_token</code>. The access token that provides access to protected resources.</li>
   <li><code>oauth_token_secret</code>. The secret that is associated with the access token.</li>
</ul>
<h2 id="web-api-access">Step 3. Access the web APIs</h2>
<p>After the add-on is registered and authorized to make API calls, add-ons can invoke Magento web APIs by using the access token.</p>
<p>To use the access token to make web API calls:</p>
<pre>GET /api/rest/v1/products/1234</pre>
<p>You must include these request parameters in the <code>Authorization</code> request header in the call:</p>
<ul>
   <li>
      <code>oauth_consumer_key</code>. The customer key value provided after the registration of the application.
   </li>
   <li>
      <code>oauth_nonce</code>. A random value, uniquely generated by the application.
   </li>
   <li>
      <code>oauth_signature_method</code>. The name of the signature method used to sign the request. Valid values are: <code>HMAC-SHA1</code>, <code>RSA-SHA1</code>, and <code>PLAINTEXT</code>.
   </li>
   <li>
      <code>oauth_signature</code>. A generated value (signature).
   </li>
   <li>
      <code>oauth_timestamp</code>. A positive integer, expressed in the number of seconds since January 1, 1970 00:00:00 GMT.
   </li>
   <li><code>oauth_token</code>. The <code>oauth_token</code>, or access token, value obtained in <a href="#get-access-token">Step 2. Get an access token</a>.</li>
</ul>

<h2>Next step</h2>
<ul>
   <li><a href="{{ site.gdeurl }}/get-started/gs-web-api-request.html">Step 2. Construct a request</a></li>

</ul>
<h2>Related topic</h2>
<ul>

   <li><a href="{{ site.githuburl }}extension-dev-guide/service-contracts/service-to-web-service.html">Configure services as web APIs</a></li>
</ul>
