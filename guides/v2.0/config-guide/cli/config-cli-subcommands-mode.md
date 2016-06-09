---
layout: default
group: config-guide 
subgroup: 04_CLI
title: Set the Magento mode
menu_title: Set the Magento mode
menu_node: 
menu_order: 200
version: 2.0
github_link: config-guide/cli/config-cli-subcommands-mode.md
---


#### Contents
*	<a href="#config-mode-over">Overview of setting Magento modes</a>
*	<a href="#config-mode-show">Display the current mode</a>
*	<a href="#config-mode-change">Change modes</a>

<h2 id="config-mode-over">Overview of setting Magento modes</h2>
To improve security and ease-of-use, we added a command that switches <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html">Magento modes</a> from developer to production and vice versa. 

Production mode also has better performance because static view files are populated in the `pub/static` directory and because of code compilation.

<div class="bs-callout bs-callout-info" id="info">
	<ul><li>In version 2.0.6 and later, Magento does not explicitly set file or directory permissions when you switch between default, develop, and production modes.</li>
		<li>Unlike other Magento modes, developer and production modes are set in <code>env.php</code>.</li></ul>
</div>

For more information about Magento file system ownership and permissions, see [Magento ownership and permissions in development and production]({{ site.gdeurl }}config-guide/prod/prod_file-sys-perms.html).

When you change to developer or production mode, we clear the contents of following directories when you change modes:

	var/cache
	var/di
	var/generation
	var/view_preprocessed
	pub/static

Exceptions:

*	`.htaccess` files are not removed
*	`pub/static` contains a file that specifies the version of static content; this file is not removed

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>By default, Magento uses the <code>var</code> directories to store the cache, logs, and compiled code. You can customize this directory but in this guide, it's assumed to be <code>var</code>.</p></span>
</div>

<h2 id="config-mode-show">Display the current mode</h2>
The easiest way to do that is to run this command as the <a href="{{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>. If you have shared hosting, this is the user your provider gives you to log in to the server. If you have a private server, it's typically a local user account on the Magento server.

Command usage:

	magento deploy:mode:show

A message similar to the following displays:

	Current application mode: developer.

<h2 id="config-mode-change">Change modes</h2>
Command usage:

	magento deploy:mode:set {mode} [-s|--skip-compilation]

where 

`{mode}` is required; it can be either `developer` or `production`

`--skip-compilation` is an optional parameter you can use to skip <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html#config-cli-subcommands-single-overview">code compilation</a> when you change to production mode.


Examples follow.

### Change to production mode

	magento deploy:mode:set production

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
	Static content deployment complete
Gathering css/styles-m.less sources.
Successfully processed LESS and/or SASS files
CSS deployment complete
Generated classes:
        Magento\Sales\Api\Data\CreditmemoCommentInterfacePersistor
        Magento\Sales\Api\Data\CreditmemoCommentInterfaceFactory
        Magento\Sales\Api\Data\CreditmemoCommentSearchResultInterfaceFactory
        Magento\Sales\Api\Data\CreditmemoComment\Repository
        Magento\Sales\Api\Data\CreditmemoItemInterfacePersistor
        ... more ...
	Compilation complete
	Disabled maintenance mode
	Enabled production mode.

### Change to developer mode
When you change from production to developer mode, you should clear generated classes and Object Manager entities like proxies to prevent unexpected errors. After doing so, you can change modes. Use the following steps:

1.	If you're changing from production mode to developer mode, delete the contents of the `var/generation` and `var/di` directories:

		rm -rf <your Magento install dir>/var/di/* <your Magento install dir>/var/generation/* 

2.	Set the mode:

		magento deploy:mode:set developer

	The following message displays:

		Switched to developer mode.

#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
