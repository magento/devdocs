---
group: configuration-guide
title: Configure caching
functional_areas:
  - Configuration
  - System
  - Setup
---

Magento enables you to configure alternatives to the default file system caching. This guide discusses some of those alternatives; namely,

*  Set up the following [cache](https://glossary.magento.com/cache) mechanisms in the Magento configuration:

   *  [Database]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/database-caching.html)
   *  [Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html)
   *  File system (default): No configuration is necessary to use file system caching.

*  Set up the [Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html) without modifying the Magento configuration.

{:.bs-callout-info}
We'll periodically add more cache alternatives so watch this space.

Magento uses the following caching terminology:

*  *Frontend*: Similar to an interface or gateway to cache storage, implemented by [Magento\Framework\Cache\Frontend]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Frontend).
*  *Cache types*: Can be one of the types provided with Magento or you can [create your own]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/create-cache-type.html).
*  *Backend*: Specifies details about [cache storage](http://framework.zend.com/manual/1.12/en/zend.cache.backends.html), implemented by [Magento\Framework\Cache\Backend]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache/Backend)
*  *Two-level backend*: Stores cache records in two backends---a faster one and a slower one.

   Two-level backend cache configuration is beyond the scope of this guide at this time.

This topic discusses the following options for configuring caching:

*  Modifying the provided `default` cache frontend, which means you modify only `<magento_root>/app/etc/di.xml` (the Magento application's global [dependency injection](https://glossary.magento.com/dependency-injection) configuration)
*  Configuring your own custom cache frontend, which means you modify only `<magento_root>/app/etc/env.php` because it overrides the equivalent configuration in `di.xml`

{:.bs-callout-info}
Varnish requires no changes to the Magento configuration. For more information, see [Configure and use Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html).
