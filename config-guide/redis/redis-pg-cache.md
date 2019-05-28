---
group: configuration-guide
subgroup: 09_Redis
title: Use Redis for the Magento page and default cache
menu_title: Use Redis for the Magento page and default cache
menu_order: 5
menu_node:
functional_areas:
  - Configuration
  - System
  - Setup
---

## Prerequisite   {#reds-sess-prereq}

Before you continue, [install Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html#config-redis-install).

## Configure Magento to use Redis for default and page caching {#config-redis-config}

Following is a sample configuration that causes Magento to use Redis for both the default cache (`default` array) and the full page cache (`page_cache` array). Magento's caching is implemented by [`Magento\Framework\App\CacheInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/CacheInterface.php){:target="_blank"}.

Add a configuration similar to the following to `<your Magento install dir>app/etc/env.php`:

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
	            'database' => '0',
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
	),

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
	<td>Absolute URL to your Redis server, or <code>127.0.0.1</code> if Redis is installed on the Magento server, or an absolute path to a UNIX socket.</td>
</tr>
<tr>
	<td>port</td>
	<td>Redis server listen port</td>
</tr>
<tr>
	<td>database</td>
	<td><p>Required if you use Redis for both the default and full page cache. You must specify the database number of one of the caches; the other cache uses <code>0</code> by default.</p>
	<p><strong>Important</strong>: If you use Redis for more than one type of caching (for example, default cache and page cache), the database numbers must be different.</p></td>
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

## Basic verification {#redis-verify}

{% include config/redis-verify.md %}

#### Related topics

*	[Use Redis for session storage]({{ page.baseurl }}/config-guide/redis/redis-session.html)
*  <a href="{{ page.baseurl }}/config-guide/config/config-create.html">Create or extend configuration types</a>
*  <a href="{{ page.baseurl }}/config-guide/config/config-php.html">Magento's deployment configuration</a>
