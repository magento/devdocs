---
layout: default
group: config-guide
subgroup: 09_Redis
title: Configure Redis
menu_title: Configure Redis
menu_order: 1
menu_node: parent
github_link: config-guide/redis/config-redis.md
---

#### Contents
*	<a href="#config-redis-over">Overview of the Redis solution</a>
*	<a href="#config-redis-install">Install Redis</a>
*	<a href="#config-redis-config">Configure Magento to use Redis</a>
*	<a href="#config-redis-info">For more information</a>

<h2 id="config-redis-over">Overview of the Redis solution</h2>
<a href="http://redis.io/" target="_blank">Redis</a> is an optional backend cache solution to replace <a href="http://framework.zend.com/apidoc/1.0/Zend_Cache/Backend/Zend_Cache_Backend_File.html" target="_blank">Zend_Cache_Backend_File</a>, which is used in Magento 2 by default.

This topic discusses how to configure Redis to serve as the following Magento caches:

*	The page cache (that is, full page cache). 
*	The default cache, which stores: configuration, layout configuration, block HTML output, collections data, reflection data, database DDL operations, EAV types and attributes, translations, web services configuration, and integration API.

<div class="bs-callout bs-callout-info" id="info">
   <span class="glyphicon-class">
   <p>You <em>must</em> use Redis for caching if you have multiple Magento webnodes. The file system cache is inefficient and can result in errors.</p></span>
</div>


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
   <p>We recommend you use <a href="{{ site.gdeurl }}config-guide/memcache/memcache.html">memcached</a> for session storage. The Redis session handler in the <code>phpredis</code> PHP extension does not support session locking, which might cause issues with distributed systems and applications that rely on Ajax. We're actively working on a solution.</p></span>
</div>

<h2 id="config-redis-install">Install Redis</h2>
Installing and configuring the Redis software is beyond the scope of this guide. Consult resources such as:

*	<a href="http://redis.io/download" target="_blank">Download Redis page</a>
*	<a href="http://redis.io/topics/quickstart" target="_blank">Redis quick start</a>
*	<a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis" target="_blank">digitalocean</a>
*	<a href="http://redis.io/documentation" target="_blank">Redis documentation page</a>

<h2 id="config-redis-config">Configure Magento to use Redis</h2>
Following is a sample configuration to add to `<your Magento install dir>app/etc/env.php`:

	'cache' =>
	array(
	   'frontend' =>
	   array(
	      'default' =>
	      array(
	         'backend' => 'Cm_Cache_Backend_Redis',
	         'backend_options' =>
	         array(
	            'server' => '127.0.0.1',
	            'port' => '6379'
	            ),
	    ),
	    'page_cache' =>
	    array(
	      'backend' => 'Cm_Cache_Backend_Redis',
	      'backend_options' =>
	       array(
	         'server' => '127.0.0.1',
	         'port' => '6379',
	         'database' => '1',
	         'compress_data' => '0'
	       )
	    )
	  )
	)

where

<table>
<tbody>
	<tr>
		<th>Parameter</th>
		<th>Meaning</th>
	</tr>
<tr>
	<td>default, page_cache</td>
	<td><p>Specify the segment name to use a particular segment or a default shortcut for all other caches.</p>
		<p>The <code>default</code> cache segment enables you to configure all cache segments except for <code>page_cache</code> (the full page cache).</p></td>
</tr>
<tr>
	<td>server</td>
	<td>Absolute URL to your Redis server, or <code>127.0.0.1</code> if Redis is installed on the Magento server, or a an absolute path to a UNIX socket.</td>
</tr>
<tr>
	<td>port</td>
	<td>Redis server listen port</td>
</tr>
<tr>
	<td>database</td>
	<td>Required if you use Redis for both the default and full page cache. You must specify the database number of one of the caches; the other cache uses 0 by default.</td>
</tr>
<tr>
	<td>password</td>
	<td>Specifies a password if your Redis server requires authentication.</td>
</tr>
<tr>
	<td>compress_data</td>
	<td>Required only for the full page cache. Set to <code>1</code> to compress the full page cache. Redis chooses a compression algorithm in the following order, based on availability: <a href="https://github.com/google/snappy" target="_blank">snappy</a>, <a href="https://github.com/Cyan4973/lz4" target="_blank">l4z</a>, or <a href="http://oldhome.schmorp.de/marc/liblzf.html" target="_blank">lzf</a>. If none of them available, Redis uses gzip.</td>
</tr>
</tbody>
</table>

<h2 id="config-redis-info">For more information</h2>
You can find more information about configuring Redis from the following:

*	<a href="http://davidalger.com/development/magento/configuring-magento-2-to-use-redis-cache-backend/" target="_blank">David Alger</a>
*	<a href="http://www.techytalk.info/configuring-cache-storage-backends-magento-2-redis/" target="_blank">TechyTalk</a>
<!-- *	<a href="http://info2.magento.com/rs/magentoenterprise/images/MagentoECG-UsingRedisasaCacheBackendinMagento.pdf" target="_blank">Magento Expert Consulting Group (ECG) article <em>written for Magento 1.x</em> -->

#### Related topics

 *  <a href="{{ site.gdeurl }}config-guide/config/config-create.html">Create or extend configuration types</a>
 *  <a href="{{ site.gdeurl }}config-guide/config/config-php.html">Magento's deployment configuration</a>