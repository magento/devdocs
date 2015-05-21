---
layout: default
group:  config-guide
subgroup: CLI
title: Deploy static view files
menu_title: Deploy static view files
menu_node: 
menu_order: 20
github_link: config-guide/cli/config-cli-subcommands-static-view.md
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-static-overview">Overview of static view files deployment</a>
*	<a href="#config-cli-subcommands-xlate-dict">Deploy static view files</a>
*	<a href="#view-file-trouble">Troubleshooting the static view files deployment tool</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="config-cli-static-overview">Overview of static view files deployment</h2>
The static view files deployment tool enables you to write static files to the Magento docroot when the Magento software is set for <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>.

Because static view files are not deployed on the fly in production mode, you must write static view files to the Magento docroot manually; after that, you can restrict permissions to limit your vulnerabilities and to prevent accidental or malicious overwriting of files.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Static view files must be owned by the web server user; otherwise, Magento might have issues accessing the files. One way to do this in a development system is to run the tool as the web server user. For more information, see <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.</p></span>
</div>

<h2 id="config-cli-subcommands-xlate-dict">Deploy static view files</h2>
To deploy static view files:

1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.

	In a more secure environment, you should make the web server user the owner of the files after running the tool.
2.	Delete the contents of `<your Magento install dir>/pub/static`.
3.	Run the static view files deployment tool from the `<your Magento install dir>/dev/tools/Magento/Tools/View` directory.
<!-- 4.	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files. -->
	
	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>If you enable static view file merging in the Magento Admin, the <code>pub/static</code> directory system must be writable.</p></span>
	</div>

Command options:

	magento setup:static-content:deploy <lang> ... <lang> [--dry-run] 

The following table discusses the meanings of this command's parameters and values. 

<table>
	<col width="15%">
  	<col width="65%">
  	<col width="25%">
	<tbody>
		<tr>
			<th>Option</th>
			<th>Description</th>
			<th>Required?</th>
		</tr>
	<tr>
		<td>&lt;lang></td>
		<td><p>Space-separated list of <a href="http://www.loc.gov/standards/iso639-2/php/code_list.php" target="_blank">ISO-636</a> language codes for which to output static view files. (Default is <code>en_US</code>.)</p>
		<p>You can find the list by running <code>magento info:language:list</code>.</p></td>
	<td><p>No</p></td>
	</tr>
		<tr>
		<td>--dry-run</td>
		<td><p>Include to view the files output by the tool without outputting anything.</p></td>
		<td><p>No</p></td>
	</tr>
	</tbody>
</table>

For example, to deploy static view files for the `pt_BR` language, enter

	magento --ansi setup:static-content:deploy pt_BR

Following are some sample messages that display to indicate successful deployment:

	Requested languages: pt_BR
	=== frontend -> Magento/luma -> pt_BR ===
	... progress indicator ...
	Successful: 1613 files; errors: 0

	=== frontend -> Magento/blank -> pt_BR ===
	... progress indicator ...
	Successful: 1620 files; errors: 0

	=== adminhtml -> Magento/backend -> pt_BR ===
	... progress indicator ...
	Successful: 1626 files; errors: 0

	=== Minify templates ===
	... progress indicator ...
	Successful: 858 files modified
	---
	New version of deployed files: 1430773903

<h2 id="view-file-trouble">Troubleshooting the static view files deployment tool</h2>
<a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">Install the Magento software first</a>; otherwise, you cannot run the static view files deployment tool.

**Symptom**: The following error is displayed when you run the static view files deployment tool:

	ERROR: You need to install the Magento application before running this utility.

**Solution**:

Use the following steps:

1.	Install the Magento software in any of the following ways:

	*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Setup wizard</a>

1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.

	In a more secure environment, you should make the web server user the owner of the files after running the tool.
2.	Delete the contents of `<your Magento install dir>/pub/static` directory.
3.	<a href="#config-cli-subcommands-xlate-dict">Run the static view files deployment tool</a>.
<!-- 4.	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files. -->
	
	<!-- <div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>If you enable static view file merging in the Magento Admin, the <code>pub/static</code> directory system must be writable.</p></span>
	</div> -->



#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">Multi-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">Single-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-log.html">Clean the logs</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create LESS from CSS</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run tests</a>