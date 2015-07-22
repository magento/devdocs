---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Technology stack
menu_title: Technology stack
menu_order: 2
github_link: extension-dev-guide/tech-stack.md
---
<h2>Magento technology stack</h2>

Magento’s highly modular structure includes the following open-source technologies:


Stack components include:

* PHP (5.5 and 5.6)

* Coding standards PSR-0 (autoloading standard), PSR-1 (basic coding standards), and PSR-2 (coding style guide), PSR-3, PSR-4

* HTML5

* CSS3 (LESS CSS pre-processor)

* JQuery (primary JavaScript library)

* RequireJS (library that helps load JavaScript resources on demand)
* Third-party libraries (Zend Framework 1, Zend Framework 2, Symfony)

* Apache 2.2, 2.4

* Nginx 1.7


* MySQL 5.6
* Composer (dependency management package for PHP) 

Optional stack components include:

* Varnish (caching)
* Redis (used for session or page caching)
* Solr (search engine)


Magento also provides an automated testing suite that includes test scripts for integration, functional areas, and performance. Components include PHPUnit for the unit test framework and Selenium for the functional test framework. 

This framework is included in `Magento/mtf`. For more information, see Magento Test Framework guide.

<h2>Related topics</h2>
<a href="{{ site.gdeurl }}architecture/stack-basics.html"> Stack basics</a>


<a href="{{ site.gdeurl }}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>