---
group: cloud-guide
title: Set up RabbitMQ service
functional_areas:
  - Cloud
  - Setup
---

The [Message Queue Framework (MQF)]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html) is a system within {{site.data.var.ee}} that allows a [module](https://glossary.magento.com/module) to publish messages to queues. It also defines the consumers that will receive the messages asynchronously.

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

To configure the relationships for the environment variable, set a relationship in your `.magento.app.yaml` file. For example:

```yaml
relationships:
    rabbitmq: "rabbitmq:rabbitmq"
```

Merge and deploy the code to set the configurations for RabbitMQ. For information on how these changes affect your environments, see [`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html).

## Verify environment-related relationships {#cloud-es-config-mg}

We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ page.baseurl }}/cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

{% include cloud/pretty-print-services.md %}

## Connect to RabbitMQ for debugging {#connect}

For debugging purposes, it is useful to directly connect to a service instance in one of the following ways:

-  [Connect from your local development environment](#cloud-rabbitmq-conn-loc)
-  [Connect from the application](#cloud-rabbitmq-conn-cont)
-  [Connect from your PHP application](#cloud-rabbitmq-conn-php)

### Connect from your local development environment {#cloud-rabbitmq-conn-loc}

You can do this using [SSH tunneling]({{ page.baseurl }}/cloud/env/environments-start.html#env-start-tunn):

1.  Use SSH to log in to the Integration environment with RabbitMQ installed and configured.

1.  Log in to the Magento Cloud CLI and project:

    ```bash
    magento-cloud login
    ```

1.  Open a tunnel to the application.

    ```bash
    magento-cloud tunnel:open
    ```

1.  Pretty-print the relationships. This lets you see which username and password to use, and you can verify the remote service's port.

    ```bash
    php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
    ```

1.  Enable local port forwarding to RabbitMQ.

    ```bash
    ssh -L <port-number>:mq.internal:<port-number> <project-ID>-<branch-ID>@ssh.us.magentosite.cloud
    ```

1.  While the session is open, you can start a RabbitMQ client of your choice from your local workstation, configured to connect to the `localhost:<portnumber` using the username and password you found in the relationship variable. For this example, you would use `localhost:5672`.

### Connect from the application {#cloud-rabbitmq-conn-cont}

To connect to RabbitMQ running in an application, you need to install a client such as [amqp-utils](https://github.com/dougbarth/amqp-utils) as a project dependency in your `.magento.app.yaml` file.

For example,

```yaml
dependencies:
    ruby:
        amqp-utils: "0.5.1"
```

Then, when you log in to your [PHP](https://glossary.magento.com/php) container, you enter any `amqp-` command available to manage your queues.

### Connect from your PHP application {#cloud-rabbitmq-conn-php}

To connect to RabbitMQ using your PHP application, add a PHP [library](https://glossary.magento.com/library) (like [PHP AMQPlib](https://github.com/videlalvaro/php-amqplib)) to your source tree.
