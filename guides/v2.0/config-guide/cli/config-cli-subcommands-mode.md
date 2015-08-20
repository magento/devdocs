---
layout: default
group: config-guide 
subgroup: CLI
title: Set the Magento mode
menu_title: Set the Magento mode
menu_node: 
menu_order: 12
github_link: config-guide/cli/config-cli-subcommands-mode.md
---


#### Contents
TBD

<h2 id="config-mode-over">Overview of setting Magento modes</h2>
To improve security, we added a command that switches <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html">Magento modes</a> from developer to production and vice versa. In doing so, we set file permissions and ownership appropriately.

Developer mode uses a less restrictive set of permissions than does production mode for the following reasons:

*	Developer mode is intended for internal development on a system already secured behind a firewall; also, the system doesn't need to handle internet traffic
*	Production mode requires less write access to Magento directories and the server handles internet traffic, processes payments, and so on

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Unlike other Magento modes, developer and production modes are set in <code>env.php</code>.</p></span>
</div>

<h3 id="config-mode-over-dirs">Permissions and ownership</h3>
Switching modes affects permissions and ownership the following subdirectories in your Magento installation:

	var/view_preprocessed
	var/generation
	var/di

We set the following permissions on these directories and subdirectories:

<table>
	<tbody>
		<tr>
			<td />
		<td>Developer</td>
		<td>Production</td>
	</tr>
	<tr>
		<td>File</td>
		<td>660</td>
		<td>640</td>
	</tr>
	<tr>
		<td>Directory</td>
		<td>770</td>
		<td>750</td>
	</tr>
</tbody>
</table>

Ownership is set to `<apache user>:<TBD group>`


<h3 id="config-mode-over-clear">Cleared directories</h3>
We also clear the following directories when you switch modes:

	var/cache
	var/di
	var/generation
	var/view_preprocessed
	pub/static
	
<h2 id="config-mode-prod">Change to production mode</h2>
There are two commands to change to production mode:

<table>
	<tbody>
		<tr>
			<th>Command</th>
			<th>Meaning</th>
		</tr>
		<td><p>magento setup:mode:to-production</p></td>
		<td><p>Performs the following tasks in the order shown:</p>
			<ol><li>Puts your storefront in maintenance mode</li>
			<li>Clears the contents of the <code>var/view_preprocessed</code>, <code>var/generation</code>, and <code>var/di</code> directories</li>
			<li>Sets file permissions and ownership as discussed in <a href="#config-mode-over-dirs">Permissions and ownership</a></li>
			<li>Generates static view files</li>
			<li>Generates classes</li>
			<li>Processes LESS and SASS files</li>
			<li>Takes your storefront out of maintenance mode</li></ol></td>
	</tr>
	<tr>
		<td>magento setup:mode:to-production-minimal</td>
		<td>Sets file permissions and ownership as discussed in <a href="#config-mode-over-dirs">Permissions and ownership</a> only</td>
	</tr>
</tbody>
</table>

For example, to enable production mode, enter

	magento setup:mode:to-production

Following is a summary of messages that display:

	Enabled maintenance mode
	Requested languages: en_US
	=== frontend -> Magento/luma -> en_US ===

	... more ...

	=== frontend -> Magento/blank -> en_US ===

	... more ...

	=== adminhtml -> Magento/backend -> en_US ===

	... more ...

	=== Minify templates ===

	... more ...

	Gathering css/styles-m.less sources.
	Successfully processed LESS and/or SASS files
	Generated classes:
        Magento\Sales\Api\Data\CreditmemoCommentInterfacePersistor
        Magento\Sales\Api\Data\CreditmemoCommentInterfaceFactory
        Magento\Sales\Api\Data\CreditmemoCommentSearchResultInterfaceFactory
        Magento\Sales\Api\Data\CreditmemoComment\Repository
        Magento\Sales\Api\Data\CreditmemoItemInterfacePersistor

        ... more ...

<h2 id="config-mode-dev">Change to developer mode</h2>
Enter the following command to change to developer mode:

	magento setup:mode:to-develop


#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-log.html">Clean the logs</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">Multi-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">Single-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create LESS from CSS</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run tests</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
