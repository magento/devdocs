---
layout: default
group: cloud
subgroup: 130_upgrades
title: Upgrade Magento Commerce (Cloud)
menu_title: Upgrade Magento Commerce (Cloud)
menu_order: 10
menu_node:
version: 2.2
github_link: cloud/project/project-upgrade.md
redirect from:
  -  /guides/v2.0/cloud/howtos/upgrade-magento.html
  -  /guides/v2.1/cloud/howtos/upgrade-magento.html
  -  /guides/v2.1/cloud/howtos/upgrade-magento.html
---

This information details how to upgrade {{site.data.var.ece}} to 2.2.X from any version, and upgrading to new 2.2.X versions.

When you upgrade {{site.data.var.ece}}, you also upgrade with patches and available hotfixes as part of the `magento-cloud-metapackage`. Make sure you have `auth.json` in your project root folder if there isn’t one already.

Our upgrades are Composer driven. For more information on Composer, see [Composer in Cloud]({{ page.baseurl }}cloud/reference/cloud-composer.html).

When upgrading from 2.0.X or 2.1.X to 2.2.X, please see [Upgrade from 2.1.X](#old-version).

<div class="bs-callout bs-callout-warning" markdown="1">
Always apply and test a patch your local system in an active branch. You can push and test in an Integration environment prior to deploying across all environments.
</div>

## Supported upgrade paths to 2.2 {#upgradepaths}
We have heavily tested and verifed the latest three versions of 2.0.X and 2.1.X to directly upgrade to {{site.data.var.ece}} 2.2:

* 2.0.14, 2.0.15, 2.0.16
* 2.1.7, 2.1.8, 2.1.9

While you can attempt to upgrade from any version directly to {{site.data.var.ece}} 2.2, we cannot guarantee the results. For example, you should be able to upgrade from 2.0.10 or 2.1.4 directly to 2.2.

If you prefer a secured and verified upgrade path, you can upgrade to one of the verified and tested versions, then directly upgrade to 2.2. For example, you could upgrade from 2.0.10 to 2.0.14, then upgrade to 2.2.

When upgrading from any version to 2.2, please review the following sections to update your settings, make changes, and upgrade required software prior to upgrading Magento.

## Upgrade from 2.0.X or 2.1.X {#old-version}
To upgrade from **2.0.X**:

* [Upgrade your PHP version](#php): v2.2 supports PHP 7.0 and later
* [.magento.app.yaml](#magento-app-yaml): Update the file with new settings and required changes for hooks and environment variables
* [Verify or set the ADMIN_EMAIL variable](variable): This variable is required for upgrades and patch to 2.2 and later


To upgrade from **2.1.X**:

* [Upgrade your PHP version](#php): v2.2 supports PHP 7.0 and later
* [Configuration Management](#config): Create a new `config.php` using the `config.local.php` to properly upgrade
* [.magento.app.yaml](#magento-app-yaml): Update the file with new settings and required changes for hooks and environment variables
* [Verify or set the ADMIN_EMAIL variable](variable): This variable is required for upgrades and patch to 2.2 and later

After completing your upgrade, you may also want to [Verify and upgrade your extensions](#extensions).

### Upgrade your PHP version {#php}
With v2.2, we only support PHP 7.0 and later. Make sure to upgrade your local development workspace PHP version. For more information, see the following:

* [PHP](http://devdocs.magento.com/guides/v2.2/cloud/before/before-workspace-magento-prereqs.html#php) information for your local Magento workspace
* [Migrating from PHP 5.6 to PHP 7.0.x](http://php.net/manual/en/migration70.php){:target="_blank"}
* [Magento 2.2.x technology stack requirements](http://devdocs.magento.com/guides/v2.2/install-gde/system-requirements-tech.html#php)

### Configuration Management and upgrading {#config}
If you are upgrading from 2.1.4 or later to 2.2.X and use Configuration Management, you need to migrate `config.local.php` to a temporary `config.php` file to your Git branch. When you upgrade without having this file prepared, you will encounter an error with a list of steps to complete prior to upgrading.

Previous versions with Configuration Management use a `config.local.php` file for Configuration Management. Starting with 2.2.0, [Configuration Management](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html) uses a different file name of `config.php`.

We recommend creating a temporary `config.php` file for your Git branch prior to upgrading:

1. Create a copy of `config.local.php` and name it `config.php`. You should add this file in the `app/etc` folder.
2. Git add and commit the file to your branch.
3. Push the file to your Integration branch and environment.
4. Continue preparing and upgrade to 2.2.X.

For more information, see [Migrate config.local.php to config.php](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html#migrate).

After you finish upgrading, you can remove `config.php` and create a new, complete file. For more information, see [Create a new config.php file](#configphp). This file works exactly as `config.local.php`, with additional settings including a list of your enabled modules, additional configurations, and a different name.

<div class="bs-callout bs-callout-warning" markdown="1">
You can only delete this file to replace it this one time. After generating a correct config.php file, you cannot delete the file to generate a new one. For more information, see [Configuration Management and Pipeline Deployment](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html).
</div>

### Update .magento.app.yaml {#magento-app-yaml}
If you are upgrading from 2.0.X or 2.1.X to 2.2.X, you need to also update your [.magento.app.yaml](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_magento-app.html) or you will encounter errors. {{site.data.var.ece}} 2.2.X has new settings in the file.

1. Locate and edit your `.magento.app.yaml` in your Git branch.
2. For the PHP version, make sure it is 7.0: `type: php:7.0`
3. We have updated our build and deploy hooks. Locate the `hooks` section, and update the following:

        hooks:
          # We run build hooks before your application has been packaged.
          build: |
              php ./vendor/bin/m2-ece-build
          # We run deploy hook after your application has been deployed and started.
          deploy: |
              php ./vendor/bin/m2-ece-deploy
4. Enter the following environment variables to the end of your file:

        variables:
          env:
            CONFIG__DEFAULT__PAYPAL_ONBOARDING__MIDDLEMAN_DOMAIN: 'payment-broker.magento.com'
            CONFIG__STORES__DEFAULT__PAYMENT__BRAINTREE__CHANNEL: 'Magento_Enterprise_Cloud_BT'
            CONFIG__STORES__DEFAULT__PAYPAL__NOTATION_CODE: 'Magento_Enterprise_Cloud'
5. Save the file and push to your Git branch.

**For Pro plan merchants:** When you are ready to deploy to Pro Staging and Production environments, you must enter a [Support ticket]({{page.baseurl}}cloud/bk-cloud.html#gethelp) advising you need your hooks updated for {{site.data.var.ece}} 2.2.

<div class="bs-callout bs-callout-warning" markdown="1">
**For Pro:** You may encounter deployment errors for Pro to your Staging and Production environments if the hooks are not updated. Please enter a [Support ticket]({{page.baseurl}}cloud/bk-cloud.html#gethelp) advising you need your hooks updated in Staging and Production for {{site.data.var.ece}} 2.2.
</div>

### Verify or set the ADMIN_EMAIL variable {#variable}
The environment variable `ADMIN_EMAIL` is required for upgrading and patching. This email is used for sending password reset requests and verified during when updating {{site.data.var.ece}}. To set, see [Add admin variables for Admin access]({{page.baseurl}}cloud/before/before-project-owner.html#variables).

## Back up the database {#backup-db}
We recommend that you first back up the database of the system you are upgrading. Use the following steps to back up your Integration, Staging, and Production environments.

Back up your Integration environment database and code:

1.  Enter the following command to make a local backup of the remote database:

        magento-cloud db:dump
2.  Enter the following command to back up code and media:

        php bin/magento setup:backup --code [--media]

    You can optionally omit `[--media]` if you have a large number of static files that are already in source control.

Back up your staging or production system database:

1.  [SSH to the server]({{ page.baseurl }}cloud/env/environments-ssh.html).
2.  Find the database login information:

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'

3.  Create a database dump:

        mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction <database name> | gzip - > /tmp/database.sql.gz

## Verify other changes {#verify-changes}
Verify other changes you're going to submit to source control before you start the upgrade:

1.  If you haven't done so already, change to your project root directory.
2.  Enter the following command:

        git status
3.  If there are changes you do *not* want to submit to source control, branch or stash them now.

## Complete the upgrade {#upgrade}

1.  Change to your Magento base directory and enter the following command:

        composer require magento/magento-cloud-metapackage <requiredversion> --no-update
        composer update

    For example, to upgrade to version 2.1.4:

        composer require magento/magento-cloud-metapackage 2.1.4 --no-update
        composer update

4.  Add, commit, and push your changes to initiate a deployment:

        git add -A
        git commit -m "Upgrade"
        git push origin <branch name>

    `git add -A` is required to add all changed files to source control because of the way Composer marshals base packages. Both `composer install` and `composer update` marshal files from the base package (that is, `magento/magento2-base` and `magento/magento2-ee-base`) into the package root.

    The files Composer marshals belong to the new version of Magento, to overwrite the outdated version of those same files. Currently, marshaling is disabled in Magento Commerce, so you must add the marshaled files to source control.

5.  Wait for deployment to complete.

6.  [Verify your upgrade](#upgrade-verify).

## Verify your upgrade {#upgrade-verify}
This section discusses how to verify your upgrade and to troubleshoot any issues you might find.

To verify the upgrade in your integration, staging, or production system:

1.  [SSH to the server]({{ page.baseurl }}cloud/env/environments-ssh.html).
2.  Enter the following command from your Magento root directory to verify the installed version:

        php bin/magento --version

## Create a new config.php file {#configphp}
After fully upgrading, you need to create an updated `config.php` file. You will only complete these instructions once. Complete any additional configuration changes through the Magento Admin in your Integration environment.

1. Open a terminal on your local and use an SSH command to generate `/app/etc/config.php` on the environment:

    `ssh -k <SSH URL> "<Command>"`

    For example for Pro, to run the `scd-dump` on Integration `master`:

      `ssh -k itnu84v4m4e5k-master-ouhx5wq@ssh.us.magentosite.cloud "php bin/magento magento-cloud:scd-dump"`

2. Transfer `config.php` to your local system using `rsync` or `scp`. You can only add this file to the Git branch through your local.

    `rsync <SSH URL>:app/etc/config.php ./app/etc/config.php`

3. Add and push `config.php` to the Git master branch.

    `git add app/etc/config.php && git commit -m "Add system-specific configuration" && git push origin master`

An updated file is generated with a module list and configuration settings at `/app/etc/config.php`.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Important: For an upgrade, you will delete `config.php`. Once this file is added to your code, you should not delete it. If you need to remove or edit settings, you must manually edit the file to make changes.
</div>

## Verify and upgrade your extensions {#extensions}
You may need to upgrade any third-party extensions and modules that supports v2.2. We recommend working in a new Integration branch with your extensions disabled. Review your third-party extension and module pages in Marketplace or other company sites to verify support for {{site.data.var.ee}} and {{site.data.var.ece}} v2.2.

We recommend [backing up your database]({{ page.baseurl }}cloud/project/project-webint-snap.html#db-dump) prior to installing a number of extensions on your local and Integration environments.

1. Create a new branch on your local.
2. Disable your extensions as needed.
3. As available, download extension upgrades.
4. Install the upgrade on your local in the Git branch as documented by the third-party documentation.
5. Enable and test the extension locally.
6. Push the code to test in your Integration environment.
7. Push to Staging to test in a pre-production environment.

Include the extensions in your going live steps to Production only after fully upgrading Production to v2.2. We strongly recommend fully upgrading your Production environment before including upgraded extensions.

### Additional extension upgrades {#moreextensions}
We strongly recommend upgrading your Fastly module to v1.2.28 or later for {{site.data.var.ece}} 2.2.

## Troubleshoot your upgrade {#upgrade-verify-tshoot}
In some cases, an error similar to the following displays when you try to access your storefront or the Magento Admin in a browser:

    There has been an error processing your request
    Exception printing is disabled by default for security reasons.
      Error log record number: <error number>

### View error details on the server
To view the error in your integration system, [SSH to the server]({{ page.baseurl }}cloud/env/environments-ssh.html) and enter the following command:

    vi /app/var/report/<error number>

### Resolve the error
One possible error occurs when the deployment hook failed, and therefore the database has not yet been fully upgraded. If so, an error similar to the following is displayed:

    a:4:{i:0;s:433:"Please upgrade your database: Run "bin/magento setup:upgrade" from the Magento root directory.
    The following modules are outdated:
    Magento_Sales schema: current version - 2.0.2, required version - 2.0.3

To resolve the error:

1.  [SSH to the server]({{ page.baseurl }}cloud/env/environments-ssh.html).
2.  [Examine the logs]({{ page.baseurl }}cloud/trouble/environments-logs.html) to determine the source of the issue.
3.  After you fix the source of the issue, push the change to the server, which causes the upgrade to restart.

    For example, on a local branch, enter the following commands:

        git add -A && git commit -m "fixed deployment failure" && git push origin <branch name>

### Deployment error {#deploy-error}
If you encounter a deployment error to Pro Staging and Production environments, you need to have us update your `.magento.app.yaml` hooks. Please enter a [Support ticket]({{page.baseurl}}cloud/bk-cloud.html#gethelp) advising you need your hooks updated in Staging and Production for {{site.data.var.ece}} 2.2.

#### Related topic
* [Composer]({{page.baseurl}}cloud/reference/cloud-composer.html)
* [Install components]({{page.baseurl}}cloud/howtos/install-components.html)
* [Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
* [Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)
