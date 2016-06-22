---
layout: default
group: arch-guide
subgroup: Logical View
title: Third-Party libraries
menu_title: Third-party libraries
menu_order: 5
version: 2.0
github_link: architecture/archi_perspectives/third-party-libs.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/third-party-libs.html
---


<h2>Third-party libraries</h2>

Magento depends on a set of external libraries. You can use Composer to manage these dependencies. Composer downloads all of the external libraries that are included in its main configuration file and installs them under its default installation directory (`vendor/`). Third-party libraries  include Zend framework files and Symfony libraries.   


There are some required libraries that Composer does not load. These reside in `lib/` and include JavaScript libraries (none of which are loaded by Composer) and a few PHP libraries. (You can also use Composer  to manage dependencies between various components within Magento.)


If you are extending your Magento storefront to interact with third-party applications, you might need to include additional external libraries. These external libraries can be as simple as a wrapper for an API of a third-party product you are integrating with your Magento storefront, or an entire framework. 



<h3>Related topics</h3>

<a href="{{page.baseurl}}architecture/archi_perspectives/LogicalView_intro.html">Logical view</a>


<a href="{{page.baseurl}}architecture/Framework/framework.html">Magento Framework</a>


<a href="https://getcomposer.org/doc/00-intro.md" target="_blank">Composer</a> 
