---
layout: default
group: config-guide
subgroup: 09_Redis
title: Configure Redis
menu_title: Configure Redis
menu_order: 1
menu_node: parent
version: 2.0
github_link: config-guide/redis/config-redis.md
---

#### Contents
*	<a href="#config-redis-over">Overview of the Redis solution</a>
*	<a href="#config-redis-install">Install Redis</a>
*	<a href="{{ site.gdeurl }}config-guide/redis/redis-session.html">Redis for session storage</a>
*	<a href="{{ site.gdeurl }}config-guide/redis/redis-pg-cache.html">Redis for page caching</a>
*	<a href="#config-redis-info">For more information</a>

<h2 id="config-redis-over">Overview of the Redis solution</h2>
<a href="http://redis.io/" target="_blank">Redis</a> is an optional backend cache solution to replace <a href="http://framework.zend.com/apidoc/1.0/Zend_Cache/Backend/Zend_Cache_Backend_File.html" target="_blank">Zend_Cache_Backend_File</a>, which is used in Magento 2 by default.

### Issues with `Zend_Cache_Backend_File`

* The `core_cache_tag` table constantly grows. If a Magento instance has multiple web sites and web stores with large catalogs, the table can grow to 15 million records in less than a day. Insertion into `core_cache_tag` leads to issues with MySQL server, including performance degradation. 

  (A *tag* is an identifier that classifies different types of Magento cache objects.)

* The TwoLevels backend is more difficult to maintain because two services are required to make it work which makes it difficult to analyze cache content when necessary.  
Further, memcached itself has limitations such as a maximum object size and fixed bucket sizes which also contribute to difficult maintenance.

* The <a href="http://framework.zend.com/manual/1.12/en/zend.cache.backends.html#zend.cache.backends.twolevels" target="_blank">Zend TwoLevels backend</a> does not scale well because using the database as part of the cache backend adds additional load to the master database server. Additionally, there is no reliable method for `memcached` replication.

### Why Redis is better
Advantages of Redis include:

* Redis can also be used for PHP session storage, making it possible to completely replace `memcached` with Redis.

* The Redis backend works by indexing tags in files so that tag operations do not require a full scan of every cache file. 

* The metadata and the cache record are stored in the same file rather than separate files resulting in fewer inodes and fewer file stat, read, write, lock, and unlink operations. Also, the original hashed directory structure had very poor distribution due to the `adler32` hashing algorithm and prefixes. The multi-level nested directories have been dropped in favor of single-level nesting made from multiple characters.

* The backend supports tag-based cache cleanup without `foreach` loops. 

* Redis supports on-disk save and master/slave replication. 

  This is a highly requested feature that is not supported by `memcached`. Replication avoids a single point of failure and provides high  availability.

<div class="bs-callout bs-callout-info" id="info">
   <span class="glyphicon-class">
   <p>Starting in Magento 2.0.6, you can use either Redis or <a href="{{ site.gdeurl }}config-guide/memcache/memcache.html">memcached</a> for session storage. Earlier issues with the Redis session handler and session locking have been resolved.</p></span>
</div>

<h2 id="config-redis-install">Install Redis</h2>
Installing and configuring the Redis software is beyond the scope of this guide. Consult resources such as:

*	<a href="http://redis.io/download" target="_blank">Download Redis page</a>
*	<a href="http://redis.io/topics/quickstart" target="_blank">Redis quick start</a>
*	<a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis" target="_blank">digitalocean</a>
*	<a href="http://redis.io/documentation" target="_blank">Redis documentation page</a>

<h2 id="config-redis-info">For more information</h2>
You can find more information about configuring Redis from the following:

*	<a href="http://davidalger.com/development/magento/configuring-magento-2-to-use-redis-cache-backend/" target="_blank">David Alger</a>
*	<a href="http://www.techytalk.info/configuring-cache-storage-backends-magento-2-redis/" target="_blank">TechyTalk</a>
<!-- *	<a href="http://info2.magento.com/rs/magentoenterprise/images/MagentoECG-UsingRedisasaCacheBackendinMagento.pdf" target="_blank">Magento Expert Consulting Group (ECG) article <em>written for Magento 1.x</em> -->

#### Next

*	<a href="{{ site.gdeurl }}config-guide/redis/redis-session.html">Redis for session storage</a>
*	<a href="{{ site.gdeurl }}config-guide/redis/redis-pg-cache.html">Redis for page caching</a>
