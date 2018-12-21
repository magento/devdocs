---
group: configuration-guide
subgroup: 01_Introduction
title: Configuration Guide
landing-page: Configuration Guide
menu_title: Introduction
menu_order: 1
menu_node: parent
functional_areas:
  - Configuration
  - System
  - Setup
---

## Configure the Magento application   {#configuration}

You can configure the Magento application in any of the following ways:

*	General configuration

	*  	Using a [command-line utility]({{ page.baseurl }}/config-guide/cli/config-cli.html) (for example, enable or disable cache types, run indexers, set up translations, and so on)
	*  	Manually to set up [bootstrap parameters]({{ page.baseurl }}/config-guide/bootstrap/magento-bootstrap.html)

*	Caching

	*	[Set up Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html)
	* [Set up caching]({{ page.baseurl }}/config-guide/cache.html)
	*	[Set up database caching]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/database-caching.html)
	*	[Set up Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html)

*	Session storage
	*	[memcache]({{ page.baseurl }}/config-guide/memcache/memcache.html)
	*	[Redis]({{ page.baseurl }}/config-guide/redis/redis-session.html)
	*	[How to locate session files]({{ page.baseurl }}/config-guide/sessions.html)

*	Tools and debugging

	*	[Logging]({{ page.baseurl }}/config-guide/log/log-intro.html)
	*	[Database profiler]({{ page.baseurl }}/config-guide/db-profiler/db-profiler.html)

*	Magento in production

	*	[Deployment steps]({{ page.baseurl }}/config-guide/prod/prod_deploy.html)
	*	[Magento ownership and permissions in development and production]({{ page.baseurl }}/config-guide/prod/prod_file-sys-perms.html)

*	{{site.data.var.ee}} only

	*	[Install and configure Solr]({{ page.baseurl }}/config-guide/solr/solr-overview.html)
	*	[Split databases]({{ page.baseurl }}/config-guide/multi-master/multi-master.html)
	*	[Message queues]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html)
