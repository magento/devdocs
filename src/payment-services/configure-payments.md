---
group: payment-services
title: Configure Payment Services
---

After you install Payment Services, you can easily configure it from [within the Admin]({{ site.user_guide_url }}/payment-services/configure-payments.html) or via the Command Line Interface (CLI).

## Configure data export

Payment Services combines order data exported from Magento Open Source and Adobe Commerce with aggregated payment data from payment providers to create useful reports. The Payment Services extension uses indexers to efficiently collect all of the necessary data for the reports.

See [our user guide]({{ site.user_guide_url }}/payment-services/order-payment-status.html#data-used-in-the-report) to learn about the data used in Payment Services reporting.

### Configure cron on Magento Open Source

If you want to use a `BY SCHEDULE` index mode on Magento Open Source, you must configure cron. See [Configure and run cron]({{ site.baseurl }}{{ site.gdeurl }}/config-guide/cli/config-cli-subcommands-cron.html).

### Set indexers

Order data is exported and persisted in the Payment Service, using one of two index modes---`ON SAVE` (default) or `BY SCHEDULE` (recommended).

The following indexes are for Payment Services:

|   Code    |   Name    |   Description    |
|    ---    |  ---  |  ---  |
|   `sales_order_data_exporter`    |   Sales Order Feed   |   Builds index of order data  |
|   `sales_order_status_data_exporter`    |   Sales Order Statuses Feed    |    Builds index of sales order statuses data   |
|   `store_data_exporter`    |   Stores Feed    |   Builds index of store data   |

To change the index mode for all three indexers, run:

``` bash
bin/magento indexer:set-mode schedule sales_order_data_exporter sales_order_status_data_exporter store_data_exporter
```

{:.bs-callout-tip}
If you don't specify any indexers in your command, all indexers are updated to the same value. If you want to change a specific indexer you must list it in your command.

See [Configure indexers]({{ site.baseurl }}{{ site.gdeurl }}/config-guide/cli/config-cli-subcommands-index.html#configure-indexers) in [Manage the Indexers]({{ site.baseurl }}{{ site.gdeurl }}/config-guide/cli/config-cli-subcommands-index.html) to learn more about manually changing the mode of an indexer or [Index management]({{ site.user_guide_url }}/system/index-management.html#change-the-index-mode) to learn how to to change it in the Admin.

### Manually reindex data

You can manually reindex data, instead of waiting for it to happen automatically. See [Reindex]({{ site.baseurl }}{{ site.gdeurl }}/config-guide/cli/config-cli-subcommands-index.html#reindex) in [Manage the Indexers]({{ site.baseurl }}{{ site.gdeurl }}/config-guide/cli/config-cli-subcommands-index.html) for more information.

When `BY SCHEDULE` mode is set, the system keeps track of changed entities and the cron job updates the index for them based on a set schedule. See [Run cron from the command line]({{ site.baseurl }}{{ site.gdeurl }}/config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-group-run) in [Configure and run cron]({{ site.baseurl }}{{ site.gdeurl }}/config-guide/cli/config-cli-subcommands-cron.html) to learn how to manually trigger indexation using cron jobs.

### Send reindexed data to payment service

After the data is indexed, it will be sent automatically to Payment Services. You can also manually trigger the process of sending indexed data with this command:

``` bash
bin/magento saas:resync --feed [feedName]
```

Use the following command options:

|   Command    |   Description    |
|  ---  |  ---  |
|   `bin/magento saas:resync --feed [feedName]`    |   Performs a re-indexation of the specified feed and sends it to the corresponding service   |
|   `bin/magento saas:resync --no-reindex`    |    Skips indexation and sends un-synced data from the indexes  |

The `--feed` parameter allows you to specify which feed you want to send:

|   Feed    |   Description    |
|  ---  |  ---  |
|    `paymentServicesOrdersProduction`   |   Orders feed in Production mode    |
|    `paymentServicesOrdersSandbox`    |   Orders feed in Sandbox mode    |
|    `paymentServicesOrderStatusesProduction`   |   Order statuses in Production mode    |
|    `paymentServicesOrderStatusesSandbox`   |   Order statuses in Sandbox mode    |
|    `paymentServicesStoresProduction`   |    Stores in Production mode   |
|    `paymentServicesStoresSandbox`  |   Stores in Sandbox mode    |

All data needed for the reports is sent to Payment Services automatically if cron is configured and installed. You can also manually trigger the process of sending cron data to Payment Services.

``` bash
bin/magento cron:run --group payment_services_data_export
```

See [Manage the indexers]({{ site.baseurl }}{{ site.gdeurl }}/config-guide/cli/config-cli-subcommands-index.html) to learn more about re-indexing and indexers.
