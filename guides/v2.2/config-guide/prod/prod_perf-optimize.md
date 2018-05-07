---
layout: default
group: config-guide
subgroup: Optimization
title: Magento Optimization Guide
menu_title: Magento Optimization Guide
menu_order: 100
version: 2.2
github_link: config-guide/prod/prod_perf-optimize.md
functional_areas:
  - Configuration
  - System
  - Setup
---

This topic provides instructions for optimizing the performance of your production deployment.
This process should be followed by technical users responsible for stores running in production to optimize performance.

### Assumptions

*	You installed Magento using [Composer][composer-install] or a [compressed archive][zip-install]
*	You will be using this environment to run your live production instance of Magento 2

### Server - Software Recommendations

The following is a list of recommended software for production instances in order of impact:

* [Varnish cache][config-varnish]
* PHP 7
* (Enterprise only) Use the [Elasticsearch & Elasticsearch Search Adapter][elasticsearch]
*	Nginx and [PHP-FPM][php-fpm]

For multi-server deployments or for merchants planning on scaling their business we recommend the following:

*	[Redis][redis-session] for sessions (from 2.0.6+)
*	A separate Redis instance as your [default cache][redis-default-cache]
  *	Do not use this instance for page cache

### Server - Composer Optimization

After running `setup:di:compile` to generate classes, use composer to update the autoloader.

Run the following [composer command][composer-dump-autoload] to generate an optimized composer class map that supports faster auto-loading.

	composer dump-autoload -o

### Server - PHP Configuration

We recommend enabling and tuning PHP opcache for maximum performance.
Edit your `opcache.ini` file to include the following:

	opcache.enable_cli=1
	opcache.memory_consumption=512
	opcache.max_accelerated_files=100000
	opcache.validate_timestamps=0
	opcache.consistency_checks=0

When you fine tune the memory allocation for opcache, take into account the size of Magento's code base and all your extensions.
Magento's performance team uses the values in the preceding example for testing because it provides enough space in opcache for the average number of installed extensions.

If you are on a low memory machine and you do not have many extensions or customizations installed, use the following settings to get a similar result:

	opcache.memory_consumption=64
	opcache.max_accelerated_files=60000

### Server - Redis Configuration & Tuning

#### Sessions

Consider how sessions are flushed from the cache and your merchants abandoned cart strategy.

#### Caches

Estimate a memory size to fit the total number of effective skus, product pages and content pages you expect will be used.

### Magento - Performance Optimizations

Enable these performance optimizations to improve the store front responsiveness of your Magento instance.


Go to the Admin in default of developer mode and change the following settings for store front asset optimization:

#### Stores -> Configuration -> Advanced -> Developer

| Settings Group      | Setting                    | Value  |
| ------------------- | -------------------------- | ------ |
| Grid Settings       | Asynchronous indexing      | Enable |
| CSS Settings        | Minify CSS Files           | Yes    |
| Javascript Settings | Minify JavaScript Files    | Yes    |
| Javascript Settings | Enable JavaScript Bundling | Yes    |
| Template Settings   | Minify HTML                | Yes    |

#### Stores -> Configuration -> Sales -> Sales Emails

| Settings Group   | Setting              | Value  |
| ---------------- | -------------------- | ------ |
| General Settings | Asynchronous Sending | Enable |

#### Stores -> Index Management

Set all indexers to "Update on Schedule" mode.

### Server - MySQL Configuration & Tuning for Indexing Performance

In Magento 2.2.0, you can tune indexers performance by adjusting the index batching size variables.
This controls how many entities are processed at a time by the indexer.
In some situations we've seen significant decreases in indexing time.

For example, if you are running a profile similar to B2B Medium, you can override the configuration value `batchRowsCount` in `app/code/Magento/catalog/etc/di.xml` and override the default value of 5000 to 1000.
This reduces the full indexing time from 4 hours down to 2 hours with a default MySQL configuration!

Please note that we have not enabled batching for the catalog rules indexer.
Merchants with a large number of catalog rules need to adjust their MySQL configuration to optimize indexing time.
In this case editing your MySQL configuration file and allocating more memory to TMP_TABLE_SIZE and MAX_HEAP_TABLE_SIZE configuration value (default is 16M for both) will improve performance for this indexer but will result in MySQL consuming more RAM.

### Production Mode

Switching to production mode improves store front responsiveness and prevents long initial page load times that can occur in default mode.

Run the following commands to switch to production mode:

~~~
bin/magento deploy:mode:set production
~~~

### Optimizing Asset Performance

In general we recommend storing your assets (Images, JS, CSS, etc) on a CDN for optimal performance.

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

[composer-install]: {{page.baseurl}}/install-gde/prereq/integrator_install.html
[zip-install]: {{page.baseurl}}/install-gde/prereq/zip_install.html
[config-varnish]: {{page.baseurl}}/config-guide/varnish/config-varnish.html
[elasticsearch]: {{page.baseurl}}/config-guide/elasticsearch/es-overview.html
[php-fpm]: https://php-fpm.org/
[redis-session]: {{page.baseurl}}/config-guide/redis/redis-session.html
[redis-default-cache]: {{page.baseurl}}/config-guide/redis/redis-pg-cache.html
[composer-dump-autoload]: https://getcomposer.org/doc/03-cli.md#dump-autoload
