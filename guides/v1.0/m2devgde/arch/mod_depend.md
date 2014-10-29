---
layout: howtom2devgde_chapters
title: Magento 2 Understanding Module Dependencies
---
 
<h1 id="m2devgde-depen">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/arch/mod_depend.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-moddep-intro">Terms Used</h2> 

* Framework layer: Defines the role of an application component in Magento, defines standards for the interactions among components, and implements system-level request and response objects and routing.
* Application layer: Implements business logic. This layer is built on top of the framework layer.
* Service layer: Provides a formal contract between a client and the service provider. This form of contact allows a service implementation to evolve without affecting the client.
* Module: A logical group (that is, a directory containing blocks, controllers, helpers, models, and so on related to the specific feature or a widget) in the application layer. A module is designed to work independently and to not intervene into work of other functionality.
* Feature: A functionality or a capability allowing a system to perform better.
* Library: A logical group in the framework layer.

## Introduction
In Magento 2, all modules are partitioned into logical groups, each one of which is responsible for a separate feature. In practice this means that

* Several modules cannot be responsible for one feature.
* One module cannot be responsible for several features.
* A module declares explicit dependency, if any, on another module.
* Removing or disabling a module does not result in disabling other modules.

<div class="bs-callout bs-callout-warning" id="warning">
    <img src="{{ site.baseurl }} ../../common/images/icon_important.png" alt="note" width="40" align="left">
	<span class="glyphicon-class">
    <p>When using Magento's modularity, you can lose historical information containing in a module if this module is removed or disabled. We recommend considering storage of such information before you remove or disable a module.
     </p></span>
  </div>



## Naming and Declaring a Module
A module should be named according to Namespace_Module schema, where

* Namespace is a name of a module's vendor
* Module is a name assigned to a module by its vendor

Typically, a module is located in `[root]/app/code/[Vendor]_[Module]`.

A module should be declared in `[root]/app/code/[Vendor]_[Module]/etc/module.xml` file. To declare a module, the following information should be specified:

* The name of a module, according to the naming rules
* An element specifying whether a module is active
* Dependency of a module on other modules, if any

Declaration sample:

<pre>
&lt;config>
    &lt;module name="Vendor_Module" version="2.0.0.0" active="true"/>    
      &lt;depends>      
        &lt;module name="Vendor_Module1"/>        
      &lt;/depends>      
    &lt;/modules>    
&lt;/config>
</pre>


## Declaring Module Dependencies
Module dependencies in Magento could be of two types: hard and soft dependencies.

1. Hard dependency implies that a module cannot function without modules, on which it depends. Specifically:

	* The module contains code that uses logic from another module directly, that is, the latter's instances, class constants, static methods, public class properties, interfaces, and traits.
	* The module contains strings that include class names, method names, class constants, class properties, interfaces, and traits from another module.
	* The module deserializes an object declared in another module.
	* The module uses or modifies the database tables used by another module.

2.  Soft dependency implies that a module can function without other modules, on which it depends. Specially:
	* The module directly checks another module's availability.
	* The module extends another module's configuration.
	* The module extends another module's layout.
  
<div class="bs-callout bs-callout-warning" id="warning">
<img src="{{ site.baseurl }} ../../common/images/icon_important.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>If a module uses the code from another module, it should declare the dependency explicitly.</p></span></div>

All module dependencies are validated by Magento when modules are installed. If Magento detects an [inappropriate dependency](#Inappropriate Dependencies) — such as a circular — the modules installation will be terminated.

If module dependencies pass validation, the modules will be installed in the following sequence: first, a module serving as dependency for another module will be installed, followed by the module dependent on it.

### Understanding Inappropriate Dependencies

The following dependencies are not allowed:

* Circular dependencies (both direct and indirect)
* Undeclared dependencies
* Incorrect dependencies

### Understanding Dependencies in Different Layers
There are peculiarities of building the dependencies between the modules belonging to different layers.

#### Understanding Dependencies in the Framework Layer
Modules belonging to the framework layer can be used in the application layer via an explicit dependency.

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }} ../../common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>In this case using <code>interfaces</code> is preferable to using <code>classes</code>. </p>
  <p>You can build dependencies between classes in the framework layer even if they belong to different modules.</p></span>
</div>


#### Understanding Dependencies in the Application Layer
Modules belonging to the application layer cannot be used in the framework layer.

You can build dependencies between classes in the application layer, but these classes must belong to the same module. Dependencies between the modules of the application layer should be built only via the service layer or the service provider interface (SPI).

## Using API- and SPI-specific Interfaces

<p class="q">Reviewer: Please validate this because it's probably changed since this was written.</p>

**NOTE: not sure this section belongs there.**

To facilitate building correct dependencies between the modules, Magento 2 has the API-specific and SPI-specific interfaces.

Interfaces marked as API-specific can be used by other modules; and interfaces marked as SPI-specific can be implemented by other modules.

To be considered API-specific, an interface should be declared with `@api` annotation:

<pre>/**
 * @api
 */
interface RouterInterface
{
    public function match();
}
 
final class Mage_Core_Controller_Varien_Router_Base implements RouterInterface
{
    //...
}</pre>

Thus, an interface and its implementations automatically become a part of API, unlike other elements, which remain module-private. All classes considered a part of API must be declared final to prevent the implicit use of them in the SPI.

To be considered SPI-specific, an interface should be declared with `@spi` annotation:

<pre>/**
 * @spi
 */
interface RouterInterface
{
    public function match();
}
Thus, an interface is automatically becomes a part of SPI, while its implementations are part of neither the SPI nor the API. Other interfaces and their implementations, which are not marked as SPI-specific, remain module-private.

The SPI-specific interfaces can be implemented by the third party developers and used in the dependency injection configurations.

To be marked as both API- and SPI-specific, an interface should be declared with @api and @spi annotations:
/**
 * @api
 * @spi
 */
interface Magento_AuthorizationInterface
{
    public function isAllowed($resource);
}
</pre>
Thus, a class can be used and reimplemented by the third party developers. To ensure correct behavior a class should be split into a final class, which becomes a part of the API, and an implementation interface, which becomes a part of the SPI.

