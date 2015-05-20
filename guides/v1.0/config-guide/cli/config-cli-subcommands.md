---
layout: default
group: config-guide 
subgroup: CLI
title: Get started with command-line configuration
menu_title: Get started with command-line configuration
menu_node: 
menu_order: 2
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
<ol><li>Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.</li>
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
<li><code>./magento &lt;command></code></li></ul></span>
</div>

<h2 id="config-cli-summary">Command summary</h2>
The following table summarizes the available commands. Commands are shown in summary form only; for more information about a command, click the link in the Command column.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Before you run any of these commands, you must either <a href="{{ site.gdeurl }}install-gde/install/install-cli.html">install the Magento application</a> or <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">enable some modules</a>.</p></span>
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
		<td><a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">./magento setup:cache:{enable|disable|clean|flush|status}</a></td>
		<td><p>Manages the cache</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">./magento setup:indexer:{status|show-mode|set-mode|reindex|info}</a></td>
		<td><p>Manages the indexers</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">./magento setup:di:compile-multi-tenant</a></td>
		<td><p>Use only if you have multiple independent Magento applications (in other words, one common Magento code base but more than one independent instance of the Magento application).</p>
		<p>Compiles all non-existent proxies and factories; and pre-compiles class definitions, inheritance information, and plugin definitions for multiple stores or websites.</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">./magento setup:di:compile</a></td>
		<td><p>Use if you have one instance of the Magento application.</p>
			<p>Compiles all non-existent proxies and factories; and pre-compiles class definitions, inheritance information, and plugin definitions for one store and website.</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-log.html">./magento log:{status|clean}</a></td>
		<td><p>Clears the logs</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">./magento i18n:{collect-phrases|pack}</a></td>
		<td><p>Creates a translation dictionary or a translation package</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">./magento setup:static-content:deploy</a></td>
		<td><p>Deploys static view files</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">./magento dev:css:deploy</a></td>
		<td><p>Creates CSS from LESS</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">./magento dev:tests:run</a></td>
		<td><p>Runs automated tests</p></td>
	</tr>
	
	</tbody>
</table>

<h2 id="config-cli-help">Help commands</h2>
{% include install/cli_help-commands.html %}

<h2 id="config-cli-subcommands-common">Common arguments</h2>
{% include install/cli_common-commands.html %}


<h2 id="config-cli-subcommands">Commands</h2>
The following sections discuss the available commands. 

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">Multi-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">Single-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-log.html">Clean the logs</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create LESS from CSS</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run tests</a>
