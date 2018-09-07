---
group: configuration-guide
subgroup: 04_CLI
title: Configure and run cron
menu_title: Configure and run cron
menu_node:
menu_order: 100
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-cron.html
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of cron {#config-cli-cron-overview}
{% include config/cron-overview.md %}

To run cron in a web browser, see [Secure cron.php to run in a browser]({{ page.baseurl }}/config-guide/secy/secy-cron.html)

## Run cron from the command line {#config-cli-cron-group-run}

Command options:

	bin/magento cron:run [--group="<cron group name>"]

Where `--group` specifies the cron group to run. Omit this option to run cron for all groups.

To set up custom cron jobs and groups, see [Configure custom cron jobs and cron groups]({{ page.baseurl }}/config-guide/cron/custom-cron.html).

{: .bs-callout .bs-callout-info }
You must run cron twice: the first time to discover tasks to run and the second time to run the tasks themselves. The second cron run must occur on or after the `scheduled_at` time for every task.

## Run cron in the background {#config-cli-cron-bkg}

This section discusses how to run all Magento cron jobs every minute, which is the recommended interval for both {{site.data.var.ce}} and {{site.data.var.ee}}.

Run Magento cron jobs as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

{% include config/setup-cron.md %}

#### Related topics

-   [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)
-   [Manage the indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)
-   [Code compiler]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)
-   [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html)
-   [URN highlighter]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html)
-   [Dependency reports]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)
-   [Translation dictionaries and language packages]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html)
-   [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)
-   [Create symlinks to LESS files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)
-   [Run unit tests]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)
-   [Convert layout XML files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html)
-   [Generate data for performance testing]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html)
