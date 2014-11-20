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
            <p>This guide introduces web API, REST, and cURL command concepts and provides examples for how to construct REST web API calls and execute them through either a REST client or cURL commands. You can modify these examples to construct other calls.</p>
            <p>Read the following sections to get up and running with the Magento web APIs:</p>
           <!--
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
               <li>
                  <p>
                     <a href="{{ site.gdeurl }}get-started/rest/rest-ff-rest-client.html">Firefox REST client</a>
                  </p>
               </li>
               <li>
                  <p>
                     <a href="{{ site.gdeurl }}get-started/rest/rest-web-api-calls.html">REST web API calls</a>
                  </p>
               </li>
 -->
               <!--
                  <li>
                     <p>
                        <a href="{{ site.gdeurl }}get-started/soap/soap-web-api-calls.html">SOAP web API calls</a>
                     </p>
                  </li>
                  -->
           <!--  </ul> -->
            <a name="authentication"/>
               <h2>Authentication</h2>
               <p>To make REST or SOAP web API calls, you must request an authentication token from
                  the Magento token service.
               </p>
               <p>The token service returns
                  a unique authentication token in exchange for valid credentials, which are a customer or admin user name and password for a Magento account.
               </p>
               <p>When you make web API calls, you supply this token in the
                  <b>Authorization</b> header. The authentication token never expires but it can be revoked.
               </p>
               <h3 id="token-service-endpoints">Token service endpoints</h3>
               <p>Make a token request to the endpoint that is defined for your user type:</p>
               <table style="width:75%">
                  <tr bgcolor="lightgray">
                     <th>User type</th>
                     <th>Endpoint</th>
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
               <h3 id="auth-request-syntax">Token request syntax</h3>
               <p>To request an authentication token, use the following command syntax:</p>
               <pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/{customer|admin}/token" \
     -H "Content-Type:application/json" \
     -d '{"username":"test@example.com", "password":"123123q"}'</pre>
               <p>In the endpoint, specify <code>customer</code> or <code>admin</code> to indicate your user type. This example syntax shows a JSON-formatted request body, but XML requests are also allowed. To make an XML request, specify the <code>Content-Type:application/xml</code> header and specify the request body, as follows:</p>
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
               <h3 id="auth-response">Authentication token response</h3>
               <p>A successful request returns a response body with the token, as follows:</p>
               <pre>"asdf3hjklp5iuytre"</pre>
               <h3>Sample API request with authentication token</h3>
               <p>Use the customer authentication token in API calls. Because this is a customer token, only resources with <code>self</code> permissions
                  can be accessed.</p>
               <pre>curl -X GET "http://magento.ll/index.php/rest/V1/customer/me" \
-H "Authorization:Bearer asdf3hjklp5iuytre"</pre>
               <p>API request using admin token</p>
               <p>The token obtained using the admin token request can now be used to make an API
                  call. If the admin is authenticated and authorized to access the particular resource,
                  the API request is processed.
               </p>
               <pre>curl -X GET "http://magento.ll/index.php/rest/V1/customerAccounts/2" \
