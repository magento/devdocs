---
group: config-guide
subgroup: 09_Redis
title: Configure Redis
menu_title: Configure Redis
menu_order: 1
menu_node: parent
version: 2.2
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of the Redis solution {#config-redis-over}

Redis features:

* Redis can also be used for {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} session storage.

* The backend supports tag-based cache cleanup without `foreach` loops.

* Redis supports on-disk save and master/slave replication.

<div class="bs-callout bs-callout-info" id="info">
   <span class="glyphicon-class">
   <p>Starting in Magento 2.0.6, you can use either Redis or <a href="{{ page.baseurl }}/config-guide/memcache/memcache.html">memcached</a> for session storage. Earlier issues with the Redis session handler and session locking have been resolved.</p></span>
</div>

## Install Redis {#config-redis-install}

Installing and configuring the Redis software is beyond the scope of this guide. Consult resources such as:

*	<a href="http://redis.io/download" target="_blank">Download Redis page</a>
*	<a href="http://redis.io/topics/quickstart" target="_blank">Redis quick start</a>
*	<a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis" target="_blank">digitalocean</a>
*	<a href="http://redis.io/documentation" target="_blank">Redis documentation page</a>

## For more information {#config-redis-info}

You can find more information about configuring Redis from the following:

*	<a href="http://davidalger.com/development/magento/configuring-magento-2-to-use-redis-cache-backend/" target="_blank">David Alger</a>
*	<a href="http://www.techytalk.info/configuring-cache-storage-backends-magento-2-redis/" target="_blank">TechyTalk</a>
<!-- *	<a href="http://info2.magento.com/rs/magentoenterprise/images/MagentoECG-UsingRedisasaCacheBackendinMagento.pdf" target="_blank">Magento Expert Consulting Group (ECG) article <em>written for Magento 1.x</em> -->

#### Next

*	<a href="{{ page.baseurl }}/config-guide/redis/redis-pg-cache.html">Use Redis for the Magento page and default cache</a>
*	<a href="{{ page.baseurl }}/config-guide/redis/redis-session.html">Use Redis for session storage</a>
