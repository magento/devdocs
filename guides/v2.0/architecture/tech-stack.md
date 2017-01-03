---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Technology stack
menu_title: Technology stack
menu_order: 2
version: 2.0
github_link: architecture/tech-stack.md
redirect_from: /guides/v1.0/extension-dev-guide/tech-stack.html
---

## Overview

This page summarizes the technologies we use. For more detailed information, see the System Requirements:

*	[Version 2.0.x]({{ site.gdeurl }}install-gde/system-requirements.html)
*	[Version 2.1.x]({{site.gdeurl21}}install-gde/system-requirements-tech.html)

Magento's highly modular structure includes the following open-source technologies.

### Web servers

*	Apache
*	nginx

### PHP

*	Composer (dependency management package for PHP)

### Database

*	MySQL
*	MySQL Percona

### HTTP accelerator

*	Varnish

### Cache Storage

*	Redis
*	Memcache

### Search

* Solr (Magento Enterprise Edition only)
* Elasticsearch (Magento Enterprise Edition version 2.1.x only)

### Additional technologies

*	HTML5
*	CSS3 (LESS CSS pre-processor)
*	jQuery (primary JavaScript library)
*	RequireJS (library that helps load JavaScript resources on demand)
*	Knockout.js (simplifies JavaScript UIs with the Model-View-View Model pattern)
*	Third-party libraries (Zend Framework 1, Zend Framework 2, Symfony)
*	Coding standards PSR-0 (autoloading standard), PSR-1 (basic coding standards), and PSR-2 (coding style guide), PSR-3, PSR-4

### Optional stack components

*	Varnish (caching)
*	Redis (used for page caching)
*	Solr (search engine)
*	Elasticsearch (search engine)

Magento is *compatible with but not supported* for:

*	HHVM 3.9 PHP interpreter

### Automated testing

Magento also provides automated testing suites that include unit, integration, functional and performance test scripts, as well as JavaScript tests and tools for static code analysis. Components include PHPUnit for the unit test framework and Selenium for the functional test framework.

This framework is located in the `dev/tests` directory. The functional testing framework `mtf` can be found in a [separate repository](https://github.com/magento/mtf){:target="_blank"}.
For more information, see the [Functional Testing Framework]({{page.baseurl}}mtf/mtf_introduction.html) guide.

## Related topics
<a href="{{page.baseurl}}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>
