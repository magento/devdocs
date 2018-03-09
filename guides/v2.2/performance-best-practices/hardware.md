---
layout: default
group: perf-best-practices
title: Hardware recommendations
version: 2.2
github_link: performance-best-practices/hardware.md
functional_areas:
  - Configuration
  - System
  - Setup
---


## CPUs

Magento web nodes serve all requests that were not cached or can’t be cached through the complete launch of the application. One CPU core can serve around 2 (sometimes up to 4) Magento requests effectively. Use the following equation to determine how many  web nodes/cores you need to process all incoming requests without putting them into queue:

  `N[Cores] = (N[Expected Requests] / 2) + N [Expected Cron Processes]`

If you expect a store's load to change, you can manually increase the number of web nodes/cores for an active sales period. Alternatively, an auto-scaling model can be used for automatically extending web tiers.

## Memory

The Magento 2 database (as well as any other database) is sensitive to the amount of the memory available for storing data and indexes. To effectively leverage MySQL data indexation, the amount of memory should be at least close to half size of data stored in the database.

## Network bandwidth

Sufficient network bandwith is one of the key requirements for data exchange between web nodes, database(s), caching/session servers, and other services. Because Magento 2 effectively leverages caching for high performance, your system can actively exchange data with caching servers like Redis. If Redis is located on a remote server, it is necessary to provide a sufficient network channel between web nodes and the caching server so that there is no bottleneck on read/write operations.
