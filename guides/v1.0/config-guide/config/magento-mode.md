---
layout: default
group: dev-guide
subgroup: Configuration
title: Magento modes
menu_title: Magento modes
menu_order: 4
github_link: config-guide/config/magento-mode.md
---

#### Contents

*	<a href="#mode-introduction">Introduction to Magento modes</a>
*	<a href="#mode-developer">Developer mode</a>
*	<a href="#mode-default">Default mode</a>
*	<a href="#mode-specify">Specify a mode</a>

<h2 id="mode-introduction">Introduction to Magento modes</h2>
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
		<td><a href="mode-default">default</a></td>
		<td>As the name implies, Magento operates in this mode if no mode is explicitly set. Static file caching is enabled, exceptions are not displayed to the user, exceptiosn are written to log files. Although you <em>can</em> run Magento in default mode in production, we don't recommend it.</td>
	</tr>
	<tr class="even">
		<td><a href="#mode-production">production</a></td>
		<td>Intended for deployment on a production system. Exceptions are not displayed to the user, exceptions are written to logs only, and static files are not materialized. You can set the static file directory to read-only because files are read without going through the fallback mechanism.</td>
	</tr>

</tbody>
</table>



<h2 id="mode-developer">Developer mode</h2>
TBD

<h2 id="mode-default">Default mode</h2>
TBD

<h2 id="mode-production">Production mode</h2>
You should run the Magento software in production mode when it's deployed to a production server. After optimizing the server environment (database, web server, and so on), you should run the <a href="#mode-production-view">view files creation tool</a> to write static files to the Magento docroot.

This improves performance because static files don't go through the fallback mechanism; instead, URLs for static files are created as needed.

In production mode:

*	View files are not materialized, and URLs for them are composed on the fly without going through fallback mechanism.
*	The Magento docroot can have read-only permissions
*	Errors are logged to the file system and are never displayed to the user

<h3 id="mode-production-view">Running the static view file creation tool</h3>
In production mode, because static file URLs are created on the fly, you must write static files to the Magento docroot; after that, you can restrict permissions to limit your vulnerabilities and to prevent accidental or malicious overwriting of files.

Run the static view file creation tool from the command line in the `[your Magento install dir]/dev/tools/Magento/Tools/View` directory.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must run the view files creation tool as the web server user; otherwise, Magento might have issues accessing the files. For more information, see <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.</p></span>
</div>

Following is the command syntax:

	php -f deploy.php -- [--langs=[language codes]] [--verbose=0|1] [--dry-run] [--help]
	
The following table discusses the meanings of the options:

<table>
	<tbody>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>--langs</td>
		<td><p class="q">Reviewer: Is it comma-separated and is there another way to find the list?</p>
		<p>Comma-separated list of <a href="http://www.loc.gov/standards/iso639-2/php/code_list.php" target="_blank">ISO-636</a> language codes for which to output static files. (Default is <code>en_US</code>.)</p>
		<p>You can find the list by running <code>[your Magento install dir]/php -f index.php help languages</code>.</p></td>
	</tr>
	<tr>
		<td>--verbose</td>
		<td>Omit to display errors only. Use <code>0</code> to suppress all output. Use <code>1</code> to display verbose output.</td>
	</tr>
	<tr>
		<td>--dry-run</td>
		<td>Include to view the files output by the tool without outputting anything.</td>
	</tr>
	<tr>
		<td>--help</td>
		<td>Display command help.</td>
	</tr>
</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>At this time, the static view files tool displays errors. These errors do not indicate problems with your view files.</p></span>
</div>

For more information about specifying a mode, see <a href="#mode-specify">Specify a mode</a>.

<h2 id="mode-specify">Specify a mode</h2>
Specify the Magento mode in any of the following ways:

*	<a href="#mode-specify-var">Specifying a node using an environment variable</a>
*	<a href="#mode-specify-var">Specifying a node using your web server environment</a>

<h3 id="mode-specify-var">Specifying a node using an environment variable</h3>

Use the `MAGE_MODE` system environment variable to specify a mode as follows:

	MAGE_MODE=[developer|default|production]
	
For example,
	
	MAGE_MODE=developer
	export $MAGE_MODE
	
Now see one of the following sections for more information about each mode:

*	<a href="#mode-developer">Developer mode</a>
*	<a href="#mode-default">Default mode</a>
*	<a href="#mode-production">Production mode</a>
	
<h3 id="mode-specify-var">Specifying a node using your web server environment</h3>
The Apache web server supports this using `mod_env` directives.
	
The Apache `mod_env` directive is slightly different in <a href="http://httpd.apache.org/docs/2.2/mod/mod_env.html#setenv" target="_blank">version 2.2</a> and <a href="http://httpd.apache.org/docs/2.4/mod/mod_env.html#setenv" target="_blank">version 2.4</a>.
	
The procedures that follows show how to set the Magento mode in an Apache virtual host. This is not the only way to use `mod_env` directives; consult the Apache documentation for details.

*	<a href="#mode-specify-ubuntu">Specifying a mode using Ubuntu 14</a>
*	<a href="#mode-specify-centos">Specifying a mode using CentOS</a>

<h4 id="mode-specify-ubuntu">Specifying a mode using Ubuntu 14</h4>
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
	
For more information about each mode, see:

*	<a href="#mode-developer">Developer mode</a>
*	<a href="#mode-default">Default mode</a>
*	<a href="#mode-production">Production mode</a>