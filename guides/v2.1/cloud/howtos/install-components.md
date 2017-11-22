---
layout: default
group: cloud
subgroup: How To
title: Install, manage, and upgrade extensions
menu_title: Install, manage, and upgrade extensions
menu_order: 41
level3_menu_node: level3child
level3_subgroup: update-extensions
menu_node:
version: 2.1
github_link: cloud/howtos/install-components.md
redirect_from:
  - /guides/v2.1/cloud/howtos/update-components.html
functional_areas:
  - Cloud
  - Configuration
---

This information includes information for [adding extensions](#install) to {{site.data.var.ece}}, [managing](#manage) enabled and disabled extensions, and [upgrading extension code](#update).

When adding extensions to {{site.data.var.ece}}, you should add the code to a Git branch, test in Integration, deploy and test in Staging, before finally pushing and using in Production.

Extensions include the following:

*	Modules to extend Magento capabilities, with options through Magento Marketplace and directly through company sites
*	Themes to change the look and feel of your storefronts
*	Language packages to localize the storefront and Admin

These instructions walk through extension installation purchased from Magento Marketplace. You can use the same procedure to install any extension with the extension's Composer name. To find it, open the extension's `composer.json` file and note the values for `"name"` and `"version"`.

We also include instructions for [updating extensions](#update).

## Create a branch for adding or updating the extension {#getstarted}
We recommend using a branch for adding or updating, configuring, and testing your extension.

{% include cloud/cli-get-started.md %}

## Install an extension {#install}
[Extension installation](#install) uses the following steps:

1.	Purchase an extension or module from [Magento Marketplace](https://marketplace.magento.com){:target="_blank"} or another site.
2.	[Create a branch](#getstarted) to work with the files.
1.	[Get the extension's Composer name](#compose) and version from your purchase history.
2.	In your local {{site.data.var.ece}} project, [update the Magento `composer.json`](#update) file with the name and version of the extension and add the code to Git. The code builds, deploys, and is available through the environment.
4.	[Verify](#verify) the extension installed properly.

### Step 1: Get the extension's Composer name and version {#compose}
If you already know the extension's Composer name and version, skip this step and continue with [Update Magento's `composer.json`](#cloud-howto-comp-json).

{% include cloud/composer-name.md %}

### Step 2: Update Magento's `composer.json` {#update}
When adding the module to `composer.json`, the file [`app/etc/config.php`]({{page.baseurl}}config-guide/config/config-php.html) will also be updated. This file includes a list of installed modules, themes, and language packages, and shared configuration settings. This file differs from `config.local.php` used by [Configuration Management](http://devdocs.magento.com/guides/v2.1/cloud/live/sens-data-over.html).

To update `composer.json`:

1.	If you haven't done so already, change to your environment root directory.
2.	Enter the following commands to update it:

		composer require <component-name>:<version> --no-update
		composer update

	For example:

		composer require pixlee/magento2:1.0.1 --no-update
		composer update
3.	Wait for project dependencies to update.
4. Enter the following commands in the order shown to commit your changes, including `composer.lock`:

        git add -A
        git commit -m "<message>"
        git push origin <environment ID>

If there are errors, see [extension deployment failure]({{page.baseurl}}cloud/trouble/trouble_comp-deploy-fail.html).

<div class="bs-callout bs-callout-warning">
When installing and adding the extension the extension, you must add the `composer.lock` to your Git branch for deployment. If the extension is not in the file, the extension won't load in {{site.data.var.ece}}. This ensures when the `composer install` command is used, the extension properly loads. This command uses the `composer.lock` file.
</div>

### Step 3: Verify the extension {#verify}
To verify the extension installed properly, you can check its functionality in the Magento Admin or you can make sure it is enabled as follows:

1.	[SSH to the environment]({{page.baseurl}}cloud/env/environments-start.html#env-start-ssh) on which the extension is installed.
2.	Enter the following command to display a list of enabled modules:

        php bin/magento module:status
3.	Verify the extension is listed.

The extension name is in the format `<VendorName>_<ComponentName>`. It will not be in the same format as the Composer name.

## Manage extensions {#manage}
To manage your extensions, you can enable and disable or change settings per environment.

### Enable and disable extensions {#enable-disable}
You can use CLI commands or directly edit `app/etc/config.php` to enable or disable modules. After updating this file, push your changes from your local to the remote Git and deploy across all environments.

1. In a terminal, access your local development environment.
2. You need a specific name of the extension or module. Use the following command to locate the name:

        php bin/magento module:status
3. To enable, use the following command.

        php bin/magento module:enable <module name>
4. To disable, use the following command.

        php bin/magento module:disable <module name>
5. Use the following command to verify the changed status of the module:

        php bin/magento module:status

  You can also navigate to and edit the `app/etc/config.php` file to verify the module is disabled.

  {% highlight php startinline=true %}
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
  {% endhighlight %}

  The value `1` or `0` indicates whether a module is enabled or disabled.
6. Push your updates to the Git branch:

        git add -A
        git commit -m "<message>"
        git push origin <environment ID>

7. [Complete deployment]({{page.baseurl}}cloud/live/stage-prod-live.html) to Integration for testing, then Staging for testing, and finally Production.

### Modify configurations {#configure}
For projects using {{site.data.var.ece}} **before 2.1.4**, to change settings for your extensions and modules, you should make those changes in all environments as needed. We recommend using similar or matching settings between Staging and Production to fully test functionality. If you have an extension or module using sandbox credentials and settings, you make sure to switch those to live settings if in Production.

For projects **2.1.4 and later**, you will update configurations according to [Configuration Management](http://devdocs.magento.com/guides/v2.1/cloud/live/sens-data-over.html#update) for `config.local.php`.

## Upgrade an extension {#update}
You should have a branch to work in when updating your extension. These instructions use composer to update the files. Before you continue, you must:

*	Know the extension's Composer name and version
*	Know the extension is compatible with your project and {{site.data.var.ece}} version. In particular, check the required PHP version.

To update an extension:

1.	If you haven't done so already, change to your environment root directory.
3.	Open `composer.json` in a text editor.
4.	Locate your extension and update the version.
6.	Save your changes to `composer.json` and exit the text editor.
7.	Use the following command to update project dependencies:

		composer update
8.	Enter the following commands in the order to commit the changes and deploy the project, including `composer.lock`:

		git add -A
		git commit -m "<message>"
		git push origin <environment ID>
9.	Wait for the project to deploy and verify in your environment.

If there are errors, see [Component deployment failure]({{page.baseurl}}cloud/trouble/trouble_comp-deploy-fail.html).

#### Related topics
*	[Update components]({{page.baseurl}}cloud/howtos/update-components.html)
*	[Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)
