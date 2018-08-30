---
group: config-guide
subgroup: 08_Configure caching
title: Configure caching
menu_title: Configure caching
menu_order: 3
menu_node: parent
functional_areas:
  - Configuration
  - System
  - Setup
---

Magento enables you to configure alternatives to the default file system caching. This guide discusses some of those alternatives; namely,

*   Set up the following {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} mechanisms in the Magento configuration:

    *   [Database]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/database-caching.html)
    *   [Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html)
    *   File system (default): No configuration is necessary to use file system caching.

*   Set up the [Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html) without modifying the Magento configuration.

<div class="bs-callout bs-callout-info" markdown="1">
  <p>We'll periodically add more cache alternatives so watch this space.</p>
</div>

Magento uses the following caching terminology:

* *Frontend*: Similar to an interface or gateway to cache storage, implemented by [Magento\\Framework\\Cache\\Frontend]({{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Frontend).
* *Cache types*: Can be one of the types provided with Magento or you can [create yourown]({{ page.baseurl }}/config-guide/cache/caching-cache-type.html).
* *Backend*: Specifies details about [cachestorage](http://framework.zend.com/manual/1.12/en/zend.cache.backends.html),implemented by[Magento\\Framework\\Cache\\Backend]({{ site.mage2000url }}lib/internal/Magento/Framework/Cache/Backend)
* *Two-level backend*: Stores cache records in two backends&mdash;a faster one and a slower one.

    Two-level backend cache configuration is beyond the scope of this guide at this time.

This topic discusses the following options for configuring caching:

*   Modifying the provided `default` cache frontend, which means you modify only `<your Magento install dir>/app/etc/di.xml` (the Magento application's global {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration)
*   Configuring your own custom cache frontend, which means you modify only `<your Magento install dir>/app/etc/env.php` because it overrides the equivalent configuration in `di.xml`

{: .bs-callout .bs-callout-info }
Varnish requires no changes to the Magento configuration. For more information, see [Configure and useVarnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html).
