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
*	<a href="#mode-production-view">static view file creation tool</a>
*	<a href="#view-file-trouble">Troubleshooting</a>

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
		<td><a href="#mode-default">default</a></td>
		<td>As the name implies, Magento operates in this mode if no mode is explicitly set. Static file caching is enabled, exceptions are not displayed to the user; instead, exceptions are written to log files. Although you <em>can</em> run Magento in default mode in production, we don't recommend it.</td>
	</tr>
	<tr class="even">
		<td><a href="#mode-production">production</a></td>
		<td>Intended for deployment on a production system. Exceptions are not displayed to the user, exceptions are written to logs only, and static files are not cached. You can set the static file directory to read-only because files are read without going through the fallback mechanism.</td>
	</tr>

</tbody>
</table>

<p class="q">Reviewer: We don't have topics on materialization of static view files or caching view files. As soon as those topics are written, I will provide links to them.</p>

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
*	Default mode is not optimized for a production environment

<p class="q">Reviewer: It would be nice to say clearly why default mode is not recommended for production.</p>

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

*	<a href="#mode-specify-var">Specifying a node using an environment variable</a>
*	<a href="#mode-specify-var">Specifying a node using your web server environment</a>

<h3 id="mode-specify-var">Specifying a node using an environment variable</h3>

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
	
<h3 id="mode-specify-var">Specifying a node using your web server environment</h3>
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
	
<h2 id="mode-production-view">Static view file creation tool</h2>
In production mode, because static file URLs are created on the fly, you must write static files to the Magento docroot; after that, you can restrict permissions to limit your vulnerabilities and to prevent accidental or malicious overwriting of files.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must run the view files creation tool as the web server user; otherwise, Magento might have issues accessing the files. For more information, see <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.</p></span>
</div>

See one of the following sections for more information:

*	<a href="#mode-production-view-run">Running the static file creation tool</a>
*	<a href="#view-file-trouble">Troubleshooting the static file creation tool</a>

<h3 id="mode-production-view-run">Running the static file creation tool</h3>

To create static files:

1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.
2.	Delete the contents of `[your Magento install dir]/pub/static`.
3.	Run the static file creation tool from the `[your Magento install dir]/dev/tools/Magento/Tools/View` directory.
4.	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files.

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
		<p>You can find the list by running <code>[your Magento install dir]/setup/php -f index.php help languages</code>.</p></td>
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
  <p>At this time, the static view files tool displays errors. These errors do not indicate problems with your static files.</p></span>
</div>

For more information about specifying a mode, see <a href="#mode-specify">Specify a mode</a>.

<h3 id="view-file-trouble">Troubleshooting the static file creation tool</h3>
This section discusses errors that result from view files creation tool without first <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">installing the Magento software</a>.

**Symptom**: Any of the following errors display when you run the static file creation tool:

<pre>PHP Fatal error:  Cannot instantiate interface Magento\Framework\App\View\Deployment\Version\StorageInterface 
in /var/www/magento2/lib/internal/Magento/Framework/ObjectManager/Factory/Factory.php on line 188</pre>
	
<pre>ERROR: &lt;lib> tiny_mce/classes/dom/Serializer.js exception 'Zend_Exception' with message 'dbModel read resource does not 
implement \Zend_Db_Adapter_Abstract' in /var/www/my.magento/magento2/lib/internal/Magento/Framework/Data/Collection/Db.php:184</pre>
	
<pre>#20 {main} ERROR: &lt;Magento_Paypal> order-review.js exception 
'Magento\Framework\App\InitException' with message 'Store Manager has been initialized not properly' in 
/var/www/my.magento/magento2/app/code/Magento/Store/Model/Storage/Db.php:331
Stack trace:
#0
/var/www/my.magento/magento2/app/code/Magento/Store/Model/StoreManager.php
... (more messages) ...
/var/www/my.magento/magento2/lib/internal/Magento/Framework/View/Asset/
Repository.php(178): 
Magento\Framework\View\Asset\Repository->getFallbackContext('static',NULL, 'frontend', 'Magento/blank', 'en_US')</pre>

**Solution**:

Use the following steps:

1.	Install the Magento software in any of the following ways:

	*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command-line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Web-based</a>
	
1.	Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.
2.	Delete the contents of `[your Magento install dir]/pub/static`.
3.	Run the static file creation tool from the `[your Magento install dir]/dev/tools/Magento/Tools/View` directory.
4.	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files.