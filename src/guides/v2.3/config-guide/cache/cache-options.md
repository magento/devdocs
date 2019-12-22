---
group: configuration-guide
title: Low-level cache options
functional_areas:
  - Configuration
  - System
  - Setup
---

The Magento application uses a low-level [cache](https://glossary.magento.com/cache) [frontend](https://glossary.magento.com/frontend) and [backend](https://glossary.magento.com/backend) to provide access to the cache storage.

## Low-level frontend cache {#cache-lowlevel-front}

Magento extends [Zend_Cache_Core](http://framework.zend.com/manual/1.12/en/zend.cache.frontends.html){:target="_blank"} by implementing [Magento\Framework\Cache\Core]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Core.php){:target="_blank"} frontend cache.

## Low-level backend cache {#cache-lowlevel-back}

In general, the Magento application works with any backend cache that [Zend_Cache Backends](http://framework.zend.com/manual/1.12/en/zend.cache.backends.html){:target="_blank"} supports. However, this guide covers only the following low-level backend caches:

*  [Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html)
*  [Database]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/database-caching.html)
*  File system (default): No configuration is necessary to use file system caching.

[Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html) doesn't require setting up a low-level [cache backend](https://glossary.magento.com/cache-backend).

{:.bs-callout-info}
We'll periodically add more low-level cache types so watch this space.
