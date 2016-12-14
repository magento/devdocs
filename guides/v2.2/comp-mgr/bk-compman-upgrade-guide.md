---
layout: default 
group: compman
subgroup: 01_Introduction
title: Upgrade the Magento application and modules
landing-page: System Upgrade Guide
menu_title: Upgrade the Magento application and modules
menu_node: parent
menu_order: 1
version: 2.2
github_link: comp-mgr/bk-compman-upgrade-guide.md
---

## Upgrade the Magento application and modules
This topic discusses the ways you can:

*	Upgrade (that is, *patch*) the Magento software from version 2.0.0 to 2.0.1, for example
*	Update any of the following:

	*	Modules (also referred to as *extensions*; extend Magento capabilities)
	*	Themes (change the look and feel of your storefront and Admin)
	*	Language packages (localize the storefront and Admin)
*	Uninstall extensions

## Upgrade the Magento application
The way you upgrade (that is, patch) the Magento application depends on how you installed it:

*	Magento CE and EE: If you used [Composer]({{page.baseurl}}install-gde/prereq/integrator_install.html) to install the Magento application or if you downloaded an [archive]({{page.baseurl}}install-gde/prereq/zip_install.html), use the [System Upgrade utility]({{page.baseurl}}comp-mgr/upgrader/upgrade-start.html) or the [command line]({{page.baseurl}}comp-mgr/cli/cli-upgrade.html).
*	Magento CE only: If you cloned the Magento 2 GitHub repository because you are contributing code to the Magento CE codebase, <a href="{{page.baseurl}}install-gde/install/cli/dev_options.html">upgrade the software manually</a>.
*	If your Magento root directory is `<your Magento install directory/pub`, you can upgrade in any of the following ways:

	*	For the upgrade, create another subdomain or docroot that uses the Magento installation directory as its root. 

		Run the System Upgrade utility as discussed in this topic using that subdomain or docroot.
	*	Upgrade the Magento software using the [command line]({{page.baseurl}}comp-mgr/cli/cli-upgrade.html).
*	To upgrade from Magento CE to Magento EE, see <a href="{{page.baseurl}}comp-mgr/upgrader/ce-ee-upgrade-start.html">Upgrade from CE to EE</a>.

<div class="bs-callout bs-callout-info" id="info">
	<p><em>System upgrade</em> refers to updating the Magento 2.x core modules and other installed modules. To migrate from Magento 1.x to Magento 2, see the <a href="{{page.baseurl}}migration/bk-migration-guide.html">Migration Guide</a>.</p>
</div>

<div class="bs-callout bs-callout-warning">
    <p>For upgrade or update, you must use the same authentication keys you used to install the Magento software. For example, you <em>cannot</em> use Magento CE authentication keys to update or upgrade Magento EE or vice versa. You also <em>cannot</em> use:</p>
    <ul><li>Another user's authentication keys</li>
    	<li><a href="http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html" target="_blank">Shared account</a> authentication keys</li></ul>   
</div>

#### Next step
Complete the tasks discussed in <a href="{{page.baseurl}}comp-mgr/prereq/prereq_compman.html">Prerequisites</a>.


<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
