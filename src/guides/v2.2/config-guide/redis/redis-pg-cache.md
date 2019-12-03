---
group: configuration-guide
title: Use Redis for the Magento page and default cache
functional_areas:
  - Configuration
  - System
  - Setup
---

Magento provides command line options to configure Redis page and default caching. Although you can also configure caching by editing the `<Magento install dir>app/etc/env.php` file, the command line is the recommended method, especially for initial configuration. The command line provides validation, thereby ensuring the configuration is syntactically correct.

You must  [install Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html#config-redis-install) before continuing.

## Configure Redis default caching {#config-redis-config}

Run the `setup:config:set` command and specify parameters that specific to Redis default caching.

```bash
bin/magento setup:config:set --cache-backend=redis --cache-backend-redis-<parameter_name>=<parameter_value>...
```

where

`--cache-backend=redis` enables Redis default caching. If this feature has already been enabled, omit this parameter.

`--cache-backend-redis-<parameter_name>=<parameter_value>` is a list of parameter/value pairs that configure default caching:

|Command line parameter|Parameter|Meaning|Default value|
|--- |--- |--- |--- |
|cache-backend-redis-server|server|Fully qualified hostname, IP address, or an absolute path to a UNIX socket. The default value of 127.0.0.1 indicates Redis is installed on the Magento server.|127.0.0.1|
|cache-backend-redis-port|port|Redis server listen port|6379|
|cache-backend-redis-db|database|Required if you use Redis for both the default and full page cache. You must specify the database number of one of the caches; the other cache uses 0 by default.<br/><br/>Important: If you use Redis for more than one type of caching, the database numbers must be different. It is recommended that you assign the default caching database number to 0, the page caching database number to 1, and the session storage database number to 2.|0|
|cache-backend-redis-password|password|Configuring a Redis password enables one of its built-in security features: the auth command, which requires clients to authenticate to access the database. The password is configured directly in Redis's configuration file, /etc/redis/redis.conf, which you should still have open from the previous step.||

### Example command

The following example enables Redis default caching, sets the host to `127.0.0.1` and assigns the database number to 0. Redis uses default values for all other parameters.

```bash
bin/magento setup:config:set --cache-backend=redis --cache-backend-redis-server=127.0.0.1 --cache-backend-redis-db=0
```

## Configure Redis page caching

To configure Redis page caching on Magento, run the `setup:config:set` command with additional parameters.

```bash
bin/magento setup:config:set --page-cache=redis --page-cache-redis-<parameter_name>=<parameter_value>...
```

where

`--page-cache=redis` enables Redis page caching. If this feature has already been enabled, omit this parameter.

`--page-cache-redis-<parameter_name>=<parameter_value>` is a list of parameter/value pairs that configure page caching:

|Command line parameter|Parameter|Meaning|Default value|
|--- |--- |--- |--- |
|cache-backend-redis-server|server|Fully qualified hostname, IP address, or an absolute path to a UNIX socket. The default value of 127.0.0.1 indicates Redis is installed on the Magento server.|127.0.0.1|
|cache-backend-redis-port|port|Redis server listen port|6379|
|cache-backend-redis-db|database|Required if you use Redis for both the default and full page cache. You must specify the database number of one of the caches; the other cache uses 0 by default.<br/>Important: If you use Redis for more than one type of caching, the database numbers must be different. It is recommended that you assign the default caching database number to 0, the page caching database number to 1, and the session storage database number to 2.|0|
|cache-backend-redis-password|password|Configuring a Redis password enables one of its built-in security features: the auth command, which requires clients to authenticate to access the database. Configure the password within the Redis configuration file, /etc/redis/redis.conf.||

### Example command

The following example enables Redis page caching, sets the host to `127.0.0.1` and assigns the database number to 1. All other parameters are set to the default value.

```bash
bin/magento setup:config:set --page-cache=redis --page-cache-redis-server=127.0.0.1 --page-cache-redis-db=1
```

## Results

As a result of the two example commands, Magento adds lines similar to the following to `<Magento install dir>app/etc/env.php`:

```php?start_inline=1
'cache' => [
    'frontend' => [
        'default' => [
            'backend' => 'Cm_Cache_Backend_Redis',
            'backend_options' => [
                'server' => '127.0.0.1',
                'database' => '0',
                'port' => '6379'
            ],
        ],
        'page_cache' => [
            'backend' => 'Cm_Cache_Backend_Redis',
            'backend_options' => [
                'server' => '127.0.0.1',
                'port' => '6379',
                'database' => '1',
                'compress_data' => '0'
            ]
        ]
    ]
],
```

## Basic verification {#redis-verify}

{% include config/redis-verify.md %}

*  [Use Redis for session storage]({{ page.baseurl }}/config-guide/redis/redis-session.html)
*  [Create or extend configuration types]({{ page.baseurl }}/config-guide/config/config-create.html)
*  [Magento's deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html)