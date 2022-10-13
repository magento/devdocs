---
group: configuration-guide
title: L2 caching in the Magento application
functional_areas:
  - Configuration
  - System
  - Cache
migrated_to: https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/level-two-cache.html
layout: migrated
---

Caching enables a reduction in network traffic between the remote cache storage and Magento. A standard Magento instance transfers around 300kb per request, and traffic may quickly grow to over ~1000 requests in some situations.

To reduce the network bandwidth to Redis, we can store cache data locally on each web node and use the remote cache for two purposes:

-  To check the cache data version, ensuring we have the latest cache stored locally.
-  If the data is out of date, transfer the latest cache from the remote machine to the local machine.

Magento stores the hashed data version in Redis, with the suffix ':hash' appended to the regular key. In case of an outdated local cache, the data is transferred to the local machine with a cache adapter.

{:.bs-callout-info}
For {{ site.data.var.ece }}, consider the best practices in the [Extended Redis cache implementation](https://support.magento.com/hc/en-us/articles/360049292532) support article.

## Configuration example

Use the following example to modify or replace the existing cache section in the `app/etc/env.php` file.

```php
'cache' => [
    'frontend' => [
        'default' => [
            'backend' => '\\Magento\\Framework\\Cache\\Backend\\RemoteSynchronizedCache',
            'backend_options' => [
                'remote_backend' => '\\Magento\\Framework\\Cache\\Backend\\Redis',
                'remote_backend_options' => [
                    'persistent' => 0,
                    'server' => 'localhost',
                    'database' => '0',
                    'port' => '6379',
                    'password' => '',
                    'compress_data' => '1',
                ],
                'local_backend' => 'Cm_Cache_Backend_File',
                'local_backend_options' => [
                    'cache_dir' => '/dev/shm/'
                ],
                'use_stale_cache' => false,
            ],
            'frontend_options' => [
                'write_control' => false,
            ],
        ]
    ],
    'type' => [
        'default' => ['frontend' => 'default'],
    ],
],
```

Where:

-  `backend` is the L2 cache implementation.
-  `backend_options` is the L2 cache configuration.
   -  `remote_backend` is the remote cache implementation: Redis or MySQL.
   -  `remote_backend_options` is the remote cache configuration.
   -  `local_backend` is the local cache implementation: `Cm_Cache_Backend_File`.
   -  `local_backend_options` is the local cache configuration.
      -  `cache_dir` __a file cache specific option.__ This is the directory where the local cache is stored.
   -  `use_stale_cache` is a flag that enables or disables the use of stale cache.

We recommend using Redis for remote caching (`\Magento\Framework\Cache\Backend\Redis`) and `Cm_Cache_Backend_File` for the local caching of data in shared memory, using `'local_backend_options' => ['cache_dir' => '/dev/shm/']`.
We also recommend the use of the [`cache preload`]({{ page.baseurl }}/config-guide/redis/redis-pg-cache.html#redis-preload-feature) feature, as it will drastically decrease the pressure on Redis. Do not forget to add suffix ':hash' for preload keys.

## Stale cache options

Starting with Magento 2.4, we introduced a `stale_cache` option, which can improve performance in some specific cases.

Generally, the trade-off with lock waiting is acceptable from the performance side. But the larger the number of Blocks or Cache the merchant has, the more time is spent waiting for locks. In some scenarios, we could wait a **numbers of keys** * **lookup timeout** amount of time for the process. In some rare cases, the merchant can have hundreds of keys in the `Block/Config` cache, so even small lookup timeout for lock may cost seconds.

Stale cache only works with a L2 cache. With a stale cache, you could send an outdated cache, while a new one is generating in a parallel process.
To enable it, just add `'use_stale_cache' => true` to top config of the L2 cache.
