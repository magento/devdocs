---
group: configuration-guide
title: Using TwoLevel cache in Magento application
functional_areas:
  - Configuration
  - System
  - Cache
---

## Starting from 2.3.5 there is a possibility to set up TwoLevel Syncronized cache as base cache adapter.

###Overview.
The main idea is to reduce network size transferring between remote cache storage and application. In Vanilla Magento instance we transfer around 300kb per 1 request and may reach network limitation, which is mainly up to 10Gbps, in around of ~1000 requests.

To overcame this and reduce pressure on redis we keep cache data on each web node locally and use Remote Cache for two purposes:
- Check only data version to ensure that we have latest cache locally.
- Transfer latest cache from remote to local if we have stale one.

We keep hashed data version in remote in addition to data, it has suffix ':version' in addition to ordinary key. In case we have outdated data locally we will transfer it form remote and save with a local cache adapter.

###Configuration example. 

```php?start_inline=1
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
Where

* `backend` is our RemoteSynchronizedCache TwoLevel cache implementation.
* `remote_backend` is on of the supported cache implementation where we aim to store cache remotely, e.g. Redis or Mysql.
* `remote_backend_options` is a regular option that cache implementation has, e.g. Redis.
* `local_backend` is on of the supported cache implementation where we aim to store cache locally, e.g. Cm_Cache_Backend_File or APC adapter

We suggest to use our Redis implementation of cache - `\Magento\Framework\Cache\Backend\Redis` as remote, and File cache implementation - `Cm_Cache_Backend_File` as local cache

We highly recommend to use it in combination with `cache preload` feature, this will drastically decrease pressure on redis.