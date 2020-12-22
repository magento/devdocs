---
group: cloud-guide
title: Import URL Rewrites
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

You can easily migrate to the {{site.data.var.ece}} platform without losing SEO rankings and traffic. Use the `magento/url-rewrite-import-export` module to redirect traffic from your old, indexed URLs to new URLs.

{:.bs-callout-info}
This module supports PHP versions 7.0.13 and later patch releases and all 7.1.x and 7.2.x patch releases. The module is available for Magento version 2.2.x and 2.3.x only. It is deprecated for version 2.4.x and later.

{:.procedure}
To install the URL rewrite module:

1. Add the module to the `composer.json` file.

   ```bash
   composer require magento/module-url-rewrite-import-export
   ```

1. Configure the `.magento.env.yaml` file deploy stage with cron consumers to run **urlRewriteImport** only.

   ```yaml
   stage:
     deploy:
       CRON_CONSUMERS_RUNNER:
         cron_run: true
         max_messages: 1000
         consumers:
           - urlRewriteImport
   ```

   Or, you can configure to run all consumers:

   ```yaml
   stage:
     deploy:
       CRON_CONSUMERS_RUNNER:
         cron_run: true
         max_messages: 1000
   ```

   See [CRON_CONSUMERS_RUNNER environment variable]({{ site.baseurl }}/cloud/env/variables-deploy.html#cron_consumers_runner) for more information about configuring consumers:

1. Add, commit, and push code changes.

   ```bash
   git add -A && git commit -m "Install UrlRewriteImportExport module" && git push origin <branch name>
   ```

## Import the URL Rewrites file

The URL Rewrites module exports custom rewrites using the following CSV file format:

```csv
request_path,target_path,redirect_type,store_code
request-test1,home,0,default
request-test2,home,301,default
request-test3,contact,302,default
```

Column | Description
--- | ---
`request_path` | Redirect **FROM** the request path.
`target_path` | Redirect **TO** the target path.
`redirect_type` | The type of redirect: <br>`0` —an internal Magento redirect type. Magento renders a page using the `target_path` path. <br>`301` —permanently moved status code.<br>`302` —temporarily moved status code.
`store_code` | The store view code.

You use the Magento Admin panel to import the URL Rewrites file.

{:.procedure}
To import URL Rewrites:

1. On the _Marketing_ menu, click **URL Rewrites** in the _SEO & Search_ section.

1. Click **Add URL Rewrite**.

1. In the form, click **Upload** and choose the CSV file to import.

1. Select the **Behavior**.

   -  `Add/Update` — adds new URL rewrite and updates existing URL Rewrites
   -  `Delete` — removes existing URL rewrites

1. Click **Import**.

   The import task begins with the following message:

   ![Task scheduled URL rewrite]({{site.baseurl}}/common/images/cloud/cloud-urlrewrite-task.png)

   A successful import returns the following message:

   ![Successful URL rewrite]({{site.baseurl}}/common/images/cloud/cloud-urlrewrite-success.png)

## Troubleshooting the import

{:.bs-callout-info}
Large uploads are limited by the `upload_max_filesize` directive in `php.ini`. If your URL file is bigger than the existing limit, see [Customize php.ini settings]({{ site.baseurl }}/cloud/project/magento-app-php-ini.html) to increase it.

If the import is **not** successful, you receive an error message reporting the URL rewrite failed:

![Failed URL rewrite]({{site.baseurl}}/common/images/cloud/cloud-urlrewrite-failed.png)

{:.procedure}
To research the URL rewrite error:

1. Click **View Details** to see detailed information about the failure.

   Alternatively, you can find this log on the _System_ menu, click **Bulk Actions** in the _Action Logs_ section.

1. In the _Bulk Actions Log_ view, search for your task, and click **Details** in the _Action_ column.

   ![Bulk actions log]({{ site.baseurl }}/common/images/cloud/cloud-urlrewrite-bulk-actions-log.png)

1. In the _Action Details_ view, click the error number in the **ID** column to download a report about the failed operation.

   An example report:

   ```csv
   request_path,target_path,redirect_type,store_code,messages
   request-test1,home,503,default,"This line is ignored. Column redirect_type has wrong redirect code"
   request-test,contact,302,second,"This line is ignored. Store View with second code does not exist"
   ```
