---
layout: howtom2devgde_chapters
title: Dependency injection
---

<h1 id="m2devgde-dep-inj">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/config/depend-inj.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h4>Contents</h4>

See one of the following sections:

*	<a href="#dep-inj-intro">Introduction</a>
*	<a href="#dep-inj-mod">How to use dependency injection</a>
*	<a href="#dep-inj-mod-config">Dependency injection type configurations</a>
*	<a href="#dep-inj-map">Interface preferences</a>
*	<a href="#dep-inj-compile">Definition compiler tool</a>

<h2 id="dep-inj-intro">Introduction</h2>

<p class="q">Reviewer: Is the content in <a href="https://wiki.corp.x.com/display/MAGE2/Magento+2+DI+Overview#Magento2DIOverview-DIinMagento2" target="_blank">this wiki page</a> current and correct? If so I will use it here. A comment at the bottom of the page indicates that some information is outdated.</p>

Dependency injection is used in Magento 2 as an alternative to the `Mage` class used in Magento 1. With dependency injection, an object does not need to locate an object or value on which it depends. Instead, a PHP class declares its dependencies in a constructor&mdash;a process referred to as *constructor dependency injection*.

A *dependency* (sometimes referred to as *coupling*) implies the degree that one component relies on another component to perform a function. A large amount of dependency limits code reuse and makes moving components to new projects difficult. 

In simple terms, if ModuleA needs to access some functionality in ModuleB, then ModuleA is dependent on ModuleB. ModuleA consumes the service offered by ModuleB, so ModuleA is the consumer and ModuleB is the dependent.

The following example defines a constructor dependency on `SomeServiceInterface`:

<script src="https://gist.github.com/xcomSteveJohnson/dce474ab88e085062df0.js"></script>

The benefit of constructor dependency injection is that the object is immutable.

<p class="q">Reviewer: Is method injection valid and is it in fact mentioned in this topic?</p>

(A second type of dependency injection, *method injection*, is discussed later in this topic.)

The <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/ObjectManager.php" target="_blank">object manager</a> specifies the dependency environment. It's a separate object to avoid having to repeat the same code over and over again.

This page uses the following terms:

Factory

:	Object that creates the objects of a specific type. Unlike business objects, a factory can be dependent on the object manager.

Proxy

:	Object that implements the same interface as the original object, but unlike this original object has only one dependency&mdash;the object manager. A proxy is used for lazy loading of optional dependencies.

<h2 id="dep-inj-mod">How to use dependency injection</h2>

The object manager needs the following configurations:

*	Class definitions for retrieving the types and numbers of class dependencies
*	Instance configurations for retrieving how the objects are instantiated and for defining their lifecycle
*	Abstraction-implementation mappings (that is, interface preferences) for defining what implementation is to be used upon request to an interface

Magento uses class constructor signatures to retrieve information about class dependencies; that is, to define what dependencies are to be passed to an object.

Magento reads constructors using reflection and we recommend you use the Magento <a href="#dep-inj-compile">defintion compiler tool</a> to pre-compile class definitions for better performance.

The parameters specified for a class type are inherited by its descendant classes.

To define the interface preferences for the object manager, use `app/etc/di/*.xml`, `[your module dir]/etc/{areaCode}/di.xml`, and `[your module dir]/etc/di.xml` files depending on the level. 

For example, to set the interface preferences for the Magento Admin, use `app/code/core/Magento/Backend/etc/adminhtml/di.xml` as follows:

<script src="https://gist.github.com/xcomSteveJohnson/a166ab469a52eeec9954.js"></script>

Note that configurations specified at the area level will override the global configurations. You can also specify the sharebility of the object's `di.xml` configuration file as follows:

<script src="https://gist.github.com/xcomSteveJohnson/f66e46702da03ec264eb.js"></script>

<h2 id="dep-inj-mod-config">Dependency injection type configurations</h2>

