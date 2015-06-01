---
layout: default
group: arch-guide
subgroup: Architecture
title: Architecture layers
menu_title: Architecture layers
menu_order: 3
github_link: architecture/archi_perspectives/arch_layers.md
---
We will add information about the following layers in a future sprint:

* Presentation layer
* Service layer
* Domain layer

<!--<h2 id="presentation">Presentation layer</h2>



<h2 id="service">Service layer</h2>


<h2 id="domain">Domain layer</h2>

-->

<h2> Presentation layer</h2>


<h3>How Presentation code calls other layers</h3>
Presentation code typically calls service contracts, particularly for store front. However, presentation code is occasionally dependent on a specific implementation that requires the presentation code to directly call the business logic layer. For example, the Admin UI screens are often tightly linked a specific implementation and not generic across implementations.

<h2>Service layer</h2>
The Service layer is a set of PHP interfaces that provides the bridge between the presentation layer and the model layer of domain logic and resource data. This layer allows modules to provide a well-defined public API while hiding business logic. Each module provides a service contract that    

<b>Add diagram</b>

All calls from web service interfaces, or users working with the product interface (that is, controller-initiated requests), must be routed through through the Service layer.  Each module provides a <i>service contract</i> to pass requests to and from the presentation layers to the business logic layers. The service contract for a module resides in its /Api. 


External applications can make also requests for business logic with simple SOAP and REST calls. With some simple XML or JSON, you can expose the service layer’s PHP API and make it accessible to REST or SOAP web services. Once implemented, a web service can make a single API call and return an information-rich data structure. 

<h3>Who accesses the Service layer?</h3>
Service layer clients include:

* Controllers (initiated by actions of users of the product interface)
* Web services
* Other Magento modules

<h3>Service contracts</h3>

A module's service contract resides in the /Api namespace of the module.



<h2>Domain layer</h2>
The Domain layer identifies the part of the business logic layer of Magento that handles requests from the Service layer. It defines the generic Magento data objects, or models, that contain business logic. This logic defines which operations can be performed on particular types of data, such as a Customer object. Object models do not contain resource- or  database- specific information.

<b>Add diagram: service layer --- > DOMAIN layer --> resource models  —> database</b>

All calls to the Magento system typically use service contracts to communicate to the Domain layer. Service contracts pass data types to the Domain layer via strongly typed objects. Applications can also use SOAP or RESTful endpoints to request data from object models. 

<h3>Models</h3>

Each domain-layer object model contains a reference to a resource model, which it uses to retrieve data from the database with MySql calls.  This resource model contains logic for connecting to the underlying database, typically MySQL. A model requires a resource model only if the model data must persist. 

<h3>Who accesses the Domain layer?</h3>
Modules typically contact this layer through service contracts. However, Domain layer code in one module can also plug itself into another module by: 

* event hooks
* plugins
* di.xml files (with an SPI contract) 
  


<h2 id="persistence">Persistence layer</h2>


Magento uses an active record pattern strategy for persistence. In this system, the model object contains a *resource model* that maps an object to one or more database rows. A resource model is responsible for performing functions such as:

* Executing all CRUD (create, read, update, delete) requests. The resource model contains the SQL code for completing these requests.

* Performing additional business logic. For example, a resource model could perform data validation, start processes before or after data is saved, or perform other database operations.


If you expect to return multiple items from a database query, then you would implement a special type of resource model known as a *collection*. A collection is a class that loads multiple models into an array-like structure based on a set of rules. This is similar to a SQL `WHERE` clause.

A simple resource model defines and interacts with a single table. However, some objects have a vast number of attributes, or they could have a set related objects that have varying numbers of attributes. In these cases, the objects are constructed using Entity-Attribute-Value (EAV) models. As a result, any model that uses an EAV resource has its attributes spread out over a number of MySQL tables. The `Customer` and `Catalog` resource models use EAV attributes.  

<h2 id="related">Related topics</h2>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>


 