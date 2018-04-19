---
layout: default
group: install_cli
subgroup: 05_Command-line installation
title: Check the Magento database status
menu_title: Check the Magento database status
menu_node:
menu_order: 16
version: 2.2
github_link: install-gde/install/cli/install-cli-subcommands-db-status.md
functional_areas:
  - Install
  - System
  - Setup
---

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-db-prereq">Prerequisites</h2>
Before you run this command, you must <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>.

## Command usage
To check the status of the Magento database, enter

	magento setup:db:status

This command has no arguments or options.

Sample output follows:

	All modules are up to date.

The command returns one of the following exit codes:

Exit code  | Description | Suggested action
|--------------|--------------|--------------|
 0 | Normal | None |
 1 | Some modules use code versions newer or older than the database | Run [`magento setup:upgrade`]({{ page.baseurl}}/install-gde/install/cli/install-cli-subcommands-db-upgr.html) to update the database schema and run `composer update` from the Magento root directory to update component dependencies |
 2 | setup:upgrade is required | [`magento setup:upgrade`]({{ page.baseurl}}/install-gde/install/cli/install-cli-subcommands-db-upgr.html) to update the {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %} |

#### Related topics

*	<a href="{{page.baseurl}}/install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove sample data modules or update sample data]({{ page.baseurl}}/install-gde/install/cli/install-cli-sample-data-other.html)
*	[Enable or disable modules]({{ page.baseurl}}/install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Display or change the Admin URI]({{ page.baseurl}}/install-gde/install/cli/install-cli-adminurl.html)
*	[Uninstall modules]({{ page.baseurl}}/install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	[Update the Magento database schema and data]({{ page.baseurl}}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	<a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-admin.html">Create or unlock a Magento administrator</a>
*	[Back up and roll back the file system, media, and database]({{ page.baseurl}}/install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl}}/install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl}}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{page.baseurl}}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{page.baseurl}}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{page.baseurl}}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
