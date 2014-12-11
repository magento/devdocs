---
layout: default
group: config-guide
subgroup: Configuration
title: Dependency injection
menu_title: Dependency injection
menu_order: 4
github_link: config-guide/config/depend-inj.md
---

<h4>Contents</h4>

See one of the following sections:

*	<a href="#dep-inj-intro">Introduction</a>
*	<a href="#dep-inj-mod">How to use dependency injection</a>
*	<a href="#dep-inj-mod-config">Dependency injection type configurations</a>
*	<a href="#dep-inj-map">Interface preferences</a>
*	<a href="#dep-inj-compile">Definition compiler tool</a>

<h2 id="dep-inj-intro">Introduction</h2>

The Magento software now uses *dependency injection* as an alternative to the Magento 1.x `Mage` class. Dependency injection means that all object dependencies are passed (that is, *injected*) into an object instead of being pulled by the object from the environment.

A *dependency* (sometimes referred to as *coupling*) implies the degree that one component relies on another component to perform a function. A large amount of dependency limits code reuse and makes moving components to new projects difficult.

The <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/ObjectManager.php" target="_blank">object manager</a> specifies the dependency environment for constructor injection for constructor injection. The object manager must be present only when composing code. In larger applications, composing code is performed early in the bootstrapping process.

This topic uses the following terms:

Constructor injection

:	Type of dependency injection used for *implementation dependencies* (that is, dependencies that fulfill a business task of an object)

Method injection

:	Type of dependency injection used for *API dependencies* (that is, dependencies that an object acts on)

Factory

:	Object that creates the objects of a specific type. Unlike business objects, a factory can be dependent on the object manager.

Proxy

:	Object that implements the same interface as the original object, but unlike this original object has only one dependency&mdash;the object manager. A proxy is used for lazy loading of optional dependencies.

Lifestyle

:	An object's *lifestyle* determines in what scope instances are reused, and when to release them. For more information, see <a href="http://docs.castleproject.org/%28X%281%29S%283i1uai55lunseee55whzgdzv%29%29/Default.aspx?Page=LifeStyles&NS=Windsor&AspxAutoDetectCookieSupport=1" target="_blank">the Castle project</a>.

<h2 id="dep-inj-preview">Preview of using dependency injection</h2>
This section provides examples of constructor and method injection so you can see what they look at. To use dependency injection in your module, you must configure it as discussed in TBD.

<h3 id="dep-inj-preview-cons">Preview of constructor injection</h3>
Constructor injection *must* be used for all optional and required service dependencies of an object. Service dependencies fulfill business functions of your object. TBD LINK Proxies must be used for expensive optional dependencies.

<p class="q">Reviewer: Can you provide me with another example? Foo/bar examples are not ideal.</p>

{% highlight PHP %}
<?php
class Foo
{
    protected $_bar;
 
    public function __construct(Bar $bar)
    {
        $this->_bar = $bar;
    }
 
    public function execute()
    {
        //some code
 
        $this->_bar->execute();
 
        //some code
    }
}
 
$bar = new Bar();
$foo = new Foo($bar);
$foo->execute();
{% endhighlight %}

<h3 id="dep-inj-preview-method">Preview of method injection</h3>
Method injection must be used for API parameters; in other words, the API objects that your object acts on. The following example shows how to use method injection to:

*	Declare `$itemFactory` and `$menu` as service dependencies
*	Use `$command` as the API parameter that the object acts on

{% highlight PHP %}
<?php
namespace Magento\Backend\Model\Menu;
class Builder
{
    /**
     * @param \Magento\Backend\Model\Menu\Item\Factory $menuItemFactory
     * @param \Magento\Backend\Model\Menu $menu
     */
    public function __construct(
        Magento\Backend\Model\Menu\Item\Factory $menuItemFactory,  // Service dependency
        Magento\Backend\Model\Menu $menu  // Service dependency
    ) {
        $this->_itemFactory = $menuItemFactory;
        $this->_menu = $menu;
    }
 
