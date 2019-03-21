---
group: cloud-guide
subgroup: 090_configure
title: Set up RabbitMQ service
menu_title: Set up RabbitMQ service
menu_order: 75
menu_node:
level3_menu_node: level3child
level3_subgroup: services
functional_areas:
  - Cloud
  - Setup
---

The [Message Queue Framework (MQF)]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html) is a system within {{site.data.var.ee}} that allows a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} to publish messages to queues. It also defines the consumers that will receive the messages asynchronously.

The MQF uses [RabbitMQ](http://www.rabbitmq.com) as the messaging broker, which provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification.

We support RabbitMQ version 3.5.

{:.bs-callout .bs-callout-warning}
If you prefer using an existing AMQP-based service, like RabbitMQ, instead of relying on {{site.data.var.ece}} to create it for you, use the [`QUEUE_CONFIGURATION`]({{ site.baseurl }}/guides/v2.1/cloud/env/variables-deploy.html#queue_configuration) environment variable to connect it to your site.

{% include cloud/service-config-integration-starter.md %}

## Add RabbitMQ in services.yaml and .magento.app.yaml {#settings}

To enable RabbitMQ, add the following code with your installed version and allocated disk space in MB to the `.magento/services.yaml` file.

```yaml
rabbitmq:
    type: rabbitmq:<version>
    disk: 1024
```

To configure the relationships for the environment variable, set a relationship in your `.magento.app.yaml` in the Git branch. For example:

```yaml
relationships:
    rabbitmq: "rabbitmq:rabbitmq"
```

Merge and deploy the code to set the configurations for RabbitMQ. For information on how these changes affect your environments, see [`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html).

## Verify environment-related relationships {#cloud-es-config-mg}

We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ page.baseurl }}/cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

To verify this information used for configurations and settings:

1. SSH into the Integration environment with RabbitMQ installed and configured.
2. Enter the following command to pretty-print connection information for RabbitMQ:

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'

The response includes all relationships for services and configuration data for that environment. In the response, you will locate data similar to the following for RabbitMQ:

```
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
```

## Connect to RabbitMQ for debugging {#connect}

For debugging purposes, it's sometimes useful to directly connect to a service instance in one of the following ways:

*   [Connect from your local development environment](#cloud-rabbitmq-conn-loc)
*   [Connect from the application](#cloud-rabbitmq-conn-cont)
*   [Connect from your PHP application](#cloud-rabbitmq-conn-php)

### Connect from your local development environment {#cloud-rabbitmq-conn-loc}

You can do this using [SSH tunneling]({{ page.baseurl }}/cloud/env/environments-start.html#env-start-tunn):

1. SSH into the Integration environment with RabbitMQ installed and configured.
2. Login to the Magento Cloud CLI and project:

        magento-cloud login
2. Use `magento-cloud tunnel:open` to open a tunnel to the app. For information on this command, add `--help`.
2. Use the following command to pretty-print your relationships. This lets you see which username and password to use, and you can verify the remote service's port.

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
3. Use the `ssh -L` command to enable local port forwarding to RabbitMQ as follows:

        ssh -L <port number>:mq.internal:<port number> <project ID>-<branch ID>@ssh.us.magentosite.cloud
4. While the session is open, you can start a RabbitMQ client of your choice from your local workstation, configured to connect to the `localhost:<portnumber` using the username and password you found in the relationship variable. For this example, you would use `localhost:5672`.

### Connect from the application {#cloud-rabbitmq-conn-cont}

To connect to RabbitMQ running in an application, you should install a client like [amqp-utils](https://github.com/dougbarth/amqp-utils) as a project dependency in your `.magento.app.yaml` file.

For example,

```yaml
dependencies:
  ruby:
    amqp-utils: "0.5.1"
```

Then, when you SSH into your {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} container, you enter any `amqp-` command available to manage your queues.

### Connect from your PHP application {#cloud-rabbitmq-conn-php}

To connect to RabbitMQ using your PHP application, add a PHP {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} (like [PHP AMQPlib](https://github.com/videlalvaro/php-amqplib)) to your source tree.
