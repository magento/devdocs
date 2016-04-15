---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Dependency injection
menu_title: Dependency injection
menu_order: 5
github_link: extension-dev-guide/depend-inj.md
redirect_from: /guides/v1.0/extension-dev-guide/depend-inj.html
---
##{{page.menu_title}}


*	<a href="#dep-inj-intro">Overview of dependency injection</a>
*	<a href="#dep-inj-preview-cons">Preview of constructor injection</a>
*	<a href="#dep-inj-mod">Configuration overview</a>
*	<a href="#dep-inj-mod-class">Class definitions</a>
*	<a href="#dep-inj-mod-type">Type configurations</a>
*	<a href="#dep-inj-mod-type-life-mgmt">Lifecycle management</a>
*	<a href="#dep-inj-compile">Compiler tool</a>

<h2 id="dep-inj-intro">Overview of dependency injection</h2>

The Magento software now uses *dependency injection* as an alternative to the Magento 1.x `Mage` class. Dependency injection means that all object dependencies are passed (that is, *injected*) into an object instead of being pulled by the object from the environment.

A *dependency* (sometimes referred to as *coupling*) implies the degree that one component relies on another component to perform a function. A large amount of dependency limits code reuse and makes moving components to new projects difficult.

In simple terms, if ModuleA needs to access some functionality in ModuleB, ModuleA *depends on* ModuleB. ModuleA consumes the service offered by ModuleB, so ModuleA is the *consumer* and ModuleB is the *dependent*.

In addition, we use *dependency inversion*, a coding principle that stipulates you use abstractions to reduce code dependencies. Dependency inversion means:

*	High-level modules should not depend on low-level modules. Both should depend on abstractions.
*	Abstractions should not depend upon details. Details should depend on abstractions.

For more information, see <a href="https://sites.google.com/site/unclebobconsultingllc/blogs-by-robert-martin/dependency-injection-inversion" target="_blank">this article by Robert C. Martin</a>.


The <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/ObjectManager.php" target="_blank">object manager</a> specifies the dependency environment for constructor injection. The object manager must be present only when composing code. In larger applications, composing code is performed early in the bootstrapping process.

This topic uses the following terms:

Constructor injection

:	Type of dependency injection used for *implementation dependencies* (that is, dependencies that fulfill a business task of an object)

Factory

:	Object that creates the objects of a specific type. Unlike business objects, a factory can be dependent on the object manager.

Proxy

:	Auto-generated object that implements the same interface as the original object, but unlike this original object has only one dependency&mdash;the object manager. A proxy is used for lazy loading of optional dependencies. A <a href="http://en.wikipedia.org/wiki/Proxy_pattern" target="_blank">proxy</a> can be used to break cyclical dependencies. For more information, see <a href="{{ site.gdeurl }}extension-dev-guide/proxies.html">Proxies</a>.


Lifecycle

:	An object's *lifecycle* determines in what scope instances are reused, and when to release them.

<h2 id="dep-inj-preview-cons">Preview of constructor injection</h2>
Constructor injection *must* be used for all optional and required service dependencies of an object. Service dependencies fulfill business functions of your object.

{% highlight PHP %}
<?php
class Test
{
    protected $class;
 
    public function __construct(SomeClass $class)
    {
        $this->class = $class;
    }
 
    public function execute()
    {
        //some code
 
        $this->class->execute();
 
        //some code
    }
}
 
$test->execute();
?>
{% endhighlight %}


<h2 id="dep-inj-mod">Configuration overview</h2>

The object manager needs the following configurations:

*	Class definitions for retrieving the types and numbers of class dependencies
*	Instance configurations for retrieving how the objects are instantiated and for defining their lifecycle
*	Abstraction-implementation mappings (that is, interface preferences) for defining what implementation is to be used upon request to an interface

To define the interface preferences for the object manager, use `app/etc/di/*.xml`, `<your module dir>/etc/di.xml`, and `<your module dir>/etc/<areaname>/di.xml` files depending on the scope it belongs in.

