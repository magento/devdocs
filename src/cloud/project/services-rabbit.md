---
group: cloud-guide
title: Set up RabbitMQ service
functional_areas:
  - Cloud
  - Setup
redirect_from:
  - /cloud/project/project-conf-files_services-rabbit.html  
---

The [Message Queue Framework (MQF)]({{ site.baseurl }}/guides/v2.3/config-guide/mq/rabbitmq-overview.html) is a system within {{site.data.var.ee}} that allows a [module](https://glossary.magento.com/module) to publish messages to queues. It also defines the consumers that will receive the messages asynchronously.

The MQF uses [RabbitMQ](http://www.rabbitmq.com) as the messaging broker, which provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification.

{:.bs-callout-warning}
If you prefer using an existing AMQP-based service, like RabbitMQ, instead of relying on {{site.data.var.ece}} to create it for you, use the [`QUEUE_CONFIGURATION`]({{ site.baseurl }}/cloud/env/variables-deploy.html#queue_configuration) environment variable to connect it to your site.

{% include cloud/service-config-integration-starter.md %}

{:.procedure}
To enable RabbitMQ:

1. Add the required name, type, and disk value (in MB) to the `.magento/services.yaml` file along with the the installed RabbitMQ version.

   ```yaml
   rabbitmq:
       type: rabbitmq:<version>
       disk: 1024
   ```

1. Configure the relationships in the `.magento.app.yaml` file.

   ```yaml
   relationships:
       rabbitmq: "rabbitmq:rabbitmq"
   ```

1. Add, commit, and push your code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Enable RabbitMQ service"
   ```

   ```bash
   git push origin <branch-name>
   ```

1. [Verify the service relationships]({{ site.baseurl }}/cloud/project/services.html#service-relationships).

For information on how these changes affect your environments, see [`services.yaml`]({{ site.baseurl }}/cloud/project/services.html).

{% include cloud/tip-change-installed-service-version.md %}

## Connect to RabbitMQ for debugging {#connect}

For debugging purposes, it is useful to directly connect to a service instance in one of the following ways:

-  [Connect from your local development environment](#cloud-rabbitmq-conn-loc)
-  [Connect from the application](#cloud-rabbitmq-conn-cont)
-  [Connect from your PHP application](#cloud-rabbitmq-conn-php)

### Connect from your local development environment {#cloud-rabbitmq-conn-loc}

1. Log in to the Magento Cloud CLI and project:

   ```bash
   magento-cloud login
   ```

1. Checkout the environment with RabbitMQ installed and configured.

   ```bash
   magento-cloud environment:checkout <environment-id>
   ```

1. Use SSH to connect to the Cloud environment:

   ```bash
   magento-cloud ssh
   ```

1. Retrieve the RabbitMQ connection details and login credentials from the [$MAGENTO_CLOUD_RELATIONSHIPS]({{ site.baseurl }}/cloud/project/magento-app-properties.html#relationships) variable:

   ```bash
   echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp
   ```

      or

   ```bash
   php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
   ```

   In the response, find the RabbitMQ information, for example:

   ```json
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
   {:.no-copy}

1. Enable local port forwarding to RabbitMQ.

   ```bash
   ssh -L <port-number>:mq.internal:<port-number> <project-ID>-<branch-ID>@ssh.us.magentosite.cloud
   ```

   An example for accessing the RabbitMQ management web interface at `http://localhost:15672` is:

   ```bash
   ssh -L 15672:localhost:15672 <project-ID>-<branch-ID>@ssh.us.magentosite.cloud
   ```

1. While the session is open, you can start a RabbitMQ client of your choice from your local workstation, configured to connect to the `localhost:<portnumber>` using the port number, username, and password information from the MAGENTO_CLOUD_RELATIONSHIP variable.

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
