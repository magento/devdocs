---
layout: default
group: config-guide
subgroup: 03_Bootstrap
title: Set the value of bootstrap parameters
menu_title: Set the value of bootstrap parameters
menu_order: 2
menu_node: 
github_link21: config-guide/bootstrap/magento-how-to-set.md
---

#### Contents
*	<a href="#config-bootparam-overview">Overview of setting bootstrap parameter values</a>
*	<a href="#mode-specify-var">Specifying a parameter value using an environment variable</a>
*	<a href="#mode-specify-web">Specifying a parameter value using your web server environment</a>

<h2 id="config-bootparam-overview">Overview of setting bootstrap parameter values</h2>
This topic discusses how to set the values of Magento application bootstrap parameters. <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-bootstrap.html">More information about Magento application bootstrapping</a>.

The following table discusses the bootstrap parameters you can set:

<table>
	<col width="40%">
  	<col width="30%">
	<tbody>
		<tr>
			<th>Bootstrap parameter</th>
			<th>Description</th>
		</tr>
	<tr>
		<td><a href="{{ site.gdeurl21 }}config-guide/bootstrap/mage-dirs.html">MAGE_DIRS</a></td>
		<td>Specifies custom directory and URL paths</td>
	</tr>	
	<tr>
		<td><a href="{{ site.gdeurl21 }}config-guide/bootstrap/mage-profiler.html">MAGE_PROFILER</a></td>
		<td>Enables dependency graphs and HTML profiling</td>
	</tr>

	
	</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <ul><li>Not all bootstrap parameters are documented at this time.</li>
  	<li>You now set the Magento mode (developer, default, production) using the <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html"><code>magento deploy:mode:set {mode}</code></a> command.</li></ul></span>
</div>

<h2 id="mode-specify-var">Specifying a parameter value using an environment variable</h2>
This section discusses how to set the values of bootstrap parameters using environment variables.

<h3 id="config-bootparam-mode">Set the mode using an environment variable</h3>
You can specify Magento bootstrap variables as system-wide environment variables, which enables all processes to use them.

For example, you can use the `MAGE_PROFILER` system environment variable to specify a mode as follows:

	MAGE_PROFILER={firebug|csv|<custom value>}

Set the variable using a shell-specific command. Because shells have differing syntax, consult a reference like <a href="http://unix.stackexchange.com/questions/117467/how-to-permanently-set-environmental-variables" target="_blank">unix.stackexchange.com</a>.

bash shell example for CentOS:

	export MAGE_PROFILER=firebug

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If a <code>PHP Fatal error</code> displays in the browser after you set a profiler value, restart your web server. The reason might be related to PHP bytecode caching, which caches bytecodes and PHP classpaths.</p></span>
</div>

<h2 id="mode-specify-web">Specifying a parameter value</h2>
This section discusses how to specify the mode for either Apache or nginx.

See one of the following sections for more information:

*	<a href="#mode-specify-web-nginx">Specify a variable using an nginx setting</a>
*	<a href="#mode-specify-web-htaccess">Specify a variable using .htaccess (Apache only)</a>
*	<a href="#mode-specify-web-apache">Specify a variable using an Apache setting</a>

<h3 id="mode-specify-web-nginx">Specify a variable using an nginx setting</h3>
See the <a href="{{ site.mage2100url }}nginx.conf.sample#L16" target="_blank">nginx sample configuration</a> on GitHub.

<h3 id="mode-specify-web-htaccess">Specify a variable using .htaccess (Apache only)</h3>
One way to set the Magento mode is by editing `.htaccess`. This way, you don't have to change Apache settings.

You can modify `.htaccess` in any of the following locations, depending on your entry point to the Magento application:

*	`<your Magento install dir>/.htaccess`
*	`<your Magento install dir>/pub/.htaccess`

To set a variable:

1.	Open any of the preceding files in a text editor and either add or uncomment the desired setting.

	For example, to specify a <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-modes.html">mode</a>, uncomment the following:

		#   SetEnv MAGE_PROFILER firebug

2.	Set the value of `MAGE_PROFILER` to any of the following:

		firebug
		csv
		<custom value>

2.	Save your changes to `.htaccess`; you don't need to restart Apache for the change to take effect.

<h3 id="mode-specify-web-apache">Specify a variable using an Apache setting</h3>
The Apache web server supports setting the Magento mode using `mod_env` directives.

The Apache `mod_env` directive is slightly different in <a href="http://httpd.apache.org/docs/2.2/mod/mod_env.html#setenv" target="_blank">version 2.2</a> and <a href="http://httpd.apache.org/docs/2.4/mod/mod_env.html#setenv" target="_blank">version 2.4</a>.

The procedures that follows show how to set the Magento mode in an Apache virtual host. This is not the only way to use `mod_env` directives; consult the Apache documentation for details.

*	<a href="#mode-specify-ubuntu">Specify a bootstrap variable for Apache on Ubuntu</a>
*	<a href="#mode-specify-centos">Specify a bootstrap variable for Apache on CentOS</a>

<h4 id="mode-specify-ubuntu">Specify a bootstrap variable for Apache on Ubuntu</h4>
This section assumes you've already set up your virtual host. If you have not, consult a resource such as <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts" target="_blank">this digitalocean tutorial</a>.

To set a Magento bootstrap variable using your web server's environment:

1.	As a user with `root` privileges, open your virtual host configuration file in a text editor.

	For example, if your virtual host is named `my.magento`,

	*	Apache 2.4: `vim /etc/apache2/sites-available/my.magento.conf`
	*	Apache 2.2: `vim /etc/apache2/sites-available/my.magento`

2.	Anywhere in the virtual host configuration, add the following line:

		SetEnv "<variable name>" "<variable value>"

	For example,

		SetEnv "MAGE_PROFILER" "firebug"

3.	Save your changes and exit the text editor.
4.	Enable your virtual host if you haven't already done so:

		a2ensite <virtual host config file name>

	For example,

		a2ensite my.magento.conf

5.	Restart the web server:

	*	Ubuntu: `service apache2 restart`
	*	CentOS: `service httpd restart`

<h4 id="mode-specify-centos">Specify a bootstrap variable for Apache on CentOS</h4>
This section assumes you've already set up your virtual host. If you have not, consult a resource such as <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-centos-6" target="_blank">this digitalocean tutorial</a>.

To set a Magento bootstrap variable using your web server's environment:

1.	As a user with `root` privileges, open `/etc/httpd/conf/httpd.conf` in a text editor.

2.	Anywhere in the virtual host configuration, add the following line:

		SetEnv "<variable name>" "<variable value>"

	For example,

		SetEnv "MAGE_PROFILER" "firebug"

3.	Save your changes and exit the text editor.

After setting the mode, restart the web server:

*	Ubuntu: `service apache2 restart`
*	CentOS: `service httpd restart`

#### Related topics

*	<a href="{{ site.gdeurl21 }}config-guide/bootstrap/mage-dirs.html">Customize base directory paths (MAGE_DIRS)</a>
*	<a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{ site.gdeurl21 }}config-guide/bootstrap/mage-profiler.html">Enable an dependency graphs and built-in profiler (MAGE_PROFILER)</a>