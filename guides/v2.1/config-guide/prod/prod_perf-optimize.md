---
group: configuration-guide
title: Magento Optimization Guide
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

	composer dump-autoload -o --apcu

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

We recommend enabling the [PHP APCu extension][php-apcu] for maximum performance. This extension caches file locations for opened files, increasing performance for Magento server calls (including pages, ajax calls, and endpoints).
Edit your `apcu.ini` file to include the following:

	extension=apcu.so
	[apcu]
	apc.enabled = 1

### Server - Redis Configuration & Tuning

#### Sessions

Consider how sessions are flushed from the cache and your merchants abandoned cart strategy.

#### Caches

Estimate a memory size to fit the total number of effective skus, product pages and content pages you expect will be used.

### Magento - Performance Optimizations

Enable these performance optimizations to improve the storefront responsiveness of your Magento instance.


Go to the Admin in default of developer mode and change the following settings for storefront asset optimization:

#### Stores -> Configuration -> Advanced -> Developer

| Settings Group      | Setting                    | Value  |
| ------------------- | -------------------------- | ------ |
| Grid Settings       | Asynchronous indexing      | Enable |
| CSS Settings        | Minify CSS Files           | Yes    |
| JavaScript Settings | Minify JavaScript Files    | Yes    |
| JavaScript Settings | Enable JavaScript Bundling | Yes    |
| Template Settings   | Minify HTML                | Yes    |

#### Stores -> Configuration -> Sales -> Sales Emails

| Settings Group   | Setting              | Value  |
| ---------------- | -------------------- | ------ |
| General Settings | Asynchronous Sending | Enable |

#### System -> Index Management

Set all indexers to "Update by Schedule" mode.

### Production Mode

Switching to production mode improves storefront responsiveness and prevents long initial page load times that can occur in default mode.

Run the following commands to switch to production mode:

```bash
bin/magento deploy:mode:set production
```

[composer-install]: {{ page.baseurl }}/install-gde/composer.html
[zip-install]: {{ page.baseurl }}/install-gde/prereq/zip_install.html
[config-varnish]: {{ page.baseurl }}/config-guide/varnish/config-varnish.html
[elasticsearch]: {{ page.baseurl }}/config-guide/elasticsearch/es-overview.html
[php-fpm]: https://php-fpm.org/
[redis-session]: {{ page.baseurl }}/config-guide/redis/redis-session.html
[redis-default-cache]: {{ page.baseurl }}/config-guide/redis/redis-pg-cache.html
[composer-dump-autoload]: https://getcomposer.org/doc/03-cli.md#dump-autoload
[php-apcu]: https://getcomposer.org/doc/articles/autoloader-optimization.md#optimization-level-2-b-apcu-cache
