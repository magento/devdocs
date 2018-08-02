---
group: config-guide
subgroup: 04_CLI
title: Get started with command-line configuration
menu_title: Get started with command-line configuration
menu_node:
menu_order: 2
version: 2.1
github_link: config-guide/cli/config-cli-subcommands.md
functional_areas:
  - Configuration
  - System
  - Setup
---

## Before you configure the Magento application {#config-install-cli-prereq}
{% include install/before-you-begin-cli.html %}

## First steps {#config-cli-before}
1.  Log in to the Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
2.  Change to the following directory:

        cd <your Magento install dir>/bin

    Examples:

      - Ubuntu: `cd /var/www/magento2/bin`
      - CentOS: `cd /var/www/html/magento2/bin`

<div class="bs-callout bs-callout-tip" markdown="1">
You can run the commands in any of the following ways:

-   `php magento <command>`
-   `./magento <command>`
-   `magento <command>` (after [adding](http://unix.stackexchange.com/questions/117467/how-to-permanently-set-environmental-variables){:target="\_blank"} `<your Magento install dir>/bin` to your system `PATH`)
</div>

## Command summary {#config-cli-summary}
The following table summarizes the available commands. Commands are shown in summary form only; for more information about a command, click the link in the Command column.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Before you run any of these commands, you must either [install the Magento application]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html) or [enable some modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html).
</div>

<table>
	<col width="40%">
  	<col width="30%">
  	<col width="30%">
	<tbody>
		<tr>
			<th>Command</th>
			<th>Description</th>
		</tr>

	<tr>
		<td>[magento cache:{enable|disable|clean|flush|status}]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)</td>
		<td><p>Manages the cache</p></td>
	</tr>
	<tr>
		<td>[magento indexer:{status|show-mode|set-mode|reindex|info}]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)</td>
		<td><p>Manages the indexers</p></td>
	</tr>

	<tr>
		<td>[magento cron:run]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)</td>
		<td><p>Runs Magento cron jobs</p></td>
	</tr>
	<tr>
		<td>[magento setup:di:compile]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)</td>
		<td><p>Compiles all non-existent proxies and factories; and pre-compiles class definitions, inheritance information, and plug-in definitions for one store and website.</p></td>
	</tr>
	<tr>
		<td>[magento info:dependencies:{show-modules|show-modules-circular|show-framework}]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)</td>
		<td><p>Module dependencies, circular dependencies, and Magento framework dependencies.</p></td>
	</tr>
	<tr>
		<td>[magento i18n:{collect-phrases|pack}]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html)</td>
		<td><p>Creates a translation dictionary or a translation package</p></td>
	</tr>
	<tr>
		<td>[magento setup:static-content:deploy]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)</td>
		<td><p>Deploys static view files</p></td>
	</tr>
	<tr>
		<td>[magento dev:source-theme:deploy]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)</td>
		<td><p>Creates CSS from LESS</p></td>
	</tr>
	<tr>
		<td>[magento dev:tests:run]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)</td>
		<td><p>Runs automated tests</p></td>
	</tr>
	<tr>
		<td>[magento dev:xml:convert]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html)</td>
		<td><p>Update your layout XML files to match the new Extensible Stylesheet Language Transformations (XSLT) stylesheet</p></td>
	</tr>
	<tr>
		<td>[magento setup:perf:generate-fixtures]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html)</td>
		<td><p>Generate data to use for performance testing.</p></td>
	</tr>
	<tr>
		<td>[magento sampledata:install]({{ page.baseurl }}/install-gde/install/sample-data.html#instgde-install-sample-enable-after)</td>
		<td><p>Installs optional Magento sample data after you install the Magento application.</p>
			<p>For more details about Magento sample data, see [Optional Magento sample data]({{ page.baseurl }}/install-gde/install/sample-data.html).</p></td>
	</tr>

	</tbody>
</table>

## Help commands {#config-cli-help}
{% include install/cli_help-commands.html %}

## Common arguments {#config-cli-subcommands-common}
{% include install/cli_common-commands.html %}

## Commands {#config-cli-subcommands}
The following sections discuss the available commands.

-   [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)
-   [Manage the indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)
-   [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
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