    public function processCommand(\Magento\Backend\Model\Menu\Builder\CommandAbstract $command) // API param
    {
        if (!isset($this->_commands[$command->getId()])) {
            $this->_commands[$command->getId()] = $command;
        } else {
            $this->_commands[$command->getId()]->chain($command);
        }
        return $this;
    }
}
{% endhighlight %}


<h2 id="dep-inj-mod">Configuration overview</h2>

The object manager needs the following configurations:

*	Class definitions for retrieving the types and numbers of class dependencies
*	Instance configurations for retrieving how the objects are instantiated and for defining their lifestyle
*	Abstraction-implementation mappings (that is, interface preferences) for defining what implementation is to be used upon request to an interface

To define the interface preferences for the object manager, use `app/etc/di/*.xml`, `<your module dir>/etc/<areaname>/di.xml`, and `<your module dir>/etc/di.xml` files depending on the level.

For example, to set the interface preferences for the Magento Admin, use `app/code/core/Magento/Backend/etc/adminhtml/di.xml` as follows:

<script src="https://gist.github.com/xcomSteveJohnson/a166ab469a52eeec9954.js"></script>

You can also specify the sharebility of the object's `di.xml` configuration file as follows:

<script src="https://gist.github.com/xcomSteveJohnson/f66e46702da03ec264eb.js"></script>

Dependency injection is configuration-based; configurations are validated by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/etc/config.xsd" target="_blank">config.xsd</a>.

Object manager configurations can be specified at any of the following levels:

*	Global across all of Magento (`app/etc/di/*.xml`)
*	Entire module (`<your module directory>/etc/di.xml`)
*	Area-specific configuration for a module (`<your module directory>/etc/<areaname>/di.xml`)

	*Area-specific* means specific to a module's area (`frontend`, `adminhtml`, and so on). For example, here is the <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/adminhtml/di.xml" target="_blank">Magento Customer module's adminhtml di.xml</a>.
	
<div class="bs-callout bs-callout-info" id="info">
  <p>An area configuration overrides the global configuration.</p>
</div>

<h2 id="dep-inj-mod-class">Class definitions</h2>
Magento uses class constructor signatures to retrieve information about class dependencies; that is, to define what dependencies are to be passed to an object.

Magento reads constructors using reflection and we recommend you use the Magento <a href="#dep-inj-compile">defintion compiler tool</a> to pre-compile class definitions for better performance.

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
<p>When the configuration is merged, arguments with the same name are completely replaced. If argument types are different but the name is the same, the arguments are overridden.</p>

</div>
</div>

<div id="accordion2">
<h4 id="dep-inj-mod-type-args-config-inher">Parameter configuration inheritance</h4>
<div>

Parameters configured for a class type are automatically configured for all of its descendants. Any descendant can override parameters configured for the supertype (that is, the parent class or interface):

<script src="https://gist.github.com/xcomSteveJohnson/8ef9264be06fba085a03.js"></script>

<p>The preceding example configures all instances of <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View/Element/Context.php" target="_blank">Magento\Framework\View\Element\Context</a> and its children to retrieve and instance of <a href="{{ site.mage2000url }}app/code/Magento/Core/Model/Url" target="_blank">Magento\Core\Model\Url</a>, but <a href="{{ site.mage2000url }}app/code/Magento/Backend/Block/Context.php" target="_blank">Magento\Backend\Block\Context</a> overrides this and retrieves <a href="{{ site.mage2000url }}app/code/Magento/Backend/Model/Url.php" target="_blank">Magento\Backend\Model\Url</a>.</p>
</div>
</div>

<h2 id="dep-inj-mod-type-life-mgmt">Lifestyle management</h2>
An object's *lifestyle* determines in what scope instances are reused, and when to release them. For more information, see <a href="http://docs.castleproject.org/%28X%281%29S%283i1uai55lunseee55whzgdzv%29%29/Default.aspx?Page=LifeStyles&NS=Windsor&AspxAutoDetectCookieSupport=1" target="_blank">the Castle project</a>.

