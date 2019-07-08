---
group: installation-guide
title: Enable or disable maintenance mode
functional_areas:
  - Install
  - System
  - Setup
---


Magento uses [maintenance mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#maintenance-mode) to disable bootstrapping; for example, while you're maintaining, upgrading, or reconfiguring your site.

Magento detects maintenance mode as follows:

*	If `var/.maintenance.flag` does not exist, maintenance mode is off and Magento operates normally.
*	Otherwise, maintenance mode is on unless `var/.maintenance.ip` exists:

	`var/.maintenance.ip` can contain a list of IP addresses. If an entry point is accessed using HTTP and the client IP address corresponds to one of the entries in that list, then maintenance mode is off.

## First steps {#instgde-cli-before}

{% include install/first-steps-cli.md %}

In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-maint-prereq}

Before you use this command, you must [install the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html).

## Enable or disable maintenance mode {#instgde-cli-maint}

Use the `magento maintenance` CLI command to enable or disable Magento maintenance mode.

Command usage:

	magento maintenance:enable [--ip=<ip address> ... --ip=<ip address>] | [ip=none]
	magento maintenance:disable [--ip=<ip address> ... --ip=<ip address>] | [ip=none]
	magento maintenance:status

where

`--ip=<ip address>` is an IP address to exempt from maintenance mode (for example, developers doing the maintenance). To exempt more than one IP address in the same command, use the option multiple times.

{:.bs-callout .bs-callout-info}
Using <code>--ip=&lt;ip address></code> with <code>magento maintenance:disable</code> means only that you're saving the list of IPs for later use. To clear the list of exempt IPs, you can use `magento maintenance:enable --ip=none` or see [Maintain the list of exempt IP addresses](#instgde-cli-maint-exempt).

`magento maintenance:status` displays the current status of maintenance mode.

For example, to enable maintenance mode with no IP address exemptions:

	magento maintenance:enable

To enable maintenance mode for all clients except 192.0.2.10 and 192.0.2.11:

	magento maintenance:enable --ip=192.0.2.10 --ip=192.0.2.11

## Maintain the list of exempt IP addresses {#instgde-cli-maint-exempt}

To maintain the list of exempt IP addresses, you can either use the `[--ip=<ip list>]` option in the preceding commands or you can use the following:

	magento maintenance:allow-ips <ip address> .. <ip address> [--none]

where

`<ip address> .. <ip address>` is an optional space-delimited list of IP addresses to exempt.

`--none` clears the list.
