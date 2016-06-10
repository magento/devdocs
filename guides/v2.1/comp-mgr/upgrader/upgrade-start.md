---
layout: default 
group: compman
subgroup: 15_UseUpgrade
title: Start System Upgrade
menu_title: Start System Upgrade
menu_node: 
menu_order: 2
version: 2.1
github_link21: comp-mgr/upgrader/upgrade-start.md
---

<h2 id="compman-prereq">Prerequisites</h2>
Before continuing, complete all tasks discussed in <a href="{{ site.gdeurl21 }}comp-mgr/prereq/prereq_compman.html">Prerequisites</a>.

## Optional custom maintenance page
During the time you're upgrading, your storefront is partially available. Users can see a list of files and so on but cannot shop or check out.

To avoid the appearance of a disabled site and to set up a custom maintenance page that displays during the upgrade, see [Maintenance mode options for upgrade]({{ site.gdeurl21 }}comp-mgr/trouble/cman/maint-mode.html).

<h2 id="compman-access">Start System Upgrade from the Magento Admin</h2>
To run System Upgrade:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > Tools > **Web Setup Wizard**.
	The following page displays.<br><br>
	<img src="{{ site.baseurl }}common/images/cman_upgr_initial.png" width="650px" alt="Specify whether to manage components or upgrade Magento">
3.	Click **System Configuration**.
4.	If you haven't already done so, enter your [authentication keys]({{ site.gdeurl21 }}install-gde/prereq/connect-auth.html) in the provided fields.

	The following figure shows an example if you *have* already entered your keys.

	![Authentication keys entered in the Setup Wizard]({{ site.baseurl }}common/images/compman_auth-keys.png)

	<div class="bs-callout bs-callout-warning">
    	<p>For upgrade or update, you must use the same authentication keys you used to install the Magento software. For example, you <em>cannot</em> use Magento CE authentication keys to update or upgrade Magento EE or vice versa. You also <em>cannot</em> use:</p>
    	<ul><li>Another user's authentication keys</li>
    	<li><a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">Shared account</a> authentication keys</li></ul>   
	</div>
5.	Click **Save Config**.
3.	Click **System Upgrade**.

	Magento begins searching for core module updates immediately. To also search for component updates, click **Yes**. A sample follows:

	<img src="{{ site.baseurl }}common/images/upgr_initial-pg.png" width="650px" alt="Magento begins searching for upgrades right away">

	The page displays similar to the following when we find components to upgrade.<br><br>
	<img src="{{ site.baseurl }}common/images/upgr_stuff-2-upgrade.png" width="650px" alt="Magento finds software to upgrade"><br><br>
4. 	Continue with <a href="{{ site.gdeurl21 }}comp-mgr/upgrader/upgrade-main-pg.html">Step 1. Select versions to upgrade</a>.

#### Error
The following error can indicate one of several issues, including that you haven't entered your <a href="{{ site.gdeurl21 }}comp-mgr/prereq/prereq_auth-token.html">authentication keys</a> in the Magento Admin:

<img src="{{ site.baseurl }}common/images/upgr-sorry.png" width="600px">

For suggested solutions to other causes indicated by this message, see <a href="{{ site.gdeurl21 }}comp-mgr/trouble/cman/were-sorry.html">troubleshooting</a>.

#### Sample data
The System Upgrade utility installs sample data for you but doesn't display it, if you:

*	Used the [`magento sampledata:deploy`]({{ site.baseurl }}install-gde/install/cli/install-cli-sample-data-composer.html) command to download, but not installed sample data
*	You chose to update components at the same time as the Magento system software

