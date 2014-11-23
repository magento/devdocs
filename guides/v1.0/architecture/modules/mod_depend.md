---
layout: default
title: Magento 2 Understanding Module Dependencies
---

<h1 id="m2devgde-depen">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/arch/mod_depend.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-moddep-intro"> Introduction</h2>
In Magento 2, all modules are partitioned into logical groups, each one of which is responsible for a separate feature. In practice this means that

* Several modules cannot be responsible for one feature.
* One module cannot be responsible for several features.
* A module declares explicit dependency, if any, on another module.
* Removing or disabling a module does not result in disabling other modules.

<div class="bs-callout bs-callout-warning" id="warning">
    <p>When using Magento's modularity, you can lose historical information contained in a module if this module is removed or disabled. We recommend considering storage of such information before you remove or disable a module.</p></div>

Following are commonly used terms:

Framework layer

:	Defines the role of an application component in Magento, defines standards for the interactions among components, and implements system-level request and response objects and routing.

Application layer

: Implements business logic. This layer is built on top of the framework layer.

Service layer

: Provides a formal contract between a client and the service provider. This form of contact allows a service implementation to evolve without affecting the client.

Module

: A logical group (that is, a directory containing blocks, controllers, helpers, models, and so on related to the specific feature or a widget) in the application layer. A module is designed to work independently and to not intervene into work of other functionality.

Feature

: A functionality or a capability allowing a system to perform better.

Library

: A logical group in the framework layer.

<h2 id="m2devgde-moddep-naming">Name and declare a module</h2>
A module should be named according to the Namespace_Module schema, where

* Namespace is a name of a module's vendor
* Module is a name assigned to a module by its vendor

Typically, a module is located in `[root]/app/code/[Namespace]/[Module]` directory.
A module should be declared in `[root]/app/code/[Namespace]/[ModuleName]/etc/module.xml` file. To declare a module, the following information should be specified:
* The name of a module, according to the naming rules
* An element specifying whether a module is active
* Dependency of a module on other modules, if any
Declaration sample:
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;module&nbsp;name=&quot;Namespace_Module&quot;&nbsp;version=&quot;2.0.0.0&quot;&nbsp;active=&quot;true&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;depends&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;module&nbsp;name=&quot;Namespace_Module1&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/depends&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/modules&gt;
&lt;/config&gt;
</pre>


<h2 id="m2devgde-moddep-declare-dep">Declaring module dependencies</h2>
Module dependencies in Magento could be of two types: hard and soft dependencies.

1. A hard dependency implies that a module cannot function without modules, on which it depends. Specifically:

	* The module contains code that uses logic from another module directly, that is, the latter's instances, class constants, static methods, public class properties, interfaces, and traits.
	* The module contains strings that include class names, method names, class constants, class properties, interfaces, and traits from another module.
	* The module deserializes an object declared in another module.
	* The module uses or modifies the database tables used by another module.

2.  A soft dependency implies that a module can function without other modules, on which it depends. Specifically:
	* The module directly checks another module's availability.
	* The module extends another module's configuration.
	* The module extends another module's layout.

<div class="bs-callout bs-callout-warning" id="warning">
<p>If a module uses code from another module, it should declare the dependency explicitly.
</p>
</div>

Modules are installed in the following sequence: first, a module serving as dependency for another module will be installed, followed by the module dependent on it.


<h3 id="m2devgde-moddep-inapp-dep">Inappropriate dependencies</h3>

You should avoid the following dependencies:

* Circular dependencies (both direct and indirect)
* Undeclared dependencies
* Incorrect dependencies

<h4 id="m2devgde-moddep-diff-layer">Dependencies in different layers</h4>
There are peculiarities of building the dependencies between the modules belonging to different layers.

<h4 id="m2devgde-moddep-frmwk-layer">Dependencies in the framework layer</h4>
Modules belonging to the framework layer can be used in the application layer via an explicit dependency.

<div class="bs-callout bs-callout-info" id="info">
  <p>In this case using interfaces is preferable to using classes. </p>
  <p>You can build dependencies between classes in the framework layer even if they belong to different modules.</p>
</div>


<h4 id="m2devgde-moddep-app-layer">Dependencies in the application layer</h4>
Modules belonging to the application layer cannot be used in the framework layer.

You can build dependencies between classes in the application layer, but these classes must belong to the same module. Dependencies between the modules of the application layer should be built only via the service layer or the service provider interface (SPI).

<h2 id="m2devgde-moddep-api-spi">API- and SPI-specific interfaces</h2>

<p class="q">Reviewer: Please validate this because it's probably changed since this was written.</p>

**NOTE: not sure this section belongs there.**

To facilitate building correct dependencies between the modules, Magento 2 has both API  (Application Programming Interface) and SPI (Service Provide Interface) interfaces.

Interfaces marked as API-specific can be used by other modules; and interfaces marked as SPI-specific can be implemented by other modules.
To be considered API-specific, an interface should be declared with `@api` annotation:
<pre>
/**
&nbsp;*&nbsp;@api
&nbsp;*/
interface&nbsp;RouterInterface
{
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;function&nbsp;match();
}
&nbsp;
final&nbsp;class&nbsp;Mage_Core_Controller_Varien_Router_Base&nbsp;implements&nbsp;RouterInterface
{
&nbsp;&nbsp;&nbsp;&nbsp;//...
}
</pre>
Thus, an interface and its implementations automatically become a part of API, unlike other elements, which remain module-private. All classes considered a part of API must be declared `final` to prevent the implicit use of them in the SPI.

To be considered SPI-specific, an interface should be declared with `@spi` annotation:
<pre>
/**
&nbsp;*&nbsp;@spi
&nbsp;*/
interface&nbsp;RouterInterface
{
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;function&nbsp;match();
}
</pre>
Thus, an interface is automatically becomes a part of SPI, while its implementations are part of neither the SPI nor the API. Other interfaces and their implementations, which are not marked as SPI-specific, remain module-private.

The SPI-specific interfaces can be implemented by the third party developers and used in the dependency injection configurations. <!-- ADDLINK -->

To be marked as **both** API- and SPI-specific, an interface should be declared with  `@api`  **and** `@spi` annotations:

<pre>
/**
&nbsp;*&nbsp;@api
&nbsp;*&nbsp;@spi
&nbsp;*/
interface&nbsp;Magento_AuthorizationInterface
{
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;function&nbsp;isAllowed($resource);
}
</pre>
Thus, a class can be used and reimplemented by the third party developers. To ensure correct behavior, a class should be split into a final class, which becomes a part of the API, and an implementation interface, which becomes a part of the SPI.
