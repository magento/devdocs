---
group: architecture-guide
title: Magento Framework
menu_title: Magento Framework
---

## Overview

The Magento Framework controls how application components interact, including request flow, routing, indexing, caching, and [exception](https://glossary.magento.com/exception) handling. It provides services that reduce the effort of creating modules that contain business logic, contributing to the goal of both making Magento code more modular as well as decreasing dependencies.

This primarily [PHP](https://glossary.magento.com/php) software component is organized into logical groups called *libraries*, which all modules can call.  Most of the framework code sits under the domain layer or encloses the presentation, service, and domain layers. The framework contains no business logic.
(Although the Magento Framework does not contain resource models, it does contain a [library](https://glossary.magento.com/library) of code to help implement a resource model.)

{:.bs-callout-tip}
Don't confuse the Magento Framework with the Zend web application framework that ships with Magento.

You should never modify Framework files, although if you are extending Magento, you must know how to call Framework libraries. Modules you create will typically inherit from classes and interfaces defined in the Framework directories.

## Responsibilities

The Magento Framework provides libraries that help reduce the effort of creating modules that contain business logic.

The Framework is responsible for operations that are useful for potentially all modules, including:

*  handling HTTP protocols

*  interacting with the database and filesystem

*  rendering content

## Organization

Here is the Magento Framework folder structure:

```tree
vendor/
    ../magento
        ../framework
lib/
    ../internal
        ../LinLibertineFont
    ../web
```

*  `/vendor/magento/framework`  contains only PHP code. These are libraries of code plus the application entry point that routes requests to modules (that in turn call the Framework libraries). For example,  libraries in the Framework help implement a resource model (base classes and interfaces to inherit from) but not the resource models themselves. Certain libraries also support [CSS](https://glossary.magento.com/css) rendering.

*  `/lib/internal` contains some non-PHP as well as PHP components. Non-PHP framework libraries includes [JavaScript](https://glossary.magento.com/javascript) and LESS/CSS.

*  `/lib/web` contains JavaScript and CSS/LESS files. These files reside  under `web` and not `internal` because they are accessible from a web browser, while the PHP code under `internal` is not. (Any code that a web browser must access should be under `web`, while everything else under `internal`.)

{:.bs-callout-tip}
The `vendor/magento/framework` directory maps to the `Magento\Framework` [namespace](https://glossary.magento.com/namespace).

## Highlights of Magento Framework

The Magento Framework (`lib/internal/Magento/Framework/`) provides a robust range of functionality. If you are an [extension](https://glossary.magento.com/extension) developer, you may be interested in this subset of Framework namespaces.

|Namespace|Purpose|
|--- |--- |
|`Magento\Framework\DataObject`|Provides standard functionality for storing and retrieving data through magic methods. This is the base class for many Magento classes.|
|`Magento\Framework\Model`|Contains base Model classes that almost all Magento Model classes extend from.|
|`Magento\Framework\Model\AbstractModel`||
|`Magento\Framework\Model\ResourceModel\AbstractResource`||
|`Magento\Framework\Controller`|Contains classes to help return different types of results (for example, JSON and redirects).|
|`Magento\Framework\View`|Contains code to render pages and layouts.|
|`Magento\Framework\Data`|Contains additional classes that handle forms.|
|`Magento\Framework\Url`|Contains code to look up other pages in Magento.|
{:style="table-layout:auto"}

Other namespaces under `Magento\Framework` that will interest extension developers:

|Namespace|Purpose|
|--- |--- |
|`Magento\Framework\ObjectManager`|Used to provide dependency injection.|
|`Magento\Framework\App`|Contains framework code that has knowledge about the Magento application. This code bootstraps the application and reads in the initial configuration. It also contains the entry point to the command line tools, the web application, and the cron job. And finally, it routes requests while providing the deployment context (such as reading in the configuration for the database configuration, languages, and caching systems).|
|`Magento\Framework\Api`|Contains base classes for advanced functionality of extendable objects through the system (that is, objects that can be extended to add new data through Magento Marketplace extensions).|
|`Magento\Framework\Config`|Contains the generic configuration reader. Each config file has its own specialized reader extending these classes.|
|`Magento\Framework\Filesystem`|Contains classes that handle reading from and writing to the file system.|
|`Magento\Framework\HTTP\PhpEnvironment`||
|`Magento\Framework\Session`||
|`Magento\Framework\Stdlib\Cookie`|Code to handle the HTTP request/responses as well as session/cookies is found here.|
|`Magento\Framework\Exception`|Contains the basic exceptions that are thrown throughout the Magento codebase.|
|`Magento\Framework\Event`|Contains the code that publishes synchronous events and that handles observers for any Magento event is handled here.|
|`Magento\Framework\Validator`|Contains the code that validates data (currencies, not empty) and that handles observers for any Magento event.|
{:style="table-layout:auto"}
