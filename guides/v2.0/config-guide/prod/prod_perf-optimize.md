---
layout: default
group: config-guide
subgroup: 999_prod
title: Deploy Magento to production
menu_title: Deploy Magento to production
menu_node: parent
menu_order: 1
version: 2.0
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
*   (Enterprise) We recommend usage of Solr & Solr Search Adapter
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
