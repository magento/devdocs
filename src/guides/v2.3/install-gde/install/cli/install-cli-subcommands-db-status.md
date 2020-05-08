---
group: installation-guide
subgroup: 05_Command-line installation
title: Check the Magento database status
menu_title: Check the Magento database status
menu_node:
menu_order: 16
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-db-prereq}

Before you run this command, you must [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html).

## Command usage

To check the status of the Magento database, enter

```bash
bin/magento setup:db:status
```

This command has no arguments or options.

Sample output follows:

```terminal
All modules are up to date.
```

The command returns one of the following exit codes:

Exit code  | Description | Suggested action
|--------------|--------------|--------------|
 0 | Normal | None |
 1 | Some modules use code versions newer or older than the database | Run [`magento setup:upgrade`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html) to update the database schema and run `composer update` from the Magento root directory to update component dependencies |
 2 | setup:upgrade is required | [`magento setup:upgrade`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html) to update the [database schema](https://glossary.magento.com/database-schema) |

{:.ref-header}
Related topics

*  [Installing the Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html)
*  [Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*  [Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
*  [Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*  [Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*  [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
*  [Enable or disable maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html)
*  [Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*  [Configure the store]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html)
*  [Create or unlock a Magento administrator]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html)
*  [Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
*  [Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*  [Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*  [Uninstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall)
*  [Update the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update)
*  [Reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall)
