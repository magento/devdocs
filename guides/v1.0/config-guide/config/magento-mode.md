---
layout: default
group: config-guide
subgroup: Configuration
title: Magento modes
menu_title: Magento modes
menu_order: 4
github_link: config-guide/config/magento-mode.md
---

#### Contents
*	<a href="#mode-introduction">Introduction</a>
*	<a href="#mode-developer">Developer mode</a>
*	<a href="#mode-default">Default mode</a>
*	<a href="#mode-production">Production mode</a>
*	<a href="#mode-specify">Specify a mode</a>
*	<a href="#mode-production-view">Static view files deployment tool</a>

<h2 id="mode-introduction">Introduction</h2>
You can run Magento in any of the following *modes*:

<table>
	<tbody>
		<tr>
			<th>Mode name</th>
			<th>Description</th>
		</tr>
	<tr class="even">
		<td><a href="#mode-developer">developer</a></td>
		<td>Intended for development only, this mode disables static file caching, provides verbose logging, enhanced debugging, and results slowest performance (because of the preceding).</td>
	</tr>
	<tr class="odd">
		<td><a href="#mode-default">default</a></td>
		<td>As the name implies, Magento operates in this mode if no mode is explicitly set. Static file caching is enabled, exceptions are not displayed to the user; instead, exceptions are written to log files. Although you <em>can</em> run Magento in default mode in production, we don't recommend it.</td>
	</tr>
	<tr class="even">
		<td><a href="#mode-production">production</a></td>
		<td>Intended for deployment on a production system. Exceptions are not displayed to the user, exceptions are written to logs only, and static files are not cached. You can set the static file directory to read-only because files are read without going through the fallback mechanism.</td>
	</tr>

</tbody>
</table>

<h2 id="mode-developer">Developer mode</h2>
You should run the Magento software in developer mode when you're extending or customizing it.

In developer mode:

*	Static view files are not cached; they are written to the Magento docroot every time they're called
*	Uncaught exceptions display in the browser
*	System logging in `var/report` is verbose
*	An exception is thrown in the error handler, rather than being logged
*	An exception is thrown when an event subscriber cannot be invoked

For more information, see <a href="#mode-specify">Specify a mode</a>.

<h2 id="mode-default">Default mode</h2>
As its name implies, default mode is how the Magento software operates if no other mode is specified.

In default mode:

*	Errors are logged to the file reports at server, and never shown to a user
*	Static view files are cached
*	Default mode is not optimized for a production environment, primarily because of the adverse performance impact of static files being cached rather than materialized. In other words, creating static files and caching them has a greater performance impact than generating them using the static files creation tool.

For more information, see <a href="#mode-specify">Specify a mode</a>.

<h2 id="mode-production">Production mode</h2>
You should run the Magento software in production mode when it's deployed to a production server. After optimizing the server environment (database, web server, and so on), you should run the <a href="#mode-production-view">view files creation tool</a> to write static files to the Magento docroot.

This improves performance because static files don't go through the fallback mechanism; instead, URLs for static files are created as needed.

In production mode:

*	View files are not materialized, and URLs for them are composed on the fly without going through fallback mechanism.
*	The Magento docroot can have read-only permissions
*	Errors are logged to the file system and are never displayed to the user

<h2 id="mode-specify">Specify a mode</h2>
Specify the Magento mode in any of the following ways:

*	<a href="#mode-specify-var">Specifying a mode using an environment variable</a>
*	<a href="#mode-specify-var">Specifying a mode using your web server environment</a>

<h3 id="mode-specify-var">Specifying a mode using an environment variable</h3>

Use the `MAGE_MODE` system environment variable to specify a mode as follows:

	MAGE_MODE=[developer|default|production]

For example,

	MAGE_MODE=developer
	export $MAGE_MODE

After setting the mode, restart the web server:

*	Ubuntu: `service apache2 restart`
*	CentOS: `service httpd restart`

See one of the following sections for more information about each mode:

*	<a href="#mode-developer">Developer mode</a>
*	<a href="#mode-default">Default mode</a>
*	<a href="#mode-production">Production mode</a>


<h3 id="mode-specify-var">Specifying a mode using your web server environment</h3>

The Apache web server supports this using `mod_env` directives.

The Apache `mod_env` directive is slightly different in <a href="http://httpd.apache.org/docs/2.2/mod/mod_env.html#setenv" target="_blank">version 2.2</a> and <a href="http://httpd.apache.org/docs/2.4/mod/mod_env.html#setenv" target="_blank">version 2.4</a>.

The procedures that follows show how to set the Magento mode in an Apache virtual host. This is not the only way to use `mod_env` directives; consult the Apache documentation for details.

*	<a href="#mode-specify-ubuntu">Specifying a mode using Ubuntu</a>
*	<a href="#mode-specify-centos">Specifying a mode using CentOS</a>

