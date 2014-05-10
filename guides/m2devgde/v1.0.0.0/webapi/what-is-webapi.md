---
layout: howtom2devgde_chapters
title: What Is the Web API Framework?
---

<h1 id="webapi-whatis">What Is the Web API Framework?</h1>

<p><a href="https://github.com/magento/devdocs/blob/master/guides/m2devgde/v1.0.0.0/webapi/what-is-webapi.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}/common/images/newWindow.gif"/></p>

The Web API Framework gives third-party developers access to the service framework using REST or SOAP calls. Currently, Web API access is limited to Customer objects but we plan to expand access in time to include any Magento object.

Although REST and SOAP use different payloads and routing, they use the same authorization mechanisms to provide access to Magento services.

## Exposing a Service Using REST or SOAP

A Magento service can be exposed using REST only or using both SOAP and REST. In other words, you cannot expose a service using SOAP without exposing it using REST. 

### Configuring webapi.xml

To start, you must configure your service using `app/code/_Vendor_/_Module_/etc/webapi.xml`. Each REST API call must have a corresponding `<rest route>` in `webapi.xml`. In other words, to access a method using REST, the method must have a `<rest route>` in `webapi.xml`; otherwise, the method cannot be accessed.

If a REST route is sensitive and is expected to be executed over HTTPS only, the method must use the `secure = true` attribute. Attempting to access a `secure` route using non-secure means results in an exception.

### Sample webapi.xml

A sample `webapi.xml` follows:

<script src="https://gist.github.com/xcomSteveJohnson/3d01cdea721b623b5264.js"></script>

In this `webapi.xml`:

*   The first route is accessible only by secure HTTP POST calls `/V1/customers/me`

*   The first route calls the `getCustomer` method of <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CustomerAccountServiceInterface</a>

* 	`<resource ref>` means that the caller must be authorized to call `Magento_Customer::customer_self`

*	The parameter `id` is required

*	The second route is accessible only using HTTP GET calls to `/V1/customer/:id`, where :id is the id of the customer you wish to retrieve

*	This second route also calls the 'getCustomer' method of <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">CustomerAccountServiceInterface</a>

*	The caller must be authorized to call `Magento_Customer::read` 

For comparison, the Customer module's `webapi.xml` can be found <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Customer/etc/webapi.xml" target="_blank">here</a>.

### Sample webapi.xsd

Your `webapi.xml` must be validated by an `app/code/_Vendor_/Webapi/etc/webapi.xsd`. For reference, <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Webapi/etc/webapi.xsd" target="_blank">here</a> is the `webapi.xsd` for the Customer module.

Your module can use this one or you can create a customized validation.

#### Related Topics:

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/webapi/webapi-basic-auth.html">Authorizing Web API Requests</a>

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/what-is-svc.html">What is the Magento 2 Service Framework?</a>

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/rest/rest-overview.html">Accessing Magento Objects Using REST</a>

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/svc-how-to-use.html">How a Client Uses a Service</a>

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/svcs-props.html">Understanding the Properties and Responsibilities of a Service</a>