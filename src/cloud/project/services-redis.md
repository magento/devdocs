---
group: cloud-guide
title: Set up Redis service
functional_areas:
  - Cloud
  - Setup
redirect_from:
  - /cloud/project/project-conf-files_services-redis.html 
---

[Redis](http://redis.io) is an optional, backend cache solution that replaces the Zend Framework [Zend_Cache_Backend_File](http://framework.zend.com/apidoc/1.0/Zend_Cache/Backend/Zend_Cache_Backend_File.html), which is used in Magento 2 by default.

We support Redis versions 3.2 and 5.0. See [Configure Redis]({{ site.baseurl }}/guides/v2.3/config-guide/redis/config-redis.html).

{% include cloud/service-config-integration-starter.md %}

{:.procedure}
To enable Redis:

1. Add the required name and type to the `.magento/services.yaml` file.

   ```yaml
   myredis:
       type: redis:<version>
   ```

   To provide your own Redis configuration, add a `core_config` key in your `.magento/services.yaml` file:

   ```yaml
   cache:
       type: redis:<version>
   ```

1. Configure the relationships in the `.magento.app.yaml` file.

   ```yaml
   runtime:
       extensions:
           - redis

   relationships:
       redis: "redis:redis"
   ```

1. Add, commit, and push your code changes.

   ```bash
   git add -A && git commit -m "Enable redis service" && git push origin <branch-name>
   ```

1. [Verify the service relationships]({{ site.baseurl }}/cloud/project/services.html#service-relationships).

{%include cloud/tip-change-installed-service-version.md%}

## Using the Redis CLI

Assuming your Redis relationship is named `redis`, you can access it using the `redis-cli` tool.

1. Use SSH to connect to the Integration environment with Redis installed and configured.

1. Open an SSH tunnel to a host.

   ```bash
   redis-cli -h redis.internal
   ```

## Get installed Redis version

Use the following command to get the Redis version installed on an Integration environment:

```bash
redis-cli -h redis.internal info | grep version
```

```terminal
redis_version:5.0.0
gcc_version:6.3.0
```

To get the Redis version installed on a Staging or Production environment, use the `redis-server` command:

```bash
redis-server -v
```

```terminal
Redis server v=5.0.5 sha=947ee0b5:0 malloc=jemalloc-5.1.0 bits=64 build=c1ca234caf5bd678
```
