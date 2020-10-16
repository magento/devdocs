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
Starting in Magento 2.0.6, you can use either Redis or [memcached]({{ page.baseurl }}/config-guide/memcache/memcache.html) for session storage. Earlier issues
with the Redis session handler and session locking have been resolved.

## Install Redis {#config-redis-install}

Installing and configuring the Redis software is beyond the scope of this guide. Consult resources such as:

*  [Download Redis page](http://redis.io/download)
*  [Redis quick start](http://redis.io/topics/quickstart)
*  [digitalocean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis)
*  [Redis documentation page](http://redis.io/documentation)

## Set up redis configuration {#config-redis-setup}

Depending on your installation, you can usually find your Redis configuration at /etc/redis/redis.conf or /etc/redis/`port`.conf

To optimize your Redis instance to your needs, you get best results when using a dedicated instance for each sessions, Magento cache and FPC.

For sessions, it's recommended to enable persistence. This can either be done by regular RDB snapshots or by using the AOF persistence logs.
You can get the details advantages and disadvantages on the [Redis Persistence documentation](https://redis.io/topics/persistence).

For the cache instance, you should make sure, the instance is set up big enough to store your whole Magento cache in it.
The required size depends on different factors (like number of products and store views) but the required size of the file system cache gives you the order of
magnitude. Persistence is not required here as the Magento cache can be restored. See also [Redis cache guide](https://redis.io/topics/lru-cache).

For performance tuning you can also enable these settings for asynchronous deletion. This will not change the behavior of Redis (see also
[redis news](http://antirez.com/news/93).

```ini
lazyfree-lazy-eviction yes
lazyfree-lazy-expire yes
lazyfree-lazy-server-del yes
replica-lazy-flush yes
```
From redis 6.x onwards, you can also set

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
