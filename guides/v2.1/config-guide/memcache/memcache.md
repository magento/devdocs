---
layout: default
group: config-guide
title: Use memcached for session storage
version: 2.1
github_link: config-guide/memcache/memcache.md
functional_areas:
  - Configuration
  - System
  - Setup
---

Memcached is a general-purpose, distributed memory caching system. It is often used to speed up dynamic database-driven websites by caching data and objects in RAM to reduce the number of times an external data source (such as a database or API) must be read. (Source: [Wikipedia](https://en.wikipedia.org/wiki/Memcached){:target="_blank"})

Memcache provides a very large hash table that can be distributed across multiple machines. When the table is full, subsequent inserts cause older data to be purged in least recently used (LRU) order. The size of this hash table is often very large. (Source: [memcached.org](http://memcached.org/){:target="_blank})

Magento uses memcached for session storage but not for page caching. For page caching, we recommend [Redis]({{page.baseurl}}/config-guide/redis/config-redis.html) or [Varnish]({{page.baseurl}}/config-guide/varnish/config-varnish.html). 

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Refer to [Why Redis is better]({{page.baseurl}}/config-guide/redis/config-redis.html#why-redis-is-better) for a list of advantages to using Redis.
</div>

#### Next step
*   [Install, configure, verify memcached on Ubuntu]({{page.baseurl}}/config-guide/memcache/memcache_ubuntu.html)
*   [Install, configure, verify memcached on CentOS]({{page.baseurl}}/config-guide/memcache/memcache_centos.html)
