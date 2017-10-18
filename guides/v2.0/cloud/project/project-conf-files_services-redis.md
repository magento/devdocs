---
layout: default
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
---

[Redis](http://redis.io){:target="_blank"} is an optional backend cache solution to replace [Zend_Cache_Backend_File](http://framework.zend.com/apidoc/1.0/Zend_Cache/Backend/Zend_Cache_Backend_File.html){:target="_blank"}, which is used in Magento 2 by default.

[More information about Redis]({{page.baseurl}}config-guide/redis/config-redis.html)

We support Redis versions 2.8 and 3.0.

Redis 3.0 supports up to 64 different databases per instance of the service, while 2.8 allows for only a single database.

## Add Redis in services.yaml and .magento.app.yaml {#settings}
To enable Redis, add the following code with your installed version and allocated disk space in MB to `.magento/services.yaml`.

{% highlight yaml %}
myredis:
    type: redis:3.0
{% endhighlight %}

If you want to provide your own Redis configuration, you can add a `core_config` key in your `.magento/services.yaml`:

{% highlight yaml %}
cache:
    type: redis:3.0
{% endhighlight %}

To configure the relationships for the environment variable, set a relationship in your `.magento.app.yaml` in the Git branch. For example:

{% highlight yaml %}
runtime:
    extensions:
        - redis

relationships:
    redis: "myredis:redis"
{% endhighlight %}

Merge and deploy the code to set the configurations for Redis. For information on how these changes affect your environments, see [`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html).

## Verify environment-related relationships {#cloud-es-config-mg}
We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{page.baseurl}}cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

To verify this information used for configurations and settings:

1. SSH into the Development (Integration) environment with Redis installed and configured.
2. Enter the following command to pretty-print connection information for Redis:

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'

The response includes all relationships for services and configuration data for that environment. In the response, you will locate data similar to the following for Redis:

{% highlight bash %}
{
    "redis": [
        {
            "host": "192.0.2.55",
            "scheme": "redis",
            "port": 6379
        }
    ]
}
{% endhighlight %}

<!-- The following info is from Platform.sh and may not be required for Magento Cloud:
You can then use the service in a configuration file of your application as follows:

{% highlight php startinline=true %}
if (getenv('MAGENTO_CLOUD_RELATIONSHIPS')) {
    $relationships = json_decode(base64_decode(getenv('MAGENTO_CLOUD_RELATIONSHIPS')), true);

    foreach ($relationships['redis'] as $endpoint) {
        $container->setParameter('redis_host', $endpoint['host']);
        $container->setParameter('redis_port', $endpoint['port']);
    }
}
{% endhighlight %} -->

## Using `redis-cli` to access your Redis service

Assuming your Redis relationship is named `redis`, you can access it by opening an SSH tunnel to a host named `redis.internal` using the redis-cli tool.

1. SSH into the Development (Integration) environment with RabbitMQ installed and configured.
2. Enter the following command:

        redis-cli -h redis.internal

#### Related topics
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
* [`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
* [`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
