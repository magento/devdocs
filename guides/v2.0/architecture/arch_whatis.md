---
layout: default
group: arch-guide
subgroup: A_Introduction
title: What is Magento?
menu_title: Introduction
menu_node: parent
menu_order: 1
version: 2.0
github_link: architecture/arch_whatis.md
redirect_from: /guides/v1.0/architecture/arch_whatis.html
---

#### Contents
{: .no_toc}

* TOC
{:toc}

## What is Magento? {#m2arch-whatis-overview}

Magento is a highly customizable e-commerce platform and content management system that you can use to build online storefronts or web sites for selling merchandise. Magento provides common e-commerce features, such as shopping carts and inventory management, and encourages extensive customization to meet your organization’s specific goals.

The essential principles of Magento’s powerful and highly scalable product architecture include:

### OOP architecture and programming principles {#m2arch-oop-architecture}
Object-Oriented Programming (OOP) design allows for maximum flexibility and extensibility of software components, permitting you to design and implement highly customized web sites. The advantages of OOP principles include incorporation of industry-standard programming design patterns and the strict separation of business logic from presentation. Object inheritance is important, too: in keeping with classic object-oriented programming methodology, the Magento platform provides core components with base functionality that can be inherited by custom components for a specific web site or application.

### Strongly layered product architecture {#m2arch-layered-product-architecture}
This supports the separation of visual presentation from business logic. This compartmentalization simplifies customization of store appearance and behavior. Architectural layers also provide programmers with a high level-model for understanding the  optimal placement of features and code in a complex system. Magento tweaks the classic Model-View-Controller architectural model, though: files within modules are typically grouped by functionality rather than file type.

The *Magento Framework* defines the fundamental concepts and rules for how the components of the web site can behave. The Magento framework contains libraries that modules access but no business logic components. It accepts HTTP requests and routes them to the appropriate module.

The Magento Framework is integrated with the following software layers:

* **Presentation layer** provides both view components (layouts, blocks, templates) and controllers, which process commands to and from the user interface. The presentation layer can also include web API service bindings. (We include these service bindings in this discussion of the presentation layer model because  web API calls come in through HTTP just like browser requests, and can be made via AJAX calls from the user interface. Consequently, while web API calls can originate from an external application, they  can also originate from the user interface.)

* **Service layer**, through the use of service contracts, defines the overall interface for interacting with business logic (for example, creating customers and getting tax rates). Service contracts simplify the process of replacing or modifying (via plugins) services.

* **Domain layer** provides core business logic and functionality in base classes, resource models, and data access capabilities that you can extend and customize. Business logic rules, which define how data is retrieved from the database and manipulated, are stored in the Business Logic layer.

### Ease of extensibility {#m2arch-extensibility}
Magento uses dependency injection and service contracts to simplify the process of supplying a new implementation of a defined API.

Dependency injection benefits include:

* the client that uses a module or service can remain ignorant of the module’s or service’s  implementation details

* you can modify a module without altering the client from anywhere you use the dependency injection framework to wire application logic together.

Service Contracts provide a new way to access public API endpoints. These PHP interfaces to modules streamline the use of APIs for most modules.

### Modularity {#m2arch-modularity}

A module is a basic functional unit of a Magento system. Magento modules contain the logic to execute required actions and functions. You extend the core feature set of Magento by writing and incorporating new modules into your installation. Use Magento themes and language packages to create your store’s visual design and language capabilities.

### Highly customizable store branding {#m2arch-store-branding}

Extend and customize the core components of your Magento store's PHP-, HTML5- and CSS3- based default themes and language packages to precisely control your site’s behavior and look-and-feel.

### Strong stack of open-source technologies {#m2arch-open-source-stack}

The Magento tech stack supplies a robust toolset for deploying large, distributed storefronts and for customizing the product for your particular needs. The Magento stack includes popular open-source technologies such as the Linux OS, Apache/Nginx server, MySQL, Zend, and Composer.

For a comprehensive description of the Magento technology stack, see [Magento Technology Stack]({{page.baseurl}}architecture/tech-stack.html){:target="_blank"}.

<div class="bs-callout bs-callout-info" id="info">

  <p>For more information about designing and extending the Magento components, refer to the <a href="{{page.baseurl}}extension-dev-guide/bk-extension-dev-guide.html" target="_blank">PHP Developer Guide</a>.</p>

</div>
