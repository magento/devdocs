---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Uninstall or reinstall Magento
menu_title: Uninstall or reinstall Magento
menu_node: 
menu_order: 5
version: 2.1
github_link21: install-gde/install/cli/install-cli-uninstall.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-install-magento-prereq">Prerequisites</a>
*	<a href="#instgde-install-magento-update">Update the Magento software</a>
*	<a href="#instgde-install-magento-reinstall">Reinstall the Magento software</a>
*	<a href="#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="#instgde-install-keep">Optionally keeping generated files</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-install-magento-prereq">Prerequisites</h2>
Before you use this command, you must <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-install.html">install the Magento software</a>.

<h2 id="instgde-install-magento-update">Update the Magento software</h2>
To update the Magento software:

*	If you installed the software from an archive or if you used 'composer-create-project', use the Component Manager or System Upgrade utilities.
*	If you are a contributing developer (that is, you used `git clone`), see <a href="{{ site.gdeurl21 }}install-gde/install/cli/dev_options.html">Contributing developers&mdash;update, reinstall Magento</a>.

<h2 id="instgde-install-magento-reinstall">Reinstall the Magento software</h2>
This section discusses how to uninstall and then reinstall the Magento software with the latest version.

The way you reinstall the Magento application from the command line depends on your role:

*	If you installed the software from an archive or if you used 'composer-create-project', see <a href="#instgde-install-reinst-update-sys">Reinstall as a system integrator</a>.
*	If you're a contributing developer (that is, you started using `composer clone`), see <a href="{{ site.gdeurl21 }}install-gde/install/cli/dev_options.html">Contributing developers&mdash;update, reinstall Magento</a>.


<h3 id="instgde-install-magento-reinst-dev">Reinstall as a system integrator</h3>
To reinstall the Magento software as a system integrator:

1.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl21 }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>.
2.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		git pull origin develop
		php bin/magento setup:uninstall

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<ul><li>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl21 }}install-gde/trouble/git/tshoot_git-pull-origin..html">troubleshooting</a>. </li>
  				<li>To use your existing Magento software version , omit the <code>git pull origin develop</code> command.</li></ul></span>
	</div>

3.	Install the Magento software:

	*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl21 }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

<h2 id="instgde-install-uninstall">Uninstall the Magento software</h2>
Uninstalling the Magento software drops and restores the database, removes the deployment configuration, and clears directories under `var`.

To uninstall the Magento software, enter the following command:

	magento setup:uninstall

The following message displays to confirm a successful uninstallation:

	[SUCCESS]: Magento uninstallation complete.

<h2 id="instgde-install-keep">Optionally keeping generated files</h2>
By default, `magento setup:upgrade` clears compiled code and the cache. Typically, you use `magento setup:upgrade` to update components and each component can require different compiled classes.

However, in some situations (particularly, deploying Magento to production), you might wish to avoid clearing compiled code because it can take some time. (The cache is still cleared.) To update the Magento database schema and data *without* clearing compiled code, enter:

	magento setup:upgrade --keep-generated

<div class="bs-callout bs-callout-warning">
    <p>The optional <code>--keep-generated</code> option should be used <em>only</em> in limited circumstances by experienced system integrators. <code>--keep-generated</code> should <em>never</em> be used in a development environment.</p>
    <p>Improper use of this optional parameter can cause errors during code execution.</p>
</div>


6.	Install the Magento software:

	*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl21 }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
