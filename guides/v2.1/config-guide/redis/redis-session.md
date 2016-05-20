---
layout: default
group: config-guide
subgroup: 09_Redis
title: Use Redis for session storage
menu_title: Use Redis for session storage
menu_order: 10
menu_node: 
github_link21: config-guide/redis/redis-session.md
---

#### Contents
*	<a href="#reds-cache-prereq">Prerequisite</a>
*	<a href="#config-redis-config">Configure Magento to use Redis for session storage</a>

<h2 id="reds-cache-prereq">Prerequisite</h2>
Before you continue, install Redis as discussed in <a href="{{ site.gdeurl21 }}config-guide/redis/config-redis.html">Use Redis for page caching or session storage</a>.

<h2 id="config-redis-config">Configure Magento to use Redis for session storage</h2>
Following is a sample configuration to add to `<your Magento install dir>app/etc/env.php`:

    'session' => 
       array (
       'save' => 'redis',
       'redis' => 
          array (
		'host' => '127.0.0.1',
		'port' => '6379',
		'password' => '',
		'timeout' => '2.5',
		'persistent_identifier' => '',
		'database' => '0',
		'compression_threshold' => '2048',
		'compression_library' => 'gzip',
		'log_level' => '1',
		'max_concurrency' => '6',
		'break_after_frontend' => '5',
		'break_after_adminhtml' => '30',
		'first_lifetime' => '600',
		'bot_first_lifetime' => '60',
		'bot_lifetime' => '7200',
		'disable_locking' => '0',
		'min_lifetime' => '60',
		'max_lifetime' => '2592000'
        )
    )

where

<table>
<tbody>
	<tr>
		<th>Parameter</th>
		<th>Meaning</th>
		<th>Default value</th>
	</tr>
<tr>
	<td>host</td>
	<td><p>Fully qualified host name, IP address, or absolute path if using UNIX sockets.</p></td>
	<td>127.0.0.1</td>
</tr>
<tr>
	<td>port</td>
	<td>Redis server listen port.</td>
	<td>6379</td>
</tr>
<tr>
	<td>password</td>
	<td>Specifies a password if your Redis server requires authentication.</td>
	<td>empty</td>
</tr>
<tr>
	<td>timeout</td>
	<td><p>Connection timeout, in seconds.</p></td>
	<td>2.5</td>
</tr>
<tr>
	<td>persistent_identifier</td>
	<td><p>Unique string to enable persistent connections (for example, <code>sess-db0</code>).</p>
		<p><a href="https://github.com/nicolasff/phpredis/issues/70" target="_blank">Known issues with <code>phpredis</code> and <code>php-fpm</code></a>.</p></td>
	<td>empty</td>
</tr>
<tr>
	<td>database</td>
	<td>Unique Redis database number, which is recommended to protect against data loss.</td>
	<td>0</td>
</tr>
<tr>
	<td>compression_threshold</td>
	<td><p>Set to <code>0</code> to disable compression (recommended when <a href="http://suhosin.org/stories/howtos.html#encryption-features" target="_blank"><code>suhosin.session.encrypt = On</code></a>).</p>
	<p><a href="https://github.com/colinmollenhour/Cm_Cache_Backend_Redis/issues/18" target="_blank">Known issue with strings of more than 64KB</a>.</p></td>
		<td>2048</td>
</tr>
<tr>
	<td>compression_library</td>
	<td>Options: <code>gzip</code>, <code>lzf</code>, <code>lz4</code> or <code>snappy</code>.</td>
	<td>gzip</td>
</tr>
<tr>
	<td>log_level</td>
	<td><p>Set to any of the following, listed in order from least verbose to most verbose:</p>
		<ul><li><code>0</code> (emergency: only the most severe errors)</li>
			<li><code>1</code> (alert: immediate action required)</li>
			<li><code>2</code> (critical: application component unavailable)</li>
			<li><code>3</code> (error: runtime errors, not critical but must be monitored)</li>
			<li><code>4</code> (warning: additional information, recommended)</li>
			<li><code>5</code> (notice: normal but significant condition)</li>
			<li><code>6</code> (info: informational messages)</li>
			<li><code>7</code> (debug: the most information for development or testing only)</li></ul></td>
	<td>1</td>
</tr>
<tr>
	<td>max_concurrency</td>
	<td><p>Maximum number of processes that can wait for a lock on one session. For large production clusters, set this  to at least 10% of the number of PHP processes.</p></td>
	<td>6</td>
</tr>
<tr>
	<td>break_after_frontend</td>
	<td><p>Number of seconds to wait before trying to break the lock for frontend (that is, storefront) session.</p></td>
	<td>5</td>
</tr>
<tr>
	<td>break_after_adminhtml</td>
	<td><p>Number of seconds to wait before trying to break the lock for an adminhtml (that is, Magento Admin) session.</p></td>
	<td>30</td>
</tr>
<tr>
	<td>first_lifetime</td>
	<td><p>Lifetime, in seconds, of session for non-bots on the first write, or use <code>0</code> to disable.</p></td>
	<td>600</td>
</tr>
<tr>
	<td>bot_first_lifetime</td>
	<td><p>Lifetime, in seconds, of session for bots on the first write, or use <code>0</code> to disable.</p></td>
	<td>60</td>
</tr>
<tr>
	<td>disable_locking</td>
	<td><p>Disable session locking entirely.</p></td>
	<td>false</td>
</tr>
<tr>
	<td>min_lifetime</td>
	<td><p>Minimum session lifetime, in seconds.</p></td>
	<td>60</td>
</tr>
<tr>
	<td>max_lifetime</td>
	<td><p>Maximum session lifetime, in seconds.</p></td>
	<td>2592000 (720 hours)</td>
</tr>
</tbody>
</table>

#### Related topics

 *  <a href="{{ site.gdeurl21 }}config-guide/config/config-create.html">Create or extend configuration types</a>
 *  <a href="{{ site.gdeurl21 }}config-guide/config/config-php.html">Magento's deployment configuration</a>