---
group: installation-guide
title: Magento 2.3 technology stack requirements
functional_areas:
  - Install
  - System
  - Setup
---

## Operating systems (Linux x86-64)

Linux distributions, such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and similar.
Magento is not supported on:

*  Windows OS
*  Mac OS

## Memory requirement

Upgrading the Magento applications and extensions you obtain from Magento Marketplaces and other sources can require up to 2GB of RAM. If you are using a system with less than 2GB of RAM, we recommend you create a [swap file]({{ page.baseurl }}/comp-mgr/trouble/cman/out-of-memory.html); otherwise, your upgrade might fail.

## Composer (latest stable version)

[Composer][] is required for developers who wish to contribute to the Magento 2 codebase or anyone who wishes to develop Magento extensions.

## Web servers

*  [Apache 2.4][]

   In addition, you must enable the Apache `mod_rewrite` and `mod_version` modules. The [`mod_rewrite`][] module enables the server to perform URL rewriting. The [`mod_version`][] module provides flexible version checking for different `httpd` versions. For more information, see [our Apache documentation][].

*  [nginx 1.x][]

## Database

MySQL 5.6, 5.7

Magento is also compatible with MySQL NDB Cluster 7.4.*, MariaDB 10.0, 10.1, 10.2, Percona 5.7, and other binary-compatible MySQL technologies.

{:.bs-callout-info}
Magento only uses MySQL features compatible with MariaDB. MariaDB may not be compatible with all MySQL features, however, so be sure to research compatibility issues before using a feature in your Magento module.

## PHP

{:.bs-callout-info}
All 3rd party libraries now support PHP 7.2.
 If you are interested in participating in Magento Community projects we welcome your help! See our [ZenHub board][] for a full list of outstanding issues.

<!--{% assign supported_php_versions = site.data.codebase.v2_3.open-source.composer_lock.platform.php | split: "||" %}-->
{% include install/php-versions-template.md %}

Magento 2.3.1 is certified and tested on PHP 7.2.11.
Magento 2.3.3 adds support for PHP 7.3.

### Required PHP extensions

{:.bs-callout-info}
The [PHP installation instructions][] include a step for installing these extensions.

<!--{% assign platform-req = site.data.codebase.v2_3.open-source.composer_lock.platform %}-->
{% include install/php-extensions-template.md %}

Refer to [official PHP documentation][] for installation details.

### PHP OPcache

We strongly recommend you verify that [PHP OPcache][] is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our [PHP documentation][].

If you must install it separately, see the [PHP OPcache documentation][].

### PHP settings

We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see [Required PHP settings][].

## SSL

*  A valid [security certificate][] is required for HTTPS.
*  Self-signed SSL certificates are not supported.
*  Transport Layer Security (TLS) requirement - PayPal and `repo.magento.com` both require TLS 1.2 or later:

   *  [More information about PayPal][]

### Required system dependencies

Magento requires the following system tools for some of its operations:

*  [bash][]
*  [gzip][]
*  [lsof][]
*  [mysql][]
*  [mysqldump][]
*  [nice][]
*  [php][]
*  [sed][]
*  [tar][]

### Mail server

Mail Transfer Agent (MTA) or an SMTP server

## Technologies Magento can use

*  [Redis][] versions 3.2, 4.0, 5.0 (compatible with 2.4+) for page caching and session storage. Version 5.0 is highly recommended.
*  [Varnish]({{page.baseurl}}/config-guide/varnish/config-varnish.html) version 4.x, 5.2 or 6.2
*  [Elasticsearch]({{page.baseurl}}/config-guide/elasticsearch/es-overview.html)

   {{site.data.var.ee}} version 2.3.x supports the following Elasticsearch versions:

   *  Elasticsearch [6.x][]{:target="_blank"}

      Magento 2.3 uses [Elasticsearch PHP client][]{:target="_blank"} version 6.1.

      {:.bs-callout-warning}
      Magento still provides support for but does not recommend Elasticsearch [2.x and 5.x][].

      If you must run Elasticsearch 2.x or 5.x with Magento 2.3.1, you must change the Elasticsearch client version.

      Follow the instructions in [Change Elasticsearch Module][].

