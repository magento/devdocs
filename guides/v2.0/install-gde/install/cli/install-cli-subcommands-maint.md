---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Enable or disable maintenance mode
menu_title: Enable or disable maintenance mode
menu_node: 
menu_order: 10
version: 2.0
github_link: install-gde/install/cli/install-cli-subcommands-maint.md
redirect_from:
  -  /guides/v1.0/install-gde/install/install-cli-subcommands-maint.html
  -  /guides/v2.0/install-gde/install/install-cli-subcommands-maint.html
---
  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-subcommands-maint-prereq">Prerequisites</a>
*	<a href="#instgde-cli-maint">Enable or disable maintenance mode</a>
*	<a href="#instgde-cli-maint-exempt">Maintain the list of exempt IP addresses</a>


<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-maint-prereq">Prerequisites</h2>
Before you use this command, you must <a href="{{page.baseurl}}install-gde/install/cli/install-cli-install.html">install the Magento software</a>.

<h2 id="instgde-cli-maint">Enable or disable maintenance mode</h2>
Magento uses *maintenance mode* to disable bootstrapping; for example, while you're maintaining, upgrading, or reconfiguring your site. 

Magento detects maintenance mode as follows:

*	If `var/.maintenance.flag` does not exist, maintenance mode is off and Magento operates normally.
*	Otherwise, maintenance mode is on unless `var/.maintenance.ip` exists:

	`var/.maintenance.ip` can contain a list of IP addresses. If an entry point is accessed using HTTP and the client IP address corresponds to one of the entries in that list, then maintenance mode is off.

Command usage:

	magento maintenance:enable [--ip=<ip address> ... --ip=<ip address>] | [ip=none]
	magento maintenance:disable [--ip=<ip address> ... --ip=<ip address>] | [ip=none]
	magento maintenance:status

where

`--ip=<ip address>` is an IP address to exempt from maintenance mode (for example, developers doing the maintenance). To exempt more than one IP address in the same command, use the option multiple times.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <ul><li>Using <code>--ip=&lt;ip address></code> with <code>magento maintenance:disable</code> means only that you're saving the list of IPs for later use.</li>
  	<li>To clear the list of exempt IPs, you can use <code>magento maintenance:enable --ip=none</code> or see <a href="#instgde-cli-maint-exempt">Maintain the list of exempt IP addresses</a>.</li></ul></span>
</div>

`magento maintenance:status` displays the current status of maintenance mode.

For example, to enable maintenance mode with no IP address exemptions:

	magento maintenance:enable

To enable maintenance mode for all clients except 192.0.2.10 and 192.0.2.11:

	magento maintenance:enable --ip=192.0.2.10 --ip=192.0.2.11

<h2 id="instgde-cli-maint-exempt">Maintain the list of exempt IP addresses</h2>
To maintain the list of exempt IP addresses, you can either use the `[--ip=<ip list>]` option in the preceding commands or you can use the following:

	magento maintenance:allow-ips <ip address> .. <ip address> [--none]

where 

`<ip address> .. <ip address>` is an optional space-delimited list of IP addresses to exempt. 

`--none` clears the list.


#### Related topics

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove or update sample data]({{ page.baseurl }}install-gde/install/cli/install-cli-sample-data-other.html)
*	[Enable or disable modules]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Display or change the Admin URI]({{ page.baseurl }}install-gde/install/cli/install-cli-adminurl.html)
*	[Uninstall modules]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	[Update the Magento database schema and data]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-admin.html">Create or unlock a Magento administrator</a>
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>