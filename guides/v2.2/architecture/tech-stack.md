---
group: arch-guide
subgroup: Architectural Basics
title: Technology stack
menu_title: Technology stack
menu_order: 2
version: 2.2
redirect_from: /guides/v1.0/extension-dev-guide/tech-stack.html
---

## Overview

This page summarizes the technologies we use. For more detailed information, see the [System Requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html).

Magento's highly modular structure includes the following open-source technologies.

### Web servers

*	Apache
*	{% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %}

### PHP

*	{% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} (dependency management package for PHP)

### Database

*	MySQL
*	MySQL Percona

### HTTP accelerator

*	Varnish

### Cache storage

*	Redis
*	Memcache

### Search

* Solr ({{site.data.var.ee}})
* Elasticsearch ({{site.data.var.ee}} - 2.1.x only)

### Additional technologies

*	HTML5
*	CSS3 (LESS {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} pre-processor)
*	{% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} (primary {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} library)
*	RequireJS (library that helps load JavaScript resources on demand)
*	Knockout.js (simplifies JavaScript UIs with the Model-View-View Model pattern)
*	Third-party libraries (Zend Framework 1, Zend Framework 2, Symfony)
*	Coding standards PSR-0 (autoloading standard), PSR-1 (basic coding standards), and PSR-2 (coding style guide), PSR-3, PSR-4

### Optional stack components

*	Varnish (caching)
*	Redis (used for page caching)
*	Solr (search engine)
*	Elasticsearch (search engine)

Magento 2.2 and above only supports PHP7+ and is no longer compatible with HipHop Virtual Machine(HHVM).

### Automated testing

Magento also provides automated testing suites that include unit, integration, functional and performance test scripts, as well as JavaScript tests and tools for static code analysis. Components include PHPUnit for the unit test framework and Selenium for the functional test framework.

This framework is located in the `dev/tests` directory. The functional testing framework `mtf` can be found in a [separate repository](https://github.com/magento/mtf){:target="_blank"}.
For more information, see the [Functional Testing Framework]({{ page.baseurl }}/mtf/mtf_introduction.html) guide.

## Related topics

<a href="{{ page.baseurl }}/architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>
