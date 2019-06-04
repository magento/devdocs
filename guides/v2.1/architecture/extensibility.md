---
group: architecture-guide
title: Extensibility and modularity
menu_title: Extensibility and modularity
---

## Overview

Product *extensibility* describes how easy it is to expand a product's feature set. An extensible product has been designed from its earliest  stages for customization and enhancement. Extensible products are designed for ease in expanding your installation's feature set, enriching current features, and integrating with third-party software.

Maximizing extensibility has been our goal through all aspects of Magento development. Core tasks such as shipping are packaged as discrete modules, and you expand your features by installing modules that you either buy from third-party vendors or create yourself. While logic specific to each [shipping carrier](https://glossary.magento.com/shipping-carrier) is packaged in a discrete module, you can easily add or delete shipping providers by simply adding or deleting modules. The Magento Framework provides common logic to control routing and other core application functions.

## What makes a product extensible?

*Magento extensibility* describes the product's built-in ability for developers and merchants to routinely extend their storefront's capabilities as their business grows.

The following factors significantly affect extensibility.

### Architectural principles that guide product structure

Central to the Magento model of software development is the practice of replacing or extending core code rather than editing it. This strategy supports your efforts to maintain the integrity of the tested code we provide while still extensively customizing your [storefront](https://glossary.magento.com/storefront).

### Reliance on popular design patterns

Reliance on known architectural and programming structures helps {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} developers orient themselves to the specific development issues that affect coding in a particular product ecosystem. This can reduce the learning curve for new Magento developers.

Design patterns are time-tested, widely recognized software architecture constructs. Magento product architecture incorporates many well known patterns, but Model-View-Controller (MVC) holds particular interest for extension developers.

### Modularity

The concept of the *module* is the heart of Magento {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} development, and modular design of software components (in particular, modules, themes, and language packages) is a core architectural principle of the product. Self-contained modules of discrete code are organized by feature, thereby reducing each module's external dependencies.

If a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is self-contained, then you can modify or replace it without affecting other areas of the code. This *loose coupling* of software components reduces the ripple effects throughout your code base of changing code.

 See the [PHP Developer Guide][] for detailed instructions on how to create modules.

### Rich product ecosystem

The wider Magento ecosystem provides an extensive community and rich third-party marketplace for extensions. Visit [Magento Marketplace][] for an overview of the many modules and themes available for download and to buy modules and {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} packages, which offer more possibilities for extending your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.

### Open-source software to create and manage extensions

Magento is built on open-source technologies, created for the development community. For example, it uses [Composer](https://glossary.magento.com/composer) to manage dependencies. See [Technology Stack]({{page.baseurl}}/architecture/tech-stack.html) for a complete list of technologies used.

### Coding standards

Adherence to standard best practices for [PHP](https://glossary.magento.com/php) and [JavaScript](https://glossary.magento.com/javascript) code ensures that the code base is sound. Magento has adopted most of the PSR2 Coding Standards for PHP. See [Coding Standards]({{page.baseurl}}/coding-standards/bk-coding-standards.html) for more information.

### Upgrade and versioning strategies

Magento has well-defined upgrade and versioning strategies that can help you avoid any problems with software component dependencies. Add modules after confirming that the [module](https://glossary.magento.com/module) version is compatible with the Magento Framework version.

### Web APIs

Magento or third-party services can be configured as a web {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} (REST or SOAP) with some simple {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %}. You can use these services to integrate your Magento installation into third-party applications, such as CRM (Customer Relationship Management), ERP (Enterprise Resource Planning) back office systems, and {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} (Content Management Systems).

See [Getting Started with Magento Web APIs][] for more information.

### Flexible attribute types

You can enhance your storefront by adding unique attributes to the default product attributes. For example, you might need to add a new attribute to describe a product, such as texture or an industry-specific rating. You can add these attributes from the Magento Admin, and the storefront  displays them.

|Attribute type|Displayed by storefront?|
|--- |--- |
|EAV|no|
|Custom|yes|
|Extension|no|
{:style="table-layout:auto;"}

Attribute types fall into three general categories:

* **EAV (Entity-Attribute-Value) attributes** are site-specific attributes that you can define for a local site using the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.

* **Custom attributes** are a subset of EAV attributes. Objects that use EAV attributes typically store values in several MySQL tables. The Customer and {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}Catalog{% endglossarytooltip %} modules use EAV attributes.

* **Extension attributes** often use more {% glossarytooltip fd9ae55f-ccf5-480b-a7f3-bd2c80f0b2a4 %}complex data{% endglossarytooltip %} types than custom attributes. These attributes do not appear in the storefront. Extension attributes are introduced by modules.

See [PHP Developer Guide][] for information about using attributes.

### Service contracts, dependency injection, and dependency inversion

*Service contracts* provide a new way to access public API endpoints. These PHP interfaces offer robust, stable extension points to which clients can connect.  Service contracts define the endpoints that function as a module's public API. Defining these endpoints is an essential part of adding a module.

Service contracts are discussed throughout the Magento documentation set. See [Service layer][] for a high-level introduction. See [PHP Developer Guide][] for a more detailed discussion of service contracts and dependency injection.

Magento implements *dependency injection* along with service contracts. Dependency injection provides a mechanism for changing a module's behavior without altering the client or understanding nitty-gritty details of implementation. Both dependency injection and its related concept *dependency inversion* support Magento's fundamental architectural principles of modularity and ease-of-extensibility. They strongly encourage basic coding practices that support the loose coupling of software modules.

See [PHP Developer Guide][] for information on both dependency injection and service contracts.

### Plug-ins

Plug-ins, like modules, are a mechanism for adding features to the core Magento product. Plug-ins enable you to make changes to the behavior of any public method in a Magento class. You can consider it a form of extension that uses the `Plugin` class.

Plug-ins are also called *interceptors*. Applications use the {% glossarytooltip 9fceecbe-31be-4e49-aac7-11d155a85382 %}plug-in{% endglossarytooltip %} pattern to change method behavior without modifying the actual class. Plug-ins can typically intercept method processing before or after the method runs, or only when the method throws an {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %}.

See [Plug-ins][] in [PHP Developer Guide][] for information on declaring and prioritizing plug-ins.

## Related topics {#m2arch-related}

[Architectural basics]({{page.baseurl}}/architecture/archi_perspectives/ABasics_intro.html)

[Global features that support extensibility]({{page.baseurl}}/architecture/global_extensibility_features.html)

[Ease of frontend customization]({{page.baseurl}}/architecture/frontend_custom_strategies.html)

[Extensibility and modularity]({{page.baseurl}}/architecture/extensibility.html)

<!-- Link definitions -->
[PHP Developer Guide]: {{page.baseurl}}/extension-dev-guide/bk-extension-dev-guide.html
[Magento Marketplace]: https://marketplace.magento.com/
[Technology Stack]: {{page.baseurl}}/install-gde/system-requirements-tech.html
[Plug-ins]: {{page.baseurl}}/extension-dev-guide/plugins.html
[Service layer]: {{page.baseurl}}/architecture/archi_perspectives/service_layer.html
[Getting Started with Magento Web APIs]: {{page.baseurl}}/get-started/bk-get-started-api.html
[Coding Standards]: {{page.baseurl}}/coding-standards/bk-coding-standards.html