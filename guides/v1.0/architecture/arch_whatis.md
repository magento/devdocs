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

Magento is a highly-customizable e-commerce platform and content management system that is primarily used to build online storefronts or web sites for selling merchandise. Common e-commerce features, such as shopping carts and inventory management, are available in Magento.

Magento is written using the PHP programming language, and leverages elements of the Zend framework and the model-view-controller architecture. Magento runs on the MySQL relational database, and Magento schema and tables are included in the Magento installation package.

Object-oriented programming concepts are inherent in the Magento design, allowing for maximum flexibility and extensibility of the software components that results  in the ability to design and implement very customized web sites.

<h3 id="m2arch-whatis-archi"> Product architecture</h3>

Magento is a modular system, and comprises several key components used to build a custom application or web site. For example, Magento modules contain logic to fulfill required actions and functions, while themes and language packages are used to create the visual design and language capabilities.

The Magento platform provides core business logic and functionality in base classes, resource models, and data access capabilities that you can extend and customize. The Framework defines the fundamental concepts and rules for how the components of the web site can behave. Business logic components, which define how data is retrieved from the database and manipulated, are separate from the Framework.  In keeping with classic object-oriented programming methodology, the Magento platform provides core components with base functionality which can then be inherited by custom components for a specific web site or application. The final  behavior, look-and-feel, and capabilities of the web site are determined by how the components are extended and customized.

<div class="bs-callout bs-callout-info" id="info">

  <p>For more information about designing and extending the Magento components, refer to the <a href="{{ site.gdeurl }}extension-dev-guide/bk-extension-dev-guide.html">Extension Developer Guide</a>.</p>

</div>

The various components of Magento, in addition to the Magento Framework and Libraries, together form a powerful set of building blocks.

<h2 id="m2arch-related">Related topics</h2>

* <a href="{{ site.gdeurl }}architecture/arch_asmodsys.html">Magento as a modular system</a>

