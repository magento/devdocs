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
*	<a href="#config-mode">Change modes</a>

<h2 id="config-mode-over">Overview of setting Magento modes</h2>
To improve security and ease-of-use, we added commands that switch <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html">Magento modes</a> from developer to production and vice versa. When doing so, we set file permissions and ownership appropriately.

Developer mode uses a less restrictive set of permissions than does production mode for the following reasons:

*	<a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-developer">Developer mode</a> is intended for internal development on a system already secured behind a firewall; also, the system doesn't need to handle internet traffic
*	<a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-production">Production mode</a> servers handle internet traffic, process payments, and so on

	As the name implies, you change to production mode before you deploy your Magento storefront to production and start taking orders.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Unlike other Magento modes, developer and production modes are set in <code>env.php</code>.</p></span>
</div>

<h3 id="config-mode-over-clear">Cleared directories</h3>
We clear the following directories when you change modes:

	var/cache
	var/di
	var/generation
	var/view_preprocessed
	pub/static
	
<h3 id="config-mode-over-dirs">Permissions and ownership</h3>
Changing modes affects permissions and ownership the following subdirectories in your Magento installation:

	var/view_preprocessed
	var/generation
	var/di

<h4 id="config-mode-over-dirs-perm">Permissions</h4>
We set the following permissions on these directories and subdirectories:

<table style="width:350px">
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

770 permissions give full control (read, write, execute) to the owner and group and no permissions to anyone else.

750 permissions give full control to the owner, read and execute permissions to the group, and no permissions to anyone else.

For more information about UNIX permissions, see:

*	<a href="http://www.statslab.cam.ac.uk/~eva/unixinfo/perms.html" target="_blank">UNIX File Permissions</a>
*	<a href="http://permissions-calculator.org/" target="_blank">Unix Permissions Calculator</a>
*	<a href="http://unix.stackexchange.com/questions/39710/how-to-get-permission-number-by-string-rw-r-r" target="_blank">Article on unix.stackexchange</a>

<h4 id="config-mode-over-dirs-own">Ownership</h4>
We recommend the following:

*	The directories and files in the Magento file system should be *owned* by a user other than the web server user but must be *writable* by the web server user. 
*	The directories and files under `pub/static` should have 770 permissions, which give the owner and the group full control.

The easiest way to do that is to run this command as a user in the same group as the web server user.

To find the web server user's group:

*	CentOS: `egrep -i '^user|^group' /etc/httpd/conf/httpd.conf`

	Typically, the user and group name are both `apache`
*	Ubuntu: `ps aux | grep apache` to find the apache user, then `groups <apache user>` to find the group

	Typically, the user name and the group name are both `www-data`

To add a user to the web server's group (assuming the typical Apache group name for CentOS and Ubuntu), enter the following command as a user with `root` privileges:

*	CentOS: `usermod -a -G apache <username>`
*	Ubuntu: `useradd -G www-data <username>`

For example, to add the user `deborah` to the `apache` group on CentOS:

	usermod -a -G apache deborah

<h2 id="config-mode">Change modes</h2>
Command usage:

	magento setup:mode:switch [mode]

where `[mode]` is an optional parameter with a value that can be either `developer` or `production`. Omit `[mode]` to display the current mode.

Examples follow.

### Change to production mode

	magento setup:mode:switch production

Following is a summary of messages that display:

	Enabled maintenance mode
	Requested languages: en_US
	=== frontend -> Magento/luma -> en_US ===
	... more ...
	Successful: 1884 files; errors: 0
	---

	=== frontend -> Magento/blank -> en_US ===
	... more ...
	Successful: 1828 files; errors: 0
	---

	=== adminhtml -> Magento/backend -> en_US ===
	... more ...
	---

	=== Minify templates ===
	... more ...
	Successful: 897 files modified
	---

	New version of deployed files: 1440461332
	Gathering css/styles-m.less sources.
	Successfully processed LESS and/or SASS files
	Compilation was started.
	... more ...
	Repositories code generation... 1/6 [====>-----------------------]  16% 13 secs 293.8 MiB
	Service data attributes generation... 1/6 [====>-----------------------]  16% 13 secs 293.8 MiB
	Service data attributes generation... 2/6 [=========>------------------]  33% 14 secs 293.8 MiB
	Application code generator... 2/6 [=========>------------------]  33% 14 secs 293.8 MiB
	Application code generator... 3/6 [==============>-------------]  50% 30 secs 310.8 MiB
	Interceptors generation... 3/6 [==============>-------------]  50% 30 secs 310.8 MiB
	Interceptors generation... 4/6 [==================>---------]  66% 48 secs 347.2 MiB
	Area configuration aggregation... 4/6 [==================>---------]  66% 48 secs 347.2 MiB
	Area configuration aggregation... 5/6 [=======================>----]  83% 2 mins 414.0 MiB
	Interception cache generation... 5/6 [=======================>----]  83% 2 mins 414.0 MiB
	Interception cache generation... 6/6 [============================] 100% 2 mins 369.8 MiB
	Generated code and dependency injection configuration successfully.
	Disabled maintenance mode
	Switched to production mode.

### Change to developer mode

	magento setup:mode:switch developer

The following message displays:

	Switched to developer mode.

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
