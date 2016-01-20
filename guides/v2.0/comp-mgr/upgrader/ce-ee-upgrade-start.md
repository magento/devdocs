---
layout: default 
group: compman
subgroup: X_CE-EEUpgrade
title: CE to EE upgrade
menu_title: CE to EE upgrade
menu_node: parent
menu_order: 1
github_link: comp-mgr/upgrader/ce-ee-upgrade-start.md
---

<h2 id="compman-overview">Overview of Magento Community Edition (CE) to Magento Enterprise Edition (EE) upgrade</h2>
This section discusses how to upgrade Magento CE to Magento EE.

<div class="bs-callout bs-callout-info" id="info">
	<p>You must be authorized for Magento EE to perform the tasks discussed in this topic.</p>
</div>

<h2 id="compman-prereq">Prerequisites</h2>
Before continuing, complete all tasks discussed in <a href="{{ site.gdeurl }}comp-mgr/prereq/prereq_compman.html">Prerequisites</a>.

<div class="bs-callout bs-callout-info" id="info">
	<p>Make sure you are authorized for Magento EE access before you continue. Contact <a href="http://support.magentocommerce.com" target="_blank">Magento Support</a> if you have questions.</p>
</div>

<h2 id="compman-access">Start System Upgrade from the Magento Admin</h2>
To run System Upgrade:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > **Web Setup Wizard**.
	The following page displays.<br><br>
	<img src="{{ site.baseurl }}common/images/cman_upgr_initial.png" width="650px" alt="Specify whether to manage components or upgrade Magento">
3.	Click **System Upgrade**.

	Magento begins searching for core module updates immediately. To also search for component updates, click **Yes**. A sample follows:

	<img src="{{ site.baseurl }}common/images/upgr_initial-pg.png" width="650px" alt="Magento begins searching for upgrades right away">

	The page displays similar to the following when we find components to upgrade.<br><br>
	<img src="{{ site.baseurl }}common/images/upgr_stuff-2-upgrade.png" width="650px" alt="Magento finds components to upgrade"><br><br>
4. 	Continue with <a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-main-pg.html">Step 1. Select versions to upgrade</a>.
