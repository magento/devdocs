---
layout: default
group: install 
subgroup: T_Command-line installation
title: Enable and disable modules
menu_title: Enable and disable modules
menu_node: 
menu_order: 10
github_link: install-gde/install/install-cli-subcommands-enable.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-subcommands-enable-disable">Module enable, disable</a>

<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>

Before you begin, make sure that:

1.	Your system meets the requirements discussed in <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento System Requirements</a>.
2.	You completed all prerequisite tasks discussed in <a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Prerequisites</a>.
3.	You installed Composer and cloned the Magento GitHub repository as discussed in <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento GitHub repository</a>.
4.	After you log in to the Magento server, switch to the web server user as discussed in <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must install Magento from its <code>setup</code> subdirectory.</p></span>
</div>

The installer is designed to be run multiple times if necessary so you can:

*	Provide different values

	For example, after you configure your web server for Secure Sockets Layer (SSL), you can run the installer to set SSL options.

*	Correct mistakes in previous installations
*	Install Magento in a different database instance

<h2 id="instgde-cli-before">First steps</h2>
Before you begin:

1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.
2.	Change to the following directory:

		cd <your Magento install dir>/setup
	
	Examples:
	
	*	Ubuntu: `cd /var/www/magento2/setup`
	*	CentOS: `cd /var/www/html/magento2/setup`

<h2 id="instgde-cli-subcommands-enable-disable">Module enable, disable</h2>
To enable or disable currently installed modules, use the following command:

	php index.php --{enable-modules|disable-modules} {--modules="&lt;list>"} [--force]

Use the following command to list enabled and disabled modules:

	php index.php help module-list

For important information about enabling and disabling modules, see the next section.

<h3 id="instgde-cli-subcommands-enable-modules">About enabling and disabling modules</h3>
{% include install/enable-disable-modules.html %}

<h3 id="instgde-cli-maint-configphp">Maintenance mode</h3>
To put your Magento store in maintenance mode, enter:

	php index.php maintenance 

<h3 id="instgde-cli-subcommands-uninstall">Uninstalling the Magento software</h3>
The command discussed in this section does the following:

*	Drops and re-creates the database, if the connection settings are present in the deployment configuration (`app/etc/config.php`). All tables and data are lost because only database is re-created, not the tables.
*	Deletes the contents of the `var` and `pub/static` directories, skipping paths that start with `.` (period).
*	Deletes the deployment configuration, `app/etc/config.php`

To perform the preceding tasks, enter the following command:

	php index.php uninstall

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Install the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands.html">Get started with the command-line installation</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>