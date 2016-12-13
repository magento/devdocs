---
layout: default
group:
subgroup:
title: Architecture layers
menu_title: Architecture layers
menu_order:
version: 2.0
github_link: architecture/archi_perspectives/arch_layers.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/arch_layers.html
---

## Magento Framework

### Overview

The Magento Framework controls how application components interact, including request flow, routing, indexing, caching, and exception handling. It provides services that reduce the effort of creating modules that contain business logic, contributing to the goal of both making Magento code more modular as well as decreasing dependencies.

This primarily PHP software component is organized into logical groups called <i>libraries</i>, which all modules can call.  Most of the framework code sits under the domain layer or encloses the presentation, service, and domain layers. The framework contains no business logic.
(Although the Magento Framework does not contain resource models, it does contain a library of code to help implement a resource model.)

<div class="bs-callout bs-callout-info" id="info">
  <p>Don’t confuse the Magento framework with the Zend web application framework that ships with Magento.</p>
</div>

You should never modify the framework files, although if you are extending Magento, you must know how to call the framework libraries. Modules you create will typically inherit from classes and interfaces defined in the framework directories.  

### Functions

The Magento framework provides libraries that help reduce the effort of creating modules that contain business logic.

The framework is responsible for operations that are useful for potentially all modules, including:

* handling HTTP protocols

* interacting with the database and filesystem

* rendering content

### Organization

Here is the Magento framework folder structure:

<pre>
Lib/
    ../Internal
        ../Magento
            ../Framework
 </pre>

* `/lib/internal` contains some non-PHP as well as PHP components. Non-PHP framework libraries includes JavaScript and LESS/CSS.

* `/lib/internal/Magento/Framework`  contains only PHP code. These are libraries of code plus the application entry point that routes requests to modules (that in turn call the framework libraries). For example, libraries in the framework help implement a resource model (base classes and interfaces to inherit from) but not the resource models themselves. Certain libraries also support CSS rendering.

* `/lib/web` contains JavaScript and CSS/LESS files. These files reside  under `web` and not `internal` because they are accessible from a web browser, while the PHP code under `internal` is not. (Any code that a web browser must access should be under `web`, while everything else under `internal`.)

<div class="bs-callout bs-callout-info" id="info">
  <p>The <code>lib/internal/Magento/Framework</code> directory maps to the <code>Magento\Framework</code> namespace.</p>
</div>

### Highlights of the Magento Framework

The Magento Framework (`lib/internal/Magento/Framework/`) provides a robust range of functionality. If you are an extension developer, you may be interested in this subset of Framework namespaces.

<table>
   <tbody>
      <tr style="background-color: lightgray">
         <th>Namespace</th>
         <th>Purpose</th>

      </tr>
      <tr>
         <td><code>Magento\Framework\Object</code>
         </td>
         <td>Provides standard functionality for storing and retrieving data through magic methods. This is the base class for many Magento classes.</td>
      </tr><tr>
         <td><code>Magento\Framework\Object\Model</code>
         </td>
         <td>Contains base Model classes that almost all Magento Model classes extend from.</td>
      </tr><tr>
         <td><code>Magento\Framework\Object\AbstractModel</code>
         </td>
         <td></td>
      </tr>
      <tr>
         <td><code>Magento\Framework\Object\AbstractResource</code></td>
         <td></td>
      </tr>
      <tr>
         <td><code>Magento\Framework\Object\Controller</code></td>
         <td>Contains classes to help return different types of results (for example, JSON and redirects).</td>
      </tr>
      <tr>
         <td><code>Magento\Framework\Object\View</code></td>
         <td>Contains code to render pages and layouts.</td>
      </tr><tr>
         <td><code>Magento\Framework\Object\Data</code></td>
         <td>Contains additional classes that handle forms.</td>
      </tr><tr>
         <td><code>Magento\Framework\Object\URL</code></td>
         <td>Contains code to look up other pages in Magento.</td>
      </tr>
   </tbody>
</table>

Other namespaces under `Magento\Framework` that will interest extension developers:

<table>
    <tbody>
        <tr style="background-color: lightgray">
            <th>Namespace</th>
            <th>Purpose</th>
        </tr>
      <tr>
         <td><code>Magento\Framework\ObjectManager</code>
         </td>
         <td>Used to provide <i>dependency injection</i>. </td>
      </tr>
	  <tr>
         <td><code>Magento\Framework\App</code>
         </td>
         <td>Contains framework code that has knowledge about the Magento application. This code bootstraps the application and reads in the initial configuration. It also contains the entry point to the command line tools, the web application, and the cron job. And finally, it routes requests while providing the deployment context (such as reading in the configuration for the database configuration, languages, caching systems).
</td>
</tr>
<tr>
	<td>
		<code>Magento\Framework\Api</code>
	</td>
	<td>Contains base classes for advanced functionality of extendable objects through the system (that is, objects that can be extended to add new data through Magento Marketplace extensions).</td>
</tr>
<tr>
	<td>
		<code>Magento\Framework\Config</code>
	</td>
	<td>Contains the generic configuration reader. Each config file has its own specialized reader extending these classes.</td>
</tr>
<tr>
	<td>
		<code>Magento\Framework\Filesystem</code>
	</td>
	<td>Contains classes that handle reading from and writing to the file system.</td>
