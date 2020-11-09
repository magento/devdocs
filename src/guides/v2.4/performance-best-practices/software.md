---
group: performance-best-practices
title: Software recommendations
functional_areas:
  - Configuration
  - System
  - Setup
---

We require the following software for production instances of Magento:

*  [PHP]({{page.baseurl}}/install-gde/system-requirements.html#php)
*  Nginx and [PHP-FPM](https://php-fpm.org/)
*  [MySQL]({{page.baseurl}}/install-gde/prereq/mysql.html)
*  [Elasticsearch]({{page.baseurl}}/install-gde/prereq/elasticsearch.html)

For multi-server deployments, or for merchants planning on scaling their business, we recommend the following:

*  [Varnish cache]({{page.baseurl}}/config-guide/varnish/config-varnish.html)
*  [Redis]({{page.baseurl}}/config-guide/redis/redis-session.html) for sessions (from 2.0.6+)
*  A separate Redis instance as your [default cache]({{page.baseurl}}/config-guide/redis/redis-pg-cache.html) (do not use this instance for page cache)

See [Magento technology stack requirements]({{page.baseurl}}/install-gde/system-requirements.html) for information about supported versions of each type of software.

## Operating system

Operating system configurations and optimizations are similar for Magento as other high-load web applications. As the number of concurrent connections handled by the server increases, the number of available sockets can become fully allocated. The Linux kernel supports a mechanism to "reuse" and "recycle" TCP connections. Be aware that more aggressive recycling than re-use may cause issues on the load balancers. To enable these kernel settings, set the following values in `/etc/sysctl.conf`:

```terminal
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_tw_reuse = 1
```

The kernel parameter `net.core.somaxconn` controls the maximum number of open sockets waiting for connections. This value can be safely increased to 1024, but it should be correlated with the ability of the server to handle this amount. To enable this kernel parameter, set the following value in `/etc/sysctl.conf`:

`net.core.somaxconn = 1024`

## PHP

Magento fully supports PHP 7.3 and 7.4. There are several factors to account for when configuring PHP to get maximum speed and efficiency on requests processing.

### PHP extensions

We recommend limiting the list of active PHP extensions to those that are required for Magento functionality:

<!--{% assign packages = site.data.codebase.v2_4.open-source.composer_lock.packages %}-->
{% include install/php-extensions-template.md %}

Adding more extensions increases library load times.

 {:.bs-callout-info}
`php-mcrypt` has been removed from PHP 7.2 and replaced with the [`sodium` library](https://www.php.net/manual/en/book.sodium.php). Ensure that [sodium](https://www.php.net/manual/en/sodium.installation.php) is properly enabled when upgrading PHP.

 {:.bs-callout-info}
The presence of any profiling and debugging extensions can negatively impact the response time of your pages. As an example, an active xDebug module without any debug session can increase the page response time by up to 30%.

### PHP Settings

To guarantee successful execution of all Magento instances without dumping data or code to disk, set the memory limit as follows:

`memory_limit=1G`

For debugging, increase this value to 2G.

#### Realpath_cache configuration

To improve Magento performance, add or update the following recommended `realpath_cache` settings in the `php.ini` file. This configuration allows PHP processes to cache paths to files instead of looking them up each time a page loads. See [Performance Tuning](https://www.php.net/manual/en/ini.core.php) in the PHP documentation.

```text
realpath_cache_size=10M
realpath_cache_ttl=7200
```

#### ByteCode

To get maximum speed out of Magento 2 on PHP 7, you must activate the OpCache module and properly configure it. These settings are recommended for the module:

```bash
  opcache.memory_consumption=512MB
  opcache.max_accelerated_files=60000
  opcache.consistency_checks=0
  opcache.validate_timestamps=0
  opcache.enable_cli=1
```

When you fine-tune the memory allocation for opcache, take into account the size of Magento’s code base and all your extensions. Magento’s performance team uses the values in the preceding example for testing because it provides enough space in opcache for the average number of installed extensions.

If you have a low-memory machine and you do not have many extensions or customizations installed, use the following settings to get a similar result:

```bash
opcache.memory_consumption=64
opcache.max_accelerated_files=60000
```

#### APCU

We recommend enabling the [PHP APCu extension](https://getcomposer.org/doc/articles/autoloader-optimization.md#optimization-level-2-b-apcu-cache) and [configuring `composer` to support it]({{ page.baseurl }}/performance-best-practices/deployment-flow.html#preprocess-dependency-injection-instructions) to optimize for maximum performance. This extension caches file locations for opened files, which increases performance for Magento server calls including pages, Ajax calls, and endpoints.

Edit your `apcu.ini` file to include the following:

```text
extension=apcu.so
[apcu]
apc.enabled = 1
```

## Web server

Magento fully supports the Nginx and Apache web servers. Magento provides sample recommended configuration files in the  `<magento_home>/nginx.conf.sample` (Nginx) and  `<magento_home>.htaccess.sample` (Apache) files.  The Nginx sample contains settings for better performance and is designed so that little reconfiguration is required. Some of the main configuration best practices defined in the sample file include:

*  Settings for caching static content in a browser
*  Memory and execution time settings for PHP
*  Content compression settings

You should also configure the number of threads for input request processing, as listed below:

Web server | Attribute name | Location | Related information
--- | --- | --- | ---
Nginx | `worker_connections` | `/etc/nginx/nginx.conf` (Debian) | [Tuning NGINX for Performance](https://www.nginx.com/blog/tuning-nginx/)
Apache 2.2 | `MaxClients` | `/etc/httpd/conf/httpd.conf` (CentOS) | [Apache Performance Tuning](http://httpd.apache.org/docs/2.2/misc/perf-tuning.html)
Apache 2.4 | `MaxRequestWorkers` |  `/etc/httpd/conf/httpd.conf` (CentOS) | [Apache MPM Common Directives](https://httpd.apache.org/docs/2.4/mod/mpm_common.html#maxrequestworkers )

## MySQL

This document does not provide in-depth MySQL tuning instructions because each store and environment is different, but we can make some general recommendations.

There have been many improvements to MySQL 5.7.9 We are confident that MySQL is distributed with good default settings. The most critical settings are:

Parameter | Default | Description
--- | --- | ---
`innodb_buffer_pool_instances` | 8 | The default value is set to 8 to avoid issues with multiple threads attempting to access the same instance.
`innodb_buffer_pool_size` | 128MB | Combined with the multiple pool instances described above, this means a default memory allocation of 1024MB. The total size is divided among all the buffer pools. For best efficiency, specify a combination of `innodb_buffer_pool_instances` and `innodb_buffer_pool_size` so that each buffer pool instance is at least 1 GB.
`max_connections` | 150 | The value of the `max_connections` parameter should correlate with the total number of PHP threads configured in the application server. A general recommendation would be 300 for a small and 1,000 for a medium environment.
`innodb-thread-concurrency` | 0 | The best value for this configuration should be calculated by the formula: `innodb-thread-concurrency = 2 * (NumCPUs + NumDisks)`

## Varnish

Magento highly recommends using Varnish as the full page cache server for your store. The PageCache module is still present in the codebase, but it should be used for development purposes only. It should not be used together with, or instead of, Varnish.

Install Varnish on a separate server in front of the web tier. It should accept all incoming requests and provide cached page copies. To allow Varnish to work effectively with secured pages, an SSL termination proxy can be placed in front of Varnish. Nginx can be used for this purpose.

Magento distributes a sample configuration file for Varnish (versions 4 and 5) that contains all recommended settings for performance. Among them the most critical in terms of performance are:

*  **Backend health check** polls the Magento server to determine whether it is responding in a timely manner.
*  **Grace mode** allows you to instruct Varnish to keep an object in cache beyond its Time to Live (TTL) period and serve this stale content if Magento is not healthy or if fresh content hasn’t been fetched yet.
*  **Saint mode** blacklists unhealthy Magento servers for a configurable amount of time. As a result, unhealthy backends cannot serve traffic when using Varnish as a load balancer.

See [Advanced Varnish configuration]({{page.baseurl}}/config-guide/varnish/config-varnish-advanced.html) for more information about implementing these features.

### Optimize asset performance

In general, we recommend storing your assets (images, JS, CSS, etc) on a CDN for optimal performance.

If your site does not require deploying a large number of locales and your servers are in the same region as the majority of your customers, you may find significant performance gains at a lower cost by storing your assets in Varnish instead of using a CDN.

To store your assets in Varnish, add the following VCL entries in your `default.vcl` file generated by Magento for Varnish 5.

At the end of the `if` statement for PURGE requests in the `vcl_recv` subroutine, add:

```javascript
# static files are cacheable. remove SSL flag and cookie

if (req.url ~ "^/(pub/)?(media|static)/.*\.(ico|html|css|js|jpg|jpeg|png|gif|tiff|bmp|mp3|ogg|svg|swf|woff|woff2|eot|ttf|otf)$") {
  unset req.http.Https;
  unset req.http./* {{ ssl_offloaded_header }} */;
  unset req.http.Cookie;
}
```

In the `vcl_backend_response` subroutine, look for the `if` statement that unsets the cookie for `GET` or `HEAD` requests.
The updated `if` block should look like the following:

```javascript
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
```

Restart the Varnish server to flush cached assets whenever you upgrade your site or deploy/update assets.

## Caching and session servers

Magento provides a number of options to store your cache and session data, including Redis, Memcache, filesystem, and database. Some of these options are discussed below.

### Single web node setup

If you plan to serve all your traffic with just one web node, it does not make sense to put your cache on a remote Redis server. Instead, either use the filesystem or a local Redis server. If you want to use the filesystem, put your cache folders on a volume mounted on a RAM filesystem. If you want to use a local Redis server, we highly recommend configuring Redis so it uses sockets for direct connections, rather than exchange data through HTTP.

### Multiple web nodes setup

For a multiple web nodes setup, Redis is the best option. Because Magento actively caches lots of data for better performance, pay attention to your network channel between the web nodes and the Redis server. You do not want the channel to become a bottleneck for request processing.

 {:.bs-callout-info}
If you need to serve hundreds and thousands of simultaneous requests, you may need a channel of up to 1 Gbit (or even wider) to your Redis server.
