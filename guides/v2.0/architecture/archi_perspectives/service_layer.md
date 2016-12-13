---
layout: default
group: arch-guide
subgroup: Architectural Layers
title: Service layer
menu_title: Service layer
menu_order: 2
version: 2.0
github_link: architecture/archi_perspectives/service_layer.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/service_layer.html
---

## What is a Service layer?

The service layer provides a bridge between the presentation layer and the model layer of domain logic and resource-specific data. This is implemented using *service contracts*, which are defined using PHP interfaces.

In general, the service layer:

* Resides below the presentation layer and above the domain layer.

* Contains service contracts, which define how the implementation will behave.

* Provides an easy way to access the REST/SOAP API framework code (which also resides above the service contracts). You can bind service contracts to web service APIs in configuration files --- no coding required.

* Provides a stable API for other modules to call into.

## Who accesses the service layer?

All calls from web service interfaces, or users working with your storefront (that is, controller-initiated requests), are typically routed through the service layer. We strongly encourage the use of service contracts to call business logic.

External applications can make requests for business logic with simple SOAP and REST calls. With some simple XML or JSON, you can expose the service layer’s PHP API and make it accessible to REST or SOAP web services. Once implemented, a web service can make a single API call and return an information-rich data structure.

Service contract clients include:

* Controllers (initiated by actions of users of the storefront)

* Web services (SOAP and REST API calls)

* Other Magento modules through service contracts

## Service contract anatomy

The service contract of a module is defined by the set of interfaces in the module's `/Api`. It typically consists of:

* service interfaces in the `/Api` namespace of the module

* data (or *entity*) interfaces in the `Api/Data` directory. *Data entities* are data structures passed to and returned from service interfaces.

Typically, service contracts provide three distinct types of interfaces:

* Repository interfaces

* Management interfaces

* Metadata interfaces

However, there is no requirement that service contracts conform to all three patterns.

## Advantages of service contracts

Service contracts permit you to add a new customer extension that adds or changes business logic-level resource models and models without breaking the system. How? Through the use of the *&lt;preference&gt;* element of a dependency injection config file (`di.xml`) file. The `di.xml` file specifies which PHP class to use for the interface `Magento\Customer\Api\CustomerRepositoryInterface`.

Another module can change this interface file by specifying a different class name. However, if the client code uses the interface definition only, no class change is necessary.

## Related topics {#related}

<a href="{{page.baseurl}}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>

<a href="{{page.baseurl}}architecture/archi_perspectives/ALayers_intro.html">Architectural layers overview</a>
