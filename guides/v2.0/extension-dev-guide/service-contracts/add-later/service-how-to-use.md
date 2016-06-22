---
layout: default
title: How a Client Uses a Service
---

Before interacting with a service, you must be familiar with the service interface, including input/output data structures defined by the corresponding schema. Services are defined by PHP interfaces, so you can simply acquire an instance of the service and invoke a method directly. You can also access services using REST and SOAP calls.

## Method 1: Dependency Injection

To directly invoke a service using its PHP interface, use dependency injection. To do this, simply define a constructor dependency on the service you need. From there, you can use the instance to directly invoke methods on the interface.

Because a service call typically accepts one or more primitive types or service data objects, you might have to convert or extract them before calling the service. For an example, see `public function getInputData` in <a href="{{ site.mage2000url }}app/code/Magento/Webapi/Controller/ServiceArgsSerializer.php" target="_blank">this Web API class</a>.

For example, if you know a customer's ID and want to get data about the customer, here's what you do:

1. 	Search the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">customer account service interface</a> for the getCustomer method `(public function getCustomer($customerId);)`

2. 	Notice in the comment `@return \Magento\Customer\Service\V1\Data\Customer`. This is the *service data object*.

3. 	Get the details about the response from the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/Customer.php" target="_blank">service data object</a>.

Service methods complete in one of two ways:

 *  Return a response, which can be:

    *	Null if no data is returned
	*	Array
	*	Primitive type (such as an ID)
	*	Service data object. A service data object holds only primitives or other service data objects and so on.

 *  Throw an exception

    An exception should be handled according to logic associated with the method invocation and the error received. Most of the time, the client logs only the details of the root exception and reports the error to the user in an appropriate way.

### References For Dependency Injection

*Dependency injection* is a technique used in object-oriented programming. When working with Magento software, dependency injection means you define a constructor dependency on the service you need. From there, you can use the instance you receive to invoke whatever methods you need directly. Because this concept might be new to PHP developers, we recommend the following references:

*	<a href="https://wiki.magento.com/display/MAGE2DOC/Using+Dependency+Injection" target="_blank">Magento dependency injection</a>
*	<a href="http://magento-quickies.alanstorm.com/post/66355728727/instantiating-and-injecting-helpers-in-magento-2" target="_blank">Instantiating and Injecting Helpers in Magento 2 by Alan Storm</a>
*	<a href="http://magento-quickies.alanstorm.com/post/68129858943/magento-2-injecting-interfaces" target="_blank">Magento 2: Injecting Interfaces by Alan Storm</a>
*	<a href="http://www.youtube.com/watch?v=RlfLCWKxHJ0" target="_blank">Video&mdash;The Clean Code Talks: Don't Look For Things!</a>
*	<a href="http://www.youtube.com/watch?v=-FRm3VPhseI" target="_blank">Video&mdash;The Clean Code Talks: Global State and Singletons</a>


## Method 2: Web Services

Any service that has an `app/code/[Vendor]/<ModuleName>/etc/webapi.xml` can be accessed using REST and SOAP. (Additional tasks, not discussed here, are required to access services using SOAP.)

<!-- To set up a service so it can be accessed using REST, see [What is the Web API Framework?]({{page.baseurl}}extension-dev-guide/service-contracts/add-later/what-is-webapi.html) -->

#### Related topics

*	<a href="{{page.baseurl}}extension-dev-guide/service-contracts/service-contracts.html">Service contracts</a>

