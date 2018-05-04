---
layout: default
group: extension-dev-guide
subgroup: 08_Partial caching
title: Partial caching
menu_title: Partial caching
menu_order: 1
menu_node: parent
version: 2.1
github_link: extension-dev-guide/cache/partial-caching.md
redirect_from:
  - /guides/v1.0/config-guide/cache/caching.html
  - /guides/v2.0/config-guide/config/caching.html
  - /guides/v2.2/config-guide/config/caching.html
---

Magento uses <a href="http://framework.zend.com/manual/1.12/en/zend.cache.html" target="&#95;blank">Zend_Cache</a> to interact with the cache storage. However, Magento also has the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache" target="&#95;blank">Magento\Cache</a> {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} for implementing Magento-specific caching. These topics discuss how to configure caching and {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} types.

<div class="bs-callout bs-callout-info" id="info">
	<p>By default, file system caching is enabled; no configuration is necessary to use it. This means the cache is located under <code>&lt;your Magento install dir>/var</code>.</p>
</div>

To change the cache configuration, edit `<your Magento install dir>/app/etc/env.php`.

The cache configuration is an associative array similar to the following:

{% highlight php startinline=true %}
'cache_types' =>
	array (
		'config' => 1,
		'layout' => 1,
		'block_html' => 1,
		'collections' => 1,
		'db_ddl' => 1,
		'eav' => 1,
		'full_page' => 1,
		'translate' => 1,
		'config_integration' => 1,
		'config_webservice' => 1,
		'config_integration_api' => 1,
	),
);
{% endhighlight %}

The preceding lists all cache types and shows they are all enabled.

## More information about caching
The following topics discuss how to set up caching:

*	<a href="{{page.baseurl}}/config-guide/cache/caching-cache-type.html">Create a cache type</a>
*	<a href="{{page.baseurl}}/config-guide/config/config-create.html">Create or extend configuration types</a>
*	<a href="{{page.baseurl}}/config-guide/config/caching_frontend-cache-types.html">Associate cache frontends with cache types</a>
*	<a href="{{page.baseurl}}/config-guide/cache/caching_low-level.html">Low-level cache options</a>
*	<a href="{{page.baseurl}}/config-guide/varnish/config-varnish.html">Configure and use Varnish</a>
*	<a href="{{page.baseurl}}/config-guide/redis/config-redis.html">Configure Redis</a>
