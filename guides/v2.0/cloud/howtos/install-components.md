---
layout: default
group: cloud
title: Install, manage, and upgrade modules
version: 2.0
github_link: cloud/howtos/install-components.md
redirect_from:
  - /guides/v2.0/cloud/howtos/update-components.html
functional_areas:
  - Cloud
  - Configuration
---

This information includes information for [adding modules](#install) to {{site.data.var.ece}}, [managing](#manage) enabled and disabled modules, and [upgrading module code](#update).

When adding modules (or extensions) to {{site.data.var.ece}}, you should add the code to a Git branch, test in Integration, deploy and test in Staging, before finally pushing and using in Production.

Modules include the following:

* Modules to extend Magento capabilities, with options through Magento Marketplace and directly through company sites
* Themes to change the look and feel of your storefronts
* Language packages to localize the storefront and Admin

These instructions walk through module installation purchased from Magento Marketplace. You can use the same procedure to install any module with the module's Composer name. To find it, open the module's `composer.json` file and note the values for `"name"` and `"version"`.

## Create a branch for adding or updating the module {#getstarted}
We recommend using a branch for adding or updating, configuring, and testing your module.

{% include cloud/cli-get-started.md %}

## Install a module {#install}
[Module installation](#install) uses the following steps:

1.  Purchase a module from [Magento Marketplace](https://marketplace.magento.com){:target="_blank"} or another site.
1.  [Create a branch](#getstarted) to work with the files.
1.  [Get the module's Composer name](#compose) and version from your purchase history.
1.  In your local {{site.data.var.ece}} project, [update the Magento `composer.json`](#update) file with the name and version of the module and add the code to Git. The code builds, deploys, and is available through the environment.
1.  [Verify](#verify) the module installed properly.

### Step 1: Get the module's Composer name and version {#compose}
If you already know the module's Composer name and version, skip this step and continue with [Update Magento's `composer.json`](#update).

{% include cloud/composer-name.md %}

### Step 2: Update Magento's `composer.json` {#update}
When adding the module to `composer.json`, the file [`app/etc/config.php`]({{page.baseurl}}/config-guide/config/config-php.html) will also be updated. This file includes a list of installed modules, themes, and language packages, and shared configuration settings.

To update `composer.json`:

1.  If you haven't done so already, change to your environment root directory.
1.  Enter the following commands to update it:

    ```bash
    composer require <component-name>:<version> --no-update
    composer update
    ```

    For example:
    
    ```bash
    composer require pixlee/magento2:1.0.1 --no-update
    composer update
    ```

1.  Wait for project dependencies to update.
1.  Enter the following commands in the order shown to commit your changes, including `composer.lock`:

    ```bash
    git add -A
    git commit -m "<message>"
    git push origin <environment ID>
    ```

If there are errors, see [module deployment failure]({{page.baseurl}}/cloud/trouble/trouble_comp-deploy-fail.html).

<div class="bs-callout bs-callout-warning">
When installing and adding the module, you must add the `composer.lock` to your Git branch for deployment. If the module is not in the file, the module won't load in {{site.data.var.ece}}. This ensures when the `composer install` command is used, the module properly loads. This command uses the `composer.lock` file.
</div>

### Step 3: Verify the module {#verify}
To verify the module installed properly, you can check its functionality in the Magento Admin or you can make sure it is enabled as follows:

1.  Open a terminal.
1.  [Checkout the branch]({{page.baseurl}}/cloud/before/before-setup-env-2_clone.html#branch) where the module is installed.
1.  List all enabled modules:

    ```bash
    php bin/magento module:status
    ```

1.  Verify the module is listed.

The module name is in the format `<VendorName>_<ComponentName>`. It will not be in the same format as the Composer name.

## Manage modules {#manage}
To manage your modules, you can enable and disable or change settings per environment.

### Enable and disable modules {#enable-disable}
You can use CLI commands or directly edit `app/etc/config.php` to enable or disable modules. After updating this file, push your changes from your local to the remote Git and deploy across all environments.

1.  In a terminal, access your local development environment.
1.  List all modules:

    ```bash
    php bin/magento module:status
    ```
1.  Enable a module.

    ```bash
    php bin/magento module:enable <module name>
    ```

1.  Disable a module.

    ```bash
    php bin/magento module:disable <module name>
    ```
1.  Verify the status of a module:

    ```bash
    php bin/magento module:status
    ```

    Also, you can navigate to, and edit, the `app/etc/config.php` file to verify the module is disabled.

    ```php
    return array (
     'modules' =>
     array (
       'Magento_Core' => 1,
       'Magento_Store' => 1,
       'Magento_Theme' => 1,
       'Magento_Authorization' => 1,
       'Magento_Directory' => 1,
       'Magento_Backend' => 1,
       'Magento_Backup' => 1,
       'Magento_Eav' => 1,
       'Magento_Customer' => 1,
    ...
     ),
    );
    ```

  The value `1` or `0` indicates whether a module is enabled or disabled.

1.  Push your updates to the Git branch:

    ```bash
    git add -A
    git commit -m "<message>"
    git push origin <environment ID>
    ```

1.  [Complete deployment]({{page.baseurl}}/cloud/live/stage-prod-live.html) to Integration for testing, then Staging for testing, and finally Production.

### Modify configurations {#configure}
To change settings for your modules and modules, you should make those changes in all environments as needed. We recommend using similar or matching settings between Staging and Production to fully test functionality. If you have an module or module using sandbox credentials and settings, you make sure to switch those to live settings if in Production.

## Upgrade an module {#update}
You should have a branch to work in when updating your module. These instructions use composer to update the files. Before you continue, you must:

* Know the module's Composer name and version
* Know the module is compatible with your project and {{site.data.var.ece}} version. In particular, check the required PHP version.

To update an module:

1.  If you haven't done so already, change to your environment root directory.
1.  Open `composer.json` in a text editor.
1.  Locate your module and update the version.
1.  Save your changes to `composer.json` and exit the text editor.
1.  Update project dependencies:

		composer update
1.  Enter the following commands in the order to commit the changes and deploy the project, including `composer.lock`:

    ```bash
    git add -A
    git commit -m "<message>"
    git push origin <environment ID>
    ```

1.  Wait for the project to deploy and verify in your environment.

If there are errors, see [Component deployment failure]({{page.baseurl}}/cloud/trouble/trouble_comp-deploy-fail.html).