*  RabbitMQ 3.8.x (compatible with 2.0 and later)

   [RabbitMQ][]{:target="_blank"} can be used to publish messages to queue and to define the consumers that receive the messages asynchronously.

### {{site.data.var.ee}} only

*  Three master databases

   These [master databases][] provide scalability advantages for different functional areas of the Magento application such as checkout, orders, and all remaining Magento2 application tables.

### Optional but recommended

*  [php_xdebug 2.5.x][]{:target="_blank"} or later (development environments only; can have an adverse effect on performance)

{:.bs-callout-info}
There is a known issue with `xdebug` that can affect Magento installations or access to the storefront or Magento Admin after installation. For details, see [Known issue with xdebug][].

*  [`mcrypt`](http://php.net/manual/en/book.mcrypt.php){:target="_blank"} (for PHP < 7.2)
*  PHPUnit (as a command-line tool) 6.2.0

<!-- Link Definitions -->
[`mcrypt`]: http://php.net/manual/en/book.mcrypt.php
[Known issue with xdebug]: {{page.baseurl}}/install-gde/trouble/tshoot_install-issues.html
[php_xdebug 2.5.x]: http://xdebug.org/download.php
[master databases]: {{page.baseurl}}/config-guide/multi-master/multi-master.html
[bash]: https://www.gnu.org/software/bash/
[gzip]: https://www.gzip.org/
[lsof]: https://linux.die.net/man/8/lsof
[mysql]: https://www.mysql.com/
[mysqldump]: https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html
[nice]: https://linux.die.net/man/1/nice
[php]: http://www.php.net/
[sed]: https://www.gnu.org/software/sed/manual/sed.html
[tar]: https://linux.die.net/man/1/tar
[Change Elasticsearch Module]: {{ page.baseurl }}/config-guide/elasticsearch/es-downgrade.html
[Composer]: https://glossary.magento.com/composer
[Apache 2.4]: http://httpd.apache.org/download.cgi
[`mod_rewrite`]: https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html
[`mod_version`]: https://httpd.apache.org/docs/2.4/mod/mod_version.html
[our Apache documentation]: {{page.baseurl}}/install-gde/prereq/apache.html
[nginx 1.x]: https://nginx.org/en/download.html
[ZenHub board]: https://app.zenhub.com/workspace/o/magento-engcom/php-7.2-support/boards?repos=116423356,116426364,115111902
[PHP installation instructions]: prereq/php-settings.html
[official PHP documentation]: http://php.net/manual/en/extensions.php
[PHP OPcache]: http://php.net/manual/en/intro.opcache.php
[PHP documentation]: prereq/php-settings.html
[PHP OPcache documentation]: http://php.net/manual/en/opcache.setup.php
[Required PHP settings]: {{ page.baseurl }}/install-gde/prereq/php-settings.html
[security certificate]: https://glossary.magento.com/security-certificate
[More information about PayPal]: {{page.baseurl}}/install-gde/system-requirements_tls1-2.html
[Redis]: {{page.baseurl}}/config-guide/redis/config-redis.html
[Varnish]: {{page.baseurl}}/config-guide/varnish/config-varnish.html
[Elasticsearch]: {{page.baseurl}}/config-guide/elasticsearch/es-overview.html
[6.x]: https://www.elastic.co/downloads/past-releases/elasticsearch-6-6-1
[Elasticsearch PHP client]: https://github.com/elastic/elasticsearch-php
[2.x and 5.x]: https://www.elastic.co/support/eol
[RabbitMQ]: {{page.baseurl}}/config-guide/mq/rabbitmq-overview.html
