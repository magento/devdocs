---
layout: default
title: Get Started with Magento Web APIs
---

<div class="container bs-docs-container">
  <div class="row">
    <div class="jumbotron">
      <h1 class="api1" id="api-services">{{ page.title }}</h1>
    </div>
    <div class="col-xs-3">
      <p>
        &nbsp;
      </p>
    </div>
    <div class="col-xs-9" role="main">
      <div class="bs-docs-section">
        <p><a href="{{ site.githuburl }}get-started-with-apis/bk-get-started-api.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;
          <img src="{{ site.baseurl }}common/images/newWindow.gif" />
        </p>
        <p class="q">Reviewer: SOAP is not supported for Dev Beta, so I've omitted it for now.</p>
        <p>The Magento web API framework enables Magento and third-party developers to <a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-to-web-service.html">configure services as web APIs</a>. To access these web APIs, you make REST calls.</p>
        <p>This guide introduces web API, REST, and cURL command concepts. It also provides examples that show you how to construct REST web API calls and execute them through either a REST client or cURL commands. You can modify these examples to construct other calls.</p>
        <p>Read the following sections to get up and running with the Magento web APIs:</p>
       <ul>
  <li>
    <p>
      <a href="#authentication">Authentication</a>
    </p>
  </li>

 <li>
    <p>
      <a href="#web-api-components">The components of a web API request</a>
    </p>
  </li>
    <li>
    <p><a href="#curl">How cURL commands work</a></p>
  </li>
  <li>
    <p>
      <a href="{{ site.gdeurl }}get-started/rest/rest-overview.html">REST overview</a>
    </p>
  </li>
  <!--
<li>
    <p>
      <a href="{{ site.gdeurl }}get-started/rest/rest-ff-rest-client.html">Firefox REST client</a>
    </p>
  </li>
 -->
  <li>
    <p>
      <a href="{{ site.gdeurl }}get-started/rest/rest-web-api-calls.html">REST web API calls</a>
    </p>
  </li>

  <!--
    <li>
       <p>
          <a href="{{ site.gdeurl }}get-started/soap/soap-web-api-calls.html">SOAP web API calls</a>
       </p>
    </li>
    -->
</ul>
        <a name="authentication"></a>
          <h2>Authentication</h2>
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
            a unique authentication token in exchange for valid credentials, which are a customer or admin user name and password for a Magento account.</p>
            <p>When you make web API calls, you supply this token in the
            <b>Authorization</b> header to prove that you are who you claim to be.</p>
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
          when they access these resources with anonymous permission.</p>
          <p>For information about configuring a resource with anonymous permission, see <a href="{{ site.githuburl }}extension-dev-guide/service-contracts/service-to-web-service.html">Configure services as web APIs</a>.</p>

 <a name="web-api-components"></a>
        <h2>The components of a web API request</h2>
        <p>Each Magento web API call contains of a combination of these components:</p>
        <table style="width:100%">
          <tr bgcolor="lightgray">
            <th>Call component</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <p>Authentication token</p>
            </td>
            <td>
              <p>A token proves that you are the owner of a Magento
                account.</p>
                <p>See <a href="#authentication">Authentication</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td><p>Endpoint</p></td>
            <td><p>A URI that includes the server that handles your request, the resource name, and any template parameters.</p>
            <p>For example, <code>http://magento.ll/index.php/rest/V1/customerGroups/:id</code>.</p>
            </td>
          </tr>
          <tr>
            <td><p>Call payload</p></td>
            <td><p>A set of input fields that you supply with the request.
          API operations have both
          <em>required</em> and
          <em>optional</em> inputs.
        </p>
            </td>
          </tr>
          <tr>
            <td><p>Call formats</p></td>
            <td><p>Magento supports REST calls. In addition, you can send JSON-formatted call
              payloads.</p>
            </td>
          </tr>
          <tr>
            <td><p>HTTP headers</p></td>
            <td><p>Headers specify authentication credentials, the call request and response formats,
              and other information.</p>
            </td>
          </tr>
          </tbody>
        </table>
        <a name="headers"></a>
        <h3>HTTP headers</h3>
        <p>Magento has many services and some require that you specify a set of HTTP headers
          in your calls. For example, the Adaptive Payments and Adaptive Accounts APIs require
          the following set of HTTP headers:
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
              <td>The authentication token.</td>
            </tr>
            <tr>
              <td>
                <code>Accept</code>
              </td>
              <td>The API password. This is one of the Authentication token assigned to your account.</td>
            </tr>
            <tr>
              <td><p>
                <code>Content-Type</code></p>
              </td>
              <td><p>Required for operations with a request body.</p>

<p>Specifies the format of the request body. The following example shows the syntax for the header, where format is either <code>json</code> or <code>xml</code>:</p>

