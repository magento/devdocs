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
    [
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

We recommend the use of Redis for remote caching - `\Magento\Framework\Cache\Backend\Redis`, and the File cache implementation - `Cm_Cache_Backend_File` as the local cache.
We also recommend the use of the [`cache preload`]({{page.baseurl}}/config-guide/redis/redis-pg-cache.html#redis-preload-feature) feature, as it will drastically decrease the pressure on Redis. Do not forget to add suffix ':version' for preload keys.
