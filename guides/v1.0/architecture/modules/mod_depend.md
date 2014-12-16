---
layout: default
group: arch-guide
subgroup: Modules
title: Module dependencies
menu_title: Module dependencies
menu_order: 2
github_link: architecture/modules/mod_depend.md
---

<h2 id="m2devgde-moddep-intro"> Introduction</h2>

The concept of dependencies, or using and being dependent upon another module's features, is important in Magento.

In the Magento system, all modules are partitioned into logical groups, each one of which is responsible for a separate feature. In practice this means that:

* Several modules cannot be responsible for one feature.
* One module cannot be responsible for several features.
* A module declares explicit dependency, if any, on another module. Any dependency upon other components (theme, language pack, or library) must also be declared.
* Removing or disabling a module does not result in disabling other modules.

Modules can be dependent upon the following components:

* other modules
* PHP extensions
* Libraries (either Magento Framework Library or 3rd party libraries)

<div class="bs-callout bs-callout-warning" id="warning">
<p>When using Magento's modularity, you can lose historical information contained in a module if this module is removed or disabled. We recommend considering storage of such information before you remove or disable a module.</p></div>

<h3 id="m2devgde-moddep-intro">Module dependencies tasks</h3>

At a high level, there are three main steps for managing module dependencies:

1. **<a href ="{{ site.gdeurl }}architecture/modules/mod_intro.html">Name and declare</a>** the module (do this in the `module.xml` file)
2. **Declare any dependencies** that the module has, whether on other modules or a different component. (do this in the module's `composer.json` file)
3. (*Optional*) **Define the desired load order** of config files, .css files, etc. (do this in the `module.xml` file)

EXAMPLE: Module A declares a dependency upon Module B. Thus, in Module A's `module.xml` file, Module B is listed in the &lt;sequence> list, so that B’s files are loaded before A's. Additionally, in A’s `composer.json` file, a dependency upon Module B will need to be declared. Furthermore, in the deployment configuration file, Modules A and B will both need to be defined as active.


<h2 id="m2devgde-moddep-declare-deps">Declare the module's dependencies</h2>

A module's depencies (that is, all of the components upon which the module is dependent upon) are listed in the module's `composer.json` file.

<h4 id="m2devgde-moddep-use-example">Usage example</h4>

&lt;root>/app/code/<Vendor>/Catalog/composer.json

<pre>
{
    "name": "magento/module-catalog",
    "description": "N/A",
    "require": {
        "magento/module-store": "0.1.0-alpha108",
        "magento/module-eav": "0.1.0-alpha108",
        "magento/module-cms": "0.1.0-alpha108",
        "magento/module-indexer": "0.1.0-alpha108",
        "magento/module-customer": "0.1.0-alpha108" 
	},
</pre>

<h2 id="m2devgde-moddep-load-order">Define the load order for a module's dependencies</h2>


The load order of any dependencies on a module are declared using the &lt;sequence> element in the module.xml file. 

The &lt;sequence> element is optional, and is used only if 1) you care in what order components are loaded/installed, and 2) only for modules. No other type of component is entered in the &lt;sequence> section. Furthermore, listing a module in the &lt;sequence> list doesn’t mean that everything about that module is used; only config files and certain files under the /etc and the /view directories are considered for load order. Classes within a module are not impacted by their module being in the &lt;sequence> list.

Basic syntax using the &lt;equence> element:

<pre>
&lt;sequence>
    &lt;module name="Vendor_Module"/>
&lt;/sequence>
</pre>


<h4 id="m2devgde-moddep-use-example">Usage example</h4>

Magento\Customer\etc\module.xml

<pre>
&lt;config>
    &lt;module name="Magento_Customer" schema_version="1.11.0">
        &lt;sequence>
            &lt;module name="Magento_Adminhtml"/>
            &lt;module name="Magento_Customer"/>
            &lt;module name="Magento_Sales"/>
        &lt;/sequence>
    &lt;/module>
&lt;/config>
</pre>

<div class="bs-callout bs-callout-info" id="info">
  <p>Remember that the &lt;sequence> element in the <i>module.xml</i> file is used to define the load order of dependencies, but the actual dependency declarations are made in <i>composer.json file</i>. </p>
</div> 

<h2 id="m2devgde-moddep-declare-dep">Types of module dependencies</h2>
Module dependencies in Magento could be of two types: hard and soft dependencies.

1. A hard dependency implies that a module cannot function without the modules upon which it depends. Specifically:

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

<h2 id="m2devgde-moddep-dep-injection">Dependency Injection Overview</h2>

Dependency injection means that all object dependencies are passed (that is, injected) into an object instead of being pulled by the object from the environment.

A dependency (sometimes referred to as coupling) implies the degree that one component relies on another component to perform a function. A large amount of dependency limits code reuse and makes moving components to new projects difficult.

The object manager specifies the dependency environment for constructor injection for constructor injection. The object manager must be present only when composing code.

<h2 id="m2devgde-moddep-api-spi">API- and SPI-specific interfaces</h2>

To facilitate building correct dependencies between the modules, the Magento system has both API (Application Programming Interface) and SPI (Service Provide Interface) interfaces.

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

<h2 id="m2arch-module-related">Related topics</h2>

* <a href="{{ site.gdeurl }}architecture/modules/mod_depend.html">Understanding module dependencies</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_relationships.html">Module relationships</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_and_areas.html">Modules and areas</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_conventions.html">Module location and naming conventions</a>
<!--* <a href="{{ site.gdeurl }}architecture/modules/mod_specific.html">Specific Magento Modules</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Adding a New Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Disabling or Removing a Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Extending Modules</a>-->


