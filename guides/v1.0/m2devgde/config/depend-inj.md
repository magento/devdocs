---
layout: howtom2devgde_chapters
title: Dependency injection
---

<h1 id="m2devgde-dep-inj">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/config/depend-inj.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="dep-inj-intro">Introduction</h2>

Dependency injection in Magento 2 is the alternative to the `Mage` class used in Magento 1. With dependency injection, an object does not need to locate an object or value on which it depends. Instead, a PHP class declares its dependencies in a constructor&mdash;a process referred to as *constructor dependency injection*.

The following example defines a constructor dependency on `SomeServiceInterface`:

<script src="https://gist.github.com/xcomSteveJohnson/dce474ab88e085062df0.js"></script>

The benefit of constructor dependency injection is that the object is immutable.

(A second type of dependency injection, *method injection*, is discussed later in this topic.)

The <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/ObjectManager.php" target="_blank">object manager</a> specifies the dependency environment. It's a separate object to avoid having to repeat the same code over and over again.

This page uses the following terms:

Factory

:	Object that creates the objects of a specific type. Unlike business objects, a factory can be dependent on the object manager.

Proxy

:	Object that implements the same interface as the original object, but unlike this original object has only one dependency&mdash;the object manager. A proxy is used for lazy loading of optional dependencies.

<h2 id="dep-inj-mod">Using Dependency Injection in Your Module</h2>

The object manager needs the following configurations: TBD CROSS REFS

*	Class definitions for retrieving the types and numbers of class dependencies
*	Instance configurations for retrieving how the objects are instantiated and for defining their lifecycle
*	Abstraction-implementation mappings (that is, interface preferences) for defining what implementation is to be used upon request to an interface

Magento uses class constructor signatures to retrieve information about class dependencies; that is, to define what dependencies are to be passed to an object.

Magento reads constructors using reflection and we recommend you use the Magento compiler tool (TBD) to pre-compile class definitions for better performance.

<h2 id="dep-inj-mod-config">Dependency injection type configurations</h2>

Dependency injection is configuration-based; configurations are validated by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/etc/config.xsd" target="_blank">config.xsd</a>.

Object manager configurations can be specified at any of the following levels:

*	Global configurations for an area (`app/etc/di/*.xml`)
*	Global configurations for a module (`[your module directory]/etc/di.xml`)
*	Area-specific configurations for a module (`[your module directory]/etc/[your area code]/di.xml`)

	The area-specific configurations fall into the application areas' configurations (`frontend`, `adminhtml`, and so on). For example, here is the <a href="{{ site.mage2000url }}blob/master/app/code/Magento/Customer/etc/adminhtml/di.xml" target="_blank">Magento Customer module's adminhtml di.xml</a>.

	The application area-specific configurations are loaded separately as necessary.

See one of the following sections for more information:

*	TBD	
*	TBD	
*	TBD	

<h2 id="dep-inj-mod-type">Dependency injection type configurations</h2>

<p class="q">Reviewer: The following sentence makes no sense, please clarify</p>

A type configuration specifies the parameters that must be used to instantiate a class and lifestyle of class instances. 

See one of the following sections for more information:

*	TBD
*	TBD
*	TBD

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
		<td><pre>&lt;argument xsi:type="boolean">{boolValue}&lt;/argument></pre></td>
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
		<td><pre>&lt;argument xsi:type="number">{numericValue}&lt;/argument></pre></td>
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
		<td><pre>&lt;argument xsi:type="init_parameter">{Constant::NAME}&lt;/argument></pre></td>
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
		<td><pre>&lt;argument xsi:type="const">{Constant::NAME}&lt;/argument></pre></td>
		<td><code>Constant::NAME</code> passed as argument.</td>
		<td>Any constant name.</td>
	</tr>
	</tbody>
</table>

<table>
<caption>Null</caption>
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
&lt;item key="someItem" xsi:type="string">someVal&lt;/item>
&lt;/argument></pre></td>
		<td>Array with elemens corresponding to the items passed as argument. Array can contain an infinite number of items. Each item can be any type as argument, including an array itself, or an object type.</td>
		<td>n/a</td>
	</tr>
	</tbody>
</table>

Sample:

<script src="https://gist.github.com/xcomSteveJohnson/24ffa1426734520f58a1.js"></script>

<p class="q">Reviewer: I had a hard time figuring out what this meant. Please review carefully. Original wording: "During merging, arguments with the same name are completely replaced, if their type is different, and are overridden, if their type is same."</p>
<p>When the configuration is merged, arguments with the same name are completely replaced. If argument types are different but the type is the same, the arguments are overridden.

</div>
</div>

<h4 id="dep-inj-mod-type-args-config-inher">Parameter configuration inheritance</h4>


#### Related topics:

