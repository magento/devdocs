---
group: installation-guide
title: Required PHP settings
functional_areas:
  - Install
  - System
  - Setup
redirect_from: 
  - /guides/v2.3/install-gde/prereq/php-settings-ubuntu.html
---

This topic discusses how to set required [PHP](https://glossary.magento.com/php) options.

{:.bs-callout-info}
All 3rd party libraries now support PHP 7.2.
If you are interested in participating in Magento Community projects we welcome your help! See our [ZenHub board](https://app.zenhub.com/workspace/o/magento-engcom/php-7.2-support/boards?repos=116423356,116426364,115111902) for a full list of outstanding issues.

<!--{% assign supported_php_versions = site.data.codebase.v2_3.open-source.composer_lock.platform.php | split: "||" %}-->
{% include install/php-versions-template.md %}

Magento 2.3.3 supports PHP 7.3.

## Verify PHP is installed {#centos-verify-php}

Most flavors of Linux have PHP installed by default.
This topic assumes that you have already installed PHP.
To verify if PHP is installed already, in the command line, type:

```bash
php -v
```

If [PHP](https://glossary.magento.com/php) is installed, a message similar to the following displays:

```terminal
PHP 7.2.0 (cli) (built: Jan 9 2018 09:23:16) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.1.0, Copyright (c) 1998-2018 Zend Technologies with Zend OPcache v7.1.6, Copyright (c) 1999-2018, by Zend Technologies
```

If PHP is not installed, or a version upgrade is needed, install it following instructions for your particular Linux flavor.
On CentOS, [additional steps may be required][].

## Verify installed extensions

Magento requires a set of extensions to be installed:

-  bcmath
-  devel
-  gd
-  iconv
-  intl
-  json
-  mbstring
-  mysql
-  mysqlnd
-  opcache
-  pdo
-  soap
-  xml

In the command line, type:

```bash
php -m
```

to see the list of installed modules. Verify that the listed extensions are installed.
If any modules are missing, they are added using the same workflow used for installing PHP. For example, if you use `yum` to install PHP, the PHP 7.2 modules can be added with:

```bash
 yum -y install php72u-pdo php72u-mysqlnd php72u-opcache php72u-xml php72u-gd php72u-devel php72u-mysql php72u-intl php72u-mbstring php72u-bcmath php72u-json php72u-iconv php72u-soap
```

{:.bs-callout-info}
The `bcmath` extension is required for {{site.data.var.ee}} only.

## Check PHP settings

-  Set the system time zone for PHP; otherwise, errors like the following display during the installation and time-related operations like cron might not work:

    PHP Warning:  date(): It is not safe to rely on the system's timezone settings. [more messages follow]

-  Set the PHP memory limit.

   Our detailed recommendations are:

   -  Compiling code or deploying static assets, `756M`
      -  Installing and updating Magento components from Magento Marketplace, `2G`
      -  Testing, `~3-4G`

-  Disable [`asp_tags`](http://php.net/manual/en/ini.core.php#ini.asp-tags){:target="_blank"}

   If `asp_tags are` enabled, errors display when accessing PHTML templates.
  `asp_tags` were removed in PHP 7.

-  Enable [`opcache.save_comments`](http://php.net/manual/en/opcache.configuration.php#ini.opcache.save_comments){:target="_blank"}, which is required for Magento 2.1 and later.

   We recommend you enable the [PHP OpCache](http://php.net/manual/en/intro.opcache.php){:target="_blank"} for performance reasons. The OPcache is enabled in many PHP distributions.

   Magento 2.1 and later use PHP code comments for code generation.

{:.bs-callout-info}
To avoid issues during installation and upgrade, we strongly recommend you apply the same PHP settings to both the PHP command-line configuration and to the PHP web server plug-in's configuration. For more information, see the next section.

## Step 1: Find PHP configuration files {#php-required-find}

This section discusses how you find the configuration files necessary to update required settings.

### Find `php.ini` configuration file

To find the web server configuration, run a [`phpinfo.php` file]({{page.baseurl}}/install-gde/prereq/optional.html#install-optional-phpinfo) in your web browser and look for the Loaded Configuration File as follows:

![]({{ site.baseurl }}/common/images/config_phpini-webserver.png)

To locate the PHP command-line configuration, enter

```bash
php --ini
```

Use the value of Loaded Configuration file.

{:.bs-callout-info}
If you have only one `php.ini` file, make the changes in that file. If you have two `php.ini` files, make the changes in *all* files. Failure to do so might cause unpredictable performance.

### Find OPcache configuration settings

PHP OPcache settings are typically located either in `php.ini` or `opcache.ini`. The location might depend on your operating system and PHP version. The OPcache configuration file might have an `opcache` section or settings like `opcache.enable`.

Use the following guidelines to find it:

-  Apache web server:

   For Ubuntu with Apache, OPcache settings are typically located in `php.ini`.

   For CentOS with Apache or nginx, OPcache settings are typically located in `/etc/php.d/opcache.ini`

   If not, use the following command to locate it:

   ```bash
   sudo find / -name 'opcache.ini'
   ```

-  nginx web server with PHP-FPM: `/etc/php5/fpm/php.ini`

If you have more than one `opcache.ini`, modify all of them.

## Step 2: How to set PHP options {#php-required-set}

To set PHP options:

1. Open a `php.ini` in a text editor.
1. Locate your server's time zone in the available [time zone settings](http://php.net/manual/en/timezones.php){:target="_blank"}
1. Locate the following setting and uncomment it if necessary:

   ```conf
   date.timezone =
   ```

1. Add the time zone setting you found in step 2.
1. Change the value of `memory_limit` to one of the values at the beginning of this section.

   For example,

   ```conf
   memory_limit=2G
   ```

1. Locate the following setting:

   ```conf
   asp_tags =
   ```

1. Make sure its value is set to `Off`.
1. Save your changes and exit the text editor.
1. Open the other `php.ini` (if they are different) and make the same changes in it.

## Step 3: Set OPcache options {#php-required-opcache}

To set opcache.ini options:

1. Open your OpCache configuration file in a text editor:

   -  `opcache.ini` (CentOS)
   -  `php.ini` (Ubuntu)
   -  `/etc/php5/fpm/php.ini` (nginx web server (CentOS or Ubuntu))

1. Locate `opcache.save_comments` and uncomment it if necessary.
1. Make sure its value is set to `1`.
1. Save your changes and exit the text editor.
1. Restart your web server:

   -  Apache, Ubuntu: `service apache2 restart`
   -  Apache, CentOS: `service httpd restart`
   -  nginx, Ubuntu and CentOS: `service nginx restart`

<!-- Link Definitions -->

[additional steps may be required]: https://wiki.centos.org/HowTos/php7
