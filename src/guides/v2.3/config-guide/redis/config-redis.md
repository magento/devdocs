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
Starting in Magento 2.0.6, you can use either Redis or [memcached]({{ page.baseurl }}/config-guide/memcache/memcache.html) for session storage. Earlier issues with the Redis session handler and session locking have been resolved.

## Install Redis {#config-redis-install}

Installing and configuring the Redis software is beyond the scope of this guide. Consult resources such as:

*  [Download Redis page](http://redis.io/download)
*  [Redis quick start](http://redis.io/topics/quickstart)
*  [digitalocean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis)
*  [Redis documentation page](http://redis.io/documentation)

## For more information

You can find more information about configuring Redis from the following:

*  [David Alger](http://davidalger.com/development/magento/configuring-magento-2-to-use-redis-cache-backend/)
*  [TechyTalk](http://www.techytalk.info/configuring-cache-storage-backends-magento-2-redis/)

## Next

*  [Use Redis for the Magento page and default cache]({{ page.baseurl }}/config-guide/redis/redis-pg-cache.html)
*  [Use Redis for session storage]({{ page.baseurl }}/config-guide/redis/redis-session.html)
