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
         <p><b>Contents</b></p>
         <div style="" id="category" class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix-top" role="complementary">
         </div>
         <a class="back-to-top" href="#top">
         Back to top
         </a>
         <a href="#" class="bs-docs-theme-toggle">
         Preview theme
         </a>
      </div>
      <div class="col-xs-9" role="main">
         <div class="bs-docs-section">
            <p><a href="{{ site.githuburl }}get-started-with-apis/bk-get-started-api.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
            <h2 id="web-api-access">Overview</h2>
            <p>The Magento web API framework enables Magento and third-party developers to <a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-to-web-service.html">configure services as web APIs</a>. Users can make REST or SOAP calls to access the web APIs.</p>
            <p>Although REST and SOAP use different payloads and routing, they use the same authorization mechanisms to provide access to Magento services.</p>
            <p>Read the following sections to get up and running with the Magento web APIs:</p>
            <ul>
               <li>
                  <p><a href="#authentication">Authentication</a></p>
               </li>
               <li>
                  <p><a href="#web-api-components">The components of a web API request</a></p>
               </li>
               <li>
                  <p><a href="{{ site.gdeurl }}get-started/rest/rest-overview.html">REST overview</a></p>
               </li>
               <li>
                  <p><a href="{{ site.gdeurl }}get-started/rest/rest-ff-rest-client.html">Firefox REST client</a></p>
               </li>
               <li>
                  <p><a href="{{ site.gdeurl }}get-started/rest/rest-web-api-calls.html">REST web API calls</a></p>
               </li>
               <li>
                  <p><a href="{{ site.gdeurl }}get-started/soap/soap-web-api-calls.html">SOAP web API calls</a></p>
               </li>
            </ul>
            <h2 id="authentication">Authentication</h2>
            <p>To make REST or SOAP web API calls, you must request an authentication token from the Magento token service. Depending on the type of user you are, you request an authentication token from one of these endpoints:</p>
            <table style="width:100%">
               <tr bgcolor="lightgray">
                  <th>User</th>
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
            <p>In exchange for valid credentials, the token service returns a unique authentication token.</p>
            <p>When you make web API calls, you supply this token in the <b>Authorization</b> header. The authentication token never expires but it can be revoked.</p>
            <h3 id="token-customer">Generating a token for customer (POST /V1/integration/customer/token)</h3>
            <p>NOTE: The current behavior is to return a new token based for every login request irrespective of the device. There will be changes in the future to have a device specific token or a general purpose token if the request fails to identify the device.</p>
            <p>Example of customer token request:</p>
            <blockquote>
			<pre>curl -X POST "https://magento.host/index.php/rest/V1/integration/customer/token" -H "Content-Type:application/json" -d '{"username":"test@example.com", "password":"123123q"}'</pre>
			</blockquote>
            NOTE : Content-Type:application/xml is also supported, example:
            <blockquote>
			<pre>&lt;login>
               &lt;username>test@xample.com&lt;/username>
               &lt;password>123123q&lt;/password>
            &lt;/login>
			</pre>
			</blockquote>
            <p>Example of a successful response body with the token:
            <pre>"asdf3hjklp5iuytre"</pre>
            API request using customer token
            The token obtained using the customer token request can now be used to make an API call. Note since this is a customer token, only resources with "self" permissions can be accessed.
            curl -X GET "http://magento.ll/index.php/rest/V1/customer/me" -H "Authorization: Bearer asdf3hjklp5iuytre"
            <h3 id="token-customer">Generating a token for admin (POST /V1/integration/admin/token)</h3>
            Similar steps apply to a device trying to provide admin access to Magneto. Token service performs few things:
            verifies customer credentials based on login and password that was passed
            Generate and register a unique token against the client
            return long lived tokens to the mobile client. Tokens in theory never expire but we allow revocation.
            NOTE: The current behavior is to return a new token based for every token request. This needs to be revisited to allow reuse of the current valid token.
            Example of admin token request:
            curl -X POST "https://magento.host/index.php/rest/V1/integration/admin/token" -H "Content-Type:application/json" -d '{"username":"test@example.com", "password":"123123q"}'
            NOTE : Content-Type:application/xml is also supported, example:
            <login>
               <username>admin@xample.com</username>
               <password>123123q</password>
            </login>
            Example of a successful response body with the token:
            "vbnf3hjklp5iuytre"
            API request using admin token
            The token obtained using the admin token request can now be used to make an API call. If the admin is authenticated and authorized to access the particular resource, api request will be processed.
            curl -X GET "http://magento.ll/index.php/rest/V1/customerAccounts/2" -H "Authorization: Bearer vbnf3hjklp5iuytre"
            Guest access
            Webapi framework allows for accessing resources configured with anonymous permission in webapi config without any authentication. Users may choose to authenticate themselves when accessing these resources but its not needed.
            Users that cannot be authenticated by the Webapi framework (via the existing Authentication mechanisms) are classified as Guest users.
            ex. of webapi config :
            <route url="/V1/customerAccounts" method="POST">
               <service class="Magento\Customer\Service\V1\CustomerAccountServiceInterface" method="createCustomer"/>
               <resources>
                  <resource ref="anonymous"/>
               </resources>
            </route>
            <h2 id="web-api-components">The components of a web API request</h2>
            <p>Each Magento web API call contains of a combination of the following elements:</p>
            <ul>
               <li><a href="#credentials">API credentials</a></li>
               <li><a href="#endpoint">Service endpoint</a></li>
               <li><a href="#payload">Call payload</a></li>
               <li><a href="#requestType">Request and response format types</a></li>
               <li><a href="#headers">HTTP headers</a></li>
            </ul>
            <p>The following table gives an overview of these API call elements. See the sections that follow for complete descriptions.</p>
            <table class="table">
               <tbody>
                  <tr>
                     <th>Call element</th>
                     <th>Description</th>
                  </tr>
                  <tr>
                     <td>API credentials</td>
                     <td>Many API calls require a set of values to authenticate you as the
                        owner of a Magento account. The Classic API credentials are assigned to
                        your Magento account and consist of an <em>API Username</em>, an <em>API Password</em>, and a <em>Signature</em>. Some API calls (such as those in the Adaptive APIs) also require an <em>AppID</em> value.
                     </td>
                  </tr>
                  <tr>
                     <td>Service endpoint</td>
                     <td>An API request can be sent to either the Sandbox endpoint or the
                        Production endpoint. The endpoint you use depends on several conditions,
                        such as the API operation you're calling, the environment you're
                        addressing, and the format of your call.
                     </td>
                  </tr>
                  <tr>
                     <td>Call payload</td>
                     <td>Each Magento API call has both required and optional input fields
                        that detail the specifics of the request. Together, these input fields
                        are termed the <em>call payload</em>. For example, the Adaptive Payments <code>Pay</code> operation requires a transaction amount, which you specify via a required input field.
                     </td>
                  </tr>
                  <tr>
                     <td>Call Formats</td>
                     <td>Magento supports calls made using both SOAP and non-SOAP formats. In addition, call payloads can be formatted in JSON and NVP.</td>
                  </tr>
                  <tr>
                     <td>HTTP Headers</td>
                     <td>Magento API operations require you provide specific HTTP headers with
                        your requests. The headers specify authentication credentials, the call
                        request and response formats, and other information. For example, when
                        calling either the Adaptive Payments or Adaptive Accounts APIs, you need
                        to specify your App ID in the <code>X-Magento-APPLICATION-ID</code> header. You specify the format of the request and response using two separate headers, <code>X-Magento-REQUEST-DATA-FORMAT</code> and <code>X-Magento-RESPONSE-DATA-FORMAT</code>.
                     </td>
                  </tr>
               </tbody>
            </table>
            <a name="credentials"></a>
            <h3>API credentials</h3>
            <p>You must provide a valid set of <em>API credentials</em> when making calls to Magento API operations. This allows Magento to verify the account that's making the calls.</p>
            <p>Magento Classic API credentials consist of an <em>API Username</em>, an <em>API Password</em>, and a <em>Signature</em>,
               and Magento generates a unique set of credentials for each eligible
               Magento account. Your Sandbox accounts and your live Magento Business or
               Premier accounts have different sets of API credentials, be sure to use
               the correct set when testing! On the Developer site, navigate to the <strong>Applications &gt; Sandbox accounts</strong> page to retrieve the API credentials for your Business test accounts.
            </p>
            <p>In addition to the Classic API credentials,  the Adaptive APIs also make use of an <em>AppID</em>
               value. To obtain an AppID value for use in the Magento production
               environment, submit your application for review, as described in <a href="https://developer.Magento.com/docs/classic/lifecycle/goingLive/">Going Live with Your Application</a>. When testing your Adaptive API calls in the Sandbox, uses the static AppID value for the Sandbox:
            </p>
            <blockquote><code>APP-80W284485P519543T</code></blockquote>
            <p>See <a href="https://developer.Magento.com/docs/classic/api/apiCredentials/">Creating and Managing Classic API Credentials</a> for more on how to generate and maintain the credentials needed to make calls to the live Magento environment.</p>
            <a name="endpoint"></a>
            <h3>Service endpoint</h3>
            <p>An <em>endpoint</em> provides the URI of the server that  handles your request. Each Magento service and operation has a unique endpoint. See the <a href="https://developer.Magento.com/docs/classic/api/endpoints/">Magento Endpoints</a> page for a list of all the Classic API endpoints.</p>
            <p>For example, the Sandbox endpoint for the Adaptive Payments <code>pay</code> operation is as follows:</p>
            <blockquote><code>https://svcs.sandbox.Magento.com/AdaptivePayments/Pay</code></blockquote>
            <p>Use the Sandbox endpoints during your application testing phase.
               After you've finished testing your application in the Sandbox, move to
               the production environment by updating the endpoints in your application
               so your requests are directed to the correct Magento production service
               and operation.
            </p>
            <p>With this, if you're calling an Express Checkout operation with NVP formatting, test in the Sandbox with the following endpoint:</p>
            <blockquote><code>https://api-3t.sandbox.Magento.com/nvp</code></blockquote>
            <p>Once your testing is complete, move your application into production by updating your endpoints to the following URI:</p>
            <blockquote><code>https://api-3t.Magento.com/nvp</code></blockquote>
            <p>Don't forget that to go live, you'll also need to update your API
               credentials to those assigned to your live Magento account (instead of
               those assigned to your virtual Sandbox accounts).
            </p>
            <a name="payload"></a>
            <h3>Call payload</h3>
            <p>Each Magento API call contains a <em>payload</em>, which is a unique set of input fields that you supply with the request. API operations have both <em>required</em> and <em>optional</em>
               input fields. Although you can make a basic test call with only the
               required input fields, your production-level applications will likely
               make use of optional inputs.
            </p>
            <p>For example, an Express Checkout call requires the following input fields:</p>
            <ul>
               <li>
                  <code>USER</code>—The API User name credential.
               </li>
               <li>
                  <code>PWD</code>—The API Password credential.
               </li>
               <li>
                  <code>SIGNATURE</code>—The Signature credential.
               </li>
               <li>
                  <code>METHOD</code>—The API operation you are addressing.
               </li>
               <li>
                  <code>VERSION</code>—The version of the API to which you are making your request.
               </li>
               <li>
                  <code>AMT</code>—The cash amount of the transaction.
               </li>
               <li>
                  <code>cancelUrl</code>—The URL address to which the user is returned if they cancel the transaction.
               </li>
               <li>
                  <code>returnUrl</code>—The URL address to which the user is returned when the complete the transaction.
               </li>
            </ul>
            <p>The required fields denote the minimum set of parameters that you can
               include in the payload of a Magento API operation request. Below is an
               example of how this payload would be formatted using name-value pairs:
            </p>
            <pre>USER=&lt;<em><strong>Your_APIUsername</strong></em>&gt;&amp;
