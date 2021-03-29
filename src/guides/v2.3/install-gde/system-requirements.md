---
title: System requirements
functional_areas:
  - Install
  - System
  - Setup
redirect_from:
  - /guides/v2.3/install-gde/system-requirements-tech.html
---

The following table describes core third-party software required by the Magento platform, including support and compatibility for PHP, search, database, message broker, and caching software.

|                  |2.3.0             |2.3.1             |2.3.2             |2.3.3                  |2.3.4                  |2.3.5                  |2.3.6   |2.3.7 |2.4.0           |2.4.1     |2.4.2     |2.4.3     |2.4.4     |2.4.5     |
|------------------|------------------|------------------|------------------|-----------------------|-----------------------|-----------------------|--------|------|----------------|----------|----------|----------|----------|----------|
|Elasticsearch     |2.x(EOS), 5.x(EOS)|5.x(EOS), 6.x     |5.x(EOS), 6.x     |5.x(EOS), 6.x          |5.x(EOS), 6.x          |5.x(EOS), 6.x, 7.x     |6.x, 7.x|7.9.3 |6.x, 7.x        |7.6       |7.9       |7.9       |7.9       |7.9       |
|MariaDB           |10.1, 10.2        |10.1, 10.2        |10.1, 10.2        |10.1, 10.2             |10.1, 10.2             |10.1, 10.2             |10.2    |10.2  |10.2, 10.3, 10.4|10.2, 10.4|10.2, 10.4|10.2, 10.4|10.2, 10.4|10.2, 10.4|
|MySQL             |5.6, 5.7          |5.6, 5.7          |5.6, 5.7          |5.6, 5.7               |5.6, 5.7               |5.6, 5.7               |5.7     |5.7   |5.7, 8.0.x      |5.7, 8.0.x|5.7, 8.0.x|5.7, 8.0.x|5.7, 8.0.x|5.7, 8.0.x|
|PHP               |7.1(EOS), 7.2     |7.1(EOS), 7.2     |7.1(EOS), 7.2     |7.1(EOS), 7.2, 7.3     |7.2, 7.3               |7.2, 7.3               |7.3     |7.4   |7.3, 7.4        |7.4       |7.4       |7.4       |8         |8.1       |
|RabbitMQ          |2.x(EOS), 3.7.x   |2.x(EOS), 3.7.x   |2.x(EOS), 3.7.x   |2.x(EOS), 3.7.x        |3.7.x, 3.8.x           |3.8.x                  |3.8.x   |3.8.x |3.8.x           |3.8.x     |3.8.x     |3.8.x     |3.8.x     |3.8.x     |
|Redis             |3.2(EOS), 4.0(EOS)|4.x(EOS), 5.x     |4.x(EOS), 5.x     |4.x(EOS), 5.x          |4.x(EOS), 5.x          |4.x(EOS), 5.x          |5       |6.0.10|5.x             |5         |6         |6         |6         |6         |
|Varnish           |4.x(EOS), 5.x(EOS)|4.x(EOS), 5.x(EOS)|4.x(EOS), 5.x(EOS)|4.x(EOS), 5.x(EOS), 6.x|4.x(EOS), 5.x(EOS), 6.x|4.x(EOS), 5.x(EOS), 6.x|6.x     |6.5.1 |6.x             |6.2       |6.2       |6.2       |6.2       |6.2       |

## Miscellaneous

This section describes support and compatibility for all other types of required and optional software.

{:.bs-callout-info}
All of the following requirements apply to the latest patch release of Magento 2.3.

### Composer

[Composer][] is required for developers who wish to contribute to the Magento 2 codebase or anyone who wishes to develop Magento extensions.

Magento does not support Composer 2.x.

### Mail server

Mail Transfer Agent (MTA) or an SMTP server

### Operating system

Linux distributions, such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and similar.
Magento is not supported on Microsoft Windows and macOS.

### PHPUnit

PHPUnit (as a command-line tool) 6.2.0

