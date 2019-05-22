---
group: configuration-guide
title: Use Redis for the Magento page and default cache
functional_areas:
  - Configuration
  - System
  - Setup
---

## Prerequisite {#reds-sess-prereq}

Before you continue, [install Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html#config-redis-install).

## Configure Magento to use Redis for default and page caching {#config-redis-config}

Following is a sample configuration that causes Magento to use Redis for both the default cache (`default` array) and the full page cache (`page_cache` array). Magento's caching is implemented by [`Magento\Framework\App\CacheInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/CacheInterface.php).

Add a configuration similar to the following to `<magento_root>app/etc/env.php`:

```php?start_inline=1
 'cache' =>
   array(
    'frontend' =>
       array(
        'default' =>
           array(
           'backend' => 'Cm_Cache_Backend_Redis',
           'backend_options' =>
           array(
              'server' => '127.0.0.1',
              'database' => '0',
              'port' => '6379'
              ),
      ),
      'page_cache' =>
      array(
        'backend' => 'Cm_Cache_Backend_Redis',
        'backend_options' =>
         array(
           'server' => '127.0.0.1',
           'port' => '6379',
           'database' => '1',
           'compress_data' => '0'
         )
      )
    )
  ),
```
where

|Parameter|Meaning|
|--- |--- |
|`default, page_cache`|Specify the segment name to use a particular segment or a default shortcut for all other caches.<br><br>The default cache segment enables you to configure all cache segments except for page_cache (the full page cache).|
|`server`|Absolute URL to your Redis server, or 127.0.0.1 if Redis is installed on the Magento server, or an absolute path to a UNIX socket.|
|`port`|Redis server listen port|
|`database`|Required if you use Redis for both the default and full page cache. You must specify the database number of one of the caches; the other cache uses 0 by default.<br><br>Important: If you use Redis for more than one type of caching (for example, default cache and page cache), the database numbers must be different.|
|`password`|Specifies a password if your Redis server requires authentication.|
|`compress_data`|Required only for the full page cache. Set to 1 to compress the full page cache. Redis chooses a compression algorithm in the following order, based on availability: [snappy](https://github.com/google/snappy), [l4z](https://github.com/Cyan4973/lz4), or [lzf](http://oldhome.schmorp.de/marc/liblzf.html). If none of them available, Redis uses gzip.|


## Basic verification {#redis-verify}

{% include config/redis-verify.md %}

## Related topics

* [Use Redis for session storage]({{ page.baseurl }}/config-guide/redis/redis-session.html)
* [Create or extend configuration types]({{ page.baseurl }}/config-guide/config/config-create.html)
* [Magento's deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html)