---
group: configuration-guide
subgroup: 08_Configure caching
title: Low-level cache options
menu_title: Low-level cache options
menu_order: 2
menu_node:
redirect_from:
  - /guides/v2.0/config-guide/cache/caching_low-level.html
functional_areas:
  - Configuration
  - System
  - Setup
---

The Magento application uses a low-level {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} and {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} to provide access to the cache storage.

## Low-level frontend cache   {#cache-lowlevel-front}

Magento extends [Zend\_Cache\_Core](http://framework.zend.com/manual/1.12/en/zend.cache.frontends.html){: target="_blank"} by implementing [Magento\\Framework\\Cache\\Core]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Core.php){: target="_blank"} frontend cache.

## Low-level backend cache   {#cache-lowlevel-front}

In general, the Magento application works with any backend cache that [Zend\_Cache Backends](http://framework.zend.com/manual/1.12/en/zend.cache.backends.html){: target="_blank"} supports. However, this guide covers only the following low-level backend caches:

*   [Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html)
*   [Database]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/database-caching.html)
*   File system (default): No configuration is necessary to use file system caching.

[Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html) doesn't require setting up a low-level {% glossarytooltip 8f2067d1-4a39-4ed2-916d-7c9c58ccf30c %}cache backend{% endglossarytooltip %}.

{: .bs-callout .bs-callout-info }
We'll periodically add more low-level cache types so watch this space.
