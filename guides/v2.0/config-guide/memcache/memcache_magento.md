---
layout: default
group: config-guide
subgroup: 10_mem
title: Configure Magento to use memcached
menu_title: Configure Magento to use memcached
menu_order: 30
menu_node: 
version: 2.0
github_link: config-guide/memcache/memcache_magento.md
---

<h2 id="config-memcache-conf">Configure Magento to use memcached</h2>
To configure Magento to use memcache:

1.	Open `<your Magento install dir>/app/etc/env.php` in a text editor.
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
            
    Both memcache and memcached have optional startup parameters that are beyond the scope of this guide. You can find more information about them in the <a href="http://php.net/manual/en/memcache.ini.php#ini.memcache.save-path" target="_blank">memcache</a> or <a href="http://php.net/manual/en/memcached.sessions.php" target="_blank">memcached</a> documentation, source code, and changelogs.
3.  Continue with the next section.

<h2 id="config-memcache-verify">Verify memcached is working with Magento</h2>
To verify memcached works with Magento:

1.  Delete the contents of the following directories under your Magento installation directory:

        rm -rf var/cache/* var/page_cache/* var/session/*

2.  Go to any page on the storefront.

3.  Log in to the Magento Admin and browse to several pages.

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

    <a href="http://www.darkcoding.net/software/memcached-list-all-keys/" target="_blank">Look at the keys in more detail</a>


