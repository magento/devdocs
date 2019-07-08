---
group: configuration-guide
title: About Magento modes
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
				<li>Hides custom <code>X-Magento-*</code> HTTP request and response headers</li></ul>
			</td>
	</tr>
	<tr>
		<td>developer</td>
		<td><p>Intended for development only, this mode:</p>
			<ul><li>Symlinks to static view files are published to the <code>pub/static</code> directory</li>
				<li>Provides verbose logging</li>
				<li>Enables <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html">automatic code compilation</a></li>
				<li>Enables enhanced debugging</li>
				<li>Shows custom <code>X-Magento-*</code> HTTP request and response headers</li>
				<li>Results in the slowest performance</li>
				<li>Does not show errors on the frontend</li></ul>
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
<tr>
		<td>maintenance</td>
		<td><p>Intended to prevent access to the Magento application while it is being updated or reconfigured, this mode:</p>
			<ul><li>Redirects site visitors to a default <code>Service Temporarily Unavailable</code> page.</li>
				<li>When the application is in maintenance mode, the <code>var/</code> directory contains the <code>.maintenance.flag</code> file.</li>
				<li>You can configure maintenance mode to allow visitor access from a specified list of IP addresses.</li>
			</ul></td>
		</tr>
</tbody>
</table>

{:.bs-callout .bs-callout-info}
[{{site.data.var.ece}}]({{ page.baseurl }}/cloud/bk-cloud.html) supports only production and maintenance modes.


## Default mode

As its name implies, default mode is how the Magento software operates if no other mode is specified. Default mode enables you to deploy the Magento application on a single server without changing any settings. However, default mode is not as optimized for production as is production mode.

To deploy the Magento application on more than one server or to optimize it for production, change to one of the other modes.

In default mode:

-   Errors are logged to the file reports at server, and never shown to a user
-   A symlink to a static view file is published to the `pub/static` directory for each requested file
-   Default mode is not optimized for a production environment, primarily because of the adverse performance impact of [static files](https://glossary.magento.com/static-files) being dynamically generated rather than [materialized](https://en.wikipedia.org/wiki/Materialized_view). In other words, creating static files and caching them has a greater performance impact than generating them using the static files creation tool.

For more information, see [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html).

## Developer mode

You should run the Magento software in developer mode when you're extending or customizing it.

In developer mode:

-   A symlink to a static view file is published to the `pub/static` directory for each requested file
-   Uncaught exceptions display in the browser
-   System logging in `var/report` is verbose
-   An [exception](https://glossary.magento.com/exception) is thrown in the error handler, rather than being logged
-   An exception is thrown when an [event](https://glossary.magento.com/event) subscriber cannot be invoked

For more information, see [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html).

## Production mode

You should run the Magento software in production mode when it is deployed to a production server. After optimizing the server environment, such as the database and web server, you should run the [static view files deployment tool]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html) to write static view files to the Magento `pub/static` directory.

This improves performance by providing all necessary static files at deployment instead of forcing Magento to dynamically locate and copy (materialize) static files on demand during run time.

In production mode:

-   Static view files are not materialized and URLs for them are composed on the fly. Static view files are served from the [cache](https://glossary.magento.com/cache) only.)
-   Errors are logged to the file system and are never displayed to the user.

## Maintenance mode

Run Magento in maintenance mode to take your site offline while you complete maintenance, upgrade, or configuration tasks.  In maintenance mode, the site redirects visitors to a default `Service Temporarily Unavailable` page.

You can create a [custom maintenance page]({{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html#compman-trouble-maint-create), manually enable and disable maintenance mode, and configure maintenance mode to allow visitors from authorized IP addresses to view the store normally. See [enable and disable maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html).

If you are using {{site.data.var.ece}}, Magento applicationruns in maintenance mode during the deploy phase. When the deployment completes successfully, Magento returns to running in production mode. See [Deployment hooks]({{ page.baseurl }}/cloud/reference/discover-deploy.html).


#### Next step

To set a mode, see [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html).

#### Related topic

To generate static view files for production mode, see [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)
