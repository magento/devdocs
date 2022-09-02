---
title: System requirements
functional_areas:
  - Install
  - System
  - Setup
redirect_from:
  - /guides/v2.4/install-gde/system-requirements-tech.html
  - /guides/v2.4/architecture/tech-stack.html
  - /system-requirements.html
---

This table shows versions of third-party software dependencies that Adobe has tested with specific {{ site.data.var.ee }} and {{ site.data.var.ce }} releases. Adobe only supports the combination of system requirements described in the following table.

For example, 2.4.3 is fully tested with MariaDB 10.4. Adobe recommends that you upgrade to MariaDB 10.4 before upgrading to 2.4.3.

{% include install/system-requirements-table.html %}

## Adobe Commerce on cloud infrastructure

Service version and compatibility support for {{site.data.var.ece}} is determined by versions deployed on the Cloud infrastructure, and sometimes differ from versions supported by Adobe Commerce on-premises deployments. For details on supported software and services deployed on {{site.data.var.ece}}, see [Supported software and services]({{ site.baseurl }}/cloud/requirements/cloud-requirements.html#cloud-arch-software).


## Miscellaneous

This section describes support and compatibility for all other types of required and optional software.

{:.bs-callout-info}
All of the following requirements apply to the latest patch release of Magento 2.4.

### Mail server

Mail Transfer Agent (MTA) or Simple Mail Transfer Protocol (SMTP) server

### Operating systems (Linux x86-64)

Linux distributions, such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and similar.
Magento is not supported on Microsoft Windows and Apple macOS.

### PHP extensions

{:.bs-callout-info}
The [PHP installation instructions][] include a step for installing these extensions.

{% include install/php-extensions-template.md %}

Refer to [official PHP documentation][] for installation details.

### PHP OPcache

We strongly recommend you verify that [PHP OPcache][] is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our [PHP documentation][].

If you must install it separately, see the [PHP OPcache documentation][].

### PHP settings

We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see [Required PHP settings][].

### PHPUnit

PHPUnit (as a command-line tool) 9.0.0

### RAM

Upgrading the Magento applications and extensions you obtain from Commerce Marketplaces and other sources can require up to 2 GB of RAM. If you are using a system with less than 2 GB of RAM, Adobe recommends you create a [swap file](https://support.magento.com/hc/en-us/articles/360032980432); otherwise, your upgrade might fail.

### System dependencies

Magento requires the following system tools for some of its operations:

*  [bash][]
*  [gzip][]
*  [lsof][]
*  [mysql][]
*  [mysqldump][]
*  [nice][]
*  [php][]
*  [sed][]
*  [tar][]

### SSL

*  A valid [security certificate][] is required for HTTPS.
*  Self-signed SSL certificates are not supported.
*  Transport Layer Security (TLS) requirement - PayPal and `repo.magento.com` both require TLS 1.2 or later.

### Supported browsers

{% include browsers/supported-browsers-24.md %}

### Xdebug

[php_xdebug 2.5.x][] or later (development environments only; can have an adverse effect on performance)

{:.bs-callout-info}
There is a known issue with `xdebug` that can affect Magento installations or access to the storefront or Admin after installation. For details, see [Known issue with xdebug][].

<!-- Link Definitions -->
[Known issue with xdebug]: https://support.magento.com/hc/en-us/articles/360034242212
[php_xdebug 2.5.x]: https://xdebug.org/download
[bash]: https://www.gnu.org/software/bash/
[gzip]: https://www.gzip.org/
[lsof]: https://linux.die.net/man/8/lsof
[mysql]: https://www.mysql.com/
[mysqldump]: https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html
[nice]: https://linux.die.net/man/1/nice
[php]: https://www.php.net/
[sed]: https://www.gnu.org/software/sed/manual/sed.html
[tar]: https://linux.die.net/man/1/tar
[PHP installation instructions]: prereq/php-settings.html
[official PHP documentation]: https://php.net/manual/en/extensions.php
[PHP OPcache]: https://php.net/manual/en/intro.opcache.php
[PHP documentation]: prereq/php-settings.html
[PHP OPcache documentation]: https://php.net/manual/en/opcache.setup.php
[Required PHP settings]: {{ page.baseurl }}/install-gde/prereq/php-settings.html
[security certificate]: https://glossary.magento.com/security-certificate
