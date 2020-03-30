---
group: cloud-guide
title: Upgrade Magento version
functional_areas:
  - Cloud
  - Upgrade
---

You can upgrade the core {{site.data.var.ee}} code base to a newer version. It is best to review the summary of the updated [technology stack] before upgrading your project. If you need to upgrade from a version older than 2.1, you must upgrade to a supported version first. See [Upgrades and patches] for upgrade path details.

{% include cloud/note-upgrade.md %}

{% include cloud/note-ece-tools-package.md %}

## Upgrading from older versions of the Magento application

If you are upgrading from 2.1.4 or later to 2.2.x or later, review the [Magento technology stack requirements]. Your upgrade tasks may include the following:

-  Upgrade your PHP version
-  Convert an older configuration management file
-  Update the `.magento.app.yaml` file with new settings for hooks and environment variables
-  Upgrade to the latest supported version of Fastly
-  Update the `.gitignore` file

### Configuration management

If you are upgrading from 2.1.4 or later to 2.2.x or later and use [Configuration Management], you need to migrate the `config.local.php` file. Older versions used a `config.local.php` file for Configuration Management, but version 2.2.0 and later use the `config.php` file. This file works exactly as the `config.local.php` file, with additional settings that include a list of your enabled modules, additional configurations, and a different name.

{:.procedure}
To create a temporary `config.php` file:

1. Create a copy of `config.local.php` file and name it `config.php`.

1. Add this file to the `app/etc` folder.

1. Add and commit the file to your branch.

1. Push the file to your Integration branch.

1. Continue with the upgrade process.

{:.bs-callout-warning}
After upgrading, you can remove the `config.php` file and generate a new, complete file. You can only delete this file to replace it this one time. After generating a new, complete `config.php` file, you cannot delete the file to generate a new one. See [Configuration Management and Pipeline Deployment]({{ site.baseurl }}/cloud/live/sens-data-over.html).

### Update the configuration file

If you are upgrading from an older version of Magento to 2.2.x or later, you must also update your [.magento.app.yaml] file or you might encounter errors. {{site.data.var.ece}} 2.2.x and later has new settings in the file.

{:.procedure}
To update the `.magento.app.yaml` file:

1. Update the PHP options.

   ```yaml
   type: php:<version>
   ```

1. Modify the hook commands in the `magento.app.yaml` file.

   ```yaml
   hooks:
       # We run build hooks before your application has been packaged.
       build: |
           set -e
           php ./vendor/bin/ece-tools build:generate
           php ./vendor/bin/ece-tools build:transfer
       # We run deploy hook after your application has been deployed and started.
       deploy: |
           php ./vendor/bin/ece-tools deploy
       # We run post deploy hook to clean and warm the cache. Available with ECE-Tools 2002.0.10.
       post_deploy: |
           php ./vendor/bin/ece-tools post-deploy
   ```

1. Add the following environment variables to the end of the `magento.app.yaml` file.

   ```yaml
   variables:
       env:
           CONFIG__DEFAULT__PAYPAL_ONBOARDING__MIDDLEMAN_DOMAIN: 'payment-broker.magento.com'
           CONFIG__STORES__DEFAULT__PAYMENT__BRAINTREE__CHANNEL: 'Magento_Enterprise_Cloud_BT'
           CONFIG__STORES__DEFAULT__PAYPAL__NOTATION_CODE: 'Magento_Enterprise_Cloud'
    ```

1. Save the file. Do not commit or push changes to your branch yet.

1. Continue with the upgrade process.

## Upgrading the Magento application

Review the [Magento technology stack requirements] before upgrading your Magento application.

### Back up the database

{% include cloud/backup-db.md %}

### Complete the upgrade

If you use PHP version 7.2, you must remove the `mcrypt` extension from the [extensions section of the .magento.app.yaml file]. For Pro projects, you need to create a support ticket to completely disable the `mcrypt` extension.

 {:.bs-callout-info}
When upgrading to 2.3.x from 2.2.x, you must verify that the `composer.json` file contains `"Zend\\Mvc\\Controller\\": "setup/src/Zend/Mvc/Controller/"` in the `"psr-4":` section of the `autoload` property.

{:.procedure}
To upgrade the Magento version:

1. Change to your Magento root directory and set the upgrade version using the [version constraint syntax].

   ```bash
   composer require "magento/magento-cloud-metapackage":">=2.x.2 <2.x.3" --no-update
   ```

    {:.bs-callout-info}
   You must use the version constraint syntax to successfully update the `{{site.data.var.ct}}` package.

