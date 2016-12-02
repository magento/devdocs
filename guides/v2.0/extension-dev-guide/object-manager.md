---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: ObjectManager
menu_title: ObjectManager
menu_order: 5
version: 2.0
github_link: extension-dev-guide/object-manager.md
---
## {{page.menu_title}}
{:.no_toc}


## Overview

Large applications, such as the Magento application, use an object manager to avoid boilerplate code when composing objects during instantiation.

In the Magento framework, the implementation of the [`ObjectManagerInterface`]({{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManagerInterface.php){:target="_blank"} performs the duties of an object manager.

<div class="bs-callout bs-callout-warning" markdown="1">
Magento prohibits the direct use of the `ObjectManager` in your code because it hides the real dependencies of a class.
See [usage rules](#usage-rules).
</div>

## Responsibilities

The object manager has the following responsibilities:

* Object creation in factories and proxies.
* Implementing the singleton pattern by returning the same shared instance of a class when requested.
* Dependency management by instantiating the preferred class when a constructor requests its interface.
* Automatically instantiating parameters in class constructors.

## Configuration

The [`di.xml`]({{page.baseurl}}extension-dev-guide/build/di-xml-file.html) file configures the object manager and tells it how to handle [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html).

This file specifies the preferred implementation class the object manager generates for the interface declared in a class constructor.

The file also specifies whether the object manager should create an object for every request or treat the object as a singleton.

## Usage rules

The Magento framework uses the `ObjectManager` to generate and inject the classes declared in your constructor.
Classes should not ask for the `ObjectManager` itself as a constructor dependency.

You do not call the object manager directly because the framework handles this automatically.
Direct use of the `create` function prevents type validation and type hinting that a [factory]({{page.baseurl}}extension-dev-guide/factories.html) class provides.

Object creation is also a separate responsibility that should be moved to a dedicated class such as a [factory]({{page.baseurl}}extension-dev-guide/factories.html) or [proxy]({{page.baseurl}}extension-dev-guide/proxies.html}}).
In most cases, the framework generates these classes automatically during code compilation.

<div class="bs-callout bs-callout-warning" markdown="1">
You may notice in the Magento 2 codebase that some core classes still call the `ObjectManager` directly.

This code needs porting or exist for backward compatibility purposes.

They are not tacit endorsements of using the `ObjectManager` directly.
</div>

### Exceptions

You can depend on and use the `ObjectManager` class in the following scenarios:

* You can use the object manager in static magic methods like `__wakeup()`, `__sleep()`, etc.
  * An example can be found in the `__wakeup()` method in the [`Magento/Eav/Model/Entity/Attribute/AbstractAttribute`]({{site.mage2000url}}app/code/Magento/Eav/Model/Entity/Attribute/AbstractAttribute.php){:target="_blank"} class.
* You can use the `ObjectManager` to maintain backward compatibility for a constructor.
* In a global scope, like in fixtures of integration tests, you can use the object manager.
* The object manager can be a dependency in classes used for the creation of objects, e.g. factories or proxies.

**Related topics**

*	[The `di.xml` file]({{page.baseurl}}extension-dev-guide/build/di-xml-file.html)
* [Dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html)
