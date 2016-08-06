---
layout: default 
group: compman
subgroup: 05_UseCompMan
title: Start the Module Manager
menu_title: Start the Module Manager
menu_node: 
menu_order: 2
version: 2.2
github_link: comp-mgr/module-man/compman-start.md
---

<h2 id="compman-access">Start the Module Manager from the Magento Admin</h2>
To run the Module Manager:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > **Web Setup Wizard**.
3.	Click **Module Manager** and continue with <a href="{{page.baseurl}}comp-mgr/module-man/compman-main-pg.html">Manage your modules</a>.

	![]({{ site.baseurl }}common/images/modman_select.png)

To upgrade Magento system software instead, see <a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-start.html">Run System Upgrade</a>.

See one of the following sections:

*	[About the Module Manager](#modman-about)
*	[Enable or disable a module](#modman-about-endis)

## About the Module Manager {#modman-about}
The Module Manager displays a list of currently installed modules. You can either disable a module that's currently enabled or you can enable a module that's currently disabled.

### Enabled and disabled modules {#modman-about-icons}
![A green icon means that the module is enabled]({{ site.baseurl }}common/images/cman_comp-status-green.png) Green, which means the module is enabled.

![A red icon means the module is disabled]({{ site.baseurl }}common/images/cman_comp-status-red.png) Red, which means the module is disabled.

### Use pagination controls {#modman-about-page}
To control the number of modules that display at a time, you can:

![Specify number of items to display on page]({{ site.baseurl }}common/images/cman_page_number.png){:width="100px"} Specify the number of items to display on a page.

![Move back and forward or specify a page number]({{ site.baseurl }}common/images/cman_page_move.png){:width="100px"} From left to right, move back one page, go to a specific page, or move forward one page.

### Display module dependencies {#modman-about-depend}
Any module that depends on other modules displays as follows:

![Module that depends on other modules]({{ site.baseurl }}common/images/modman_depend.png)

When you expand it, you see the modules it depends on; an example follows:

![]({{ site.baseurl }}common/images/modman_dependencies.png)

To disable such a module, you must first disable all dependent modules one at a time.

## Enable or disable a module {#modman-about-endis}
This example shows how to disable a currently enabled module. You can use the same basic procedure to enable a disabled module.

To disable a module:

1.	Click **Disable** from the **Action** column, as the following figure shows.

	![Disable a module]({{ site.baseurl }}common/images/modman_disable.png)
2.	Continue with [Step 1. Readiness check]({{ page.baseurl }}comp-mgr/module-man/compman-readiness.html).


