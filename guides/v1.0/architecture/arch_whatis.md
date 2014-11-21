---
layout: default-arch
title: What Is Magento?
---

<h1 id="m2arch-whatis">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/arch/mod_depend.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2arch-whatis-overview"> Overview</h2>
Magento is a highly-customizable e-commerce platform and content management system that is primarily used to build online storefronts, or web sites for selling merchandise. Common e-commerce features, such as shopping carts and inventory management, are available in Magento.

Magento is written using PHP programming language, and leverages elements of the Zend framework and the model-view-controller architecture. Magento runs on the MySQL relational database, and Magento schema and tables are included in the Magento installation package.

Object-oriented programming concepts are inherent in the Magento design, allowing for maximum flexibiltiy and extensibility of the software components, resulting in the ability to design and implement very customized web sites. 

<h3 id="m2arch-whatis-archi"> Product Architecture</h3>

Magento is a modular system, and comprises several key components used to build a custom application or web site. For example, Magento Modules contain logic to fulfill required actions and functions, while Themes, Areas, and Language Packages are used to create the visual design and language capabilities.

The Magento Framework provides core business logic and functionality, the base classes, resource models, and data access cappabilities. The fundamental concepts and rules for how the components of the web site can behave are defined in the Framework. So in keeping with classic object-oriented programming methodology, the Magento Framework provides core components with base functionality which can then be inherited by custom components for a specific web site or application. The final  behaviour, look-and-feel, and capabilities of the web site are determined by how the components are extended and customized. 
 
<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>For more information about designing and extending the Magento components, refer to the <a href="https://{{ site.baseurl }}index.html">Magento Documentation</a>.</p>
  </span>
</div>

The various components of Magento, in addition to the Magento Framework and Libraries, together form a powerful set of building blocks.

The following diagram shows the components of the Magento architecture:

<img src="{{ site.baseurl }}common/images/archi_m2_overview.jpg"/>

<h2 id="m2arch-related"> Related Topics</h2>

* <a href="{{ site.gdeurl }}architecture/arch_asmodsys.html">Magento as a Modular System</a>
* <a href="{{ site.gdeurl }}architecture/____.html">Magento Framework</a>
* <a href="{{ site.gdeurl }}architecture/mod-file-system.html">Magento File System</a>
* <a href="{{ site.gdeurl }}architecture/____.html">Magento Database</a>
* <a href="{{ site.gdeurl }}architecture/____.html">Commonly Used Terms</a>
