---
group: cloud
title: Upgrade Magento version
version: 2.2
github_link: cloud/project/project-upgrade.md
functional_areas:
  - Cloud
  - Upgrade
---

This information details how to upgrade your {{site.data.var.ece}} project.

## Supported upgrade paths to 2.2
You can directly upgrade to {{site.data.var.ece}} 2.2 from any of the following supported versions:

-  2.0.14 and later
-  2.1.7 and later

If you need to upgrade from an older version than listed, upgrade to a supported version first.

## Upgrade from 2.0.X or 2.1.X {#old-version}
To upgrade from **2.0.X**:

-  Upgrade your PHP version—Magento v2.2 supports PHP 7.0 and 7.1
* [.magento.app.yaml](#magento-app-yaml): Update the file with new settings and required changes for hooks and environment variables
* [Verify or set the ADMIN_EMAIL variable](#variable): This variable is required for upgrades and patch to 2.2 and later
* [Upgrade Fastly](#fastly): Make sure you are upgraded to the latest supported version of Fastly

To upgrade from **2.1.X**:

* [Upgrade your PHP version](#php): v2.2 supports PHP 7.0 and 7.1
* [Configuration Management](#config): Create a new `config.php` using the `config.local.php` to properly upgrade
* [.magento.app.yaml](#magento-app-yaml): Update the file with new settings and required changes for hooks and environment variables
* [Verify or set the ADMIN_EMAIL variable](#variable): This variable is required for upgrades and patch to 2.2 and later
* [Upgrade Fastly](#fastly): Make sure you are upgraded to the latest supported version of Fastly
* [Update .gitignore for new generated directory](#gitignore): With 2.2 and later, changes in generated folder require additions to `.gitignore`

After completing your upgrade, you may also want to [Verify and upgrade your extensions](#extensions).

### Upgrade your PHP version {#php}
{{site.data.var.ece}} 2.2 supports PHP 7.0 and 7.1. For Pro projects **created before October 23, 2017**, you must open a [support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to use PHP 7.1 on your Pro Staging and Production environments.

Make sure to upgrade the version of PHP on your local development workspace as well. For more information, see the following:

* [PHP]({{ site.baseurl }}/guides/v2.2/cloud/before/before-workspace-magento-prereqs.html#php) information for your local Magento workspace
* [Migrating from PHP 5.6 to PHP 7.0.x](http://php.net/manual/en/migration70.php){:target="\_blank"}
* [Magento 2.2.x technology stack requirements]({{ site.baseurl }}/guides/v2.2/install-gde/system-requirements-tech.html#php)

### Configuration Management and upgrading {#config}
If you are upgrading from 2.1.4 or later to 2.2.X and use Configuration Management, you need to migrate `config.local.php` to a temporary `config.php` file to your Git branch. When you upgrade without having this file prepared, you will encounter an error with a list of steps to complete prior to upgrading.

Previous versions with Configuration Management use a `config.local.php` file for Configuration Management. Starting with 2.2.0, [Configuration Management]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html) uses a different file name of `config.php`.

We recommend creating a temporary `config.php` file for your Git branch prior to upgrading:

1. Create a copy of `config.local.php` and name it `config.php`. You should add this file in the `app/etc` folder.
2. Git add and commit the file to your branch.
3. Push the file to your Integration branch and environment.
4. Continue preparing and upgrade to 2.2.X.

For more information, see [Migrate config.local.php to config.php]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html#migrate).

After you finish upgrading, you can remove `config.php` and create a new, complete file. For more information, see [Create a new config.php file](#configphp). This file works exactly as `config.local.php`, with additional settings including a list of your enabled modules, additional configurations, and a different name.

<div class="bs-callout bs-callout-warning" markdown="1">
You can only delete this file to replace it this one time. After generating a correct config.php file, you cannot delete the file to generate a new one. For more information, see [Configuration Management and Pipeline Deployment]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html).
</div>

### Update .magento.app.yaml {#magento-app-yaml}
If you are upgrading from 2.0.X or 2.1.X to 2.2.X, you need to also update your [.magento.app.yaml]({{ site.baseurl }}/guides/v2.2/cloud/project/project-conf-files_magento-app.html) or you will encounter errors. {{site.data.var.ece}} 2.2.X has new settings in the file.

1. Locate and edit the `.magento.app.yaml` file in your Git branch.
2. For the PHP version, make sure it is 7.0: `type: php:7.0`
3. We have updated our build and deploy hooks. Locate the `hooks` section, and update the following:

		```yaml
		hooks:
		    # We run build hooks before your application has been packaged.
		    build: |
		        php ./vendor/bin/ece-tools build
		    # We run deploy hook after your application has been deployed and started.
		    deploy: |
		        php ./vendor/bin/ece-tools deploy
		    # We run post deploy hook to clean and warm the cache. Available with ECE-Tools 2002.0.10.
		    post_deploy: |
		        php ./vendor/bin/ece-tools post-deploy
		```

4. Enter the following environment variables to the end of your file:

        variables:
          env:
            CONFIG__DEFAULT__PAYPAL_ONBOARDING__MIDDLEMAN_DOMAIN: 'payment-broker.magento.com'
            CONFIG__STORES__DEFAULT__PAYMENT__BRAINTREE__CHANNEL: 'Magento_Enterprise_Cloud_BT'
            CONFIG__STORES__DEFAULT__PAYPAL__NOTATION_CODE: 'Magento_Enterprise_Cloud'
5. Save the file.

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    Do not commit or push changes to your branch yet. You still need to [Verify other changes](#verify-changes) and [Complete the upgrade](#upgrade).
    </div>

## Back up the database {#backup-db}

{% include cloud/backup-db.md %}

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

    For example, to upgrade to version 2.2:

        composer require magento/magento-cloud-metapackage 2.2.0 --no-update
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

1.  [SSH to the server]({{ page.baseurl }}/cloud/env/environments-ssh.html).
2.  Enter the following command from your Magento root directory to verify the installed version:

        php bin/magento --version

## Create a new config.php file {#configphp}
After fully upgrading, you need to create an updated `config.php` file. You will only complete these instructions once. Complete any additional configuration changes through the Magento Admin in your Integration environment.

1. Open a terminal on your local and use an SSH command to generate `/app/etc/config.php` on the environment:

    `ssh <SSH URL> "<Command>"`

    For example for Pro, to run the `scd-dump` on Integration `master`:

      `ssh itnu84v4m4e5k-master-ouhx5wq@ssh.us.magentosite.cloud "php vendor/bin/m2-ece-scd-dump"`

2. Transfer `config.php` to your local system using `rsync` or `scp`. You can only add this file to the Git branch through your local.

    `rsync <SSH URL>:app/etc/config.php ./app/etc/config.php`

3. Add and push `config.php` to the Git master branch.

    `git add app/etc/config.php && git commit -m "Add system-specific configuration" && git push origin master`

An updated file is generated with a module list and configuration settings at `/app/etc/config.php`.

{: .bs-callout .bs-callout-warning}
For an upgrade, you delete the `config.php` file. Once this file is added to your code, you should not delete it. If you need to remove or edit settings, you must manually edit the file to make changes.

## Verify and upgrade your extensions {#extensions}
If you need to upgrade any third-party extensions and modules that support v2.2, we recommend working in a new Integration branch with your extensions disabled. Review your third-party extension and module pages in Marketplace or other company sites to verify support for {{site.data.var.ee}} and {{site.data.var.ece}} v2.2.

We recommend [backing up your database]({{ page.baseurl }}/cloud/project/project-webint-snap.html#db-dump) prior to installing a number of extensions on your local and Integration environments.

1.  Create a new branch on your local workstation.
1.  Disable your extensions as needed.
1.  When available, download extension upgrades.
1.  Install the upgrade as documented by the third-party documentation.
1.  Enable and test the extension.
1.  Add, commit, and push the code changes to the remote.
1.  Push to and test in your Integration environment.
1.  Push to the Staging environment to test in a pre-production environment.

Include the extensions in your go-live steps to the Production environment only after fully upgrading to v2.2. We strongly recommend fully upgrading your Production environment before including upgraded extensions.

### Additional extension upgrades {#moreextensions}
We strongly recommend upgrading your Fastly module to v1.2.33 or later for {{site.data.var.ece}} 2.2.

## Troubleshoot your upgrade
If the upgrade was not successful, you receive a message indicating an error occurred and you cannot access your storefront or the Magento Admin pane in a browser.

    ```
    There has been an error processing your request
    Exception printing is disabled by default for security reasons.
      Error log record number: <error_number>
    ```{: .no-copy}

You can see the error report about the failed operation by searching for the error number in the `./app/var/report/` directory. For example, if the deployment hook failed and the database had not yet been fully upgraded, the following error occurs:

    ```
    a:4:{i:0;s:433:"Please upgrade your database: Run "bin/magento setup:upgrade" from the Magento root directory.
    The following modules are outdated:
    Magento_Sales schema: current version - 2.0.2, required version - 2.0.3
    ```{: .no-copy}

If you encounter a deployment error to the Pro Staging and Production environments, you need to have us update your `.magento.app.yaml` hooks. Please enter a [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) advising you need your hooks updated in Staging and Production for {{site.data.var.ece}} 2.2.
