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
               <h2>Contents</h2>
               <ul>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/module-service-contracts/service-to-web-service.html#overview-web-service">Overview</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/module-service-contracts/service-to-web-service.html#configure-webapi">Configure a web API</a></li>
                  <li><a href="{{ site.gdeurl }}extension-dev-guide/module-service-contracts/service-to-web-service.html#validate-webapi">webapi.xsd XML schema file</a></li>
               </ul>
               <h2 id="overview-web-service">Overview</h2>
               <p>You can configure a REST web API and, optionally, a SOAP web API for a Magento service.</p>
               <div class="bs-callout bs-callout-info" id="info">
                  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
                  <span class="glyphicon-class">
                     <p>Before you can configure a SOAP web API for a service, you must configure a REST web API for that service.</p>
                  </span>
               </div>
               <p>To <a href="#configure-webapi">configure a web API</a>, you define XML elements and attributes in the <code>webapi.xml</code> XML configuration file for the module for the service.</p>
               <p>The <code>webapi.xml</code> file specifies a <a href="#validate-webapi"><code>webapi.xsd</code> XML schema file</a>, which validates the XML in the <code>webapi.xml</code> file.</p>
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
                        <p>
                        <dl>
                           <dt><code>xmlns:xsi</code></dt>
                           <dd>Namespace for the XML schema instance.</dd>
                           <dt><code>xsi:noNamespaceSchemaLocation</code></dt>
                           <dd>Path and file name of the XML schema file to use to validate the web API.</dd>
                        </dl>
                        </p>
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
                           <dt><code>method</code></dt>
                           <dd>Required. String. HTTP method. Valid values are GET, POST, PUT, and DELETE.</dd>
                           <dt><code>url</code></dt>
                           <dd>Required. String.
                              Magento resource. Optionally, one or more template parameters.
                           </dd>
                           <dt><code>secure</code></dt>
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
                           <dt><code>class</code></dt>
                           <dd>Required. String. Location and name of implemented interface.</dd>
                           <dt><code>method</code></dt>
                           <dd>Required. String. Web API method name.</dd>
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
                        <p>
                        <dl>
                           <dt><code>ref</code></dt>
                           <dd>Required. Referenced resource. Valid values are <code>self</code> or a Magento resource, such as <code>Magento_Customer::group</code>.</dd>
                        </dl>
                        </p>
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
                           <dt><code>name</code></dt>
                           <dd>String. Parameter name.</dd>
                           <dt><code>force</code></dt>
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
                     <th>Description</th>
                  </tr>
                  <tr>
                     <td><p>3</p></td>
                     <td>
                        <p>Defines the XML schema file that is used to validate the XML.</p>
                        <p>The specified file is <code>../../../../../app/code/Magento/Webapi/etc/webapi.xsd</code>.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>5</p>
                     </td>
                     <td>
                        <p>Defines through which HTTP method and web resource the route can be accessed.</p>
                        <p>The specified HTTP method is GET and the resource is <code>/V1/customerGroups/:id</code>. Substitute a customer ID for the <code>id</code> template parameter.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>6</p>
                     </td>
                     <td>
                        <p>The first route implements the <code>Magento\Customer\Api\GroupRepositoryInterface</code> interface as the <code>get</code> method.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>8</p>
                     </td>
                     <td>
                        <p>The caller must be authorized to call <code>Magento_Customer::group</code>.</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>35</p>
                     </td>
                     <td>
                        <p>The <code>id</code> parameter is required on GET calls to <code>/V1/customers/me/billingAddress</code>.</p>
                     </td>
                  </tr>
               </table>
               <h2 id="validate-webapi">webapi.xsd XML schema file</h2>
               <p>Your <code>webapi.xml</code> must be validated by an <code>app/code/_Vendor_/Webapi/etc/webapi.xsd</code>.For comparision see Customer's, <a href="{{ site.mage2000url }}app/code/Magento/Webapi/etc/webapi.xsd" target="_blank">webapi.xsd</a>.</p>
               <p>Your module can use <code>webapi.xsd</code> or you can create a customized validation.</p>
               <p>Sample:</p>
               <script src="https://github.corp.ebay.com/gist/difleming/b2b1aafbfbd9f54f3179.js"></script>
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