Dependency injection is configuration-based; configurations are validated by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/etc/config.xsd" target="_blank">config.xsd</a>.

Object manager configurations can be specified at any of the following levels:

*	Global configurations for an area (`app/etc/di/*.xml`)
*	Global configurations for a module (`[your module directory]/etc/di.xml`)
*	Area-specific configurations for a module (`[your module directory]/etc/[your area code]/di.xml`)

	The area-specific configurations fall into the application areas' configurations (`frontend`, `adminhtml`, and so on). For example, here is the <a href="{{ site.mage2000url }}blob/master/app/code/Magento/Customer/etc/adminhtml/di.xml" target="_blank">Magento Customer module's adminhtml di.xml</a>.

	The application area-specific configurations are loaded separately as necessary.

See one of the following sections for more information:

*	<a href="#dep-inj-mod-type">Type configurations</a>	
*	<a href="#dep-inj-map">Interface preferences</a>	
*	<a href="#dep-inj-compile">Definition compiler tool</a>

<h3 id="dep-inj-mod-type">Type configurations</h3>

<p class="q">Reviewer: The following sentence makes no sense, please clarify</p>

A type configuration specifies the parameters that must be used to instantiate a class and lifestyle of class instances. 

See one of the following sections for more information:

*	<a href="#dep-inj-mod-type-type">Specify types</a>
*	<a href="#dep-inj-mod-type-args">Arguments</a>

<h3 id="dep-inj-mod-type-type">Specify types</h3>
	
Sample dependency injection by type:

<script src="https://gist.github.com/xcomSteveJohnson/0cac7bd1610f55e25a90.js"></script>

The preceding sample declares the following types:

*	`Magento\Core\Model\Session` (if the type is not set explicitly, it is taken from the name)
*	`config` virtual type that extends `Magento\Core\Model\Config`
*	`moduleConfig` virtual type that extends type `Magento\Core\Model\Config`
*	`Magento\Core\Model\App` type. All instances of this type retrieve and instance of `moduleConfig` as a dependency

<h3 id="dep-inj-mod-type-args">Arguments</h3>

Arguments are injected into a class instance during its creation. Parameter names must correspond to constructor parameters of the configured class.

The Object Manager defines the following:

Parameter

:	Variable declared in the constructor signature.

Argument

:	Value passed to the constructor when the class instance is created.

Sample argument that creates instances of `Magento\Core\Model\Session` with the argument `$sessionName` set to a value of `adminhtml`:

<script src="https://gist.github.com/xcomSteveJohnson/8907e3d1d6f2cd691d46.js"></script>

<div id="accordion">
<h4 id="dep-inj-mod-type-args-def">Argument definitions</h4>
<div><p>The following tables discuss the meanings of argument definitions.</p>
<table>
<caption>Object arguments</caption>
	<tbody>
		<tr>
			<th>Node format</th>
			<th>Description</th>
			<th>Possible values</th>
		</tr>
	<tr>
		<td><p><strong>Object with default lifetime</strong></p>
		<pre>&lt;argument xsi:type="object">
{Type_Name}&lt;/argument></pre>
		<p><strong>Object with specified lifetime</strong></p>
		<pre>&lt;argument xsi:type="object" 
shared="{shared}">{Type_Name}&lt;/argument></pre></td>
		<td>Creates an instance of <code>Type_Name</code> type and passed as argument. Any class name, interface name, or virtual type name can be passed as <code>Type_Name</code>. <code>shared</code> defines the lifetime of a created instance. </td>
		<td>n/a</td>
	</tr>
	</tbody>
</table>

<table>
<caption>String arguments</caption>
	<tbody>
		<tr>
			<th>Node format</th>
			<th>Description</th>
			<th>Possible values</th>
		</tr>
	<tr>
		<td><p><strong>Regular string</strong></p>
		<pre>&lt;argument xsi:type="string">
{someValue}&lt;/argument></pre>
		<p><strong>Translated string</strong></p>
		<pre>&lt;argument xsi:type="string" 
