---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Dependency injection
menu_title: Dependency injection
menu_order: 5
version: 2.0
github_link: extension-dev-guide/depend-inj.md
redirect_from: /guides/v1.0/extension-dev-guide/depend-inj.html
---
## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

### Dependency injection overview

Magento 2 uses *dependency injection* as an alternative to the Magento 1.x `Mage` class.
[Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection){:target="_blank"} is the concept of the external environment injecting dependencies for an object instead of that object manually creating them internally.

In simple terms, when object A requires object or value B to fulfill a function, then B is a dependency of A.

A dependency creates a degree of coupling between objects in your code.
A large amount of coupling limits code reuse and makes moving components to new projects difficult.
Using dependency injection allows for a loose coupling in your code.

### Dependency inversion principle

When using dependency injection, we encourage you to follow the  [dependency inversion principle](http://www.oodesign.com/dependency-inversion-principle.html){:target="_blank"}, a coding principle that stipulates you use abstractions to reduce code dependencies.
This means that high level classes should use the interface of a low level class instead of working with it directly.

## Object manager

The [object manager]({{page.baseurl}}extension-dev-guide/object-manager.html) is a Magento service class that helps instantiate objects.
In larger applications (such as Magento), the object manager composes objects at the beginning of the bootstrapping process.

During class construction, the object manager injects the appropriate dependency as defined in the [`di.xml`]({{page.baseurl}}extension-dev-guide/build/di-xml-file.html) file.

## Constructor signature dependencies

Magento uses class constructor signatures, not doc-block annotations, to retrieve information about what dependencies to pass to an object's constructor.
If you write your code in a regular way using the dependency inversion principle, you do not have to worry about class definitions.

## Compiling dependencies
A [code compiler tool]({{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html) reads the dependencies in a class and passes them on to the `ObjectManager` for creation.
In other words, the compiler generates all non-existing dependency injection service classes ([proxies]({{page.baseurl}}extension-dev-guide/proxies.html), [factories]({{page.baseurl}}extension-dev-guide/factories) and [interceptors]({{page.baseurl}}extension-dev-guide/plugins.html)) declared in code or configuration.


## Injection types used in Magento

This section explains the two dependency injection types used in Magento using the following example:

{% highlight php startinline=true %}
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
        // processCommand Code
    }
}
{% endhighlight %}

### Construction Injection

Magento uses constructor injection to provide dependencies through an object's class constructor.
In the example above, `$menuItemFactory` and `$menu` are the dependencies provided to the class through its constructor.

You must use constructor dependency injection for all optional and required dependencies of an object.

<div class="bs-callout bs-callout-info" id="proxy-info">
  <b>Optional dependencies</b><br/>
  <p>Optional dependencies are expensive to instantiate objects that the dependent class can use.
In these cases, you can use a <a href="{{page.baseurl}}extension-dev-guide/proxies.html">proxy</a></p>
</div>

### Method Injection

Method injection is when an object specifies a dependency in one of its methods instead of its constructors.
In the example, above `$command` is the dependency passed into the class through the `processCommand` method.

When an object needs to act on a dependency, you can use method injection.

## Injectable and Newable Objects

**Injectable:** Objects obtained through dependency injection.
Any object the object manager instantiates, such as singletons and factories, fall into this category.

**Newable/non-injectable:** Objects obtained by creating a new class instance every time.
Transient objects, such as those that require external input from the user or database, fall into this category.
Injecting these objects returns an undefined object.

For example, you cannot use a model object such as [`app/code/Magento/User/Model/User.php`]({{ site.mage2000url }}app/code/Magento/Catalog/Model/Product.php){:target="_blank"} for dependency injection.
You need to provide a product id or explicitly request a new, empty instance of that object, and since you cannot specify this in the constructor signature, Magento cannot inject the object.

## Rules for using dependency injection

* Injectable objects may request dependent objects in their constructors if those objects are also injectable.
* If an injectable object needs to produce newable objects, it must ask for a [factory]({{page.baseurl}}extension-dev-guide/factories.html) in its constructor since factories are injectable.
* If an injectable object needs to perform some actions on newable object, it must receive that object as a function method argument.
* You can create newable objects in services with object [factories]({{page.baseurl}}extension-dev-guide/factories.html) or you can pass them in as method parameters.
* Newable objects should not hold a field reference to an injectable object nor should they request one in their constructor.
This is a [Law of Demeter](http://en.wikipedia.org/wiki/Law_of_Demeter){:target="_blank"} violation.


**Related topics**

*	[The `di.xml` file]({{page.baseurl}}extension-dev-guide/build/di-xml-file.html)
*	[ObjectManager]({{page.baseurl}}extension-dev-guide/object-manager.html)
*	[Plugins]({{page.baseurl}}extension-dev-guide/plugins.html)
*	[Routing]({{page.baseurl}}extension-dev-guide/routing.html)
*	[Magento application initialization and bootstrap]({{page.baseurl}}config-guide/bootstrap/magento-bootstrap.html)
* [Module Dependencies]({{page.baseurl}}architecture/archi_perspectives/components/modules/mod_depend.html)
*	[Programming concepts]({{page.baseurl}}extension-dev-guide/api-concepts.html)
