---
group: configuration-guide
title: Configure caching for Remote Storage
functional_areas:
  - Configuration
  - System
  - Setup
---

Remote storage provide a cache layer for external API calls. The caching is based on [Flysytem cache] provided adapters.

## Memory cache

Memory cache is enabled by default and provides per-request cache.

## Redis cache

A persistent cache stored in Redis and requires an active Redis service and additional configuration

### Redis cache with predis extension.

{:.procedure}
To use Redis cache with [predis/predis] extension, perform next steps:

1. Add [predis/predis] extension to your `composer.json`

```bash
composer require predis/predis
```

2. Add a configuration to `app/etc/env.php` file:

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

[Flysytem cache]: https://flysystem.thephpleague.com/v1/docs/advanced/caching
[predis/predis]: https://github.com/predis/predis
