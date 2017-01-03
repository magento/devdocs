---
layout: default
group: config-guide 
subgroup: 04_CLI
title: Get started with command-line configuration
menu_title: Get started with command-line configuration
menu_node: 
menu_order: 2
version: 2.1
github_link: config-guide/cli/config-cli-subcommands.md
---

  
#### Contents

See one of the following sections:

*	<a href="#config-install-cli-prereq">Before you configure the Magento application</a>
*	<a href="#config-install-cli-first">First steps</a>
*	<a href="#config-cli-summary">Command summary</a>
*	<a href="#config-cli-help">Help commands</a>
*	<a href="#config-cli-subcommands-common">Common arguments</a>
*	<a href="#config-cli-subcommands">Commands</a>

<h2 id="config-install-cli-prereq">Before you configure the Magento application</h2>
{% include install/before-you-begin-cli.html %}

<h2 id="config-cli-before">First steps</h2>
<ol><li>Log in to the Magento server as, or switch to, the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.</li>
<li>Change to the following directory:<br>
<pre>cd &lt;your Magento install dir>/bin</pre>
Examples:
<ul><li>Ubuntu: <code>cd /var/www/magento2/bin</code></li>
<li>CentOS: <code>cd /var/www/html/magento2/bin</code></li>
</ul>
</li>
</ol>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You can run the commands in any of the following ways:</p>
<ul><li><code>php magento &lt;command></code></li>
<li><code>magento &lt;command></code></li></ul></span>
</div>

<h2 id="config-cli-summary">Command summary</h2>
The following table summarizes the available commands. Commands are shown in summary form only; for more information about a command, click the link in the Command column.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Before you run any of these commands, you must either <a href="{{page.baseurl}}install-gde/install/cli/install-cli.html">install the Magento application</a> or <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html">enable some modules</a>.</p></span>
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
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html">magento setup:cache:{enable|disable|clean|flush|status}</a></td>
		<td><p>Manages the cache</p></td>
	</tr>
	<tr>
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">magento setup:indexer:{status|show-mode|set-mode|reindex|info}</a></td>
		<td><p>Manages the indexers</p></td>
	</tr>
	
	<tr>
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html">magento cron:run</a></td>
		<td><p>Runs Magento cron jobs</p></td>
	</tr>
	<tr>
		<td><a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-compiler.html">magento setup:di:compile</a></td>
		<td><p>Compiles all non-existent proxies and factories; and pre-compiles class definitions, inheritance information, and plug-in definitions for one store and website.</p></td>
	</tr>
	<tr>
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-depen.html">magento info:dependencies:{show-modules|show-modules-circular|show-framework}e</a></td>
		<td><p>Module dependencies, circular dependencies, and Magento framework dependencies.</p></td>
	</tr>
	<tr>
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-i18n.html">magento i18n:{collect-phrases|pack}</a></td>
		<td><p>Creates a translation dictionary or a translation package</p></td>
	</tr>
	<tr>
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html">magento setup:static-content:deploy</a></td>
		<td><p>Deploys static view files</p></td>
	</tr>
	<tr>
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-less-sass.html">magento dev:source-theme:deploy</a></td>
		<td><p>Creates CSS from LESS</p></td>
	</tr>
	<tr>
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-test.html">magento dev:tests:run</a></td>
		<td><p>Runs automated tests</p></td>
	</tr>
	<tr>
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-layout-xml.html">magento dev:xml:convert</a></td>
		<td><p>Update your layout XML files to match the new Extensible Stylesheet Language Transformations (XSLT) stylesheet</p></td>
	</tr>
	<tr>
		<td><a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-perf-data.html">magento setup:perf:generate-fixtures</a></td>
		<td><p>Generate data to use for performance testing.</p></td>
	</tr>
	<tr>
		<td><a href="{{page.baseurl}}install-gde/install/sample-data.html#instgde-install-sample-enable-after">magento sampledata:install</a></td>
		<td><p>Installs optional Magento sample data after you install the Magento application.</p>
			<p>For more details about Magento sample data, see <a href="{{page.baseurl}}install-gde/install/sample-data.html">Optional Magento sample data</a>.</p></td>
	</tr>
	
	</tbody>
</table>

<h2 id="config-cli-help">Help commands</h2>
{% include install/cli_help-commands.html %}

<h2 id="config-cli-subcommands-common">Common arguments</h2>
{% include install/cli_common-commands.html %}


<h2 id="config-cli-subcommands">Commands</h2>
The following sections discuss the available commands. 

*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
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

