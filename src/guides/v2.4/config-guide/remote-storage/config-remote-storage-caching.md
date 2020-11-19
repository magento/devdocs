---
group: configuration-guide
title: Configure caching for remote storage
functional_areas:
  - Configuration
  - System
  - Setup
---

Remote storage provides a cache layer for external API calls. The caching is based on the [Flysystem caching solution], which provides cache adapters. Remote storage includes the following cache types:

-  **Memory cache**—Memory cache is enabled by default and provides per-request cache.
-  **Redis cache**—Redis cache is a persistent cache that is stored in Redis and requires an active Redis service with additional configuration.

## Set up persistent Redis cache

{:.procedure}
To use Redis cache with [predis/predis] extension:

1. Add the [predis/predis] extension to the require section of your `composer.json` file.

   ```bash
   composer require predis/predis
   ```

1. Use the following example to add a configuration to the `app/etc/env.php` file.

   ```php
   [
       'remote_storage' => [
           # Remote storage configuration section
           'cache' => [
               'adapter' => 'predis',
                   'config' => [
                       'scheme' => 'tcp', # Required scheme
                       'host' => 'redis.internal', # Required hostname of Redis service
                       'port' => 6379 # Required port of Redis service
                   ]
           ]
       ]
   ];
   ```

<!-- link definitions -->
[Flysystem cache]: https://flysystem.thephpleague.com/v1/docs/advanced/caching
[predis/predis]: https://github.com/predis/predis