<h4 id="mode-specify-ubuntu">Specifying a mode using Ubuntu</h4>
This section assumes you've already set up your virtual host. If you have not, consult a resource such as <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts" target="_blank">this digitalocean tutorial</a>.

For more information about each mode, see:

*	<a href="#mode-developer">Developer mode</a>
*	<a href="#mode-default">Default mode</a>
*	<a href="#mode-production">Production mode</a>

To set the Magento mode using your web server's environment:

1.	As a user with `root` privileges, open your virtual host configuration file in a text editor.

	For example, if your virtual host is named `my.magento`,

	*	Apache 2.4: `vim /etc/apache2/sites-available/my.magento.conf`
	*	Apache 2.2: `vim /etc/apache2/sites-available/my.magento`

2.	Anywhere in the virtual host configuration, add the following line:

	<pre>SetEnv "MAGE_MODE" "[mode name]"</pre>

	For example,

	<pre>SetEnv "MAGE_MODE" "developer"</pre>

3.	Save your changes and exit the text editor.
4.	Enable your virtual host if you haven't already done so:

	<pre>a2ensite [virtual host config file name]</pre>

	For example,

	<pre>a2ensite my.magento.conf</pre>

5.	Restart the web server:

	<pre>service apache2 restart</pre>

<h4 id="mode-specify-centos">Specifying a mode using CentOS</h4>
This section assumes you've already set up your virtual host. If you have not, consult a resource such as <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-centos-6" target="_blank">this digitalocean tutorial</a>.

For more information about each mode, see:

*	<a href="#mode-developer">Developer mode</a>
*	<a href="#mode-default">Default mode</a>
*	<a href="#mode-production">Production mode</a>

To set the Magento mode using your web server's environment:

1.	As a user with `root` privileges, open `/etc/httpd/conf/httpd.conf` in a text editor.

2.	2.	Anywhere in the virtual host configuration, add the following line:

	<pre>SetEnv "MAGE_MODE" "[mode name]"</pre>

	For example,

	<pre>SetEnv "MAGE_MODE" "developer"</pre>

3.	Save your changes and exit the text editor.

4.	Restart Apache:

	`service httpd restart`

<h2 id="mode-production-view">Static view files deployment tool</h2>
The static view files deployment tool enables you to write static files to the Magento docroot when the Magento software is set for production mode.

Because static view files are not deployed on the fly in production mode, you must write static view files to the Magento docroot manually; after that, you can restrict permissions to limit your vulnerabilities and to prevent accidental or malicious overwriting of files.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must run the static view files deployment tool as the web server user; otherwise, Magento might have issues accessing the files. For more information, see <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.</p></span>
</div>

See one of the following sections for more information:

*	<a href="#mode-production-view-run">Running the static view files deployment tool</a>
*	<a href="#view-file-trouble">Troubleshooting the static view files deployment tool</a>

<h3 id="mode-production-view-run">Running the static view files deployment tool</h3>

To deploy static view files:

1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.
	In a more secure environment, you should make the web server user the owner of the files after running the tool.
2.	Delete the contents of `<your Magento install dir>/pub/static`.
3.	Run the static view files deployment tool from the `<your Magento install dir>/dev/tools/Magento/Tools/View` directory.
4.	Do any of the following:

	*	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files. 
	*	Enable merging of static view files in the Magento Admin. Merging happens on the fly and it requires write permissions to `pub/static` directory to write merged files.

Following is the command syntax:

	php -f deploy.php -- [--langs=[language codes]] [--verbose=0|1] [--dry-run] [--help]

The following table discusses the meanings of the options:

<table>
	<col width="15%">
  <col width="555%">
	<tbody>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>--langs</td>
		<td><p>Comma-separated list of <a href="http://www.loc.gov/standards/iso639-2/php/code_list.php" target="_blank">ISO-636</a> language codes for which to output static view files. <em>Do not</em> separate locales with a space. (Default is <code>en_US</code>.)</p>
		<p>You can find the list by running <code>php -f &lt;your Magento install dir>/setup/index.php help languages</code>.</p></td>
	</tr>
	<tr>
		<td>--verbose</td>
		<td><p>Omit to display errors only. Use <code>0</code> to suppress all output. Use <code>1</code> to display verbose output.</p></td>
	</tr>
	<tr>
		<td>--dry-run</td>
		<td><p>Include to view the files output by the tool without outputting anything.</p></td>
	</tr>
	<tr>
		<td>--help</td>
		<td><p>Display command help.</p></td>
	</tr>
</tbody>
</table>

For more information about specifying a mode, see <a href="#mode-specify">Specify a mode</a>.

<h3 id="view-file-trouble">Troubleshooting the static view files deployment tool</h3>
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
3.	Run the static view files deployment tool from the `<your Magento install dir>/dev/tools/Magento/Tools/View` directory.
4.	Do any of the following:

	*	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files. 
	*	Enable merging of static view files in the Magento Admin. Merging happens on the fly and it requires write permissions to `pub/static` directory to write merged files.