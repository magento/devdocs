---
group: configuration-guide
title: Manage message queues
functional_areas:
  - Configuration
  - System
  - Setup
---

You can manage message queues from the command line using cron jobs or an external process manager to ensure that consumers are retrieving messages.

## Process management

Cron jobs are the default mechanism to restart consumers. Processes started by `cron` consume the specified number of messages and then terminate. Re-running `cron` restarts the consumer.

The following example shows the Magento `crontab` configuration for running consumers:

> /app/code/Magento/MessageQueue/etc/crontab.xml

```xml
...
<job name="consumers_runner" instance="Magento\MessageQueue\Model\Cron\ConsumersRunner" method="run">
    <schedule>* * * * *</schedule>
</job>
...
```

{:.bs-callout-info}
How often you check message queues depends on your business logic and available system resources. In general, you'll probably want to check for newly created customers and send welcome emails more frequently than a more resource intensive process (e.g., updating your catalog). You should define `cron` schedules according to your business needs.<br><br>It can be configured in Admin Panel **Stores > Settings > Configuration > Advanced > System > Cron configuration options for group: consumers**<br><br>See [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html) for more information about using `cron` with Magento.

You can also use a process manager such as [Supervisor](http://supervisord.org/index.html) to monitor the status of processes. The manager can use the command line to restart the processes as needed.

### Configuration

#### Behavior by default

*  Cron job `consumers_runner` is enabled
*  Cron job `consumers_runner` runs all defined consumers
*  Each consumer processes 10000 messages and then terminates

{:.bs-callout-info}
If your {{ site.data.var.ee }} store is hosted on the Cloud platform, use the [`CRON_CONSUMERS_RUNNER`]({{ site.baseurl }}/cloud/env/variables-deploy.html#cron_consumers_runner) to configure the `consumers_runner` cron job.

#### Specific configuration

Edit the `/app/etc/env.php` file to configure the cron job `consumers_runner`.

```php
...
    'cron_consumers_runner' => [
        'cron_run' => false,
        'max_messages' => 20000,
        'consumers' => [
            'consumer1',
            'consumer2',
        ]
    ],
...
```

*  `cron_run` - A boolean value that enables or disables the `consumers_runner` cron job (default = `true`).
*  `max_messages` - The maximum number of messages each consumer must process before terminating (default = `10000`). Although we do not recommend it, you can use 0 to prevent the consumer from terminating. See [`consumers_wait_for_messages`]({{ page.baseurl }}/config-guide/prod/config-reference-envphp.html#consumers_wait_for_messages) to configure how consumers process messages from the message queue.
*  `consumers` - An array of strings specifying which consumer(s) to run. An empty array runs *all* consumers.

   {:.bs-callout-info}
   If your {{ site.data.var.ee }} store is hosted on the Cloud platform, use the [`CONSUMERS_WAIT_FOR_MAX_MESSAGES`]({{ site.baseurl }}/cloud/env/variables-deploy.html#consumers_wait_for_max_messages) to configure how consumers process messages from the message queue.

{% include config/message-queue-consumers.md %}

#### Related Topics

*  [Message Queues Overview]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html)
*  [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
*  [Command-line configuration]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands.html)
*  [Message Queues]({{ page.baseurl }}/extension-dev-guide/message-queues/message-queues.html)
