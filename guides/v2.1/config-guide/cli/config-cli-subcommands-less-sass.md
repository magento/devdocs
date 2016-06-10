---
layout: default
group: config-guide
subgroup: 04_CLI
title: Create symlinks to LESS files
menu_title: Create symlinks to LESS files
menu_node: 
menu_order: 350
version: 2.1
github_link21: config-guide/cli/config-cli-subcommands-less-sass.md
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-less-sass">Create LESS files</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

<h2 id="config-cli-subcommands-less-sass">Create LESS files</h2>
This command enables you to create symlinks to LESS files.

Command options:

	magento dev:source-theme:deploy less <file> [--locale="<locale>" ... "<locale>"] [--area="{adminhtml|frontend}"] [--theme="<theme name>" ... 
	"<theme name>"] 

The following table discusses the meanings of this command's parameters and values. 

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
		<td><p><code>less</code></p></td>
		<td><p>Currently, LESS is the only file type supported.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>&lt;file></p></td>
		<td><p>Space-separated list of CSS files to convert to LESS without the <code>.css</code> extension. (Default is <code>css/styles-m</code>)</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--locale</p></td>
		<td><p>Space-separated list of locale codes.</p>
			<p>To display the list of locale codes, enter <code>magento info:language:list</code></p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--area</p></td>
		<td><p>Space-separated list of areas (<code>adminhtml</code> for the administrative area, <code>frontend</code> for the storefront).</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--theme</p></td>
		<td><p>Space-separated list of theme names in <code>&lt;VendorName>/&lt;theme name></code> format. For example, <code>Magento/blank</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	
	</tbody>
</table>

For example, to create LESS files for the frontend theme named `VendorName/themeName` in the `en_US` locale using a CSS file named `<your Magento install dir>/pub/static/frontend/VendorName/themeName/en_US/css/styles-l.css`, enter the following command:

	magento dev:source-theme:deploy less css/styles-l --locale="en_US" --area="frontend" --theme="VendorName/themeName"

The following messages display to confirm success:

	Gathering css/styles-l.less sources.
	Successfully processed LESS files

#### Related topics

*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
