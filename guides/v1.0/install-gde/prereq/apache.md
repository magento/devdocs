---
layout: default
group: install
subgroup: Prerequisites
title: Apache
menu_title: Apache
menu_order: 2
github_link: install-gde/prereq/apache.md
---


#### Contents

*	<a href="#apache-support">Apache versions supported</a>
*	<a href="#apache-help-beginner">Help if you're just starting out</a>
*	<a href="#install-prereq-apache-ubuntu">Installing or upgrading Apache on Ubuntu</a>
*	<a href="#install-prereq-apache-centos">Installing Apache on CentOS</a>

<h2 id="apache-support">Apache versions supported</h2>

Magento requires Apache 2.2.x or 2.4.x.

<h2 id="apache-help-beginner">Help if you're just starting out</h2>
If you're new to all this and need some help getting started, we suggest the following:

*	<a href="{{ site.gdeurl }}install-gde/basics/basics_magento-installed.html">Is the Magento software installed already?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">What is the software that the Magento server needs to run?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_os-version.html">What operating system is my server running?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">How do I log in to my Magento server using a terminal, command prompt, or SSH?</a>

<h2 id="install-prereq-apache-verify">Verify the Apache version</h2>
To verify the Apache version you're currently running, enter:

	apache2 -v

The result displays similar to the following:

	Server version: Apache/2.2.22 (Ubuntu)
	Server built:   Jul 22 2014 14:35:32

*	If Apache is *not* installed, see the next section.
*	If Apache 2.2 is installed on Ubuntu 12 *and* you want to use PHP 5.6, see the next section
*	If Apache is installed and it's the correct version, make sure Apache rewrites are enabled:

	*	<a href="#apache-rewrites2.4">Enabling Apache Rewrites for Apache 2.4</a>
	*	<a href="#apache-rewrites2.2">Enabling Apache Rewrites for Apache 2.2</a>

<h2 id="install-prereq-apache-ubuntu">Installing or upgrading Apache on Ubuntu</h2>
The following sections discusses how to install or upgrade Apache:

*	Install Apache
*	Upgrade to Apache 2.4 on Ubuntu 12 to use PHP 5.6

<h3 id="install-prereq-apache-ubuntu-install">Installing Apache on Ubuntu 14 or Ubuntu 12</h3>
To install the default version of Apache (Ubuntu 14&mdash;Apache 2.4, Ubuntu 12&mdash;Apache 2.2):

1.	Install Apache

		apt-get -y install apache2

2.	Verify the installation.

		apache2 -v

The result displays similar to the following:

	Server version: Apache/2.2.22 (Ubuntu)
	Server built:   Jul 22 2014 14:35:32

Now you must <a href="#install-ubuntu-apache-rewrites">enable Apache rewrites</a>.

<h3 id="install-prereq-apache-ubuntu-upgrade">Upgrading Apache on Ubuntu 12</h3>
To use PHP 5.6 on Ubuntu 12, you must upgrade Apache to version 2.4. (By default, Ubuntu 12 comes with Apache 2.2.)

To upgrade to Apache 2.4:

1.	Add the `ppa:ondrej` repository, which has Apache 2.4:

		apt-get -y update
		apt-add-repository ppa:ondrej/apache2
		apt-get -y update

2.	Install Apache 2.4:

		apt-get install -y apache2

	<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>If the <code>apt-get install</code> command fails because of unmet dependencies, consult a resource like <a href="http://askubuntu.com/questions/140246/how-do-i-resolve-unmet-dependencies-after-adding-a-ppa" target="_blank">http://askubuntu.com</a></p>.</span>
	</div>

3.	Verify the installation.

		apache2 -v

	Messages similar to the following should display:

		Server version: Apache/2.4.10 (Ubuntu)
		Server built:   Jul 22 2014 22:46:25

3.	<a href="#apache-rewrites2.4">Enable Apache rewrites</a>.

<h3 id="install-ubuntu-apache-rewrites">Enabling Apache rewrites</h3>
Ubuntu 12 (which natively supports Apache 2.2) is different from Ubuntu 14 (which natively supports Apache 2.4).

It's very important you choose a value for `AllowOverride` that is suited to your deployment. You can use `AllowOverride All` in development but it might not be desirable in production.

More information about `AllowOverride`:

*	<a href="http://httpd.apache.org/docs/2.2/mod/core.html#allowoverride" target="_blank">Apache 2.2</a>
*	<a href="http://httpd.apache.org/docs/current/mod/core.html#allowoverride" target="_blank">Apache 2.4</a>

See one of the following sections:

