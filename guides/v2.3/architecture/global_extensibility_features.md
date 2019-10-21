---
group: architecture-guide
title: Global features that support extensibility
---

## Overview

Essential qualities foster extensibility throughout the entire set of Magento components. This discussion focuses on:

*  Modularity
*  Reliance on popular design patterns
*  Coding standards
*  Flexible attribute types
*  Web APIs
*  Service contracts and [dependency injection](https://glossary.magento.com/dependency-injection)
*  Plug-ins
*  Declarative schema

### Modularity

The concept of the *module* is the heart of Magento [extension](https://glossary.magento.com/extension) development, and modular design of software components (in particular, modules, themes, and language packages) is a core architectural principle of the product. Self-contained modules of discrete code are organized by feature, thereby reducing each module's external dependencies.

If a [module](https://glossary.magento.com/module) is self-contained, then you can modify or replace it without affecting other areas of the code. This *loose coupling* of software components reduces the ripple effects throughout your code base of changing code.

 See the [PHP Developer Guide]({{ page.baseurl }}/extension-dev-guide/bk-extension-dev-guide.html) for detailed instructions on how to create modules.

### Reliance on popular design patterns

Reliance on known architectural and programming structures helps [PHP](https://glossary.magento.com/php) developers orient themselves to the specific development issues that affect coding in a particular product ecosystem. This can reduce the learning curve for new Magento developers.

Design patterns are time-tested, widely recognized software architecture constructs. Magento product architecture incorporates many well known patterns, but Model-View-Controller (MVC) holds particular interest for extension developers.

### Coding standards

Magento developers should familiarize themselves with our coding standards, best practices, and conventions, especially standards for PHP file formatting, coding style, and file naming conventions. Magento standards are based on PSR2 Coding Standards.

See [Coding Standards]({{page.baseurl}}/coding-standards/bk-coding-standards.html) for guidelines and requirements.

### Rich product ecosystem

The wider Magento ecosystem provides an extensive community and rich third-party marketplace for extensions. Visit [Magento Marketplace](https://marketplace.magento.com/) for an overview of the many modules and themes available for download and to buy modules and [theme](https://glossary.magento.com/theme) packages, which offer more possibilities for extending your [storefront](https://glossary.magento.com/storefront).

### Flexible attribute types

You can enhance your storefront by adding unique attributes to the default product attributes. For example, you might need to add a new attribute to describe a product, such as texture or an industry-specific rating. You can add these attributes from the Magento Admin, and the storefront  displays them.

Attribute type | Displayed by storefront?
--- | ---
EAV | No
Custom | Yes
Extension | No

Attribute types fall into three general categories:

*  **EAV (Entity-Attribute-Value) attributes** are site-specific attributes that you can define for a local site using the [Magento Admin](https://glossary.magento.com/magento-admin).

*  **Custom attributes** are a subset of EAV attributes. Objects that use EAV attributes typically store values in several MySQL tables. The Customer and [Catalog](https://glossary.magento.com/catalog) modules use EAV attributes.

*  **Extension attributes** often use more [complex data](https://glossary.magento.com/complex-data) types than custom attributes. These attributes do not appear in the storefront. Extension attributes are introduced by modules.

See [PHP Developer Guide]({{page.baseurl}}/extension-dev-guide/bk-extension-dev-guide.html) for information about using attributes.

### Web APIs

Magento or third-party services can be configured as a web [API](https://glossary.magento.com/api) (REST or SOAP) with some simple [XML](https://glossary.magento.com/xml). You can use these services to integrate your Magento installation into third-party applications, such as CRM (Customer Relationship Management), ERP (Enterprise Resource Planning) back office systems, and [CMS](https://glossary.magento.com/cms) (Content Management Systems).

See [Getting Started with Magento Web APIs]({{page.baseurl}}/get-started/bk-get-started-api.html) for more information.

### Service contracts, dependency injection, and dependency inversion

*Service contracts* provide a new way to access public API endpoints. These PHP interfaces offer robust, stable extension points to which clients can connect.  Service contracts define the endpoints that function as a module's public API. Defining these endpoints is an essential part of adding a module.

Service contracts are discussed throughout the Magento documentation set. See [Service layer]({{page.baseurl}}/architecture/archi_perspectives/service_layer.html) for a high-level introduction. See [PHP Developer Guide]({{page.baseurl}}/extension-dev-guide/bk-extension-dev-guide.html) for a more detailed discussion of service contracts and dependency injection.

Magento implements *dependency injection* along with service contracts. Dependency injection provides a mechanism for changing a module's behavior without altering the client or understanding nitty-gritty details of implementation. Both dependency injection and its related concept *dependency inversion* support Magento's fundamental architectural principles of modularity and ease-of-extensibility. They strongly encourage basic coding practices that support the loose coupling of software modules.

See [PHP Developer Guide]({{page.baseurl}}/extension-dev-guide/bk-extension-dev-guide.html) for information on both dependency injection and service contracts.

### Plug-ins

Plug-ins, like modules, are a mechanism for adding features to the core Magento product. Plug-ins enable you to make changes to the behavior of any public method in a Magento class. You can consider it a form of extension that uses the `Plugin` class.

Plug-ins are also called *interceptors*. Applications use the [plug-in](https://glossary.magento.com/plug-in) pattern to change method behavior without modifying the actual class. Plug-ins can typically intercept method processing before or after the method runs, or only when the method throws an [exception](https://glossary.magento.com/exception).

See [Plug-ins]({{page.baseurl}}/extension-dev-guide/plugins.html) in [PHP Developer Guide]({{page.baseurl}}/extension-dev-guide/bk-extension-dev-guide.html) for information on declaring and prioritizing plug-ins.

### Declarative schema

[Declarative schema]({{page.baseurl}}/extension-dev-guide/declarative-schema/index.html) allows developers to declare the final desired state of the database as it pertains to their modules. The system adjusts to database changes automatically without performing redundant operations. Developers are no longer forced to write installation and upgrade scripts for each new version. In addition, declarative schema allows data be deleted when a module is uninstalled.

{:.ref-header}
Related topic

[Extensibility and modularity]({{page.baseurl}}/architecture/extensibility.html)
