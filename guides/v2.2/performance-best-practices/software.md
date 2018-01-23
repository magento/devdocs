---
layout: default
group: perf-best-practices
title: Software recommendations
version: 2.2
github_link: performance-best-practices/software.md
functional_areas:
  - Configuration
  - System
  - Setup
---

**Question to reviewer:** _This section up to "Operating system" was copied from the original documentation._ (http://devdocs.magento.com/guides/v2.2/config-guide/prod/prod_perf-optimize.html). _Please review for appropriateness_

The following is a list of recommended software for production instances in order of impact:

* PHP 7
* [Varnish cache]({{page.baseurl}}config-guide/varnish/config-varnish.html)
* ({{site.data.var.ee}} only) Use the [Elasticsearch & Elasticsearch Search Adapter]({{page.baseurl}}config-guide/elasticsearch/es-overview.html)
*	Nginx and [PHP-FPM](https://php-fpm.org/)

For multi-server deployments or for merchants planning on scaling their business we recommend the following:

*	[Redis]({{page.baseurl}}config-guide/redis/redis-session.html) for sessions (from 2.0.6+)
*	A separate Redis instance as your [default cache]({{page.baseurl}}config-guide/redis/redis-pg-cache.html)
  *	Do not use this instance for page cache

## Operating system

Configurations and optimizations at the operating system level for Magento 2 is much the same as any web application that can be under high load. As the number of concurrent connections handled by the server increases, the number of available sockets can become fully allocated. The Linux kernel supports a mechanism to "reuse" and "recycle" TCP connections. Be aware that more aggressive recycling than re-use may cause issues on the load balancers. To enable these kernel settings, set the following values should in `/etc/sysctl.conf`: 

```
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_tw_reuse = 1
```

The kernel parameter `net.core.somaxconn` controls the maximum number of open sockets waiting for connections. This value can be safely increased to 1024, but it should be correlated with ability of server to handle this amount. To enable this kernel parameter, set the following value in `/etc/sysctl.conf`: 

`net.core.somaxconn = 1024`

## Web server

Magento 2 fully supports the Nginx and Apache web servers. Sample recommended configuration files for Nginx (`nginx.conf.sample`) and Apache (`.htaccess.sample`) can be found in root directory of the project. The Nginx sample contains settings for better performance and is more ready for production usage. Some of the main configuration best practices defined in the sample file include:

*	Settings for caching static content in a browser
*	Memory and execution time settings for PHP
*	Content compression settings

**Question to reviewer:** _We need more information here. I googled `max_children_count` and `nginx`, and the only hit I got was Oleh's slide deck that mentioned the attribute, but gave no details. I found a few results searching on `MaxClients` and `Magento`, but most of the hits appear to be from M1.  These settings not present in the sample config files, so I don't know where these attributes should be set._

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The `MaxClients` (Apache) / `max_children_count` (Nginx) attribute defines the number of threads for input requests processing. It should be configured separately from the sample Configuration files. The value should be calculated based on expected load per web-node and set to web server configuration file.
</div>

## PHP

Magento 2 fully supports and engages everyone to use latest version of PHP, which is now PHP 7.1. There are several factors to account for when configuring PHP to get maximum speed and efficiency on requests processing.

### PHP extensions

We recommend limiting the list of active extensions to those that are required for Magento functionality:

* `php-bcmath`
* `php-cli`
* `php-common`
* `php-gd`
* `php-intl`
* `php-mbstring`
* `php-mcrypt`
* `php-opcache`
* `php-pdo`
* `php-soap`
* `php-xml`

Adding more extensions will lead to additional load times for their libraries.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Please pay attention that presence of any profiling and debugging extensions can negatively impact the response time of your pages. As an example, an active xDebug module without any debug session can increase the page response time by up to 30%.
</div>

### PHP Settings

To guarantee successful execution of all Magento scenarios without dumping data or code to disk, it is recommended to set next memory limit:

`memory_limit=768MB`

#### ByteCode

To get maximum speed out of Magento 2 on PHP7, you must activate the OpCache module and properly configure it. These settings are recommended for the module:

```
  opcache.memory_consumption=512MB
  opcache.max_accelerated_files=60000
  opcache.consistency_checks=0
  opcache.validate_timestamps=0
```

**Question to reviewer:** _The previous documentation listed `opcache.enable_cli=1` and had the value of `opcache.max_accelerated_files` set to 100000. Which should be set?_

**Question to reviewer:** _The following text was copied from the existing documentation. Please review for accuracy._

When you fine tune the memory allocation for opcache, take into account the size of Magento’s code base and all your extensions. Magento’s performance team uses the values in the preceding example for testing because it provides enough space in opcache for the average number of installed extensions.

If you are on a low-memory machine and you do not have many extensions or customizations installed, use the following settings to get a similar result:

```
opcache.memory_consumption=64
opcache.max_accelerated_files=60000
```

## MySQL database

This document does not attempt to provide in-depth MySQL tuning, as it highly depends on the store context and its specificity. We can make some general recommendations that can be applied.

### MySQL server configuration

There have been many improvements to MySQL as a product with the 5.6 and 5.7 releases. Those achievements allow us to say that MySQL is distributed with good default settings. The most critical settings are

Parameter | Default | Description
--- | --- | ---
`innodb_buffer_pool_instances` | 8 | The default value is set to 8 to avoid issues with multiple threads attempting to access the same instance.
`innodb_buffer_pool_size` | 128MB | Combined with the multiple pool instances described above, this means a default memory allocation of 1024MB. The total size is divided among all the buffer pools. For best efficiency, specify a combination of `innodb_buffer_pool_instances` and `innodb_buffer_pool_size` so that each buffer pool instance is at least 1 gigabyte.
`max_connections` | 150 | The value of the `max_connections` parameter should correlate with the total number of PHP threads configured in the application server. A general recommendation would be 300 for a small and 1,000 for a medium environment.
`innodb-thread-concurrency` | 0 | The best value for this configuration should be calculated by the formula: `innodb-thread-concurrency = 2 * (NumCPUs + NumDisks)`

**Question to reviewer:** _The following text was copied from the existing documentation. Please review for appropriateness._

As of Magento 2.2.0, you can tune indexers performance by adjusting the index batching size variables. This controls how many entities are processed at a time by the indexer. In some situations, we’ve seen significant decreases in indexing time.

For example, if you are running a profile similar to B2B Medium, you can override the configuration value `batchRowsCount` in `app/code/Magento/catalog/etc/di.xml` and override the default value of `5000` to `1000`. This reduces the full indexing time from 4 hours down to 2 hours with a default MySQL configuration!


<div class="bs-callout bs-callout-info" id="info" markdown="1">
We have not enabled batching for the catalog rules indexer. Merchants with a large number of catalog rules need to adjust their MySQL configuration to optimize indexing time. In this case, editing your MySQL configuration file and allocating more memory to TMP_TABLE_SIZE and MAX_HEAP_TABLE_SIZE configuration value (default is 16M for both) will improve performance for this indexer but will result in MySQL consuming more RAM.
</div>

## Varnish as recommended Page Cache solution

**Question to reviewer:** _Does FPC module mean PageCache module?_

The Magento 2 team highly recommends using Varnish as the full page cache server for your store. Now it is fully available in all versions of Magento. The FPC module is still present in Magento 2, but it should be used for development purposes only. It should not be used together with or instead of Varnish.

Varnish should be installed as a separate server in front of the web tier. It should accept all incoming requests and provide cached page copies. To allow Varnish to work effectively with secured pages, an SSL termination proxy can be placed in front of Varnish. Nginx can be used for this purpose.

Magento distributes a sample configuration file for Varnish (versions 4 and 5) that contains all recommended settings for performance. Among them the most critical in terms of performance are:

grace_mode: allows you to instruct Varnish to keep an object in cache beyond its TTL and serve this stale content if your backend is not healthy or if fresh content hasn’t been fetched yet.

backend health check validation: configuration of regular Varnish backend checks for maintaining list of valid and working nodes

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Another setting that is not covered in default distributed configuration, but deserves your attention it saintmode (please check official Varnish documentation for more details).
</div>

**Question to reviewer:** _This article discusses installing and configuring saint mode. Does something need to be added for performance best practices?  http://devdocs.magento.com/guides/v2.2/config-guide/varnish/config-varnish-advanced.html ?_

### Optimizing asset performance with Varnish

**Question to reviewer:** _This section was copied from the existing documentation. Please review for appropriateness._

In general we recommend storing your assets (images, JS, CSS, etc) on a CDN for optimal performance.

If your site does not require deploying a large number of locales and your servers are in the same region as the majority of your customers, you may find significant performance gains at a lower cost by storing your assets in Varnish vs using a CDN.
This was a default strategy for 2.0.x and 2.1.x.

To store your assets in Varnish, add the following VCL entries in your `default.vcl` file generated by Magento for Varnish 5.

At the end of the `if` statement for PURGE requests in the `vcl_recv` subroutine add:

~~~
# static files are cacheable. remove SSL flag and cookie
if (req.url ~ "^/(pub/)?(media|static)/.*\.(ico|html|css|js|jpg|jpeg|png|gif|tiff|bmp|mp3|ogg|svg|swf|woff|woff2|eot|ttf|otf)$") {
  unset req.http.Https;
  unset req.http./* {{ ssl_offloaded_header }} */;
  unset req.http.Cookie;
}
~~~

In the `vcl_backend_response` subroutine, look for the `if` statement that unsets the cookie for `GET` or `HEAD` requests.
The updated `if` block should look like the following:

~~~
# validate if we need to cache it and prevent from setting cookie
# images, css and js are cacheable by default so we have to remove cookie also
if (beresp.ttl > 0s && (bereq.method == "GET" || bereq.method == "HEAD")) {
  unset beresp.http.set-cookie;
if (bereq.url !~ "\.(ico|css|js|jpg|jpeg|png|gif|tiff|bmp|gz|tgz|bz2|tbz|mp3|ogg|svg|swf|woff|woff2|eot|ttf|otf)(\?|$)") {
  set beresp.http.Pragma = "no-cache";
  set beresp.http.Expires = "-1";
  set beresp.http.Cache-Control = "no-store, no-cache, must-revalidate, max-age=0";
  }
}
~~~

Restart the Varnish server to flush cached assets whenever you upgrade your site or deploy/update assets.

## Caching and Session Server

Magento provides number of options to store your cache and session data, including Redis, Memcache, filesystem and database. Let’s consider what is the best selection for each specific case.

### Single web node setup

If you plan to serve all your traffic with just one web node, it does not make sense to put your cache on a remote Redis server. Instead, either use the filesystem or on a local Redis server. If you want to use the filesystem, put your cache folders on a volume mounted on a RAM filesystem. If you want to use a local Redis server, we highly recommend configuring Redis so it uses sockets for direct connections, rather than exchange data through HTTP.

### Multiple web nodes setup

For a multiple web nodes setup, Redis is the best option. Because Magento actively caches lots of data for better performance, pay attention to your network channel between the web nodes and the Redis server. You don't want the channel to become a bottleneck for requests processing.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you need to serve hundreds and thousands of simultaneous requests, you may need a channel of up to 1GBit (or even wider)  to your Redis server.
</div>

### Redis configuration and tuning

**Question to reviewer:** _This section was copied from the original documentation. It doesn't give specific recommendations. What should be done with this information?_

**Sessions** - Consider how sessions are flushed from the cache and your merchants abandoned cart strategy.

**Caches** - Estimate a memory size to fit the total number of effective skus, product pages and content pages you expect will be used.