1. Update the project.

   ```bash
   composer update
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -A && git commit -m "Upgrade" && git push magento <branch-name>
   ```

   `git add -A` is required to add all changed files to source control because of the way Composer marshals base packages. Both `composer install` and `composer update` marshal files from the base package (`magento/magento2-base` and `magento/magento2-ee-base`) into the package root.

   The files that Composer marshals belong to the new version of Magento, to overwrite the outdated version of those same files. Currently, marshaling is disabled in {{site.data.var.ee}}, so you must add the marshaled files to source control.

1. Wait for deployment to complete.

1. Verify the upgrade in your Integration, Staging, or Production environment by using SSH to log in and check the version.

   ```bash
   php bin/magento --version
   ```

### Create a new config.php file

As mentioned in [Configuration management](#configuration-management), after upgrading, you need to create an updated `config.php` file. Complete any additional configuration changes through the Magento Admin in your Integration environment.

{:.procedure}
To create a system-specific configuration file:

1. From the terminal, use an SSH command to generate the `/app/etc/config.php` file for the environment.

   ```bash
   ssh <SSH-URL> "<Command>"
   ```

   For example for Pro, to run the `scd-dump` on the `integration` branch:

   ```bash
   ssh <project-id-integration>@ssh.us.magentosite.cloud "php vendor/bin/m2-ece-scd-dump"
   ```

1. Transfer the `config.php` file to your local workstations using `rsync` or `scp`. You can only add this file to the branch locally.

   ```bash
   rsync <SSH-URL>:app/etc/config.php ./app/etc/config.php
   ```

1. Add, commit, and push code changes.

   ```bash
   git add app/etc/config.php && git commit -m "Add system-specific configuration" && git push magento master
   ```

   This generates an updated `/app/etc/config.php` file with a module list and configuration settings.

{:.bs-callout-warning}
For an upgrade, you delete the `config.php` file. Once this file is added to your code, you should **not** delete it. If you need to remove or edit settings, you must edit the file manually.

### Upgrading extensions

Review your third-party extension and module pages in Marketplace or other company sites to verify support for {{site.data.var.ee}} and {{site.data.var.ece}}. If you need to upgrade any third-party extensions and modules, we recommend working in a new Integration branch with your extensions disabled.

{:.procedure}
To verify and upgrade your extensions:

1. Create a new branch on your local workstation.

1. Disable your extensions as needed.

1. When available, download extension upgrades.

1. Install the upgrade as documented by the third-party documentation.

1. Enable and test the extension.

1. Add, commit, and push the code changes to the remote.

1. Push to and test in your Integration environment.

1. Push to the Staging environment to test in a pre-production environment.

We strongly recommend upgrading your Production environment _before_ including the upgraded extensions in your go-live process.
We also recommend upgrading to the latest version of the Fastly CDN module for Magento 2.

## Troubleshoot upgrade

If the upgrade failed, you receive an error message in the browser indicating that you cannot access your storefront or the Magento Admin panel:

```terminal
There has been an error processing your request
Exception printing is disabled by default for security reasons.
  Error log record number: <error-number>
```

{:.procedure}
To resolve the error:

1. Using SSH, log in to the remote server and open the `./app/var/report/<error number>` file.

1. [Examine the logs] to determine the source of the issue.

1. Add, commit, and push code changes.

   ```bash
   git add -A && git commit -m "Fixed deployment failure" && git push magento <branch-name>
   ```

[technology stack]: {{site.baseurl}}/guides/v2.3/install-gde/system-requirements-tech.html
[Upgrades and patches]: {{site.baseurl}}/cloud/project/project-upgrade-parent.html
[Magento technology stack requirements]: {{site.baseurl}}/guides/v2.3/install-gde/system-requirements-tech.html
[Configuration Management]: {{site.baseurl}}/cloud/live/sens-data-over.html
[extensions section of the .magento.app.yaml file]: {{site.baseurl}}/cloud/project/project-conf-files_magento-app.html#configure-php-options
[.magento.app.yaml]: {{site.baseurl}}/cloud/project/project-conf-files_magento-app.html
[version constraint syntax]: {{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html#metapackage
[Examine the logs]: {{site.baseurl}}/cloud/project/log-locations.html
