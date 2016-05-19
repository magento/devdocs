---
layout: default
group: install_pre
subgroup: Prerequisites
title: Apache
menu_title: Apache
menu_order: 01
github_link: install-gde/prereq/apache.md
redirect_from: /guides/v1.0/install-gde/prereq/apache.html
---


#### Contents

*	<a href="#apache-support">Apache versions supported</a>
*	<a href="#apache-help-beginner">Help if you're just starting out</a>
*	<a href="#apache-help-rewrite">Important: Apache rewrites and .htaccess</a>
*	<a href="#install-prereq-apache-ubuntu">Installing or upgrading Apache on Ubuntu</a>
*	<a href="#install-prereq-apache-centos">Installing Apache on CentOS 6 or 7</a>
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

Magento uses server rewrites and <code>.htaccess</code> to provide directory-level instructions for Apache. The following instructions are included in all of the other sections in this topic as well.

{% collapsible Click to show Apache 2.4 instructions %}
{% include install/allowoverrides24.md %}
{% endcollapsible %}

{% collapsible Click to show Apache 2.2 instructions %}
{% include install/allowoverrides22.md %}
{% endcollapsible %}

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
*	Upgrade to Apache 2.4 on Ubuntu 12 to use PHP 5.6 or PHP 7

<h3 id="install-prereq-apache-ubuntu-install">Installing Apache on Ubuntu 14 or Ubuntu 12</h3>
{% collapsible Click to show/hide content %}
To install the default version of Apache (Ubuntu 14&mdash;Apache 2.4, Ubuntu 12&mdash;Apache 2.2):

1.	Install Apache

		apt-get -y install apache2

2.	Verify the installation.

		apache2 -v

	The result displays similar to the following:

		Server version: Apache/2.2.22 (Ubuntu)
		Server built:   Jul 22 2014 14:35:32

3.	Enable rewrites and `.htaccess`:

	*	<a href="#apache-rewrites2.4">Enable rewrites and .htaccess for Apache 2.4</a>
	*	<a href="#apache-rewrites2.2">Enable rewrites and .htaccess for Apache 2.2</a>

{% include install/allowoverrides24.md %}

#### Next steps
*	<a href="#403-apache">Solving 403 (Forbidden) errors</a>
*	Continue with the next prerequisite (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a>)
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Determine your installation or upgrade path</a>

{% include install/allowoverrides22.md %}

#### Next steps
*	<a href="#403-apache">Solving 403 (Forbidden) errors</a>
*	Continue with the next prerequisite (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a>)
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Determine your installation or upgrade path</a>
{% endcollapsible %}

<h3 id="install-prereq-apache-ubuntu-upgrade">Upgrading Apache on Ubuntu 12</h3>
{% collapsible Click to show/hide content %}
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

4.	Continue with the next section.

{% include install/allowoverrides24.md %}

#### Next steps
*	<a href="#403-apache">Solving 403 (Forbidden) errors</a>
*	Continue with the next prerequisite (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a>)
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Determine your installation or upgrade path</a>
{% endcollapsible %}

<h2 id="install-prereq-apache-centos">Installing Apache on CentOS 6 or 7</h2>
{% collapsible Click to show/hide content %}
Magento requires Apache use server rewrites. You must also specify the type of directives that can be used in <code>.htaccess</code>, which Magento uses to specify rewrite rules.

Installing and configuring Apache is basically a three-step process: install the software, enable rewrites, and specify <code>.htaccess</code> directives.

<h3 id="apache-install-centos">Installing Apache</h3>
1.	Install Apache 2 if you haven't already done so.

		yum -y install httpd

2.	Verify the installation:

		httpd -v

	Messages similar to the following display to confirm the installation was successful:

		Server version: Apache/2.2.15 (Unix)
		Server built:   Oct 16 2014 14:48:21

3.	Continue with the next section.

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>Even though Apache 2.4 is provided by default with CentOS 7, you configure it like Apache 2.2. See the following section.</p></span>
</div>

{% include install/allowoverrides22.md %}

#### Next steps
*	<a href="#403-apache">Solving 403 (Forbidden) errors</a>
*	Continue with the next prerequisite (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a>)
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Determine your installation or upgrade path</a>
{% endcollapsible %}

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
	</Directory>

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>The preceding values for <code>Order</code> might not work in all cases. For more information, see the <a href="https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html#order" target="_blank">Apache documentation</a>.</p></span>
</div>


<h4 id="install-apache-403_2.2">Solving 403 Forbidden errors for Apache 2.2</h4>
To enable web site visitors to access your site, use the <a href="http://httpd.apache.org/docs/2.2/mod/mod_authz_host.html#allow" target="_blank">Allow directive</a>.

For example:
	
	<Directory /var/www/>
		Options Indexes FollowSymLinks MultiViews
		AllowOverride <value from Apache site>
		Order allow,deny
		Allow from all
	</Directory>

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>The preceding values for <code>Order</code> might not work in all cases. For more information, see the <a href="https://httpd.apache.org/docs/2.2/mod/mod_authz_host.html#order" target="_blank">Apache documentation</a>.</p></span>
</div>

#### Related topics:

*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.6&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Determine your installation or upgrade path</a>

