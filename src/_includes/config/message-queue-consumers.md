## View a list of available message queue consumers

To view a list of all consumers:

```bash
bin/magento queue:consumers:list
```

## Start message queue consumers

To start message queue consumers:

```bash
bin/magento queue:consumers:start [--max-messages=<value>] [--batch-size=<value>] [--single-thread] [--area-code=<value>] <consumer_name>
```

After consuming all available messages, the command terminates. You can run the command again manually or with a cron job. You can also run multiple instances of the `magento queue:consumers:start` command to process large message queues. For example, you can append `&` to the command to run it in the background, return to a prompt, and continue running commands:

```bash
bin/magento queue:consumers:start <consumer_name> &
```

See [queue:consumers:start]({{ page.baseurl }}/reference/cli/magento-commerce.html#queueconsumersstart) in the _Magento command-line reference_ for details about the command options, parameters, and values.
