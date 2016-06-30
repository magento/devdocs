---
layout: default
group:  config-guide
subgroup: 04_CLI
title: Deploy static view files
menu_title: Deploy static view files
menu_node: 
menu_order: 300
version: 2.0
github_link: config-guide/cli/config-cli-subcommands-static-view.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-static-view.html
---


#### Contents

*	<a href="#config-cli-static-overview">Overview of static view files deployment</a>
*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-xlate-dict">Deploy static view files</a>
*	<a href="#view-file-trouble">Troubleshooting the static view files deployment tool</a>

<h2 id="config-cli-static-overview">Overview of static view files deployment</h2>
The static view files deployment command enables you to write static files to the Magento file system when the Magento software is set for <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>.

The term *static view file* refers to the following:

*	"Static" means it can be cached for a site (that is, the file is not dynamically generated). Examples include images and CSS generated from LESS.
*	"View" refers to presentation layer (from MVC).

Static view files are located in the `<your Magento install dir>/pub/static` directory, and some are cached in the `<your Magento install dir>/var/view_preprocessed` directory as well.

Static view files deployment is affected by Magento modes as follows:

*	<a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-developer">Developer mode</a>: Magento generates them on demand, but the rest are cached in a file for speed of access.
*	<a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-default">Default</a> and <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production">production</a> modes: Static files are *not* generated or cached. 

	You must write static view files to the Magento file system manually using the command discussed in this topic; after that, you can restrict permissions to limit your vulnerabilities and to prevent accidental or malicious overwriting of files.

<div class="bs-callout bs-callout-warning">
  <p><em>Developer mode only</em>: When you install or enable a new module, it might load new JavaScript, CSS, layouts, and so on. To avoid issues with static files, you must clean the old files to make sure you get all the changes for the new module.</p>
  <p>You can clean generated static view files in any of the following ways:</p>
  <ul><li>Manually by clearing the <code>pub/static</code> and <code>var/view_preprocessed</code> directories and subdirectories. <em>except</em> for <code>pub/static/.htaccess</code>.<br><br>
  	To clear the <code>pub/static</code> directory of all files except <code>.htaccess</code>, enter the following command:<br>
  	<code>find . -depth -name .htaccess -prune -o -delete</code></li>
  <li>Using the Magento command line. Several commands support an optional parameter <code>--clear-static-content</code>, which cleans <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a>. For example, see <a href="{{page.baseurl}}install-gde/install/install-cli-subcommands-enable.html">Enable or disable modules</a>.</li>
<li>In the Magento Admin. Go to <strong>System</strong> > Tools > <strong>Cache Management</strong> and click <strong>Flush Static Files Cache</strong>.</li></ul>
</div>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

<h2 id="config-cli-subcommands-xlate-dict">Deploy static view files</h2>
To deploy static view files:

1.	Log in to the Magento server as, or <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">switch to</a>, the Magento file system owner.
2.	Delete the contents of `<your Magento install dir>/pub/static`.
3.	Run the static view files deployment tool `<your Magento install dir>/bin/magento setup:static-content:deploy`.
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
<a href="{{page.baseurl}}install-gde/bk-install-guide.html">Install the Magento software first</a>; otherwise, you cannot run the static view files deployment tool.

**Symptom**: The following error is displayed when you run the static view files deployment tool:

	ERROR: You need to install the Magento application before running this utility.

**Solution**:

Use the following steps:

1.	Install the Magento software in any of the following ways:

	*	<a href="{{page.baseurl}}install-gde/install/install-cli.html">Command line</a>
	*	<a href="{{page.baseurl}}install-gde/install/install-web.html">Setup wizard</a>

1.	Log in to the Magento server as, or <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">switch to</a>, the Magento file system owner.
2.	Delete the contents of `<your Magento install dir>/pub/static` directory.
3.	<a href="#config-cli-subcommands-xlate-dict">Run the static view files deployment tool</a>.
<!-- 4.	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files. -->
	
	<!-- <div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>If you enable static view file merging in the Magento Admin, the <code>pub/static</code> directory system must be writable.</p></span>
	</div> -->

#### Related topics

*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
