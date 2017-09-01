---
layout: default
group: config-guide
subgroup: 15_RabbitMQ
title: Manage message queues
menu_title: Manage message queues
menu_order: 3
version: 2.0
github_link: config-guide/mq/manage-mysql.md
---


If you don't want to implement the RabbitMQ solution, you can manage message queues with cron jobs (or an external process manager) and the command line to ensure that consumers are retrieving messages.

## Process management
Cron jobs are the default mechanism to restart consumers. Processes started by `cron` consume the specified number of messages and then terminate. Re-running `cron` restarts the consumer.

A magic method, whose name is the same as the consumer name, is used as a callback when declaring new `consumer run` job in `crontab.xml`. Using magic methods allows you to pass the name of the consumer implicitly via method name. Alternatively, virtual types based on abstract consumer runner should be declared with concrete consumer name specified as an argument (this approach is more complex and requires extra configuration).

The following shows a `crontab` group entry:

{% highlight xml %}
<group id="default">
    <job name="consumerCustomerCreatedListener" instance="Magento\MessageQueue\Model\ConsumerRunner" method="customerCreatedListener">
        <schedule>0 0 * * *</schedule>
    </job>
</group>
{% endhighlight %}

<div class="bs-callout bs-callout-tip" id="info" markdown="1">
How often you check message queues depends on your business logic and available system resources. In general, you'll probably want to check for newly created customers and send welcome emails more frequently than a more resource intensive process (e.g., updating your catalog). You should define `cron` schedules according to your business needs.

See [Configure and run cron]({{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html) for more information about using `cron` with Magento.
</div>

You can also use a process manager such as [Supervisor](http://supervisord.org/index.html) to monitor the status of processes. The manager can use the command line to restart the processes as needed.

## Command line interface

### Start consumers
Use the `magento` command to start message queue consumers. You can start multiple consumers simultaneously.

    ./bin/magento queue:consumers:start [--max-messages=<value>] [--batch-size=<value>] <consumer_name>

Where:

*   `<consumer_name>` is the consumer to start.

*   `--max-messages=<value>` specifies the maximum number of messages to consume per invocation. If the number of queued messages is less than the specified max, the consumer polls for new messages until it has processed the max. If you don't specify `--max-messages`, the process runs continuously.

*   `--batch-size=<value>` specifies the number of messages to consume per batch. If specified, messages in a queue are consumed in batches of `<value>` each. This option is applicable for the batch consumer only. If `--batch-size` is not defined, the batch consumer receives all available messages in a queue.

After consuming all available messages, the command terminates. You can run the command again manually or with a cron job.

### List consumers
Use the following command to return a list of message queue consumers:

    ./bin/magento queue:consumers:list

#### Related Topics
*   [RabbitMQ Overview]({{page.baseurl}}config-guide/mq/rabbitmq-overview.html)
*   [Configure message queues]({{page.baseurl}}config-guide/mq/config-mq.html)
*   [Configure and run cron]({{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html)
*   [Command-line configuration]({{page.baseurl}}config-guide/cli/config-cli-subcommands.html)
*   [Message Queues]({{page.baseurl}}extension-dev-guide/message-queues.html)
