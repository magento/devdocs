---
layout: default
group: 
subgroup: 
title: Technology stack
menu_title: Technology stack
menu_order: 
version: 2.0
github_link: extension-dev-guide/arch-basics
---
<h2>Architectural basics</h2>

<h3>Magento technology stack</h3>
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


Magento also provides an automated testing suite that includes - amongst others - unit, integration, functional and performance test scripts. Components include PHPUnit for the unit test framework and Selenium for the functional test framework. 

This framework is included in `dev/tests`. The functional testing framework `mtaf` can be found in the separate repository https://github.com/magento/mtf. For more information, see the [Functional Testing Framework]({{page.baseurl}}mtf/mtf.html) guide.

<h3>Stack basics</h3>
Information about routing, caching, and indexing will be provided in a future sprint.

<h3>Backward compatibility</h3>

Merchants and developers want the process of upgrading between revisions of Magento 2 to be as easy as possible. For merchants, the process must be cost-effective, while developers want their extensions to be forward-compatible for as long as possible.

To help mitigate these concerns, this release introduces a backward compatibility (BC) policy for PHP code. Magento 2.0 uses Semantic Versioning 2.0.0 to indicate whether a change breaks backward compatibility. Version numbers are in the format MAJOR.MINOR.PATCH, where:

MAJOR indicates incompatible API changes

MINOR indicates backward-compatible functionality has been added

PATCH indicates backward-compatible bug fixes

The backward compatibility policy applies to PHP code annotated with @api

We promise to be backward compatible for classes and methods annotated with @api within MINOR and PATCH updates to our components. As changes are introduced, we will annotate methods with @deprecated. The methods will be removed only with the next MAJOR component version. MAJOR changes will be scheduled no more than once per year; likely during the holiday season when site changes are unlikely.
