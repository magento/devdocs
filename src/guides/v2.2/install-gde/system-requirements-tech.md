---
group: installation-guide
title: Magento 2.2 technology stack requirements
functional_areas:
  - Install
  - System
  - Setup
---

### Operating systems (Linux x86-64)

A Linux distribution such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and so on.

### Memory requirement

Upgrading the Magento applications and extensions you obtain from Magento Marketplaces and other sources can require up to 2GB of RAM. If you are using a system with less than 2GB of RAM, we recommend you create a [swap file]({{ page.baseurl }}/comp-mgr/trouble/cman/out-of-memory.html); otherwise, your upgrade might fail.

### Composer (latest stable version)

[Composer](https://glossary.magento.com/composer) is required for developers who wish to contribute to the Magento 2 codebase or anyone who wishes to develop Magento extensions.

### Web servers

*  [Apache 2.2 or 2.4](http://httpd.apache.org/download.cgi)

   In addition, you must enable the Apache `mod_rewrite` and `mod_version` modules. The [`mod_rewrite`](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html) module enables the server to perform URL rewriting. The [`mod_version`](https://httpd.apache.org/docs/2.4/mod/mod_version.html) module provides flexible version checking for different `httpd` versions. For more information, see [our Apache documentation]({{ page.baseurl }}/install-gde/prereq/apache.html).

*  [nginx 1.x](https://nginx.org/en/download.html)

### Database

MySQL 5.6, 5.7

Magento is also compatible with MySQL NDB Cluster 7.4.&#42;, MariaDB 10.0, 10.1, 10.2, Percona 5.7, and other binary-compatible MySQL technologies.

 {:.bs-callout-info}
Magento only uses MySQL features compatible with MariaDB. MariaDB may not be compatible with all MySQL features, however, so be sure to research compatibility issues before using a feature in your Magento module.

### PHP

<!--{% assign supported_php_versions = site.data.codebase.v2_2.open-source.composer_lock.platform.php | split: "|" %}-->
{% include install/php-versions-template.md %}

The Magento 2.2.10 patch enables support for PHP 7.2.
Supported PHP versions for Magento 2.2.x are 7.2 and 7.1.
PHP 7.0 is no longer supported.

#### Required PHP extensions

 {:.bs-callout-info}
The [PHP]({{ page.baseurl }}/install-gde/prereq/php-settings.html) installation instructions include a step for installing these extensions.

<!--{% assign platform-req = site.data.codebase.v2_2.open-source.composer_lock.platform %}-->
{% include install/php-extensions-template.md %}

#### PHP OPcache

We strongly recommend you verify that [PHP OPcache](http://php.net/manual/en/intro.opcache.php) is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our [PHP]({{ page.baseurl }}/install-gde/prereq/php-settings.html) documentation.

If you must install it separately, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php).

#### PHP settings

We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

### SSL

*  A valid [security certificate](https://glossary.magento.com/security-certificate) is required for HTTPS.
*  Self-signed SSL certificates are not supported.
*  Transport Layer Security (TLS) requirement - PayPal and `repo.magento.com` both require TLS 1.2 or later:

   *  [More information about PayPal]({{ page.baseurl }}/install-gde/system-requirements_tls1-2.html)

### Mail server

Mail Transfer Agent (MTA) or an SMTP server

### Magento can use the following technologies

*  [Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html) version 3.2 (compatible with 2.4+ ) for page caching and session storage
*  [Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html) version 4.x or 5.0
*  [memcached]({{ page.baseurl }}/config-guide/memcache/memcache.html) latest stable version for session storage with either `memcache` or `memcached` PHP extensions (latest stable version)

#### {{site.data.var.ee}} only

*  Elasticsearch

   {{site.data.var.ee}} version 2.2.x supports the following Elasticsearch versions:

   *  Elasticsearch [6.x](https://www.elastic.co/downloads/past-releases/elasticsearch-6-6-1)

      {:.bs-callout-warning}
      Magento still provides support for but does not recommend Elasticsearch [2.x and 5.x](https://www.elastic.co/support/eol).

      If you must run Elasticsearch 2.x or 5.x with Magento 2.2.8, you must change the Elasticsearch client version.

      Follow the instructions in [Change Elasticsearch Client]({{page.baseurl}}/config-guide/elasticsearch/es-downgrade.html).

*  RabbitMQ 3.5.x (compatible with 2.0 and later)

   [RabbitMQ]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html) can be used to publish messages to queue and to define the consumers that receive the messages asynchronously.

*  Three master databases

   These [master databases]({{ page.baseurl }}/config-guide/multi-master/multi-master.html) provide scalability advantages for different functional areas of the Magento application, such as checkout, orders, and all remaining Magento2 application tables.

### Optional but recommended

*  [php_xdebug2.2.0](http://xdebug.org/download.php)> or later (development environments only; can have an adverse effect on performance)

{:.bs-callout-info}
There is a known issue with `xdebug` that can affect Magento installations or access to the storefront or Magento Admin after installation.

For details, see [Known issues that affect installation]({{ page.baseurl }}/install-gde/trouble/tshoot_install-issues.html).

*  PHPUnit (as a command-line tool) 6.2.0

### Documentation

[Install Magento prerequisites]({{ page.baseurl }}/install-gde/prereq/prereq-overview.html)
