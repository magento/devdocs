---
layout: default
group: config-guide
subgroup: 01_Introduction
title: Configuration Guide
menu_title: Introduction
menu_order: 1
menu_node: parent
version: 2.1
github_link21: config-guide/bk-config-guide.md
---

<h2 id="configuration">Configure the Magento application</h2>
You can configure the Magento application in any of the following ways:

*	General configuration

	*  	Using a <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli.html">command-line utility</a> (for example, enable or disable cache types, run indexers, set up translations, and so on)
	*  	Manually to set up <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-bootstrap.html">bootstrap parameters</a>

*	Caching

	*	<a href="{{ site.gdeurl21 }}config-guide/varnish/config-varnish.html">Set up Varnish</a>
	*  	<a href="{{ site.gdeurl21 }}config-guide/config/caching.html">Set up caching</a>
	*	<a href="{{ site.gdeurl21 }}config-guide/database/database.html">Set up database caching</a>
	*	<a href="{{ site.gdeurl21 }}config-guide/redis/config-redis.html">Set up Redis</a>

*	Magento in production

	*	[Deployment steps]({{ site.gdeurl21 }}config-guide/prod/prod_deploy.html)
	*	[Magento ownership and permissions in development and production]({{ site.gdeurl21 }}config-guide/prod/prod_file-sys-perms.html)

*	Session storage
	*	[memcache]({{ site.gdeurl21 }}config-guide/memcache/memcache.html)
	*	[Redis]({{ site.gdeurl21 }}config-guide/redis/redis-session.html)
	*	[How to locate session files]({{ site.gdeurl21 }}config-guide/sessions.html)

*	<img src="{{ site.baseurl }}common/images/ee-only_small.png">

	*	<a href="{{ site.gdeurl21 }}config-guide/solr/solr-overview.html">Install and configure Solr</a>
	*	<a href="{{ site.gdeurl21 }}config-guide/multi-master/multi-master.html">Split databases</a>
	*	<a href="{{ site.gdeurl21 }}config-guide/mq/rabbitmq-overview.html">Message queues</a>