### PHP extensions

{:.bs-callout-info}
The [PHP installation instructions][] include a step for installing these extensions.

{:.bs-callout-warning}
If you install Magento via cloning from the [GitHub](https://github.com/magento/magento2) repository then make sure you have the [ext-sockets](https://github.com/php-amqplib/php-amqplib/blob/master/CHANGELOG.md#281---2018-11-13) installed on your instance.

<!--{% assign packages = site.data.codebase.v2_3.open-source.composer_lock.packages %}-->
{% include install/php-extensions-template.md %}

Refer to [official PHP documentation][] for installation details.

### PHP OPcache

We strongly recommend you verify that [PHP OPcache][] is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our [PHP documentation][].

If you must install it separately, see the [PHP OPcache documentation][].

### PHP settings

We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see [Required PHP settings][].

### RAM

Upgrading the Magento applications and extensions you obtain from Magento Marketplaces and other sources can require up to 2GB of RAM. If you are using a system with less than 2GB of RAM, we recommend you create a [swap file](https://support.magento.com/hc/en-us/articles/360032980432); otherwise, your upgrade might fail.

### System dependencies

Magento requires the following system tools for some of its operations:

-  [bash][]
-  [gzip][]
-  [lsof][]
-  [mysql][]
-  [mysqldump][]
-  [nice][]
-  [php][]
-  [sed][]
-  [tar][]

### SSL

-  A valid [security certificate][] is required for HTTPS.
-  Self-signed SSL certificates are not supported.
-  Transport Layer Security (TLS) requirement - PayPal and `repo.magento.com` both require TLS 1.2 or later:

### Xdebug

[php_xdebug 2.5.x][]{:target="_blank"} or later (development environments only; can have an adverse effect on performance)

{:.bs-callout-info}
There is a known issue with `xdebug` that can affect Magento installations or access to the storefront or Magento Admin after installation. For details, see [Known issue with xdebug][].

### Web browser

{% include browsers/supported-browsers.md %}

### Web server

-  [Apache 2.4][]

   In addition, you must enable the Apache `mod_rewrite` and `mod_version` modules. The [`mod_rewrite`][] module enables the server to perform URL rewriting. The [`mod_version`][] module provides flexible version checking for different `httpd` versions. For more information, see [our Apache documentation][].

-  [nginx 1.x][]

<!-- Link Definitions -->
[`mcrypt`]: http://php.net/manual/en/book.mcrypt.php
[Known issue with xdebug]: https://support.magento.com/hc/en-us/articles/360034242212
[php_xdebug 2.5.x]: http://xdebug.org/download.php
[bash]: https://www.gnu.org/software/bash/
[gzip]: https://www.gzip.org/
[lsof]: https://linux.die.net/man/8/lsof
[mysql]: https://www.mysql.com/
[mysqldump]: https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html
[nice]: https://linux.die.net/man/1/nice
[php]: http://www.php.net/
[sed]: https://www.gnu.org/software/sed/manual/sed.html
[tar]: https://linux.die.net/man/1/tar
[Composer]: https://glossary.magento.com/composer
[Apache 2.4]: http://httpd.apache.org/download.cgi
[`mod_rewrite`]: https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html
[`mod_version`]: https://httpd.apache.org/docs/2.4/mod/mod_version.html
[our Apache documentation]: {{page.baseurl}}/install-gde/prereq/apache.html
[nginx 1.x]: https://nginx.org/en/download.html
[PHP installation instructions]: prereq/php-settings.html
[official PHP documentation]: http://php.net/manual/en/extensions.php
[PHP OPcache]: http://php.net/manual/en/intro.opcache.php
[PHP documentation]: prereq/php-settings.html
[PHP OPcache documentation]: http://php.net/manual/en/opcache.setup.php
[Required PHP settings]: {{ page.baseurl }}/install-gde/prereq/php-settings.html
[security certificate]: https://glossary.magento.com/security-certificate
