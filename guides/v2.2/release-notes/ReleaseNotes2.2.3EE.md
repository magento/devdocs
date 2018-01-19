---
layout: default
group: release-notes
title: Magento Commerce 2.2.3 Release Notes
version: 2.2
github_link: release-notes/ReleaseNotes2.2.3EE.md
---
*Patch code and release notes published on February 12, 2018.* 


We are pleased to present Magento Commerce 2.2.3. This release includes multiple enhancements to the security of your Magento installarion. It also includes support for Elasticsearch 5.x, thanks to community members.


## Highlights

Look for the following highlights in this release:

* Multiple enhancements to product security. See [Magento Security Center](https://magento.com/security/patches/magento-223-2112-and-2018-security-update) for more information.

<!--- MAGETWO-84775 -->* Support for Elasticsearch 5.x. See [Install and configure Elasticsearch](http://devdocs.magento.com/guides/v2.2/config-guide/elasticsearch/es-overview.html) for more information about using Elasticsearch with Magento.

Note: On February 23, 2018, USPS will remove APIs that support the creation of shipping labels without postage. In anticipation of this change, we’ve removed this functionality from the Magento Admin. Consequently, you cannot create and print shipping labels that do not have postage applied.  See Magento Shipping to print USPS shipping labels with postage. 

## Security enhancements

Magento 2.2.3 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-223-2112-and-2018-security-update) for more information.



## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.



### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html)



For more information, [System Requirements]({{ site.baseurl }}magento-system-requirements.html).

### Installation and upgrade instructions

You can install Magento Commerce 2.2.x using Composer.


{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