</tr>
	<tr>
		<td>
			<code>Magento\Framework\HTTP\PhpEnvironment</code>
		</td>
		<td/>
	</tr>
	<tr>
		<td>
			<code>Magento\Framework\Session</code>
		</td>
		<td/>
	</tr>
	<tr>
		<td>
			<code>Magento\Framework\Stdlib\Cookie</code>
		</td>
		<td>Code to handle the HTTP request/responses as well as session/cookies is found here.</td>
	</tr>
	<tr>
		<td>
			<code>Magento\Framework\Exception</code>
		</td>
		<td>Contains the basic exceptions that are thrown throughout the Magento codebase.</td>
	</tr>
	<tr>
		<td>
			<code>Magento\Framework\Event</code>
		</td>
		<td>Contains the code that publishes synchronous events and that handles observers for any Magento event is handled here.
		</td>
	</tr>
		<tr>
			<td>
				<code>Magento\Framework\Validator</code>
			</td>
			<td>Contains the code that validates data (currencies, not empty) and that handles observers for any Magento event.
			</td>
		</tr>
	</tbody>
</table>

## Presentation layer

### How Presentation code calls other layers

Presentation code typically calls service contracts, particularly for a store front. However, presentation code is occasionally dependent on a specific implementation that requires the presentation code to directly call the business logic layer. For example, the Admin UI screens are often tightly linked a specific implementation and are not generic across implementations.

## Service layer

The service layer provides a bridge between the presentation layer and the model layer of domain logic and resource-specific data. This is implemented using *service contracts*, which are defined using PHP interfaces.

In general, the service layer

* Resides below the presentation layer and above the domain layer.

* Contains service contracts, which define how the implementation will behave.

* Provides an easy way to access the REST/SOAP API framework code (which also resides above the service contracts). You can bind service contracts to web service APIs in configuration files -- no coding required.

* Provides a stable API for other modules to call into.

### Who accesses the service layer?

All calls from web service interfaces, or users working with your storefront (that is, controller-initiated requests), are typically routed through the service layer. We strongly encourage the use of service contracts to call business logic.

External applications can make requests for business logic with simple SOAP and REST calls. With some simple XML or JSON, you can expose the service layer’s PHP API and make it accessible to REST or SOAP web services. Once implemented, a web service can make a single API call and return an information-rich data structure.

Service contract clients include:

* Controllers (initiated by actions of users of the storefront)
* Web services (SOAP and REST API calls)
* Other Magento modules through service contracts

### Service contract anatomy

The service contract of a module is defined by the set of interfaces in the module's `/Api`. It typically consists of:

* service interfaces in the `/Api` namespace of the module

* data (or *entity*) interfaces in the `Api/Data` directory. *Data entities* are data structures passed to and returned from service interfaces.

Typically, service contracts provide three distinct types of interfaces:

* Repository interfaces

* Management interfaces

* Metadata interfaces

However, there is no requirement that service contracts conform to all three patterns.

### Advantages of service contracts

Service contracts permit you to add a new customer extension that adds or changes business logic-level resource models and models without breaking the system. How? Through the use of the &lt;preference&gt; element of a dependency injection config file (`di.xml`) file. The `di.xml` file specifies which PHP class to use for the interface `Magento\Customer\Api\CustomerRepositoryInterface`.

Another module can change this interface file by specifying a different class name. However, if the client code uses the interface definition only, no class change is necessary.

### Related topics

Service contracts

## Domain layer

The domain layer holds the business logic layer of a Magento module. It typically does not contain resource-specific or database-specific information. Its primary functions include:

* Defines the generic Magento data objects, or models, that contain business logic. This logic defines which operations can be performed on particular types of data, such as a Customer object. These models contain generic information only. Applications can also use SOAP or RESTful endpoints to request data from models.

* (Optionally) Includes the implementation of service contracts, although not their definition.

**Best practice:** Use service contracts to communicate to the domain layer by passing data types through strongly typed objects. This practice can help you avoid the need to replace presentation layer code when replacing business layer logic.

### Models

Each domain-layer model contains a reference to a resource model, which it uses to retrieve data from the database with MySql calls.  This resource model contains logic for connecting to the underlying database, typically MySQL. A model requires a resource model only if the model data must persist.

### Who accesses the domain layer?

There are three primary ways of accessing a module's domain-layer code:

* Service contracts are the recommended way for one module to access another module's domain-level code. This loosely coupled solution is the optimal way for most modules to access another module.

* A module can directly call into another module. This tightly coupled solution is not recommended for most situations, but is sometimes unavoidable.

* Domain layer code in one module can also plug itself into another module by:

    * event hooks
    * plugins
    * `di.xml` files (with an SPI contract)

Your strategy for calling another module's domain-layer code is highly dependent upon the unique configuration and needs of your system.

## Persistence layer {#persistence}

Magento uses an active record pattern strategy for persistence. In this system, the model object contains a *resource model* that maps an object to one or more database rows. A resource model is responsible for performing functions such as:

* Executing all CRUD (create, read, update, delete) requests. The resource model contains the SQL code for completing these requests.

* Performing additional business logic. For example, a resource model could perform data validation, start processes before or after data is saved, or perform other database operations.

If you expect to return multiple items from a database query, then you would implement a special type of resource model known as a *collection*. A collection is a class that loads multiple models into an array-like structure based on a set of rules. This is similar to a SQL `WHERE` clause.

A simple resource model defines and interacts with a single table. However, some objects have a vast number of attributes, or they could have a set related objects that have varying numbers of attributes. In these cases, the objects are constructed using Entity-Attribute-Value (EAV) models. As a result, any model that uses an EAV resource has its attributes spread out over a number of MySQL tables. The `Customer` and `Catalog` resource models use EAV attributes.

## Related topics

<a href="{{page.baseurl}}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>
