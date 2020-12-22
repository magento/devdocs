---
group: installation-guide
title: Back up and roll back the file system, media, and database
functional_areas:
  - Install
  - System
  - Setup
---

## Overview of backup {#instgde-cli-uninst-back-over}

This command enables you to back up:

*  The Magento file system (excluding `var` and `pub/static` directories)
*  The `pub/media` directory
*  The Magento 2 database

Backups are stored in the `var/backups` directory and can be restored at any time using the [magento setup:rollback]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll) command.

After backing up, you can [roll back](#instgde-cli-uninst-roll) at a later time.

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Enable backups

The Magento backup feature is disabled by default. To enable, enter the following CLI command:

```bash
bin/magento config:set system/backup/functionality_enabled 1
```

{:.bs-callout-warning}
**Deprecation Notice:**
Magento backup functionality is deprecated as of 2.1.16, 2.2.7, and 2.3.0. We recommend investigating additional backup technologies and binary backup tools (such as Percona XtraBackup).

## Set ulimit for the web server user {#instgde-cli-ulimit}
{% include install/ulimit.md %}

## Backing up {#instgde-cli-uninst-back}

Command usage:

```bash
bin/magento setup:backup [--code] [--media] [--db]
```

The command performs the following tasks:

1. Puts the store in maintenance mode.
1. Executes one of the following command options.

    |Option|Meaning|Backup file name and location|
    |--- |--- |--- |
    |`--code`|Backs up the Magento file system (excluding var and pub/static directories).|var/backups/<timestamp>\_filesystem.tgz|
    |`--media`|Back up the pub/media directory.|var/backups/<timestamp>\_filesystem_media.tgz|
    |`--db`|Back up the Magento 2 database.|var/backups/<timestamp>\_db.sql|

1. Takes the store out of maintenance mode.

For example, to back up the file system and database,

```bash
bin/magento setup:backup --code --db
```

Messages similar to the following display:

```terminal
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
```

## Roll back {#instgde-cli-uninst-roll}

This section discusses how to roll back to a backup you made previously. You must know the file name of the backup file to restore.

To find the name of your backups, enter:

```bash
bin/magento info:backups:list
```

The first string in the backup file name is the timestamp.

To roll back to a previous backup, enter:

```bash
bin/magento setup:rollback [-c|--code-file="<name>"] [-m|--media-file="<name>"] [-d|--db-file="<name>"]
```

For example, to restore a media backup named `1440611839_filesystem_media.tgz`, enter

```bash
bin/magento setup:rollback -m 1440611839_filesystem_media.tgz
```

Messages similar to the following display:

```terminal
[SUCCESS]: Media rollback completed successfully.
Please set file permission of bin/magento to executable
Disabling maintenance mode
```
