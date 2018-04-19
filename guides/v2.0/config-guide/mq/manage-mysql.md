---
layout: default
group: config-guide
subgroup: 15_RabbitMQ
title: Manage message queues
menu_title: Manage message queues
menu_order: 3
version: 2.0
github_link: config-guide/mq/manage-mysql.md
functional_areas:
  - Configuration
  - System
  - Setup
---

If you don't want to implement the RabbitMQ solution, you can manage message queues with cron jobs (or an external process manager) and the command line to ensure that consumers are retrieving messages.

## Process management
Cron jobs are the default mechanism to restart consumers. Processes started by `cron` consume the specified number of messages and then terminate. Re-running `cron` restarts the consumer.

A magic method, whose name is the same as the consumer name, is used as a callback when declaring a new `consumer run` job in `crontab.xml`. Using magic methods allows you to pass the name of the consumer implicitly via method name. Alternatively, virtual types based on abstract consumer runner should be declared with a concrete consumer name specified as an argument (this approach is more complex and requires extra configuration).

The following shows a `crontab` group entry:

{% highlight xml %}
<group id="default">
    <job name="consumerCustomerCreatedListener" instance="Magento\Amqp\Model\ConsumerRunner" method="customerCreatedListener">
        <schedule>0 0 * * *</schedule>
    </job>
</group>
{% endhighlight %}

<div class="bs-callout bs-callout-tip" id="info" markdown="1">
How often you check message queues depends on your business logic and available system resources. In general, you'll probably want to check for newly created customers and send welcome emails more frequently than a more resource intensive process (e.g., updating your catalog). You should define `cron` schedules according to your business needs.

See [Configure and run cron]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-cron.html) for more information about using `cron` with Magento.
</div>

You can also use a process manager, such as [Supervisor](http://supervisord.org/index.html), to monitor the status of processes. The manager can use the command line to restart processes as needed.

## Command line interface

### Start consumers
Use the `magento` command to start message queue consumers. You can start multiple consumers simultaneously.

    ./bin/magento queue:consumers:start <consumer_name> [--max-messages=<value>]

where `<consumer_name>` is the consumer to start and `--max-messages=<value>` specifies the maximum number of messages to consume per invocation.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If the number of queued messages is less than the specified max, the consumer polls for new messages until it has processed the max. If you don't specify `--max-messages`, the process runs continuously.
</div>

After consuming all available messages, the command terminates. You can run the command again manually or with a cron job. You can also run multiple instances of the `magento queue:consumers:start` command to process large message queues. For example, you can append `&` to the command to run it in the background, return to a prompt, and continue running commands (e.g., `bin/magento queue:consumers:start <consumer_name> &`).

### List consumers
Use the following command to return a list of message queue consumers:

    ./bin/magento queue:consumers:list

#### Related Topics
*   [Message Queues Overview]({{page.baseurl}}/config-guide/mq/rabbitmq-overview.html)
*   [Configure and run cron]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-cron.html)
*   [Command-line configuration]({{page.baseurl}}/config-guide/cli/config-cli-subcommands.html)
*   [Message Queues]({{page.baseurl}}/extension-dev-guide/message-queues/message-queues.html)
