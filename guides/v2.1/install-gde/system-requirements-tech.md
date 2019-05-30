---
group: installation-guide
title: Magento 2.1 technology stack requirements
redirect_from: /guides/v2.1/install-gde/system-requirements-2.1-tech.html
functional_areas:
  - Install
  - System
  - Setup
---

### Operating systems (Linux x86-64)

Linux distributions such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and so on

### Memory requirement

Upgrading the Magento applications and extensions you obtain from Magento Marketplaces and other sources can require up to 2GB of RAM. If you are using a system with less than 2GB of RAM, we recommend you create a [swap file]({{ page.baseurl }}/comp-mgr/trouble/cman/out-of-memory.html); otherwise, your upgrade might fail.

### Composer (latest stable version)

[Composer](https://glossary.magento.com/composer) is required for developers who wish to contribute to the Magento 2 codebase or anyone who wishes to develop Magento extensions

### Web servers

* [Apache 2.2 or 2.4](http://httpd.apache.org/download.cgi)

In addition, the apache `mod_rewrite` module must be enabled. `mod_rewrite` enables the server to perform URL rewriting. For more information, see [our Apache documentation]({{ page.baseurl }}/install-gde/prereq/apache.html).

* [nginx](https://glossary.magento.com/nginx) 1.8 (or [latest mainline version](http://nginx.org/en/linux_packages.html#mainline))

### Database

MySQL 5.6

Magento application version 2.1.2 and later are compatible with MySQL 5.7.

MariaDB and Percona are compatible with Magento because we support MySQL 5.6 APIs.

### PHP

<!--{% assign supported_php_versions = site.data.codebase.v2_1.open-source.composer_lock.platform.php | split: "|" %}-->
{% include install/php-versions-template.md %}

{:.bs-callout .bs-callout-info}
For versions 2.1.16 and later, Magento supports PHP 7.1 for the 2.1.x release line. The other supported PHP versions remain valid and unchanged.

PHP documentation: [CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html), [Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html)

#### Required PHP extensions

<!--{% assign platform-req = site.data.codebase.v2_1.open-source.composer_lock.platform %}-->
{% include install/php-extensions-template.md %}

PHP 7 only: [json](http://php.net/manual/en/book.json.php), [iconv](http://php.net/manual/en/book.iconv.php)

#### PHP OPcache

We strongly recommend you verify the [PHP OPcache](http://php.net/manual/en/intro.opcache.php) is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our PHP documentation for [CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html) or [Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html).

If you must install it separately, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php).

#### PHP settings

We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

### SSL

* A valid [security certificate](https://glossary.magento.com/security-certificate) is required for HTTPS.
* Self-signed SSL certificates are not supported.
* Transport Layer Security (TLS) requirement

PayPal and `repo.magento.com` both require TLS 1.1 or later

* [More information about PayPal]({{ page.baseurl }}/install-gde/system-requirements_tls1-2.html)
* [More information about `repo.magento.com`]({{ page.baseurl }}/release-notes/tech_bull_tls-repo.html)

### Mail server

Mail Transfer Agent (MTA) or an SMTP server

### RabbitMQ 3.5 (Only {{site.data.var.ee}})

[RabbitMQ]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html) will be used to publish messages to queue and to define the consumers that receive the messages asynchronously.

### Magento can utilize the following technologies

* [Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html) versions 3.2, 4.0, 5.0 (compatible with 2.4+)
Version 5.0 is highly recommended
* [Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html) version 3.5 or latest stable 4.x version for page caching
* [memcached]({{ page.baseurl }}/config-guide/memcache/memcache.html) latest stable version for session storage with either `memcache` or `memcached` PHP extensions (latest stable version)

* {{site.data.var.ee}} only

* Apache Solr 4.x

    [Solr search]({{ page.baseurl }}/config-guide/solr/solr-overview.html) can be used as a search provider. Available for {{site.data.var.ee}} only.

  * Elasticsearch versions 1.7 and 2.x (recommended)

  * If you get the Elasticsearch software from the Elasticsearch Linux repository, we support versions 2.x.
  * If you get the Elasticsearch software from their [Elasticsearch-PHP repository](https://github.com/elastic/elasticsearch-php), we support the `2.0` branch.

* Three master databases

  These [master databases]({{ page.baseurl }}/config-guide/multi-master/multi-master.html) provide scalability advantages for different functional areas of the Magento application: checkout, orders, and product data. Available for {{site.data.var.ee}} only.

### Optional but recommended

* [php_xdebug2.2.0](http://xdebug.org/download.php) or later (development environments only; can have an adverse effect on performance)

{:.bs-callout .bs-callout-info}
There is a known issue with `xdebug` that can affect Magento installations or access to the storefront or Magento Admin after installation.

For details, see [Known issue with xdebug]({{ page.baseurl }}/install-gde/trouble/tshoot_install-issues.html).

* PHPUnit (as a command-line tool) 4.1 or later

### Documentation

[Install Magento prerequisites]({{ page.baseurl }}/install-gde/prereq/prereq-overview.html)