translate="true">{someValue}&lt;/argument></pre></td>
		<td><code>someValue</code> is passed as string.</td>
		<td>Any value is passed as a string.</td>
	</tr>
	</tbody>
</table>

<table>
<caption>Boolean arguments</caption>
	<tbody>
		<tr>
			<th>Node format</th>
			<th>Description</th>
			<th>Possible values</th>
		</tr>
	<tr>
		<td><pre>&lt;argument xsi:type="boolean">
{boolValue}&lt;/argument></pre></td>
		<td><code>boolValue</code> value is converted to <code>bool</code></td>
		<td>Truth value discussed in the following table.</td>
	</tr>
	</tbody>
</table>

<table>
<caption>Truth value dictionary</caption>
	<tbody>
		<tr>
			<th>Input type</th>
			<th>Input data</th>
			<th>Interpreted Boolean type</th>
		</tr>
	<tr>
		<td>Boolean</td>
		<td><code>true</code></td>
		<td><code>true</code></td>
	</tr>
	<tr>
		<td>Boolean</td>
		<td><code>false</code></td>
		<td><code>false</code></td>
	</tr>
	<tr>
		<td>String</td>
		<td><code>"true"</code></td>
		<td><code>true</code></td>
	</tr>
	<tr>
		<td>String</td>
		<td><code>"false"</code></td>
		<td><code>false</code></td>
	</tr>
	<tr>
		<td>String</td>
		<td><code>"1"</code></td>
		<td><code>true</code></td>
	</tr>
	<tr>
		<td>String</td>
		<td><code>"0"</code></td>
		<td><code>false</code></td>
	</tr>
	<tr>
		<td>Integer</td>
		<td><code>1</code></td>
		<td><code>true</code></td>
	</tr>
	<tr>
		<td>Integer</td>
		<td><code>0</code></td>
		<td><code>false</code></td>
	</tr>
	</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>String literals are case-sensitive.</p></span>
</div>

<table>
<caption>Number arguments</caption>
	<tbody>
		<tr>
			<th>Node format</th>
			<th>Description</th>
			<th>Possible values</th>
		</tr>
	<tr>
		<td><pre>&lt;argument xsi:type="number">
{numericValue}&lt;/argument></pre></td>
		<td><code>numericValue</code> as-is</td>
		<td>Integer, float, or <a href="http://us3.php.net/is_numeric" target="_blank">numeric string</a>.</td>
	</tr>
	</tbody>
</table>

<table>
<caption>Application arguments (that is, initialization parameters)</caption>
	<tbody>
		<tr>
			<th>Node format</th>
			<th>Description</th>
			<th>Possible values</th>
		</tr>
	<tr>
		<td><pre>&lt;argument xsi:type="init_parameter">
{Constant::NAME}&lt;/argument></pre></td>
		<td>Global application argument represented by 
<code>Constant::NAME</code> looked up and passed as argument.</td>
		<td>Constant the containing name of a global argument.</td>
	</tr>
	</tbody>
</table>

<table>
<caption>Constant arguments</caption>
	<tbody>
		<tr>
			<th>Node format</th>
			<th>Description</th>
			<th>Possible values</th>
		</tr>
	<tr>
		<td><pre>&lt;argument xsi:type="const">
{Constant::NAME}&lt;/argument></pre></td>
		<td><code>Constant::NAME</code> passed as argument.</td>
		<td>Any constant name.</td>
	</tr>
	</tbody>
</table>

<table>
<caption>null</caption>
	<tbody>
		<tr>
			<th>Node format</th>
			<th>Description</th>
			<th>Possible values</th>
		</tr>
	<tr>
		<td><pre>&lt;argument xsi:type="null"/></pre></td>
		<td>Pass null as argument.</td>
		<td>n/a</td>
	</tr>
	</tbody>
