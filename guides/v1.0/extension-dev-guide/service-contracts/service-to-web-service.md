---
layout: default
group: dev-guide
subgroup: Extensions
title: Configure services as web APIs
menu_title: Configure services as web APIs
menu_order: 4
github_link: extension-dev-guide/service-contracts/service-to-web-service.md
---

<h2 id="overview-web-service">Overview</h2>
<p>You can configure a Magento or third-party service as a web API.</p>
<p>To <a href="#configure-webapi">configure a web API</a>, you define XML elements and attributes in the <code>webapi.xml</code> XML configuration file for the module for the service.</p>
<p>The <code>webapi.xml</code> file for your module specifies an XML schema file for validation. By default, this file is <code>app/code/&lt;VENDOR>/Webapi/etc/webapi.xsd</code>.
   Your module can use the default <code>webapi.xsd</code> file or you can create a customized XML schema file for validation.
</p>
<p>Users can make REST or SOAP calls to access the web API.</p>
<h2 id="configure-webapi">Configure a web API</h2>
<p>To configure a web API for a service, you define XML elements and attributes in the
   <code>webapi.xml</code> file for the module for the service.
</p>
<p>For example, the web API for the Customer service is defined in the <code>app/code/Magento/Customer/etc/webapi.xml</code> configuration file.</p>
<h3 id="config-attributes">webapi.xml configuration options</h3>
<p>To define the components of a web API, you set attributes on the following XML elements in the
   <code>app/code/Magento/&lt;MODULE&gt;/etc/webapi.xml</code> configuration file:
</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>XML element</th>
      <th>Description</th>
      <th>Attributes</th>
   </tr>
   <tr>
      <td>
         <p><code>&lt;routes&gt;</code></p>
      </td>
      <td>
         <p>Required. Root element that defines the namespace and location of the XML schema file.</p>
      </td>
      <td>

         <dl>
            <dt><p><code>xmlns:xsi</code></p></dt>
            <dd><p>Required. Defines the namespace for the XML schema instance.</p></dd>
            <dt><p><code>xsi:noNamespaceSchemaLocation</code></p></dt>
            <dd><p>Required. Defines the path and file name of the XML schema file to use to validate the web API.</p></dd>
         </dl>

      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;route&gt;</code></p>
      </td>
      <td>
         <p>Required. Child element of <code>&lt;routes&gt;</code>. Defines the HTTP route for the web API method.</p>
      </td>
      <td>
         <p>
         <dl>
            <dt><p><code>method</code></p></dt>
            <dd><p>Required. String. HTTP method. Valid values are GET, POST, PUT, and DELETE.</dd>
            <dt><p><code>url</code></p></dt>
            <dd><p>Required. String.
               Magento resource. Optionally, one or more template parameters.
            </dd>
            <dt><p><code>secure</code></p></dt>
            <dd>Optional. Boolean. Indicates that the route is accessible over only HTTPS. Any attempts to access this route over non-secure causes an exception.</dd>
         </dl>
         </p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;service&gt;</code></p>
      </td>
      <td>
         <p>Required. Child element of <code>&lt;route&gt;</code>. Defines the implemented interface and the web API method name.</p>
      </td>
      <td>
         <p>
         <dl>
            <dt><p><code>class</code></p></dt>
            <dd><p>Required. String. Location and name of implemented interface.</dd>
            <dt><p><code>method</code></p></dt>
            <dd><p>Required. String. Web API method name.</dd>
         </dl>
         </p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;resources&gt;</code></p>
      </td>
      <td>
         <p>Required. Child element of <code>&lt;route&gt;</code>. Container for one or more resource definitions.</p>
      </td>
      <td>
         <p>None.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;resource&gt;</code></p>
      </td>
      <td>
         <p>Required. Child element of <code>&lt;resources&gt;</code>. Defines a resource to which the caller must have access.</p>
      </td>
      <td>
         <dl>
            <dt><p><code>ref</code></p></dt>
            <dd>
               Required. Referenced resource. Valid values are <code>self</code>, <code>anonymous</code>, or a Magento resource, such as <code>Magento_Customer::group</code>.
               <p><b>Note:</b> The Magento web API framework enables guest users to access resources that are configured with anonymous permission. Users who cannot be authenticated by the framework through the existing authentication
                  mechanisms are considered guest users.
               </p>
            </dd>
         </dl>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;data&gt;</code></p>
      </td>
      <td>
         <p>Optional. Child element of <code>&lt;route&gt;</code>. Container for one or more parameter definitions.</p>
      </td>
      <td>
         <p>None.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p><code>&lt;parameter&gt;</code></p>
      </td>
      <td>
         <p>Required if <code>&lt;data&gt;</code> is specified. Child element of <code>&lt;data&gt;</code>. Defines a parameter.</p>
      </td>
      <td>
         <p>
         <dl>
            <dt><p><code>name</code></p></dt>
            <dd>String. Parameter name.</dd>
            <dt><p><code>force</code></p></dt>
            <dd>Boolean.</dd>
         </dl>
         </p>
      </td>
   </tr>
