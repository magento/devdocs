---
group: php-developer-guide
title: Dependency injection
---

Magento 2 uses [Dependency Injection] to replace functionality provided by the `Mage` class in Magento 1.x.

Dependency Injection is a design pattern that allows an object A to declare its dependencies to an external object B that supplies those dependencies.
The dependencies declared by A are usually class interfaces and the dependencies B provides are concrete implementations for those interfaces.

This allows for loose coupling of code because object A no longer needs to be concerned with initializing its own dependencies.
Object B decides which implementations to provide to object A based on a configuration or desired behavior.

This is an important concept to understand for extension developers because it forms the basis of how Magento composes its classes.

## Dependency inversion principle

Follow the [dependency inversion principle] and use abstractions in your code to reduce code dependencies.
This means that your high level classes should use the interfaces of low level classes instead of working with them directly.

Using interfaces in your code reduces the risk of incompatibility bugs when Magento changes the underlying implementation of those interfaces.
It also lets you focus on what a class does instead of how its implemented.

Since the Magento codebase follows this principle, you can map your own implementation of a Magento interface to a dependent class or service using the [`di.xml`] file.

## Object manager

The [`ObjectManager`] is a Magento service class that instantiates objects at the beginning of the bootstrapping process.

Magento uses class constructor signatures to retrieve information about an object's constructor dependencies.
When a class is constructed, the object manager injects the class's dependencies, defined in the `di.xml` file, into the class constructor.

Since the object manager provides its service indirectly, your class should not depend on the `ObjectManager` object itself.
The only exceptions are custom factories with complex logic and integration tests that need environment setup.

## Compiling dependencies

Magento uses its [code compiler tool] to collect all class dependency information and stores it in files.
During the class creation process, the object manager uses this information to create concrete objects in the application.

Service classes that do not exist in the codebase, such as [proxies], [factories], and [interceptors] that are declared in code or in a configuration, are generated with the help of the compiler.

## Injection types used in Magento

The following code sample highlights the two types of dependency injections used in Magento:

```php

namespace Magento\Backend\Model\Menu;

class Builder
{
    /**
     * @var \Magento\Backend\Model\Menu\Item\Factory
     */
    private $_itemFactory;

    /**
     * @param \Magento\Backend\Model\Menu\Item\Factory $menuItemFactory
     */
    public function __construct(
        \Magento\Backend\Model\Menu\Item\Factory $menuItemFactory,  // Service dependency
    ) {
        $this->_itemFactory = $menuItemFactory;
    }

    /**
     * @param \Magento\Backend\Model\Menu\Builder\AbstractCommand
     */
    public function processCommand(\Magento\Backend\Model\Menu\Builder\AbstractCommand $command) // API param
    {
        // processCommand Code
    }
}

```

### Constructor injection

In the code sample, the `Builder` class declares its dependency on the `Factory` and `Menu` classes in its constructor.
Magento uses the `di.xml` file to determine which implementations to inject into the `Builder` class.

#### Optional dependencies

Optional dependencies are objects that your class uses for specific methods and scenarios.
If a class is expensive to instantiate and your class does not always use it, consider using a [proxy].

You must use constructor dependency injection for all optional and required dependencies of an object.

### Method injection

In the code sample, the `Builder` class is also dependent on the `AbstractCommand` class for its `processCommand()` method.

Method injection involves passing in a dependency as a method parameter to use it in the class logic.
When an object needs to perform actions on a dependency that cannot be injected, use method injection.

## Dependency types

### Injectable

Injectable objects are singleton service objects obtained through dependency injection.
The object manager uses the configuration in the `di.xml` file to create these objects and inject them into constructors.

Injectable objects can depend on other injectable objects in their constructor as long as the dependency chain does not circle back to the original injectable object.

### Newable/non-injectable

Newable, or non-injectable, objects are objects that cannot be injected.
They are obtained by creating a new class instance every time they are needed.

Transient objects, such as those that require external input from the user or database, fall into this category.
If you attempt to inject these objects, you will either receive an incomplete, incorrect object or an error that the object could not be created.

For example, you cannot depend on a model object, such as [`Product`], because you need to provide a product id or explicitly request a new, empty instance to get a `Product` object.
Since you cannot specify this data in the constructor signature, Magento cannot inject this object.

To get around this limitation, injectable objects can depend on [factories] that produce newable objects.

{:.ref-header}
Related topics

*  [The `di.xml` file]({{ page.baseurl }}/extension-dev-guide/build/di-xml-file.html)
*  [ObjectManager]({{ page.baseurl }}/extension-dev-guide/object-manager.html)
*  [Plugins]({{ page.baseurl }}/extension-dev-guide/plugins.html)
*  [Routing]({{ page.baseurl }}/extension-dev-guide/routing.html)
*  [Magento application initialization and bootstrap]({{ page.baseurl }}/config-guide/bootstrap/magento-bootstrap.html)
*  [Module Dependencies]({{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_depend.html)
*  [Programming concepts]({{ page.baseurl }}/extension-dev-guide/api-concepts.html)

[Dependency Injection]: https://en.wikipedia.org/wiki/Dependency_injection
[dependency inversion principle]: http://www.oodesign.com/dependency-inversion-principle.html
[`di.xml`]: {{ page.baseurl }}/extension-dev-guide/build/di-xml-file.html
[`ObjectManager`]: {{ page.baseurl }}/extension-dev-guide/object-manager.html
[code compiler tool]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html
[proxies]: {{ page.baseurl }}/extension-dev-guide/proxies.html
[proxy]: {{ page.baseurl }}/extension-dev-guide/proxies.html
[factories]: {{ page.baseurl }}/extension-dev-guide/factories.html
[interceptors]: {{ page.baseurl }}/extension-dev-guide/plugins.html
[`Product`]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Catalog/Model/Product.php
