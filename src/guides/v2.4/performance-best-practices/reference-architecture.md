---
group: performance-best-practices
title: Reference architecture
contributor_name: Chuck Choukalos
functional_areas:
  - Configuration
  - System
  - Setup
---

This topic describes a generic recommended setup for {{site.data.var.ee}} and {{site.data.var.ce}} instances using plain servers hosted physically in a data center (not virtualized) in which resources are not shared with other users. Your hosting provider, especially if it specializes in Magento high performance hosting, might recommend a different setup that is equally or more effective for your requirements.

For {{site.data.var.ece}} environments, see [Starter architecture]({{ site.baseurl }}/cloud/architecture/starter-architecture.html).

## Magento Reference Architecture diagram

The Magento Reference Architecture diagram represents the best practice approach to set up a scalable Magento site.

The color of each element in the diagram indicates whether the element is part of {{site.data.var.ce}} or {{site.data.var.ee}} and if it is required.

*  Orange elements are required for {{site.data.var.ce}}
*  Grey elements are optional for {{site.data.var.ce}}
*  Blue elements are optional for {{site.data.var.ee}}

![alt text]({{ page.baseurl }}/performance-best-practices/images/ref-architecture-2.3.png "reference architecture")

The following sections provide recommendations and considerations for each section of the Magento Reference Architecture diagram.

### Varnish

*  A Varnish cluster can scale to the traffic of a site
*  Tune the instance size based on the number of cache pages needed
*  On a high-traffic site, use a Varnish Master to ensure on-cache flush one request (at most) per web tier

### Web

*  Enable scale of nodes for traffic and redundancy
*  One node is master and runs cron
*  Alternatively, use a dedicated Admin and worker nodes

### Cache

*  Consider implementing a separate Redis instance for sessions
*  You can have a Redis instance per cache
*  Size your instance to contain the largest expected cache size

### Database and queues

*  High-traffic sites can tune DB performance with slave DBs and split DBs for orders/carts (in {{site.data.var.ee}})
*  Consider using a slave DB to enable quick recovery and for data backups
*  Low-traffic sites can store images in the DB

### Search

*  Tune the number of instances based on search traffic

### Storage

*  Consider using GFS or GlusterFS for pub/media storage
*  Alternatively, use DB storage for low-traffic sites

### Recommended Varnish Reference Architecture

Magento supports several full page caching engines (File, Memcache, Redis, Varnish) out of the box, along with expanded coverage through extensions. Varnish is the recommended full page cache engine.  Magento supports many different Varnish configurations.

For sites that do not require high availability, we recommend using a simple Varnish setup with Nginx SSL termination.

![alt text]({{ page.baseurl }}/performance-best-practices/images/single-varnish-with-ssl-termination.png "Simple Varnish Configuration with SSL Termination")

For sites that require high availability, we recommend using a 2-tier Varnish configuration with an SSL terminating load balancer.

![alt text]({{ page.baseurl }}/performance-best-practices/images/ha-2-tier-varnish-with-ssl-term-load-balancer.png "High Availability 2 tier Varnish configuration with SSL terminating load balancer")
