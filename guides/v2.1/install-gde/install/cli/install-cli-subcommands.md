---
group: installation-guide
subgroup: 05_Command-line installation
title: Get started with the command-line installation
menu_title: Get started with the command-line installation
menu_node:
menu_order: 2
functional_areas:
  - Install
  - System
  - Setup
---

## Before you start your installation {#instgde-install-cli-prereq}
{% include install/before-you-begin-cli.md %}

The installer is designed to be run multiple times if necessary so you can:

*	Provide different values

	For example, after you configure your web server for Secure Sockets Layer (SSL), you can run the installer to set SSL options.

*	Correct mistakes in previous installations
*	Install Magento in a different database instance

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Command summary {#instgde-cli-summary}

The following table summarizes the available commands. Commands are shown in summary form only; for more information about a command, click the link in the Command column.

|Command|Description|Prerequisites|
|--- |--- |--- |
|`magento setup:install`|Installs the Magento software|None|
|`magento setup:uninstall`|Removes the Magento software.|Magento software installed|
|`magento setup:upgrade`|Updates the Magento software.|Deployment configuration|
|`magento maintenance:{enable/disable}`|Enables or disables maintenance mode (in maintenance mode, only exempt IP addresses can access the Magento Admin or storefront).|Magento software installed|
|`magento setup:config:set`|Creates or updates the deployment configuration.|None|
|`magento module:{enable/disable}`|Enable or disable modules.|None|
|`magento setup:store-config:set`|Sets storefront-related options, such as base URL, language, timezone, and so on.|Deployment configuration
Database (simplest way is to use magento setup:upgrade)|
|`magento setup:db-schema:upgrade`|Updates the Magento database schema.|Deployment configuration|
|`magento setup:db-data:upgrade`|Updates the Magento database data.|Deployment configuration|
|`magento setup:db:status`|Checks if the database is up-to-date with the code.|Deployment configuration|
|`magento admin:user:create`|Creates a Magento administrator.|All of the following:<br><br>Deployment configuration<br><br>Enable at minimum the Magento_User and Magento_Authorization modules<br><br>Database (simplest way is to use magento setup:upgrade)|
|`magento list`|Lists all available commands.|None|
|`magento help`|Provides help for the specified command.|None|


## Help commands {#instgde-cli-help}
{% include install/cli_help-commands.md %}

## Common arguments {#instgde-cli-subcommands-common}
{% include install/cli_common-commands.md %}

## Commands {#instgde-cli-subcommands}

The following sections discuss the available commands.

*	[Installing the Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html)
*	[Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*	[Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*	[Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*	[Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
*	[Enable or disable maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html)
*	[Create the Magento database schema]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html)
*	[Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	[Configure the store]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html)
*	[Create or unlock a Magento administrator]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html)
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*	[Uninstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall)
*	[Update the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update)
*	[Reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall)
