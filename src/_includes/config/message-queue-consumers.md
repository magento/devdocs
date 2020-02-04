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

The following table explains this command’s options, parameters, and values.

Parameter | Value | Required? | Default Value
--- | --- | --- | ---
`--max-messages=<value>` | The maximum number of messages to consume per invocation. If the number of queued messages is less than the specified max, the consumer polls for new messages until it has processed the max. If you don't specify `--max-messages`, the process runs continuously. | No | 0
`--consumers-wait-for-messages=<value>` | Specifies whether consumers should continue polling for messages if the number of processed messages is less than the `max-messages` value. The default value of `0` prevents stuck deployments caused by long delays in message queue processing. Set the value to `1` to allow consumers to wait for messages.<br>On {{site.data.var.ece}} projects, this variable is set by default using the [`CONSUMERS_WAIT_FOR_MAX_MESSAGES`]({{site.baseurl}}/cloud/env/variables-deploy.html) deploy variable. | No | 0
`--batch-size=<value>` | The number of messages to consume per batch. If specified, messages in a queue are consumed in batches of `<value>` each. This option is applicable for the batch consumer only. If `--batch-size` is not defined, the batch consumer receives all available messages in a queue. | No | 0
`--pid-file-path=<value>` | This option is deprecated. Use the `single-thread` option instead. | No |
`--single-thread` | This option prevents running multiple copies of a consumer simultaneously. | No |
`--area-code=<value>` | The area code preferred for consumer process. | No | global
`<consumer_name>` | The consumer to start. | Yes | |

After consuming all available messages, the command terminates. You can run the command again manually or with a cron job. You can also run multiple instances of the `magento queue:consumers:start` command to process large message queues. For example, you can append `&` to the command to run it in the background, return to a prompt, and continue running commands:

```bash
bin/magento queue:consumers:start <consumer_name> &
```
