---
layout: default
group: config-guide
subgroup: 09_Redis
title: Use Redis for session storage
menu_title: Use Redis for session storage
menu_order: 10
menu_node:
version: 2.2
github_link: config-guide/redis/redis-session.md
functional_areas:
  - Configuration
  - System
  - Setup
---

You must [install Redis]({{page.baseurl}}/config-guide/redis/config-redis.html#config-redis-install) before continuing.

Magento now provides command line options to configure Redis session storage. In previous releases, you edited the `<Magento install dir>app/etc/env.php` file. The command line provides validation and is the recommended configuration method, but you can still edit the `env.php` file.

Run the `setup:config:set` command and specify Redis-specific parameters.

`bin/magento setup:config:set --session-save=redis --session-save-redis-<parameter_name>=<parameter_value>...`

where

`--session-save=redis` enables Redis session storage. If this feature has already been enabled, omit this parameter.

`--session-save-redis-<parameter_name>=<parameter_value>` is a list of parameter/value pairs that configure session storage:

<table>
<tbody>
<tr>
<th>Command line Parameter</th>
<th>Parameter name</th>
<th>Meaning</th>
<th>Default value</th>
</tr>
<tr>
<td>session-save-redis-host</td>
<td>host</td>
<td>
<p>Fully qualified host name, IP address, or absolute path if using UNIX sockets.</p>
</td>
<td>localhost</td>
</tr>
<tr>
<td>session-save-redis-port</td>
<td>port</td>
<td>Redis server listen port.</td>
<td>6379</td>
</tr>
<tr>
<td>session-save-redis-password</td>
<td>password</td>
<td>Specifies a password if your Redis server requires authentication.</td>
<td>empty</td>
</tr>
<tr>
<td>session-save-redis-timeout</td>
<td>timeout</td>
<td>
<p>Connection timeout, in seconds.</p>
</td>
<td>2.5</td>
</tr>
<tr>
<td>session-save-redis-persistent-id</td>
<td>persistent_identifier</td>
<td>
<p>Unique string to enable persistent connections (for example, <code>sess-db0</code>).</p>
<p><a href="https://github.com/nicolasff/phpredis/issues/70" target="_blank">Known issues with <code>phpredis</code> and <code>php-fpm</code></a>.</p>
</td>
<td>empty</td>
</tr>
<tr>
<td>session-save-redis-db</td>
<td>database</td>
<td>
<p>Unique Redis database number, which is recommended to protect against data loss.</p>
<p><strong>Important</strong>: If you use Redis for more than one type of caching, the database numbers must be different. It is recommended that you assign the default caching database number to 0, the page caching database number to 1, and the session storage database number to 2. </p>
</td>
<td>0</td>
</tr>
<tr>
<td>session-save-redis-compression-threshold</td>
<td>compression_threshold</td>
<td>
<p>Set to <code>0</code> to disable compression (recommended when <a href="http://suhosin.org/stories/howtos.html#encryption-features" target="_blank"><code>suhosin.session.encrypt = On</code></a>).</p>
<p><a href="https://github.com/colinmollenhour/Cm_Cache_Backend_Redis/issues/18" target="_blank">Known issue with strings of more than 64KB</a>.</p>
</td>
<td>2048</td>
</tr>
<tr>
<td>session-save-redis-compression-lib</td>
<td>compression_library</td>
<td>Options: <code>gzip</code>, <code>lzf</code>, <code>lz4</code> or <code>snappy</code>.</td>
<td>gzip</td>
</tr>
<tr>
<td>session-save-redis-log-level</td>
<td>log_level</td>
<td>
<p>Set to any of the following, listed in order from least verbose to most verbose:</p>
<ul>
<li><code>0</code> (emergency: only the most severe errors)</li>
<li><code>1</code> (alert: immediate action required)</li>
<li><code>2</code> (critical: application component unavailable)</li>
<li><code>3</code> (error: runtime errors, not critical but must be monitored)</li>
<li><code>4</code> (warning: additional information, recommended)</li>
<li><code>5</code> (notice: normal but significant condition)</li>
<li><code>6</code> (info: informational messages)</li>
<li><code>7</code> (debug: the most information for development or testing only)</li>
</ul>
</td>
<td>1</td>
</tr>
<tr>
<td>session-save-redis-max-concurrency</td>
<td>max_concurrency</td>
<td>
<p>Maximum number of processes that can wait for a lock on one session. For large production clusters, set this to at least 10% of the number of PHP processes.</p>
</td>
<td>6</td>
</tr>
<tr>
<td>session-save-redis-break-after-frontend</td>
<td>break_after_frontend</td>
<td>
<p>Number of seconds to wait before trying to break the lock for frontend (that is, storefront) session.</p>
</td>
<td>5</td>
</tr>
<tr>
<td>session-save-redis-break-after-adminhtml</td>
<td>break_after_adminhtml</td>
<td>
<p>Number of seconds to wait before trying to break the lock for an adminhtml (that is, Magento Admin) session.</p>
</td>
<td>30</td>
</tr>
<tr>
<td>session-save-redis-first-lifetime</td>
<td>first_lifetime</td>
<td>
<p>Lifetime, in seconds, of session for non-bots on the first write, or use <code>0</code> to disable.</p>
</td>
<td>600</td>
</tr>
<tr>
<td>session-save-redis-bot-first-lifetime</td>
<td>bot_first_lifetime</td>
<td>
<p>Lifetime, in seconds, of session for bots on the first write, or use <code>0</code> to disable.</p>
</td>
<td>60</td>
</tr>
<tr>
<td>session-save-redis-bot-lifetime</td>
<td>bot_lifetime</td>
<td>
<p>Lifetime, in seconds, of session for bots on subsequent writes, or use <code>0</code> to disable.</p>
</td>
<td>7200</td>
</tr>
<tr>
<td>session-save-redis-disable-locking</td>
<td>disable_locking</td>
<td>
<p>Disable session locking entirely.</p>
</td>
<td>0 (false)</td>
</tr>
<tr>
<td>session-save-redis-min-lifetime</td>
<td>min_lifetime</td>
<td>
<p>Minimum session lifetime, in seconds.</p>
</td>
<td>60</td>
</tr>
<tr>
<td>session-save-redis-max-lifetime</td>
<td>max_lifetime</td>
<td>
<p>Maximum session lifetime, in seconds.</p>
</td>
<td>2592000 (720 hours)</td>
</tr>
</tbody>
</table>

### Example command

The following example sets Redis as the session data store, sets the host to `redis.example.com`, sets the log level to 3, and sets the datbase number to 2. All other parameters are set to the default value.

`bin/magento setup:config:set --session-save=redis --session-save-redis-host=redis.example.com --session-save-redis-log-level=3 --session-save-redis-db=2`

### Result

Magento adds lines similar to the following to `<your Magento install dir>app/etc/env.php`:

    'session' =>
    array (
      'save' => 'redis',
      'redis' =>
      array (
        'host' => 'redis.example.com',
        'port' => '6379',
        'password' => '',
        'timeout' => '2.5',
        'persistent_identifier' => '',
        'database' => '2',
        'compression_threshold' => '2048',
        'compression_library' => 'gzip',
        'log_level' => '3',
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
    ),

## Basic verification {#redis-verify}

{% include config/redis-verify.md %}

#### Related topics

 *  <a href="{{page.baseurl}}/config-guide/config/config-create.html">Create or extend configuration types</a>
 *  <a href="{{page.baseurl}}/config-guide/config/config-php.html">Magento's deployment configuration</a>
