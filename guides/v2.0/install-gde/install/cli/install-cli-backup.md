---
group: installation-guide
subgroup: 05_Command-line installation
title: Back up and roll back the file system, media, and database
menu_title: Back up and roll back the file system, media, and database
menu_node:
menu_order: 100
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-backup.html
  - /guides/v2.0/install-gde/install/install-cli-backup.html
functional_areas:
  - Install
  - System
  - Setup
---

## Overview of backup   {#instgde-cli-uninst-back-over}

This command enables you to back up:

*	The Magento file system (excluding <code>var</code> and <code>pub/static</code> directories)
*	The <code>pub/media</code> directory
*	The Magento 2 database

Backups are stored in the `var/backups` directory and can be restored at any time using the <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll">magento setup:rollback</a> command.

After backing up, you can <a href="#instgde-cli-uninst-roll">roll back</a> at a later time.

## First steps   {#instgde-cli-before}

{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

## Set ulimit for the web server user {#instgde-cli-ulimit}
{% include install/ulimit.md %}

## Backing up   {#instgde-cli-uninst-back}

Command usage:

	magento setup:backup [--code] [--media] [--db]

The command performs the following tasks:

1.	Puts the store in maintenance mode.
2.	Executes one of the following command options.

<table>
<col width="25%">
<col width="40%">
<col width="35%">
<tbody>
<tr>
<th>Option</th>
<th>Meaning</th>
<th>Backup file name and location</th>
</tr>
<tr>
<td><p>--code</p></td>
<td><p>Backs up the Magento file system (excluding <code>var</code> and <code>pub/static</code> directories).</p></td>
<td><p>var/backups/&lt;timestamp&gt;_filesystem.tgz</p></td>
</tr>
<tr>
<td><p>--media</p></td>
<td><p>Back up the <code>pub/media</code> directory.</p></td>
<td><p>var/backups/&lt;timestamp&gt;_filesystem_media.tgz</p></td>
</tr>
<tr>
<td><p>--db</p></td>
<td><p>Back up the Magento 2 database.</p></td>
<td><p>var/backups/&lt;timestamp&gt;_db.sql</p></td>
</tr>
</tbody>
</table>

3.	Takes the store out of maintenance mode.

For example, to back up the file system and database,

	magento setup:backup --code --db

Messages similar to the following display:

	Enabling maintenance mode
	Code backup is starting...
	Code backup filename: 1434133011_filesystem.tgz (The archive can be uncompressed with 7-Zip on Windows systems)
	Code backup path: /var/www/html/magento2/var/backups/1434133011_filesystem.tgz
	[SUCCESS]: Code backup completed successfully.
	DB backup is starting...
	DB backup filename: 1434133011_db.sql
	DB backup path: /var/www/html/magento2/var/backups/1434133011_db.sql
	[SUCCESS]: DB backup completed successfully.
	Disabling maintenance mode

## Roll back   {#instgde-cli-uninst-roll}

This section discusses how to roll back to a backup you made previously. You must know the file name of the backup file to restore.

To find the name of your backups, enter:

	magento info:backups:list

The first string in the backup file name is the timestamp.

To roll back to a previous backup, enter:

	magento setup:rollback [-c|--code-file="<name>"] [-m|--media-file="<name>"] [-d|--db-file="<name>"]

For example, to restore a media backup named `1440611839_filesystem_media.tgz`, enter

	magento setup:rollback -m 1440611839_filesystem_media.tgz

Messages similar to the following display:

	[SUCCESS]: Media rollback completed successfully.
	Please set file permission of bin/magento to executable
	Disabling maintenance mode

{: .bs-callout .bs-callout-info }
If the command results in a `Segmentation fault` message, see [Segmentation fault during rollback]({{ page.baseurl }}/install-gde/trouble/tshoot_segfault.html).

#### Related topics

*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*	[Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	[Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	[Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	[Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
