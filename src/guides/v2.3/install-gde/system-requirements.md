---
title: System requirements
functional_areas:
  - Install
  - System
  - Setup
redirect_from:
  - /guides/v2.3/install-gde/system-requirements-tech.html
  - /guides/v2.3/architecture/tech-stack.html
---

{:.bs-callout-info}
If you are working on a {{site.data.var.ece}} project, see [Service versions]({{ site.baseurl }}/cloud/project/services.html#service-versions) in the _Cloud Guide_.

This table notes software versions that were officially tested and supported at the time of the Magento version's release. Newer versions of required software may work but have not been tested.

{% include install/system-requirements-table.md %}

## Miscellaneous

This section describes support and compatibility for all other types of required and optional software.

{:.bs-callout-info}
All of the following requirements apply to the latest patch release of Magento 2.3.

### Mail server

Mail Transfer Agent (MTA) or an SMTP server

### Operating systems (Linux x86-64)

Linux distributions, such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and similar.
Magento is not supported on Microsoft Windows and macOS.

### PHP extensions

{:.bs-callout-info}
The [PHP installation instructions][] include a step for installing these extensions.

{:.bs-callout-warning}
If you install Magento after cloning from the [GitHub](https://github.com/magento/magento2) repository, then make sure you have [ext-sockets](https://github.com/php-amqplib/php-amqplib/blob/master/CHANGELOG.md#281---2018-11-13) installed on your system.

<!--{% assign packages = site.data.codebase.v2_3.open-source.composer_lock.packages %}-->
{% include install/php-extensions-template-2.3.md %}

Refer to [official PHP documentation][] for installation details.

### PHP OPcache

We strongly recommend you verify that [PHP OPcache][] is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our [PHP documentation][].

If you must install it separately, see the [PHP OPcache documentation][].

### PHP settings

We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see [Required PHP settings][].

### PHPUnit

PHPUnit (as a command-line tool) 6.2.0

### RAM

Upgrading the Magento applications and extensions you obtain from Commerce Marketplaces and other sources can require up to 2GB of RAM. If you are using a system with less than 2GB of RAM, we recommend you create a [swap file](https://support.magento.com/hc/en-us/articles/360032980432); otherwise, your upgrade might fail.

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

### Supported browsers

{% include browsers/supported-browsers.md %}

### Xdebug

[php_xdebug 2.5.x][]{:target="_blank"} or later (development environments only; can have an adverse effect on performance)

{:.bs-callout-info}
There is a known issue with `xdebug` that can affect Magento installations or access to the storefront or Admin after installation. For details, see [Known issue with xdebug][].

<!-- Link Definitions -->
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
[PHP installation instructions]: prereq/php-settings.html
[official PHP documentation]: http://php.net/manual/en/extensions.php
[PHP OPcache]: http://php.net/manual/en/intro.opcache.php
[PHP documentation]: prereq/php-settings.html
[PHP OPcache documentation]: http://php.net/manual/en/opcache.setup.php
[Required PHP settings]: {{ page.baseurl }}/install-gde/prereq/php-settings.html
[security certificate]: https://glossary.magento.com/security-certificate
