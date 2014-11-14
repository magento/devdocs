---
layout: default
title: Configure services as web APIs
---

<div class="container bs-docs-container">
   <div class="row">
      <div class="jumbotron">
         <h1 class="api1" id="expose-service">{{ page.title }}</h1>
      </div>
      <div class="row">
         <div class="col-xs-3">
            <p>&nbsp;</p>
         </div>
         <div class="col-xs-9" role="main">
            <div class="bs-docs-section">
               <p><a href="{{ site.githuburl }}guides/v1.0/extension-dev-guide/module-service-contracts/service-to-web-service.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
               <h2 id="overview-web-service">Overview</h2>
               <p>You can configure a Magento service as a REST and SOAP web API. Before you can configure a service as a SOAP web API, you must configure it as a REST web API.</p>
               <p>Use the <code>webapi.xml</code> configuration file to <a href="#configure-webapi">configure a web API</a>.</p>
               <p>Create and use the <code>webapi.xsd</code> XML schema file to <a href="#validate-webapi">validate the web API</a>.</p>
               <h2 id="configure-webapi">Configure a web API</h2>
               <p>To configure a service as a web API, define XML elements and attributes in the <code>app/code/Magento/&lt;MODULE&gt;/etc/webapi.xml</code> configuration file.</p>
               <h3 id="sample-webapi">Sample webapi.xml file</h3>
               <p>The following example shows an excerpt from a <code>webapi.xml</code> file:</p>
               <script src="https://github.corp.ebay.com/gist/difleming/2d55a6cbbaece7813618.js"></script>
               <h3 id="config-attributes">webapi.xml configuration options</h3>
               <p>To define components of a web API, set attributes on the following XML elements:</p>
               <table style="width:100%">
                  <tr bgcolor="lightgray">
                     <th>XML element</th>
                     <th>Required?</th>
                     <th>Attributes</th>
                     <th>Defines</th>
                  </tr>
                  <tr>
                     <td rowspan="2">
                        <p><code>&lt;routes&gt;</code></p>
                     </td>
                     <td rowspan="2">
                        <p>Yes</p>
                     </td>
                     <td>
                        <p><code>xmlns:xsi</code></p>
                     </td>
                     <td>
                        <p>Namespace for the XML schema instance.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p><code>xsi:noNamespaceSchemaLocation</code></p>
                     </td>
                     <td>
                        <p>Path and file name of the XML schema file to use to validate the web API.</p>
                     </td>
                  </tr>
                  <tr>
                     <td rowspan="2"><p><code>&lt;route&gt;</code></p></td>
                     <td rowspan="2">
                        <p>Yes</p>
                     </td>
                     <td>
                        <p><code>url</code></p>
                     </td>
                     <td>
                        <p>Resource.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p><code>method</code></p>
                     </td>
                     <td>
                        <p>HTTP verb.</p>
                     </td>
                  </tr>
                  <tr>
                     <td rowspan="2"><p><code>&lt;service&gt;</code></p></td>
                     <td rowspan="2">
                        <p>Yes</p>
                     </td>
                     <td>
                        <p><code>xmlns:xsi</code></p>
                     </td>
                     <td>
                        <p>Namespace for the XML schema instance.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p><code>xsi:noNamespaceSchemaLocation</code></p>
                     </td>
                     <td>
                        <p>Path and file name of the XML schema file to use to validate the web API.</p>
                     </td>
                  </tr>
                  <tr>
                     <td rowspan="2"><p><code>&lt;resources&gt;</code></p></td>
                     <td rowspan="2">
                        <p>Yes</p>
                     </td>
                     <td>
                        <p><code>xmlns:xsi</code></p>
                     </td>
                     <td>
                        <p>Namespace for the XML schema instance.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p><code>xsi:noNamespaceSchemaLocation</code></p>
                     </td>
                     <td>
                        <p>Location and name of the XML schema file used to validate the web API.</p>
                     </td>
                  </tr>
                  <tr>
                     <td rowspan="2"><p><code>&lt;resource&gt;</code></p></td>
                     <td rowspan="2">
                        <p>Yes</p>
                     </td>
                     <td>
                        <p><code>xmlns:xsi</code></p>
                     </td>
                     <td>
                        <p>Namespace for the XML schema instance.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p><code>xsi:noNamespaceSchemaLocation</code></p>
                     </td>
                     <td>
                        <p>Path and file name of the XML schema file to use to validate the web API.</p>
                     </td>
                  </tr>
                  <tr>
                     <td rowspan="2"><p><code>&lt;data&gt;</code></p></td>
                     <td rowspan="2">
                        <p>Yes</p>
                     </td>
                     <td>
                        <p><code>xmlns:xsi</code></p>
                     </td>
                     <td>
                        <p>Namespace for the XML schema instance.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p><code>xsi:noNamespaceSchemaLocation</code></p>
                     </td>
                     <td>
                        <p>Path and file name of the XML schema file to use to validate the web API.</p>
                     </td>
                  </tr>
                  <tr>
                     <td rowspan="2"><p><code>&lt;parameter&gt;</code></p></td>
                     <td rowspan="2">
                        <p>Yes</p>
                     </td>
                     <td>
                        <p><code>xmlns:xsi</code></p>
                     </td>
                     <td>
                        <p>Namespace for the XML schema instance.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p><code>xsi:noNamespaceSchemaLocation</code></p>
                     </td>
                     <td>
                        <p>Path and file name of the XML schema file to use to validate the web API.</p>
                     </td>
                  </tr>
               </table>
               <p>Each REST API call must have a corresponding <code>&lt;rest route></code> in <code>webapi.xml</code>. To access a method using REST, the method must have a <code>&lt;rest route></code> in <code>webapi.xml</code>; otherwise, the method cannot be accessed.
               </p>
               <p>If a REST route is sensitive and is expected to be executed over HTTPS only, the method must use the <code>secure = true</code> attribute. Attempting to access a <code>secure</code> route using non-secure means results in an exception.</p>
               <p>In this <code>webapi.xml</code>:</p>
               <ul>
                  <li>The first route is accessible only by secure HTTP POST calls to <code>/V1/customers/me</code></li>
                  <li>The first route calls the <code>getCustomer</code> method of <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CustomerAccountServiceInterface</a></li>
                  <li>
                     <code>&lt;resource ref><code> means that the caller must be authorized to call <code>Magento_Customer::customer_self</code>
                  </li>
                  <li>The second route is accessible only using HTTP GET calls to <code>/V1/customer/:id</code>, where <code>:id</code> is the ID of the customer you wish to retrieve</li>
                  <li>The parameter <code>id</code> is required</li>
                  <li>This second route also calls the <code>getCustomer</code> method of <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CustomerAccountServiceInterface</a></li>
                  <li>The caller must be authorized to call <code>Magento_Customer::read</code></li>
               </ul>
               <p>For comparison, see the Customer <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">webapi.xml</a>.</p>
               <h2 id="validate-webapi">Validate a web API</h2>
               <h3 id="webapi-xsd-sample">Sample webapi.xsd</h3>
               <p>Your <code>webapi.xml</code> must be validated by an <code>app/code/_Vendor_/Webapi/etc/webapi.xsd</code>.For comparision see Customer's, <a href="{{ site.mage2000url }}app/code/Magento/Webapi/etc/webapi.xsd" target="_blank">webapi.xsd</a>.</p>
               <p>Your module can use <code>webapi.xsd</code> or you can create a customized validation.</p>
               <h3 id="related-topics">Related topics</h3>
               <ul>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/module-service-contracts/service-contracts.html">Module service contracts</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/module-service-contracts/design-patterns.html">Design patterns</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/module-service-contracts/service-domain-guidelines.html">Guidelines for domain and service layers</a>
                  </li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/module-service-contracts/service-create-example.html">Create a service - example</a>
                  </li>
                  <li><a href="{{ site.gdeurl }}get-started/webapi/webapi-basic-auth.html">Authorizing Web API Requests</a>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/what-is-svc.html">Service contracts</a></li>
                  <li><a href="{{ site.gdeurl }}get-started/rest/rest-overview.html">Accessing Magento Objects Using REST</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/svc-how-to-use.html">How a Client Uses a Service</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/services/svcs-props.html">Service design</a>  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
