---
group: cloud-guide
title: Set up Redis service
functional_areas:
  - Cloud
  - Setup
---

[Redis](http://redis.io) is an optional, backend cache solution that replaces the Zend Framework [Zend_Cache_Backend_File](http://framework.zend.com/apidoc/1.0/Zend_Cache/Backend/Zend_Cache_Backend_File.html), which is used in Magento 2 by default.

We support Redis versions 2.8, 3.0, and 5.0. Redis 3.0 supports up to 64 different databases per instance of the service, while 2.8 allows for only a single database. See [Configure Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html).

{% include cloud/service-config-integration-starter.md %}

## Add Redis in configuration files {#settings}

To enable Redis, add your installed version and allocated disk space in MB to `.magento/services.yaml` file:

```yaml
myredis:
    type: redis:3.0
```

To provide your own Redis configuration, add a `core_config` key in your `.magento/services.yaml` file:

```yaml
cache:
    type: redis:3.0
```

To configure relationships for an environment variable in your `.magento.app.yaml` file:

```yaml
runtime:
    extensions:
        - redis

relationships:
    redis: "myredis:redis"
```

Merge and deploy the code to set the configurations for Redis. For information on how these changes affect your environments, see [`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html).

## Verify environment-related relationships {#cloud-es-config-mg}

We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ page.baseurl }}/cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

{% include cloud/pretty-print-services.md %}

## Using the Redis CLI

Assuming your Redis relationship is named `redis`, you can access it using the `redis-cli` tool.

1.  Use SSH to connect to the Integration environment with RabbitMQ installed and configured.
1.  Open an SSH tunnel to a host.

    ```bash
    redis-cli -h redis.internal
    ```
