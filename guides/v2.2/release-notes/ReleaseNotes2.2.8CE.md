---

group: release-notes
title: Magento Open Source 2.2.8 Release Notes

---

*Patch code and release notes were published on March 26, 2019.*


We are pleased to present Magento Open Source 2.2.8. This release includes over 30 critical enhancements to product security, over 150 core code fixes and enhancements, and over 350 community-submitted pull requests. 


Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.8) have been ported to 2.3.1, 2.1.17, 1.14.4.1, and 1.9.4.1, as appropriate.



## Highlights

Magento Open Source 2.2.8 includes over 200 functional fixes to the core product, and over 30 security enhancements. Community contributions include approximately 200 fixes and 300 pull requests. Look for the following highlights in this release:

### Merchant tool enhancements

* **Improved order creation workflow in the Admin**. The Admin order creation workflow has been refactored to eliminate delays when editing billing and shipping addresses. Processing of these fields now happens only after they are populated. 96174

* **Ability to upload PDP images without compression and downsizing**. Merchants can now upload PDP images larger than 1920 x 1200  without first compressing and downsizing the images. Previously, when a merchant uploaded a high quality product image (larger than 1920 x 1200), Magento resized and compressed the image. Merchants can now set requirements for resizing and compression as well as compression quality and target width and height. 95299
  
### Substantial security enhancements

This release contains over 30 security fixes to core Magento code. See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.3.0) have been ported to 2.2.8, 2.1.17, 1.14.4.1, and 1.9.4.1, as appropriate.


### Infrastructure improvements

* **Magento now supports **Elasticsearch 6.0**. (Elasticsearch 5.x  reached end-of-life on March 11, 2019. For more information, see [Elastic Product End of Life Dates](https://www.elastic.co/support/eol). *Fix submitted by community member  [Romain Ruaud](https://github.com/romainruaud)*. Thank you, Romain!
 

* This release includes a **new Authorize.Net extension** to replace the Authorize.Net Direct Post module, which implemented an MD5-based hash that Authorize.Net will no longer support as of June 28, 2019. Magento released a patch in late February to address this issue on existing installations of Magento. See [Update Authorize.Net Direct Post from MD5 to SHA-512](https://support.magento.com/hc/en-us/articles/360024368392-Update-Authorize-Net-Direct-Post-from-MD5-to-SHA-512). Note that `accept.js` library is now used for Authorize.Net payments.



### Bundled extension enhancements

This release of Magento includes extensions developed by third-party vendors. 


#### dotdigital Engagement Cloud (formerly dotmailer)

* dotmailer has been rebranded as dotdigital Engagement Cloud.

#### Magento Shipping

* Multiple improvements to the Shipment workflow user experience. 

* **Batch Processing**. Error messaging and field validation has been added to the batch processing workflow. See xxx for a description of other enhancements to batch processing.  

* **Carrier Specific Packaging**. Carrier-specific packaging has been added for FedEx. These packages will be available for selection during shipping if a FedEx carrier is configured.

* **Security**. We've closed scenarios that could allow for third-party code execution.

* **Magento Cart Price Rules**. Cart price rules can now be applied to Magento Shipping.


#### Vertex

* Added support for B2C VAT.

* Added support for configurable logging.

## Functional fixes

In addition to security enhancements, this release contains the following functional fixes. 


## Fixes

In addition to security enhancements, this release contains the following functional fixes. 


### Installation, setup, and deployment




### Bundle products



### Cart and checkout



### Catalog



### Catalog rule





### Clean up and minor refactoring




### CMS content



### Configurable products




### Customer


### Directory





### EAV




### Email





### Frameworks



#### Application framework





#### Database framework



#### JavaScript framework



#### Session framework




### General


### Google Tag Manager

<!-- MAGETWO-87437 -->* All relevant attributes are now populated in the Google Tag Manager when a customer adds a product to their shopping cart. Previously, grouped, bundle,  and configurable  product attributes were missing in the Google Tag Manager. 



### Import/export




### Infrastructure


### Locale



### Payment methods


### Reports




### Review




### Sales




### Sales rule





### Search





### Shipping 

### Store




### Swagger



### Testing



### Translation



### UI


### User




### Wishlist





## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.



### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-2-8-issues.md %}


### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 



### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).


### Installation and upgrade instructions

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
