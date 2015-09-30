---
layout: default
group: install_cli 
subgroup: T_Command-line installation
title: Update, reinstall, uninstall Magento
menu_title: Update, reinstall, uninstall Magento
menu_node: 
menu_order: 5
github_link: install-gde/install/install-cli-uninstall.md
redirect_from:
  -  /guides/v1.0/install-gde/install/install-cli-uninstall.html
  -  /guides/v2.0/install-gde/install/install-cli-uninstall.html
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-install-magento-prereq">Prerequisites</a>
*	<a href="#instgde-install-magento-update">Update the Magento software</a>
*	<a href="#instgde-install-magento-reinstall">Reinstall the Magento software</a>
*	<a href="#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="#instgde-install-keep">Optionally keeping generated files</a>
*	<a href="#instgde-install-magento-updatebeta11">Update to version 0.42.0-beta11 or later from beta10 or earlier</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-install-magento-prereq">Prerequisites</h2>
Before you use this command, you must <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">install the Magento software</a>.

<h2 id="instgde-install-magento-update">Update the Magento software</h2>
This section discusses how to update your Magento software without reinstalling it. To uninstall and reinstall, see the next section.

You might do this in an development environment especially to get all the latest code changes.

The way you update the Magento application from the command line depends on your role:

*	If you're a contributing developer (that is, you started using `composer clone`), see <a href="#instgde-install-magento-update-dev">Update as a contributing developer</a>.
*	If you're a system integrator (that is, you started using `composer create-project`), see <a href="#instgde-install-magento-update-sys">Update as a system integrator</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
   <p>To upgrade system software using the web-based Upgrade Manager, see <a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html">Run System Upgrade</a>.</p> </span>
</div>

<h3 id="instgde-install-magento-update-dev">Update as a contributing developer</h3>
To update the Magento software as a contributing developer:

2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>).
3. Save any changes you made to `composer.json` because the following steps will overwrite it:

		cd <your Magento install dir>
		cp composer.json composer.json.old

3.	If you previously installed the optional sample data, enter the following command:

		rm -rf dev/tools/Magento/Tools/SampleData/

3.	Update your local repository to get the latest code:
		
		git pull origin develop

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<p>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/trouble/git/tshoot_git-pull-origin.html">troubleshooting</a>.</p> </span>
	</div>
				
3.	Diff and merge your `composer.json.old` with `composer.json` installed with the Magento software.
4.	Enter the following command:

		composer update

5.	<a href="instgde-install-magento-update-db">Update the Magento database</a>.

<h3 id="instgde-install-magento-update-sys">Update as a system integrator</h3>
To update the Magento software as a system integrator:

1.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>).

3. Save any changes you made to `composer.json` because the following steps will overwrite it:

		cd <your Magento install dir>
		cp composer.json composer.json.old

3.	If you previously installed the optional sample data, enter the following command:

		rm -rf dev/tools/Magento/Tools/SampleData/

4.	Change to your Magento installation directory.
3.	Make a backup copy of `composer.json` in your Magento installation directory:

		cd <your Magento install dir>
		cp composer.json composer.json.bak

4.	Open `composer.json` in a text editor.
5.	Locate the following line:

		 "require": {
        	"magento/product-community-edition": "<version>"
    	},

5.	Replace `<version>` with the version to which you want to upgrade, where `<version>` is the `magento/product-community-edition` version from <a href="http://packages.magento.com/#magento/product-community-edition" target="_blank">packages.magento.com</a>.
5.	Save your changes to `composer.json` and exit the text editor.
6.	Enter the following command:

		composer update

	Wait for dependencies to update.

3.	Diff and merge your `composer.json.old` with `composer.json` installed with the Magento software.
4.	Update the Magento database as discussed in the next section.

<h3 id="instgde-install-magento-update-db">Update the Magento database</h3>
After you update the Magento software, you must update the database schema and database data as follows:

1.	Update the Magento database.

		php bin/magento setup:upgrade [--keep-generated]

	For more information about the optional `--keep-generated` parameter, see <a href="#instgde-install-keep">Optionally keeping generated files</a>.

