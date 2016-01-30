---
layout: default
group: config-guide
subgroup: Redis
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
Before you continue, install Redis as discussed in <a href="{{ site.gdeurl21 }}config-guide/redis/config-redis.html">Use Redis for page caching or session storage</a>.

<h2 id="config-redis-config">Configure Magento to use Redis for page caching</h2>
Following is a sample configuration to add to `<your Magento install dir>app/etc/env.php`:

	'cache' => [
		'frontend' => [
			'page_cache' => [
				'backend' => 'Cm_Cache_Backend_Redis',
				'backend_options' => [
					'server' => '127.0.0.1', 
					'port' => '6379',
					'persistent' => '', 
					'database' => 0, 
					'password' => '', 
					'force_standalone' => 0, 
					'connect_retries' => 1, 
		],

where

<table>
<tbody>
	<tr>
		<th>Parameter</th>
		<th>Meaning</th>
	</tr>
<tr>
	<td>page_cache</td>
	<td><p>Specify the segment name to use a particular segment or a default shortcut for all other caches.</p>
		<p>The <code>default</code> cache segment enables you to configure all cache segments except for <code>page_cache</code>.</p></td>
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
	<td>persistent</td>
	<td><p>Specify a unique string to enable persistent connections. For example, <code>sess-db0</code>.</p>
		<p>Note that there are <a href="https://github.com/nicolasff/phpredis/issues/70" target="_blank">known issues phpredis and php-fpm</a>.</p></td>
</tr>
<tr>
	<td>database</td>
	<td>Unique Redis database number, which is recommended to protect against data loss.</td>
</tr>
<tr>
	<td>password</td>
	<td>Specifies a password if your Redis server requires authentication.</td>
</tr>
<tr>
	<td>force_standalone</td>
	<td>Use <code>0</code> for phpredis or <code>1</code> for standalone PHP.</td>
</tr>
<tr>
	<td>connect_retries</td>
	<td>Reduces errors due to random connection failures. Specify <code>1</code> to not retry after the first failure.</td>
</tr>
</tbody>
</table>

#### Related topics

 *  <a href="{{ site.gdeurl21 }}config-guide/config/config-create.html">Create or extend configuration types</a>
 *  <a href="{{ site.gdeurl21 }}config-guide/config/config-php.html">Magento's deployment configuration</a>