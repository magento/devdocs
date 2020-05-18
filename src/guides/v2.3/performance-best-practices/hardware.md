---
group: performance-best-practices
title: Hardware recommendations
functional_areas:
  - Configuration
  - System
  - Setup
---

## CPUs

Magento web nodes serve all requests that are not cached or cannot be cached through the application. One CPU core can serve around two (sometimes up to four) Magento requests effectively. Use the following equation to determine how many  web nodes/cores you need to process all incoming requests without putting them into queue:

  `N[Cores] = (N[Expected Requests] / 2) + N [Expected Cron Processes]`

If you expect a store's load to change, you can manually increase the number of web nodes/cores for an active sales period. Alternatively, an auto-scaling model can be used for automatically extending web tiers.

## Memory

### PHP

Magento 2 has differing PHP memory requirements, based on how your system is deployed.  In general, if you are setting up a single server store and plan on using the web setup wizard, we recommend configuring PHP memory for 2G.  If you are setting up a site using pipeline deployment, we recommend 2 GB on your build server and 1 GB on your web nodes.

{% include install/web/deprecated.md %}

Scenarios and expected PHP memory requirements:

*  Webnode serving only storefront pages: 256 MB
*  Webnode serving admin pages with a large catalog: 1 GB
*  Magento 2 cron indexing a site with a large catalog: >256 MB (See [advanced-setup]({{ page.baseurl }}/performance-best-practices/advanced-setup.html) to tune for optimal performance.)
*  Magento 2 compile and deploy of static assets: 756 MB
*  Magento 2 using the web setup wizard to install or upgrade a store with several 3rd party extensions: 2 GB
*  Magento 2 performance toolkit profile generation: >1 GB PHP RAM, >16 MB MySQL TMP_TABLE_SIZE & MAX_HEAP_TABLE_SIZE settings

### MySQL

The Magento 2 database (as well as any other database) is sensitive to the amount of the memory available for storing data and indexes. To effectively leverage MySQL data indexation, the amount of memory available should be, at minimum, close to half the size of the data stored in the database.

### Caches

If you are deploying multiple Magento 2 and using Redis or Varnish for your caches, please keep the following principles in mind:

*  Varnish full page cache memory invalidation is effective, recommend enough memory allocated to Varnish to hold your most popular pages in memory
*  Session cache is a good candidate to configure for a separate instance of Redis.  Memory configuration for this cache type should consider the site's cart abandonment strategy and how long a session should expect to remain in the cache
*  Redis should have enough memory allocated to hold all other caches in memory for optimal performance.  Block cache will be the key factor in determining the amount of memory to configure.  Block cache grows relative to number of pages on a site (number of skus x number of store views)

## Network bandwidth

Sufficient network bandwidth is one of the key requirements for data exchange between web nodes, database(s), caching/session servers, and other services. Because Magento 2 effectively leverages caching for high performance, your system can actively exchange data with caching servers like Redis. If Redis is located on a remote server, you must provide a sufficient network channel between web nodes and the caching server to prevent bottlenecks on read/write operations.
