---
group: software-update-guide
subgroup: 05_UseCompMan
title: Start the Module Manager
menu_title: Start the Module Manager
menu_node:
menu_order: 2
functional_areas:
  - Upgrade
---

## Start the Module Manager from the Magento Admin {#compman-access}

To run the [Module](https://glossary.magento.com/module) Manager:

1. Log in to the [Magento Admin](https://glossary.magento.com/magento-admin) as an administrator.
1. Click **System** > **Web Setup Wizard**.
1. Click **Module Manager**.

   ![]({{ site.baseurl }}/common/images/modman_select.png){:width="550px"}

To upgrade Magento system software instead, see [Run System Upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html).

See one of the following sections:

*  [About the Module Manager](#modman-about)
*  [Enable or disable a module](#modman-about-endis)

## About the Module Manager {#modman-about}

The Module Manager displays a list of currently installed modules. You can either disable a module that's currently enabled or you can enable a module that's currently disabled.

### Enabled and disabled modules {#modman-about-icons}
![A green icon means that the module is enabled]({{ site.baseurl }}/common/images/cman_comp-status-green.png) Green, which means the module is enabled.

![A red icon means the module is disabled]({{ site.baseurl }}/common/images/cman_comp-status-red.png) Red, which means the module is disabled.

### Use pagination controls {#modman-about-page}

To control the number of modules that display at a time, you can:

![Specify number of items to display on page]({{ site.baseurl }}/common/images/cman_page_number.png){:width="100px"} Specify the number of items to display on a page.

![Move back and forward or specify a page number]({{ site.baseurl }}/common/images/cman_page_move.png){:width="100px"} From left to right, move back one page, go to a specific page, or move forward one page.

### Display module dependencies {#modman-about-depend}

Any module that depends on other modules displays as follows:

![Module that depends on other modules]({{ site.baseurl }}/common/images/modman_depend.png)

When you expand it, you see the modules it depends on; an example follows:

![]({{ site.baseurl }}/common/images/modman_dependencies.png)

To disable such a module, you must first disable all dependent modules one at a time.

## Enable or disable a module {#modman-about-endis}

This example shows how to disable a currently enabled module. You can use the same basic procedure to enable a disabled module.

To disable a module:

1. Click **Disable** from the **Action** column, as the following figure shows.

   ![Disable a module]({{ site.baseurl }}/common/images/modman_disable.png)

1. Continue with [Step 1. Readiness check]({{ page.baseurl }}/comp-mgr/module-man/compman-readiness.html).
