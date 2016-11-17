---
layout: default
group: install_pre
subgroup: Prerequisites
title: Required PHP settings
menu_title: Required PHP settings
menu_order: 24
level3_menu_node: level3child
level3_subgroup: php
version: 2.0
github_link: install-gde/prereq/php-settings.md
---

#### Contents

*	[Required PHP settings](#php-required)
*	[Step 1: Find PHP configuration files](#php-required-find) 
*	[Step 2: How to set `php.ini` options](#php-required-set) 
*	[Step 3: Set `opcache.ini` options](#php-required-opcache)

## Required PHP settings {#php-required}
This topic discusses how to set required PHP options.

{% collapsible About required and recommended PHP options: %}

*	Set the system time zone for PHP; otherwise, errors like the following display during the installation and time-related operations like cron might not work:

		PHP Warning:  date(): It is not safe to rely on the system's timezone settings. [more messages follow]
*	Set [`always_populate_raw_post_data = -1`](http://php.net/manual/en/ini.core.php#ini.always-populate-raw-post-data){:target="_blank"}

	`always_populate_raw_post_data` is deprecated in PHP 5.6 and is dropped in PHP 7.0.x. This setting causes PHP to always populate `$HTTP_RAW_POST_DATA` with raw POST data. Failure to set this properly in PHP 5.5 or 5.6 results in errors when connecting to the database.
*	Set the PHP memory limit.

	Our detailed recommendations are:

	*	Compiling code, `768M`
    *	Deploying static assets, `768M`
    *	Installing and updating Magento components from Magento Marketplace, `2G`
    *	Testing, `2G`
*	Disable [`asp_tags`](http://php.net/manual/en/ini.core.php#ini.asp-tags){:target="_blank"}

	If `asp_tags are` enabled, errors display when accessing PHTML templates.

	`asp_tags` will be removed in PHP 7.
*	Enable [`opcache.save_comments`](http://php.net/manual/en/opcache.configuration.php#ini.opcache.save_comments){:target="_blank"}, which is required for Magento 2.1 and later. 

	We recommend you enable the [PHP OpCache](http://php.net/manual/en/intro.opcache.php){:target="_blank"} for performance reasons. The OPcache is enabled in many PHP distributions.

	Magento 2.1 and later use PHP code comments in the `getDocComment` validation call in the [`getExtensionAttributes`]({{ site.mage2100url }}lib/internal/Magento/Framework/Api/ExtensionAttributesFactory.php#L64-L73){:target="_blank"} method in `Magento\Framework\Api\ExtensionAttributesFactory.php`.

<div class="bs-callout bs-callout-warning">
    <p>To avoid issues during installation and upgrade, we strongly recommend you apply the same PHP settings to both the PHP command-line configuration and to the PHP web server plug-in's configuration. For more information, see the next section.</p>
</div>

{% endcollapsible %}

### Step 1: Find PHP configuration files {#php-required-find}
This section discusses how you find the configuration files necesary to update required settings.

{% collapsible To find the PHP configuration file, php.ini: %}
To find the web server configuration, run a <a href="{{page.baseurl}}install-gde/prereq/optional.html#install-optional-phpinfo">`phpinfo.php` file</a> in your web browser and look for the Loaded Configuration File as follows:

<img src="{{ site.baseurl }}common/images/config_phpini-webserver.png" width="700px">

To locate the PHP command-line configuration, enter

	php --ini

Use the value of Loaded Configuration file.

<div class="bs-callout bs-callout-warning">
    <p>If you have only one <code>php.ini</code> file, make the changes in that file. If you have two <code>php.ini</code> files, make the changes in <em>all</em> files. Failure to do so might cause unpredictable performance.</p>
</div> 

{% endcollapsible %}

{% collapsible To find OPcache configuration settings: %}

PHP OPcache settings are typically located either in `php.ini` or `opcache.ini`. The location might depend on your operating system and PHP version. The OPcache configuration file might have an `[opcache]` section or settings like `opcache.enable`.

Use the following guidelines to find it:

*	Apache web server:

	For Ubuntu with Apache, OPcache settings are typically located in `php.ini`. 

	For CentOS with Apache or nginx, OPcache settings are typically located in `/etc/php.d/opcache.ini`

	If not, use the following command to locate it:

		sudo find / -name 'opcache.ini'

*	nginx web server with PHP-FPM: `/etc/php5/fpm/php.ini`

If you have more than one `opcache.ini`, modify all of them.

{% endcollapsible %}

### Step 2: How to set PHP options {#php-required-set}

{% collapsible To set PHP options: %}

1.	Open a `php.ini` in a text editor.
3.	Locate your server's time zone in the available [time zone settings](http://php.net/manual/en/timezones.php){:target="_blank"}
4.	Locate the following setting and uncomment it if necessary:

		date.timezone =
5.	Add the time zone setting you found in step 2.
6.	Change the value of `memory_limit` to one of the values at the beginning of this section.

	For example,

		memory_limit=2G
7.	_Required for PHP 5.6, recommended for PHP 5.5_. Locate `always_populate_raw_post_data`, uncomment it if necessary, and set it as follows:

		always_populate_raw_post_data = -1
8.	Locate the following setting:

		asp_tags =
9.	Make sure its value is set to `Off`.
10.	Save your changes and exit the text editor.
11.	Open the other `php.ini` (if they are different) and make the same changes in it.

{% endcollapsible %}

### Step 3: Set OPcache options {#php-required-opcache}

{% collapsible To set opcache.ini options: %}

12.	Open your OpCache configuration file in a text editor:

	*	`opcache.ini` (CentOS)
	*	`php.ini` (Ubuntu)
	*	`/etc/php5/fpm/php.ini` (nginx web server (CentOS or Ubuntu))
13.	Locate `opcache.save_comments` and uncomment it if necessary.
14.	Make sure its value is set to `1`.
15.	Save your changes and exit the text editor.
11.	Restart your web server:

	*	Apache, Ubuntu: `service apache2 restart`
	*	Apache, CentOS: `service httpd restart`
	*	nginx, Ubuntu and CentOS: `service nginx restart`

{% endcollapsible %}

#### Related topics

*	<a href="{{page.baseurl}}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{page.baseurl}}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{page.baseurl}}install-gde/prereq/php-centos.html">PHP 5.5, 5.6, or 7.0&mdash;CentOS</a>
*	<a href="{{page.baseurl}}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{page.baseurl}}install-gde/prereq/optional.html">Installing optional software</a>
*	[How to get the Magento software]({{ page.baseurl }}install-gde/bk-install-guide.html)

