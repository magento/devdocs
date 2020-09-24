---
group: installation-guide
subgroup: 05_Command-line installation
title: Enable or disable maintenance mode
menu_title: Enable or disable maintenance mode
menu_node:
menu_order: 10
functional_areas:
  - Install
  - System
  - Setup
---

The following guide refers to a standard Magento maintenance mode page. If you need to use a custom maintenance page, see [Create the custom maintenance page]({{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html#compman-trouble-maint-create).

Magento uses [maintenance mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#maintenance-mode) to disable bootstrapping. For example, while you are maintaining, upgrading, or reconfiguring your site.

Magento detects maintenance mode as follows:

*  If `var/.maintenance.flag` does not exist, maintenance mode is off and Magento operates normally.
*  Otherwise, maintenance mode is on unless `var/.maintenance.ip` exists:

   `var/.maintenance.ip` can contain a list of IP addresses. If an entry point is accessed using HTTP and the client IP address corresponds to one of the entries in that list, then maintenance mode is off.

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-maint-prereq}

Before you use this command, you must [install the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html).

## Enable or disable maintenance mode {#instgde-cli-maint}

Use the `magento maintenance` CLI command to enable or disable Magento maintenance mode.

Command usage:

```bash
bin/magento maintenance:enable [--ip=<ip address> ... --ip=<ip address>] | [ip=none]
```

```bash
bin/magento maintenance:disable [--ip=<ip address> ... --ip=<ip address>] | [ip=none]
```

```bash
bin/magento maintenance:status
```

where

`--ip=<ip address>` is an IP address to exempt from maintenance mode (for example, developers doing the maintenance). To exempt more than one IP address in the same command, use the option multiple times.

{:.bs-callout-info}
Using `--ip=<ip address>` with `magento maintenance:disable` saves the list of IPs for later use. To clear the list of exempt IPs, use `magento maintenance:enable --ip=none` or see [Maintain the list of exempt IP addresses](#instgde-cli-maint-exempt).

`magento maintenance:status` displays the current status of maintenance mode.

For example, to enable maintenance mode with no IP address exemptions:

```bash
bin/magento maintenance:enable
```

To enable maintenance mode for all clients except 192.0.2.10 and 192.0.2.11:

```bash
bin/magento maintenance:enable --ip=192.0.2.10 --ip=192.0.2.11
```

After you place Magento in maintenance mode, you must stop all message queue consumer processes. One way to find these processes is to run the `ps -ef | grep queue:consumers:start` command. Then run the `kill <process_id>` command for each consumer. In a multiple node environment, be sure to repeat this task on each node.

## Maintain the list of exempt IP addresses {#instgde-cli-maint-exempt}

To maintain the list of exempt IP addresses, you can either use the `[--ip=<ip list>]` option in the preceding commands or you can use the following:

```bash
bin/magento maintenance:allow-ips <ip address> .. <ip address> [--none]
```

where

`<ip address> .. <ip address>` is an optional space-delimited list of IP addresses to exempt.

`--none` clears the list.

{:.ref-header}
Related topics

*  [Installing the Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html)
*  [Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*  [Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
*  [Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*  [Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*  [Create or update the deployment configuration]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html)
*  [Create the Magento database schema]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html)
*  [Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*  [Configure the store]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html)
*  [Create or unlock a Magento administrator]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html)
*  [Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
*  [Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*  [Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*  [Uninstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall)
*  [Update the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update)
*  [Reinstall the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall)
