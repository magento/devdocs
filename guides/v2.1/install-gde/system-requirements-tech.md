---
group: installation-guide
subgroup: Getting Started
title: Magento 2.1.x technology stack requirements
menu_title: Magento 2.1.x technology stack requirements
menu_node:
menu_order: 2
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
{% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} is required for developers who wish to contribute to the Magento 2 codebase or anyone who wishes to develop Magento extensions

### Web servers

*   [Apache 2.2 or 2.4](http://httpd.apache.org/download.cgi){:target="_blank"}

	In addition, the apache `mod_rewrite` module must be enabled. `mod_rewrite` enables the server to perform URL rewriting. For more information, see [our Apache documentation]({{ page.baseurl }}/install-gde/prereq/apache.html).
*	{% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %} 1.8 (or [latest mainline version](http://nginx.org/en/linux_packages.html#mainline){:target="_blank"})

### Database

MySQL 5.6

Magento application version 2.1.2 and later are compatible with MySQL 5.7.

MariaDB and Percona are compatible with Magento because we support MySQL 5.6 APIs.

### PHP

{% include install/php_2.1.md %}

{:.bs-callout .bs-callout-info}
For versions 2.1.16 and later, Magento supports PHP 7.1 for the 2.1.x release line. The other supported PHP versions remain valid and unchanged.

PHP documentation: [CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html){:target="_blank"}, [Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html){:target="_blank"}

#### Required PHP extensions:

*   [bc-math](http://php.net/manual/en/book.bc.php){:target="_blank"} ({{site.data.var.ee}} only)
*   [curl](http://php.net/manual/en/book.curl.php){:target="_blank"}
*   [gd](http://php.net/manual/en/book.image.php){:target="_blank"}, [ImageMagick 6.3.7](http://php.net/manual/en/book.imagick.php){:target="_blank"} (or later) or both
*   [intl](http://php.net/manual/en/book.intl.php){:target="_blank"}
*   [mbstring](http://php.net/manual/en/book.mbstring.php){:target="_blank"}
*   [mcrypt](http://php.net/manual/en/book.mcrypt.php){:target="_blank"}
*   [hash](http://php.net/manual/en/book.hash.php){:target="_blank"}
*   [openssl](http://php.net/manual/en/book.openssl.php){:target="_blank"}
*   [PDO/MySQL](http://php.net/manual/en/ref.pdo-mysql.php){:target="_blank"}
*   [SimpleXML](http://php.net/manual/en/book.simplexml.php){:target="_blank"}
*   [soap](http://php.net/manual/en/book.soap.php){:target="_blank"}
*   [xml](http://php.net/manual/en/book.xml.php){:target="_blank"}
*   [xsl](http://php.net/manual/en/book.xsl.php){:target="_blank"}
*   [zip](http://php.net/manual/en/book.zip.php){:target="_blank"}
*	{% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} 7 only: [json](http://php.net/manual/en/book.json.php){:target="_blank"}, [iconv](http://php.net/manual/en/book.iconv.php){:target="_blank"}

#### PHP OPcache

We strongly recommend you verify the [PHP OPcache](http://php.net/manual/en/intro.opcache.php){:target="_blank"} is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our PHP documentation for [CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html){:target="_blank"} or [Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html){:target="_blank"}.

If you must install it separately, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

#### PHP settings

We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

### SSL

*	A valid {% glossarytooltip 363d6806-6a7d-4cb6-bc47-efc62bc26a1c %}security certificate{% endglossarytooltip %} is required for HTTPS.
*	Self-signed SSL certificates are not supported.
*	Transport Layer Security (TLS) requirement

	PayPal and `repo.magento.com` both require TLS 1.1 or later

	*	[More information about PayPal]({{ page.baseurl }}/install-gde/system-requirements_tls1-2.html)

	*	[More information about `repo.magento.com`]({{ page.baseurl }}/release-notes/tech_bull_tls-repo.html)

### Mail server

Mail Transfer Agent (MTA) or an SMTP server

### RabbitMQ 3.5 (Only {{site.data.var.ee}})
[RabbitMQ]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html) will be used to publish messages to queue and to define the consumers that receive the messages asynchronously.

### Magento can utilize the following technologies:

*	[Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html) version 3.0 for page caching and session storage (the latter supported by Magento version 2.0.6 and later only)
*	[Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html) version 3.5 or latest stable 4.x version for page caching
*	[memcached]({{ page.baseurl }}/config-guide/memcache/memcache.html) latest stable version for session storage with either `memcache` or `memcached` PHP extensions (latest stable version)

*	{{site.data.var.ee}} only

	*   Apache Solr 4.x

    	[Solr search]({{ page.baseurl }}/config-guide/solr/solr-overview.html) can be used as a search provider. Available for {{site.data.var.ee}} only.

    *	Elasticsearch versions 1.7 and 2.x (recommended)

		*	If you get the Elasticsearch software from the Elasticsearch Linux repository, we support versions 2.x.
		*	If you get the Elasticsearch software from their [Elasticsearch-PHP repository](https://github.com/elastic/elasticsearch-php){:target="_blank"}, we support the `2.0` branch.

	*	Three master databases

		These [master databases]({{ page.baseurl }}/config-guide/multi-master/multi-master.html) provide scalability advantages for different functional areas of the Magento application: checkout, orders, and product data. Available for {{site.data.var.ee}} only.

### Optional but recommended:

*	[php_xdebug2.2.0](http://xdebug.org/download.php){:target="_blank"} or later (development environments only; can have an adverse effect on performance)

{:.bs-callout .bs-callout-info}
There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the storefront or Magento Admin after installation.

For details, see [Known issue with xdebug]({{ page.baseurl }}/install-gde/trouble/tshoot_install-issues.html).

*	PHPUnit (as a command-line tool) 4.1 or later

### Documentation

[Install Magento prerequisites]({{ page.baseurl }}/install-gde/prereq/prereq-overview.html)
