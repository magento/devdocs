---
layout: default
group: config-guide
subgroup: 09_Redis
title: Use Redis for the Magento page and default cache
menu_title: Use Redis for the Magento page and default cache
menu_order: 5
menu_node:
version: 2.2
github_link: config-guide/redis/redis-pg-cache.md
---

Magento provides command line options to configure Redis page and default caching. Although you can also configure caching by editing the `<Magento install dir>app/etc/env.php` file, the command line is the recommended method, especially for initial configuration. The command line provides validation, thereby ensuring the configuration is syntactically correct.

<h2 id="reds-sess-prereq">Prerequisite</h2>
Before you continue, [install Redis]({{page.baseurl}}config-guide/redis/config-redis.html#config-redis-install).

## Configure Redis default caching {#config-redis-config}

Run the `setup:config:set` command and specify parameters that specific to Redis default caching.

`bin/magento setup:config:set --cache-backend=redis --cache-backend-redis-<parameter_name>=<parameter_value>...`

where

`--cache-backend=redis` enables Redis default caching. If this feature has already been enabled, omit this parameter.

`--cache-backend-redis-<parameter_name>=<parameter_value>` refers to any number of the following parameters that can be used to configure default caching:

<table>
<tbody>
<tr>
<th>Command line parameter</th>
<th>Parameter</th>
<th>Meaning</th>
<th>Default value</th>
</tr>
<tr>
<td>cache-backend-redis-server</td>
<td>server</td>
<td>Fully qualified host name, IP address, or a an absolute path to a UNIX socket. The default value of <code>127.0.0.1</code> indicates Redis is installed on the Magento server.</td>
<td><code>127.0.0.1</code></td>
</tr>
<tr>
<td>cache-backend-redis-port</td>
<td>port</td>
<td>Redis server listen port</td>
<td>6379</td>
</tr>
<tr>
<td>cache-backend-redis-db</td>
<td>database</td>
<td>
<p>Required if you use Redis for both the default and full page cache. You must specify the database number of one of the caches; the other cache uses <code>0</code> by default.</p>
<p><strong>Important</strong>: If you use Redis for more than one type of caching (for example, default cache and page cache), the database numbers must be different.</p>
</td>
<td>0</td>
</tr>
</tbody>
</table>

## Example command

The following example enables Redis default caching, sets the host to `redis.example.com` and assigns the database number to 1. All other parameters are set to the default value.

`bin/magento setup:config:set --cache-backend=redis --cache-backend-redis-server=redis.example.com --cache-backend-redis-db=1`


## Configure Redis page caching

To configure Redis page caching on Magento, run the `setup:config:set` command with additional parameters.

`bin/magento setup:config:set --page-cache=redis --page-cache-redis-<parameter_name>=<parameter_value>...`

where

`--page-cache=redis` enables Redis page caching. If this feature has already been enabled, omit this parameter.

`--page-cache-redis-<parameter_name>=<parameter_value>` refers to any number of the following parameters that can be used to configure page caching:

<table>
<tbody>
<tr>
<th>Command line parameter</th>
<th>Parameter</th>
<th>Meaning</th>
<th>Default value</th>
</tr>
<tr>
<td>page-cache-redis-server</td>
<td>server</td>
<td>Fully qualified host name, IP address, or a an absolute path to a UNIX socket. The default value of <code>127.0.0.1</code> indicates Redis is installed on the Magento server.</td>
<td><code>127.0.0.1</code></td>
</tr>
<tr>
<td>page-cache-redis-port</td>
<td>port</td>
<td>Redis server listen port</td>
<td>6379</td>
</tr>
<tr>
<td>page-cache-redis-db</td>
<td>database</td>
<td>
<p>Required if you use Redis for both the default and full page cache. You must specify the database number of one of the caches; the other cache uses <code>0</code> by default.</p>
<p><strong>Important</strong>: If you use Redis for more than one type of caching (for example, default cache and page cache), the database numbers must be different.</p>
</td>
<td>0</td>
</tr>
<tr>
<td>page-cache-redis-compress-data</td>
<td>compress_data</td>
<td>Required only for the full page cache. Set to <code>1</code> to compress the full page cache. Redis chooses a compression algorithm in the following order, based on availability: <a href="https://github.com/google/snappy" target="_blank">snappy</a>, <a href="https://github.com/Cyan4973/lz4" target="_blank">l4z</a>, or <a href="http://oldhome.schmorp.de/marc/liblzf.html" target="_blank">lzf</a>. If none of them available, Redis uses gzip.</td>
<td>0</td>
</tr>
</tbody>
</table>

## Example command

The following example enables Redis page caching, sets the host to `redis.example.com` and assigns the database number to 2. All other parameters are set to the default value.

`bin/magento setup:config:set --page-cache=redis --page-cache-redis-server=redis.example.com --page-cache-redis-db=2`

## Results

As a result of the two example commands, Magento adds lines similar to the following to `<Magento install dir>app/etc/env.php`:

```
'cache' =>
  array(
    'frontend' =>
      array(
        'default' =>
          array(
            'backend' => 'Cm_Cache_Backend_Redis',
            'backend_options' =>
              array(
                'server' => 'redis.example.com',
                'database' => '1',
                'port' => '6379'
              ),
        ),
        'page_cache' =>
          array(
            'backend' => 'Cm_Cache_Backend_Redis',
            'backend_options' =>
              array(
                'server' => 'redis.example.com',
                'port' => '6379',
                'database' => '2',
                'compress_data' => '0'
              )
        )
    )
  ),
```

## Basic verification {#redis-verify}

{% include config/redis-verify.md %}

#### Related topics

*	[Use Redis for session storage]({{ page.baseurl }}config-guide/redis/redis-session.html)
*  <a href="{{page.baseurl}}config-guide/config/config-create.html">Create or extend configuration types</a>
*  <a href="{{page.baseurl}}config-guide/config/config-php.html">Magento's deployment configuration</a>
