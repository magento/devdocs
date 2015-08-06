---
layout: default 
group: compman
subgroup: D_UseUpgrade
title: Run System Upgrade
menu_title: Run System Upgrade
menu_node: parent
menu_order: 1
github_link: comp-mgr/upgrader/upgrade-start.md
---


<h2 id="compman-overview">Overview of System Upgrade</h2>
This section discusses how to start System Upgrade, which upgrades the version of Magento core components as well as any other installed components.

<h2 id="compman-prereq">Prerequisites</h2>
Before continuing, complete all tasks discussed in <a href="{{ site.gdeurl }}comp-mgr/prereq/prereq_compman-updater.html">Prerequisites</a>.

<h2 id="compman-access">Start System Upgrade from the Magento Admin</h2>
To run the Component Manager:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > **Web Setup Wizard**.
	The following page displays.
	<img src="{{ site.baseurl }}common/images/cman_upgr_initial.png" width="650px" alt="Specify whether to manage components or upgrade Magento">
3.	Click **System Upgrade**.

	Magento begins searching for core module updates immediately. To also search for component updates, click **Yes**. A sample follows:

	<img src="{{ site.baseurl }}common/images/upgr_initial-pg.png" alt="Magento begins searching for upgrades right away">.

	To update components only, see <a href="{{ site.gdeurl }}comp-mgr/compman-start.html">Run the Component Manager</a>.

4. 	Continue with <a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-main-pg.html">Upgrade your components</a>.