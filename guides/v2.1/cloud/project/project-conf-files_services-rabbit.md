---
layout: default
group: cloud
subgroup: 07_project
title: Set up the rabbitmq service
menu_title: Set up the rabbitmq service
menu_order: 35
menu_node: 
level3_menu_node: level3child
level3_subgroup: services
github_link21: cloud/project/project-conf-files_services-rabbit.md
---

## Set up the rabbitmq service
The Message Queue Framework (MQF) is a system within Magento Enterprise Edition that allows a module to publish messages to queues. It also defines the consumers that will receive the messages asynchronously. The MQF uses [RabbitMQ](http://www.rabbitmq.com){:target="_blank"} as the messaging broker, which provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification. 

We support RabbitMQ version 3.5.

[More information about RabbitMQ]({{ site.gdeurl21 }}config-guide/mq/rabbitmq-overview.html)

## Relationship
The format exposed in the [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ site.gdeurl21 }}cloud/env/environment-vars_cloud.html) follows:

{% highlight bash %}
{
   "rabbitmq" : [
      {
         "password" : "guest",
         "ip" : "246.0.129.2",
         "scheme" : "amqp",
         "port" : 5672,
         "host" : "rabbitmq.internal",
         "username" : "guest"
      }
   ]
}
{% endhighlight %}

## Usage example
In your `.magento/services.yaml`:

{% highlight yaml %}
myrabbitmq:
    type: rabbitmq
    disk: 1024
{% endhighlight %}

In your `.magento.app.yaml`:

{% highlight yaml %}
relationships:
    mq: "myrabbitmq:rabbitmq"
{% endhighlight %}

You can use the preceding service in a configuration file of your application as follows:

{% highlight php startinline=true %}
$relationships = getenv("MAGENTO_CLOUD_RELATIONSHIPS");
if (!$relationships) {
  return;
}

$relationships = json_decode(base64_decode($relationships), TRUE);

foreach ($relationships['mq'] as $endpoint) {
  $container->setParameter('rabbitmq_host', $endpoint['host']);
  $container->setParameter('rabbitmq_port', $endpoint['port']);
}
{% endhighlight %}

## Connect to RabbitMQ
For debugging purposes, it's sometimes useful to directly connect to
a service instance in one of the following ways:

*   [From your local development environment](#cloud-rabbitmq-conn-loc)
*   [Connect from the application](#cloud-rabbitmq-conn-cont)
*   [Connect from your PHP application](#cloud-rabbitmq-conn-php)

### Connect from your local development environment {#cloud-rabbitmq-conn-loc}
You can do this using [SSH tunneling]({{ site.gdeurl21 }}cloud/env/environments-start.html#env-start-tunn):

1.  Use `magento-cloud tunnel:open` to open a tunnel to the app.
2.  Use the following command to pretty-print your
relationships. This lets you see which username and password to use, and you
can double check that the remote service's port is 5672.

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
3.  Use the `ssh -L` command to enable local port forwarding to RabbitMQ as follows:

        ssh -L 5672:mq.internal:5672 <project ID>-<branch ID>@ssh.na.magentosite.cloud
4.  While the session is open, you can start a RabbitMQ client of your
choice from your local workstation, configured to connect to `localhost:5672`
using the user name and password you found in the relationship variable.

### Connect from the application {#cloud-rabbitmq-conn-cont}
To connect to RabbitMQ running in an application, you should install a client like [amqp-utils](https://github.com/dougbarth/amqp-utils){:target="_blank"} as a project dependency in your `.magento.app.yaml` file.

For example,

{% highlight yaml %}
dependencies:
  ruby:
    amqp-utils: "0.5.1"
{% endhighlight %}

Then, when you SSH into your PHP container, you enter any `amqp-`
command available to manage your queues.

### Connect from your PHP application {#cloud-rabbitmq-conn-php}
To connect to RabbitMQ using your PHP application, add a PHP library (like
[PHP AMQPlib](https://github.com/videlalvaro/php-amqplib){:target="_blank"}) to your source tree.
