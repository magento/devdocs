---
title: System requirements
functional_areas:
  - Install
  - System
  - Setup
redirect_from:
  - /guides/v2.3/install-gde/system-requirements-tech.html
---

Examples of moving system requirements to a table format:

-  [https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies](https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies)
-  [https://www.astronomer.io/docs/enterprise/v0.23/resources/version-compatibility-reference](https://www.astronomer.io/docs/enterprise/v0.23/resources/version-compatibility-reference)
-  [https://docs.snowplowanalytics.com/docs/pipeline-components-and-applications/version-compatibility-matrix/](https://docs.snowplowanalytics.com/docs/pipeline-components-and-applications/version-compatibility-matrix/)
-  [https://www.elastic.co/guide/en/elasticsearch/client/curator/current/version-compatibility.html](https://www.elastic.co/guide/en/elasticsearch/client/curator/current/version-compatibility.html)
-  [https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/release-notes/cr-client-compatibity-matrix.html](https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/release-notes/cr-client-compatibity-matrix.html)
-  [https://docs.marklogic.com/datahub/5.4/refs/version-compatibility.html](https://docs.marklogic.com/datahub/5.4/refs/version-compatibility.html)

## Questions

1. Is the intent to show a comparison of dependencies across all supported versions of Magento in the same table?
1. Do we want to show both 2.3.x and 2.4.x together or separately?

## Example 1

This is how we currently show version dependencies for [cloud](https://devdocs.magento.com/cloud/project/services.html#service-versions). It does not include all items from the on-prem system requirements page (e.g., OS, browser, web server, MySQL, Composer):

{:.error-table}
Service         | Magento 2.4      | Magento 2.3                                                                                                                                         | Magento 2.2
----------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`elasticsearch` | 7.7, 7.9         | **Magento version 2.3.5 and later**— 5.2, 6.5, 6.8, 7.5, 7.7, 7.9<br>**Magento version 2.3.1 to 2.3.4**— 5.2, 6.5<br>**Magento version 2.3.0**— 5.2 | **Magento version 2.2.8 and later**— 5.2, 6.5 <br>**Magento version 2.2.0 to 2.2.7**— 5.2
`mariadb`       | 10.2, 10.3, 10.4 | **Magento version 2.3.0 to 2.3.5**–10.1 to 10.2<br>                                                                                                 | 10.1 to 10.2
`nginx`         |                  | 1.9                                                                                                                                                 | 1.9
`node`          |                  | 6, 8, 10, 11                                                                                                                                        | 6, 8, 10, 11
`php`           | 7.3, 7.4         | **Magento version 2.3.4 and later**— 7.1, 7.2, 7.3<br>**Magento version 2.3.3**— 7.1, 7.2, 7.3<br>**Magento version 2.3.0 to 2.3.2**—  7.1, 7.2     | **Magento version 2.2.10 and later**—  7.1, 7.2<br>**Magento version 2.2.5 to 2.2.9**— 7.0, 7.1<br>**Magento version 2.2.4 and earlier**— 7.0.2, 7.0.4, ~7.0.6, 7.1<br><br>**Note:** Beginning with {{ site.data.var.ct }} v2002.1.0, you must use PHP version 7.1.3 or later for both Magento 2.2 and 2.3.
`rabbitmq`      | 3.8              | **Magento version 2.3.5**–3.8<br>**Magento version 2.3.3 - 2.3.4**— 3.7, 3.8<br>**Magento version 2.3.0 to 2.3.3**— 3.7                             | 3.5
`redis`         | 5.x, 6.x         | **Magento version 2.3.1 - 2.3.7**–5.x, 6.x<br>**Magento version 2.3.0**— 3.2                                                                        | 3.2, 5.0, 6.x
`varnish`       | 6.x              | **Magento version 2.3.3 to 2.3.5**— 4.0, 5.0, 6.2<br>**Magento version 2.3.0 to 2.3.2**— 4.0, 5.0                                                   | 4.0, 5.0<br>**Note:** On Cloud projects, you must use the [Fastly service]({{site.baseurl}}/cloud/cdn/cloud-fastly.html) for caching. Varnish is available only for local development.

### Modified for on-prem

Service          | Magento 2.4                                                                                                                                                                                                                                                                                                                                                                                                                               | Magento 2.3
-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------
Operating system | RedHat Enterprise Linux (RHEL)<br>CentOS<br>Ubuntu<br>Debian                                                                                                                                                                                                                                                                                                                                                                              | RedHat Enterprise Linux (RHEL)<br>CentOS<br>Ubuntu<br>Debian
Browser          | Microsoft Edge, latest–1<br>Firefox latest, latest–1 (any operating system)<br>Chrome latest, latest–1 (any operating system)<br>Safari latest, latest–1 (Mac OS only)<br>Safari Mobile for iPad 2, iPad Mini, iPad with Retina Display (iOS 12 or later), for desktop storefront<br>Safari Mobile for iPhone 6 or later; iOS 12 or later, for mobile storefront<br>Chrome for mobile latest–1 (Android 4 or later) for mobile storefront | Microsoft Edge, latest–1<br>Firefox latest, latest–1 (any operating system)<br>Chrome latest, latest–1 (any operating system)<br>Safari latest, latest–1 (Mac OS only)<br>Safari Mobile for iPad 2, iPad Mini, iPad with Retina Display (iOS 12 or later), for desktop storefront<br>Safari Mobile for iPhone 6 or later; iOS 12 or later, for mobile storefront<br>Chrome for mobile latest–1 (Android 4 or later) for mobile storefront
Composer         | 1.x<br>2.x                                                                                                                                                                                                                                                                                                                                                                                                                                | 1.x
Web server       | Apache 2.4<br>nginx 1.x                                                                                                                                                                                                                                                                                                                                                                                                                   | Apache 2.4<br>nginx 1.x
Database         | MySQL 8.0<br>MariaDB 10.4                                                                                                                                                                                                                                                                                                                                                                                                                 | MySQL 5.7<br>MariaDB 10.2
PHP              | 7.4                                                                                                                                                                                                                                                                                                                                                                                                                                       | **Magento version 2.3.4 and later**— 7.1, 7.2, 7.3<br>**Magento version 2.3.3**— 7.1, 7.2, 7.3<br>**Magento version 2.3.0 to 2.3.2**—  7.1, 7.2
Elasticsearch    | 7.7, 7.9                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Magento version 2.3.5 and later**— 5.2, 6.5, 6.8, 7.5, 7.7, 7.9<br>**Magento version 2.3.1 to 2.3.4**— 5.2, 6.5<br>**Magento version 2.3.0**— 5.2
SSL              | 1.2                                                                                                                                                                                                                                                                                                                                                                                                                                       | 1.2
Redis            | 5.x, 6.x                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Magento version 2.3.1 - 2.3.7**–5.x, 6.x<br>**Magento version 2.3.0**— 3.2
RabbitMQ         | 3.8                                                                                                                                                                                                                                                                                                                                                                                                                                       | **Magento version 2.3.5**–3.8<br>**Magento version 2.3.3 - 2.3.4**— 3.7, 3.8<br>**Magento version 2.3.0 to 2.3.3**— 3.7
Varnish          | 6.x                                                                                                                                                                                                                                                                                                                                                                                                                                       | **Magento version 2.3.3 to 2.3.5**— 4.0, 5.0, 6.2<br>**Magento version 2.3.0 to 2.3.2**— 4.0, 5.0
XDebug           | 2.5.x                                                                                                                                                                                                                                                                                                                                                                                                                                     | 2.5.x
PHPUnit          | 9.0.0                                                                                                                                                                                                                                                                                                                                                                                                                                     | 6.2.0

## Example 2

This option is probably the best unless the goal is to compare dependencies across versions of Magento in the same table.

### Magento 2.4.2

Service          | Version
-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Operating system | RedHat Enterprise Linux (RHEL)<br>CentOS<br>Ubuntu<br>Debian
Browser          | Microsoft Edge, latest–1<br>Firefox latest, latest–1 (any operating system)<br>Chrome latest, latest–1 (any operating system)<br>Safari latest, latest–1 (Mac OS only)<br>Safari Mobile for iPad 2, iPad Mini, iPad with Retina Display (iOS 12 or later), for desktop storefront<br>Safari Mobile for iPhone 6 or later; iOS 12 or later, for mobile storefront<br>Chrome for mobile latest–1 (Android 4 or later) for mobile storefront
Composer         | 1.x<br>2.x
Web server       | Apache 2.4<br>nginix 1.x
Database         | MySQL 8.0<br>MariaDB 10.4 (cloud)
PHP              | 7.4.0
Elasticsearch    | 7.9.x
SSL              | 1.2
Redis            | 6.x
Varnish          | 6.4
RabbitMQ         | 3.8.x
XDebug           | 2.5.x
PHPUnit          | 9.0.0

### Magento 2.4.1

Service          | Version
-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Operating system | RedHat Enterprise Linux (RHEL)<br>CentOS<br>Ubuntu<br>Debian
Browser          | Microsoft Edge, latest–1<br>Firefox latest, latest–1 (any operating system)<br>Chrome latest, latest–1 (any operating system)<br>Safari latest, latest–1 (Mac OS only)<br>Safari Mobile for iPad 2, iPad Mini, iPad with Retina Display (iOS 12 or later), for desktop storefront<br>Safari Mobile for iPhone 6 or later; iOS 12 or later, for mobile storefront<br>Chrome for mobile latest–1 (Android 4 or later) for mobile storefront
Composer         | 1.x
Web server       | Apache 2.4<br>nginix 1.x
Database         | MySQL 8.0<br>MariaDB 10.4 (cloud)
PHP              | 7.4.0
Elasticsearch    | 7.4.x
SSL              | 1.2
Redis            | 6.x
Varnish          | 6.4
RabbitMQ         | 3.8.x
XDebug           | 2.5.x
PHPUnit          | 9.0.0

### Magento 2.4.0

Service          | Version
-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Operating system | RedHat Enterprise Linux (RHEL)<br>CentOS<br>Ubuntu<br>Debian
Browser          | Microsoft Edge, latest–1<br>Firefox latest, latest–1 (any operating system)<br>Chrome latest, latest–1 (any operating system)<br>Safari latest, latest–1 (Mac OS only)<br>Safari Mobile for iPad 2, iPad Mini, iPad with Retina Display (iOS 12 or later), for desktop storefront<br>Safari Mobile for iPhone 6 or later; iOS 12 or later, for mobile storefront<br>Chrome for mobile latest–1 (Android 4 or later) for mobile storefront
Composer         | 1.x
Web server       | Apache 2.4<br>nginix 1.x
Database         | MySQL 8.0<br>MariaDB 10.4 (cloud)
PHP              | 7.4.0
Elasticsearch    | 7.4.x
SSL              | 1.2
Redis            | 6.x
Varnish          | 6.4
RabbitMQ         | 3.8.x
XDebug           | 2.5.x
PHPUnit          | 9.0.0

## Example 3

This option is not ideal unless we remove or simplify the operating system and browser columns, but it treats each patch version as a separate entity, which may be helpful (unless we are trying to compare across versions of Magento):

### Magento 2.4.2

Operating system                                             | Browser                                                                                                                                                                                                                                                                                                                                                                                                                                   | Composer   | Web server               | Database                          | PHP   | Elasticsearch | SSL | Redis | Varnish | RabbitMQ | XDebug | PHPUnit
-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|--------------------------|-----------------------------------|-------|---------------|-----|-------|---------|----------|--------|--------
RedHat Enterprise Linux (RHEL)<br>CentOS<br>Ubuntu<br>Debian | Microsoft Edge, latest–1<br>Firefox latest, latest–1 (any operating system)<br>Chrome latest, latest–1 (any operating system)<br>Safari latest, latest–1 (Mac OS only)<br>Safari Mobile for iPad 2, iPad Mini, iPad with Retina Display (iOS 12 or later), for desktop storefront<br>Safari Mobile for iPhone 6 or later; iOS 12 or later, for mobile storefront<br>Chrome for mobile latest–1 (Android 4 or later) for mobile storefront | 1.x<br>2.x | Apache 2.4<br>nginix 1.x | MySQL 8.0<br>MariaDB 10.4 (cloud) | 7.4.0 | 7.9.x         | 1.2 | 6.x   | 6.4     | 3.8.x    | 2.5.x  | 9.0.0

### Magento 2.4.1

Composer   | Web server               | Database                          | PHP   | Elasticsearch | SSL | Redis | Varnish | RabbitMQ | XDebug | PHPUnit
-------------------------------------------------------------|-----------------------------------------------------------------------------------------
1.x<br>2.x | Apache 2.4<br>nginix 1.x | MySQL 8.0<br>MariaDB 10.4 (cloud) | 7.4.0 | 7.9.x         | 1.2 | 6.x   | 6.4     | 3.8.x    | 2.5.x  | 9.0.0
