---
layout: default
group: dev-guide
subgroup: Configuration
title: Magento modes
menu_title: Magento modes
menu_order: 4
github_link: config-guide/config/magento-mode.md
---

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
		<td>As the name implies, Magento operates in this mode if no mode is explicitly set. Static file caching is enabled, exceptions are not displayed to the user, exceptiosn are written to log files. Although you *can* run Magento in default mode in production, we don't recommend it.</td>
	</tr>
	<tr class="even">
		<td><a href="#mode-production">production</a></td>
		<td>Intended for deployment on a production system. Exceptions are not displayed to the user, exceptions are written to logs only, and static files are not materialized. You can set the static file directory to read-only because files are read without going through the fallback mechanism.</td>
	</tr>

</tbody>
</table>

<h2 id="mode-specify">Specify a mode</h2>
Specify the Magento mode in any of the following ways:

*	Using a system enviornment variable (`MAGE_MODE=[developer|default|production]`).

	For example,
	
	<pre>MAGE_MODE=developer
	export $MAGE_MODE</pre>
	
*	Using your web server's environment.

	The Apache web server supports this using `mod_env` directives.
	
	The Apache `mod_env` directive is slightly different in <a href="http://httpd.apache.org/docs/2.2/mod/mod_env.html#setenv" target="_blank">version 2.2</a> and <a href="http://httpd.apache.org/docs/2.4/mod/mod_env.html#setenv" target="_blank">version 2.4</a>.
	
The procedure that follows shows how to set the Magento mode in an Apache virtual host. This is not the only way to use `mod_env` directives; consult the Apache documentation for details.

<h3 id="mode-specify-ubuntu">Specifying a mode using Ubuntu 14 and Apache 2.4</h3>
This section assumes you've already set up your virtual host. If you have not, consult a resource such as <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts" target="_blank">this digitalocean tutorial</a>.
	
To set the Magento mode using your web server's environment:

1.	As a user with `root` privileges, open your virtual host configuration file in a text editor.

	For example, if your virtual host is named `my.magento`,
	
	<pre>vim /etc/apache2/sites-available/my.magento.conf</pre>
	
2.	Anywhere in the configuration file, add the following line:

	<pre>SetEnv "MAGE_MODE" "[mode name]"</pre>
	
	For example,
	
	<pre>SetEnv "MAGE_MODE" "developer"</pre>
	
	For more information about each mode, see:
	
	*	<a href="#mode-developer">Developer mode</a>
	*	<a href="#mode-default">Default mode</a>
	*	<a href="#mode-production">Production mode</a>

3.	Save your changes and exit the text editor.
4.	Enable your virtual host if you haven't already done so:

	<pre>a2ensite [virtual host config file name]</pre>
	
	For example,
	
	<pre>a2ensite my.magento.conf</pre>

5.	Restart the web server:

	<pre>service apache2 restart</pre>
	
<h3 id="mode-specify-centos">Specifying a mode using CentOS</h3>
This section assumes you've already set up your virtual host. If you have not, consult a resource such as <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-centos-6" target="_blank">this digitalocean tutorial</a>.

To set the Magento mode using your web server's environment:

1.	As a user with `root` privileges, open `/etc/httpd/conf/httpd.conf` in a text editor.

2.	

For more information about each mode, see 

<h2 id="mode-developer">Developer mode</h2>
TBD

<h2 id="mode-default">Default mode</h2>
TBD

<h2 id="mode-production">Production mode</h2>
TBD