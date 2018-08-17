---
group: install_cli
subgroup: 05_Command-line installation
title: Update the Magento database schema and data
menu_title: Update the Magento database schema and data
menu_node:
menu_order: 16
version: 2.0
functional_areas:
  - Install
  - System
  - Setup
---

## First steps   {#instgde-cli-before}

{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

## Prerequisites   {#instgde-cli-subcommands-maint-prereq}

Before you use this command, you must <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-install.html">install the Magento software</a>.

## Upgrade the Magento database schema and data {#instgde-cli-db-upgr}

Anytime you perform an action that causes the Magento {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %} or data to change, you must update them by running the command discussed in this section. A partial list of reasons follows:

*	You upgraded the Magento software using the command line
*	You installed or updated a component using the command line
*	You enabled or disabled a component using the command line

Note the following:

*	If you used the Web Setup Wizard to do any of the preceding, you don't have to use the command discussed in this topic.
*	A Magento *component* can be a module, theme, or language pack; it doesn't matter whether the component comes from the Magento Marketplace or not

Command usage:

	magento setup:upgrade [--keep-generated]

where `--keep-generated` is an optional argument that does not update [static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html). This optional argument is for use *only* in limited circumstances by experienced system integrators. It should be used *only* in [production mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode). It should *not* be used in [developer mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode).

#### Related topics

*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*	[Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*	[Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html">Create or unlock a Magento administrator</a>
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
