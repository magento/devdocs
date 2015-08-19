---
layout: default
group: config-guide
subgroup: Redis
title: Configure Redis
menu_title: Configure Redis
menu_order: 1
menu_node: parent
github_link: config-guide/config/redis/config-redis.md
---


#### Contents
* TBD
* TBD

<h2 id="config-redis-over">Overview of the Redis solution</h2>
<a href="http://redis.io/" target="_blank">Redis is an optional backend cache solution to replace <a href="http://framework.zend.com/apidoc/1.0/Zend_Cache/Backend/Zend_Cache_Backend_File.html" target="_blank">Zend_Cache_Backend_File</a>, which is used in Magento 2 by default.

### Issues with `Zend_Cache_Backend_File`

* The `core_cache_tag` table constantly grows. If a Magento instance has multiple web sites and web stores with large catalogs, the table can grow to 15 million records in less than a day. Insertion into `core_cache_tag` leads to issues with MySQL server, including performance degradation. 

  (A *tag* is an identifier that classifies different types of Magento cache objects.)

* The TwoLevels backend is more difficult to maintain because two services are required to make it work which makes it difficult to analyze cache content when necessary.  
Further, memcached itself has limitations such as a maximum object size and fixed bucket sizes which also contribute to difficult maintenance.

* TwoLevels backend does not scale well because using the database as part of the cache backend adds additional load to the master database server. Additionally, there is no 
reliable method for `memcached` replication.

### Why Redis is better
Advantages of Redis include:

* Redis can also be used for PHP session storage, making it possible to completely replace `memcached` with Redis.

* The Redis backend works by indexing tags in files so that tag operations do not require a full scan of every cache file. 

* The metadata and the cache record are stored in the same file rather than separate files resulting in fewer inodes and fewer file stat, read, write, lock, and unlink operations. Also, the original hashed directory structure had very poor distribution due to the `adler32` hashing algorithm and prefixes. The multi-level nested directories have been dropped in favor of single-level nesting made from multiple characters.

* The backend supports tag-based cache cleanup without `foreach` loops. 

* Redis supports on-disk save and master/slave replication. 

  This is a highly requested feature that is not supported by `memcached`. Replication avoids a single point of failure and provides high  availability.




#### Related topics

 *  <a href="{{ site.gdeurl }}config-guide/config/config-create.html">Create or extend configuration types</a>
 *  <a href="{{ site.gdeurl }}config-guide/config/config-php.html">Magento's deployment configuration</a>