</table>

<table>
<caption>Array arguments</caption>
	<tbody>
		<tr>
			<th>Node format</th>
			<th>Description</th>
			<th>Possible values</th>
		</tr>
	<tr>
		<td><pre>&lt;argument xsi:type="array">
&lt;item key="someItem" 
xsi:type="string">someVal&lt;/item>
&lt;/argument></pre></td>
		<td>Array with elemens corresponding to the items passed as argument. Array can contain an infinite number of items. Each item can be any type as argument, including an array itself, or an object type.</td>
		<td>n/a</td>
	</tr>
	</tbody>
</table>

Sample:

<script src="https://gist.github.com/xcomSteveJohnson/24ffa1426734520f58a1.js"></script>

<p class="q">Reviewer: I had a hard time figuring out what this meant. Please review carefully. Original wording: "During merging, arguments with the same name are completely replaced, if their type is different, and are overridden, if their type is same."</p>
<p>When the configuration is merged, arguments with the same name are completely replaced. If argument types are different but the type is the same, the arguments are overridden.</p>

</div>
</div>

<div id="accordion2">
<h4 id="dep-inj-mod-type-args-config-inher">Parameter configuration inheritance</h4>
<div>

<p class="q">Reviewer: The term 'supertype' should be defined.</p>

Parameters configured for a class type are automatically configured for all of its descendants. Any descendant can override parameters configured for the supertype:

<script src="https://gist.github.com/xcomSteveJohnson/8ef9264be06fba085a03.js"></script>

The preceding example configures all instances of `Magento\Core\Block\Context` and its children to retrieve and instance of `Magento\Core\Model\Url`, but `Magento\Backend\Block\Context` overrides this and retrieves `Magento\Backend\Model\Url`.
</div>
</div>

<h3 id="dep-inj-mod-type-life-mgmt">Lifecycle management</h3>

<p class="q">Reviewer: This section seems to come out of nowhere and has no connection to the preceding topics in this section. Please clarify. Source: <a href="https://wiki.corp.x.com/display/MAGE2/Magento+Dependency+Injection#MagentoDependencyInjection-LifetimeManagement">https://wiki.corp.x.com/display/MAGE2/Magento+Dependency+Injection#MagentoDependencyInjection-LifetimeManagement</a>.</p>
<p class="q">Also, the wiki uses three terms that are not defined: lifetime, lifecycle, and lifestyle. I removed the term 'lifestyle' because it is too anthropomorphic. I use 'lifecycle' throughout because 'lifetime' implies TTL or something similar.</p>

The object manager creates objects and manages the lifecycle of objects:

*	`singleton`&mdash;One instance of class is created during application run. This is the default.
*	`transient`&mdash;A new instance is created every time the class is requested.

The preceding lifecycles can be configured as:

*	`argument`&mdash;Defines the lifecycle for the argument only.
*	`type`&mdash;A convenience configuration that defines the lifecycle for all instances of the specified type.

Example:

<script src="https://gist.github.com/xcomSteveJohnson/76cab1f42021975b0531.js"></script>

The preceding example configures `Magento\Filesystem` as not shared so that all clients get separate instances of it. 

Every instance of `Magento\Filesystem` gets a separate instance of the adapter.

<h3 id="dep-inj-mod-type-inject">Injectables and non-injectables</h3>

<p class="q">Reviewer: Code "injection" has the connotation of a malicious attack. Are you sure this is the term you want to use?</p>

Injectable

:	Data object with a singleton lifecycle, typically global system services and value objects. Injectables have no identity and thus do not require a user's input or persisted data to create. These objects can be created by the object manager when necessary. 

	Examples of injectables: database adapter, WebService adapter, layout model, and so on.

Non-injectable

:	Data object with a transient lifecycle. Non-injectables are data objects or primitive values that have an identity. Non-injectables **cannot** be created by the object manager because it requires interaction with a user (that is, additional information from user-provided arguments). 

	Non-injectables cannot be requested in a constructor. Examples of non-injectables include product, order, cart items, users, and so on. Use a factory to create this type of object.

