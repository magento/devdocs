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
{:.no_toc}

* TOC
{:toc}

### Dependency injection overview

Magento 2 uses *dependency injection* as an alternative to the Magento 1.x `Mage` class. [Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection){:target="_blank"} is when an object's dependencies are provided to it by its external environment instead of manually creating them internally.

In simple terms, when object A requires object or value B to fulfill a function, then B is a dependency of A.

A dependency creates a degree of coupling between objects in your code. A large amount of coupling limits code reuse and makes moving components to new projects difficult. Using dependency injection allows for a loose coupling in your code.

#### Dependency inversion principle

When using dependency injection, we encourage you to follow the  [dependency inversion principle](http://www.oodesign.com/dependency-inversion-principle.html){:target="_blank"}, a coding principle that stipulates you use abstractions to reduce code dependencies. This means that high level classes should use the interface of a low level class instead of working with it directly.

### Object manager overview

Since dependency management is the responsibility of the environment, some kind of object manager must be present in complex systems to avoid boilerplate code. The object manager is present only when composing code, and in larger applications(such as Magento), composing code is performed early in the bootstrapping process and boilerplate code is moved to the configuration of the object manager.

In Magento, the object manager is represented by the appropriately named [Object Manager]({{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager/ObjectManager.php){:target="_blank"}.

### Object Manager Configuration

There are three types of configuration that is required by Magento's object manager:

*	[Class configuration(definitions)](#class-configurations) - These configurations describe the class dependencies for an object.
* Type configuration - These configurations describe how objects are instantiated and their lifecycle.
* Abstraction-Implementation mappings - These configurations map which concrete implementations to use when interfaces are requested.

#### Class configurations

Magento uses class constructor signatures, not doc-block annotations, to retrieve information about class dependencies; i.e. to define what dependencies are to be passed to an object. This way, you do not have to worry about class definitions if you write your code in a regular way using the dependency inversion principle.

Magento reads constructors using reflection. We recommend you use the [single-store compiler tool]({{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html) or the [multi-store compiler tool]({{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html) to pre-compile class definitions for better performance.

The parameters specified for a class type are inherited by its descendant classes.

#### Type configurations

Type configurations describe the parameters that must be used to instantiate a class and lifecycle of class instances. Configuration for Magento's object manager is stored in following XML files:

* `app/etc/di.xml` - This is the global area application configuration.
* `<moduleDir>/etc/di.xml` - This is the module global area configuration.
* `<moduleDir>/etc/<area>/di.xml` - This is the module area-specific configuration.

All object manager configuration is located under the config node in the xml files:

{% highlight xml %}
<config>
    <!-- Object Manager configuration -->
</config>
{% endhighlight %}

Magento reads all the configuration files declared in the system and merges them all together by appending all nodes.

##### Declaring Type
{:.no_toc}

Type can be declared in your di.xml configuration node in the following ways:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <type name="Magento\Core\Model\Session" /> // Default instance of Magento\Core\Model\Session type. Exists by default, can be omited.
    <virtualType name="moduleConfig" type="Magento\Core\Model\Config"> // Instance with global name "moduleConfig" of Magento\Core\Model\Config type
        <arguments>
            <argument name="type" xsi:type="string">system</argument>
        </arguments>
    </virtualType>
    <type name="Magento\Core\Model\App">
        <arguments>
            <argument name="config" xsi:type="object">moduleConfig</argument>
        </arguments>
    </type>
</config>
{% endhighlight %}

The preceding example declares the following types:

*	`Magento\Core\Model\Session`: If the type is not set explicitly, it is taken from the name.
*	`moduleConfig`: A virtual type that extends type `Magento\Core\Model\Config`.
*	`Magento\Core\Model\App`: All instances of this type retrieve an instance of `moduleConfig` as a dependency.

<div class="bs-callout bs-callout-info" id="info">
  <b>Virtual Type</b><br/>
  <p>A virtual type allows you to change the arguments of a specific injectable dependency and effectively create a new type of a particular class. This allows you to use a customized class without affecting other classes that have a dependency on the original.</p>
</div>

##### Arguments
{:.no_toc}

Class constructor arguments are configured in your di.xml in the argument node. All these arguments will be injected into the class during creation. The name of the argument configured in the XML file must correspond to the name of the parameter in the constructor in the configured class.

The example below creates instances of `Magento\Core\Model\Session` with the class constructor argument `$sessionName` set to a value of `adminhtml`:

<script src="https://gist.github.com/xcomSteveJohnson/8907e3d1d6f2cd691d46.js"></script>

**Argument Types:**

`object`

Node Formats:

: `<argument xsi:type="object">{typeName}</argument>`
: `<argument xsi:type="object" shared="{shared}">{typeName}</argument>`

Creates an instance of `typeName` type and passes it in as an argument. Any class name, interface name, or virtual type name can be passed as `typeName`.

Setting the `shared` property defines the lifecycle of a created instance. See [Lifecycle Management](#lifecycle-management).

---

`string`

Node Formats:

: `<argument xsi:type="string">{strValue}</argument>`
: `<argument xsi:type="string" translate="true">{strValue}</argument>`

Any value for this argument node will be perceived as a string.

---

`boolean`

Node Format:

: `<argument xsi:type="boolean">{boolValue}</argument>`

Any value for this argument node will be converted into a boolean value. See table below:

| Input Type | Data     | Boolean Value |
| ---------- | -------- | ------------- |
| Boolean    | true     | true          |
| Boolean    | false    | false         |
| String     | "true"*  | true          |
| String     | "false"* | false         |
| String     | "1"      | true          |
| String     | "0"      | false         |
| Integer    | 1        | true          |
| Integer    | 0        | false         |

<small>*These String literals are case-sensitive</small>

---

`number`

Node Format:

: `<argument xsi:type="number">{numericValue}</argument>`

Acceptable values for this type include: integers, floats, or [numeric strings](http://us3.php.net/is_numeric){:taget="_blank"}.

---

`init_parameter`

Node Format:

: `<argument xsi:type="init_parameter">{Constant::NAME}</argument>`

The global application initialization argument represented by `Constant::NAME` is looked up and passed as argument.

---

`const`

Node Format:

: `<argument xsi:type="const">{Constant::NAME}</argument>`

The `Constant::NAME` constant value will be looked up and passed as the argument.

---

`null`

Node Format:

: `<argument xsi:type="null"/>`

A null value will be passed in as an argument.

---

`array`

Node Format:

: ~~~
  <argument xsi:type="array">
    <item key="someKey" xsi:type="<type>">someVal</item>
  </argument>
  ~~~

An array with elements corresponding to the items will be passed as the argument. The array can contain an infinite number of items. Each array item can be of any object type including an array itself.

When the configuration files for a given scope are merged, array arguments with the same name are merged into a new array. If a new configuration is loaded at a later time, either by a more specific scope or through code, then any array definitions in the new configuration will completely replace the previously loaded config instead of being merged.

---

**Argument Examples:**

<script src="https://gist.github.com/xcomSteveJohnson/24ffa1426734520f58a1.js"></script>

<div class="bs-callout bs-callout-info" id="merging-info">
  <b>Merging and Arguments</b><br/>
  <p>During merging, arguments with the same name are completely replaced if their type is different. If the argument type is the same, then they are overridden.</p>
</div>

#### Parameter configuration inheritance

Parameters configured for a class type are automatically configured for all of its descendant classes. Any descendant can override the parameters configured for its supertype; i.e. the parent class or interface:

<script src="https://gist.github.com/xcomSteveJohnson/8ef9264be06fba085a03.js"></script>

In the preceding example, [`Magento\Backend\Block\Context`]({{ site.mage2000url }}app/code/Magento/Backend/Block/Context.php){:target="_blank"} is a descendant of [`Magento\Framework\View\Element\Context`]({{ site.mage2000url }}lib/internal/Magento/Framework/View/Element/Context.php){:target="_blank"}.

The first entry configures all instances of `Magento\Framework\View\Element\Context` as well as its children to pass in [`Magento\Core\Model\Url`]({{ site.mage2000url }}lib/internal/Magento/Framework/Url.php){:target="_blank"} as `$urlBuilder` in their constructors.

The second entry overrides this and configures all instances of `Magento\Backend\Block\Context` to use [`Magento\Backend\Model\Url`]({{ site.mage2000url }}app/code/Magento/Backend/Model/Url.php){:target="_blank"} as the `$urlBuilder` instead.

---

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



<h2 id="dep-inj-mod-type-life-mgmt">Lifecycle management</h2>
An object's *lifecycle* determines in what scope instances are reused, and when to release them.

The object manager creates objects and manages the lifecycle of the following types of objects:

*	`singleton`&mdash;Create one class instance at the first request and subsequently reuse that instance. Release the instance when the container with which it's registered is disposed. This is the default.
*	`transient`&mdash;Create a new class instance every time the class is requested.

The preceding lifecycle can be configured as:

*	`argument`&mdash;Defines the lifecycle for the argument only.
*	`type`&mdash;A convenience configuration that defines the lifecycle for all instances of the specified type.

### Injectable and Newable Objects

**Injectable:** Objects that can be obtained through dependency injection. Any object that can be instantiated by the object manager, such as singletons and factories, fall into this category.

**Newable:** Objects that can only be obtained by creating a new class instance every time. Transient objects, such as those that require external input from the user or database, fall into this category. Attempts to obtain these objects using dependency injections will return an undefined object.

> For example a model object such as [`app/code/Magento/User/Model/User.php`]({{ site.mage2000url }}app/code/Magento/Catalog/Model/Product.php){:target="_blank"} cannot be used for dependency injection. You need to provide a product id or explicitly request a new, empty instance of that object, and since this cannot be done in the constructor signature, the object cannot be injected.

### Rules for using dependency injection

* Injectable objects may request dependent objects in their constructors but only if those objects are also injectable.
* If an injectable object needs to produce newable objects, it must ask for a [factory]({{ site.gdeurl }}extension-dev-guide/factories.html) in its constructor since factories are injectable.
* If an injectable object needs to perform some actions on newable object, it must receive that object as a function method argument.
* You can create newable objects in services with object [factories]({{ site.gdeurl }}extension-dev-guide/factories.html) or you can pass them in as method parameters.
* Newable objects should not hold a field reference to an injectable object nor should they request one in their constructor. This is a [Law of Demeter](http://en.wikipedia.org/wiki/Law_of_Demeter){:target="_blank"} violation.

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
