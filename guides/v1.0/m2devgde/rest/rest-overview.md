---
layout: howtom2devgde_chapters
title: Accessing Magento Objects Using REST
---

# Accessing Magento Objects Using REST

<p><a href="{{ site.githuburl }}guides/v1.0/m2devgde/rest/rest-overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="svcs_rest_rest-call">Basics of Making a REST Call</h2>

All service REST calls are specified by the service's `app/code/[Vendor]/[Module]/etc/webapi.xml`. Inputs and return values are defined in the respective service data objects and builders.

This topic discusses generally how to make a REST call; for step-by-step details, see <a href="{{ site.baseurl }}guides/v1.0/m2devgde/rest/rest-ff-rest-client.html">How-To&mdash;Using the Firefox REST Client to Create a Customer</a>.

To make a REST call for the Customer service:

<div id="accordion">
<h3>Step 1: Look up the call in webapi.xml</h3>
<div><p>This section discusses how to make an HTTP POST call to create a customer using the <tt>createCustomer()</tt> method.</p>
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
<p>The <tt>route url</tt> specifies the URI of the REST call. (Step 4 shows the entire URL.)</p>
<p>In this example, the URI is <tt>POST /V1/customerAccounts</tt></p>
<p><strong>Note</strong>: Any value prefixed by a colon character is a required input.</p>
<p><strong>Note</strong>: Some REST calls have no route; for these, use the Base URL only.</p>
</div>

<h3>Step 2: Find the service data object</h3>
<div>
<p>The service data object tells you what data to pass in to the REST API. The service data object is specified by the service interface method named by <tt>service class</tt> in <tt>webapi.xml</tt>.</p>
<p>Continuing the preceding example, the <tt>createCustomer()</tt> method on the <tt>\Magento\Customer\Service\V1\CustomerAccountServiceInterface</tt> specifies the data service object as follows:</p>
<script src="https://gist.github.com/xcomSteveJohnson/9775420.js"></script>
<p>In this case, the data service object is <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/CustomerDetails.php" target="_blank">\Magento\Customer\Service\V1\Data\CustomerDetails</a>.</p>
<p><strong>Note</strong>: To use <tt>CustomerDetails</tt> as a JSON or XML parameter in the POST call payload, you must specify it as follows: <tt>customer_details</tt>. In other words, the parameter name is all lowercase with camel case strings separated by an underscore character. To use it as JSON input, <tt>customer_details</tt> must specify a <a href="http://www.json.com/" target="_blank">JSON</a> object.</p>
</div>

<h3>Step 3: Find getters on service data objects</h3>
<div>
<p>Getters on service data objects enable you to find what data is required to execute the action. Use them as follows:</p>
<ol><li>Find all the getters on the service data object and determine from the <tt>@return</tt> comments to which other service data objects they refer.</li>
<li>Locate those service data objects and getters on those objects.</li>
<li>Comments in the getters specify the data type for each object.</li></ol>
</div>

<h3>Step 4: Execute the REST call</h3>
<div>
<p>Now that you have the URL and the data, you can execute your REST call as follows:</p>
<ol><li>Create the REST URL as follows:
<ul><li>Start with <tt>https://[your Magento host or IP]/[your Magento base install dir]/rest/default</tt></li>
<li>Append the REST URI you found in step 1.</li></ul>
</li>
<li>Pass an <a href="http://tools.ietf.org/html/rfc5849#section-3.4" target="_blank">OAuth 1.0a Authorization</a> header using <a href="http://tools.ietf.org/html/rfc5849#section-4.1" target="_blank">RSA-SHA1 encryption</a>.</li>
<li>Pass a <tt>Content-Type: application/json</tt> header.</tt></li>
<li>Pass JSON or XML containing the data.</li></ol>
<p>For a step-by-step example, see <a href="{{ site.baseurl }}guides/v1.0/m2devgde/rest/rest-ff-rest-client.html">How-To&mdash;Using the Firefox REST Client to Create a Customer</a>.</p>
</div>
</div>


#### Related Topics:

*	<a href="{{ site.baseurl }}guides/v1.0/m2devgde/rest/rest-ff-rest-client.html">How-To&mdash;Using the Firefox REST Client to Create a Customer</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2devgde/svcs-framework/what-is-svc.html">What is the Magento 2 Service Framework?</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2devgde/svcs-framework/svc-how-to-use.html">How a Client Uses a Service</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2devgde/svcs-framework/build-svc.html">Basics of Building a Service</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2devgde/webapi/what-is-webapi.html">What Is the Web API Framework?</a>