5.	Clear `var` directory contents:

		rm -rf var/generation/* var/cache/*

4.	_Optional_. To change installation options, repeat the tasks discussed in:

	*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

<h2 id="instgde-install-magento-reinstall">Reinstall the Magento software</h2>
This section discusses how to uninstall and then reinstall the Magento software with the latest version.

The way you reinstall the Magento application from the command line depends on your role:

*	If you're a contributing developer (that is, you started using `composer clone`), see <a href="#instgde-install-magento-reinst-dev">Reinstall as a contributing developer</a>.
*	If you're a system integrator (that is, you started using `composer create-project`), see <a href="#instgde-install-reinst-update-sys">Reinstall as a system integrator</a>.

<h3 id="instgde-install-magento-reinst-dev">Reinstall as a contributing developer</h3>
To reinstall the Magento software as a contributing developer:

2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>).
3.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		git pull origin develop
		php bin/magento setup:uninstall

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<ul><li>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/trouble/git/tshoot_git-pull-origin.html">troubleshooting</a>. </li>
  				<li>To use your existing Magento software version , omit the <code>git pull origin develop</code> command.</li></ul></span>
	</div>

4.	Install the Magento software:

	*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

<h3 id="instgde-install-reinst-update-sys">Reinstall as a system integrator</h3>
To reinstall the Magento software as a contributing developer:

2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>).
3.	Make a backup copy of `composer.json` in your Magento installation directory:

		cd <your Magento install dir>
		cp composer.json composer.json.bak

4.	Open `composer.json` in a text editor.
5.	Locate the following line:

		 "require": {
        	"magento/product-community-edition": "<version>"
    	},

5.	Replace `<version>` with the version to which you want to upgrade, where `<version>` is the `magento/product-community-edition` version from <a href="http://packages.magento.com/#magento/product-community-edition" target="_blank">packages.magento.com</a>.
5.	Save your changes to `composer.json` and exit the text editor.
6.	Enter the following command:

		composer update

	Wait for dependencies to update.

4.	Install the Magento software:

	*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

<h2 id="instgde-install-uninstall">Uninstall the Magento software</h2>
Uninstalling the Magento software drops and restores the database, removes the deployment configuration, and clears directories under `var`.

To uninstall the Magento software, enter the following command:

	magento setup:uninstall

The following message displays to confirm a successful uninstallation:

	[SUCCESS]: Magento uninstallation complete.

<h2 id="instgde-install-keep">Optionally keeping generated files</h2>
By default, `magento setup:upgrade` clears compiled code and the cache. Typically, you use `magento setup:upgrade` to update components and each component can require different compiled classes.

However, in some situations (particularly, deploying Magento to production), you might wish to avoid clearing the cache and compiled code because it can take some time. To update the Magento database schema and data *without* clearing the cache and compiled code, enter:

	magento setup:upgrade --keep-generated

<div class="bs-callout bs-callout-warning">
    <p>The optional <code>--keep-generated</code> option should be used <em>only</em> in limited circumstances by experienced system integrators. <code>--keep-generated</code> should <em>never</em> be used in a development environment.</p>
    <p>Improper use of this optional paramter can cause errors during code execution..</p>
</div>

<h2 id="instgde-install-magento-updatebeta11">Update to version 0.42.0-beta11 or later from beta10 or earlier</h2>
This section applies to you in the following situation only:

*	You currently have version 0.42.0-beta10 or earlier
*	You're updating to version 0.42.0-beta11 or later

<div class="bs-callout bs-callout-info" id="info">
    <p>As a result of this change, you must first <em>uninstall</em> the Magento software and then reinstall it.</p>
</div>

To determine the versions:

*	Your version: View `<your Magento install dir>/CHANGELOG.md` in a text editor.
*	Current version: Look at the Magento 2 <a href="{{ site.mage2000url }}CHANGELOG.md" target="_blank">changelog</a> on GitHub.

<h3 id="instgde-install-magento-updatebeta11-why">Why must I uninstall?</h3>
{% include install/versionbeta10upgr.html %}


<h3 id="instgde-install-magento-updatebeta11-how">How to update the Magento software</h3>
To update the Magento software to 0.42.0-beta11 or later from version beta10 or earlier:

1.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>).

2.	Change to the following directory:

		cd <your Magento install dir>/setup

3.	Uninstall the Magento software and change to your Magento installation directory:

		magento setup:uninstall && cd ..

4.	Update the Magento code:

		git pull origin develop

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<p>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/trouble/git/tshoot_git-pull-origin.html">troubleshooting</a>.</p> </span>
	</div>

5.	Run Composer:

		composer install

6.	Install the Magento software:

	*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>