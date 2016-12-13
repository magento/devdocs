---
layout: default
group: config-guide
subgroup: 01_Introduction
title: Configuration Guide
landing-page: Configuration Guide
menu_title: Introduction
menu_order: 1
menu_node: parent
version: 2.0
github_link: config-guide/bk-config-guide.md
redirect_from: /guides/v1.0/config-guide/bk-config-guide.html
---

<h2 id="configuration">Configure the Magento application</h2>
You can configure the Magento application in any of the following ways:

*	General configuration

	*  	Using a <a href="{{page.baseurl}}config-guide/cli/config-cli.html">command-line utility</a> (for example, enable or disable cache types, run indexers, set up translations, and so on)
	*  	Manually to set up <a href="{{page.baseurl}}config-guide/bootstrap/magento-bootstrap.html">bootstrap parameters</a>

*	Caching

	*	<a href="{{page.baseurl}}config-guide/varnish/config-varnish.html">Set up Varnish</a>
	*  	<a href="{{page.baseurl}}config-guide/cache/caching.html">Set up caching</a>
	*	[Set up database caching]({{ page.baseurl }}config-guide/cache/caching-database.html)
	*	<a href="{{page.baseurl}}config-guide/redis/config-redis.html">Set up Redis</a>

*	Session storage
	*	[memcache]({{page.baseurl}}config-guide/memcache/memcache.html)
	*	[Redis]({{page.baseurl}}config-guide/redis/redis-session.html)
	*	[How to locate session files]({{page.baseurl}}config-guide/sessions.html)

*	Tools and debugging

	*	[Logging]({{ page.baseurl }}config-guide/log/log-intro.html)
	*	[Database profiler]({{ page.baseurl }}config-guide/db-profiler/db-profiler.html)

*	Magento in production

	*	[Deployment steps]({{page.baseurl}}config-guide/prod/prod_deploy.html)
	*	[Magento ownership and permissions in development and production]({{page.baseurl}}config-guide/prod/prod_file-sys-perms.html)

*	<img src="{{ site.baseurl }}common/images/ee-only_small.png">

	*	<a href="{{page.baseurl}}config-guide/solr/solr-overview.html">Install and configure Solr</a>
	*	<a href="{{page.baseurl}}config-guide/multi-master/multi-master.html">Split databases</a>
	*	<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">Message queues</a>




