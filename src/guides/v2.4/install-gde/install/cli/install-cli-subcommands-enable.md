---
group: installation-guide
title: Enable or disable modules
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-enable-disable-prereq}

This command has no prerequisites.

## Module status {#instgde-cli-subcommands-status}

Use the following command to list enabled and disabled modules:

```bash
bin/magento module:status [--enabled] [--disabled] <module-list>
```

where

*  `--enabled` lists all enabled modules.
*  `--disabled` lists all disabled modules.
*  `<module-list>` is a space-delimited list of modules to check the status. If any [module](https://glossary.magento.com/module) name contains special characters, enclose the name in either single or double quotes.

## Module enable, disable {#instgde-cli-subcommands-enable-disable}

To enable or disable available modules, use the following command:

```bash
bin/magento module:enable [-c|--clear-static-content] [-f|--force] [--all] <module-list>
```

```bash
bin/magento module:disable [-c|--clear-static-content] [-f|--force] [--all] <module-list>
```

where

*  `<module-list>` is a space-delimited list of modules to enable or disable. If any [module](https://glossary.magento.com/module) name contains special characters, enclose the name in either single or double quotes.
*  `--all` to enable or disable all modules at the same time.
*  `-f` or `--force` to force a module to be enabled or disabled despite dependencies. Before you use this option, see [About enabling and disabling modules](#instgde-cli-subcommands-enable-modules).
*  `-c` or `--clear-static-content` cleans [generated static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview).

   Failure to clear static view files might result in issues if there are multiple files with the same name and you do not clear all of them.

   In other words, because of the [static file fallback]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html) rules, if you do not clear static files and there is more than one file named `logo.svg` that are different, fallback might cause the wrong file to display.

For example, to disable the Weee module, enter:

```bash
bin/magento module:disable Magento_Weee
```

For important information about enabling and disabling modules, see [About enabling and disabling modules](#instgde-cli-subcommands-enable-modules).

## Update the database {#instgde-cli-subcommands-enable-update}

If you enabled one or more modules, run the following command to update the database:

```bash
bin/magento setup:upgrade
```

Then clean the cache:

```bash
bin/magento cache:clean
```

## About enabling and disabling modules {#instgde-cli-subcommands-enable-modules}
{% include install/enable-disable-modules.md %}
