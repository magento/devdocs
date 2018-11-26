---
group: installation-guide
subgroup: 05_Command-line installation
title: Create the Magento database schema
menu_title: Create the Magento database schema
menu_node:
menu_order: 15
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-subcommands-db.html
  - /guides/v2.0/install-gde/install/install-cli-subcommands-db.html
functional_areas:
  - Install
  - System
  - Setup
---

## First steps   {#instgde-cli-before}

{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites   {#instgde-cli-subcommands-db-prereq}

Before you run this command, you must [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html).

## Configure the database and add data   {#instgde-cli-dbconfig}

Command usage:

	magento setup:db-schema:upgrade
	magento setup:db-data:upgrade

To see the status of the database, enter

	magento setup:db:status

#### Related topics

*	[Installing the Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html)
*	[Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*	[Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*	[Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*	[Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
*	[Enable or disable maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html)
*	[Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	[Configure the store]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html)
*	[Create or unlock a Magento administrator]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html)
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*	[Uninstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall)
*	[Update the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update)
*	[Reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall)
