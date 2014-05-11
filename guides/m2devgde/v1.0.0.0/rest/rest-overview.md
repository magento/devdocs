---
layout: howtom2devgde_chapters
title: Accessing Magento Objects Using REST
---

<h1 id="what-is">Accessing Magento Objects Using REST</h1>

<p><a href="https://github.com/magento/devdocs/blob/master/guides/m2devgde/v1.0.0.0/rest/rest-overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}/common/images/newWindow.gif"/></p>

<h2 id="rest-call">How to Make a REST Call</h2>

All REST calls for the Customer service are contained in ~webapi.xml~; however, inputs and return values are defined in their respective interfaces.

To make a REST call for the Customer service:

<h3 id="rest-call-step1">Step 1: Look up the call in webapi.xml:</h3>

This section discusses how to make an HTTP GET call to the getCustomer method.

1.	Open `webapi.xml`.

2.	Find the desired call; for example, 

<code>
<route url="/V1/customerAccounts/:customerId/customer" method="GET">
<service class="Magento\Customer\Service\V1\CustomerAccountServiceInterface" method="getCustomer" />
</code>
	
3.	The route url specifies the URL of the REST call.

In this example, `GET /V1/customerAccounts/:customerId/customer`

*Note*: Any value prefixed by a colon character is a required input. In the preceding example, `:customerId` indicates you must provide the customer ID.

*Note*: Some REST calls have no route; for these cases, use the Base URL only.

<h3 id="rest-call-step2">Step 2: Find the response object</h3>

The return object is specified in the class named by the service class definition from `webapi.xml`.

Continuing the preceding example, the `Magento\Customer\Service\V1\CustomerAccountServiceInterface\getCustomer` method specifies the return object as follows:

<script src="https://gist.github.com/xcomSteveJohnson/9775420.js"></script>

In this case, the return object is Customer.php.

#### Related Topics:

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/what-is-svc.html">What is the Magento 2 Service Framework?</a>

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/svc-how-to-use.html">How a Client Uses a Service</a>

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/build-svc.html">Basics of Building a Service</a>

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/webapi/what-is-webapi.html">What Is the Web API Framework?</a>