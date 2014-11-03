---
layout: howtom2devgde_chapters
title: Interacting With Services
---
 
# Interacting With Services

<p><a href="{{ site.githuburl }}guides/v1.0/extension-dev-guide/svcs-framework/svcs-props.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

A service interface is a *single entry point* to the business logic encapsulated by the service. Therefore, overriding business login in an interface is much easier than in Magento 1.x.

For example, interfaces of the Customer <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1" target="_blank">module</a> has more than 20 public methods. To override Customer business logic, override methods on the interface. It's much simpler than before. For details, see <a href="{{ site.gdeurl }}extension-dev-guide/svcs-framework/compare_mage1_mage2.html">Services Use Case: Magento 1 and Magento 2 Side-By-Side</a>.

## Service Design

A service is a set of PHP interfaces, data types for holding data to be passed across the service layer, and implementations of those interfaces. 

The interfaces and methods should be use-case-oriented. That is, a service's methods should provide logical business operations such as:

*	Create an order
*	Add items to a shopping cart
*	Create a new customer account
*	Compute shipping costs

Because services can also be easily exposed as REST or SOAP, you can use a single API call to provide and return a rich data structure (rather than requiring many smaller calls with simpler, shallower APIs). This way, a single web service request and response completes an entire operation. The goal also is for a single call to be stateless and atomic, simplifying application design.

The REST API accepts and returns JSON or XML; the SOAP API accepts and returns XML. Because the data has to be serialized and deserialized, we place restrictions on the data types that can be used. These are referred to as <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/Customer.php">service data objects</a> and they are immutable.

Service data objects inherit from the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Service/Data" target="_blank">Magento framework's base service data objects classes</a>.

<a href="#" target="_blank">More detail</a>

## Service Properties

Properties of a useful service:

*	Simple data structures

	The inputs and outputs of every service interface are simple value objects.

* 	Data structures used for transferring data to the service shouldn't contain any complex logic.

*  	Stateless

	Each service method must also be independent and <a href="http://en.wikipedia.org/wiki/Stateless_protocol">stateless</a>, meaning that a service should not maintain any session information between requests. However, a service *can* persist other information between requests, such as the entities that are being created as a result of the request.

*  	Versioned

	Services also need to be versioned to support graceful evolution of the interface and to prevent conflicts with other modules and applications that might require a different version of the same service.

## Understanding Service Responsibilities

A service is responsible for:

*  	Validating input

*  	Loading the models that are required to implement the business logic based on the inputs

*  	Invoking any instance-specific authorization logic (which might be implemented in the model)

* 	Invoking the requested business logic on the models

*  	Constructing the response

	Business logic should be implemented by a model whenever possible. The circumstance in which a service class should enforce business rules is when the business logic is split among multiple models and doesn't make sense to put in any one model.

A service is _not_ responsible for:

*  	Formatting data for the user

	Formatting data is the responsibility of service data objects.

*  	Operation-level authorization logic (that is, determining the Magento resources to which the caller needs authenticated access)

	Authorization is performed in the Web API framework based on the caller's role and the minimum resource permissions needed by the exposed API 
	
	The caller's role is established (by the token or session OD) in the Web API framework
	
	Resources are specified in the module's `webapi.xml`
	
	For more information about how this works, see <a href="{{ site.gdeurl }}get-started/rest/rest-overview.html">Accessing Magento Objects Using REST</a>

#### Related Topics

*	<a href="{{ site.gdeurl }}extension-dev-guide/svcs-framework/what-is-svc.html">What is the Magento 2 Service Framework?</a>

*	<a href="{{ site.gdeurl }}extension-dev-guide/svcs-framework/svc-how-to-use.html">How a Client Uses a Service</a>

*	<a href="{{ site.gdeurl }}extension-dev-guide/svcs-framework/build-svc.html">Basics of Building a Service</a>

*	<a href="{{ site.gdeurl }}get-started/webapi/what-is-webapi.html">What Is the Web API Framework?</a>