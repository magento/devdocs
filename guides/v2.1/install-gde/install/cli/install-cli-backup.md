---
group: install_cli
title: Back up and roll back the file system, media, and database
version: 2.1
github_link: install-gde/install/cli/install-cli-backup.md
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-backup.html
  - /guides/v2.0/install-gde/install/install-cli-backup.html
functional_areas:
  - Install
  - System
  - Setup
---


## Overview of backup {#instgde-cli-uninst-back-over}
This command enables you to back up:

*	The Magento file system (excluding <code>var</code> and <code>pub/static</code> directories)
*	The <code>pub/media</code> directory
*	The Magento 2 database

Backups are stored in the `var/backups` directory and can be restored at any time using the <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll">magento setup:rollback</a> command.

After backing up, you can <a href="#instgde-cli-uninst-roll">roll back</a> at a later time.

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

## Set ulimit for the web server user {#instgde-cli-ulimit}
{% include install/ulimit.md %}

## Backing up {#instgde-cli-uninst-back}
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
		<td><p>var/backups/&lt;timestamp>_filesystem.tgz</p></td>
	</tr>
	<tr>
		<td><p>--media</p></td>
		<td><p>Back up the <code>pub/media</code> directory.</p></td>
		<td><p>var/backups/&lt;timestamp>_filesystem_media.tgz</p></td>
	</tr>
	<tr>
	<tr>
		<td><p>--db</p></td>
		<td><p>Back up the Magento 2 database.</p></td>
		<td><p>var/backups/&lt;timestamp>_db.sql</p></td>
	</tr>
	<tr>
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

## Roll back {#instgde-cli-uninst-roll}
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

<div class="bs-callout bs-callout-info" id="info">
  <p>If the command results in a <code>Segmentation fault</code> message, see <a href="{{ page.baseurl }}/install-gde/trouble/tshoot_segfault.html">Segmentation fault during rollback</a>.</p>
</div>