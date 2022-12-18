---
group: configuration-guide
title: Using Amazon Message Queue
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/message-queues/aws-mq.html
status: migrated
---

As of Magento 2.4.3, Amazon Message Queue (MQ) is available as a cloud-ready replacement for on-premises message queue instances.
This topic describes how to configure Magento to use the AWS MQ service.

## Set up an AWS Message Queue

To create a message queue on AWS, follow their [setup instructions](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-setting-up.html).

## Configure Magento for AWS MQ

In order to connect to the AWS MQ service, configure the `queue.amqp` object in the `env.php` file.
Note that AWS Message Queue requires a SSL/TLS connection.

```php
'queue' => [
    'amqp' => [
        'host' => '[host]', //example: c-bf4kk1c5-5gcc-4b43-9b9e-8f5b54d234.mq.us-west-3.amazonaws.com
        'port' => 5671,
        'user' => 'yourusername',
        'password' => 'yourpassword',
        'virtualhost' => '/',

        // AWS fields to add
        'ssl' => 'true'
    ]
],
```

where:

*  `host`—The url for the AMQP endpoint; available by clicking on the broker name in AWS (remove "https://" and the trailing port number)
*  `user`—The username value entered when creating the AWS MQ broker
*  `password`—The password value entered when creating the AWS MQ broker

{:.bs-callout-info}
Amazon MQ supports TLS connections only. Peer verification is not supported.

After editing the `env.php` file, run the following command to finish the setup:

```bash
bin/magento setup:upgrade
```

## How Magento uses the AWS MQ service

The `async.operations.all` message queue consumer uses the AMQP connection.

This consumer routes any topic name prefixed with `async` through the AWS MQ connection.

For example, in `InventoryCatalog` there are:

```text
async.V1.inventory.bulk-product-source-assign.POST
async.V1.inventory.bulk-product-source-unassign.POST
async.V1.inventory.bulk-product-source-transfer.POST
```

The default configuration for `InventoryCatalog` does not publish messages to RabbitMQ; the default behavior is to perform the action in the same user thread. To tell `InventoryCatalog` to publish messages, enable `cataloginventory/bulk_operations/async`. From the admin, go to **Stores** > Configuration > **Catalog** > **Inventory** > Admin bulk operations and set  `Run asynchronously`to **Yes**.

## Testing the message queue

To test message sending from Magento to RabbitMQ:

1. Log in to the RabbitMQ web console in AWS to monitor queues.
1. In the Admin, create a product.
1. Create a new Inventory source.
1. Enable **Stores** > Configuration > **Catalog** > **Inventory** > Admin bulk operations > Run asynchronously.
1. Go to **Catalog** > Products. From the grid, select the product created above and click **Assign Inventory Source** in drop down.
1. Click **Save & Close** to complete the process.

You should now see messages appear in the RabbitMQ web console.

1. Start the `async.operations.all` message queue consumer.

   ```bash
   bin/magento queue:consumers:start async.operations.all
   ```

You should now see the queued message get processed in the RabbitMQ web console.
Verify inventory sources have changed on the product in the Admin.
