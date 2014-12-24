---
layout: default
group: extension-dev-guide
subgroup: How to
title: Configure services as web APIs
menu_title: Configure services as web APIs
menu_order: 4
github_link: extension-dev-guide/service-contracts/service-to-web-service.md
---

<h2 id="overview-web-service">Overview</h2>
<p>You can configure a Magento or third-party service as a web API.</p>
<p>To <a href="#configure-webapi">configure a web API</a>, you define XML elements and attributes in the <code>webapi.xml</code> XML configuration file for the module for the service.
   The <code>webapi.xml</code> file for your module specifies an XML schema file for validation.
   By default, this file is <code>app/code/&lt;VENDOR>/Webapi/etc/webapi.xsd</code>.
</p>
<p>Your module can use the default <code>webapi.xsd</code> file or you can create a customized XML schema file for validation.</p>
<p>Users can make REST or SOAP calls to access the web API.</p>
<p>To configure a web API, read these topics:</p>
<ul>
<li><p><a href="#configure-webapi">Configure a web API</a></p></li>
<li><p><a href="#configuration-options">webapi.xml configuration options</a></p></li>
<li><p><a href="#sample-webapi">Sample webapi.xml file</a></p></li>
<li><p><a href="#validate-webapi">webapi.xsd XML schema file</a></p></li>
</ul>
<h2 id="configure-webapi">Configure a web API</h2>
<p>To configure a web API for a service, you define XML elements and attributes in the
   <code>app/code/Magento/&lt;MODULE&gt;/etc/webapi.xml</code> file, where <code>&lt;MODULE&gt;</code> is the module name.
   For example, the web API for the Customer service is defined in the <code>app/code/Magento/Customer/etc/webapi.xml</code> configuration file.
</p>
<h2 id="configuration-options">webapi.xml configuration options</h2>
<p>To define web API components, set these attributes on these XML elements in the
   <code>webapi.xml</code> configuration file, as follows:
</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>XML&nbsp;element</th>
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
         <ul>
            <li>
               <p><code>xmlns:xsi</code>. Required. Defines the namespace for the XML schema instance.</p>
            </li>
            <li>
               <p><code>xsi:noNamespaceSchemaLocation</code>. Required. Defines the path and file name of the XML schema file to use to validate the web API.</p>
            </li>
         </ul>
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
         <ul>
            <li>
               <p><code>method</code>. Required. String. HTTP method. Valid values are GET, POST, PUT, and DELETE.</p>
            </li>
            <li>
               <p><code>url</code>. Required. String.
                  Magento resource. Optionally, one or more template parameters.
               </p>
            </li>
            <li>
               <p><code>secure</code>. Optional. Boolean. Indicates that the route is accessible over only HTTPS. Any attempts to access this route over non-secure causes an exception.</p>
            </li>
         </ul>
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
         <ul>
            <li>
               <p><code>class</code>. Required. String. Location and name of implemented interface.</p>
            </li>
            <li>
               <p><code>method</code>. Required. String. Web API method name.</p>
            </li>
         </ul>
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
         <ul><li>
               <p><code>ref</code>.
                  Required. Referenced resource. Valid values are <code>self</code>, <code>anonymous</code>, or a Magento resource, such as <code>Magento_Customer::group</code>.
               </p>
               <div class="bs-callout bs-callout-info" id="info"><p>The Magento web API framework enables guest users to access resources that are configured with <code>anonymous</code> permission.</p>
               <p>Any user that the framework cannot authenticate through existing <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication.html">authentication
                  mechanisms</a> is considered a guest user.
               </p></div>
            </li></ul>
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
         <ul><li>
               <p><code>name</code>. String. Parameter name.</p>
            </li><li>
               <p><code>force</code>. Boolean.</p>
            </li></ul>
      </td>
   </tr>
</table>

<h2 id="sample-webapi">Sample webapi.xml file</h2>
<p>This excerpt is from the <code>webapi.xml</code> file that defines the Customer service web API:</p>
<script src="https://github.corp.ebay.com/gist/difleming/2d55a6cbbaece7813618.js"></script>
<p>In this <code>webapi.xml</code> example:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Line</th>
      <th>Defines</th>
   </tr>
   <tr>
      <td>
         <p>3</p>
      </td>
      <td>
         <p>The XML schema file that is used to validate the XML.</p>
         <p>The XML schema file is <code>../../../../../app/code/Magento/Webapi/etc/webapi.xsd</code>.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>5</p>
      </td>
      <td>
         <p>The HTTP method and web resource through which to access the route.</p>

         <p>The HTTP method is GET.</p>
         <p>The resource is <code>/V1/customerGroups/:id</code>. Users must substitute a customer ID for the <code>id</code> template parameter.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>6</p>
      </td>
      <td>
         <p>The interface that the route implements and the name of the web API method.</p>

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

         <p>The caller must have access to <code>Magento_Customer::group</code> resource.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>18</p>
      </td>
      <td>
         <p>A required parameter.</p>

         <p>The <code>id</code> parameter is required on GET calls to <code>/V1/customers/me/billingAddress</code>.</p>
      </td>
   </tr>
</table>
<h2 id="validate-webapi">webapi.xsd XML schema file</h2>
<p>The <code>webapi.xml</code> file for your module must specify an XML schema file for validation. Your <code>webapi.xml</code> file can specify the default or a customized XML schema file.</p>
<p>The default <code>/Webapi/etc/webapi.xsd</code> XML schema file is:</p>

<script src="https://github.corp.ebay.com/gist/difleming/b2b1aafbfbd9f54f3179.js"></script>


