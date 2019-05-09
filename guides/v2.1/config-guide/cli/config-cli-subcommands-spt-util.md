---
group: configuration-guide
title: Run the support utilities
ee_only: True
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of the support utilities {#config-cli-spt-utils-over}

The Magento support utilities (also referred to as the [*Data Collector*](http://docs.magento.com/m2/ee/user_guide/system/support-data-collector.html)) enable {{site.data.var.ee}} users to gather troubleshooting information about your system that can be used by our Support team.

Magento Support uses these backups (also referred to as *dumps*) to analyze issues that require access to your code. A typical scenario follows:

1.  You're having an issue with your Magento store and you contact Magento Support.
2.  Support determines they need to see your code or database to reproduce the issue.
3.  You back up the code to a `.tar.gz` file.

	This backup *excludes* your media files to speed up the process and to result in a much smaller file.
4.  You back up the database to a `.tar.gz` file.

	By default, [sensitive data](#sens-data) is hashed when making the backup.
5.  You upload your backups to a file sharing service.
6.  Support analyzes your issues without affecting your development or production environment.

The utilities can take several minutes to complete.

## Create a code backup {#config-cli-spt-utils-code}

This command backs up code and compresses it in `tar.gz` format.

{% include config/code-backup.md %}

Command options:

```bash
bin/magento support:backup:code [--name=<file name>] [-o|--output=<path>] [-l|--logs]
```

Where:

-   **`--name`** specifies the dump file name (optional). If you omit this parameter, the dump file is time and date-stamped.
-   **`-o|--output=<path>`** is the absolute file system path to store the backup (required).
-   **`-l|--logs`** includes log files (optional).

For example, to create a code backup named `/var/www/html/magento2/var/log/mycodebackup.tar.gz`:

```bash
bin/magento support:backup:code --name mycodebackup -o /var/www/html/magento2/var/log
```

After the command completes, provide the code backup to Magento Support.

## Create a database backup {#config-cli-spt-utils-db}

This command backs up the Magento database and compresses it in `tar.gz` format.

{% include config/code-backup.md %}

Command options:

```bash
bin/magento support:backup:db [--name=<name>] [-o|--output=<path>] [-l|--logs] [-i|--ignore-sanitize]
```

Where:

-   **`--name`** specifies the dump file name (optional). If you omit this parameter, the dump file is time and date-stamped.
-   **`-o|--output=<path>` is the absolute file system path to store the backup (required).
-   **`-l|--logs`** includes log files (optional).
-   **`-i|--ignore-sanitize`** means that data is preserved; omit the flag to hash [sensitive data](#sens-data) stored in the database when creating the backup (optional).

After the command completes, provide the database backup to Magento Support.

{% include install/sens-data.md %}

## Troubleshooting: display utilities and paths {#config-cli-spt-utils-trouble}

We provide commands that display paths to utilities required by the Data Collector and the command line. You can use these commands, for example, if errors like the following display in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} or on the command line:

```terminal
Utility lsof not found
```

Run the following commands in the order shown to display the paths to the applications used by the support utilities and Data Collector:

1.  Change to your Magento installation directory.

  For example, `cd /var/www/magento2`

	{:.bs-callout .bs-callout-info}
  The commands run properly _only_ from your Magento installation directory.

2.  `bin/magento support:utility:paths` creates `<magento_root>/var/support/Paths.php`, which lists the paths to all application used by the utility.
3.  `bin/magento support:utility:check` displays the file system paths.

A sample follows:

```terminal
	gzip => /bin/gzip
	lsof => /usr/sbin/lsof
	mysqldump => /usr/bin/mysqldump
	nice => /bin/nice
	php => /usr/bin/php
	tar => /bin/tar
	sed => /bin/sed
	bash => /bin/bash
	mysql => /usr/bin/mysql
```

To resolve issues with running the tools, make sure these applications are installed and are in the web server user's `$PATH` environment variable.
