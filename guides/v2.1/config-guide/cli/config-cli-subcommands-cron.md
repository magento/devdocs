---
layout: default
group: config-guide
subgroup: 04_CLI
title: Configure and run cron
menu_title: Configure and run cron
menu_node:
menu_order: 100
version: 2.1
github_link: config-guide/cli/config-cli-subcommands-cron.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-cron.html
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of cron {#config-cli-cron-overview}
{% include config/cron-overview.md %}

To run cron in a web browser, see <a href="{{page.baseurl}}/config-guide/secy/secy-cron.html">Secure cron.php to run in a browser</a>

## Run cron from the command line {#config-cli-cron-group-run}
Command options:

	bin/magento cron:run [--group="<cron group name>"]

Where `--group` specifies the cron group to run. Omit this option to run cron for all groups.

To set up custom cron jobs and groups, see [Configure custom cron jobs and cron groups]({{ page.baseurl}}/config-guide/cron/custom-cron.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You must run cron twice: the first time to discover tasks to run and the second time to run the tasks themselves. The second cron run must occur on or after the `scheduled_at` time for every task.
</div>

## Run cron in the background {#config-cli-cron-bkg}
This section discusses how to run all Magento cron jobs every minute, which is the recommended interval for both {{site.data.var.ce}} and {{site.data.var.ee}}.

Run Magento cron jobs as the [Magento file system owner]({{page.baseurl}}/install-gde/prereq/file-sys-perms-over.html).

{% include config/setup-cron.md %}

#### Related topics

-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
