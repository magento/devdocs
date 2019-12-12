---
group: configuration-guide
title: Manage message queues
redirect_from:
  - /guides/v2.2/config-guide/mq/manage-mysql.html
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
If your {{ site.data.var.ee }} store is hosted on the Cloud platform, use the [`CRON_CONSUMERS_RUNNER`]({{ site.baseurl }}/cloud/env/variables-deploy.html#cron_consumers_runner) deploy variable to configure the `consumers_runner` cron job.

#### Specific configuration

Edit */app/etc/env.php* file for configure cron job `consumers_runner`

```php
...
    'cron_consumers_runner' => array(
        'cron_run' => false,
        'max_messages' => 20000,
        'consumers' => array(
            'consumer1',
            'consumer2',
        )
    ),
...
```

*  `cron_run` - A boolean value that enables or disables the `consumers_runner` cron job (default = `true`).
*  `max_messages` - The maximum number of messages each consumer must process before terminating (default = `10000`). Although we do not recommend it, you can use 0 to prevent the consumer from terminating.
*  `consumers` - An array of strings specifying which consumer(s) to run. An empty array runs *all* consumers.

## Command line interface

### Start message queue consumers

Use the `magento` command to start message queue consumers. You can start multiple consumers simultaneously.

    ./bin/magento queue:consumers:start [--max-messages=<value>] [--batch-size=<value>] [--pid-file-path=<value>] [--area-code=<value>] <consumer_name>

Where:

*  `<consumer_name>` is the consumer to start.

*  `--max-messages=<value>` specifies the maximum number of messages to consume per invocation. If the number of queued messages is less than the specified max, the consumer polls for new messages until it has processed the max. If you don't specify `--max-messages`, the process runs continuously.

*  `--batch-size=<value>` specifies the number of messages to consume per batch. If specified, messages in a queue are consumed in batches of `<value>` each. This option is applicable for the batch consumer only. If `--batch-size` is not defined, the batch consumer receives all available messages in a queue.

*  `--pid-file-path=<value>` the file path for saving PID of consumer process.

*  `--area-code=<value>` the area code preferred for consumer process.

After consuming all available messages, the command terminates. You can run the command again manually or with a cron job. You can also run multiple instances of the `magento queue:consumers:start` command to process large message queues. For example, you can append `&` to the command to run it in the background, return to a prompt, and continue running commands (e.g., `bin/magento queue:consumers:start <consumer_name> &`).

### List consumers

Use the following command to return a list of message queue consumers:

    ./bin/magento queue:consumers:list

#### Related Topics

*  [Message Queues Overview]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html)
*  [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
*  [Command-line configuration]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands.html)
*  [Message Queues]({{ page.baseurl }}/extension-dev-guide/message-queues/message-queues.html)