<pre>Content-Type: application/format</pre></td>
            </tr>
        </table>
        <p>Be aware that different Magento APIs use different sets of HTTP headers (and some
          don't use any at all). Refer to the Developer documentation for the definitive list
          of HTTP headers for the Magento operation(s) you plan to use.
        </p>
       <a name="curl"></a>
        <h2>How cURL commands work</h2>
        <p>cURL is a command-line tool that lets you transmit and receive HTTP requests and
          responses from the command line or a shell script. It is available for Linux distributions,
          Mac OS X, and Windows.
        </p>
        <p>This guide shows you how to use cURL commands to make Magento web API calls. The cURL examples
          use the following command-line options:
        </p>
        <table style="width:100%">
          <tr bgcolor="lightgray">
            <th>Option</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <p>
                <code>-d</code>
              </p>
            </td>
            <td>
              <p>Sends the specified data in a POST request to the HTTP server.</p>
              <p>Use this option to send a JSON or XML request body to the server.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code>-H</code>
              </p>
            </td>
            <td>
              <p>Specifies an extra HTTP header in the request. You can specify any number of extra
                headers. Precede each header with the
                <code>-H</code>option.
              </p>
              <p>Common headers in Magento web API requests are:</p>
              <ul>
                <li>
                <p>
                    <code>Content-Type</code>. Required for operations with a request body.
                  </p>
                  <p>Specifies the format of the request body. Following is the syntax for the header
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
                  <p>Specifies the format of the response body. Following is the syntax for the header
                    where
                    <code>format</code>is either
                    <code>json</code>or
                    <code>xml</code>. The default is
                    <code>json</code>.
                  </p>
                  <pre>Accept: application/format</pre>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code>-i</code>
              </p>
            </td>
            <td>
              <p>Includes the HTTP header in the output.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code>-s</code>
              </p>
            </td>
            <td>
              <p>Specifies silent or quiet mode, which makes cURL mute. No progress or error messages
                are shown.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code>-T</code>
              </p>
            </td>
            <td>
              <p>Transfers the specified local file to the remote URL.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code>-X</code>
              </p>
            </td>
            <td>
              <p>Specifies the request method to use when communicating with the HTTP server. The
                specified request method is used instead of the default GET method.
              </p>
            </td>
          </tr>
        </table>
        <p>For complete information about cURL, see
          <a href="http://curl.haxx.se/" target="_top">http://curl.haxx.se/</a>.
        </p>
        <h2>Putting a call together</h2>
        <p>To make a Magento API call, put together all the components of the call and execute the call.
       # Accessing Magento Objects Using REST

<p><a href="{{ site.githuburl }}guides/v1.0/get-started/rest/rest-overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="svcs_rest_rest-call">Basics of Making a REST Call</h2>

All service REST calls are specified by the service's `app/code/[Vendor]/[Module]/etc/webapi.xml`. Inputs and return values are defined in the respective service data objects and builders.

This topic discusses generally how to make a REST call; for step-by-step details, see <a href="{{ site.gdeurl }}get-started/rest/rest-ff-rest-client.html">How-To&mdash;Using the Firefox REST Client to Create a Customer</a>.

To make a REST call for the Customer service:

<div id="accordion">
<h3>Step 1: Look up the call in webapi.xml</h3>
<div><p>This section discusses how to make an HTTP POST call to create a customer using the <code>createCustomer()</code> method.</p>
<ol><li>Open <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">webapi.xml</a>.</li>
<li><p>Find the desired call; for example,</p>
<pre>
&lt;route url="/V1/customerAccounts" method="POST">
    &lt;service class="Magento\Customer\Service\V1\CustomerAccountServiceInterface" method="createCustomer"/>
    &lt;resources>
        &lt;resource ref="anonymous"/>
    &lt;/resources>
&lt;/route>
</pre></li></ol>
<p>The <code>route url</code> specifies the URI of the REST call. (Step 4 shows the entire URL.)</p>
<p>In this example, the URI is <code>POST /V1/customerAccounts</code></p>
<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <ul class="note"><li>Any value prefixed by a colon character is a required input.</li>
  <li>Some REST calls have no route; for these, use the Base URL only.</li></ul></span>
  </div>
</div>

<h3>Step 2: Find the service data object</h3>
<div>
<p>The service data object tells you what data to pass in to the REST API. The service data object is specified by the service interface method named by <code>service class</code> in <code>webapi.xml</code>.</p>
<p>Continuing the preceding example, the <code>createCustomer()</code> method on the <code>\Magento\Customer\Service\V1\CustomerAccountServiceInterface</code> specifies the data service object as follows:</p>
<script src="https://gist.github.com/xcomSteveJohnson/9775420.js"></script>
<p>In this case, the data service object is <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/CustomerDetails.php" target="_blank">\Magento\Customer\Service\V1\Data\CustomerDetails</a>.</p>
<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>To use <code>CustomerDetails</code> as a JSON or XML parameter in the POST call payload, you must specify it as follows: <code>customer_details</code>. In other words, the parameter name is all lowercase with camel case strings separated by an underscore character. To use it as JSON input, <code>customer_details</code> must specify a <a href="http://www.json.com/" target="_blank">JSON</a> object.</p></span>
  </div>

</div>

<h3>Step 3: Find getters on service data objects</h3>
<div>
<p>Getters on service data objects enable you to find what data is required to execute the action. Use them as follows:</p>
<ol><li>Find all the getters on the service data object and determine from the <code>@return</code> comments to which other service data objects they refer.</li>
<li>Locate those service data objects and getters on those objects.</li>
<li>Comments in the getters specify the data type for each object.</li></ol>
</div>

<h3>Step 4: Execute the REST call</h3>
<div>
<p>Now that you have the URL and the data, you can execute your REST call as follows:</p>
<ol><li>Create the REST URL as follows:
<ul><li>Start with <code>https://[your Magento host or IP]/[your Magento base install dir]/rest/default</code></li>
<li>Append the REST URI you found in step 1.</li></ul>
</li>
<li>Pass an <a href="http://tools.ietf.org/html/rfc5849#section-3.4" target="_blank">OAuth 1.0a Authorization</a> header using <a href="http://tools.ietf.org/html/rfc5849#section-4.1" target="_blank">RSA-SHA1 encryption</a>.</li>
<li>Pass a <code>Content-Type: application/json</code> header.</code></li>
<li>Pass JSON or XML containing the data.</li></ol>
<p>For a step-by-step example, see <a href="{{ site.gdeurl }}get-started/rest/rest-ff-rest-client.html">How-To&mdash;Using the Firefox REST Client to Create a Customer</a>.</p>
</div>
</div>


      </div>
    </div>
  </div>
</div>






