---
layout: default
group: perf-best-practices
title: Reference architecture
version: 2.2
github_link: performance-best-practices/reference-architecture.md
functional_areas:
  - Configuration
  - System
  - Setup
---

The Magento Reference Architecture diagram represents the best practice approach to setup a scalable Magento site.

## Reference Architecture Diagram

![alt text](./m2-deployment-architecture.png "reference architecture")

###Notes
* Grey boxes are optional elements
* Orange boxes are Enterprise only optional elements

## Recommended Varnish Reference Architcture

Magento supports several full page caching engines (File, Memcache, Redis, Varnish) out of the box along with expanded coverage through extensions.  The recommended full page cache engine is Varnish.  Magento supports many different Varnish configurations.

For sites that don't require high availability we recommend using a simple Varnish setup with Nginx SSL termination.

![alt text](./single-varnish-with-ssl-termination.png "Simple Varnish Configuration with SSL Termination")

For sites that require high availability we recommend using a 2 tier Varnish configuration with an SSL terminating load balancer.

![alt text](./ha-2-tier-varnish-with-ssl-load-balancer.png "High Availability 2 tier Varnish configuration with SSL terminating load balancer")

