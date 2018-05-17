---
group: cloud
subgroup: 090_configure
title: Set up Redis service
menu_title: Set up Redis service
menu_order: 65
menu_node:
level3_menu_node: level3child
level3_subgroup: services
version: 2.0
github_link: cloud/project/project-conf-files_services-redis.md
functional_areas:
  - Cloud
  - Setup
---

[Redis](http://redis.io){:target="\_blank"} is an optional, backend cache solution that replaces the Zend Framework [Zend_Cache_Backend_File](http://framework.zend.com/apidoc/1.0/Zend_Cache/Backend/Zend_Cache_Backend_File.html){:target="\_blank"}, which is used in Magento 2 by default.

We support Redis versions 2.8 and 3.0. Redis 3.0 supports up to 64 different databases per instance of the service, while 2.8 allows for only a single database. See [Configure Redis]({{ page.baseurl }}/config-guide/redis/config-redis.html).

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

To verify this information used for configurations and settings:

1.  Use SSH to connect to the Integration environment with Redis installed and configured.
1.  Create `pretty-print` connection information for Redis.

    ```
    php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
    ```

    The response includes all relationships for services and configuration data for that environment, similar to the following for Redis:

    ```json
    {
        "redis": [
            {
                "host": "192.0.2.55",
                "scheme": "redis",
                "port": 6379
            }
        ]
    }
    ```

## Using the Redis CLI
Assuming your Redis relationship is named `redis`, you can access it using the `redis-cli` tool.

1.  Use SSH to connect to the Integration environment with RabbitMQ installed and configured.
1.  Open an SSH tunnel to a host.

    ```bash
    redis-cli -h redis.internal
    ```
