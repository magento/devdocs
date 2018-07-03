---
group: cloud
title: Import URL Rewrites
version: 2.2
github_link: cloud/configure/import-url-rewrites.md
---

If you want to be easily able to re-platform to Magento Commerce (Cloud) and redirect traffic from your old indexed URLs to new, and don't lose SEO rankings and traffic due to migration then use a module *magento/url-rewrite-import-export*.

Currently, this module is available only for Magento 2.2.*

## Instalattion

To install just follow the next steps:

* Run composer command
```bash
composer require magento/module-url-rewrite-import-export
```

* Configure running of consumer **urlRewriteImport**

Edit *.magento.env.yaml* file like this to run only **urlRewriteImport** consumer:

```yaml
stage: 
  deploy:
    CRON_CONSUMERS_RUNNER:
      cron_run: true
      max_messages: 1000
      consumers:
        - urlRewriteImport
```

Or like this example to run all consumers:

```yaml
stage: 
  deploy:
    CRON_CONSUMERS_RUNNER:
      cron_run: true
      max_messages: 1000
```    

More information about configuration of consumers there is:

[Message queues]({{ page.baseurl }}/cloud/trouble/message-queues.html)

[`CRON_CONSUMERS_RUNNER` environment variable]({{ page.baseurl }}/cloud/env/variables-deploy.html#cron_consumers_runner)

* Add changes composer composer to git and commit
```bash
git add composer.*
```

```bash
git commit -m 'Install UrlRewriteImportExport module'
```

* Push using magento-cloud CLI tool
```bash
magento-cloud push
```
Or push using git command
```bash
git push
```

* Wait for automatically redeploy

* Done

## How to use

### File structure

```csv
request_path,target_path,redirect_type,store_code
request-test1,home,0,default
request-test2,home,301,default
request-test3,contact,302,default
```

`request_path` is the path from which you will be redirected

`target_path` is a path you will be redirected to

`redirect_type` is type of redirect:

* `0` is internal Magento redirect type. You wont redirected, but Magento renders a page with `target_path` path.

* `301` is permanently moved status code.

* `302` is temporarily moved status code.

`store_code` is store view code.

### Import

Open **Admin Panel** and go to **Marketing > URL Rewrites**

Then click to **Import URL Rewrites button**

<img src="{{ site.baseurl }}/guides/v2.2/cloud/configure/img/import-button.png" alt="Import URL Rewrites button">

You can see the import form.

<img src="{{ site.baseurl }}/guides/v2.2/cloud/configure/img/import-form.png" alt="Import form">


Click to **Upload** button and choose file to import. Chosen file will be uploaded automatically.

<img src="{{ site.baseurl }}/guides/v2.2/cloud/configure/img/import-form-with-uploaded-file.png" alt="Import form with uploaded file">

Then choose behavior `Add/Update` or `Delete`.

The `Add/Update` behavior adds or updates existed URL Rewrites

The `Delete` behavior deletes existed URL Rewrites or do nothing if URL Rewrites do not exist.

Click **Import** button to run importing.

After it, our module creates the task. You can see a message about it:

<img src="{{ site.baseurl }}/guides/v2.2/cloud/configure/img/info-message.png" alt="Info message">

If the import is successful, you can see the following message:

<img src="{{ site.baseurl }}/guides/v2.2/cloud/configure/img/success-message.png" alt="Success message">

If the import is unsuccessful, you can see the following message:

<img src="{{ site.baseurl }}/guides/v2.2/cloud/configure/img/error-message.png" alt="Error message">

If you want to see more detailed information click **View Details** link and then a modal window with information is opened.

Or go to *System > Bulk Actions* then found your task and click **Details** link

<img src="{{ site.baseurl }}/guides/v2.2/cloud/configure/img/bulk-actions-log.png" alt="Bulk actions log">

Click to number in ID column to download report about failed operation

<img src="{{ site.baseurl }}/guides/v2.2/cloud/configure/img/grid-with-reports.png" alt="Grid with reports">

The example of report:

```csv
request_path,target_path,redirect_type,store_code,messages
request-test1,home,503,default,"This line is ignored. Column redirect_type has wrong redirect code"
request-test,contact,302,second,"This line is ignored. Store View with second code does not exist"
```