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
*	<a href="#config-mode-over">Overview of setting Magento modes</a>
*	<a href="#config-mode-prod">Change to production mode</a>
*	<a href="#config-mode-dev">Change to developer mode</a>

<h2 id="config-mode-over">Overview of setting Magento modes</h2>
To improve security and ease-of-use, we added commands that switch <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html">Magento modes</a> from developer to production and vice versa. In doing so, we set file permissions and ownership appropriately.

Developer mode uses a less restrictive set of permissions than does production mode for the following reasons:

*	<a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-developer">Developer mode</a> is intended for internal development on a system already secured behind a firewall; also, the system doesn't need to handle internet traffic
*	<a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-production">Production mode</a> servers handle internet traffic, process payments, and so on

	As the name implies, production mode is for deploying your Magento storefront to production to start taking orders.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Unlike other Magento modes, developer and production modes are set in <code>env.php</code>.</p></span>
</div>

<h3 id="config-mode-over-dirs">Permissions and ownership</h3>
Changing modes affects permissions and ownership the following subdirectories in your Magento installation:

	var/view_preprocessed
	var/generation
	var/di

<h4 id="config-mode-over-dirs-perm">Permissions</h4>
We set the following permissions on these directories and subdirectories:

<table style="width:300px">
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

660 permissions give read-write permissions to the owner and group and no permissions to anyone else.

640 permissions give read-write permissions to the owner, read-only to the group, and no permissions to anybody else.

770 permissions give full control `(-rwx------)` to the owner and group and no permissions to anyone else.

750 permissions give full control to the owner, read and execute permissions to the group, and no permissions to anyone else.

For more information about UNIX permissions, see:

*	<a href="http://www.statslab.cam.ac.uk/~eva/unixinfo/perms.html" target="_blank">UNIX File Permissions</a>
*	<a href="http://permissions-calculator.org/" target="_blank">Unix Permissions Calculator</a>
*	<a href="http://unix.stackexchange.com/questions/39710/how-to-get-permission-number-by-string-rw-r-r" target="_blank">Article on unix.stackexchange</a>


<h4 id="config-mode-over-dirs-own">Ownership</h4>
We recommend the following:

*	The directories and files in the Magento file system should be *owned* by a user other than the web server user but must be *writable* by the web server user. 
*	The directories and files under `pub/static` should have 770 permissions.

The easiest way to do that is to run this command as a user in the same group as the web server user.

egrep -i '^user|^group' /etc/httpd/conf/httpd.conf

sudo /usr/sbin/usermod -a -G apache <username>

We need to document that the pub/static directory should give write permission to the server and to whatever user runs commands on CLI. A recommendation that would encapsulate that as well as help maintain security is, give "770" permission to pub/static.



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
			<ol><li>Puts your server in maintenance mode</li>
			<li>Clears the contents of the <code>var/view_preprocessed</code>, <code>var/generation</code>, and <code>var/di</code> directories</li>
			<li>Sets file permissions and ownership as discussed in <a href="#config-mode-over-dirs">Permissions and ownership</a></li>
			<li>Generates <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">static view files</a></li>
			<li>Generates classes</li>
			<li>Processes LESS and SASS files</li>
			<li>Takes your server out of maintenance mode</li></ol></td>
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
