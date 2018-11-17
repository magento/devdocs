---
group: module-reference-guide-2_3
title: Magento_CacheInvalidate
---

The CacheInvalidate module is used to invalidate the Varnish cache if it is configured.
It listens for events that request the cache to be flushed or cause the cache to be invalid, then sends Varnish a purge request using cURL.

