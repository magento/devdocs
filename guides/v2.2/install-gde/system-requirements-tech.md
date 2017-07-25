---
layout: default
group: install_pre
subgroup: Getting Started
title: Magento 2.2.x technology stack requirements
menu_title: Magento 2.2.x technology stack requirements
menu_node:
menu_order: 2
version: 2.2
github_link: install-gde/system-requirements-tech.md
---

### Operating systems (Linux x86-64)
Linux distributions such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and so on.

### Memory requirement
Upgrading the Magento applications and extensions you obtain from Magento Marketplaces and other sources can require up to 2GB of RAM. If you are using a system with less than 2GB of RAM, we recommend you create a [swap file]({{ page.baseurl }}comp-mgr/trouble/cman/out-of-memory.html); otherwise, your upgrade might fail.

### Composer (latest stable version)
{% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} is required for developers who wish to contribute to the Magento 2 codebase or anyone who wishes to develop Magento extensions.

### Web servers
*	<a href="http://httpd.apache.org/download.cgi" target="&#95;blank">Apache 2.2 or 2.4</a>

	In addition, the apache `mod_rewrite` module must be enabled. `mod_rewrite` enables the server to perform URL rewriting. For more information, see <a href="{{page.baseurl}}install-gde/prereq/apache.html">our Apache documentation</a>.

*	<a href="https://nginx.org/en/download.html" target="&#95;blank">nginx 1.x</a>

### Database
MySQL 5.6, 5.7

Magento is also compatible with MySQL NDB Cluster 7.4.&#42;, MariaDB 10.0, 10.1, 10.2, Percona 5.7 and other binary compatible MySQL technologies.

### PHP
{% include install/php_2.2.md %}

#### Required PHP extensions

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The [CentOS]({{page.baseurl}}install-gde/prereq/php-centos.html) and [Ubuntu]({{page.baseurl}}install-gde/prereq/php-ubuntu.html) PHP installation instructions include a step for installing these extensions.
</div>

*	<a href="http://php.net/manual/en/book.bc.php" target="&#95;blank">bc-math</a> <img src="{{ site.baseurl }}common/images/ee-only_small.png">
* <a href="http://php.net/manual/en/book.ctype.php" target="&#95;blank">ctype</a>
*	<a href="http://php.net/manual/en/book.curl.php" target="&#95;blank">curl</a>
* <a href="http://php.net/manual/en/book.dom.php" target="&#95;blank">dom</a>
*	<a href="http://php.net/manual/en/book.image.php" target="&#95;blank">gd</a>, <a href="http://php.net/manual/en/book.imagick.php" target="&#95;blank">ImageMagick 6.3.7</a> (or later) or both
*	<a href="http://php.net/manual/en/book.intl.php" target="&#95;blank">intl</a>
*	<a href="http://php.net/manual/en/book.mbstring.php" target="&#95;blank">mbstring</a>
*	<a href="http://php.net/manual/en/book.mcrypt.php" target="&#95;blank">mcrypt</a>
*	<a href="http://php.net/manual/en/book.mhash.php" target="&#95;blank">mhash</a>
*	<a href="http://php.net/manual/en/book.openssl.php" target="&#95;blank">openssl</a>
*	<a href="http://php.net/manual/en/ref.pdo-mysql.php" target="&#95;blank">PDO/MySQL</a>
*	<a href="http://php.net/manual/en/book.simplexml.php" target="&#95;blank">SimpleXML</a>
*	<a href="http://php.net/manual/en/book.soap.php" target="&#95;blank">soap</a>
* <a href="http://php.net/manual/en/book.spl.php" target="&#95;blank">spl</a>
*	<a href="http://php.net/manual/en/book.libxml.php" target="&#95;blank">libxml</a>
*	<a href="http://php.net/manual/en/book.xsl.php" target="&#95;blank">xsl</a>
*	<a href="http://php.net/manual/en/book.zip.php" target="&#95;blank">zip</a>
*	[json](http://php.net/manual/en/book.json.php){:target="&#95;blank"}
*	[iconv](http://php.net/manual/en/book.iconv.php){:target="&#95;blank"}

#### PHP OPcache
We strongly recommend you verify the  <a href="http://php.net/manual/en/intro.opcache.php" target="&#95;blank">PHP OPcache</a> is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our PHP documentation for <a href="{{page.baseurl}}install-gde/prereq/php-centos.html" target="&#95;blank">CentOS</a> or <a href="{{page.baseurl}}install-gde/prereq/php-ubuntu.html" target="&#95;blank">Ubuntu</a>.

If you must install it separately, see the <a href="http://php.net/manual/en/opcache.setup.php" target="&#95;blank">PHP OPcache documentation</a>.

#### PHP settings
We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see [Required PHP settings]({{ page.baseurl }}install-gde/prereq/php-settings.html).

### SSL
*	A valid {% glossarytooltip 363d6806-6a7d-4cb6-bc47-efc62bc26a1c %}security certificate{% endglossarytooltip %} is required for HTTPS.
*	Self-signed SSL certificates are not supported.
*	Transport Layer Security (TLS) requirement

	PayPal and `repo.magento.com` both require TLS 1.1 or later

	*	[More information about PayPal]({{page.baseurl}}install-gde/system-requirements_tls1-2.html)

	*	[More information about `repo.magento.com`]({{ page.baseurl }}release-notes/tech_bull_tls-repo.html)

### Mail server
Mail Transfer Agent (MTA) or an SMTP server

### Magento can use the following technologies:
*	<a href="{{page.baseurl}}config-guide/redis/config-redis.html">Redis</a> version 3.2 (compatible with 2.4+ ) for page caching and session storage
*	<a href="{{page.baseurl}}config-guide/varnish/config-varnish.html">Varnish</a> version 4.x or 5.0
*	<a href="{{page.baseurl}}config-guide/memcache/memcache.html">memcached</a> latest stable version for session storage with either `memcache` or `memcached` PHP extensions (latest stable version)

*	Magento Enterprise Edition (EE) only <img src="{{ site.baseurl }}common/images/ee-only_small.png">

    *	Elasticsearch version 2.x

		*	If you get the Elasticsearch software from the Elasticsearch Linux repository, we support versions 2.x.
		*	If you get the Elasticsearch software from their [Elasticsearch-PHP repository](https://github.com/elastic/elasticsearch-php){:target="&#95;blank"}, we support the `2.0` branch.

	*	RabbitMQ 3.5.x (compatible with 2.0 and later)

		<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">RabbitMQ</a> can be used to publish messages to queue and to define the consumers that receive the messages asynchronously. Available for Magento EE only.

	*	Three master databases

		These <a href="{{page.baseurl}}config-guide/multi-master/multi-master.html">master databases</a> provide scalability advantages for different functional areas of the Magento application (e.g., checkout, orders, and all remaining Magento2 application tables).

		Available for Magento EE only.

### Optional but recommended:
*	<a href="http://xdebug.org/download.php" target="&#95;blank">php_xdebug2.2.0</a> or later (development environments only; can have an adverse effect on performance)

<div class="bs-callout bs-callout-info" id="info">
	<p>There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the storefront or Magento Admin after installation.</p>
	<p>For details, see <a href="{{page.baseurl}}install-gde/trouble/tshoot_install-issues.html#known-devbeta-xdebug">Known issue with xdebug</a>.</p>
</div>

*	PHPUnit (as a command-line tool) 4.1.0

### Documentation
<a href="{{page.baseurl}}install-gde/prereq/prereq-overview.html">Install Magento prerequisites</a>
