---
group: architecture-guide
subgroup: Architectural Layers
title: Service layer
menu_title: Service layer
menu_order: 2
---

## What is a Service layer?

The service layer provides a bridge between the presentation layer and the model layer of {% glossarytooltip 41aee03b-a5d5-49c2-8839-894090ef4e86 %}domain{% endglossarytooltip %} logic and resource-specific data.
This is implemented using *service contracts*, which are defined using {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} interfaces.

In general, the service layer:

* Resides below the presentation layer and above the domain layer.

* Contains service contracts, which define how the implementation will behave.

* Provides an easy way to access the REST/SOAP {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} framework code (which also resides above the service contracts).
You can bind service contracts to web service APIs in configuration files --- no coding required.

* Provides a stable API for other modules to call into.

## Who accesses the service layer?

All calls from web service interfaces, or users working with your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} (that is, controller-initiated requests), are typically routed through the service layer.
We strongly encourage the use of service contracts to call business logic.

External applications can make requests for business logic with simple SOAP and REST calls.
With some simple {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} or JSON, you can expose the service layer's PHP API and make it accessible to REST or SOAP web services.
Once implemented, a web service can make a single API call and return an information-rich data structure.

{% glossarytooltip cdf644c4-bc99-4550-a954-dd5ae165785a %}Service contract{% endglossarytooltip %} clients include:

* Controllers (initiated by actions of users of the storefront)

* Web services (SOAP and REST API calls)

* Other Magento modules through service contracts

## Service contract anatomy

The service contract of a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is defined by the set of interfaces in the module's `/Api` directory.

This directory contains:

* Service interfaces in the `/Api` {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{% endglossarytooltip %} of the module (e.g [Catalog API][catalog-api]).

* Data (or *entity*) interfaces in the `Api/Data` directory (e.g. [Catalog API/Data][catalog-api-data]).
  Data entities* are data structures passed to and returned from service interfaces.
  
  Files in the data directory contain `get()` and `set()` methods for entries in the entity table and extension attributes.

Typically, service contracts provide three distinct types of interfaces:

* Repository interfaces

* Management interfaces

* {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}Metadata{% endglossarytooltip %} interfaces

However, there is no requirement that service contracts conform to all three patterns.

## Advantages of service contracts

Service contracts allow you to add a new customer {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} that adds or changes business logic-level resource models without breaking the system.

This is done using the *&lt;preference&gt;* element in a custom module's {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration file (`di.xml`) file.

The `di.xml` file specifies which PHP class to use for the interface `Magento\Customer\Api\CustomerRepositoryInterface`.

Another module can change this interface file by specifying a different class name.
However, if the client code uses the interface definition only, no class change is necessary.

## Related topics {#related}

[Architectural diagrams]({{ page.baseurl }}/architecture/archi_perspectives/arch_diagrams.html)

[Architectural layers overview]({{ page.baseurl }}/architecture/archi_perspectives/ALayers_intro.html)

[catalog-api]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Api
[catalog-api-data]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Api/Data
