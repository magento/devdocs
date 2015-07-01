---
layout: default
group: arch-guide
subgroup: Architecture
title: Architecture layers
menu_title: Architecture layers
menu_order: 3
github_link: architecture/archi_perspectives/arch_layers.md
---


<h2>Magento Framework</h2>
The Magento Framework controls how application components interact, including request flow, routing, indexing, caching, and exception handling. It provides services that reduce the effort of creating modules that contain business logic, contributing to the goal of both making Magento code more modular as well as decreasing dependencies. 

This primarily PHP software component is organized into logical groups called <i>libraries</i>, which all modules can call.  Most of the framework code sits under the domain layer or encloses the presentation, service, and domain layers. The framework contains no business logic.
(Although the Magento Framework does not contain resource models, it does contain a library of code to help implement a resource model.) 

<div class="bs-callout bs-callout-info" id="info">
  <p>Note: Don’t confuse the Magento framework with the Zend web application framework that ships with Magento.</p>
</div>

You should never modify Framework files, although if you are extending Magento, you must know how to call Framework libraries. Modules you create will typically inherit from classes and interfaces defined in the Framework directories.  

<h3>Magento Framework responsibilities</h3>
The Magento framework provides libraries that help reduce the effort of creating modules that contain business logic.
The framework is responsible for operations that are useful for potentially all modules, including: 

* handling HTTP protocols
* interacting with the database and filesystem
* rendering content

<h3>Magento Framework organization</h3>
Here is the Magento framework folder structure:

```
Lib/
 ../Internal
    ../Magento
      ../Framework
 ```

* `/lib/internal` contains some non-PHP as well as PHP components. non-PHP framework libraries includes JavaScript, LESS/CSS.

* `/lib/internal/magento/framework`  contains only PHP code. These are libraries of code plus the application entry point that routes requests to modules (that in turn call the framework libraries). Sample libraries in the framework help implement a resource model (base classes and interfaces to inherit from) but not the resource models themselves. some of which is designed to support CSS rendering

* `/lib/web` contains JavaScript and CSS/LESS files.



<h2> Presentation layer</h2>


<h3>How Presentation code calls other layers</h3>
Presentation code typically calls service contracts, particularly for a store front. However, presentation code is occasionally dependent on a specific implementation that requires the presentation code to directly call the business logic layer. For example, the Admin UI screens are often tightly linked a specific implementation and are not generic across implementations.

<h2>Service layer</h2>
The service layer provides a bridge between the presentation layer and the model layer of domain logic and resource-specific data. This is implemented using *service contracts*, which are defined using PHP interfaces.

In general, the service layer 

* Resides below the presentation layer and above the domain layer.

* Contains service contracts, which define how the implementation will behave.  

* Provides an easy way to access the REST/SOAP API framework code (which also resides above the service contracts). You can bind service contracts to web service APIs in configuration files -- no coding required.


* Provides a stable API for other modules to call into.





<h3>Who accesses the service layer?</h3>

All calls from web service interfaces, or users working with your storefront (that is, controller-initiated requests), are typically routed through the service layer. We strongly encourage the use of service contracts to call business logic. 

External applications can make requests for business logic with simple SOAP and REST calls. With some simple XML or JSON, you can expose the service layer’s PHP API and make it accessible to REST or SOAP web services. Once implemented, a web service can make a single API call and return an information-rich data structure.

Service contract clients include:

* Controllers (initiated by actions of users of the storefront)
* Web services (SOAP and REST API calls)
* Other Magento modules through service contracts

<h3>Service contract anatomy</h3>

The service contract of a module is defined by the set of interfaces in the module's `/Api`. It typically consists of: 

* service interfaces in the `/Api` namespace of the module



* data (or *entity*) interfaces in the `Api/Data` directory. *Data entities* are data structures passed to and returned from service interfaces.


Typically, service contracts provide three distinct types of interfaces: 

* Repository interfaces
* Management interfaces
* Metadata interfaces

However, there is no requirement that service contracts conform to all three patterns. 

<h3>Advantages of service contracts</h3>
Service contracts permit you to add a new customer extension that adds or changes business logic-level resource models and models without breaking the system. How? Through the use of the &lt;preference&gt; element of a dependency injection config file (`di.xml`) file. The `di.xml` file specifies which PHP class to use for the interface `Magento\Customer\Api\CustomerRepositoryInterface`. 

Another module can change this interface file by specifying a different class name. However, if the client code uses the interface definition only, no class change is necessary.

<h3>Related topics </h3>
Service contracts


<h2>Domain layer</h2>
The domain layer holds the business logic layer of a Magento module. It typically does not contain resource-specific or database-specific information. Its primary functions include:

* Defines the generic Magento data objects, or models, that contain business logic. This logic defines which operations can be performed on particular types of data, such as a Customer object. These models contain generic information only. Applications can also use SOAP or RESTful endpoints to request data from models. 

* (Optionally) Includes the implementation of service contracts, although not their definition.

Best practice: Use service contracts to communicate to the domain layer by passing data types through strongly typed objects. This practice can help you avoid the need to replace presentation layer code when replacing business layer logic. 



<h3>Models</h3>

Each domain-layer model contains a reference to a resource model, which it uses to retrieve data from the database with MySql calls.  This resource model contains logic for connecting to the underlying database, typically MySQL. A model requires a resource model only if the model data must persist. 

<h3>Who accesses the domain layer?</h3>
There are three primary ways of accessing a module's domain-layer code:

* Service contracts are the recommended way for one module to access another module's domain-level code. This loosely coupled solution is the optimal way for most modules to access another module. 

* A module can directly call into another module. This tightly coupled solution is not recommended for most situations, but is sometimes unavoidable.

* Domain layer code in one module can also plug itself into another module by: 

    * event hooks
    * plugins
    * `di.xml` files (with an SPI contract) 
    
Your strategy for calling another module's domain-layer code is highly dependent upon the unique configuration and needs of your system. 
  


<h2 id="persistence">Persistence layer</h2>


Magento uses an active record pattern strategy for persistence. In this system, the model object contains a *resource model* that maps an object to one or more database rows. A resource model is responsible for performing functions such as:

* Executing all CRUD (create, read, update, delete) requests. The resource model contains the SQL code for completing these requests.

* Performing additional business logic. For example, a resource model could perform data validation, start processes before or after data is saved, or perform other database operations.


If you expect to return multiple items from a database query, then you would implement a special type of resource model known as a *collection*. A collection is a class that loads multiple models into an array-like structure based on a set of rules. This is similar to a SQL `WHERE` clause.

A simple resource model defines and interacts with a single table. However, some objects have a vast number of attributes, or they could have a set related objects that have varying numbers of attributes. In these cases, the objects are constructed using Entity-Attribute-Value (EAV) models. As a result, any model that uses an EAV resource has its attributes spread out over a number of MySQL tables. The `Customer` and `Catalog` resource models use EAV attributes.  

<h2 id="related">Related topics</h2>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>


 
