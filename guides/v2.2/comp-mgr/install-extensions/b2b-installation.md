---
group: software-update-guide
title: Install the B2B extension
ee_only: true
---

{: .bs-callout .bs-callout-warning }
The {{site.data.var.b2b}} extension is only available for {{site.data.var.ee}} v2.2.0 or later. You must install it after installing {{site.data.var.ee}}.

## Installation

1.  Change to your Magento installation directory and enter the following command to update your `composer.json` file and install the {{site.data.var.b2b}} extension:

    ```
    composer require magento/extension-b2b=^1.0
    ```

    If you get an error when trying to install the B2B module for a local instance of Magento Commerce (for example: `[InvalidArgumentException] Could not find a matching version of package magento/extension-b2b. Check the package spelling, your version constraint and that the package is available in a stability which matches your minimum-stability (stable).`), you need to create an `auth.json` file in the Magento root directory and add the following code, using the actual values of your public_key and private_key for `username` and `password`:

    ```
    {
       "http-basic": {
          "repo.magento.com": {
             "username": "<public_key>",
             "password": "<private_key>"
          }
       }
    }
    ```

2.  When prompted, enter your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html). Your *public key* is your username; your *private key* is your password. If you have stored your public and private keys in `auth.json`, you won't be asked to enter them here.

3.  Run the following commands after Composer finishes updating modules:

{: .bs-callout .bs-callout-info }
In Production mode, you may receive a message to 'Please rerun Magento compile command'.  Enter the command below. Magento does not prompt you to run the compile command in Developer mode.

    ```
    bin/magento setup:upgrade

    bin/magento setup:di:compile

    bin/magento setup:static-content:deploy -f

    bin/magento cache:clean
    ```

{: .bs-callout .bs-callout-info }
After completing the installation, you must follow the [post-installation steps](#configure-b2b).

## Post-installation {#configure-b2b}

After installing the {{site.data.var.b2b}} extension, follow these instructions to launch {{site.data.var.b2b}}.

### Start message consumers

The {{site.data.var.b2b}} extension uses MySQL for message queue management. If you want to enable the B2B **Shared Catalog** feature, you must start the corresponding message consumers after installation.

1.  List the available message consumers:

    ```
    bin/magento queue:consumers:list
    ```

    You should see the following consumers:

    ```
    sharedCatalogUpdatePrice
    sharedCatalogUpdateCategoryPermissions
    ```

2.  Start each consumer separately:

    ```
    bin/magento queue:consumers:start <consumer_name>
    ```

    For example:

    ```
    bin/magento queue:consumers:start sharedCatalogUpdatePrice
    ```

{: .bs-callout .bs-callout-tip }
Append `&` to the command to run it in the background, return to a prompt, and continue running commands (e.g., `bin/magento queue:consumers:start sharedCatalogUpdatePrice &`).

Refer to [Manage message queues]({{ page.baseurl }}/config-guide/mq/manage-mysql.html) for more information.

### Add message consumers to cron

You may also add these two message consumers to the cron job (optional). For this, add these lines in your `crontab`:

{%highlight xml%}
* * * * * ps ax | grep [s]haredCatalogUpdateCategoryPermissions >>/dev/null 2>&1 || nohup php /var/www/html/magento2/bin/magento queue:consumers:start sharedCatalogUpdateCategoryPermissions &
* * * * * ps ax | grep [s]haredCatalogUpdatePrice >>/dev/null 2>&1 || nohup php /var/www/html/magento2/bin/magento queue:consumers:start sharedCatalogUpdatePrice &
{%endhighlight%}

### Specify parameters for message consumers

Depending on your system configuration, to prevent possible issues, you may also need to specify the following parameters when starting the services:

-   `--max-messages`: manages the consumer's lifetime and allows you to specify the maximum number of messages processed by the consumer. The best practice for a PHP application is to restart long-running processes to prevent possible memory leaks.

-   `--batch-size`: allows you to limit the system resources consumed by the consumers (CPU, memory). Using smaller batches reduces resource usage and, thus, leads to slower processing.

### Enable B2B features in Magento Admin

After installing the {{site.data.var.b2b}} extension and starting message consumers (if you want to enable the **Shared Catalog** module), you must also enable B2B modules in Magento Admin.

{: .bs-callout .bs-callout-info }
If you enable the **Shared Catalog** module, you must also enable the **Company** module. The **Quick Order** and **Requisition Lists** modules can be enabled/disabled independently.

1.  Access the Magento Admin and click **Stores** > **Settings** > **Configuration** > **General** > **B2B Features**.

2.  Select **Yes** from the drop-down menus to enable B2B features:

    ![Enable B2B features]({{ site.baseurl }}/common/images/enable_b2b_features.png)

3.  Click **Save Config**.

Looking for more documentation? Checkout the [B2B Developer Guide]({{ page.baseurl }}/b2b/bk-b2b.html) and [User Guide](//docs.magento.com/m2/b2b/user_guide/getting-started.html).
