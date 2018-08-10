---
group: compman
subgroup: 32_UseUpgrade
title: Start System Upgrade
menu_title: Start System Upgrade
menu_node:
menu_order: 3
version: 2.0
functional_areas:
  - Upgrade
---

## Prerequisites   {#compman-prereq}

Before continuing, complete all tasks discussed in <a href="{{ page.baseurl }}/comp-mgr/prereq/prereq_compman.html">Prerequisites</a>.

<div class="bs-callout bs-callout-warning">
   	<p>If you're upgrading to version 2.1, see <a href="{{ site.baseurl }}/guides/v2.1/release-notes/tech_bull_21-upgrade.html">Upgrade to Magento version 2.1 (June 22, 2016)</a>.</p>   
</div>

## Optional custom maintenance page

During the time you're upgrading, your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} is partially available. Users can see a list of files and so on but cannot shop or check out.

To avoid the appearance of a disabled site and to set up a custom maintenance page that displays during the upgrade, see [Maintenance mode options for upgrade]({{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html).

## Start System Upgrade from the Magento Admin   {#compman-access}

To run System Upgrade:

1.	Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2.	Click **System** > Tools > **Web Setup Wizard**.
	The following page displays.<br><br>
	<img src="{{ site.baseurl }}/common/images/cman_upgr_initial.png" width="650px" alt="Specify whether to manage components or upgrade Magento">
3.	Click **System Configuration**.
4.	If you haven't already done so, enter your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) in the provided fields.

	The following figure shows an example if you *have* already entered your keys.

	![Authentication keys entered in the Setup Wizard]({{ site.baseurl }}/common/images/compman_auth-keys.png)

	<div class="bs-callout bs-callout-warning">
    	<p>For upgrade or update, you must use the same authentication keys you used to install the Magento software. For example, you <em>cannot</em> use {{site.data.var.ce}} authentication keys to update or upgrade Magento EE or vice versa. You also <em>cannot</em> use:</p>
    	<ul><li>Another user's authentication keys</li>
    	<li><a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">Shared account</a> authentication keys</li></ul>   
	</div>
5.	Click **Save Config**.
3.	Click **System Upgrade**.

	Magento begins searching for core module updates immediately. To also search for component updates, click **Yes**. A sample follows:

	<img src="{{ site.baseurl }}/common/images/upgr_initial-pg.png" width="650px" alt="Magento begins searching for upgrades right away">

	The page displays similar to the following when we find components to upgrade.<br><br>
	<img src="{{ site.baseurl }}/common/images/upgr_stuff-2-upgrade.png" width="650px" alt="Magento finds software to upgrade"><br><br>
4. 	Continue with <a href="{{ page.baseurl }}/comp-mgr/upgrader/upgrade-main-pg.html">Step 1. Select versions to upgrade</a>.

#### Error

The following error can indicate one of several issues, including that you haven't entered your <a href="{{ page.baseurl }}/comp-mgr/prereq/prereq_auth-token.html">authentication keys</a> in the Magento Admin:

<img src="{{ site.baseurl }}/common/images/upgr-sorry.png" width="600px">

For suggested solutions to other causes indicated by this message, see <a href="{{ page.baseurl }}/comp-mgr/trouble/cman/were-sorry.html">troubleshooting</a>.

#### Sample data

The System Upgrade utility installs sample data for you but doesn't display it, if you:

*	Used the [`magento sampledata:deploy`]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-composer.html) command to download, but not installed sample data
*	You chose to update components at the same time as the Magento system software
