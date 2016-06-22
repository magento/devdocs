---
layout: default
title: Service building basics
---

A _service interface_ is basically a contract between code that uses the service and an integration that implements the service. The service is PHP code&mdash;typically one or more interfaces, classes, and methods.

The code that uses a service should depend on the interface rather than on the service implementation. Doing so enables you to use a different implementation if needed.

## Terms Used

Terminology frequently used in this guide:

*	Module: The PHP code that defines your application's business logic. The module code must be in subdirectories of `<your Magento install dir>/app/code/<ModuleName>`.
*	Integration: Code that enables a third-party application to get authorized access to Magento resources using either SOAP or REST calls. The merchant who activates the integration (which might be a module or extension) must agree to allow the integration to access those resources.
*	Extension: A tested module that is marketed to other merchants on Magento Marketplace. 

One extension can contain multiple modules.

One module can expose zero or more services. (In other words, *module* is a more generic term than *service*. A module doesn't have to expose a service at all.)

## About the Service Interface

Some important characteristics of a service interface:

*	The methods must be annotated to describe the types of input that are used to generate contracts for the Web API framework.

	Input arguments can be scalar types, arrays or objects. If objects are used, they should be implemented as [service data objects](#about-service-data-objects).

*	The methods must be annotated to describe the types of the output that are used to generate contracts for Web API framework.

	Output arguments must be scalar types, arrays or service data objects. Objects should be implemented as [service data objects](#about-service-data-objects).

*	Every interface should be versioned and numbered like V1, V2, and so on.

*	The namespace should use the version number as a suffix. (For example, `Magento\Customer\Service\V1`).

*	You *cannot* use aliases in services interfaces or in service data objects because doing so causes WSDL generation to fail.

To see an example of a Customer service interface, see <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php</a>.

## Exposing a Service as a REST or SOAP API

To expose a service as a REST or SOAP API, you must:

1.	Create a `<your Magento install dir>/app/code/<ModuleName>/etc/webapi.xml` that defines a route URL, HTTP methods supported, and the Magento resources the method must access.

	Sample:

	```php
	<route url="/V1/customerAccounts/isEmailAvailable" method="PUT">
        <service class="Magento\Customer\Service\V1\CustomerAccountServiceInterface" method="isEmailAvailable"/>
        <resources>
            <resource ref="Magento_Customer::manage"/>
        </resources>
    </route>
	```

	(<a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">Source</a>)

2.	Create a service data object that defines any data required to pass between the service and its clients. See the next section.

## About Service Data Objects

A _service data object_ carries data to and from service methods. Service data objects differ from _business objects_ or _data access objects_ in that a service data object stores and retrieves only its own data.

Service data objects define the interface that can be used by PHP clients to understand what data is available from the service. The service data object carries data from the service's response to PHP clients and, in the same way, PHP clients use service data objects to pass data to the service or to exchange data with other clients.

Service data objects are:

*	Simple objects that should not contain any business logic (in other words, service data objects contain no code that requires testing).

*	Immutable; they have only getters and no business logic.

*	Constructed using a data object builder. Data is set on the service data objects by the service or by client code.

	If data is set in client code, service data objects can be returned to the client to use the data or the data can be passed to the service to consume the data.

*	Located in a namespace that reflects the version of service data (same as the service itself). For example, `Magento\Customer\Service\V1\Data`

### Implementing a Service Data Object

General rules for implementing a service data object:

*	The service data object class must reside in the `[module namespace]\Service\Data\V[xx]` namespace.
*	A service data object must have getters that clearly describe all data that the data object can contain.
*	Annotations in the code must clearly describe the parameters and outputs of all methods.
*	Getters should rely on the `_get` method provided for convenience in the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Service/Data/AbstractObject.php" target="_blank">`\Magento\Framework\Service\Data\AbstractObject`</a> class.
*	A service data object should extend <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Service/Data/AbstractObjectBuilder.php" target="_blank">`\Magento\Framework\Service\Data\AbstractObjectBuilder`</a> or any of its children.
*	Setters should rely on the `_set` method provided for convenience in the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Service/Data/AbstractObjectBuilder.php" target="_blank">`\Magento\Framework\Service\Data\AbstractObjectBuilder`</a> class.

### Sample Service Data Object

Here is a sample service data object:

<script src="https://gist.github.com/xcomSteveJohnson/6193ba94d58b7ee3b7c7.js"></script>

### Sample Data Object Builder

Here is a sample data object builder on which the preceding service data object is constructed:

<script src="https://gist.github.com/xcomSteveJohnson/f7ccaf017ea745b895ec.js"></script>

Note the following:

*	A data object builder should be used to construct the service data object.

*	Setters should rely on the method `_set` provided for convenience in the `\Magento\Framework\Service\Data\AbstractObjectBuilder` class.

#### Related topics:

*	<a href="{{page.baseurl}}extension-dev-guide/service-contracts/service-contracts.html">Service contracts</a>

<!--
*	<a href="{{page.baseurl}}extension-dev-guide/service-contracts/add-later/service-how-to-use.html">How a Client Uses a Service</a>

*	<a href="{{page.baseurl}}extension-dev-guide/service-contracts/add-later/svcs-props.html">Service design</a>

*	<a href="{{page.baseurl}}extension-dev-guide/service-contracts/add-later/what-is-webapi.html">What Is the Web API Framework?</a>

*	<a href="{{page.baseurl}}config-guide/integration/cg-authorization.html">Authorizing Web API Requests</a>
 -->
