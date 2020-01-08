---
group: php-developer-guide
subgroup: 08_Partial caching
title: Partial caching
menu_title: Partial caching
menu_order: 1
menu_node: parent
---

Magento uses [Zend_Cache](http://framework.zend.com/manual/1.12/en/zend.cache.html){:target="_blank"} to interact with the cache storage. However, Magento also has the [Magento\Cache]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Cache){:target="_blank"} [library](https://glossary.magento.com/library) for implementing Magento-specific caching. These topics discuss how to configure caching and [cache](https://glossary.magento.com/cache) types.

 {:.bs-callout-info}
By default, file system caching is enabled; no configuration is necessary to use it. This means the cache is located under `<magento_root>/var`.

To change the cache configuration, edit `<magento_root>/app/etc/env.php`.

The cache configuration is an associative array similar to the following:

```php
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
```

The preceding lists all cache types and shows they are all enabled.

## More information about caching

The following topics discuss how to set up caching:

*  [Create a cache type]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/create-cache-type.html)
*  [Create or extend configuration types]({{ page.baseurl }}/config-guide/config/config-create.html)
*  [Associate cache frontends with cache types]({{ page.baseurl }}/config-guide/cache/cache-types.html)
*  [Low-level cache options]({{ page.baseurl }}/config-guide/cache/cache-options.html)
*  [Configure and use Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html)
*  [Configure Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html)
