---
group: config-guide
subgroup: 01_Introduction
title: Configuration Guide
landing-page: Configuration Guide
menu_title: Introduction
menu_order: 1
menu_node: parent
version: 2.2
github_link: config-guide/bk-config-guide.md
functional_areas:
  - Configuration
  - System
  - Setup
---

<h2 id="configuration">Configure the Magento application</h2>
You can configure the Magento application in any of the following ways:

*	General configuration

	*  	Using a <a href="{{ page.baseurl }}/config-guide/cli/config-cli.html">command-line utility</a> (for example, enable or disable cache types, run indexers, set up translations, and so on)
	*  	Manually to set up <a href="{{ page.baseurl }}/config-guide/bootstrap/magento-bootstrap.html">bootstrap parameters</a>

*	Caching

	*	[Set up Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html)
	* [Set up caching]({{ page.baseurl }}/config-guide/cache.html)
	*	[Use Redis for the Magento page and default cache]({{ page.baseurl }}/config-guide/redis/redis-pg-cache.html)
	*	[Use Redis for session storage]({{ page.baseurl }}/config-guide/redis/redis-session.html)
	*	[Set up database caching]({{ page.baseurl }}/config-guide/cache/caching-database.html)

*	Magento in production

	*	[pipeline deployment]({{ page.baseurl }}/config-guide/deployment/pipeline/)
	*	[Magento ownership and permissions in development and production]({{ page.baseurl }}/config-guide/prod/prod_file-sys-perms.html)
	*	[Single machine deployment]({{ page.baseurl }}/config-guide/deployment/single-machine.html)

*	Session storage
	*	[memcache]({{ page.baseurl }}/config-guide/memcache/memcache.html)
	*	[Redis]({{ page.baseurl }}/config-guide/redis/redis-session.html)
	*	[How to locate session files]({{ page.baseurl }}/config-guide/sessions.html)

*	{{site.data.var.ee}} only

	*	[Install and configure Elasticsearch]({{ page.baseurl }}/config-guide/elasticsearch/es-overview.html)
	*	<a href="{{ page.baseurl }}/config-guide/multi-master/multi-master.html">Split databases</a>
	*	<a href="{{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html">Message queues</a>
	*	<a href="{{ page.baseurl }}/cloud/configure/setup-b2b.html">Set up Magento B2B</a>
