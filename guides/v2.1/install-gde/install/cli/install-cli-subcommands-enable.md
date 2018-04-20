---
layout: default
group: install_cli
title: Enable or disable modules
version: 2.1
github_link: install-gde/install/cli/install-cli-subcommands-enable.md
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-subcommands-enable.html
  - /guides/v2.0/install-gde/install/install-cli-subcommands-enable.html
functional_areas:
  - Install
  - System
  - Setup
---


<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-enable-disable-prereq">Prerequisites</h2>
This command has no prerequisites.

<h2 id="instgde-cli-subcommands-enable-disable">Module enable, disable</h2>
To enable or disable available modules, use the following command:

	magento module:enable [-c|--clear-static-content] [-f|--force] [--all] <module-list>
	magento module:disable [-c|--clear-static-content] [-f|--force] [--all] <module-list>

where

*	`<module-list>` is a space-delimited list of modules to enable or disable. If any {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} name contains special characters, enclose the name in either single or double quotes.
*	`--all` to enable or disable all modules at the same time.
*	`-f` or `--force` to force a module to be enabled or disabled despite dependencies. Before you use this option, see <a href="#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.
*	`-c` or `--clear-static-content` cleans <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a>.

	Failure to clear static view files might result in issues if there are multiple files with the same name and you don't clear all of them.

	In other words, because of <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html">static file fallback</a> rules, if you do not clear static files and there is more than one file named `logo.gif` that are different, fallback might cause the wrong file to display.

Use the following command to list enabled and disabled modules:

	magento module:status

For example, to disable the Weee module, enter:

	magento module:disable Magento_Weee

For important information about enabling and disabling modules, see <a href="#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.

<h2 id="instgde-cli-subcommands-enable-update">Update the database</h2>
If you enabled one or more modules, run the following command to update the database:

	magento setup:upgrade

<h2 id="instgde-cli-subcommands-enable-modules">About enabling and disabling modules</h2>
{% include install/enable-disable-modules.html %}