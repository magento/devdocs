---
group: install_pre
subgroup: Getting Started
title: Magento 2.0.x technology stack requirements
menu_title: Magento 2.0.x technology stack requirements
menu_node:
menu_order: 3
version: 2.0
redirect_from:
  - /guides/v1.0/install-gde/system-requirements.html
  - /guides/v2.0/install-gde/system-requirements-2.0-tech.html
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

*	<a href="http://httpd.apache.org/download.cgi" target="_blank">Apache 2.2 or 2.4</a>

	In addition, the apache `mod_rewrite` module must be enabled. `mod_rewrite` enables the server to perform URL rewriting. For more information, see <a href="{{ page.baseurl }}/install-gde/prereq/apache.html">our Apache documentation</a>.
*	{% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %} 1.8 (or <a href="http://nginx.org/en/linux_packages.html#mainline" target="_blank">latest mainline version</a>)

### Database

MySQL 5.6

MariaDB and Percona are compatible with Magento because we support MySQL 5.6 APIs.

### PHP

{% include install/php_2.0.md %}

PHP documentation: <a href="{{ page.baseurl }}/install-gde/prereq/php-centos.html" target="_blank">CentOS</a>, <a href="{{ page.baseurl }}/install-gde/prereq/php-ubuntu.html" target="_blank">Ubuntu</a>

#### Required PHP extensions:

*	<a href="http://php.net/manual/en/book.bc.php" target="_blank">bc-math</a> ({{site.data.var.ee}} only)
*	<a href="http://php.net/manual/en/book.curl.php" target="_blank">curl</a>
*	<a href="http://php.net/manual/en/book.image.php" target="_blank">gd</a>, <a href="http://php.net/manual/en/book.imagick.php" target="_blank">ImageMagick 6.3.7</a> (or later) or both
*	<a href="http://php.net/manual/en/book.intl.php" target="_blank">intl</a>
*	<a href="http://php.net/manual/en/book.mbstring.php" target="_blank">mbstring</a>
*	<a href="http://php.net/manual/en/book.mcrypt.php" target="_blank">mcrypt</a>
*	<a href="http://php.net/manual/en/book.hash.php" target="_blank">hash</a>
*	<a href="http://php.net/manual/en/book.openssl.php" target="_blank">openssl</a>
*	<a href="http://php.net/manual/en/ref.pdo-mysql.php" target="_blank">PDO/MySQL</a>
*	<a href="http://php.net/manual/en/book.simplexml.php" target="_blank">SimpleXML</a>
*	<a href="http://php.net/manual/en/book.soap.php" target="_blank">soap</a>
*	<a href="http://php.net/manual/en/book.xml.php" target="_blank">xml</a>
*	<a href="http://php.net/manual/en/book.xsl.php" target="_blank">xsl</a>
*	<a href="http://php.net/manual/en/book.zip.php" target="_blank">zip</a>
*	{% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} 7 only:

	*	[json](http://php.net/manual/en/book.json.php){:target="_blank"}
	*	[iconv](http://php.net/manual/en/book.iconv.php){:target="_blank"}

#### PHP OPcache

We strongly recommend you verify the  <a href="http://php.net/manual/en/intro.opcache.php" target="_blank">PHP OPcache</a> is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our PHP documentation for <a href="{{ page.baseurl }}/install-gde/prereq/php-centos.html" target="_blank">CentOS</a> or <a href="{{ page.baseurl }}/install-gde/prereq/php-ubuntu.html" target="_blank">Ubuntu</a>.

If you must install it separately, see the <a href="http://php.net/manual/en/opcache.setup.php" target="_blank">PHP OPcache documentation</a>.

#### PHP settings

We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see our [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

### SSL

*	A valid {% glossarytooltip 363d6806-6a7d-4cb6-bc47-efc62bc26a1c %}security certificate{% endglossarytooltip %} is required for HTTPS.
*	Self-signed SSL certificates are not supported.
*	Transport Layer Security (TLS) requirement

	PayPal and `repo.magento.com` both require TLS 1.1 or later

	*	[More information about PayPal]({{ page.baseurl }}/install-gde/system-requirements_tls1-2.html)

	*	[More information about `repo.magento.com`]({{ page.baseurl }}/release-notes/tech_bull_tls-repo.html)

### Mail server

Mail Transfer Agent (MTA) or an SMTP server

### Magento can utilize the following technologies:

*	<a href="{{ page.baseurl }}/config-guide/redis/config-redis.html">Redis</a> version 3.0 for page caching and session storage (the latter supported by Magento version 2.0.6 and later only)
*	<a href="{{ page.baseurl }}/config-guide/varnish/config-varnish.html">Varnish</a> version 3.0.5 or latest stable 4.x version for page caching
*	<a href="{{ page.baseurl }}/config-guide/memcache/memcache.html">memcached</a> latest stable version for session storage with either `memcache` or `memcached` PHP extensions (latest stable version)

*	{{site.data.var.ee}} only

	*   Apache Solr 4.x

    	<a href="{{ page.baseurl }}/config-guide/solr/solr-overview.html">Solr search</a> can be used as a search provider. Available for {{site.data.var.ee}} only.

	*	RabbitMQ 3.5

		<a href="{{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html">RabbitMQ</a> can be used to publish messages to queue and to define the consumers that receive the messages asynchronously. Available for Magento EE only.

	*	Three master databases

		These <a href="{{ page.baseurl }}/config-guide/multi-master/multi-master.html">master databases</a> provide scalability advantages for different functional areas of the Magento application: checkout, orders, and product data. Available for Magento EE only.

### Optional but recommended:

*	<a href="http://xdebug.org/download.php" target="_blank">php_xdebug2.2.0</a> or later (development environments only; can have an adverse effect on performance)

<div class="bs-callout bs-callout-info" id="info">
	<p>There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the storefront or Magento Admin after installation.</p>
	<p>For details, see <a href="{{ page.baseurl }}/install-gde/trouble/tshoot_install-issues.html#known-devbeta-xdebug">Known issue with xdebug</a>.</p>
</div>

*	PHPUnit (as a command-line tool) 4.1 or later

### Documentation

<a href="{{ page.baseurl }}/install-gde/prereq/prereq-overview.html">Install Magento prerequisites</a>
