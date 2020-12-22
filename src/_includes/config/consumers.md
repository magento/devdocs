| Name | Description | Value | Required |
| `--consumers-wait-for-messages` | Determines if consumers will wait for a message from the queue. | 1 - Yes, 0 - No | No |

*  `0`: Consumers process available messages in the queue, close the TCP connection, and terminate. Consumers do not wait for additional messages to enter the queue, even if the number of processed messages is less than the `--max_messages` value specified during starting consumers.

*  `1`: Consumers continue to process messages from the message queue until reaching the maximum number of messages (the value specified for `--max_messages` on the `queue:consumers:start` command) before closing the TCP connection and terminating the consumer process. If the queue empties before reaching `--max_messages` the consumer waits for more messages to arrive. If you use workers to run consumers instead of using a cron job, set this variable to `1`.
