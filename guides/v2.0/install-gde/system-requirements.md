---
layout: default
group: install_pre
subgroup: Getting Started
title: System requirements
menu_title: Magento system requirements
menu_node: parent
menu_order: 1
github_link: install-gde/system-requirements.md
redirect_from: /guides/v1.0/install-gde/system-requirements.html
---

### Operating systems (Linux x86-64)

Linux distributions such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and so on

### Composer (latest stable version)
Composer is required for developers who wish to contribute to the Magento 2 codebase or anyone who wishes to develop Magento extensions

### Web servers
*	<a href="http://httpd.apache.org/download.cgi" target="_blank">Apache 2.2 or 2.4</a>
	
	In addition, the apache `mod_rewrite` module must be enabled. `mod_rewrite` enables the server to perform URL rewriting. For more information, see <a href="{{ site.gdeurl }}install-gde/prereq/apache.html">our Apache documentation</a>.
*	<a href="http://nginx.org/en/linux_packages.html#mainline" target="_blank">nginx 1.9.x (or latest mainline version)

### Database

MySQL 5.6 (Oracle or Percona)
	
### PHP 

*	5.6.x
*	5.5.x 

<div class="bs-callout bs-callout-info" id="info">
   <span class="glyphicon-class">
  	<ul><li>Magento has been tested with PHP 7.0 <a href="http://php.net/archive/2015.php" target="_blank">Release Candidate 7</a> (currently the most recent)</li>
  		<li>There is a <a href="https://bugs.php.net/bug.php?id=66985" target="_blank">known PHP issue</a> with versions:
  		<ul><li>5.5.10&ndash;5.5.16</li>
		<li>5.6.0</li></ul>
	</li>
	<p>This issue prevents users from being able to set their timezones to Greenwich time and several other time zones. </p>
	<p>To work around the issue, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_install-issues.html#known-devrc-php">Known issue with certain PHP versions</a>.</p>
	<li>Magento no longer supports PHP 5.4.</li></ul></span>
</div>

Documentation: <a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html" target="_blank">CentOS</a>, <a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html" target="_blank">Ubuntu</a>

#### Required PHP extensions:

*	<a href="http://php.net/manual/en/ref.pdo-mysql.php" target="_blank">PDO/MySQL</a>
*	<a href="http://php.net/manual/en/book.mbstring.php" target="_blank">mbstring</a>
*	<a href="http://php.net/manual/en/book.mcrypt.php" target="_blank">mcrypt</a>
*	<a href="http://php.net/manual/en/book.mhash.php" target="_blank">mhash</a>
*	<a href="http://php.net/manual/en/book.simplexml.php" target="_blank">SimpleXML</a>
*	<a href="http://php.net/manual/en/book.curl.php" target="_blank">curl</a>
*	<a href="http://php.net/manual/en/book.xsl.php" target="_blank">xsl</a> 
*	<a href="http://php.net/manual/en/book.image.php" target="_blank">gd</a>, <a href="http://php.net/manual/en/book.imagick.php" target="_blank">ImageMagick 6.3.7</a> (or later) or both
*	<a href="http://php.net/manual/en/book.soap.php" target="_blank">soap</a>
*	<a href="http://php.net/manual/en/book.intl.php" target="_blank">intl</a>
*	<a href="http://php.net/manual/en/book.bc.php" target="_blank">bc-math</a> <img src="{{ site.baseurl }}common/images/ee-only_small.png">
*	<a href="http://php.net/manual/en/book.openssl.php" target="_blank">openssl</a>

<div class="bs-callout bs-callout-info" id="info">
	<p>The PHP <code>openssl</code> extension is installed automatically in some cases. To check to see whether you have it or not, use a <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpinfo">phpinfo.php</a> page.</p>
</div>

### SSL
*	A valid security certificate is required for HTTPS.
*	Self-signed SSL certificates are not supported.

### Mail server
Mail Transfer Agent (MTA) or an SMTP server

### Magento can utilize the following technologies:
*	<a href="{{ site.gdeurl }}config-guide/redis/config-redis.html">Redis</a> version 3.0 for page caching
*	<a href="{{ site.gdeurl }}config-guide/varnish/config-varnish.html">Varnish</a> version 3.5 or latest stable 4.x version for page caching
*	<a href="{{ site.gdeurl }}config-guide/memcache/memcache.html">memcached</a> latest stable version for session storage with either `memcache` or `memcached` PHP extensions (latest stable version)

*	Magento Enterprise Edition (EE) only <img src="{{ site.baseurl }}common/images/ee-only_small.png">

	*   Apache Solr 
 
    	<a href="{{ site.gdeurl }}config-guide/solr/solr-overview.html">Solr search</a> can be used as a search provider. Available for Magento Enterprise Edition (EE) only.

	*	RabbitMQ 

		<a href="{{ site.gdeurl }}config-guide/mq/rabbitmq-overview.html">RabbitMQ</a> can be used to publish messages to queue and to define the consumers that receive the messages asynchronously. Available for Magento EE only.

	*	Three master databases 

		These <a href="{{ site.gdeurl }}config-guide/multi-master/multi-master.html">master databases</a> provide scalability advantages for different functional areas of the Magento application: checkout, orders, and product data. Available for Magento EE only.

### Optional but recommended:

*	<a href="http://xdebug.org/download.php" target="_blank">php_xdebug2.2.0</a> or later (development environments only; can have an adverse effect on performance)

<div class="bs-callout bs-callout-info" id="info">
	<p>There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the storefront or Magento Admin after installation.</p>
	<p>For details, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_install-issues.html#known-devbeta-xdebug">Known issue with xdebug</a>.</p>
</div>

*	PHPUnit (as a command-line tool) 4.1 or later

### Documentation

<a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Install Magento prerequisites</a>
