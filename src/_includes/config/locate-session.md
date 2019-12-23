## Locate your session storage {#session-where}

This topic discusses how to locate where your session files are stored. The Magento application uses the following logic to store session files:

*  If you configured memcached, sessions are stored in RAM; for more information, see [Use memcached for session storage]({{ page.baseurl }}/config-guide/memcache/memcache.html).
*  If you configured Redis, sessions are stored on the Redis server; for more information, see [Use Redis for page caching or session storage]({{ page.baseurl }}/config-guide/redis/config-redis.html).
*  If you're using the default file-based session storage, we store sessions in the following locations in the order shown:

   1. Directory defined in [`env.php`](#session-where-env)
   1. Directory defined in [`php.ini`](#session-where-phpini)
   1. `<magento_root>/var/session` directory

### `env.php` example {#session-where-env}

A sample snippet from `<magento_root>/app/etc/env.php` follows:

```php
 'session' =>
    array (
      'save' => 'files',
      'save_path' => '/var/www/session',
 ),
```

The preceding example stores session files in `/var/www/session`

### `php.ini` example {#session-where-phpini}

As a user with `root` privileges, open your `php.ini` file and search for the value of `session.save_path`. This identifies where sessions are stored.
