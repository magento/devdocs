---
layout: default
title: Use REST to access Magento objects
---

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


#### Related Topics:

*	<a href="{{ site.gdeurl }}get-started/rest/rest-ff-rest-client.html">How-To&mdash;Using the Firefox REST Client to Create a Customer</a>
*	<a href="{{ site.gdeurl }}extension-dev-guide/services/what-is-svc.html">Service contracts</a>
*	<a href="{{ site.gdeurl }}extension-dev-guide/services/svc-how-to-use.html">How a Client Uses a Service</a>
*	<a href="{{ site.gdeurl }}extension-dev-guide/services/build-svc.html">How to build a service</a>
*	<a href="{{ site.gdeurl }}get-started/webapi/what-is-webapi.html">What Is the Web API Framework?</a>
