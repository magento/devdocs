---
layout: howtom2devgde_chapters
title: How a Client Uses a Service
---

<h1 id="how-client-uses-svc">How a Client Uses a Service</h1>

<p><a href="https://github.com/magento/devdocs/blob/master/guides/m2devgde/v1.0.0.0/svc-how-to-use.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

Before interacting with a service, you must be familiar with the service interface, including input/output data structures defined by the corresponding schema. Services are defined by PHP interfaces, so developers can simply acquire an instance of the service and invoke the appropriate method directly. You can also access services using REST and SOAP calls.

## Method 1: Dependency Injection

To directly invoke a service using its PHP interface, use dependency injection. To do this, simply define a constructor dependency on the service you need. From there, you can use the instance to directly invoke methods on the interface.

Because a service call typically accepts one or more primitive types (or [service data objects]({{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/build-svc.html#about-service-data-objects)), you might have to convert or extract before calling the service. For an example, see `public function getInputData` in <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Webapi/Controller/ServiceArgsSerializer.php" target="_blank">this Web API class</a>.

For example, if you know a customer's ID and want to get data about the customer, here's what you do:

1. Search the <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">customer account service interface</a> for the getCustomer method `(public function getCustomer($customerId);)`

2. 	Notice in the comment `@return \Magento\Customer\Service\V1\Data\Customer`.

3. Get the details about the response from the <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Customer/Service/V1/Data/Customer.php" target="_blank">data object</a>.

Service methods complete in one of two ways:

 *  Return a response, which can be:

    Null if no data is returned
	
    Array
	
    Primitive type (such as an ID)
	
    [Service data object]({{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/build-svc.html#about-service-data-objects). A service data object holds only primitives or other service data objects and so on. In this case, it is up to the client to use the data returned in whatever way is appropriate.
 
 *  Throw an exception

    An exception should be handled according to logic associated with the method invocation and the error received. Most of the time, the client logs only the details of the root exception and reports the error to the user in an appropriate way.

## Method 2: Web Services

Any service that has an `app/code/[Vendor]/[Module]/etc/webapi.xml` can be accessed using REST and SOAP. (Additional tasks, not discussed here, are required to access services using SOAP.)

To set up a service so it can be accessed using REST, see [What is the Web API Framework?]({{ site.baseurl }}/guides/m2devgde/v1.0.0.0/webapi/what-is-webapi.html)

#### Related Topics:

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/what-is-svc.html">What is the Magento 2 Service Framework?</a>

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/build-svc.html">Basics of Building a Service</a>