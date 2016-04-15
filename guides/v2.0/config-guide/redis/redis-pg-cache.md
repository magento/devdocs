---
layout: default
group: config-guide
subgroup: 09_Redis
title: Use Redis for page caching
menu_title: Use Redis for page caching
menu_order: 5
menu_node: 
github_link: config-guide/redis/redis-pg-cache.md
---

#### Contents
*	<a href="#reds-sess-prereq">Prerequisite</a>
*	<a href="#config-redis-config">Configure Magento to use Redis for page caching</a>

<h2 id="reds-sess-prereq">Prerequisite</h2>
Before you continue, install Redis as discussed in <a href="{{ site.gdeurl }}config-guide/redis/config-redis.html">Use Redis for page caching or session storage</a>.

<h2 id="config-redis-config">Configure Magento to use Redis for page caching</h2>
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

#### Related topics

 *  <a href="{{ site.gdeurl }}config-guide/config/config-create.html">Create or extend configuration types</a>
 *  <a href="{{ site.gdeurl }}config-guide/config/config-php.html">Magento's deployment configuration</a>