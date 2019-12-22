---
group: architecture-guide
title: Technology stack
---

## Overview

This page summarizes the technologies we use. For more detailed information, see the [System Requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).

Magento's highly modular structure includes the following open-source technologies.

### Web servers

*  Apache
*  [nginx](https://glossary.magento.com/nginx)

### PHP

*  [Composer](https://glossary.magento.com/composer) (dependency management package for PHP)

{:.bs-callout-info}
Magento, with assistance from our community, is implementing PHP 7.2 compatibility for our upcoming 2.3.0 release. Any backward-incompatibility issues will be resolved in this release, and all 3rd party libraries now support PHP 7.2. Fully tested 7.2 support will be delivered in following patch releases.
<br/><br/>
If you are interested in participating in Magento Community projects we welcome your help! See our [ZenHub board](https://app.zenhub.com/workspace/o/magento-engcom/php-7.2-support/boards?repos=116423356,116426364,115111902){:target="_blank"} for a full list of outstanding issues.

### Database

*  MySQL
*  MySQL Percona

### HTTP accelerator

*  Varnish

### Cache Storage

*  Redis

### Search

*  Elasticsearch ({{site.data.var.ee}} versions 2.1.x and 2.2.x, and Magento Open Source version 2.3.x)

### Additional technologies

*  HTML5
*  CSS3 (LESS [CSS](https://glossary.magento.com/css) pre-processor)
*  [jQuery](https://glossary.magento.com/jquery) (primary [JavaScript](https://glossary.magento.com/javascript) library)
*  RequireJS (library that helps load JavaScript resources on demand)
*  Knockout.js (simplifies JavaScript UIs with the Model-View-View Model pattern)
*  Third-party libraries (Zend Framework 1, Zend Framework 2, Symfony)
*  Coding standards PSR-0 (autoloading standard), PSR-1 (basic coding standards), and PSR-2 (coding style guide), PSR-3, PSR-4

### Optional stack components

*  Varnish (caching)
*  Redis (used for page caching)
*  Elasticsearch (search engine)
*  RabbitMQ (message queue)

Magento 2.2+ does not support HipHop Virtual Machine (HHVM).

### Automated testing

Magento also provides automated testing suites that include unit, integration, functional and performance test scripts, as well as JavaScript tests and tools for static code analysis. Components include PHPUnit for the unit test framework and Selenium for the functional test framework.

This framework is located in the `dev/tests` directory. The functional testing framework `mtf` can be found in a [separate repository](https://github.com/magento/mtf){:target="_blank"}.
For more information, see the [Functional Testing Framework]({{page.baseurl}}/mtf/mtf_introduction.html) guide.

{:.ref-header}
Related topics

[Architectural basics]({{page.baseurl}}/architecture/archi_perspectives/ABasics_intro.html)