<p class="q">Reviewer: Requires a code sample.</p>

Use the following guidelines:

*	Injectables can ask for other injectables in a constructor, but not non-injectables.
*	If a business function of an injectable object produces non-injectables, the function must ask for their factory in a constructor (because factories are injectable).
*	If a business function of an injectable performs some actions on a non-injectable, the function must receive it as method argument.

Do not push injectables to non-injectables because it violates the <a href="http://en.wikipedia.org/wiki/Law_of_Demeter" target="_blank">Law of Demeter</a> and requires additional lookup during object unserialization.

<h3 id="dep-inj-mod-type-fact">Factories</h3>

Use factories to create the non-injectable objects; that is, a factory facilitates creating an object using another object. When an object needs to create another object, it declares a dependency on a factory of the object it creates. 

Typically, a factory is simple. If the object manager encounters a non-existing factory in runtime mode or using the compiler, the object is generated. More complicated factories that make decision which implementation to instantiate based on incoming parameters must be written manually.

A factory depends on the object manager, but an object itself does not. Unlike other objects, factories are allowed to depend on the object manager. An example follows:

<script src="https://gist.github.com/xcomSteveJohnson/10555b3e62813a507961.js"></script>

<p class="q">Reviewer: This code sample lacks a description. The description must explain how it shows an object depending on the object manager, the object it creates, and how you know it is non-injectable.</p>

<h3 id="dep-inj-mod-type-proxy">Proxies</h3>

Use a proxy to lazy load optional constructor arguments. Example:

<script src="https://gist.github.com/xcomSteveJohnson/34fa1044eac4b02780bb.js"></script>

To use the preceding sample, substitute an existing class with a proxy using the configuration file as follows:

<script src="https://gist.github.com/xcomSteveJohnson/5e114199f6ddda27528d.js"></script>

<h2 id="dep-inj-map">Interface preferences</h2>

In any object-oriented application, all constructor signatures contain interface names in parameter type hints. This does not give the object manager enough information to instantiate an object. 

*Interface preferences* are used to map default implementations to interfaces for the object manager in `di` subnode as follows:

*	Mapping interface preferences in the global area using `app/etc/di/config.xml`:

	<script src="https://gist.github.com/xcomSteveJohnson/f146b684cd3a5ccf19e3.js"></script>
	
*	Mapping interface preferences in the Admin area using `app/code/core/Magento/Backend/etc/adminhtml/di.xml`:

	<script src="https://gist.github.com/xcomSteveJohnson/95eae2001613857a8d42.js"></script>
	
In the preceding examples, `Magento\Core\Model\Url` is declared as the default implementation for `Magento\Core\Model\UrlInterface` in the global area. 

`Magento\Backend\Model\Url` is set as the default implementation for the Admin area (`adminhtml`). 

When the object manager encounters `Magento\Core\Model\UrlInterface`, it provides the default implementation for specified area.

<h2 id="dep-inj-compile">Definition compiler tool</h2>

<p class="q">Reviewer: This section is meaningless without instructions on how to run the tool. Where are they? Shouldn't this move to that section and just point to it?</p>

By default, class definitions are read using reflection. Because reflection is slow in PHP, we introduced the definition compiler.

The defintion compiler does following:

*	Generates all non-existing dependency injection service classes (proxies, factories and interceptors) declared in the code or in the configuration.
*	Reads the definitions of all classes and stores them in fast format in `[definition dir path]/definitions.php`
*	Reads public method information of configured plug-ins and stores it in `[definition dir path]/plugins.php`

Configure `[definition dir path]` in `app/etc/local.xml` as follows:

<script src="https://gist.github.com/xcomSteveJohnson/e01e71302c8796bf3c2b.js"></script>






#### Related topics:

