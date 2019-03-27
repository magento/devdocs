---
group: release-notes
title: Magento Open Source 2.1.17 Release Notes
---

*Release notes published March 26, 2019.*


We are pleased to present {{site.data.var.ce}} 2.1.17. This release includes multiple enhancements to product security. 

This release include security enhancements that help close cross-site scripting, arbitrary code execution, and sensitive data disclosure vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your Magento software to the latest version as soon as possible.


## Apply patch PRODSECBUG-2198 to address critical SQL injection vulnerability

A SQL injection vulnerability has been identified in 2.1.x Magento code. To quickly protect your store from this vulnerability, you'll need to install patch PRODSECBUG-2198.  See the description of  PRODSECBUG-2198  in the  [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for information on this vulnerability. 
 
Follow these steps to download and apply this patch:

1. Access the Downloads page [here](https://magento.com/tech-resources/download#download2288).

2. Select the Git-based option from **Select your format**.

4. Download the patch and upload to a specific directory in your Magento installation such as `m2-hotfixes` (confirm  that the directory is not accessible publicly).

5. From your project root, apply the patch.  `git apply ./m2-hotfixes/<patch-file-name>`.

6. Refresh the cache from the Admin (**System** > **Cache Management**).




## Highlights

See [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.1.17) have been ported to 2.3.1, 2.2.8, 1.14.4.1, and 1.9.4.1, as appropriate. 

### Note about changes to the Authorize.Net extension

Magento’s implementation of the Authorize.Net Direct Post payment method currently uses MD5-based hash for all M1 and M2 installations. As of June 28, 2019, Authorize.Net will stop supporting MD5-based hash usage.


This will result in Magento merchants not being able to use Authorize.Net Direct Post  to process payments. To avoid disruption and to continue processing payments, merchants need to apply a patch provided by Magento and add a Signature Key (SHA-512) in the Magento Admin configuration settings. Magento released this patch in late February to address this issue on pre-2.3.1 installations of Magento. See [Update Authorize.Net Direct Post from MD5 to SHA-512](https://support.magento.com/hc/en-us/articles/360024368392-Update-Authorize-Net-Direct-Post-from-MD5-to-SHA-512). Information about the deprecation of Authorize.Net Direct Post can be found [here](https://docs.magento.com/m2/ce/user_guide/payment/authorize-net-direct-post.html).





## Installation

See [How to get the Magento software]({{site.baseurl}}/guides/v2.1/install-gde/bk-install-guide.html) for comprehensive information about Magento 2.1.x installation and setup. 


## Migration toolkits 

The Magento [Data Migration Tool]({{site.baseurl}}/guides/v2.1/migration/bk-migration-guide.html) helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install Data Migration Tool]({{site.baseurl}}/guides/v2.1/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.



