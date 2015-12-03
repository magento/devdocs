---
layout: default
group: arch-guide
subgroup: Logical View
title: Third-Party libraries
menu_title: Third-Party libraries
menu_order: 5
github_link: architecture/archi_perspectives/third-party-libs.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/third-party-libs.html
---


<h2>Third-Party libraries</h2>

Magento is built with a set of external libraries. Composer, the package management system that Magento uses,  downloads all of the external libraries included in its main configuration file and installs them under its default installation directory (`vendor/`).  These files include Zend framework files, Braintree files, and Symfony libraries. For a complete list of third-party libraries that ship with Magento, look at the main `composer.json` file of your Magento installation.  


There are some required non-Magento libraries that Composer does not load. These reside in `lib/` and include JavaScript libraries (none of which are loaded by Composer) and a few PHP libraries. 


If you are extending your Magento storefront to interact with third-party applications, you might need to include external libraries. These external libraries can be as simple as a wrapper for an API of a third-party product you are integrating with your Magento storefront, or an entire framework. 



<h3>Related topics</h3>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/LogicalView_intro.html">Logical view</a>


<a href="{{ site.gdeurl }}architecture/Framework/framework.html">Magento Framework</a>
