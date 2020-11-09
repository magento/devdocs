---
group: architecture-guide
title: Technology stack
---

## Overview

This page summarizes the technologies we use. For more detailed information, see the [System Requirements]({{page.baseurl}}/install-gde/system-requirements.html).

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

### Cache Storage

*  Redis

### Search

*  Elasticsearch ({{site.data.var.ee}} in Magento Open Source version 2.3.x)

### Additional technologies

*  HTML5
*  CSS3 (LESS [CSS](https://glossary.magento.com/css) pre-processor)
*  [jQuery](https://glossary.magento.com/jquery) (primary [JavaScript](https://glossary.magento.com/javascript) library)
*  RequireJS (library that helps load JavaScript resources on demand)
*  Knockout.js (simplifies JavaScript UIs with the Model-View-View Model pattern)
*  Third-party libraries (Zend Framework 1, Zend Framework 2, Laminas, Symfony)
*  Coding standards PSR-0 (autoloading standard), PSR-1 (basic coding standards), and PSR-2 (coding style guide), PSR-3, PSR-4

For Magento 2.3.5, we have started porting unsupported Zend components to the [Laminas framework](https://www.zend.com/blog/evolution-zend-framework-laminas-project).

### Optional stack components

*  Varnish (caching)
*  Redis (used for page caching)
*  Elasticsearch (search engine)
*  RabbitMQ (message queue)

### Automated testing

Magento also provides automated testing suites that include unit, integration, functional and performance test scripts, as well as JavaScript tests and tools for static code analysis. Components include PHPUnit for the unit test framework and Selenium for the functional test framework.

Testing frameworks are located in the `dev/tests` directory. Refer to our [Magento Testing Guide]({{page.baseurl}}/test/testing.html) to learn more about the frameworks and associated tests.

The Magento Functional Test Framework (MFTF) is the successor to MTF. You can read more in the [Intro to MFTF](https://devdocs.magento.com/mftf/docs/introduction.html). The functional testing framework `mftf` can be found in a [separate repository](https://github.com/magento/mftf){:target="_blank"}.

{:.ref-header}
Related topics

[Architectural basics]({{page.baseurl}}/architecture/archi_perspectives/ABasics_intro.html)
