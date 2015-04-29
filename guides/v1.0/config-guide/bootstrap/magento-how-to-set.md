---
layout: default
group: config-guide
subgroup: Bootstrap
title: Set the value of bootstrap parameters
menu_title: Set the value of bootstrap parameters
menu_order: 2
menu_node: 
github_link: config-guide/bootstrap/magento-how-to-set.md
---

#### Contents
*	<a href="#config-bootparam-overview">Overview of setting bootstrap parameter values</a>
*	<a href="#mode-specify-var">Specifying a parameter value using an environment variable</a>
*	<a href="#mode-specify-var">Specifying a parameter value using your web server environment</a>

<h2 id="config-bootparam-overview">Overview of setting bootstrap parameter values</h2>
This topic discusses how to set the values of Magento application bootstrap parameters. For more information, see <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-bootstrap.html">Magento application initialization and bootstrap</a>.

<h2 id="mode-specify-var">Specifying a parameter value using an environment variable</h2>
This section discusses how to set the values of bootstrap parameters using environment variables.

<h3 id="config-bootparam-mode">Set the mode using an environment variable</h3>
Use the `MAGE_MODE` system environment variable to specify a mode as follows:

	MAGE_MODE=[developer|default|production]

<h2 id="mode-specify-var">Specifying a parameter value using your web server environment</h2>

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

After setting the mode, restart the web server:

*	Ubuntu: `service apache2 restart`
*	CentOS: `service httpd restart`

