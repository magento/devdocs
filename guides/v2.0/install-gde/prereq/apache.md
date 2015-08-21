---
layout: default
group: install_pre
subgroup: Prerequisites
title: Apache
menu_title: Apache
menu_order: 2
github_link: install-gde/prereq/apache.md
redirect_from: /guides/v1.0/install-gde/prereq/apache.html
---
<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: README owned by core -->


#### Contents

*	<a href="#apache-support">Apache versions supported</a>
*	<a href="#apache-help-beginner">Help if you're just starting out</a>
*	<a href="#apache-help-rewrite">Important: Apache rewrites and .htaccess</a>
*	<a href="#install-prereq-apache-ubuntu">Installing or upgrading Apache on Ubuntu</a>
*	<a href="#install-prereq-apache-centos">Installing Apache on CentOS</a>
*	<a href="#403-apache">Solving 403 (Forbidden) errors</a>

<h2 id="apache-support">Apache versions supported</h2>

Magento requires Apache 2.2.x or 2.4.x.

<h2 id="apache-help-beginner">Help if you're just starting out</h2>
If you're new to all this and need some help getting started, we suggest the following:

*	<a href="{{ site.gdeurl }}install-gde/basics/basics_magento-installed.html">Is the Magento software installed already?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">What is the software that the Magento server needs to run?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_os-version.html">What operating system is my server running?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">How do I log in to my Magento server using a terminal, command prompt, or SSH?</a>

<h2 id="apache-help-rewrite">Important: Apache rewrites and .htaccess</h2>
This topic discusses how to enable Apache 2.2 rewrites and specify a setting for the <a href="http://httpd.apache.org/docs/current/howto/htaccess.html" target="_blank">distributed configuration file, <code>.htaccess</code></a>.

Magento uses server rewrites and <code>.htaccess</code> to provide directory-level instructions for Apache.

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>Failure to enable these settings typically results in no styles displaying on your storefront or Admin.</p></span>
</div>

<h2 id="install-prereq-apache-verify">Verify the Apache version</h2>
To verify the Apache version you're currently running, enter:

	apache2 -v

The result displays similar to the following:

	Server version: Apache/2.2.22 (Ubuntu)
	Server built:   Jul 22 2014 14:35:32

*	If Apache is *not* installed, see:
	*	<a href="#install-prereq-apache-ubuntu">Installing or upgrading Apache on Ubuntu</a>
	*	<a href="#install-prereq-apache-centos">Installing Apache on CentOS</a>
*	If Apache 2.2 is installed on Ubuntu 12 *and* you want to use PHP 5.6, see the next section

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

{% include install/allowoverrides22.html %}

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
	<p>If the <code>apt-get install</code> command fails because of unmet dependencies, consult a resource like <a href="http://askubuntu.com/questions/140246/how-do-i-resolve-unmet-dependencies-after-adding-a-ppa" target="_blank">http://askubuntu.com</a>.</p></span>
	</div>

3.	Verify the installation.

		apache2 -v

	Messages similar to the following should display:

		Server version: Apache/2.4.10 (Ubuntu)
		Server built:   Jul 22 2014 22:46:25

{% include install/allowoverrides24.html %}

Next steps:

*	<a href="#403-apache">Solving 403 (Forbidden) errors</a>
*	Continue with the next prerequisite (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a>)
*	Start your installation by going to <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento repository</a>.

<h2 id="install-prereq-apache-centos">Installing Apache on CentOS</h2>

Magento requires Apache use server rewrites. You must also specify the type of directives that can be used in <code>.htaccess</code>, which Magento uses to specify rewrite rules.

Installing and configuring Apache is basically a three-step process: install the software, enable rewrites, and specify <code>.htaccess</code> directives.

<h3 id="apache-install-centos">Installing Apache</h3>
Install Apache 2 if you haven't already done so.

	yum -y install httpd

{% include install/allowoverrides22.html %}

Next steps:

*	<a href="#403-apache">Solving 403 (Forbidden) errors</a>
*	Continue with the next prerequisite (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a>)
*	Start your installation by going to <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento repository</a>.

<h2 id="403-apache">Solving 403 (Forbidden) errors</h2>
If you encounter 403 Forbidden errors when trying to access the Magento site, you can update your Apache configuration or your virtual host configuration to enable visitors to the site as discussed in one of the following sections:

*	<a href="#install-apache-403_2.4">Solving 403 Forbidden errors for Apache 2.4</a>
*	<a href="#install-apache-403_2.2">Solving 403 Forbidden errors for Apache 2.2</a>


<h4 id="install-apache-403_2.4">Solving 403 Forbidden errors for Apache 2.4</h4>
To enable web site visitors to access your site, use one of the <a href="http://httpd.apache.org/docs/2.4/howto/access.html" target="_blank">Require directives</a>.

For example:
	
	<Directory /var/www/>
		Options Indexes FollowSymLinks MultiViews
		AllowOverride <value from Apache site>
		Order allow,deny
		Require all granted
	<Directory>

<h4 id="install-apache-403_2.2">Solving 403 Forbidden errors for Apache 2.2</h4>
To enable web site visitors to access your site, use the <a href="http://httpd.apache.org/docs/2.2/mod/mod_authz_host.html#allow" target="_blank">Allow directive</a>.

For example:
	
	<Directory /var/www/>
		Options Indexes FollowSymLinks MultiViews
		AllowOverride <value from Apache site>
		Order allow,deny
		Allow from all
	<Directory>



#### Related topics:

*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.6&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Ways to install the Magento software</a>

