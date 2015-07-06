---
layout: default
group: get-started
subgroup: A_Concepts
title: Web API classes
menu_title: Web API classes
menu_order: 2


github_link: get-started/web-api-classes.md
---

<h2>Web API Classes</h2>

<h3>Common classes</h3>

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<body>
<tr>
<td>Magento\App\FrontControllerInterface</td>
<td>Allows REST and SOAP controllers to be used instead of the standard Magento front controller.</td>
</tr>
<tr>
<td>Magento\Framework\Oauth\OauthInterface</td>
<td>Entry point to the authentication subsystem.</td>
</tr>
<tr>
<td>Magento\Webapi\Controller\ErrorProcessor</td>
<td>Provides methods for exceptions, masking, and rendering in different formats, depending on the client capabilities.</td>
</tr>
<tr>
<td>Magento\Webapi\Controller\Response</td>
<td>Collects multiple error messages and sets the required MIME type.</td>
</tr>
<tr>
<td>Magento\Webapi\Model\Config</td>
<td>Contains generic functionality for accessing the information contained in <code>webapi.xml</code> configuration files.
</td>
</tr>
</body>
</table>


<h3>REST</h3>

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Magento\Webapi\Controller\Rest</td>
<td><p>Entry point to the REST APIs. The <code>dispatch()</code> method is responsible for processing all incoming requests:</p>
<ul>
<li><p>Authentication (is delegated to <code>Magento\Oauth\OauthInterface</code>)</p></li>
<li><p>Authorization (is delegated to Webapi authorization subsystem)</p></li>
<li><p>Routing (is delegated to <code>Magento\Webapi\Controller\Rest\Router</code>)</p></li>
<li><p>Request parsing (is delegated to <code>Magento\Webapi\Controller\Rest\Request\Deserializer</code>)</p></li>
<li><p>Invocation of necessary service method with provided arguments</p></li>
<li><p>Formatting response (is delegated to <code>Magento\Webapi\Controller\Rest\Response\Renderer</code>)</p></li>
</ul>

</td>
</tr>
<tr>
<td>Magento\Webapi\Controller\Rest\Request</td>
<td><p>Provides methods for requesting data.</p></td>
</tr>
<tr>
<td>Magento\Webapi\Controller\Rest\Response</td>
<td><p>Provides methods for returning a response.</p></td>
</tr>
<tr>
<td>Magento\Webapi\Controller\Rest\Router</td>
<td><p>Matches the current REST request to a concrete route, which has a 1:1 relation to a service method. <code>match()</code> is an entry point.</p></td>
</tr>
<tr>
<td>Magento\Webapi\Model\Rest\Request\Deserializer</td>
<td><p>The deserializer subsystem parses a request provided in XML or JSON format. <code>deserialize()</code> is an entry point to this subsystem.</p></td>
</tr>
<tr>
<td>Magento\Webapi\Model\Rest\Renderer</td>
<td><p>Formats request in XML or JSON. <code>render()</code> is an entry point to this subsystem.</p>
</td>
</tr>
<tr>
<td>Magento\Webapi\Model\Rest\Config</td>
<td><p>Provides access to information about REST routes defined in <code>webapi.xml</code> files.</p></td>
</tr>
</tbody>
</table>


<h3>SOAP</h3>

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Magento\Webapi\Controller\Soap</td>
<td><p>The entry point to the SOAP API. The <code>dispatch()</code> method is responsible for processing of two request types:</p>
<ul>
<li>
<p>Request for WSDL, e.g. <code>http://host.com/soap/default?wsdl&service=catalogProductV1</code>. Response is always generated in XML format: either valid WSDL document or error message</p></li>
<li><p>Service method invocation via SOAP operation. Data should be sent to URL like <code>http://host.com/soap/default?service=catalogProductV1</code>.</p>
<p>The response always contains a valid SOAP envelope that can be processed by SOAP clients. The envelope can contain data or SOAP fault.</p>
<p><code>Magento\Webapi\Model\Soap\Server</code> is used to process these requests.</p>
</li></ul>
</td>
</tr>
<tr>
<td>Magento\Webapi\Controller\Soap\Request</td>
<td><p>Required services and their versions must be specified in GET parameters during each request to SOAP API. The <code>getRequestedServices()</code> method allows to get list of requested services, which is used for WSDL generation.</p></td>
</tr>
<tr>
<td>Magento\Webapi\Controller\Soap\Request\Handler</td>
<td><p>Handles all SOAP requests using the  <code>__call()</code> method, which is responsible for:</p>
<ul><li><p>Client authentication</p></li>
<li><p>Finding the service method matching the requested SOAP operation. Most of this work is delegated to <code>Magento\Webapi\Model\Soap\Config</code></p></li>
<li><p>Authorization (is delegated to Webapi authorization subsystem)</p></li>
<li><p>Invocation of necessary service method with provided arguments</p></li></ul>
</td>
</tr>
<tr>
<td>Magento\Webapi\Model\Soap\Server</td>
<td><p>The wrapper for SoapServer (defined in the PHP SOAP extension). It is responsible for SOAP request processing:</p>
<ul>
<li><p>Parsing the SOAP envelope</p></li>
<li><p>Invoking of specified SOAP operation with arguments specified in envelope body. All calls fall back to <code>Magento\Webapi\Controller\Soap\Request\Handler::__call()</code>, which executes the necessary service method.</p></li>
<li><p>response formatting as valid SOAP envelope containing either the body or a fault.</p></li></ul>
</td>
</tr>
<tr>
<td>Magento\Webapi\Model\Soap\Fault</td>
<td><p>Runtime exception, which generates a valid SOAP envelope containing the fault with details, as per the SOAP 1.2 standard.</p>
</td>
</tr>
<tr>
<td>Magento\Webapi\Model\Soap\Wsdl</td>
<td><p>Primarily generates the WSDL document, which will contain a description of all services specified via GET parameters. The <code>generate()</code>  method is the entry point to this subsystem. The following data is used for WSDL generation:</p>
<ul>
<li><p><code>webapi.xml</code> configuration of requested services (<code>Magento\Webapi\Model\Soap\Config</code> gets the necessary information.)</p></li>
<li><p>Information about requested services interfaces and service data objects collected using reflection.</p></li></ul>
</td>
</tr>
<tr>
<td>Magento\Webapi\Model\Soap\Config</td>
<td><p>Provides access to information collected from <code>webapi.xml</code> configuration files, service payload schemas, and service interfaces reflection.</p></td>
</tr>
</tbody>
</table>


 - 

