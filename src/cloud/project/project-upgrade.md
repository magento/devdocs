---
group: cloud-guide
title: Upgrade version
functional_areas:
  - Cloud
  - Upgrade
---

You can upgrade the core {{site.data.var.ee}} code base to a newer version. Before upgrading your project, review the [service versions][System requirements] information for the latest software version requirements. If you must upgrade from a version older than 2.1, you must upgrade to a supported version first. See [Upgrades and patches] for upgrade path details.

{% include cloud/note-upgrade.md %}

Review the [service versions][System requirements] information for the latest software version requirements. Depending on your project configuration, your upgrade tasks may include the following:

-  Update services for compatibility with new {{site.data.var.ee}} versions. See [Change service version].
-  Convert an older configuration management file.
-  Update the `.magento.app.yaml` file with new settings for hooks and environment variables.
-  Upgrade third-party extensions to the latest supported version.
-  Update the `.gitignore` file.

{% include cloud/note-ece-tools-package.md %}

## Configuration management

Older versions of {{site.data.var.ee}}, such as 2.1.4 or later to 2.2.x or later, used a `config.local.php` file for Configuration Management. {{site.data.var.ee}} version 2.2.0 and later use the `config.php` file, which works exactly like the `config.local.php` file, but it has different configuration settings that include a list of your enabled modules and additional configuration options.

When upgrading from an older version, you must migrate the `config.local.php` file to use the newer `config.php` file. Use the following steps to back up your configuration file and create one.

{:.procedure}
To create a temporary `config.php` file:

1. Create a copy of `config.local.php` file and name it `config.php`.

1. Add this file to the `app/etc` folder.

1. Add and commit the file to your branch.

1. Push the file to your Integration branch.

1. Continue with the upgrade process.

{:.bs-callout-warning}
After upgrading, you can remove the `config.php` file and generate a new, complete file. You can only delete this file to replace it this one time. After generating a new, complete `config.php` file, you cannot delete the file to generate a new one. See [Configuration Management and Pipeline Deployment]({{ site.baseurl }}/cloud/live/sens-data-over.html).

### Verify Zend Framework composer dependencies