*	<a href="#apache-rewrites2.4">Enabling Apache Rewrites for Apache 2.4</a>
*	<a href="#apache-rewrites2.2">Enabling Apache Rewrites for Apache 2.2</a>

    <div class="bs-callout bs-callout-info" id="info">
    <span class="glyphicon-class">
    <p>If you are using VirtualDocumentRoot rather than DocumentRoot, there is a bug in Apache 2.2 with relative rewrites. The <code>pub/media/.htaccess</code> and <code>pub/static/.htaccess</code> files will need to be modified, replacing the <code>../</code> portion of the <code>RewriteRule</code> with the complete path relative to the effective document root. This will usually be simply <code>/</code> but if Magento is installed at a subdirectory of the site such as /shop/ then it should be <code>/shop/</code>.</p></span>
    </div>

<h4 id="apache-rewrites2.4">Enabling Apache Rewrites for Apache 2.4</h4>
Use this section to enable Apache rewrites and specify <code>.htaccess</code> if you use Apache 2.4, which is supported by the default Ubuntu 14 repository.

1.	Enter the following command:

	<pre>a2enmod rewrite</pre>

2.	Specify the type of directives that can be used in <code>.htaccess</code>.

	For guidelines, see the <a href="http://httpd.apache.org/docs/current/mod/mod_rewrite.html" target="_blank">Apache 2.4 documentation</a>.

	Note that in Apache 2.4, the server's default site configuration file is <code>/etc/apache2/sites-available/000-default.conf</code>

	For example, you can add the following to the bottom of <code>000-default.conf</code>:

		<Directory "/var/www/html">
		AllowOverride <value from Apache site>
		</Directory>

	<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<ul><li>If you upgraded from an earlier Apache version, first look for <code>&lt;Directory "/var/www/html"></code> or <code>&lt;Directory "/var/www"></code> in <code>000-default.conf</code>.</li>
		<li>You must change the value of <code>AllowOverride</code> in the directive for the directory to which you expect to install the Magento software. For example, to install in the web server docroot, edit the directive in <code>&lt;Directory /var/www></code>.</li></span>
	</div>

3.	Restart Apache:

	<pre>service apache2 restart</pre>

Continue with the next prerequisite (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a>), or start your installation by going to <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento repository</a>.

<h4 id="apache-rewrites2.2">Enabling Apache Rewrites for Apache 2.2</h4>
Use this section to enable Apache rewrites and specify <code>.htaccess</code> if you use Apache 2.2, which is supported by the default Ubuntu 12 repository.

1.	Open the following file for editing.

		vim /etc/apache2/sites-available/default

2.	Locate the following block.

		<Directory /var/www/>
	    Options Indexes FollowSymLinks MultiViews
	    AllowOverride None
	    Order allow,deny
	    allow from all
		<Directory>

3.	Change the value of `AllowOverride` to `<value from Apache site>`.

		<Directory /var/www/>
		Options Indexes FollowSymLinks MultiViews
    	AllowOverride <value from Apache site>
    	Order allow,deny
    	allow from all
		<Directory>

4.	Save the file and exit the text editor.

5.	Configure Apache to use the <code>mod_rewrite</code> module.

		cd /etc/apache2/mods-enabled
		ln -s ../mods-available/rewrite.load

6.	Restart Apache.

	<pre>service apache2 restart</pre>

Continue with the next prerequisite (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a>), or start your installation by going to <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento repository</a>.

<h2 id="install-prereq-apache-centos">Installing Apache on CentOS</h2>

Magento requires Apache use server rewrites. You must also specify the type of directives that can be used in <code>.htaccess</code>, which Magento uses to specify rewrite rules.

Installing and configuring Apache is basically a three-step process: install the software, enable rewrites, and specify <code>.htaccess</code> directives.

<h3 id="apache-install-centos">Installing Apache</h3>
Install Apache 2 if you haven't already done so.

	yum -y install httpd

<h3 id="apache-rewrites">Enabling Apache Rewrites</h3>

1.	Open <code>httpd.conf</code> for editing.

	<pre>vim /etc/httpd/conf/httpd.conf</pre>

2.	Locate the block that starts with:

	<pre>&lt;Directory /var/www/html></pre>

3.	In that block, change the value of `AllowOverride` to one of the values documented on the <a href="http://httpd.apache.org/docs/2.2/mod/core.html#allowoverride" target="_blank">Apache site</a>.

4.	Save your changes to <code>httpd.conf</code> and exit the text editor.

5.	Restart Apache.

	<pre>service httpd restart</pre>

Continue with the next prerequisite (<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP CentOS</a>), or start your installation by going to <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento repository</a>.


#### Related topics:

*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.6&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and Clone the Magento repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>
