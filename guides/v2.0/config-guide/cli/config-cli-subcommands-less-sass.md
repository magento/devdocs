---
layout: default
group: config-guide
subgroup: 04_CLI
title: Create symlinks to LESS files
menu_title: Create symlinks to LESS files
menu_node: 
menu_order: 350
github_link: config-guide/cli/config-cli-subcommands-less-sass.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-less-sass.html
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-less-sass">Create LESS files</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

<h2 id="config-cli-subcommands-less-sass">Create LESS files</h2>
This command enables you to create symlinks to LESS files.

Command options:

	magento dev:source-theme:deploy [--type="..."] [--locale="..."] [--area="..."] [--theme="..."] [file1] ... [fileN] 

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
		<td><p>--type</p></td>
		<td><p>Type of source files: [less] (default: "less")</p>
			<p>Currently, LESS is the only file type supported.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--locale</p></td>
		<td><p>Locale code.</p>
			<p>To display the list of locale codes, enter <code>magento info:language:list</code></p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--area</p></td>
		<td><p>Area (<code>adminhtml</code> for the administrative area, <code>frontend</code> for the storefront).</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--theme</p></td>
		<td><p>Theme name in <code>&lt;VendorName>/&lt;theme name></code> format. For example, <code>Magento/blank</code> or <code>Magento/backend</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>&lt;file></p></td>
		<td><p>Space-separated list of CSS files to convert to LESS without the <code>.css</code> extension. (Default is <code>css/styles-m css/styles-l</code>, for adminhtml type <code>css/styles css/styles-old</code>)</p></td>
		<td><p>No</p></td>
	</tr>
	</tbody>
</table>

For example, to create LESS files for the frontend theme named `VendorName/themeName` in the `en_US` locale using a CSS file named `<your Magento install dir>/pub/static/frontend/VendorName/themeName/en_US/css/styles-l.css`, enter the following command:

	magento dev:source-theme:deploy --type="less" --locale="en_US" --area="frontend" --theme="VendorName/themeName" css/styles-l

The following messages display to confirm success:

	Processed Area: frontend, Locale: en_US, Theme: VendorName/themeName, File type: less.
	-> css/styles-l.less
	Successfully processed.

To create LESS files for the adminhtml, enter the following command:

	magento dev:source-theme:deploy --locale="en_US" --area="adminhtml" --theme="Magento/backend" css/styles css/styles-old

#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
