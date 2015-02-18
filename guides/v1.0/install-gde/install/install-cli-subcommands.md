---
layout: default
group: install 
subgroup: T_Command-line installation
title: Get started with the command-line installation
menu_title: Get started with the command-line installation
menu_node: 
menu_order: 1
github_link: install-gde/install/install-cli-subcommands.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-help">Command-line installer help commands</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="#instgde-cli-maint-configphp">Maintenance mode</a>
*	<a href="#instgde-cli-subcommands-uninstall">Uninstall</a>

<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>
{% include install/before-you-begin-cli.html %}

The installer is designed to be run multiple times if necessary so you can:

*	Provide different values 

	For example, after you configure your web server for Secure Sockets Layer (SSL), you can run the installer to set SSL options.

*	Correct mistakes in previous installations
*	Install Magento in a different database instance

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="instgde-cli-help">Command-line installer help commands</h2>
To display a complete list of installer subcommands, enter:

	php index.php help

To get help on a particular subcommand, enter:

	php index.php help <subcommand>

For example,

	php index.php help install-configuration

<h2 id="instgde-cli-subcommands">Command line installer subcommands</h2>
The following sections discuss the available subcommands.

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="#instgde-cli-subcommands-update">Update the database</a>
*	<a href="#instgde-cli-maint-configphp">Maintenance mode</a>
*	<a href="#instgde-cli-subcommands-uninstall">Uninstall</a>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Not all subcommands are currently documented. Provide us input by <a href="{{ site.githuburl }}install-gde/install/install-cli-subcommands.md }}">editing this page on GitHub</a>.</p></span>
</div>

<h3 id="instgde-cli-subcommands-update">Update the database</h3>
To update the database (for example, after you install a new module or update an existing module), use the following command:

	php index.php update

<h3 id="instgde-cli-maint-configphp">Maintenance mode</h3>
Magento uses *maintenance mode* to disable bootstrapping; for example, if your system is being updated or reconfigured. 

Magento detects maintenance mode as follows:

*	If `var/.maintenance.flag` does not exist, maintenance mode is off and Magento operates normally.
*	Otherwise, maintenance mode is on unless `var/.maintenance.ip` exists:

	`var/.maintenance.ip` can contain a list of comma-separated IP addresses. If an entry point is accessed using HTTP and the client IP address corresponds to one of the entries in that list, then maintenance mode is off.

Command usage:

	php index.php maintenance [--set=1|0] [--addresses=<list>|none]

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Running <code>php index.php maintenance</code> with no arguments displays the current status.</p></span>
</div>
 

For example, to enable maintenance mode:

	php index.php maintenance --set=1

To enable maintenance mode for all clients except 192.0.2.10:

	php index.php maintenance --set=1 --addresses=192.0.2.10

<h3 id="instgde-cli-subcommands-uninstall">Uninstall</h3>
The command discussed in this section does the following:

*	Drops and re-creates the database, if the connection settings are present in the deployment configuration (`app/etc/config.php`). All tables and data are lost because only database is re-created, not the tables.
*	Deletes the contents of the `var` and `pub/static` directories, skipping paths that start with `.` (period).
*	Deletes the deployment configuration, `app/etc/config.php`

To perform the preceding tasks, enter the following command:

	php index.php uninstall


#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Install the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>