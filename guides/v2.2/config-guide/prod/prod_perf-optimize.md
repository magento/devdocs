---
layout: default
group: config-guide
subgroup: 999_prod
title: Deploy Magento to production
menu_title: Deploy Magento to production
menu_node: parent
menu_order: 1
version: 2.2
github_link: config-guide/prod/prod.md
---

This topic provides instructions for optimizing the performance of your production deployment.  This process should be followed by technical users responsible for stores running in production to optimize performance.  

### Assumptions
*	You installed Magento using Composer or a compressed archive
*	You will be using this environment to run your live production instance of Magento 2

### Server - Software Choices
We recommend the following for production instances in order of impact:
*   We recommend usage of Varnish cache for production instances
*   We recommend usage of PHP 7 for production instances
*   (Enterprise) We recommend usage of Elasticsearch & Elasticsearch Search Adapter
*	We recommend usage of Nginx and PHP-FPM for production instances

For multi-server deployments or for merchants planning on scaling their business we recommend the following:
*	Use Redis instance for sessions (from 2.0.6+)
*	Use a seperate Redis instance as your default cache (do not use for page cache)

### Servier - Composer Optimization

	composer dumpautoload -o

### Server - PHP Configuration
We recommend enabling and tuning PHP opcache for maximum performance.  You'll need to edit your opcache.ini file to include the following:

	opcache.enable_cli=1
	opcache.memory_consumption=512
	opcache.max_accelerated_files=100000
	opcache.validate_timestamps=0
	opcache.consistency_checks=0

Please note if you are on a low memory machine you can change these settings and get a similar result if you do not have many extensions or customizations installed:

	opcache.memory_consumption=64
	opcache.max_accelerated_files=60000

### Server - Redis Configuration & Tuning
Sessions:  We recommend considering how sessions are flushed from the cache and your merchants abandoned cart strategy.

Caches:    We recommend identifying the total number of effective skus, product pages and content pages expected to be used.  Then estimate a memory size to fit.  


### Server - MySQL Configuration & Tuning for Indexing Performance
Starting in Magento 2.2.0 you can tune indexers performance by adjusting the index batching size variables which controls how many entities are processed at a time by the indexer.  In some situations we've seen significant decreases in indexing time.

For example if you're running a profile similar to B2B Medium, you can override the configuration value batchRowsCount in app/code/Magento/catalog/etc/di.xml and override the default value of 5000 to 1000.  That'll take the full indexing time from 4 hours down to 2 hours with a default MySQL configuration!  

Please note that we have not enabled batching for the catalog rules indexer.  Merchants with a large number of catalog rules will likely need to adjust their MySQL configuration to optimize indexing time.  In this case editing your mysql configuration file and allocating more memory to TMP_TABLE_SIZE and MAX_HEAP_TABLE_SIZE configuration value (default is 16M for both) will improve performance for this indexer but will result in MySQL consuming more RAM.

### Magento - Performance Optimizations
Enabling these performance optimizations will configure your instance for store front responsiveness.

Turn on store front asset optimizations (Go to Admin in default or developer mode):
*	Store -> Configuration -> Advanced -> Developer
**	Grid Settings:  Asynchronous indexing = Enable
**	CSS Settings:  Minify CSS Files = yes
**	Javascript Settings:  Minify Javascript Files = yes, Enable Javascript Bundling = yes
**  Template Settings:  Minify HTML = yes
*	Store -> Configuration -> Sales -> Sales Emails
**	General Settings:  Asynchronous Sending = Enable
* 	Store -> Index Management
**	All indexers should be in "Update on Schedule" mode
*	Store -> Configuration -> Catalog -> Catalog
**  Storefront:  Use Flat Catealog Category = Yes, Use Flat Catalog Product = Yes

### Production Mode
Production mode improves store front responsiveness and ensures there are no long first page load times that can occur in default mode.

Please run the following to cleanly switch to production mode:
	bin/magento setup:static-content:deploy
	bin/magento setup:di:compile
	bin/magento deploy:mode:set -s production
	bin/magento index:reindex
	bin/magento cache:flush

### Optimizing Asset Performance

In general we recommend storing your assets (Images, JS, CSS, etc) on a CDN for optimal performance.  However, if your site does not require deploying a large number of locales and your servers are in the same region as the majority of your customers you may find significant performance gains at a lower cost by storing your assets in Varnish vs using a CDN (this was our default strategy for 2.0.x and 2.1.x).

To do this you'll need to add the following VCL into your default.vcl file that's generated by Magento for Varnish 5.

At the end of the if statment for PURGE requests in vcl_recv subroutine please add:
	# static files are cacheable. remove SSL flag and cookie
	if (req.url ~ "^/(pub/)?(media|static)/.*\.(ico|html|css|js|jpg|jpeg|png|gif|tiff|bmp|mp3|ogg|svg|swf|woff|woff2|eot|ttf|otf)$") {
		unset req.http.Https;
		unset req.http./* {{ ssl_offloaded_header }} */;
		unset req.http.Cookie;
	}

In the vcl_backend_response subroutine look for the if statment that unsets the cookie for GET or HEAD requests.  The update if block should look like the following:
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

When you upgrade your site or deploy/update assets you'll need to restart your Varnish server to flush the cached assets.


