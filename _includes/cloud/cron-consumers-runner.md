<div markdown="1">

You must set the variable value using JSON. For example:

```json
{  
   "cron_run":"true",
   "max_messages":1000,
   "consumers":[  
      "consumer1",
      "consumer2"
   ]
}
```

-   `cron_run`—A boolean value that enables or disables the `consumers_runner` cron job (default = `false`).
-   `max_messages`—A number specifying the maximum number of messages each consumer must process before terminating (default = `1000`). Although we do not recommend it, you can use `0` to prevent the consumer from terminating.
-   `consumers`—An array of strings specifying which consumer(s) to run. An empty array runs _all_ consumers. Refer to [List consumers]({{page.baseurl}}/config-guide/mq/manage-mysql.html#list-consumers) for more information.