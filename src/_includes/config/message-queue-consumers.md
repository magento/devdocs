## View a list of available message queue consumers

To view a list of all consumers:

```bash
bin/magento queue:consumers:list
```

## Start message queue consumers

To start message queue consumers:

```bash
bin/magento queue:consumers:start [--max-messages=<value>] [--batch-size=<value>] [--single-thread] [--area-code=<value>] [--multi-process=<value>] <consumer_name>
```

After consuming all available messages, the command terminates. You can run the command again manually or with a cron job. You can also run multiple instances of the `magento queue:consumers:start` command to process large message queues. For example, you can append `&` to the command to run it in the background, return to a prompt, and continue running commands:

```bash
bin/magento queue:consumers:start <consumer_name> &
```

See [queue:consumers:start]({{ page.baseurl }}/reference/cli/magento-commerce.html#queueconsumersstart) in the _Magento command-line reference_ for details about the command options, parameters, and values.

{:.bs-callout-info}
The `--multi-process` option is present in the `queue:consumers:start` command, but to run consumers with parallel processes, configure the [`multiple_processes`]({{ site.baseurl }}/guides/v2.4/config-guide/mq/manage-message-queues.html#configuration) option in `/app/etc/env.php`. Otherwise, if `queue:consumers:start` is called with the `--multi-process` option, it will only work on a single thread.