</table>
<h3 id="sample-webapi">Sample webapi.xml file</h3>
<p>This example shows an excerpt from the <code>webapi.xml</code> file that defines the Customer service web API:</p>
<script src="https://github.corp.ebay.com/gist/difleming/2d55a6cbbaece7813618.js"></script>
<p>In this <code>webapi.xml</code> example:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Line</th>
      <th>Defines</th>
      <th>Details</th>
   </tr>
   <tr>
      <td>
         <p>3</p>
      </td>
      <td>
         <p>The XML schema file that is used to validate the XML.</p>
      </td>
      <td>
         <p>The XML schema file is <code>../../../../../app/code/Magento/Webapi/etc/webapi.xsd</code>.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>5</p>
      </td>
      <td>
         <p>The HTTP method and web resource through which to access the route.</p>
      </td>
      <td>
         <p>The HTTP method is GET.</p>
         <p>The resource is <code>/V1/customerGroups/:id</code>. Substitute a customer ID for the <code>id</code> template parameter.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>6</p>
      </td>
      <td>
         <p>The interface that the route implements and the name of the web API method.</p>
      </td>
      <td>
         <p>The route implements the <code>Magento\Customer\Api\GroupRepositoryInterface</code> interface.</p>
         <p>The web API method name is <code>get</code>.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>8</p>
      </td>
      <td>
         <p>The resource to which the caller must have access.</p>
      </td>
      <td>
         <p>The caller must have access to <code>Magento_Customer::group</code> resource.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>18</p>
      </td>
      <td>
         <p>A required parameter.</p>
      </td>
      <td>
         <p>The <code>id</code> parameter is required on GET calls to <code>/V1/customers/me/billingAddress</code>.</p>
      </td>
   </tr>
</table>
<h2 id="validate-webapi">webapi.xsd XML schema file</h2>
<p>The <code>webapi.xml</code> file for your module must specify an XML schema file for validation. Your <code>webapi.xml</code> file can specify the default or a customized XML schema file.</p>
<p>The default <code>/Webapi/etc/webapi.xsd</code> XML schema file is:</p>
<script src="https://github.corp.ebay.com/gist/difleming/b2b1aafbfbd9f54f3179.js"></script>
<h3 id="related-topics">Related topics</h3>
<ul>
   <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-contracts.html">Service contracts</a></li>
   <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/design-patterns.html">Design patterns</a></li>
   <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/add-later/service-domain-guidelines.html">Guidelines for domain and service layers</a></li>
   <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/add-later/service-create-example.html">Create a service - example</a></li>
   <li><a href="{{ site.gdeurl }}config-guide/integration/cg-authorization.html">Authorizing Web API Requests</a>
   <li><a href="{{ site.gdeurl }}get-started/gs-web-api-request.html">Step 2. Construct a request</a></li>
   <li><a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/add-later/service-how-to-use.html">How a Client Uses a Service</a></li>
   <li><a href="{{ site.gdeurl }}get-started/soap/soap-web-api-calls.html">SOAP web APIs</a></li>
</ul>

