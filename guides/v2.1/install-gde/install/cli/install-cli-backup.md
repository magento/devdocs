---
group: install_cli
title: Back up and roll back the file system, media, and database
version: 2.1
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

*	The Magento file system (excluding `var` and `pub/static` directories)
*	The `pub/media` directory
*	The Magento 2 database

Backups are stored in the `var/backups` directory and can be restored at any time using the [magento setup:rollback]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll) command.

After backing up, you can [roll back](#instgde-cli-uninst-roll) at a later time.

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Set ulimit for the web server user {#instgde-cli-ulimit}
{% include install/ulimit.md %}

## Backing up {#instgde-cli-uninst-back}

Command usage:

	magento setup:backup [--code] [--media] [--db]

The command performs the following tasks:

1.	Puts the store in maintenance mode.
2.	Executes one of the following command options.

    |Option|Meaning|Backup file name and location|
    |--- |--- |--- |
    |`--code`|Backs up the Magento file system (excluding var and pub/static directories).|var/backups/<timestamp>\_filesystem.tgz|
    |`--media`|Back up the pub/media directory.|var/backups/<timestamp>\_filesystem_media.tgz|
    |`--db`|Back up the Magento 2 database.|var/backups/<timestamp>\_db.sql|
    {:style="table-layout:auto;"}

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

{:.bs-callout .bs-callout-info}
If the command results in a `Segmentation fault` message, see [Segmentation fault during rollback]({{ page.baseurl }}/install-gde/trouble/tshoot_segfault.html).
