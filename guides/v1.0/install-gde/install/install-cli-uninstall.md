---
layout: default
group: install 
subgroup: T_Command-line installation
title: Update, reinstall, uninstall 
menu_title: Update, reinstall, uninstall
menu_node: 
menu_order: 5
github_link: install-gde/install/install-cli-uninstall.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-install-magento-update">Update the Magento software</a>
*	<a href="#instgde-install-magento-reinstall">Reinstall the Magento software</a>
*	<a href="#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="#instgde-install-magento-updatebeta11">Update to version 0.42.0-beta11 or later from beta10 or earlier</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}



<h2 id="instgde-install-magento-update">Update the Magento software</h2>
This section discusses how to update your Magento software without reinstalling it. To uninstall and reinstall, see the next section.

You might do this in an development environment especially to get all the latest code changes.

To update the Magento software:

2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>).
3. Save any changes you made to `composer.json` because the following steps will overwrite it:

		cd <your Magento install dir>
		cp composer.json composer.json.old

3.	If you previously installed the optional sample data, enter the following command:

		rm -rf dev/tools/Magento/Tools/SampleData/

3.	Update your local repository to get the latest code:
		
		git pull origin develop

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<p>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_git-pull-origin.html">troubleshooting</a>.</p> </span>
	</div>
				
3.	Diff and merge your `composer.json.old` with `composer.json` installed with the Magento software.

4.	Enter the following command:

		composer update

4.	Update the Magento database.

		php bin/magento setup:upgrade

4.	_Optional_. To change installation options, repeat the tasks discussed in:

	*	<a href="#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

<h2 id="instgde-install-magento-reinstall">Reinstall the Magento software</h2>
This section discusses how to uninstall and then reinstall the Magento software with the latest version.

To reinstall the Magento software:

2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>).
3.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		git pull origin develop
		php bin/magento setup:uninstall

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<ul><li>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_git-pull-origin.html">troubleshooting</a>. </li>
  				<li>To use your existing Magento software version , omit the <code>git pull origin develop</code> command.</li></ul></span>
	</div>

4.	Install the Magento software:

	*	<a href="#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

<h2 id="instgde-install-uninstall">Uninstall the Magento software</h2>
Uninstalling the Magento software drops and restores the database, removes 'config.php', and clears directories under `var`.

To uninstall the Magento software, enter the following command:

	php magento setup:uninstall

The following message displays to confirm a successful uninstallation:

	[SUCCESS]: Magento uninstallation complete.

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

1.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>).

2.	Change to the following directory:

		cd <your Magento install dir>/setup

3.	Uninstall the Magento software and change to your Magento installation directory:

		php magento setup:uninstall && cd ..

4.	Update the Magento code:

		git pull origin develop

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<p>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_git-pull-origin.html">troubleshooting</a>.</p> </span>
	</div>

5.	Run Composer:

		composer install

6.	Install the Magento software:

	*	<a href="#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>