---
layout: default 
group: compman
subgroup: 15_UseUpgrade
title: Run System Upgrade
menu_title: Run System Upgrade
menu_node: parent
menu_order: 1
version: 2.1
github_link21: comp-mgr/upgrader/upgrade-checklist.md
---

<h2 id="compman-overview">Overview of System Upgrade</h2>
This section discusses how to start System Upgrade, which upgrades the version of Magento core components as well as any other installed components.

You can upgrade in any of the following ways:

*	Using the System Upgrade utility, a wizard that walks you through the upgrade step by step; continue with this topic.

	Use this method if you don't have a to the Magento server's file system or if you're a non-technical user.
*	Using the [command line]({{ site.gdeurl21 }}comp-mgr/cli/cli-upgrade.html).

	This upgrade method is more advanced and it requires access to the Magento server's file system.	

<div class="bs-callout bs-callout-info" id="info">
	<p><em>System upgrade</em> refers to updating the Magento 2.x core components and other installed components. To migrate from Magento 1.x to Magento 2, see the <a href="{{ site.gdeurl21 }}migration/bk-migration-guide.html">Migration Guide</a>.</p>
</div>

<div class="bs-callout bs-callout-warning">
    <ul><li>Authorization keys from a <a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">shared account</a> <em>cannot</em> be used for upgrade. You must get your authorization keys from <code>magento.com</code> account owner.</li>
    	<li>If you installed the Magento application by <a href="{{ site.gdeurl21 }}install-gde/prereq/dev_install.html">cloning the GitHub repository</a>, you <em>cannot</em> use the System Upgrade utility to upgrade the software. Instead, you must <a href="{{ site.gdeurl21 }}install-gde/install/cli/dev_options.html">update it manually</a>.</li></ul>
</div>

## System Upgrade checklist
{% include install/update/checklist.md %}

#### Next step
[Start System Upgrade]({{ site.gdeurl21 }}comp-mgr/upgrader/upgrade-start.html)