When upgrading to **2.3.x or later from 2.2.x**, verify that the Zend Framework dependencies have been added to the `autoload` property of the `composer.json` file to support Laminas. This plugin supports new requirements for the Zend Framework, which has migrated to the Laminas project. See [Migration of Zend Framework to the Laminas Project](https://community.magento.com/t5/Magento-DevBlog/Migration-of-Zend-Framework-to-the-Laminas-Project/ba-p/443251) on the _Magento DevBlog_.

{:.procedure}
To check the `auto-load:psr-4` configuration:

1. On your local workstation, change to the Cloud project root directory.

1. Check out your integration branch.

1. Open the `composer.json` file in a text editor.

1. Check the `autoload:psr-4` section for the Zend plugin manager implementation for controllers dependency::

   ```diff
    "autoload": {
       "psr-4": {
          "Magento\\Framework\\": "lib/internal/Magento/Framework/",
          "Magento\\Setup\\": "setup/src/Magento/Setup/",
          "Magento\\": "app/code/Magento/",
          "Zend\\Mvc\\Controller\\": "setup/src/Zend/Mvc/Controller/"
       },
   ```
   {:.no-copy}

1. If the Zend dependency is missing, update `composer.json`:

   -  Add the following line to the `autoload:psr-4` section.

      ```json
      "Zend\\Mvc\\Controller\\": "setup/src/Zend/Mvc/Controller/"
      ```

   -  Update the project dependencies.

      ```bash
      composer update
      ```

   -  Add, commit, and push code changes.

      ```bash
      git add -A
      ```

      ```bash
      git commit -m "Add Zend plugin manager implementation for controllers dependency for Laminas support"
      ```

      ```bash
      git push origin <branch-name>
      ```

   -  Merge changes to the Staging environment, and then to Production.

## Configuration files

Before upgrading the application, you must update your project configuration files to account for changes to the default configuration settings for {{site.data.var.ece}} or the application. The latest defaults can be found in the [magento-cloud GitHub repository][templates].

### .magento.app.yaml

 Always review the values contained in the [.magento.app.yaml][] file for your installed version, because it controls the way your application builds and deploys to the cloud infrastructure. The following example is for version 2.4.4 and uses Composer 2.2.4. The `build: flavor:` property is not used for Composer 2.x; see [Installing and using Composer 2][use-composer-2].

{:.procedure}
To update the `.magento.app.yaml` file:

1. Update the PHP options.

   ```yaml
   type: php:8.1

   build:
       flavor: none
   dependencies:
       php:
           composer/composer: '2.2.4'
   ```

1. Modify the hook commands in the `magento.app.yaml` file.

   ```yaml
   hooks:
       # We run build hooks before your application has been packaged.
       build: |
           set -e
           composer install
           php ./vendor/bin/ece-tools run scenario/build/generate.xml
           php ./vendor/bin/ece-tools run scenario/build/transfer.xml
       # We run deploy hook after your application has been deployed and started.
       deploy: |
           php ./vendor/bin/ece-tools run scenario/deploy.xml
       # We run post deploy hook to clean and warm the cache. Available with ECE-Tools 2002.0.10.
       post_deploy: |
           php ./vendor/bin/ece-tools run scenario/post-deploy.xml
   ```

1. Add the following environment variables to the end of the `magento.app.yaml` file.

   For {{site.data.var.ee}} 2.2.x - 2.3.x–

   ```yaml
   variables:
       env:
           CONFIG__DEFAULT__PAYPAL_ONBOARDING__MIDDLEMAN_DOMAIN: 'payment-broker.magento.com'
           CONFIG__STORES__DEFAULT__PAYMENT__BRAINTREE__CHANNEL: 'Magento_Enterprise_Cloud_BT'
           CONFIG__STORES__DEFAULT__PAYPAL__NOTATION_CODE: 'Magento_Enterprise_Cloud'
    ```

   For {{site.data.var.ee}} 2.4.x–

   ```yaml
   variables:
       env:
           CONFIG__DEFAULT__PAYPAL_ONBOARDING__MIDDLEMAN_DOMAIN: 'payment-broker.magento.com'
           CONFIG__STORES__DEFAULT__PAYPAL__NOTATION_CODE: 'Magento_Enterprise_Cloud'
    ```

1. Save the file. Do not commit or push changes to your branch yet.

1. Continue with the upgrade process.

### composer.json

Before upgrading, always check that the dependencies in the `composer.json` file are compatible with the {{site.data.var.ee}} version.

{:.procedure}
To update the `composer.json` file for {{site.data.var.ee}} version 2.4.4:

1. Add the `allow-plugins` to the `config` section.

   ```json

   "config": {
      ...
      "allow-plugins": {
         "dealerdirect/phpcodesniffer-composer-installer": true,
         "laminas/laminas-dependency-plugin": true,
         "magento/*": true
      }
   },
   ```

1. Require the following plugin:

   ```json
   "require": {
      ...
      "magento/composer-root-update-plugin": "^2.0.2"
   },
   ```

1. Add the following component to the `extra` section:

   ```json
   "extra": {
      ...
      "component_paths": {
         "tinymce/tinymce": "lib/web/tiny_mce_5"
      },
   },
   ```

1. Save the file. Do not commit or push changes to your branch yet.

1. Continue with the upgrade process.

## Project backup

{% include cloud/backup-db.md %}

## Application upgrade

Review the [service versions][System requirements] information for the latest software version requirements before upgrading your application.

{%include cloud/note-pro-using-yaml-support.md%}

{:.procedure}
To upgrade the application version:

1. Change to your application root directory and set the upgrade version using the [version constraint syntax].

   ```bash
   composer require "magento/magento-cloud-metapackage":">=CURRENT_VERSION <NEXT_VERSION" --no-update
   ```

   {:.bs-callout-info}
   You must use the version constraint syntax to successfully update the `{{site.data.var.ct}}` package. You can find the version constraint in the `composer.json` file for the version of the [application template](https://github.com/magento/magento-cloud/blob/master/composer.json) you are using for the upgrade.

1. Update the project.

   ```bash
   composer update
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Upgrade"
   ```

   ```bash
   git push origin <branch-name>
   ```

   `git add -A` is required to add all changed files to source control because of the way Composer marshals base packages. Both `composer install` and `composer update` marshal files from the base package (`magento/magento2-base` and `magento/magento2-ee-base`) into the package root.

   The files that Composer marshals belong to the new version of {{site.data.var.ee}}, to overwrite the outdated version of those same files. Currently, marshaling is disabled in {{site.data.var.ee}}, so you must add the marshaled files to source control.

1. Wait for deployment to complete.

1. Verify the upgrade in your Integration, Staging, or Production environment by using SSH to log in and check the version.

   ```bash
   php bin/magento --version
   ```

### Create a config.php file

As mentioned in [Configuration management](#configuration-management), after upgrading, you must create an updated `config.php` file. Complete any additional configuration changes through the Admin in your Integration environment.

{:.procedure}
To create a system-specific configuration file:

1. From the terminal, use an SSH command to generate the `/app/etc/config.php` file for the environment.

   ```bash
   ssh <SSH-URL> "<Command>"
   ```

   For example for Pro, to run the `scd-dump` on the `integration` branch:

   ```bash
   ssh <project-id-integration>@ssh.us.magentosite.cloud "php vendor/bin/ece-tools config:dump"
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
For an upgrade, you delete the `config.php` file. Once this file is added to your code, you should **not** delete it. If you must remove or edit settings, you must edit the file manually.

### Upgrade extensions

Review your third-party extension and module pages in Marketplace or other company sites and verify support for {{site.data.var.ee}} and {{site.data.var.ece}}. If you must upgrade any third-party extensions and modules, Adobe recommends working in a new Integration branch with your extensions disabled.

{:.procedure}
To verify and upgrade your extensions:

1. Create a branch on your local workstation.

1. Disable your extensions as needed.

1. When available, download extension upgrades.

1. Install the upgrade as documented by the third-party documentation.

1. Enable and test the extension.

1. Add, commit, and push the code changes to the remote.

1. Push to and test in your Integration environment.

1. Push to the Staging environment to test in a pre-production environment.

Adobe strongly recommends upgrading your Production environment _before_ including the upgraded extensions in your site launch process.

{:.bs-callout-info}
When you upgrade your application version, the upgrade process updates to the latest version of the [Fastly CDN module for Magento 2] automatically.

## Troubleshoot upgrade

If the upgrade failed, you receive an error message in the browser indicating that you cannot access your storefront or the Admin panel:

```terminal
There has been an error processing your request
Exception printing is disabled by default for security reasons.
  Error log record number: <error-number>
```

{:.procedure}
To resolve the error:

1. Using SSH, log in to the remote server and open the `./app/var/report/<error number>` file.

1. [Examine the logs] and determine the source of the issue.

1. Add, commit, and push code changes.

   ```bash
   git add -A && git commit -m "Fixed deployment failure" && git push magento <branch-name>
   ```

<!--Link definitions-->
[.magento.app.yaml]: {{site.baseurl}}/cloud/project/magento-app.html
[Configuration Management]: {{site.baseurl}}/cloud/live/sens-data-over.html
[Change service version]: {{site.baseurl}}/cloud/project/services.html#change-service-version
[Examine the logs]: {{site.baseurl}}/cloud/project/log-locations.html
[extensions section of the .magento.app.yaml file]: {{site.baseurl}}/cloud/project/magento-app.html#configure-php-options
[Fastly CDN module for Magento 2]: {{site.baseurl}}/cloud/cdn/cloud-fastly.html#fastly-cdn-module-for-magento-2
[Migration of Zend Framework to the Laminas Project]: https://community.magento.com/t5/Magento-DevBlog/Migration-of-Zend-Framework-to-the-Laminas-Project/ba-p/443251
[Upgrades and patches]: {{site.baseurl}}/cloud/project/project-upgrade-parent.html
[System requirements]: {{site.baseurl}}/guides/v2.4/install-gde/system-requirements.html
[templates]: https://github.com/magento/magento-cloud
[version constraint syntax]: {{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html#metapackage
[use-composer-2]: {{site.baseurl}}/cloud/project/magento-app-properties.html#installing-and-using-composer-2
