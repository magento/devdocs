---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Extensibility and modularity
menu_title: 
menu_node: 
menu_order: 
version: 2.0
github_link: architecture/extensibility.md
---

<h2 id="m2arch-whatis-overview">Extensibility and modularity</h2>


Product <i>extensibility</i> describes how easy  it is to expand  a product's feature set. An extensible product has been designed from its earliest  stages for  customization and enhancement. Extensible products are designed for ease in expanding your installation's feature set, enriching current features, and integrating with third-party software.


Maximizing extensibility has been our goal through all aspects of Magento development.  Core tasks such as shipping are packaged as discrete modules, and you expand your features by installing modules that you either buy from third-party vendors or create yourself. While logic specific to each shipping carrier is packaged in a discrete module, you can easily add or delete shipping providers by simply adding or deleting modules. The Magento Framework provides common logic to control routing and other core application functions.  




<h3>What makes a product extensible? </h3>

<i>Magento extensibility</i> describes the product's built-in ability for developers and merchants to routinely extend their storefront’s capabilities as their business grows. 


<h4>Which factors affect extensibility?</h4>

* <b>architectural principles that guide product structure</b>. Central to the Magento model of software development is the practice of replacing or extending core code rather than editing it. This strategy supports your efforts to maintain the integrity of the tested code we provide while still extensively customizing your storefront.


* <b>open-source software to create and manage extensions</b>. Magento is built on open-source technologies, built  for the development community. It uses Composer, an open-source tool, to manage dependencies. See <a href="{{page.baseurl}}architecture/tech-stack.html">Technology Stack</a>  for a complete list. 

* <b>coding standards</b>. Adherence to  standard best practices for PHP and JavaScript code ensures that the code base is sound. Magento has adopted most of the Zend Framework Coding Standards for PHP. See <a href="{{page.baseurl}}coding-standards/bk-coding-standards.html">Coding Standards</a> for more information.

* <b>upgrade and versioning strategies</b>. Magento has well-defined upgrade and versioning strategies that can help you avoid any problems with software component dependencies. Add modules after confirming that the module version is compatible with the Magento Framework version. 


<h3 id="m2arch-related">Related topics</h3>


<a href="{{page.baseurl}}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>

<a href="{{page.baseurl}}architecture/global_extensibility_features.html">Global product features that support extension development</a>

<a href="{{page.baseurl}}architecture/frontend_custom_strategies.html">Ease of frontend customization</a>