The object manager creates objects and manages the lifestyle of the following types of objects:

*	`singleton`&mdash;Create one class instance at the first request and subsequently reuse that instance. Release the instance when the container with which it's registered is disposed. This is the default.
*	`transient`&mdash;Create a new class instance every time the class is requested.

The preceding lifestyles can be configured as:

*	`argument`&mdash;Defines the lifestyle for the argument only.
*	`type`&mdash;A convenience configuration that defines the lifestyle for all instances of the specified type.

<h3 id="dep-inj-mod-type-inject">Injectables and non-injectables</h3>
We use the following terms to describe objects that can or cannot be instantiated by the object manager:

Injectable

:	Object (typically a singleton) that *can* be instantiated by the object manager.

Non-injectable

:	Object that *cannot* be instantiated by the object manager. Typically, this object:

	*	Has a transient lifestyle
	*	Requires external (such as data user input or data from database) to be properly created

	Most models are non-injectable (for example, <a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Product.php" target="_blank">Magento\Catalog\Model\Product</a> or <a href="{{ site.mage2000url }}app/code/Magento/User/Model/User.php" target="_blank">Magento\User\Model\User</a>).
	
You must observe the following rules:

*    Injectables can request other injectables in the constructor, but non-injectables *cannot* request other objects in a constructor
*    If a business function of an injectable object is to produce non-injectables, the injectable must ask for the <a href="#dep-inj-mod-type-fact">factory</a> in its constructor (due to the fact that factories are injectables)
*    if a business function of an injectable object is to perform some actions on non-injectable, it must receive the non-injectable as method argument

You can create non-injectables in services with object <a href="#dep-inj-mod-type-fact">factories</a> or you can pass them in as method parameters. 

Do not push injectables to non-injectables because it violates the <a href="http://en.wikipedia.org/wiki/Law_of_Demeter" target="_blank">Law of Demeter</a> and requires additional lookup during object unserialization.

<h3 id="dep-inj-mod-type-fact">Factories</h3>
Factories are special objects that have only one purpose: to create an instance of one non-injectable class or interface. Unlike other objects, factories are allowed to depend on the object manager. Factories are used to isolate object manager from business code:

<p class="q">Reviewer: Add a description of what this sample does?</p>

{% highlight PHP %}
<?php
class Magento\Core\Model\Config\BaseFactory
{
    protected $_objectManager;
 
    public function __construct(Magento\Framework\ObjectManager $objectManager)
    {
        $this->_objectManager = $objectManager;
    }
 
    public function create($sourceData = null)
    {
        return $this->_objectManager->create('Magento\Core\Model\Config\Base', array('sourceData' => $sourceData));
    }
}
{% endhighlight %}

Most factories are simple, so developers do not have to bother with writing them. If a non-existent factory is encountered by object manager in runtime mode or compiler, the object manager generates the factory. 

<h2 id="dep-inj-compile">Definition compiler tool</h2>
By default, class definitions are read using reflection. Because PHP reflection is slow, we created the definition compiler tool. The defintion compiler tool performs the following tasks:

*	Generates all required factories 
<!-- *	generate proxies declared in di.xml files -->
*	Generate interceptors for all classes that have plug-ins declared in `di.xml` 
*	Automatically compiles definitions for all modules and libraries
*	Compiles class inheritance implementation relations to increase performance of configuration inheritance operations
*	Compiles plug-in definitions (that is, the list of declared public methods)

<p class="q">Reviewer: Please check the following list.</p>

As a result of running the compiler tool, the following files and directories are created:

*	`<your Magento install dir>/var/generation` directory, which contains all generated classes by Magento and modules. 

	We use code-generation actively to create service classes (proxies, interceptors, factories, and builders). 
	
*	`<your Magento install dir>/var/di` directory, which contains the following:

	*	`definitions.php` for compiled definitions. 
	*	`plugins.php` for declared public methods in plug-in definitions. 
	*	`relations.php` for class inheritance implementation relations.

The preceding files are used by <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/Definition/Compiled.php" target="_blank">Magento\Framework\ObjectManager\Definition\Compiled</a>.

If you don't run the compiler tool and if the preceding do not exist, the  slower <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/Definition/Runtime.php" target="_blank">Magento\Framework\ObjectManager\Definition\Runtime</a> is used. 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>We suggest you use the slower runtime object during development but use only the compiled code in production.</p></span>
</div>

<h3 id="dep-inj-compile-notes">Notes about using the definition compiler tool</h3>
<div class="bs-callout bs-callout-warning">
<span class="glyphicon-class">
  <p>The definition compiler tool does not analyze auto-generated factory classes in files that are located in the <code>&lt;your Magento install dir>lib/internal/Magento</code> directory.</p>
<p>Do not use auto-generated factory classes at the library level. Such classes must be created manually.</p></span>
</div>
<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <!-- <p>Only place where Proxy classes can be declared is di.xml files (as a preference, as a type for virtualType or as an instance of type parameter)</p> -->
  <p>You can declare factory classes only in a PHP file's <code>__construct</code> of a class that is located under <code>&lt;your Magento install dir>app/code</code>.</p></span>
</div>
  
Naming rules for an auto-generated class named `Some\Module\Name':

<!-- *	Proxy Class: `Some\Model\Name\Proxy` -->
*	Factory Class: `Some\Model\NameFactory`

<h3 id="dep-inj-compile-run">Running the definition compiler tool</h3>
To run the definition compiler tool:

1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.
2.	Change to the `[your Magento install dir]/dev/tools/Magento/Tools/Di` directory.

Following is the command syntax:

	php compiler.php [--serializer <word>] [--verbose|-v] [--extra-classes-file <string>] [--generation <string>] [--di <string>] [--help]
	
<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Use double quotes (") to wrap strings.</p></span>
</div>
	
The following table discusses the meanings of the options:

<table>
	<tbody>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>--serializer &lt;word></td>
		<td>Serializer function to use <code>serialize</code> or <code>binary</code>. Default is <code>serialize</code>.</td>
	</tr>
	<tr>
		<td>--verbose | v</td>
		<td>Omit to display errors only. Include to display verbose output (including the generated classes).</td>
	</tr>
	<tr>
		<td>--extra-classes-file &lt;string></td>
		<td>Include to specify factories that are not in the code base. For more information, see TBD.</td>
	</tr>
	<tr>
		<td>--generation &lt;string></td>
		<td>Specify the absolute file system path to generate service classes. Default is <code>&lt;magento_root>/var/di</code>.</td>
	</tr>
	<tr>
		<td>--help</td>
		<td>Display command help</td>
	</tr>
	</tbody>
</table>

<h4 id="dep-inj-compile-extra">Specifying extra classes</h4>
To generate <!--proxies and -->factories not declared in dependency injection or the Magento code base, use the `--extra-classes-file` parameter to specify the path to a file that contains a list of factories and classes to generate. A sample follows:

{% highlight PHP %}
<?php

return array(
    'Magento\Core\Model\SomeFactory',
    'Magento\Core\Model\Some\Proxy'
);
{% endhighlight %}

<h4 id="dep-inj-compile-sample">Sample commands</h4>

**Example 1: Running the definition tool in verbose mode**

	php compiler.php -v
	
Sample output:

	Generated classes:
        Magento\AdminNotification\Model\FeedFactory
        Magento\AdminNotification\Model\InboxFactory
        Magento\Authorization\Model\Acl\Role\GroupFactory
        Magento\Authorization\Model\Acl\Role\UserFactory
        Magento\Authorization\Model\Resource\Role\CollectionFactory
        Magento\Authorization\Model\Resource\Rules\CollectionFactory
        Magento\Authorization\Model\RoleFactory
	... (more)
	
**Example 2: Specifying an alternate path to geneated files**

	php compiler.php --generation "/var/www/magento2/mydir"
	
<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The user who runs the definition compiler tool must have write access to the directory you specify.</p></span>
</div>


#### Related topics:

