---
layout: default
group: config-guide
subgroup: 14_Configure B2B
title: Configure the B2B module
menu_title: Configure the B2B module
menu_order: 1
menu_node: parent
version: 2.2
github_link: config-guide/b2b-module.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to {{site.data.var.ee}} only">

After installing the {{site.data.var.b2b}} extension, follow these instructions to launch {{site.data.var.b2b}}.

### Start message consumers
The {{site.data.var.b2b}} extension uses MySQL for message queue management. To succesfully launch the {{site.data.var.b2b}} extension, start the message consumer services after installation.

1.  List the available message consumers:

    ```
    bin/magento queue:consumers:list
    ```

    You should see the following consumers:

    ```
    sharedCatalogUpdatePrice
    sharedCatalogUpdateCategoryPermissions
    quoteItemCleaner
    inventoryQtyCounter
    ```

2.  Start each service separately:

    ```
    bin/magento queue:consumers:start <consumer_name>
    ```

    For example:

    ```
    bin/magento queue:consumers:start sharedCatalogUpdatePrice
    ```

#### Specify parameters for message consumers
Depending on your system configuration, to prevent possible issues, you may also need to specify the following parameters when starting the services:

-   `--max-messages`: manages the consumer's lifetime and allows to specify the maximum number of messages processed by the consumer. The best practice for a PHP application is to restart the long-running processes to prevent possible memory leaks

-   `--batch-size`: allows to limit the system resources consumed by the consumers (CPU, memory). Using smaller batches reduces resource usage and, thus, leads to slower processing

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Refer to [Manage message queues with MySQL]({{page.baseurl}}config-guide/mq/manage-mysql.html) for more information.
</div>

### Add message consumers to cron
You may also add these two message consumers to the cron job. For this, add these lines in your `crontab.xml`:

{%highlight xml%}
* * * * * ps ax | grep [s]haredCatalogUpdateCategoryPermissions >>/dev/null 2>&1 || nohup php /var/www/html/magento2/bin/magento queue:consumers:start sharedCatalogUpdateCategoryPermissions &
* * * * * ps ax | grep [s]haredCatalogUpdatePrice >>/dev/null 2>&1 || nohup php /var/www/html/magento2/bin/magento queue:consumers:start sharedCatalogUpdatePrice &
{%endhighlight%}

### Enable B2B Features in Magento Admin
1.  Access the Magento Admin and click **Stores** > **Configuration** > **General** > **B2B Features**.

2.  Select **Yes** from the drop-down menus to enable B2B features:

    ![Enable B2B features]({{site.baseurl}}common/images/enable_b2b_features.png)

3.  Click **Save Config**.
