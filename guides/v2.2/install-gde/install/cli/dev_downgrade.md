---
group: installation-guide
subgroup: 99_contrib
title: Change to a released version
menu_title: Change to a released version
menu_order: 200
menu_node:
functional_areas:
  - Install
  - System
  - Setup
---

This topic discusses how a contributing developer can change versions of the Magento software after cloning the `develop` branch. This might be necessary to perform some tasks that require a specific Magento version other than `develop`.

The `develop` branch is the default branch, which means you get it by default when you clone the Magento 2 GitHub repository. For some tasks, such as data migration from Magento 1.x to Magento 2.x, you must switch to a [release tag](https://github.com/magento/magento2/tags).

You have the following options:

*  *(Easier)*. If you have not done any customizations, you should uninstall the Magento software and reinstall it with the released version. Uninstalling not only drops the database tables, it also clears the Magento `var` directory, enabling you to start over with no issues.

   For more information, see [Change versions by uninstalling the Magento software](#downgrade-uninstall)

*  If you have done customizations and do not want to lose them, back up the Magento system, switch to the released branch, and install in a new database instance.

   For more information, see [Change versions by installing the Magento software in a new database instance](#downgrade-db)

   You can migrate your customizations (both in the file system and in the database) from the backups you made or directly using database and file system tools.

### Change versions by uninstalling the Magento software {#downgrade-uninstall}

To change versions after cloning:

1. Log in to your Magento server as, or switch to, [the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Use the following command to uninstall the Magento software:

   ```bash
   php <your Magento clone dir>/bin/magento setup:uninstall
   ```

1. Either remove your old Magento clone directory or [update the Magento software]({{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html).
1. If you have not already done so, clone the Magento 2 GitHub repository as follows:

   ```bash
   git clone git@github.com:magento/magento2.git
   ```

1. Change to [release tag](https://github.com/magento/magento2/tags) as follows:

   ```bash
   git checkout tags/<tag name>  [-b <branch name>]
   ```

   For example, to check out the 2.2.0 release tag in a new branch named `2.2.0`, enter

   ```bash
   git checkout tags/2.2.0 -b 2.2.0
   ```

1. Install the Magento software using the [command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html) or [Setup Wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html).

### Change versions by installing the Magento software in a new database instance {#downgrade-db}

To change versions after cloning:

1. Log in to your Magento server as, or switch to, [the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Create a [new database instance]({{ page.baseurl }}/install-gde/prereq/mysql.html#instgde-prereq-mysql-config) for your installation.
1. [Back up]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html#instgde-cli-uninst-back) the Magento file system, database, and media files:

   ```bash
   php <magento_root>/bin/magento setup:backup --code --media --db
   ```

1. Change to [release tag](https://github.com/magento/magento2/tags) as follows:

   ```bash
   git checkout tags/<tag name>  [-b <branch name>]
   ```

   For example, to check out the 2.2.0 release tag in a new branch named `2.2.0`, enter

   ```bash
   git checkout tags/2.2.0 -b 2.2.0
   ```

1. Manually clear Magento `var` directories:

   ```bash
   rm -rf <magento_root>/var/cache/* <magento_root>/var/page_cache/* <magento_root>/generated/code/*
   ```

1. Install the Magento software in your new database instance.

   You can install using either the [command line]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html) or [Setup Wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html).
