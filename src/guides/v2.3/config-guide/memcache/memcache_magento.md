---
group: configuration-guide
title: Configure Magento to use memcached
functional_areas:
  - Configuration
  - System
  - Setup
---

To configure Magento to use memcached:

1. Open `<your Magento install dir>/app/etc/env.php` in a text editor.
1. Locate the following:

   ```php
   'session' =>
       array (
       'save' => 'files',
   ),
   ```

1. Change it as follows:

   ```php
   'session' =>
       array (
         'save' => 'memcached',
         'save_path' => '<memcache ip or host>:<memcache port>'
   ),
   ```

   memcached has an optional startup parameters that are beyond the scope of this guide. You can find more information about them in the [memcached](http://php.net/manual/en/memcached.sessions.php) documentation, source code, and changelogs.

1. Continue with the next section.

## Verify memcached is working with Magento {#config-memcache-verify}

To verify memcached works with Magento:

1. Delete the contents of the following directories under your Magento installation directory:

   ```bash
   rm -rf var/cache/* var/page_cache/* var/session/*
   ```

1. Go to any page on the [storefront](https://glossary.magento.com/storefront).

1. Log in to the [Magento Admin](https://glossary.magento.com/magento-admin) and browse to several pages.

   If no errors display, congratulations! memcached is working! You can optionally look at memcached storage as discussed in the next step.

   If errors display (such as an HTTP 500 (Internal Server Error)), enable developer mode and diagnose the issue. Make sure memcached is running, configured properly, and that `env.php` has no syntax errors.

1. (Optional.) Use Telnet to look at memcached storage.

   ```bash
   telnet <memcached host or ip> <memcached port>
   ```

   ```bash
   stats items
   ```

   The results display similar to the following:

   ```terminal
   STAT items:3:number 1
   STAT items:3:age 7714
   STAT items:3:evicted 0
   STAT items:3:evicted_nonzero 0
   STAT items:3:evicted_time 0
   STAT items:3:outofmemory 0
   STAT items:3:tailrepairs 0

   [Look at the keys in more detail](http://www.darkcoding.net/software/memcached-list-all-keys/)