For example, to set the interface preferences for the Magento Admin, use <a href="{{ site.mage2000url }}app/code/Magento/Backend/etc/adminhtml/di.xml#L12" target="_blank">`Backend/etc/adminhtml/di.xml`</a> as follows:

	 <preference for="Magento\Framework\UrlInterface" type="Magento\Backend\Model\UrlInterface" />

You can also specify whether or not the module is shareable in its `di.xml` as follows:

	<type name="Company\Module\ClassOne" shared="false">
		<arguments>
			<argument name="class_one" xsi:type="object" shared="false">Company\Module\ClassTwo</argument>
		</arguments>
	</type>

Dependency injection is configuration-based; configurations are validated by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/etc/config.xsd" target="_blank">config.xsd</a>.

Object manager configurations can be specified at any of the following scopes:

*	Primary for bootstrapping (`app/etc/di/*.xml`)
*	Global across all of Magento (`<your module directory>/etc/di.xml`)
*	Area-specific configuration (`<your module directory>/etc/<areaname>/di.xml`)

	*Area-specific* means specific a Magento area (`frontend`, `adminhtml`, and so on). For example, here is the <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/adminhtml/di.xml" target="_blank">Magento Customer module's adminhtml di.xml</a>.
	
<div class="bs-callout bs-callout-info" id="info">
  <p>Each scope overrides any previously existing config when it is loaded.</p>
</div>

<div class="bs-callout bs-callout-info" id="info">
  <p>Configurations for each scope are merged across modules, so there is no way to create a configuration that is only seen by a single module.</p>
</div>

<h2 id="dep-inj-mod-class">Class definitions</h2>
Magento uses class constructor signatures, not doc-block annotations, to retrieve information about class dependencies; that is, to define what dependencies are to be passed to an object.

Magento reads constructors using reflection. We recommend you use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">single-store compiler tool</a> or the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">multi-store compiler tool</a> to pre-compile class definitions for better performance.

The parameters specified for a class type are inherited by its descendant classes.

<h2 id="dep-inj-mod-type">Type configurations</h2>
By *type*, we mean basically the scope of the dependency (all of Magento, module, module area). For a review, see <a href="#dep-inj-mod">Configuration overview</a>.

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

Arguments are injected into a class instance during its creation. Argument names must correspond to constructor parameters of the configured class.

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
		<td><p><strong>Object with default lifecycle</strong></p>
		<pre>&lt;argument xsi:type="object">
{Type_Name}&lt;/argument></pre>
		<p><strong>Object with specified lifecycle</strong></p>
		<pre>&lt;argument xsi:type="object"
shared="{shared}">{Type_Name}&lt;/argument></pre></td>
		<td>Creates an instance of <code>Type_Name</code> type and passed as argument. Any class name, interface name, or virtual type name can be passed as <code>Type_Name</code>. <code>shared</code> defines the lifecycle of a created instance. </td>
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
  <p>String literals are case-sensitive.</p>
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
&lt;item name="someItem"
xsi:type="string">someVal&lt;/item>
&lt;/argument></pre></td>
		<td>Array with elements corresponding to the items passed as argument. Array can contain an infinite number of items. Each item can be any type as argument, including an array itself, or an object type.</td>
		<td>n/a</td>
	</tr>
	</tbody>
</table>

Sample:

<script src="https://gist.github.com/xcomSteveJohnson/24ffa1426734520f58a1.js"></script>

<p>When the configuration files for a given scope are merged, array arguments with the same name are merged into a new array. If a new configuration is loaded at a later time, either a more specific scope or through code, then any array definitions in the new configuration will completely replace the previously loaded config instead of being merged.</p>

</div>
</div>

<div id="accordion2">
<h4 id="dep-inj-mod-type-args-config-inher">Parameter configuration inheritance</h4>
<div>

