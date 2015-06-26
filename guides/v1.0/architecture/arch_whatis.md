---
layout: default
group: arch-guide
subgroup: Architecture
title: What is Magento?
menu_title: What is Magento?
menu_order: 1
github_link: architecture/arch_whatis.md
---

<h2 id="m2arch-whatis-overview">What is Magento?</h2>

Magento is a highly customizable e-commerce platform and content management system that you can use to build online storefronts or web sites for selling merchandise. Magento provides common e-commerce features, such as shopping carts and inventory management, and encourages extensive customization to meet your organization’s specific goals. 

The essential principles of Magento’s powerful and highly scalable product architecture include:

<h3>OOP architecture and programming principles</h3> are inherent in Magento’s design. OOP design allows for maximum flexibility and extensibility of software components, permitting you to design and implement highly customized web sites. The benefits of OOPs include incorporation of industry-standard programming design patterns and the strict separation of business logic from presentation. Object inheritance is important, too: In keeping with classic object-oriented programming methodology, the Magento platform provides core components with base functionality that can be inherited by custom components for a specific web site or application.

<h3>Strongly layered product architecture</h3> supports the separation of visual presentation from business logic. This compartmentalization simplifies customization of store appearance and behavior. Architectural layers also provide programmers with a high level-model for understanding the most optimal placement of features and code in a complex system. Magento tweaks the classic Model-View-Controller architectural model, though: Files are typically grouped by functionality rather than file type. 

Magento layers include:

* <b>Magento Framework</b> defines the fundamental concepts and rules for how the components of the web site can behave. The Magento framework contains libraries but no business logic components. 

* <b>Presentation/View layer, Service layer, and Business Logic layers</b> provide core business logic and functionality in base classes, resource models, and data access capabilities that you can extend and customize. Business logic rules, which define how data is retrieved from the database and manipulated, are stored in the Business Logic layer. 

 * <b>Database layer</b> MySQL relational database
 
 <h3>Ease of extensibility</h3>
 Magento uses dependency injection and service contracts to simplify the process of supplying a new implementation of a defined API.  
 
 Dependency injection benefits include:
  
* the client that uses a module or service can remain ignorant of the module’s or service’s  implementation details
 
* you can replace a module by a similar one without altering the client from anywhere you use the dependency injection framework to wire application logic together.
Service Contracts provide a new way to access public API endpoints. These PHP interfaces to modules streamline the use of APIs for most modules. 

<h3>Modularity</h3>
Modules form the basic functional unit of a Magento system. Magento modules contain the logic to execute required actions and functions, while you use themes and language packages to create your store’s visual design and language capabilities. 

<h3>Highly customizable store branding</h3>
 through use of PHP-, HTML5- and CSS3 -based default themes and language packages. Your site’s final behavior and look-and-feel is determined by how you extend and customize core components. Multilevel theme inheritance.
 
 <h3>Strong stack of open-source technologies</h3>
 that together create a robust toolset for deploying large, distributed storefronts and for customizing the product for your particular needs.

With Magento 2.0, the Magento product architecture continues its evolution toward increased modularity.


<div class="bs-callout bs-callout-info" id="info">

  <p>For more information about designing and extending the Magento components, refer to the <a href="{{ site.gdeurl }}extension-dev-guide/bk-extension-dev-guide.html">Extension Developer Guide</a>.</p>

</div>


<h2 id="m2arch-related">Related topics</h2>

* <a href="{{ site.gdeurl }}architecture/arch_asmodsys.html">Magento as a modular system</a>

