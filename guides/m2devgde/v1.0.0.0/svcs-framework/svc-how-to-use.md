---
layout: howtom2devgde_chapters
title: How a Client Uses a Service
---

<h1 id="how-client-uses-svc">How a Client Uses a Service</h1>

<p><a href="https://github.com/magento/devdocs/blob/master/guides/m2devgde/v1.0.0.0/svc-how-to-use.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}/common/images/newWindow.gif"/></p>

Before interacting with a service, you must be familiar with the service interface, including input/output data structures defined by the corresponding schema. Services are defined by PHP interfaces, so developers can simply acquire an instance of the service and invoke the appropriate method directly. You can also use web services REST and SOAP calls.

## Method 1: Dependency Injection

To directly invoke a service using its PHP interface, use dependency injection. To do this, simply define a constructor dependency on the service you need. From there, you can use the instance to directly invoke methods on the interface.

Because a service call typically accepts one or more primitive types (or Service Data Objects), you might have to convert or extract before calling the service. For an example, see `public function getInputData` in <a href="https://github.scm.corp.ebay.com/magento2/magento2/blob/develop/app/code/Magento/Webapi/Controller/ServiceArgsSerializer.php" target="_blank">this Web API class</a>.

For example, if you know a customer's ID and want to get data about the customer, here's what you do:

1. Search the <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">customer account service interface</a> for the getCustomer method `(public function getCustomer($customerId);)`

2. 	Notice in the comment `@return \Magento\Customer\Service\V1\Data\Customer`.

3. Get the details about the response from the <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Customer/Service/V1/Data/Customer.php" target="_blank">data object</a>.

Service methods complete in one of two ways:

 *  Return a response, which can be:

    Null if no data is returned
	
    Array
	
    Primitive type (such as an ID)
	
    Service Data Object. A Service Data Object will hold only primitives or other Service Data Objects and so on. In this case, it is up to the client to use the data returned in whatever way is appropriate.
 
 *  Throw an exception

    An exception should be handled according to logic associated with the method invocation and the error received. Most of the time, the client logs only the details of the root exception and reports the error to the user in an appropriate way.

## Method 2: Web Services

_This section not done yet_

