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

## Garbage collection configuration {#session-gc}

To clean up expired sessions Magento application calls `gc` (_garbage collection_) handler randomly according to probability which is calculated by `gc_probability / gc_divisor`. For example, if we set these directives to `1/100` respectively, it means a probability of `1%` (_probability of one call of garbage collection per 100 requests_).

The garbage collection handler uses the `gc_maxlifetime` directive - the number of seconds after which the sessions will be seen as _garbage_ and potentially cleaned up.

On some operating systems (Debian/Ubuntu) `session.gc_probability` set to `0` by default, and the garbage collection handler will never be executed.

`session.gc_` directives from the `php.ini` file can be overwritten in `<magento_root>/app/etc/env.php`:

```php
 'session' =>
    array (
      'save' => 'db',
      'gc_probability' => 1,
      'gc_divisor' => 1000,
      'gc_maxlifetime' => 1440
 ),
```
The configuration depends on the traffic and specific needs of a certain Magento application.