-H "Authorization:Bearer vbnf3hjklp5iuytre"</pre>
<a name="guest-access"></a>
               <h3>Guest access</h3>
               <p>Webapi framework allows for accessing resources configured with anonymous permission
                  in webapi config without any authentication. Users may choose to authenticate themselves
                  when accessing these resources but its not needed.
               </p>
               <p>Users that cannot be authenticated by the Webapi framework (via the existing Authentication
                  mechanisms) are classified as Guest users.
               </p>
               <p>ex. of webapi config :</p>
               <pre>
               &lt;route url="/V1/customerAccounts" method="POST">
                  &lt;service class="Magento\Customer\Service\V1\CustomerAccountServiceInterface" method="createCustomer"
                     />
                  &lt;resources>
                     &lt;resource ref="anonymous" />
                  &lt;/resources>
               &lt;/route></pre>
                                 <h2 id="web-api-components">The components of a web API request</h2>
                             <p>Each Magento web API call contains of a combination of the following elements:</p>
                             <ul>
                                <li>
                                   <a href="#credentials">API credentials</a>
                                </li>
                                <li>
                                   <a href="#endpoint">Service endpoint</a>
                                </li>
                                <li>
                                   <a href="#payload">Call payload</a>
                                </li>
                                <li>
                                   <a href="#requestType">Request and response format types</a>
                                </li>
                                <li>
                                   <a href="#headers">HTTP headers</a>
                                </li>
                             </ul>
                             <p>The following table gives an overview of these API call elements. See the sections
                                that follow for complete descriptions.
                             </p>
                             <table style="width:100%">
                                <tr bgcolor="lightgray">
                                   <th>Call component</th>
                                   <th>Description</th>
                                </tr>
                                   <tr>
                                      <td><p>Authentication token</p></td>
                                      <td><p>Web API calls require an authentication token that proves you as the owner of a Magento
                                         account.</p>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td>Service endpoint</td>
                                      <td>An API request can be sent to a service endpoint.
                                      </td>
                                   </tr>
                                   <tr>
                                      <td>Call payload</td>
                                      <td>Each Magento API call has both required and optional input fields that detail the
                                         specifics of the request. Together, these input fields are termed the
                                         <em>call payload</em>.
               </td>
               </tr>
               <tr>
                  <td>Call Formats</td>
                  <td>Magento supports calls made using REST. In addition, call
                     payloads can be formatted in JSON.
                  </td>
               </tr>
               <tr>
                  <td>HTTP headers</td>
                  <td>Magento API operations require you provide specific HTTP headers with your requests.
                     The headers specify authentication credentials, the call request and response formats,
                     and other information.
                  </td>
               </tr>
               </tbody>
               </table>
            <a name="call"></a>
            <a name="credentials"></a>
            <h3>API credentials</h3>
            <p>You must provide a valid set of
               <em>API credentials</em>when making calls to Magento API operations. This enables Magento
               to verify the account that makes the calls.
            </p>
            <a name="endpoint"></a>
            <h3>Service endpoint</h3>
            <p>An
               <em>endpoint</em>provides the URI of the server that handles your request. Each Magento
               service and operation has a unique endpoint.</p>
            <a name="payload"></a>
            <h3>Call payload</h3>
            <p>Each Magento API call contains a
               <em>payload</em>, which is a unique set of input fields that you supply with the request.
               API operations have both
               <em>required</em>and
               <em>optional</em>input fields. Although you can make a basic test call with only the
               required input fields, your production-level applications will likely make use of
               optional inputs.
            </p>

            <a name="requestType"></a>
            <h3>Request and response format types</h3>
            <p>&nbsp;</p>
            <a name="headers"></a>
            <h3>HTTP headers</h3>
            <p>Magento has many services and some require that you specify a set of HTTP Headers
               in your calls. For example, the Adaptive Payments and Adaptive Accounts APIs require
               the following set of HTTP headers:
            </p>
            <table class="table">
               <tbody>
                  <tr>
                     <th>HTTP Header</th>
                     <th>Description</th>
                  </tr>
                  <tr>
                     <td>
                        <code>X-Magento-SECURITY-USERID</code>
                     </td>
                     <td>The API user name. This is one of the API credentials assigned to your account.</td>
                  </tr>
                  <tr>
                     <td>
                        <code>X-Magento-SECURITY-PASSWORD</code>
                     </td>
                     <td>The API password. This is one of the API credentials assigned to your account.</td>
                  </tr>
                  <tr>
                     <td>
                        <code>X-Magento-SECURITY-SIGNATURE</code>
                     </td>
                     <td>The API signature. This is one of the API credentials assigned to your account.</td>
                  </tr>
                  <tr>
                     <td>
                        <code>X-Magento-APPLICATION-ID</code>
                     </td>
                     <td>The Sandbox contains a unique and static App ID (APP-80W284485P519543T). When you
                        move an application into production, Magento assigns your application a custom App
                        ID that you need to use to key your application with the production servers.
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <code>X-Magento-REQUEST-DATA-FORMAT</code>
                     </td>
                     <td>The payload format for the request.</td>
                  </tr>
                  <tr>
                     <td>
                        <code>X-Magento-RESPONSE-DATA-FORMAT</code>
                     </td>
                     <td>The payload format for the response.</td>
                  </tr>
               </tbody>
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
            </p>
            <p>For example, the following cURL command:
            </p>
            <pre>curl -s ...</pre>
            <p>Notice that in cURL commands, HTTP headers are specified with the
            <p>
               <code>-H</code>switch.
            </p>

         </div>
      </div>
   </div>
</div>






