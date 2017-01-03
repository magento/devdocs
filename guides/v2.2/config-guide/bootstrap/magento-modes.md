---
layout: default
group: config-guide
subgroup: 03_Bootstrap
title: About Magento modes
menu_title: About Magento modes
menu_order: 3
menu_node: 
version: 2.2
github_link: config-guide/bootstrap/magento-modes.md
redirect_from: /guides/v1.0/config-guide/bootstrap/magento-modes.html
---


<h2 id="mode-introduction">Introduction to Magento modes</h2>
You can run Magento in any of the following *modes*:

<table>
	<tbody>
		<tr>
			<th>Mode name</th>
			<th>Description</th>
		</tr>
		<tr>
		<td><a href="#mode-default">default</a></td>
		<td><p>Enables you to deploy the Magento application on a single server without changing any settings. However, default mode is not optimized for production.</p>
			<p>To deploy the Magento application on more than one server or to optimize it for production, change to one of the other modes.</p>
			<ul><li>Static view file caching is enabled</li>
				<li>Exceptions are not displayed to the user; instead, exceptions are written to log files.</li>
				<li>Hides custom <code>X-Magento-*</code> HTTP request and response headers</li></ul>
			</td>
	</tr>
	<tr>
		<td><a href="#mode-developer">developer</a></td>
		<td><p>Intended for development only, this mode:</p>
			<ul><li>Disables static view file caching</li>
				<li>Provides verbose logging</li>
				<li>Enables <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html#config-cli-subcommands-compile-overview">automatic code compilation</a></li>
				<li>Enables enhanced debugging</li>
				<li>Shows custom <code>X-Magento-*</code> HTTP request and response headers</li>
				<li>Results in the slowest performance (because of the preceding)</li></ul></td>
	</tr>
	<tr>
		<td><a href="#mode-production">production</a></td>
		<td><p>Intended for deployment on a production system. Exceptions are not displayed to the user, exceptions are written to logs only, and static view files are served from cache only. New or updated files are not written to the file system.</p>
			<p>In production mode, you cannot enable or disable cache types using the Magento Admin. <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-en">More information about enabling and disabling the cache</a>.</p></td>
	</tr>

</tbody>
</table>

<h2 id="mode-default">Default mode</h2>
As its name implies, default mode is how the Magento software operates if no other mode is specified. Default mode enables you to deploy the Magento application on a single server without changing any settings. However, default mode is not as optimized for production as is production mode.

To deploy the Magento application on more than one server or to optimize it for production, change to one of the other modes.

In default mode:

*	Errors are logged to the file reports at server, and never shown to a user
*	Static view files are cached
*	Default mode is not optimized for a production environment, primarily because of the adverse performance impact of static files being dynamically generated rather than [materialized](https://en.wikipedia.org/wiki/Materialized_view){:target="_blank"}. In other words, creating static files and caching them has a greater performance impact than generating them using the static files creation tool.

For more information, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>.

<h2 id="mode-developer">Developer mode</h2>
You should run the Magento software in developer mode when you're extending or customizing it.

In developer mode:

*	Static view files are not cached; they are written to the Magento `pub/static` directory every time they're called
*	Uncaught exceptions display in the browser
*	System logging in `var/report` is verbose
*	An exception is thrown in the error handler, rather than being logged
*	An exception is thrown when an event subscriber cannot be invoked

For more information, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>.

<h2 id="mode-production">Production mode</h2>
You should run the Magento software in production mode when it's deployed to a production server. After optimizing the server environment (database, web server, and so on), you should run the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html">static view files deployment tool</a> to write static view files to the Magento `pub/static` directory.

This improves performance because static files don't go through the fallback mechanism; instead, URLs for static files are created as needed.

In production mode:

*	Static view files are not materialized, and URLs for them are composed on the fly without going through the fallback mechanism. (Static view files are served from cache only.)
*	Errors are logged to the file system and are never displayed to the user

#### Next step
To set a mode, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>.

#### Related topic
To generate static view files for production mode, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
