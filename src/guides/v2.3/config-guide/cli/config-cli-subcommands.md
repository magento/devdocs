---
group: configuration-guide
title: Get started with command-line configuration
functional_areas:
  - Configuration
  - System
  - Setup
---

## Before you configure the Magento application {#config-install-cli-prereq}
{% include install/before-you-begin-cli.md %}

## First steps {#config-cli-before}

1. Log in to the Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Change to the following directory:

   ```bash
   cd <magento_root>/bin
   ```

   Examples:

   -  Ubuntu: `cd /var/www/magento2/bin`
   -  CentOS: `cd /var/www/html/magento2/bin`

You can run the commands in any of the following ways:

-  `php magento <command>`
-  `./magento <command>`
-  `magento <command>` (after [adding](http://unix.stackexchange.com/questions/117467/how-to-permanently-set-environmental-variables) `<magento_root>/bin` to your system `PATH`)

## Command summary {#config-cli-summary}

The following table summarizes some of the available commands. Commands are shown in summary form only; for more information about a command, click the link in the Command column.

{:.bs-callout-info}
Before you run any of these commands, you must either [install the Magento application]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html) or [enable some modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html).

|Command|Description|
|--- |--- |
|[`magento cache:{enable/disable/clean/flush/status}`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)|Manages the cache|
|[`magento indexer:{status/show-mode/set-mode/reindex/info/reset/show-dimensions-mode/set-dimensions-mode}`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)|Manages the indexers|
|[`magento cron:run`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)|Runs Magento cron jobs|
|[`magento setup:di:compile`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)|Compiles all non-existent proxies and factories; and pre-compiles class definitions, inheritance information, and plug-in definitions for one store and website.|
|[`magento info:dependencies:{show-modules/show-modules-circular/show-framework}`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)|Module dependencies, circular dependencies, and Magento framework dependencies.|
|[`magento i18n:{collect-phrases/pack/uninstall}`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html)|Creates a translation dictionary or a translation package|
|[`magento setup:static-content:deploy`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)|Deploys static view files|
|[`magento dev:source-theme:deploy`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)|Creates CSS from LESS|
|[`magento dev:tests:run`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)|Runs automated tests|
|[`magento dev:xml:convert`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html)|Update your layout XML files to match the new Extensible Stylesheet Language Transformations (XSLT) stylesheet|
|[`magento setup:perf:generate-fixtures`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html)|Generate data to use for performance testing.|
|[`magento sampledata:install`]({{ page.baseurl }}/install-gde/install/sample-data.html)|Installs optional Magento sample data after you install the Magento application.<br><br>For more details about Magento sample data, see [Optional Magento sample data]({{ page.baseurl }}/install-gde/install/sample-data.html).|
|[`magento config:{set/sensitive:set/show/}`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html)|Manages backend configurations|
|[`bin/magento admin:user:{create/unlock}`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html)| Creates/edits/unlocks admin users.|
|[`bin/magento dev:template-hints:{enable/disable`}]({{ page.baseurl }}/frontend-dev-guide/themes/debug-theme.html)|Enables/disables developer template hints.|

## Help commands {#config-cli-help}

{% include install/cli_help-commands.md %}

## Common arguments {#config-cli-subcommands-common}

{% include install/cli_common-commands.md %}
