---
layout: default
group: config-guide 
subgroup: 04_CLI
title: Dependency reports
menu_title: Dependency reports
menu_node: 
menu_order: 225
version: 2.0
github_link: config-guide/cli/config-cli-subcommands-depen.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-depen.html
---

<h2 id="config-cli-depend-rpt-overview">Overview of dependency reports</h2>
You can run the following types of reports:

*	Module dependencies: Shows the total number of dependencies between modules and whether the dependencies are hard or soft
*	Circular dependencies: Shows the total number of dependency chains and the number and list of circular dependencies for each module
*	Framework dependencies: Shows the total number of dependencies on the Magento framework by module (including the total number of framework entries for each library)

	A dependency in a comment is also a dependency.

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

<h2 id="config-cli-depend-rpt-run">Run dependency reports</h2>
Command options:

	magento info:dependencies:{show-modules|show-modules-circular|show-framework} [-d|--directory="<path>"] [-o|--output="<path and filename"]

The following table discusses the meanings of this command's options, parameters, and values. 

<table>
	<col width="25%">
	<col width="65%">
	<col width="10%">
	<tbody>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
	<tr>
		<td><p>show-modules</p></td>
		<td><p>Module dependencies report.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>show-modules-circular</p></td>
		<td><p>Circular dependencies report.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>show-framework</p></td>
		<td><p>Framework dependencies report.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>-d|--directory</p></td>
		<td><p>Path to the base directory to start searching for report data.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>-o|--output</p></td>
		<td><p>Specifies the absolute file system path and file name of the comma-separated value (csv) output file for the report.</p>
		</td>
		<td>
			<p>No</p>
		</td>
	</tr>
	</tbody>
</table>

### Sample module dependencies report
Following is a portion of the output for a sample module dependencies report:

	"","All","Hard","Soft"
	"Total number of dependencies","602","587","15"

	"Dependencies for each module:","All","Hard","Soft"
	"magento/module-cron","2","2","0"
	" -- magento/module-config","","1","0"
	" -- magento/module-store","","1","0"

	"magento/module-catalog-rule","8","8","0"
	" -- magento/module-store","","1","0"
	" -- magento/module-rule","","1","0"
	" -- magento/module-catalog","","1","0"
	" -- magento/module-customer","","1","0"
	" -- magento/module-backend","","1","0"
	" -- magento/module-eav","","1","0"
	" -- magento/module-indexer","","1","0"
	" -- magento/module-import-export","","1","0"

### Sample circular dependencies report
Following is a portion of the output for a sample circular dependencies report:

	"Circular dependencies:","Total number of chains"
	"","848"

	"Circular dependencies for each module:",""
	"magento/module-config","70"
	"magento/module-config->magento/module-store->magento/module-directory->magento/module-config"
	"magento/module-config->magento/module-store->magento/module-config"
	"magento/module-config->magento/module-cron->magento/module-config"
	"magento/module-config->magento/module-email->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-theme->magento/module-customer->magento/module-eav->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-reports->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-sales->magento/module-catalog->magento/module-theme->magento/module-eav->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-sales->magento/module-catalog->magento/module-log->magento/module-eav->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-sales->magento/module-customer->magento/module-checkout->magento/module-catalog-inventory->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-sales->magento/module-customer->magento/module-checkout->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-sales->magento/module-customer->magento/module-theme->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-sales->magento/module-payment->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-sales->magento/module-checkout->magento/module-customer->magento/module-review->magento/module-catalog->magento/module-themeax->magento/module-config"
	"magento/module-config->magento/module-backend->magento/module-sales->magento/module-checkout->magento/module-customer->magento/module-review->magento/module-catalog->magento/module-catalog-rule->magento/module-rule->magento/module-eav->magento/module-config"

### Sample framework dependencies report
Following is a portion of the output for a sample framework dependencies report:

	"Dependencies of framework:","Total number"
	"","111"

	"Dependencies for each module:",""
	"Magento\Cron","1"
	" -- Magento\Framework","143"

	"Magento\CatalogRule","1"
	" -- Magento\Framework","234"

	"Magento\Webapi","2"
	" -- Magento\Framework","347"
	" -- Magento\Server","1"

	"Magento\Checkout","1"
	" -- Magento\Framework","759"

	"Magento\Reports","1"
	" -- Magento\Framework","553"

#### Related topics

*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
