---
layout: default
group: config-guide
subgroup: 10_mem
title: Use memcached for session storage
menu_title: Use memcached for session storage
menu_order: 1
menu_node: parent
version: 2.0
github_link: config-guide/memcache/memcache.md
functional_areas:
  - Configuration
  - System
  - Setup
---

<h2 id="config-memcache-over">Overview of memcached session storage</h2>
memcached is a general-purpose distributed memory caching system. It is often used to speed up dynamic database-driven websites by caching data and objects in RAM to reduce the number of times an external data source (such as a database or API) must be read. (Source: <a href="https://en.wikipedia.org/wiki/Memcached" target="_blank">Wikipedia</a>)

memcache provides a very large hash table that can be distributed across multiple machines. When the table is full, subsequent inserts cause older data to be purged in least recently used (LRU) order. The size of this hash table is often very large. (Source: <a href="http://memcached.org/" target="_blank">memcached.org</a>)

Magento uses memcached for session storage but not for page caching. For page caching, we recommend <a href="{{page.baseurl}}config-guide/redis/config-redis.html">Redis</a> or <a href="{{page.baseurl}}config-guide/varnish/config-varnish.html">Varnish</a>.

<div class="bs-callout bs-callout-info" id="info">
   <span class="glyphicon-class">
   <p>We recommend you use memcached for session storage. The Redis session handler in the <code>phpredis</code> {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} does not support session locking, which might cause issues with distributed systems and applications that rely on Ajax.</p></span>
</div>

#### Next step
*   <a href="{{page.baseurl}}config-guide/memcache/memcache_ubuntu.html">Install, configure, verify memcached on Ubuntu</a>
*   <a href="{{page.baseurl}}config-guide/memcache/memcache_centos.html">Install, configure, verify memcached on CentOS</a>
