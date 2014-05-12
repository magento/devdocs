---
layout: howtom2devgde_chapters
title: Understanding the Properties and Responsibilities of a Service
---

<h1 id="what-is">Understanding the Properties and Responsibilities of a Service</h1>

Help us improve this page 

Although services are abstractions of business logic, not every such abstraction is a service. Following are examples of properties of a useful service:

* Simple data structures

	The inputs and outputs of every service interface are simple value objects.

*  Data structures used for transferring data to the service shouldn't contain any complex logic.

*  Stateless

	Every service method must be independent and stateless, meaning that the inputs define the behavior of the request, not data that is saved on the service instance from a previous request. To clarify, services can use persistent data; service class members cannot change from one request to another.

*  Versioned

	Services also need to be versioned to support graceful evolution of the interface and to prevent conflicts with other modules and applications that might require a different version of the same service.

<h2 id="svc-components">Components of a Service</h2>

A service is comprised of:

*  An interface that defines the service

*  A class that implements the interface

	The class has logic that fulfills the contract of the interface. The service class typically delegates much of this responsibility to other components, like Models and Helpers, to do the work, making the service class relatively "thin".

<h2 id="svc-web-svc">How Services Relate to Web Services</h2>

Magento 2 services are analogous to, but not synonymous with, web services. You can expose Magento 2 services as web services using the Web API Framework by managing routing specifics. The framework itself handles authentication and authorization, as well as handling serialization and deserialization.

<h2 id="svc-resp">Understanding Service Responsibilities</h2>

Services are responsible for:

*  Validating input

*  Loading the models that are required to implement the business logic based on the inputs

*  Invoking any instance-specific authorization logic (which might be implemented in the model)

*  Invoking the requested business logic on the models

*  Constructing the response

	Business logic should be implemented by the model layer whenever possible. The circumstance in which a service class should enforce business rules is when the business logic is split among multiple Models and doesn't make sense to put in any one Model.

Services are _not_ responsible for:

*  Formatting data for the user

*  Operation-level authorization logic

#### Related Topics:

*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/what-is-svc.html">What is the Magento 2 Service Framework?</a>

*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/svc-how-to-use.html">How a Client Uses a Service</a>

*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/build-svc.html">Basics of Building a Service</a>

*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/webapi/what-is-webapi.html">What Is the Web API Framework?</a>