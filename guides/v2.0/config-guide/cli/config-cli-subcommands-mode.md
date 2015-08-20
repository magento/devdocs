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
