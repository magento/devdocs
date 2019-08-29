## View a list of available message queue consumers

To view a list of all consumers:

```bash
bin/magento queue:consumers:list
```

## Start message queue consumers

To start message queue consumers:

```bash
bin/magento queue:consumers:start [--max-messages=<value>] [--batch-size=<value>] [--pid-file-path=<value>] [--area-code=<value>] <consumer_name>
```

The following table explains this command’s options, parameters, and values.

Parameter | Value | Required? | Default Value
--- | --- | --- | ---
`--max-messages=<value>` | The maximum number of messages to consume per invocation. If the number of queued messages is less than the specified max, the consumer polls for new messages until it has processed the max. If you don't specify `--max-messages`, the process runs continuously. | No | 0
`--batch-size=<value>` | The number of messages to consume per batch. If specified, messages in a queue are consumed in batches of `<value>` each. This option is applicable for the batch consumer only. If `--batch-size` is not defined, the batch consumer receives all available messages in a queue. | No | 0
`--pid-file-path=<value>` | The file path for saving PID of consumer process. Consumer process such as `/var/someConsumer.pid` | No |
`--area-code=<value>` | The area code preferred for consumer process. | No | global
`<consumer_name>` | The consumer to start. | Yes | |

After consuming all available messages, the command terminates. You can run the command again manually or with a cron job. You can also run multiple instances of the `magento queue:consumers:start` command to process large message queues. For example, you can append `&` to the command to run it in the background, return to a prompt, and continue running commands:

```bash
bin/magento queue:consumers:start <consumer_name> &
```
