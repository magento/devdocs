---
group: php-developer-guide
title: ObjectManager
---

## Overview

Large applications, such as the Magento application, use an object manager to avoid boilerplate code when composing objects during instantiation.

In the Magento framework, the implementation of the [`ObjectManagerInterface`][] performs the duties of an object manager.

{:.bs-callout-warning}
Magento prohibits the direct use of the `ObjectManager` in your code because it hides the real dependencies of a class.
See [usage rules][].

## Responsibilities

The object manager has the following responsibilities:

-  Object creation in factories and proxies
-  Implementing the singleton pattern by returning the same shared instance of a class when requested
-  Dependency management by instantiating the preferred class when a constructor requests its interface
-  Automatically instantiating parameters in class constructors

## Configuration

The [`di.xml`][] file configures the object manager and tells it how to handle [dependency injection][].

This file specifies the preferred implementation class the object manager generates for the interface declared in a class constructor.
The file also specifies whether the object manager should create an object for every request or treat the object as a singleton.

## Usage rules

The Magento framework uses the `ObjectManager` to generate and inject the classes declared in your constructor.
Classes should not ask for the `ObjectManager` itself as a constructor dependency.

You do not call the object manager directly because the framework handles this automatically.
Direct use of the `create` function prevents type validation and type hinting that a [factory][] class provides.

Object creation is also a separate responsibility that should be moved to a dedicated class such as a [factory][] or [proxy][].
In most cases, the framework generates these classes automatically during code compilation.

{:.bs-callout-warning}
You may notice in the Magento 2 codebase that some core classes still call the `ObjectManager` directly.
This code needs porting or exist for backward compatibility purposes.
They are not tacit endorsements of using the `ObjectManager` directly.

### Exceptions

You can depend on and use the `ObjectManager` class in the following scenarios:

-  You can use the object manager in static magic methods like `__wakeup()`, `__sleep()`, etc.
   -  An example can be found in the `__wakeup()` method in the [`Magento/Eav/Model/Entity/Attribute/AbstractAttribute`][] class.
-  You can use the `ObjectManager` to maintain backward compatibility for a constructor.
-  In a global scope, like in fixtures of integration tests, you can use the object manager.
-  The object manager can be a dependency in classes used for creating objects such as factories or proxies.

### Programmatic product updates

If the Access Control List (ACL) rules contain incorrect settings, scripts that update products will fail validation.
This results in products assigned to the wrong store view with the wrong status.

To skip ACL validations, use the `ObjectManager` to set a dynamic dependency injection preference for `Magento\Framework\Authorization\PolicyInterface`.

``` php
$objectManager = $bootstrap->getObjectManager();
$objectManager->configure([
    'preferences' => [
        'Magento\Framework\Authorization\PolicyInterface' => 'Magento\Framework\Authorization\Policy\DefaultPolicy'
    ]
]);
```

{:.ref-header}
Related topics

-  [The `di.xml` file][`di.xml`]
-  [Dependency injection][]

[`ObjectManagerInterface`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/ObjectManagerInterface.php
[`di.xml`]: {{ page.baseurl }}/extension-dev-guide/build/di-xml-file.html
[dependency injection]: {{ page.baseurl }}/extension-dev-guide/depend-inj.html
[factory]: {{ page.baseurl }}/extension-dev-guide/factories.html
[proxy]: {{ page.baseurl }}/extension-dev-guide/proxies.html
[`Magento/Eav/Model/Entity/Attribute/AbstractAttribute`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Eav/Model/Entity/Attribute/AbstractAttribute.php
[Dependency injection]: {{ page.baseurl }}/extension-dev-guide/depend-inj.html

[usage rules]: #usage-rules
