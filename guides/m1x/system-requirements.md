---
layout: m1x
title: System Requirements for Magento Enterprise Edition and Community Edition (Current Shipping Versions)
---

Magento requires a LAMP or LNMP stack.
 
#### Operating System

Linux x86-64
 
#### Web Server

*   Apache 2.x
*   Nginx 1.7.x
 
#### Database

MySQL 5.6 (Oracle or Percona)
 
#### PHP
 
*	Magento CE 1.9.2 and later, Magento EE 1.14.2 and later: 
	*	PHP 5.6.x
	*   PHP 5.4.x
	*   PHP 5.5.x
*	Earlier Magento versions:
	*   PHP 5.4.x
	*   PHP 5.5.x
 
#### SSL

*   A valid security certificate is required for HTTPS.
*   Self-signed SSL certificates are not supported.
 
#### Magento can utilize the following technologies:

*   [Redis]({{ site.baseurl }}/guides/m1x/ce18-ee113/using_redis.html)
    
	Redis can be used for session or cache storage

*   [Memcached]({{ site.baseurl }}/guides/v2.2/config-guide/memcache/memcache.html)
    
    memcached can be used for session or cache storage
 
*   Apache Solr
 
    [Solr search](http://merch.docs.magento.com/ee/user_guide/search_seo/search-configuration-solr.html) can be used as a search provider for Magento Enterprise Edition (EE) only
