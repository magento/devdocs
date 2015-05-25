---
layout: default
group: get-started
subgroup: C_REST
title: Construct a request
menu_title: Construct a request
menu_order: 1

github_link: get-started/gs-web-api-request.md
---

<p>To configure a web API, developers define some of the elements of each API call in the <code>app/code/Magento/&lt;MODULE&gt;/etc/webapi.xml</code> file, where <code>&lt;MODULE></code> is the module name. For example, the web API for the Customer service is defined in the <code>app/code/Magento/Customer/etc/webapi.xml</code> configuration file. Service data interfaces and builders define the required and optional parameters and the return values for the API calls.</p>

<p>To construct a web API request, read these topics:</p>
<ul>
<li><a href="#requests">Overview</a></li>
<li><a href="#construct-request">Construct a request</a></li>
</ul>

<h2 id="request-overview">Overview</h2>

<p>Each Magento web API call contains of a combination of these elements:</p>
<ul>
   <li><a href="#verbs">HTTP verb</a></li>
   <li><a href="#endpoints">Endpoint</a></li>
   <li><a href="#http-headers">HTTP headers</a></li>
   <li><a href="#payload">Call payload</a></li>
</ul>
<p>The following table and the sections that follow the table describe these API call elements:</p>
<table style="width:75%">
   <tr bgcolor="lightgray">
      <th>Element</th>
      <th>Specifies</th>
   </tr>
   <tr>
      <td>
         <p><a href="#verbs">HTTP&nbsp;verb</a></p>
      </td>
      <td>
         <p>The action to perform against the endpoint.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><a href="#endpoints">Endpoint</a></p>
      </td>
      <td>
         <p>A combination of the <i>server</i> that fulfills a request, the web service, and the <i>resource</i> against which the request is being made.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><a href="#http-headers">HTTP&nbsp;headers</a></p>
      </td>
      <td>
         <p>The authentication token, the call request and response formats,
            and other information.
         </p>
      </td>
   </tr>
   <tr>
      <td>
         <p><a href="#payload">Call&nbsp;payload</a></p>
      </td>
      <td>
         <p>A set of input parameters and attributes that you supply with the request.
            API operations have both
            <em>required</em> and
            <em>optional</em> inputs. You specify input parameters in the URI and input attributes in a request body. You can specify a JSON- or XML-formatted request body.
         </p>
      </td>
   </tr>
</table>
<a name="verbs"></a>
<h3>HTTP verb</h3>
<p>Specify one of these HTTP verbs in the request:</p>
<ul>
   <li><code>GET</code>.
   Requests transfer of a current representation of the
      target resource. If you omit the verb, <code>GET</code> is the default.
   </li>
   <li><code>PUT</code>.
   Requests that the state of the target resource be
      created or replaced with the state defined by the representation
      enclosed in the request message payload.
   </li>
   <li><code>POST</code>.
   Requests that the origin server accept the
      representation enclosed in the request as data to be processed by the
      target resource.
   </li>
   <li><code>DELETE</code>.
   Requests that the origin server delete the target
      resource.
   </li>
</ul>
<a name="endpoints"></a>
<h3>Endpoint</h3>
<p>An endpoint is a combination of the <i>server</i> that fulfills a request, the web service, the <i>resource</i> against which the request is being made, and any template parameters.</p>

<p>For example, in the <code>http://magento.ll/index.php/rest/V1/customerGroups/:id</code> endpoint, the server is <code>magento.ll/index.php/</code>, the web service is <code>rest</code>, the resource is <code>/V1/customerGroups</code>, and the template parameter is <code>id</code>.</p>


<a name="http-headers"></a>
<h3>HTTP headers</h3>
<div class="bs-callout bs-callout-info" id="info"><p>To specify an HTTP header in a cURL command, use the <code>-H</code> option.</p></div>
<p>Specify one or more of the following HTTP headers
   in your web API calls:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>HTTP header</th>
      <th>Description</th>
      <th>Syntax</th>
   </tr>
   <tr>
      <td>
         <pre>Authorization</pre>
      </td>
      <td><p>Required. Specifies the authentication token that proves you as the owner of a Magento
         account. You specify the token in the <code>Authorization</code> request header with the <code>Bearer</code> HTTP authorization scheme.
         </p>
      </td>
      <td><pre>Authorization:&nbsp;Bearer&nbsp;&lt;TOKEN&gt;</pre>
      <p>Where <code>&lt;TOKEN&gt;</code> is the authentication token returned by the Magento token service.
