---
layout: default
group: arch-guide
title: Technology stack
version: 2.3
github_link: architecture/tech-stack.md
redirect_from: /guides/v1.0/extension-dev-guide/tech-stack.html
---

## Overview

This page summarizes the technologies we use. For more detailed information, see the [System Requirements]({{site.gdeurl23}}install-gde/system-requirements-tech.html).

Magento's highly modular structure includes the following open-source technologies.

### Web servers

*	Apache
*	{% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %}

### PHP

*	{% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} (dependency management package for PHP)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Magento, with assistance from our community, is implementing PHP 7.2 compatibility for our upcoming 2.3.0 release. Any backward-incompatibility issues will be resolved in this release, and all 3rd party libraries now support PHP 7.2. Fully tested 7.2 support will be delivered in following patch releases.

If you are interested in participating in Magento Community projects we welcome your help! See our <a href="https://app.zenhub.com/workspace/o/magento-engcom/php-7.2-support/boards?repos=116423356,116426364,115111902" target="_blank">ZenHub board</a> for a full list of outstanding issues.
</div>

### Database

*	MySQL
*	MySQL Percona

### HTTP accelerator

*	Varnish

### Cache Storage

*	Redis

### Search

* Elasticsearch (Magento Commerce versions 2.1.x and 2.2.x, and Magento Open Source version 2.3x)

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
*	Elasticsearch (search engine)
* RabbitMQ (message queue)

Magento 2.2+ does not support HipHop Virtual Machine (HHVM).

### Automated testing

Magento also provides automated testing suites that include unit, integration, functional and performance test scripts, as well as JavaScript tests and tools for static code analysis. Components include PHPUnit for the unit test framework and Selenium for the functional test framework.

This framework is located in the `dev/tests` directory. The functional testing framework `mtf` can be found in a [separate repository](https://github.com/magento/mtf){:target="_blank"}.
For more information, see the [Functional Testing Framework]({{page.baseurl}}/mtf/mtf_introduction.html) guide.

## Related topics
<a href="{{page.baseurl}}/architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>
