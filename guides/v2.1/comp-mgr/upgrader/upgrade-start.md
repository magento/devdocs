---
layout: default 
group: compman
subgroup: 15_UseUpgrade
title: Run System Upgrade
menu_title: Run System Upgrade
menu_node: parent
menu_order: 1
github_link21: comp-mgr/upgrader/upgrade-start.md
---

#### Contents
*	[Overview of System Upgrade](#compman-overview)
*	[Prerequisites](#compman-prereq)
*	[Important information about upgrading](#compman-upgrade-caveat)
*	[Start System Upgrade from the Magento Admin](#compman-access)

<h2 id="compman-overview">Overview of System Upgrade</h2>
This section discusses how to start System Upgrade, which upgrades the version of Magento core components as well as any other installed components.

You can upgrade in any of the following ways:

*	Using the System Upgrade utility, a wizard that walks you through the upgrade step by step; continue with this topic.

	Use this method if you don't have access to the Magento server's file system or if you're a non-technical user.
*	Using the [command line]({{ site.gdeurl21 }}comp-mgr/cli/cli-upgrade.html).

	This upgrade method is more advanced and it requires access to the Magento server's file system.	

<div class="bs-callout bs-callout-info" id="info">
	<p><em>System upgrade</em> refers to updating the Magento 2.x core components and other installed components. To migrate from Magento 1.x to Magento 2, see the <a href="{{ site.gdeurl21 }}migration/bk-migration-guide.html">Migration Guide</a>.</p>
</div>

<div class="bs-callout bs-callout-warning">
    <ul><li>Authorization keys from a <a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">shared account</a> <em>cannot</em> be used for upgrade. You must get your authorization keys from <code>magento.com</code> account owner.</li>
    	<li>If you installed the Magento application by <a href="{{ site.gdeurl21 }}install-gde/prereq/dev_install.html">cloning the GitHub repository</a>, you <em>cannot</em> use the System Upgrade utility to upgrade the software. Instead, you must <a href="{{ site.gdeurl21 }}install-gde/install/cli/dev_options.html">update it manually</a>.</li></ul>
</div>

<h2 id="compman-prereq">Prerequisites</h2>
Before continuing, complete all tasks discussed in <a href="{{ site.gdeurl21 }}comp-mgr/prereq/prereq_compman.html">Prerequisites</a>.

## Important information about upgrading {#compman-upgrade-caveat}
If you're upgrading to Magento CE or EE 2.1.0 from an earlier version, you must perform the tasks discussed in this section. 

Before you start your upgrade, you must disable all cache types. After the upgrade is finished, you must remove everything from the Magento `var/generation` and `var/di` directories using the command line or an FTP application. After the upgrade is finished, you can enable cache types again.

<div class="bs-callout bs-callout-warning">
    <p>Failure to perform the tasks discussed in this section results in errors during your upgrade and prevents it from succeeding.</p>
</div>

To start:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > Tools > **Cache Management**.
3.	At the top of the page, from the **Mass actions** list, click **Select all**.
4.	From the list above, click **Disable**.
5.	Click **Submit**.

	The following figure shows an example.

	![Disable all cache types before you start upgrade]({{ site.baseurl }}common/images/upgr_disable-cache.png){:width="350px"}

	The following figure shows all cache types disabled.

	![All cache types are disabled]({{ site.baseurl }}common/images/upgr_all-cache-disabled.png){:width="700px"}

4.	Continue with the next section.
    
<h2 id="compman-access">Start System Upgrade from the Magento Admin</h2>
To run System Upgrade:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > Tools > **Web Setup Wizard**.
	The following page displays.<br><br>
	<img src="{{ site.baseurl }}common/images/cman_upgr_initial.png" width="650px" alt="Specify whether to manage components or upgrade Magento">
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