See <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication.html">Authentication</a>.</p></td>
   </tr>
   <tr>
      <td><pre>Accept</pre>
      </td>
      <td><p>Optional. Specifies the format of the response body. Default is <code>json</code>.</p></td>
      <td>
      <pre>Accept: application/&lt;FORMAT&gt;</pre>
      <p>Where
         <code>&lt;FORMAT&gt;</code> is either
         <code>json</code>or
         <code>xml</code>.</p>
         <p>If you omit this header, the response is returned in JSON format.</p></td>
   </tr>
   <tr>
      <td>
         <p>
            <code>Content-Type</code>
         </p>
      </td>
      <td><p>Required for operations with a request body. Specifies the format of the request body.</p></td>
      <td>
     <pre>Content-Type:application/&lt;FORMAT&gt;</pre>
     <p>Where
         <code>&lt;FORMAT&gt;</code>is either
         <code>json</code>or
         <code>xml</code>.
      </p></td>
   </tr>
</table>

<a name="payload"></a>
<h3>Call payload</h3>
<p>The call payload is set of input <i>parameters</i> and <i>attributes</i> that you supply with the request.
            API operations have both
            <em>required</em> and
            <em>optional</em> inputs.</p>
<p>You specify input parameters in the URI. For example, in the <code>GET&nbsp;/V1/customers/:customerId</code> URI, you must specify the <code>customerId</code> template parameter. This parameter filters the response by the specified customer ID.</p>
<p>You specify input attributes in a JSON- or XML-formatted request body. For example, in the <code>POST&nbsp;/V1/customers</code> call, you must specify a request body like this:</p>
<pre>{
    "customers": {
        "customer": {
            "email": "user@example.com",
            "firstname": "John",
            "lastname": "Doe"
        },
        "addresses": [
            {
                "defaultShipping": true,
                "defaultBilling": true,
                "firstname": "John",
                "lastname": "Doe",
                "region": {
                    "regionCode": "CA",
                    "region": "California",
                    "regionId": 12
                },
                "postcode": "90001",
                "street": ["Zoe Ave"],
                "city": "Los Angeles",
                "telephone": "555-000-00-00",
                "countryId": "US"
            }
        ]
    }
}</pre>
<p>This JSON-formatted request body includes a <code>customer</code> object with the customer email, first name, and last name, and customer address information. The information in this request body is used to populate the new customer account.</p>

<h2 id="construct-request">Construct a request</h2>
<p>This example shows you how to construct a REST web API call to create an account.</p>

<ol><li>Open the <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">webapi.xml</a> configuration file.</li>
<li><p>Find the route element that defines the <code>createAccount</code> call:</p>
<pre>
&lt;route url="/V1/customers" method="POST">
    &lt;service class="Magento\Customer\Api\AccountManagementInterface" method="createAccount"/>
    &lt;resources>
        &lt;resource ref="anonymous"/>
    &lt;/resources>
&lt;/route>
</pre>
</li>
<li><p>Use the <code>method</code> and <code>url</code> values on the <code>route</code> element to construct the URI.</p><p>In this example, the URI is:</p>
<pre>POST /V1/customers</pre></li>
<li><p>Use the <code>class</code> attribute on the <code>service</code> element to identify the service interface.</p>
<p>In this example, the service interface is the <code>AccountManagementInterface</code> PHP file.</p>
<p>Open the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Api/AccountManagementInterface.php" target="_blank">AccountManagementInterface.php</a> file and find the <code>createAccount</code> method, as follows:</p>
<pre>public function createAccount(
        \Magento\Customer\Api\Data\CustomerInterface $customer,
        $password = null,
        $redirectUrl = ''
    );</pre>
<p>The <code>createAccount</code> call requires a <code>customer</code> data object. The <code>password</code> and <code>redirectUrl</code> values are optional. The default <code>password</code> value is <code>null</code> and the default <code>redirectUrl</code> value is blank.</p>
</li>
<li><p>To pass the <code>customer</code> data object in the POST call payload, specify a <a href="http://www.json.com/" target="_blank">JSON</a> or XML request body on the call.</p></li>
</ol>

<h2>Next step</h2>
<p>Run the web API call through a <a href="{{ site.gdeurl }}get-started/gs-curl.html">cURL command</a> or a REST client.</p>

