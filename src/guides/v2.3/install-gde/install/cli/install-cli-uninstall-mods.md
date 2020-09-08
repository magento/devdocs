---
group: installation-guide
title: Uninstall modules
functional_areas:
  - Install
  - System
  - Setup
---

## Prerequisites {#instgde-cli-uninst-prereq}

Before you use this command, you must [install the Magento software]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html).

## Overview of uninstalling modules {#instgde-cli-uninst-mod-over}

This section discusses how to uninstall one or more modules. During uninstallation, you can optionally remove the modules' code, database schema, and database data. You can create backups first so you can recover the data at a later time.

You should uninstall a module only if you're certain you won't use it. Instead of uninstalling a module, you can disable it as discussed in [Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html).

 {:.bs-callout-info}
This command checks _only_ dependencies declared in the `composer.json` file. If you uninstall a [module](https://glossary.magento.com/module) that is _not_ defined in the `composer.json` file, this command uninstalls the module without checking for dependencies. This command does _not_, however, remove the module's code from the Magento file system. You must use file system tools to remove the module's code (for example, `rm -rf <path to module>`). As an alternative, you can [disable]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html) non-Composer modules.

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Uninstall modules {#instgde-cli-uninst-mod-uninst}

Command usage:

```bash
bin/magento module:uninstall [--backup-code] [--backup-media] [--backup-db] [-r|--remove-data] [-c|--clear-static-content] \
  {ModuleName} ... {ModuleName}
```

where `{ModuleName}` specifies the module name in `<VendorName>_<ModuleName>` format. For example, the Magento Customer module name is `Magento_Customer`. To get a list of module names, enter `magento module:status`

The module uninstall command performs the following tasks:

1. Verifies that the specified modules exist in the code base and are packages installed by [Composer](https://glossary.magento.com/composer).

   This command works *only* with modules defined as Composer packages.

1. Checks for dependencies with other modules; if there are any, the command terminates..

   To work around this, you can either uninstall all modules at the same time or you can uninstall the depending modules first.

1. Requests confirmation to proceed.
1. Puts the store in maintenance mode.
1. Processes the following command options.

    | Option           | Meaning                                                                          | Backup file name and location                |
    | ---------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
    | `--backup-code`  | Backs up the Magento file system (excluding `var` and `pub/static` directories). | var/backups/<timestamp>_filesystem.tgz       |
    | `--backup-media` | Backs up the pub/media directory.                                                | var/backups/<timestamp>_filesystem_media.tgz |
    | `--backup-db`    | Backs up the Magento 2 database.                                                 | var/backups/<timestamp>_db.gz                |

1. If `--remove-data` is specified, removes the database schema and data defined in the module's `Uninstall` classes.

   For each specified module to uninstall, invokes the `uninstall` method in its `Uninstall` class. This class must inherit from [Magento\Framework\Setup\UninstallInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Setup/UninstallInterface.php){:target="_blank"}.

1. Removes the specified modules from the `setup_module` database table.
1. Removes the specified modules from the module list in the [deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html).
1. Removes code from the codebase using `composer remove`.

    {:.bs-callout-info}
   Uninstalling a module _always_ runs `composer remove`. The `--remove-data` option removes database data and schema defined by the module's `Uninstall` class.

1. Cleans the [cache](https://glossary.magento.com/cache).
1. Updates generated classes.
1. If `--clear-static-content` is specified, cleans [generated static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview).
1. Takes the store out of maintenance mode.

For example, if you attempt to uninstall a module that another module depends on, the following message displays:

```terminal
magento module:uninstall Magento_SampleMinimal
    Cannot uninstall module 'Magento_SampleMinimal' because the following module(s) depend on it:
        Magento_SampleModifyContent
```

One alternative is to uninstall both modules after backing up the Magento module file system, `pub/media` files, and database tables but *not* removing the module's [database schema](https://glossary.magento.com/database-schema) or data:

```bash
bin/magento module:uninstall Magento_SampleMinimal Magento_SampleModifyContent --backup-code --backup-media --backup-db
```

Messages similar to the following display:

```terminal
You are about to remove code and/or database tables. Are you sure?[y/N]y
Enabling maintenance mode
Code backup is starting...
Code backup filename: 1435261098_filesystem_code.tgz (The archive can be uncompressed with 7-Zip on Windows systems)
Code backup path: /var/www/html/magento2/var/backups/1435261098_filesystem_code.tgz
[SUCCESS]: Code backup completed successfully.
Media backup is starting...
Media backup filename: 1435261098_filesystem_media.tgz (The archive can be uncompressed with 7-Zip on Windows systems)
Media backup path: /var/www/html/magento2/var/backups/1435261098_filesystem_media.tgz
[SUCCESS]: Media backup completed successfully.
DB backup is starting...
DB backup filename: 1435261098_db.gz (The archive can be uncompressed with 7-Zip on Windows systems)
DB backup path: /var/www/html/magento2/var/backups/1435261098_db.gz
[SUCCESS]: DB backup completed successfully.
You are about to remove a module(s) that might have database data. Remove the database data manually after uninstalling, if desired.
Removing Magento_SampleMinimal, Magento_SampleModifyContent from module registry in database
Removing Magento_SampleMinimal, Magento_SampleModifyContent from module list in deployment configuration
Removing code from Magento codebase:
Loading composer repositories with package information
Updating dependencies (including require-dev)
  - Removing magento/sample-module-modifycontent (1.0.0)
Removing Magento/SampleModifycontent
  - Removing magento/sample-module-minimal (1.0.0)
Removing Magento/SampleMinimal
Writing lock file
Generating autoload files
Cache cleared successfully.
Generated classes cleared successfully.
Alert: Generated static view files were not cleared. You can clear them using the --clear-static-content option. Failure to clear static view files might cause display issues in the Admin and storefront.
Disabling maintenance mode
```

 {:.bs-callout-info}
Errors display if you attempt to uninstall a module with a dependency on another module. In that case, you cannot uninstall one module; you must uninstall both.

## Roll back the file system, database, or media files {#instgde-cli-uninst-mod-roll}

To restore the Magento codebase to the state at which you backed it up, use the following command:

```bash
bin/magento setup:rollback [-c|--code-file="<filename>"] [-m|--media-file="<filename>"] [-d|--db-file="<filename>"]
```

where `<filename>` is the name of the backup file located in `<magento_root>/var/backups`. To display a list of backup files, enter `magento info:backups:list`

{:.bs-callout-warning}
This command deletes the specified files or the database before restoring them. (For example, the <code>--media-file</code> option deletes media assets under  `pub/media` before restoring from the specified rollback file.) Make sure you have made no changes to the file system or database that you want to keep before using this command.

 {:.bs-callout-info}
To display a list of available backup files, enter `magento info:backups:list`

This command performs the following tasks:

1. Puts the store in maintenance mode.
1. Verifies the backup file name.
1. If you specify a code rollback file:

   a. Verifies the rollback destination locations are writable (note that the `pub/static` and `var` folders are ignored).

   b. Deletes all files and directories under your Magento 2 installation directory.

   c. Extracts the archive file to the destination locations.

1. If you specify a database rollback file:

   a. Drops the entire Magento database.

   b. Restores the database using the database backup.

1. If you specify a media rollback file:

   a. Verifies the rollback destination locations are writable.

   b. Deletes all files and directories under `pub/media`

   c. Extracts the archive file to the destination locations.

1. Takes the store out of maintenance mode.

For example, to restore a code (that is, file system) backup, enter the following commands in the order shown:

*  Display a list of backups:

   ```bash
   magento info:backups:list
   ```

*  Restore a file backup named `1433876616_filesystem.tgz`:

   ```bash
   magento setup:rollback --code-file="1433876616_filesystem.tgz"
   ```

   Messages similar to the following display:

   ```terminal
   Enabling maintenance mode
   Code rollback is starting ...
   Code rollback filename: 1433876616_filesystem.tgz
   Code rollback file path: /var/www/html/magento2/var/backups/1433876616_filesystem.tgz
   [SUCCESS]: Code rollback has completed successfully.
   Disabling maintenance mode
   ```

 {:.bs-callout-info}
To run the `magento` command again without changing directories, you might need to enter `cd pwd`.
