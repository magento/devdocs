---
group: configuration-guide
title: L2 caching in the Magento application
functional_areas:
  - Configuration
  - System
  - Cache
---

Caching enables a reduction in network traffic between the remote cache storage and Magento. A standard Magento instance transfers around 300kb per request, and traffic may quickly grow to over ~1000 requests in some situations.

To reduce the network bandwidth to Redis, we can store cache data locally on each web node and use the remote cache for two purposes:

-  To check the cache data version, ensuring we have the latest cache stored locally.
-  If the data is out of date, transfer the latest cache from the remote machine to the local machine.

Magento stores the hashed data version in Redis, with the suffix ':version' appended to the regular key. In case of an outdated local cache, the data is transferred to the local machine with a cache adapter.

## Configuration example

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
                    'port' => '6370',
                    'password' => '',
                    'compress_data' => '1',
                ],
                'local_backend' => 'Cm_Cache_Backend_File',
                'local_backend_options' => [
                    'cache_dir' => '/dev/shm/'
                ]
            ],
            'frontend_options' => [
                'write_control' => false,
            ],
            'use_stale_cache' => false,
        ]
    ],
    'type' => [
        'default' => ['frontend' => 'default'],
    ],
]
```

Where:

-  `backend` is the remote L2 cache implementation.
-  `remote_backend` is the remote cache implementation: Redis or MySQL.
-  `remote_backend_options` are Redis or MySQL-specific options.
-  `local_backend` is the local cache implementation: `Cm_Cache_Backend_File` or the APC adapter.
-  `cache_dir` is a directory where the local cache will be stored. It is suggested to use `/dev/shm/`.
-  `use_stale_cache` is a flag that enable\disables the stale cache mechanism.

We recommend the use of Redis for remote caching - `\Magento\Framework\Cache\Backend\Redis`, and the File cache implementation - `Cm_Cache_Backend_File` as the local cache.
We also recommend the use of the [`cache preload`](https://devdocs.magento.com/guides/v2.4/config-guide/redis/redis-pg-cache.html#redis-preload-feature) feature, as it will drastically decrease the pressure on Redis. Do not forget to add suffix ':version' for preload keys.

## Stale cache options

Starting with Magento 2.4, we introduced a `stale_cache` option, which can improve performance in some specific cases.

Generally, the trade-off with lock waiting is acceptable from the performance side. But the larger the number of Blocks or Cache the merchant has, the more time is spent waiting for locks. In some scenarios, we could wait a **numbers of keys** * **lookup timeout** amount of time for the process. In some rare cases, the merchant can have hundreds of keys in the `Block/Config` cache, so even small lookup timeout for lock may cost seconds.

Stale cache only works with a L2 cache. With a stale cache, you could send an outdated cache, while a new one is generating in a parallel process.
To enable it, just add `'use_stale_cache' => true` to top config of the L2 cache.
