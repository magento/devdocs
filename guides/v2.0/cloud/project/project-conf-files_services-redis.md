---
layout: default
group: cloud
subgroup: 07_project
title: Set up the redis service
menu_title: Set up the redis service
menu_order: 32
menu_node: 
level3_menu_node: level3child
level3_subgroup: services
version: 2.0
github_link: cloud/project/project-conf-files_services-redis.md
---

## Set up the redis service
[Redis](http://redis.io){:target="_blank"} is an optional backend cache solution to replace [Zend_Cache_Backend_File](http://framework.zend.com/apidoc/1.0/Zend_Cache/Backend/Zend_Cache_Backend_File.html){:target="_blank"}, which is used in Magento 2 by default.

[More information about Redis]({{ site.gdeurl }}config-guide/redis/config-redis.html)

We support Redis versions 2.8 and 3.0.

Redis 3.0 supports up to 64 different databases per instance of the service, while 2.8 allows for only a single database

## Relationship
The format exposed in the [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ site.gdeurl }}cloud/env/environment-vars_cloud.html) follows:

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

## Usage example
In your `.magento/services.yaml`:

{% highlight yaml %}
myredis:
    type: redis:3.0
{% endhighlight %}

You can also use the following:

{% highlight yaml %}
cache:
    type: redis:3.0
{% endhighlight %}

In your `.magento.app.yaml`, configure the relationship and enable the [PHP redis extension]({{ site.gdeurl }}cloud/project/project-conf-files_magento-app.html#cloud-yaml-platform-php) if you are using PHP:

{% highlight yaml %}
runtime:
    extensions:
        - redis

relationships:
    redis: "myredis:redis"
{% endhighlight %}

You can then use the service in a configuration file of your application as follows:

{% highlight php startinline=true %}
if (getenv('MAGENTO_CLOUD_RELATIONSHIPS')) {
    $relationships = json_decode(base64_decode(getenv('MAGENTO_CLOUD_RELATIONSHIPS')), true);

    foreach ($relationships['redis'] as $endpoint) {
        $container->setParameter('redis_host', $endpoint['host']);
        $container->setParameter('redis_port', $endpoint['port']);
    }
}
{% endhighlight %}

## Using `redis-cli` to access your Redis service

Assuming your Redis relationship is named `redis`, you can access it by opening an [SSH tunnel]({{ site.gdeurl }}cloud/env/environments-start.html#env-start-tunn) to a host named `redis.internal` using the redis-cli tool. 

    redis-cli -h redis.internal


