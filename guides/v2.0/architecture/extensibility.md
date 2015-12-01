---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Extensibility and modularity
menu_title: 
menu_node: 
menu_order: 
github_link: architecture/extensibility.md
---

<h2 id="m2arch-whatis-overview">Extensibility and modularity</h2>


Product <i>extensibility</i> describes how easy  it is to expand  a product's feature set. An extensible product has been designed from its earliest planning stages for  customization and enhancement. It is designed for ease in  augmenting your installation's feature set, enriching current features, and integrating with third-party software.


Maximizing extensibility has been our goal through all aspects of Magento development.  Core tasks such as Shipping are packaged as discrete modules, and you expand your storefront features by installing modules that you either buy from third-party vendors or create yourself. While logic specific to each shipping carrier is packaged in a discrete module, you can easily add or delete shipping providers by simply adding or deleting modules. The Magento Framework provides common logic to control routing and other core application functions.  

Explore Magento's potential for customization through these topics: 

* <a href="{{ site.gdeurl }}architecture/global_extensibility_features.html">Global product features that support extension development</a>
* <a href="{{ site.gdeurl }}architecture/frontend_custom_strategies.html">Ease of frontend customization</a>


<h3>What makes a product extensible? </h3>

<i>Magento extensibility</i> describes the product's built-in ability for developers and merchants to routinely extend their storefront’s capabilities as their business grows. 


The effort involved in extending a product is influenced by: 

* <b>architectural principles that guide product structure</b>. Central to the Magento model of software development is the practice of replacing or extending core code rather than editing it. This strategy enables you to maintain the integrity of the tested code we provide while still extensively customizing your storefront.


* <b>open-source software to create and manage extensions</b>. Magento is built on open-source technologies, built by and for the development community. It uses Composer, an open-source tool, to manage dependencies. See <a href="{{ site.gdeurl }}architecture/tech-stack.html">Technology Stack</a>  for a complete list. 

* <b>coding standards</b>. Adherence to  standard best practices for PHP and JavaScript code ensures that the code base is sound. Magento has adopted most of the Zend Framework Coding Standards for PHP. See <a href="{{ site.gdeurl }}coding-standards/bk-coding-standards.html">Coding Standards</a> for more information.

* <b>upgrade and versioning strategies</b>. Magento has well-defined upgrade and versioning strategies that can help you avoid any problems with software component dependencies. Add modules after confirming that the module version is compatible with the Magento Framework version. See  <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">Installation Guide</a> for more information. 


<h3 id="m2arch-related">Related topics</h3>


<a href="{{ site.gdeurl }}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>