PWD=&lt;<em><strong>Your_APIPassword</strong></em>&gt;&amp;
SIGNATURE=&lt;<em><strong>Your_Signature</strong></em>&gt;&amp;
METHOD=SetExpressCheckout&amp;
VERSION=78&amp;
AMT=10&amp;
cancelUrl=http://www.example.com/cancel.html&amp;
returnUrl=http://www.example.com/success.html
</pre>
            <a name="requestType"></a>
            <h3>Request and response format types</h3>
            <p>The Magento web APIs support two types of request and response call formats: SOAP and non-SOAP</p>
            <p>When using SOAP, format the payload using XML within the SOAP envelope and supply any HTTP headers as part of the envelope.</p>
            <p>Non-SOAP formatted calls can make use of the following types of payload formats:</p>
            <dl>
               <li>x-www-form-urlencoded</li>
               <dd>Name-Value Pairs (NVP)</dd>
               <li>XML-RPC</li>
               <dd>Extensible Markup Language</dd>
               <li>JSON-RPC</li>
               <dd>JavaScript object notation (Adaptive APIs only)</dd>
            </dl>
            <p>How you specify the format of your Magento operation calls depends on
               the API you're using. For the Adaptive APIs (Adaptive Payments, Adaptive
               Accounts, and the Permissions Service), specify the request and
               response formats in the HTTP headers. Other Magento APIs require that you
               specify the call formats in the call payload.
            </p>
            <a name="headers"></a>
            <h3>HTTP headers</h3>
            <p>Magento has many services and some require that you specify a set of
               HTTP Headers in your calls. For example, the Adaptive Payments and
               Adaptive Accounts APIs require the following set of HTTP headers:
            </p>
            <table class="table">
               <tbody>
                  <tr>
                     <th>HTTP Header</th>
                     <th>Description</th>
                  </tr>
                  <tr>
                     <td><code>X-Magento-SECURITY-USERID</code></td>
                     <td>The API user name. This is one of the API credentials assigned to your account.</td>
                  </tr>
                  <tr>
                     <td><code>X-Magento-SECURITY-PASSWORD</code></td>
                     <td>The API password. This is one of the API credentials assigned to your account.</td>
                  </tr>
                  <tr>
                     <td><code>X-Magento-SECURITY-SIGNATURE</code></td>
                     <td>The API signature. This is one of the API credentials assigned to your account.</td>
                  </tr>
                  <tr>
                     <td><code>X-Magento-APPLICATION-ID</code></td>
                     <td>The Sandbox contains a unique and static App ID
                        (APP-80W284485P519543T). When you move an application into production,
                        Magento assigns your application a custom App ID that you need to use to
                        key your application with the production servers.
                     </td>
                  </tr>
                  <tr>
                     <td><code>X-Magento-REQUEST-DATA-FORMAT</code></td>
                     <td>The payload format for the request.</td>
                  </tr>
                  <tr>
                     <td><code>X-Magento-RESPONSE-DATA-FORMAT</code></td>
                     <td>The payload format for the response.</td>
                  </tr>
               </tbody>
            </table>
            <p>Be aware that different Magento APIs use different sets of HTTP
               headers (and some don't use any at all). Refer to the Developer
               documentation for the definitive list of HTTP headers for the Magento
               operation(s) you plan to use.
            </p>
            <a name="call"></a>
            <h2>Putting a call together</h2>
            <p>To make a Magento API call, put together all the components of the
               call (as described just above) into a SOAP or non-SOAP object, and
               execute the call.
            </p>
            <p>For example, the following cURL command, wrapped and commented for
               readability, shows how the call elements are assembled to make a request
               to the Adaptive Accounts <code>CreateAccount</code> operation:
            </p>
            <pre>curl -s --insecure

// API Credentials
-H "X-Magento-SECURITY-USERID: <em><strong>Your_APIUsername</strong></em>"
-H "X-Magento-SECURITY-PASSWORD: <em><strong>Your_APIPassword</strong></em>"
-H "X-Magento-SECURITY-SIGNATURE: <em><strong>Your_Signature</strong></em>"

// Input and output formats
-H "X-Magento-REQUEST-DATA-FORMAT: JSON"
-H "X-Magento-RESPONSE-DATA-FORMAT: JSON"

// Static Sandbox AppID
-H "X-Magento-APPLICATION-ID: APP-80W284485P519543T"

-H "X-Magento-DEVICE-IPADDRESS: 192.0.2.0"
-H "X-Magento-SANDBOX-EMAIL-ADDRESS: <em><strong>Your_APICaller-emailAddress</strong></em>"

// Sandbox endpoint
https://svcs.sandbox.Magento.com/AdaptiveAccounts/CreateAccount -d

// Payload, formatted in JSON
"{
"sandboxEmailAddress":"<em><strong>Sender-emailAddress</strong></em>",
"accountType":"PERSONAL",
"name": {
"firstName":"Lenny",
"lastName":"Riceman"
},
"address": {
"line1":"123 Main St",
"city":"Austin",
"state":"TX",
"postalCode":"78759",
"countryCode":"US"
},
"citizenshipCountryCode":"US",
"contactPhoneNumber":"512-555-5555",
"dateOfBirth":"1968-01-01Z",
"createAccountWebOptions": {
"returnUrl":"http://www.example.com/success.html"
},
"currencyCode":"USD",
"emailAddress":"lr12345@example.com",
"preferredLanguageCode":"en_US",
"registrationType":"Web",
"requestEnvelope": {
"errorLanguage":"en_US"
}
}"
</pre>
            <p>Notice that in cURL commands, HTTP headers are specified with the <code>-H</code> switch.</p>
         </div>
      </div>
   </div>
</div>






