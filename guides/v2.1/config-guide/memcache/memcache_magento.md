---
group: configuration-guide
title: Configure Magento to use memcached
functional_areas:
  - Configuration
  - System
  - Setup
---

To configure Magento to use memcache:

1.	Open `<magento_root>/app/etc/env.php` in a text editor.
2.	Locate the following:

        'session' =>
            array (
            'save' => 'files',
        ),

3.	Change it as follows:

    *   PHP `memcache` extension

            'session' =>
               array (
                  'save' => 'memcache',
                  'save_path' => 'tcp://<memcache ip or host>:<memcache port>'
            ),

    *   PHP `memcached` extension

            'session' =>
               array (
                  'save' => 'memcached',
                  'save_path' => '<memcache ip or host>:<memcache port>'
            ),

    Both memcache and memcached have optional startup parameters that are beyond the scope of this guide. You can find more information about them in the [memcache](http://php.net/manual/en/memcache.ini.php#ini.memcache.save-path) or [memcached](http://php.net/manual/en/memcached.sessions.php) documentation, source code, and changelogs.
3.  Continue with the next section.

## Verify memcached is working with Magento {#config-memcache-verify}

To verify memcached works with Magento:

1.  Delete the contents of the following directories under your Magento installation directory:

        rm -rf var/cache/* var/page_cache/* var/session/*

2.  Go to any page on the [storefront](https://glossary.magento.com/storefront).

3.  Log in to the [Magento Admin](https://glossary.magento.com/magento-admin) and browse to several pages.

    If no errors display, congratulations! memcached is working! You can optionally look at memcached storage as discussed in the next step.

    If errors display (such as an HTTP 500 (Internal Server Error)), enable developer mode and diagnose the issue. Make sure memcached is running, configured properly, and that `env.php` has no syntax errors.

4.  (Optional.) Use Telnet to look at memcached storage.

        telnet <memcached host or ip> <memcached port>
        stats items

    The results display similar to the following:

        STAT items:3:number 1
        STAT items:3:age 7714
        STAT items:3:evicted 0
        STAT items:3:evicted_nonzero 0
        STAT items:3:evicted_time 0
        STAT items:3:outofmemory 0
        STAT items:3:tailrepairs 0

    [Look at the keys in more detail](http://www.darkcoding.net/software/memcached-list-all-keys/)
