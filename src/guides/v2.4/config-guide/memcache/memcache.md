---
group: configuration-guide
title: Use memcached for session storage
functional_areas:
  - Configuration
  - System
  - Setup
---

Memcached is a general-purpose, distributed memory caching system. It is often used to speed up dynamic database-driven websites by caching data and objects in RAM to reduce the number of times an external data source (such as a database or API) must be read. (Source: [Wikipedia](https://en.wikipedia.org/wiki/Memcached))

Memcached provides a very large hash table that can be distributed across multiple machines. When the table is full, subsequent inserts cause older data to be purged in least recently used (LRU) order. The size of this hash table is often very large. (Source: [memcached.org](http://memcached.org/))

Magento uses memcached for session storage but not for page caching. For page caching, we recommend [Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html) or [Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html).

{:.bs-callout-info}
Refer to [Why Redis is better]({{ page.baseurl }}/config-guide/redis/config-redis.html) for a list of advantages to using Redis.

{:.ref-header}
Related topics

*  [Install, configure, verify memcached on Ubuntu]({{ page.baseurl }}/config-guide/memcache/memcache_ubuntu.html)
*  [Install, configure, verify memcached on CentOS]({{ page.baseurl }}/config-guide/memcache/memcache_centos.html)