Parameters configured for a class type are automatically configured for all of its descendants. Any descendant can override parameters configured for the supertype (that is, the parent class or interface):

<script src="https://gist.github.com/xcomSteveJohnson/8ef9264be06fba085a03.js"></script>

<p>The preceding example configures all instances of <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View/Element/Context.php" target="_blank">Magento\Framework\View\Element\Context</a> and its children to retrieve and instance of <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Url.php" target="_blank">Magento\Framework\Url</a>, but <a href="{{ site.mage2000url }}app/code/Magento/Backend/Block/Context.php" target="_blank">Magento\Backend\Block\Context</a> overrides this and retrieves <a href="{{ site.mage2000url }}app/code/Magento/Backend/Model/Url.php" target="_blank">Magento\Backend\Model\Url</a>.</p>
</div>
</div>

<h2 id="dep-inj-mod-type-life-mgmt">Lifecycle management</h2>
An object's *lifecycle* determines in what scope instances are reused, and when to release them.

The object manager creates objects and manages the lifecycle of the following types of objects:

*	`singleton`&mdash;Create one class instance at the first request and subsequently reuse that instance. Release the instance when the container with which it's registered is disposed. This is the default.
*	`transient`&mdash;Create a new class instance every time the class is requested.

The preceding lifecycle can be configured as:

*	`argument`&mdash;Defines the lifecycle for the argument only.
*	`type`&mdash;A convenience configuration that defines the lifecycle for all instances of the specified type.

<h3 id="dep-inj-mod-type-inject">Injectables and non-injectables</h3>
We use the following terms to describe objects that can or cannot be instantiated by the object manager:

Injectable

:	Object (typically a singleton) that *can* be instantiated by the object manager.

Non-injectable

:	Object that *cannot* be instantiated by the object manager. Typically, this object:

	*	Has a transient lifecycle
	*	Requires external input (such as data user input or data from database) to be properly created

	Most models are non-injectable (for example, <a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Product.php" target="_blank">Magento\Catalog\Model\Product</a> or <a href="{{ site.mage2000url }}app/code/Magento/User/Model/User.php" target="_blank">Magento\User\Model\User</a>).
	
You must observe the following rules:

*    Injectables can request other injectables in the constructor, but non-injectables *cannot* request other objects in a constructor
*    If a business function of an injectable object is to produce non-injectables, the injectable must ask for a <a href="{{ site.gdeurl }}extension-dev-guide/factories.html">factory</a> in its constructor (due to the fact that factories are injectables)
*    If a business function of an injectable object is to perform some actions on a non-injectable, it must receive the non-injectable as a method argument

You can create non-injectables in services with object <a href="{{ site.gdeurl }}extension-dev-guide/factories.html">factories</a> or you can pass them in as method parameters.

Do not push injectables to non-injectables because it violates the <a href="http://en.wikipedia.org/wiki/Law_of_Demeter" target="_blank">Law of Demeter</a> and requires additional lookup during object unserialization.

<h2 id="dep-inj-compile">Compiler tool</h2>
To compile all non-existent proxies and factories; and to pre-compile class definitions, inheritance information, and plugin definitions for multiple stores or websites, see one of the following topics:

*	If you have one website and one store, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">Single-store compiler</a>
*	If you have multiple websites and stores, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">Multi-store compiler</a>


#### Related topics:

*	<a href="{{ site.gdeurl }}extension-dev-guide/plugins.html">Plugins</a>
*	<a href="{{ site.gdeurl }}extension-dev-guide/routing.html">Routing</a>
*	<a href="{{ site.gdeurl }}config-guide/bootstrap/magento-bootstrap.html">Magento application initialization and bootstrap</a>
*	<a href="{{ site.gdeurl }}architecture/modules/mod_depend.html">Module dependencies</a>
*	<a href="{{ site.gdeurl }}extension-dev-guide/api-concepts.html">Programming concepts</a>
