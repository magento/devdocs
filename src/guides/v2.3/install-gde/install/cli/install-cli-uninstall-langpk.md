---
group: installation-guide
title: Uninstall language packages
functional_areas:
  - Install
  - System
  - Setup
---

## Overview of uninstalling language packages {#instgde-cli-uninst-lgpk-over}

This section discusses how to uninstall one or more language packages, optionally including the language packages' code from the file system. You can create backups first so you can restore the data at a later time.

This command uninstalls *only* language packages that are specified in `composer.json`; in other words, language packages that are provided as [Composer](https://glossary.magento.com/composer) packages. If your [language package](https://glossary.magento.com/language-package) is not a Composer package, you must uninstall it manually by removing language package code from the file system.

You can restore backups at any time using the [magento setup:rollback]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll) command.

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Uninstall language packages {#instgde-cli-uninst-lgpk-uninst}

Command usage:

```bash
bin/magento i18n:uninstall [-b|--backup-code] {language package name} ... {language package name}
```

The language package uninstall command performs the following tasks:

1. Checks for dependencies; if so, the command terminates.

   To work around this, you can either uninstall all dependent language packages at the same time or you can uninstall the depending language packages first.

1. If `--backup code` is specified, backs up the Magento file system (excluding `var` and `pub/static` directories) to `var/backups/<timestamp>_filesystem.tgz`
1. Removes language packages files from the codebase using `composer remove`.
1. Cleans the [cache](https://glossary.magento.com/cache).

For example, if you attempt to uninstall a language package that another language package depends on, the following message displays:

```terminal
Cannot uninstall vendorname/language-en_us because the following package(s) depend on it:
      vendorname/language-en_gb
```

One alternative is to uninstall both language packages after backing up the Magento codebase:

```bash
bin/magento i18n:uninstall vendorname/language-en_us vendorname/language-en_gb --backup-code
```

Messages similar to the following display:

```terminal
Code backup is starting...
Code backup filename: 1435261098_filesystem_code.tgz (The archive can be uncompressed with 7-Zip on Windows systems)
Code backup path: /var/www/html/magento2/var/backups/1435261098_filesystem_code.tgz
[SUCCESS]: Code backup completed successfully.
Loading composer repositories with package information
Updating dependencies (including require-dev)
  - Removing vendorname/language-en_us (dev-master)
Removing Magento/LanguageEn_us
  - Removing vendorname/language-en_br (dev-master)
  - Removing vendorname/language-en_br (dev-master)
Writing lock file
Generating autoload files
```
