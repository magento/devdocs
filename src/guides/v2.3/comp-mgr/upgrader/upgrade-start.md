---
group: software-update-guide
subgroup: 32_UseUpgrade
title: Start System Upgrade
menu_title: Start System Upgrade
menu_node:
menu_order: 3
functional_areas:
  - Upgrade
---

## Prerequisites {#compman-prereq}

Before continuing, complete all tasks discussed in [Prerequisites]({{ page.baseurl }}/comp-mgr/prereq/prereq_compman.html).

## Optional custom maintenance page

During the time you're upgrading, your [storefront](https://glossary.magento.com/storefront) is partially available. Users can see a list of files and so on but cannot shop or check out.

To avoid the appearance of a disabled site and to set up a custom maintenance page that displays during the upgrade, see [Maintenance mode options for upgrade]({{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html).

## Start System Upgrade from the Magento Admin {#compman-access}

To run System Upgrade:

1. Log in to the [Magento Admin](https://glossary.magento.com/magento-admin) as an administrator.
1. Click **System** > **Tools** > **Web Setup Wizard**.

   The following page displays.

   ![Specify whether to manage components or upgrade Magento]({{ site.baseurl }}/common/images/cman_upgr_initial.png)

1. Click **System Configuration**.
1. If you haven't already done so, enter your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) in the provided fields.

   The following figure shows an example if you *have* already entered your keys.

   ![Authentication keys entered in the Setup Wizard]({{ site.baseurl }}/common/images/compman_auth-keys.png)

   {:.bs-callout-warning}
   For upgrade or update, you must use the same authentication keys you used to install the Magento software. For example, you *cannot* use {{site.data.var.ce}} authentication keys to update or upgrade Magento EE or vice versa. You also *cannot* use another user's authentication keys or [Shared account](http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html) authentication keys

1. Click **Save Config**.
1. Click **System Upgrade**.

   Magento begins searching for core module updates immediately. To also search for component updates, click **Yes**. A sample follows:

   ![Magento begins searching for upgrades right away]({{ site.baseurl }}/common/images/upgr_initial-pg.png)

   The page displays similar to the following when we find components to upgrade.<br><br>

   ![Magento finds software to upgrade]({{ site.baseurl }}/common/images/upgr_stuff-2-upgrade.png)<br><br>

1. Continue with [Step 1. Select versions to upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-main-pg.html).

### Error

The following error can indicate one of several issues, including that you haven't entered your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) in the Magento Admin:

![]({{ site.baseurl }}/common/images/upgr-sorry.png)

For suggested solutions to other causes indicated by this message, see [troubleshooting]({{ page.baseurl }}/comp-mgr/trouble/cman/were-sorry.html).

### Sample data

The System Upgrade utility installs sample data for you but doesn't display it, if you:

*  Used the [`magento sampledata:deploy`]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-composer.html) command to download, but not installed sample data
*  You chose to update components at the same time as the Magento system software
