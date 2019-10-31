---
group: architecture-guide
subgroup: Architectural Basics
title: Technology stack
menu_title: Technology stack
menu_order: 2
---

## Overview

This page summarizes the technologies we use. For more detailed information, see the [System Requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html).

Magento's highly modular structure includes the following open-source technologies.

### Web servers

*  Apache
*  [nginx](https://glossary.magento.com/nginx)

### PHP

*  [Composer](https://glossary.magento.com/composer) (dependency management package for PHP)

### Database

*  MySQL
*  MySQL Percona

### HTTP accelerator

*  Varnish

### Cache storage

*  Redis
*  Memcache

### Search

*  Solr ({{site.data.var.ee}})
*  Elasticsearch ({{site.data.var.ee}} - 2.1.x only)

### Additional technologies

*  HTML5
*  CSS3 (Less [CSS](https://glossary.magento.com/css) pre-processor)
*  [jQuery](https://glossary.magento.com/jquery) (primary [JavaScript](https://glossary.magento.com/javascript) library)
*  RequireJS (library that helps load JavaScript resources on demand)
*  Knockout.js (simplifies JavaScript UIs with the Model-View-View Model pattern)
*  Third-party libraries (Zend Framework 1, Zend Framework 2, Symfony)
*  Coding standards PSR-0 (autoloading standard), PSR-1 (basic coding standards), and PSR-2 (coding style guide), PSR-3, PSR-4

### Optional stack components

*  Varnish (caching)
*  Redis (used for page caching)
*  Solr (search engine)
*  Elasticsearch (search engine)

Magento 2.2 and above only supports PHP7+ and is no longer compatible with HipHop Virtual Machine(HHVM).

### Automated testing

Magento also provides automated testing suites that include unit, integration, functional and performance test scripts, as well as JavaScript tests and tools for static code analysis. Components include PHPUnit for the unit test framework and Selenium for the functional test framework.

This framework is located in the `dev/tests` directory. The functional testing framework `mtf` can be found in a [separate repository](https://github.com/magento/mtf){:target="_blank"}.
For more information, see the [Functional Testing Framework]({{ page.baseurl }}/mtf/mtf_introduction.html) guide.

{:.ref-header}
Related topics

[Architectural basics]({{ page.baseurl }}/architecture/archi_perspectives/ABasics_intro.html)
