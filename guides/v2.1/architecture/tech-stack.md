---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Technology stack
menu_title: Technology stack
menu_order: 2
github_link21: architecture/tech-stack.md
---
<h2>Magento technology stack</h2>

Magento’s highly modular structure includes the following open-source technologies:



<b>Web servers</b>

* Apache 2.x

* Nginx 1.7+


<b>PHP</b>

*  5.5, 5.6x, 7.0

<b>Database</b>

* MySQL 5.6.x
* MySQL Percona 5.6.x

<b>Reverse Proxy/Web Accelerator</b>

* Varnish 3.x

* Varnish 4.x


<b>Cache Storage</b>

* Redis 2.x
* Redis 3.x
* Memcache 1.4.x




<b>Search</b>

* Solr 4.x


<b>Additional technologies</b>



* HTML5

* CSS3 (LESS CSS pre-processor)

* JQuery (primary JavaScript library)

* RequireJS (library that helps load JavaScript resources on demand)
* Third-party libraries (Zend Framework 1, Zend Framework 2, Symfony)

* Coding standards PSR-0 (autoloading standard), PSR-1 (basic coding standards), and PSR-2 (coding style guide), PSR-3, PSR-4


* Composer (dependency management package for PHP) 




<b>Optional stack components</b> include:

* Varnish (caching)
* Redis (used for session or page caching)
* Solr (search engine)

Magento is <b>compatible with but not supported</b> for:

* HHVM 3.9 PHP interpreter 

Magento also provides an automated testing suite that includes test scripts for integration, functional areas, and performance. Components include PHPUnit for the unit test framework and Selenium for the functional test framework. 

This framework is included in `Magento/mtf`. For more information, see <a href="{{ site.gdeurl21 }}mtf/mtf_introduction.html">Functional Testing Framework guide</a>.

<h2>Related topics</h2>


<a href="{{ site.gdeurl21 }}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>