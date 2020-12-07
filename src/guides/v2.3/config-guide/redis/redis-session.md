---
group: configuration-guide
title: Use Redis for session storage
functional_areas:
  - Configuration
  - System
  - Setup
---

## Prerequisite {#reds-cache-prereq}

You must [install Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html#config-redis-install) before continuing.

## Configure Magento to use Redis for session storage {#config-redis-config}

Magento now provides command line options to configure Redis session storage. In previous releases, you edited the `<Magento install dir>app/etc/env.php` file. The command line provides validation and is the recommended configuration method, but you can still edit the `env.php` file.

Run the `setup:config:set` command and specify Redis-specific parameters.

```bash
bin/magento setup:config:set --session-save=redis --session-save-redis-<parameter_name>=<parameter_value>...
```

where

`--session-save=redis` enables Redis session storage. If this feature has already been enabled, omit this parameter.

`--session-save-redis-<parameter_name>=<parameter_value>` is a list of parameter/value pairs that configure session storage:

|Command line Parameter|Parameter name|Meaning|Default value|
|--- |--- |--- |--- |
|session-save-redis-host|host|Fully qualified hostname, IP address, or absolute path if using UNIX sockets.|localhost|
|session-save-redis-port|port|Redis server listen port.|6379|
|session-save-redis-password|password|Specifies a password if your Redis server requires authentication.|empty|
|session-save-redis-timeout|timeout|Connection timeout, in seconds.|2.5|
|session-save-redis-persistent-id|persistent_identifier|Unique string to enable persistent connections (for example, sess-db0).<br/>[Known issues with phpredis and php-fpm](https://github.com/nicolasff/phpredis/issues/70).
|session-save-redis-db|database|Unique Redis database number, which is recommended to protect against data loss.<br/><br/>**Important**: If you use Redis for more than one type of caching, the database numbers must be different. It is recommended that you assign the default caching database number to 0, the page caching database number to 1, and the session storage database number to 2.|0|
|session-save-redis-compression-threshold|compression_threshold|Set to 0 to disable compression (recommended when [suhosin.session.encrypt = On](http://suhosin.org/stories/howtos.html#encryption-features)).<br/>[Known issue with strings of more than 64KB](https://github.com/colinmollenhour/Cm_Cache_Backend_Redis/issues/18).|2048|
|session-save-redis-compression-lib|compression_library|Options: gzip, lzf, lz4 or snappy.|gzip|
|session-save-redis-log-level|log_level|Set to any of the following, listed in order from least verbose to most verbose:<br/>0 (emergency: only the most severe errors)<br/>1 (alert: immediate action required)<br/>2 (critical: application component unavailable)<br/>3 (error: runtime errors, not critical but must be monitored)<br/>4 (warning: additional information, recommended)<br/>5 (notice: normal but significant condition)<br/>6 (info: informational messages)<br/>7 (debug: the most information for development or testing only)|1|
|session-save-redis-max-concurrency|max_concurrency|Maximum number of processes that can wait for a lock on one session. For large production clusters, set this to at least 10% of the number of PHP processes.|6|
|session-save-redis-break-after-frontend|break_after_frontend|Number of seconds to wait before trying to break the lock for frontend (that is, storefront) session.|5|
|session-save-redis-break-after-adminhtml|break_after_adminhtml|Number of seconds to wait before trying to break the lock for an adminhtml (that is, Magento Admin) session.|30|
|session-save-redis-first-lifetime|first_lifetime|Lifetime, in seconds, of session for non-bots on the first write, or use 0 to disable.|600|
|session-save-redis-bot-first-lifetime|bot_first_lifetime|Lifetime, in seconds, of session for bots on the first write, or use 0 to disable.|60|
|session-save-redis-bot-lifetime|bot_lifetime|Lifetime, in seconds, of session for bots on subsequent writes, or use 0 to disable.|7200|
|session-save-redis-disable-locking|disable_locking|Disable session locking entirely.|0 (false)|
|session-save-redis-min-lifetime|min_lifetime|Minimum session lifetime, in seconds.|60|
|session-save-redis-max-lifetime|max_lifetime|Maximum session lifetime, in seconds.|2592000 (720 hours)|
|session-save-redis-sentinel-master|sentinel_master|Redis Sentinel master name|empty|
|session-save-redis-sentinel-servers|sentinel_servers|List of Redis Sentinel servers, comma separated|empty|
|session-save-redis-sentinel-verify-master|sentinel_verify_master|Verify Redis Sentinel master status flag|0 (false)|
|session-save-redis-sentinel-connect-retries|sentinel_connect_retries|Connection retries for sentinels|5|

### Example command

The following example sets Redis as the session data store, sets the host to `127.0.0.1`, sets the log level to 4, and sets the database number to 2. All other parameters are set to the default value.

```bash
bin/magento setup:config:set --session-save=redis --session-save-redis-host=127.0.0.1 --session-save-redis-log-level=4 --session-save-redis-db=2
```

### Result

Magento adds lines similar to the following to `<magento_root>app/etc/env.php`:

```php
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
        'database' => '2',
        'compression_threshold' => '2048',
        'compression_library' => 'gzip',
        'log_level' => '4',
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
```

 {:.bs-callout-info}
TTL for session records use the value for Cookie Lifetime, which is configured in Admin. If Cookie Lifetime is set to 0 (the default is 3600), then Redis sessions expire in the number of seconds specified in min_lifetime (the default is 60). This discrepancy is due to differences in how Redis and session cookies interpret a lifetime value of 0. If that behavior is not desired, increase the value of min_lifetime.

## Basic verification {#redis-verify}

{% include config/redis-verify.md %}

{:.ref-header}
Related topics

*  [Create or extend configuration types]({{ page.baseurl }}/config-guide/config/config-create.html)
*  [Magento's deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html)
