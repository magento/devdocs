---
layout: default
group: config-guide
subgroup: 08_Configure caching
title: Low-level cache options
menu_title: Low-level cache options
menu_order: 2
menu_node:
version: 2.1
github_link: config-guide/cache/cache-options.md
redirect_from:
  - /guides/v2.0/config-guide/cache/caching_low-level.html
  - /guides/v2.1/config-guide/cache/caching_low-level.html
  - /guides/v2.2/config-guide/cache/caching_low-level.html
functional_areas:
  - Configuration
  - System
  - Setup
---

The Magento application uses a low-level {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} and {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} to provide access to the cache storage.

<h2 id="cache-lowlevel-front">Low-level frontend cache</h2>
Magento extends <a href="http://framework.zend.com/manual/1.12/en/zend.cache.frontends.html" target="_blank">Zend_Cache_Core</a> by implementing <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Core.php" target="_blank">Magento\Framework\Cache\Core</a> frontend cache.

<h2 id="cache-lowlevel-front">Low-level backend cache</h2>
In general, the Magento application works with any backend cache that <a href="http://framework.zend.com/manual/1.12/en/zend.cache.backends.html" target="_blank">Zend_Cache Backends</a> supports. However, this guide covers only the following low-level backend caches:

*   <a href="{{page.baseurl}}/config-guide/redis/config-redis.html">Redis</a>
*   <a href="{{page.baseurl}}/config-guide/cache/caching-database.html">Database</a>
*   File system (default): No configuration is necessary to use file system caching.

<a href="{{page.baseurl}}/config-guide/varnish/config-varnish.html">Varnish</a> doesn't require setting up a low-level {% glossarytooltip 8f2067d1-4a39-4ed2-916d-7c9c58ccf30c %}cache backend{% endglossarytooltip %}.

<div class="bs-callout bs-callout-info" id="info">
  <p>We'll periodically add more low-level cache types so watch this space.</p>
</div>
