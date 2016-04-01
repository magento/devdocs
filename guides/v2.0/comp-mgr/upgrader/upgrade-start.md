---
layout: default 
group: compman
subgroup: 15_UseUpgrade
title: Run System Upgrade
menu_title: Run System Upgrade
menu_node: parent
menu_order: 1
github_link: comp-mgr/upgrader/upgrade-start.md
---

<h2 id="compman-overview">Overview of System Upgrade</h2>
This section discusses how to start System Upgrade, which upgrades the version of Magento core components as well as any other installed components.

<div class="bs-callout bs-callout-info" id="info">
	<p><em>System upgrade</em> refers to updating the Magento 2.x core components and other installed components. To migrate from Magento 1.x to Magento 2, see the <a href="{{ site.gdeurl }}migration/bk-migration-guide.html">Migration Guide</a>.</p>
</div>

<div class="bs-callout bs-callout-warning">
    <ul><li>Authorization keys from a <a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">shared account</a> <em>cannot</em> be used for upgrade. You must get your authorization keys from <code>magento.com</code> account owner.</li>
    	<li>If you installed the Magento application by <a href="{{ site.gdeurl }}install-gde/prereq/dev_install.html">cloning the GitHub repository</a>, you <em>cannot</em> use the System Upgrade utility to upgrade the software. Instead, you must <a href="{{ site.gdeurl }}install-gde/install/cli/dev_options.html">update it manually</a>.</li></ul>
</div>

<h2 id="compman-prereq">Prerequisites</h2>
Before continuing, complete all tasks discussed in <a href="{{ site.gdeurl }}comp-mgr/prereq/prereq_compman.html">Prerequisites</a>.


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
	<img src="{{ site.baseurl }}common/images/upgr_stuff-2-upgrade.png" width="650px" alt="Magento finds software to upgrade"><br><br>
4. 	Continue with <a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-main-pg.html">Step 1. Select versions to upgrade</a>.

#### Error
The following error can indicate one of several issues, including that you haven't entered your <a href="{{ site.gdeurl }}comp-mgr/prereq/prereq_auth-token.html">authentication keys</a> in the Magento Admin:

<img src="{{ site.baseurl }}common/images/upgr-sorry.png" width="600px">

For suggested solutions to other causes indicated by this message, see <a href="{{ site.gdeurl }}comp-mgr/trouble/cman/were-sorry.html">troubleshooting</a>.
