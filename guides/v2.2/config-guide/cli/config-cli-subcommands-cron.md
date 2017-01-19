---
layout: default
group: config-guide
subgroup: 04_CLI
title: Configure and run cron
menu_title: Configure and run cron
menu_node:
menu_order: 100
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-cron.md
---

## Overview of cron {#config-cli-cron-overview}

{% include config/cron-overview.md %}

To run cron in a web browser, see <a href="{{page.baseurl}}config-guide/secy/secy-cron.html">Secure cron.php to run in a browser</a>

## First steps {#config-cli-before}

{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

## Create or remove the Magento crontab
This section discusses how to create or remove your Magento crontab (that is, the configuration for Magento cron jobs).

{% include config/setup-cron_2.2_about.md %}

{% include config/setup-cron_2.2_how-to.md %}

### Remove the Magento crontab {#config-cron-remove}
You should remove the Magento crontab only before uninstalling the Magento application.

To remove the Magento crontab:

1.	Log in as or switch to the [Magento file system owner]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html).
2.	Change to the Magento installation directory.
3.	Enter the following command:

    	php bin/magento cron:remove

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This command has no effect on cron jobs outside the `#~ MAGENTO START` and `#~ MAGENTO END` comments in your crontab.
</div>

## Run cron from the command line {#config-cli-cron-group-run}
Command options:

	magento cron:run [--group="<cron group name>"]

where `--group` specifies the cron group to run (omit this option to run cron for all groups)

To set up custom cron jobs and groups, see [Configure custom cron jobs and cron groups]({{ page.baseurl }}config-guide/cron/custom-cron.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You must run cron twice: the first time to discover tasks to run and the second time to run the tasks themselves.
</div>


#### Related topics

*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
