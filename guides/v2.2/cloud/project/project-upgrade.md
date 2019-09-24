---
group: cloud-guide
title: Upgrade Magento version
functional_areas:
  - Cloud
  - Upgrade
---

You can upgrade the core {{site.data.var.ee}} code base to version 2.2 from version 2.1.7 and later. If you need to upgrade from an older version, you must upgrade to a supported version first.

Prepare your environment with the following tasks:

- Upgrade your PHP version to 7.1 or later
- Create a new `config.php` file
- Update the `.magento.app.yaml` file with new settings for hooks and environment variables
- Upgrade to the latest supported version of Fastly
- Add the new generated directory to the `.gitignore` file

{% include cloud/note-upgrade.md %}

{% include cloud/note-ece-tools-package.md %}

### Upgrade PHP version

{{site.data.var.ece}} 2.2 supports PHP 7.1 and later. You can upgrade the version of PHP on your local development workspace.

- [PHP]({{ site.baseurl }}/guides/v2.2/cloud/before/before-workspace-magento-prereqs.html#php) information for your local Magento workstation
- [Migrating PHP](http://php.net/manual/en/migration71.php)
- [Magento 2.2.x technology stack requirements]({{ site.baseurl }}/guides/v2.2/install-gde/system-requirements-tech.html#php)

### Configuration management

If you are upgrading from 2.1.4 or later to 2.2.X and use Configuration Management, you need to migrate the `config.local.php` file. Previous versions with Configuration Management used a `config.local.php` file for Configuration Management. Starting with 2.2.0, [Configuration Management]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html) uses the `config.php` file.

#### To create a temporary `config.php` file:

1. Create a copy of `config.local.php` file and name it `config.php`.

1. Add this file to the `app/etc` folder.

1. Add and commit the file to your branch.

1. Push the file to your Integration branch.

1. Continue with the upgrade process.

After you finish upgrading, you can remove the `config.php` file and create a new, complete file. This file works exactly as `config.local.php`, with additional settings including a list of your enabled modules, additional configurations, and a different name.

{: .bs-callout .bs-callout-warning}
You can only delete this file to replace it this one time. After generating a correct `config.php` file, you cannot delete the file to generate a new one. For more information, see [Configuration Management and Pipeline Deployment]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html).

### Update the .magento.app.yaml file

If you are upgrading to 2.2.X, you need to also update your [.magento.app.yaml]({{ site.baseurl }}/guides/v2.2/cloud/project/project-conf-files_magento-app.html) or you may encounter errors. {{site.data.var.ece}} 2.2.X has new settings in the file.

1. Update the PHP options.

   ```yaml
   type: php:7.2
   ```

1. Modify the hook commands in the `magento.app.yaml` file.

   ```yaml
   hooks:
      We run build hooks before your application has been packaged.
    build: |
      php ./vendor/bin/ece-tools build
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

## Back up the database

{% include cloud/backup-db.md %}

## Complete the upgrade

1. Change to your Magento root directory and set the upgrade version.

    ```bash
    composer require magento/magento-cloud-metapackage <requiredversion> --no-update
    ```

1. Update the project.

    ```bash
    composer update
    ```

1. Add, commit, and push code changes.

    ```bash
    git add -A && git commit -m "Upgrade" && git push origin <branch name>
    ```

    `git add -A` is required to add all changed files to source control because of the way Composer marshals base packages. Both `composer install` and `composer update` marshal files from the base package (`magento/magento2-base` and `magento/magento2-ee-base`) into the package root.

    The files Composer marshals belong to the new version of Magento, to overwrite the outdated version of those same files. Currently, marshaling is disabled in Magento Commerce, so you must add the marshaled files to source control.

1. Wait for deployment to complete.

1. Verify the upgrade in your Integration, Staging, or Production environment by using SSH to log in and check the version.

    ```bash
    php bin/magento --version
    ```

## Create a new config.php file

After upgrading, you need to create an updated `config.php` file. Complete any additional configuration changes through the Magento Admin in your Integration environment.

1. From the terminal, use an SSH command to generate the `/app/etc/config.php` file for the environment.

    ```bash
    ssh <SSH URL> "<Command>"
    ```

    For example for Pro, to run the `scd-dump` on the `integration` branch:

    ```bash
    ssh <project-id-integration>@ssh.us.magentosite.cloud "php vendor/bin/m2-ece-scd-dump"
    ```

1. Transfer the `config.php` file to your local workstations using `rsync` or `scp`. You can only add this file to the branch locally.

    ```bash
    rsync <SSH URL>:app/etc/config.php ./app/etc/config.php
    ```

1. Add, commit, and push code changes.

   ```bash
   git add app/etc/config.php && git commit -m "Add system-specific configuration" && git push origin master
   ```

    This generates an updated `/app/etc/config.php` file with a module list and configuration settings.

{: .bs-callout-warning}
For an upgrade, you delete the `config.php` file. Once this file is added to your code, you should not delete it. If you need to remove or edit settings, you must manually edit the file to make changes.

## Verify and upgrade your extensions {#extensions}

{%
include note.html
type='info'
content='Review your third-party extension and module pages in Marketplace or other company sites to verify support for Magento Commerce and Magento Commerce Cloud version 2.2.

If you need to upgrade any third-party extensions and modules that support version 2.2, we recommend working in a new Integration branch with your extensions disabled.'
%}

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

If the upgrade failed, you receive an error message in the browser indicating that you cannot access your storefront or the Magento Admin pane:

```terminal
There has been an error processing your request
Exception printing is disabled by default for security reasons.
  Error log record number: <error number>
```
{: .no-copy}

#### To resolve the error:

1. Using SSH, log in to the remote server and open the `./app/var/report/<error number>` file.

1. [Examine the logs]({{page.baseurl}}/cloud/project/log-locations.html) to determine the source of the issue.

1. Add, commit, and push code changes.

    ```bash
    git add -A && git commit -m "Fixed deployment failure" && git push origin <branch name>
    ```
