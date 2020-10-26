---
group: configuration-guide
title: Configure Redis
functional_areas:
  - Configuration
  - System
  - Setup
---

Redis features include:

*  Redis can also be used for [PHP](https://glossary.magento.com/php) session storage.

*  The backend supports tag-based cache cleanup without `foreach` loops.

*  Redis supports on-disk save and master/slave replication.

{:.bs-callout-info}
Starting from Magento 2.0.6, you can use either Redis or [memcached]({{ page.baseurl }}/config-guide/memcache/memcache.html) for session storage. Earlier issues with the Redis session handler and session locking have been resolved.

## Install Redis {#config-redis-install}

Installing and configuring the Redis software is beyond the scope of this guide. Consult resources such as:

*  [Download Redis page](http://redis.io/download)
*  [Redis quick start](http://redis.io/topics/quickstart)
*  [digitalocean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis)
*  [Redis documentation page](http://redis.io/documentation)

## Set up redis configuration {#config-redis-setup}

Depending on your installation, you can usually find your Redis configuration in one of the following files: `/etc/redis/redis.conf` or `/etc/redis/<port>.conf`

To optimize the Redis instance for your requirements, you get best results by using a dedicated instance for each session, Magento cache and FPC.

For sessions, we recommend that you enable persistence to copy Redis data to disk using either of the following persistence options: regular Redis Database Backup (RDB) snapshots, or Append Only File (AOF) persistence logs.

*  RDB (Redis Database Backup) snapshots store the complete database in a dump file after a given time, when a minimum number of keys have changed since the last save. Use the `save` setting inside the `redis.conf` file to configure this setting.

*  AOF (Append Only File) stores each write operation sent to Redis in a journal file. Redis reads this file on restart only and uses it to restore the original dataset.

You can also enable both the RDB and AOF options at the same time. For additional details including the advantages and disadvantages of the persistence options, see the [Redis Persistence documentation](https://redis.io/topics/persistence).

For the cache instance, set up the instance so that it is large enough to store your entire Magento cache.
Size requirements depend on different factors like the number of products and store views. As a starting point, you can use the size of the cache folder on your file system.  For example, if the `var/cache` folder on your file system is  5 GB, set up your Redis instance with at least 5 GB to start. Persistence is not required for the cache instance because the Magento cache can be restored. See also [Redis cache guide](https://redis.io/topics/lru-cache).

For performance tuning, you can also enable the following settings for asynchronous deletion. These settings do not change the behavior of Redis. See also [redis news](http://antirez.com/news/93) for details about asynchronous deletion.

```ini
lazyfree-lazy-eviction yes
lazyfree-lazy-expire yes
lazyfree-lazy-server-del yes
replica-lazy-flush yes
```
On Redis 6.x and later, you can also add the following value:

```ini
lazyfree-lazy-user-del yes
```

## For more information

You can find more information about configuring Redis from the following:

*  [David Alger](http://davidalger.com/development/magento/configuring-magento-2-to-use-redis-cache-backend/)
*  [TechyTalk](http://www.techytalk.info/configuring-cache-storage-backends-magento-2-redis/)

## Next

*  [Use Redis for the Magento page and default cache]({{ page.baseurl }}/config-guide/redis/redis-pg-cache.html)
*  [Use Redis for session storage]({{ page.baseurl }}/config-guide/redis/redis-session.html)
