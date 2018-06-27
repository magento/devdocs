---
group: config-guide
title: About Magento modes
version: 2.1
github_link: config-guide/bootstrap/magento-modes.md
redirect_from: /guides/v1.0/config-guide/bootstrap/magento-modes.html
functional_areas:
  - Configuration
  - System
  - Setup
---

You can run Magento in any of the following *modes*:

<table>
	<tbody>
		<tr>
			<th style="width: 125px;">Mode name</th>
			<th>Description</th>
		</tr>
		<tr>
		<td>default</td>
		<td><p>Enables you to deploy the Magento application on a single server without changing any settings. However, default mode is not optimized for production.</p>
			<p>To deploy the Magento application on more than one server or to optimize it for production, change to one of the other modes.</p>
			<ul><li>Symlinks to static view files are published to the <code>pub/static</code> directory</li>
				<li>Exceptions are not displayed to the user; instead, exceptions are written to log files.</li>
				<li>Hides custom <code>X-Magento-&#42;</code> HTTP request and response headers</li></ul>
			</td>
	</tr>
	<tr>
		<td>developer</td>
		<td><p>Intended for development only, this mode:</p>
			<ul><li>Symlinks to static view files are published to the <code>pub/static</code> directory</li>
				<li>Provides verbose logging</li>
				<li>Enables <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html">automatic code compilation</a></li>
				<li>Enables enhanced debugging</li>
				<li>Shows custom <code>X-Magento-&#42;</code> HTTP request and response headers</li>
				<li>Results in the slowest performance (because of the preceding)</li></ul>
        <div class="bs-callout bs-callout-info">
        <a href="{{ page.baseurl }}/cloud/bk-cloud.html">{{site.data.var.ece}}</a> supports production mode only.
        </div>
    </td>
	</tr>
	<tr>
		<td>production</td>
		<td><p>Intended for deployment on a production system, this mode:</p>
			<ul><li>Does not show exceptions to the user (exceptions are written to logs only).</li>
				<li>Serves static view files from cache only.</li>
				<li>Prevents automatic code file compilation. New or updated files are not written to the file system.</li>
				<li><b>Does not allow you to enable or disable cache types in Magento Admin.</b> <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-en">More information about enabling and disabling the cache</a>.</li>
			</ul></td>
	</tr>
</tbody>
</table>

## Default mode
As its name implies, default mode is how the Magento software operates if no other mode is specified. Default mode enables you to deploy the Magento application on a single server without changing any settings. However, default mode is not as optimized for production as is production mode.

To deploy the Magento application on more than one server or to optimize it for production, change to one of the other modes.

In default mode:

-   Errors are logged to the file reports at server, and never shown to a user
-   A symlink to a static view file is published to the `pub/static` directory for each requested file
-   Default mode is not optimized for a production environment, primarily because of the adverse performance impact of {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} being dynamically generated rather than [materialized](https://en.wikipedia.org/wiki/Materialized_view){:target="\_blank"}. In other words, creating static files and caching them has a greater performance impact than generating them using the static files creation tool.

For more information, see <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>.

## Developer mode
You should run the Magento software in developer mode when you're extending or customizing it.

<div class="bs-callout bs-callout-info">
<a href="{{ page.baseurl }}/cloud/bk-cloud.html">{{site.data.var.ece}}</a> supports production mode only.
</div>

In developer mode:

-   A symlink to a static view file is published to the `pub/static` directory for each requested file
-   Uncaught exceptions display in the browser
-   System logging in `var/report` is verbose
-   An {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} is thrown in the error handler, rather than being logged
-   An exception is thrown when an {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} subscriber cannot be invoked

For more information, see <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>.

## Production mode
You should run the Magento software in production mode when it is deployed to a production server. After optimizing the server environment, such as the database and web server, you should run the [static view files deployment tool]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html) to write static view files to the Magento `pub/static` directory.

This improves performance by providing all necessary static files at deployment instead of forcing Magento to dynamically locate and copy (materialize) static files on demand during run time.

In production mode:

-   Static view files are not materialized and URLs for them are composed on the fly. Static view files are served from the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} only.)
-   Errors are logged to the file system and are never displayed to the user.

#### Next step
To set a mode, see <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>.

#### Related topic
To generate static view files for production mode, see <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
