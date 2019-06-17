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

{:.bs-callout .bs-callout-info}
You can use Redis for session storage in Magento versions 2.0.6 and later only.

## Configure Magento to use Redis for session storage {#config-redis-config}

Following is a sample configuration to add to `<magento_root>app/etc/env.php`:

```php?start_inline=1
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
    ),
```

where

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


{: .bs-callout .bs-callout-info }
TTL for session records use the value for Cookie Lifetime, which is configured in Admin. If Cookie Lifetime is set to 0 (the default is 3600), then Redis sessions expire in the number of seconds specified in min_lifetime (the default is 60). This discrepancy is due to differences in how Redis and session cookies interpret a lifetime value of 0. If that behavior is not desired, increase the value of min_lifetime.

## Basic verification {#redis-verify}

{% include config/redis-verify.md %}

## Related topics

* [Create or extend configuration types]({{ page.baseurl }}/config-guide/config/config-create.html)
* [Magento's deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html)
