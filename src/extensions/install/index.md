---
group: extensions
title: General CLI installation
redirect_from:
 - guides/v2.3/comp-mgr/extens-man/extensman-backup.html
 - guides/v2.3/comp-mgr/extens-man/extensman-checklist.html
 - guides/v2.3/comp-mgr/extens-man/extensman-main-pg.html
 - guides/v2.3/comp-mgr/extens-man/extensman-new-purchase.html
 - guides/v2.3/comp-mgr/extens-man/extensman-readiness-fail.html
 - guides/v2.3/comp-mgr/extens-man/extensman-readiness-multi.html
 - guides/v2.3/comp-mgr/extens-man/extensman-readiness-success.html
 - guides/v2.3/comp-mgr/extens-man/extensman-readiness.html
 - guides/v2.3/comp-mgr/extens-man/extensman-uninst-data.html
 - guides/v2.3/comp-mgr/extens-man/extensman-uninst-final.html
 - guides/v2.3/comp-mgr/extens-man/extensman-update.html
 - guides/v2.3/comp-mgr/extens-man/step3-parent.html
---

Code that extends or customizes Magento behavior is called an extension. You can optionally package and distribute extensions on the [Magento Marketplace](https://marketplace.magento.com) or another Magento extension distribution system.

Extensions include:

-  Modules (extend Magento capabilities)
-  Themes (change the look and feel of your [storefront](https://glossary.magento.com/storefront) and Admin)
-  Language packages (localize the storefront and Admin)

{:.bs-callout-tip}
This topic explains how to use the command line to install extensions you purchase from the Magento Marketplace. You can use the same procedure to install _any_ extension; all you need is the extension's [Composer](https://glossary.magento.com/composer) name and version. To find it, open the extension's `composer.json` file and note the values for `"name"` and `"version"`.

Prior to installation, you may want to:

1. Back up your database.
1. Enable maintenance mode:

   ```bash
   bin/magento maintenance:enable
   ```

To install an extension, you must:

1. Get an extension from the Magento Marketplace or another extension developer.
1. Get the extension's Composer name and version.
1. Update the `composer.json` file in your Magento project with the name and version of the extension.
1. Verify that the extension installed properly.
1. Enable and configure the extension.

## Get the extension's Composer name and version

If you already know the extension's Composer name and version, skip this step and continue with [Update your `composer.json` file](#update-composer-json).

To get the extension's Composer name and version from the Magento Marketplace:

1. Log in to [Magento Marketplace](https://marketplace.magento.com) with the username and password you used to purchase the extension.

1. In the upper-right corner, click **Your name** > **My Profile**.

   ![Access your Marketplace account]({{ site.baseurl }}/common/images/marketplace-my-profile.png){:width="200px"}

1. Click **My Purchases**.

   ![Marketplace purchase history]({{ site.baseurl }}/common/images/marketplace-my-purchases.png){:width="650px"}

1. Find the extension you want to install and click **Technical Details**.

   ![Technical details shows the extension's Composer name]({{ site.baseurl }}/common/images/marketplace-extension-technical-details.png){:width="200px"}

{:.bs-callout-tip}
Alternatively, you can find the Composer name and version of _any_ extension (whether you purchased it on Magento Marketplace or somewhere else) in the extension's `composer.json` file.

## Update your `composer.json` file {#update-composer-json}

Add the extension's name and version to your `composer.json` file:

1. Navigate to your Magento project directory and update your `composer.json` file.

   ```bash
   composer require <component-name>:<version>
   ```

   For example,

   ```bash
   composer require j2t/module-payplug:2.0.2
   ```

1. Enter your [authentication keys]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/connect-auth.html). Your public key is your username; your private key is your password.

1. Wait for Composer to finish updating your project dependencies and make sure there aren't any errors:

   ```terminal
   Updating dependencies (including require-dev)
   Package operations: 1 install, 0 updates, 0 removals
     - Installing j2t/module-payplug (2.0.2): Downloading (100%)
   Writing lock file
   Generating autoload files
   ```
   {:.no-copy}

## Verify the extension

To verify that the extension installed properly, run the following command:

```bash
bin/magento module:status J2t_Payplug
```

By default, the extension is probably disabled:

```terminal
Module is disabled
```

The extension name is in the format `<VendorName>_<ComponentName>`; this is a different format from the Composer name. Use this format to enable the extension. If you are unsure of the extension name, run:

```bash
bin/magento module:status
```

and look for the extension under "List of disabled modules".

## Enable the extension

Some extensions won't work properly unless you clear Magento-generated static view files first. Use the `--clear-static-content` option to clear static view files when you're enabling an extension.

1. Enable the extension and clear static view files:

   ```bash
   bin/magento module:enable J2t_Payplug --clear-static-content
   ```

   You should see the following output:

   ```terminal
   The following modules have been enabled:
   - J2t_Payplug

   To make sure that the enabled modules are properly registered, run 'setup:upgrade'.
   Cache cleared successfully.
   Generated classes cleared successfully. Please run the 'setup:di:compile' command to generate classes.
   Generated static view files cleared successfully.
   ```

1. Register the extension:

   ```bash
   bin/magento setup:upgrade
   ```

1. Recompile your Magento project: In Production mode, you may receive a message to "Please rerun Magento compile command". Magento does not prompt you to run the compile command in Developer mode.

   ```bash
   bin/magento setup:di:compile
   ```

1. Verify that the extension is enabled:

   ```bash
   bin/magento module:status J2t_Payplug
   ```

   You should see output verifying that the extension is no longer disabled:

   ```terminal
   Module is enabled
   ```

1. Clean the cache:

   ```bash
   bin/magento cache:clean
   ```

1. Configure the extension in Admin as needed.

{:.bs-callout-tip}
If you encounter errors when loading the storefront in a browser, use the following command to clear the cache:
<br/>
`bin/magento cache:flush`

## Upgrade an extension

{% include upgrade/module.md %}
