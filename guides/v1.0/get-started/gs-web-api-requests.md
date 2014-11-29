---
layout: default
group: get-started
subgroup: Step 2. Construct a request
title: Step 2. Construct a request
menu_title: Step 2. Construct a request
menu_order: 1
menu_node: parent
github_link: get-started/gs-web-api-requests.md
---

<a name="requests"></a>
<p>A web API call, or <i>request</i>, contains these components:</p>
<table style="width:75%">
   <tr bgcolor="lightgray">
      <th>Component</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html#verbs">HTTP verb</a></p>
      </td>
      <td>
         <p>Specifies the action to perform against the endpoint.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html#endpoints">Endpoints</a></p>
      </td>
      <td>
         <p>A combination of the server that fulfills the request and the resource against which the request is being made. For example:</p>
         <pre>http://magento.ll/index.php/rest/V1/customerGroups/:id</pre>
      </td>
   </tr>
   <tr>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html#payload">Call payload</a></p>
      </td>
      <td>
         <p>A set of input fields that you supply with the request.
            API operations have both
            <em>required</em> and
            <em>optional</em> inputs. You specify some inputs in the URI, and some in a request body. You can specify a JSON- or XML-formatted request body.
         </p>
      </td>

   </tr>
   <tr>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html#http-headers">HTTP headers</a></p>
      </td>
      <td>
         <p>Headers specify authentication credentials, the call request and response formats,
            and other information.
         </p>
      </td>

   </tr>
   </tbody>
</table>

<a name="verbs"></a>
<h3>HTTP verbs</h3>
<p>Include one of these HTTP verbs in the web API request:</p>
<dl>
   <dt>GET</dt>
   <dd>Requests transfer of a current representation of the
      target resource.
   </dd>
   <dt>PUT</dt>
   <dd>Requests that the state of the target resource be
      created or replaced with the state defined by the representation
      enclosed in the request message payload.
   </dd>
   <dt>POST</dt>
   <dd>Requests that the origin server accept the
      representation enclosed in the request as data to be processed by the
      target resource.
   </dd>
   <dt>DELETE</dt>
   <dd>Requests that the origin server delete the target
      resource.
   </dd>
</dl>
<a name="endpoints"></a>
<h3>Endpoints</h3>
<p>An endpoint is a combination of a URL and URI.</p>
<p>The REST endpoint URL is <code>http://magento.ll/index.php/rest/</code>.</p>
<p>The URL points to the server that fulfills the request.</p>
<p>The URI is the resource against which the request is being made. Specifically, the service endpoint combines:</p>
<ul>
   <li>The web protocol: <code>http</code></li>
   <li>The server that fulfills the request: <code>magento.ll/index.php</code></li>
   <li>The web service: <code>rest</code></li>
   <li>The resource URI: <code>V1/customerGroups/</code></li>
   <li>Any template parameters: <code>/:id</code></li>
</ul>
<p>In this example, the service endpoint is:</p>
<pre>http://magento.ll/index.php/rest/V1/customerGroups/:id</pre>
<a name="payload"></a>
<h3>Call payload</h3>
<p>Payloads</p>
<a name="formats"></a>
<h3 id="formats">Request and response formats</h3>
<ul>
   <li>JSON</li>
   <li>XML</li>
</ul>
<p>The decision to use JSON- or XML-formatted data depends on your data integration requirements. For example, if you are writing a Magento 2 service consumer, the consumer drives the decision to use either JSON or XML.</p>
<p>The JSON response format is the default.</p>
<p>To request an XML response:</p>
<ul>
   <li>Set the HTTP </code>Accept</code> header to </code>text/xml</code>.</li>
   <li>Set the HTTP </code>Content-Type</code> header to </code>text/xml</code>.</li>
</ul>
<a name="http-headers"></a>
<h3>HTTP headers</h3>
<p>Magento has many services and some require that you specify a set of HTTP headers
   in your calls.
</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>HTTP header</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>
         <code>Authorization: Bearer</code>
      </td>
      <td>The authentication token that proves you as the owner of a Magento
            account.
      </td>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/gs-authentication.html">Authentication</a>
         </p>
      </td>
   </tr>
   <tr>
      <td>
         <code>Accept</code>
      </td>
      <td>The API password. This is one of the Authentication token assigned to your account.</td>
   </tr>
   <tr>
      <td>
         <p>
            <code>Content-Type</code>
         </p>
      </td>
      <td>
         <p>Required for operations with a request body.</p>
         <p>Specifies the format of the request body. The following example shows the syntax for the header, where format is either <code>json</code> or <code>xml</code>:</p>
         <pre>Content-Type: application/format</pre>
      </td>
   </tr>
</table>
<p>Common headers in Magento web API requests are:</p>
<ul>
            <li>
               <p>
                  <code>Content-Type</code>. Required for operations with a request body.
               </p>
               <p>Specifies the format of the request body.</p>
               <p>Use the following syntax for the header
                  where
                  <code>format</code>is either
                  <code>json</code>or
                  <code>xml</code>.
               </p>
               <pre>Content-Type: application/format</pre>
            </li>
            <li>
               <p>
                  <code>Authorization</code>. Required. Specifies the authentication token.
               </p>
            </li>
            <li>
               <p>
                  <code>Accept</code>. Optional.
               </p>
               <p>Specifies the format of the response body.</p>
               <p>Use the following syntax for the header
                  where
                  <code>format</code>is either
                  <code>json</code>or
                  <code>xml</code>. The default is
                  <code>json</code>.
               </p>
               <pre>Accept: application/format</pre>
            </li>
         </ul>
<p>Be aware that different Magento APIs use different sets of HTTP headers (and some
   don't use any at all). Refer to the Developer documentation for the definitive list
   of HTTP headers for the Magento operation(s) you plan to use.
</p>
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


