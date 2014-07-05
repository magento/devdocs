---
layout: howtom2devgde_chapters
title: Accessing Magento Objects Using REST
---

<h1 id="what-is">Accessing Magento Objects Using REST</h1>

<p><a href="{{ site.githuburl }}guides/m2devgde/v1.0.0.0/rest/rest-overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="rest-call">How to Make a REST Call</h2>

All REST calls for the Customer service are contained in `webapi.xml`; however, inputs and return values are defined in their respective interfaces.

In the example that follows, we start with the Customer service <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">webapi.xml</a>.

To make a REST call for the Customer service:

<div id="accordion">
<h3>Step 1: Look up the call in webapi.xml:</h3>
<div><p>This section discusses how to make an HTTP GET call to the <tt>getCustomer()</tt> method.</p>
<ol><li>Open <tt>webapi.xml</tt>.</li>
<li><p>Find the desired call; for example,</p> 
<pre>
&lt;route url="/V1/customerAccounts/:customerId/customer" method="GET">
&lt;service class="Magento\Customer\Service\V1\CustomerAccountServiceInterface" method="getCustomer" />
</pre></li></ol>
<p>The <tt>route url</tt> specifies the URL of the REST call.</p>
<p>In this example, <tt>GET /V1/customerAccounts/:customerId/customer</tt></p>
<p><strong>Note</strong>: Any value prefixed by a colon character is a required input. In the preceding example, <tt>:customerId</tt> indicates you must pass in the customer ID.</p>
<p><strong>Note</strong>: Some REST calls have no route; for these cases, use the Base URL only.</p>
</div>

<h3>Step 2: Find the response object</h3>
<div>
<p>The return object is specified in the class named by the service class definition from <tt>webapi.xml</tt>.</p>
<p>Continuing the preceding example, the <tt>Magento\Customer\Service\V1\CustomerAccountServiceInterface\getCustomer</tt> method specifies the return object as follows:</p>
<script src="https://gist.github.com/xcomSteveJohnson/9775420.js"></script>
<p>In this case, the return object is <tt>Customer.php</tt>.</p>
</div>
</div>



#### Related Topics:

*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/what-is-svc.html">What is the Magento 2 Service Framework?</a>
*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/svc-how-to-use.html">How a Client Uses a Service</a>
*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/build-svc.html">Basics of Building a Service</a>
*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/webapi/what-is-webapi.html">What Is the Web API Framework?</a>