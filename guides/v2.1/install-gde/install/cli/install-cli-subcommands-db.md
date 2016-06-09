---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Create the Magento database schema
menu_title: Create the Magento database schema
menu_node: 
menu_order: 15
version: 2.1
github_link21: install-gde/install/cli/install-cli-subcommands-db.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-subcommands-store-prereq">Prerequisites</a>
*	<a href="#instgde-cli-dbconfig">Configure the database and add data</a>


<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-db-prereq">Prerequisites</h2>
Before you run this command, you must <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>.

<h2 id="instgde-cli-dbconfig">Configure the database and add data</h2>
Command usage:

	magento setup:db-schema:upgrade
	magento setup:db-data:upgrade

To see the status of the database, enter

	magento setup:db:status

#### Related topics

*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall-mods.html">Uninstall modules</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-backup.html">Back up the file system, media, and database</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-theme-uninstall.html">Uninstall themes</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall-langpk.html">Uninstall language packages</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
