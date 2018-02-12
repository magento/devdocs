---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento Open Source 2.2.3 Release Notes
menu_title: Magento Open Source 2.2.3 Release Notes
menu_order: 270
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: release-notes/ReleaseNotes2.2.3CE.md
---
*Patch code and release notes published on February 12, 2018.* 


We are pleased to present Magento Commerce 2.2.3. This release includes multiple enhancements to product security, a change to the Magento Admin to support upcoming USPS shipping changes, and a copyright update. And thanks to our community members, it also includes support for Elasticsearch 5.x and enhancements to ACL control for cache management through Magento Admin.


## Highlights

Look for the following highlights in this release:

* **enhancements that help close cross-site request forgery (CSRF), unauthorized data leak, and authenticated Admin user remote code execution vulnerabilities**. See [Magento Security Center](https://magento.com/security/patches/magento-223-2112-and-2018-security-update) for more information.

<!--- MAGETWO-84775 -->* **support for Elasticsearch 5.x**. See [Install and configure Elasticsearch](http://devdocs.magento.com/guides/v2.2/config-guide/elasticsearch/es-overview.html) for more information about using Elasticsearch with Magento. *Fix submitted by community member <a href="https://github.com/afoucret" target="_blank">Aurélien Foucret</a> in pull request <a href="https://github.com/magento/magento2/pull/822" target="_blank">822</a>.*

* **change to Magento Admin to support upcoming USPS shipping changes**. On February 23, 2018, USPS  removed APIs that support the creation of shipping labels without postage. In response, we’ve removed this functionality from the Magento Admin. Consequently, you cannot create and print shipping labels that do not have postage applied. If you require USPS postage printing capabilities, please visit [Magento Shipping](https://magento.com/products/shipping) to learn more, and explore various shipping extensions on Magento Marketplace. 

* **new layers of control for  cache management tasks managed through the Magento Admin**. This release introduces finer permissions for cache management tasks such as flushing cache storage, flushing the Magento cache, and refreshing cache types. *Fix submitted by community member <a href="https://github.com/bartoszherba" target="_blank">Bartosz Herba</a> in pull request <a href="https://github.com/magento/magento2/pull/78" target="_blank">78</a>.*

* **copyright update to 2018**.

## Security enhancements

Magento 2.2.3 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-223-2112-and-2018-security-update) for more information.


### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html)



For more information, [System Requirements]({{ site.baseurl }}magento-system-requirements.html).

### Installation and upgrade instructions

You can install Magento Open Source 2.2.x using Composer.


{% include install/releasenotes/ce_install_21.md %}

## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
