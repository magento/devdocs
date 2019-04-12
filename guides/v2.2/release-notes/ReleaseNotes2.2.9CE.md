---

group: release-notes
title: Magento Open Source 2.2.9 Release Notes

---



*Release notes published on  2019.*


We are pleased to present Magento Open Source 2.2.9. This release includes over 30 critical enhancements to product security, over 150 core code fixes and enhancements, and 285 community-submitted pull requests. 


Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.3.2-2.2.9-and-2.1.18-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.9) have been ported to 2.3.2, 2.1.18, 1.14.4.2, and 1.9.4.2, as appropriate.


## Highlights

Look for the following highlights in this release:

### Merchant tool enhancements


### Substantial security enhancements

These releases include security enhancements that help close cross-site scripting, arbitrary code execution, and sensitive data disclosure vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. All exploitable security issues fixed in this release (2.2.8) have been ported to 2.3.1, 2.1.17, 1.14.4.1, and 1.9.4.1, as appropriate.


### Infrastructure improvements

 



### Bundled extension enhancements

This release of Magento includes extensions developed by third-party vendors. 


#### dotdigital Engagement Cloud (formerly dotmailer)


#### Magento Shipping



#### Vertex


## Functional fixes

In addition to security enhancements, this release contains the following functional fixes. 


## Fixes

In addition to security enhancements, this release contains the following functional fixes. 



<!-- MAGETWO- -->*


### Installation, setup, and deployment





### Backend



### Bundle products




### CAPTCHA





### Catalog







### Catalog rule



### Cart and checkout



### Clean up and minor refactoring



### Configurable products






### CMS







### Customer




### Customer custom attributes





### Developer



### Directory



### Downloadable



### EAV




### Email


### Frameworks





#### Cache framework





### General






### Gift card




### Gift registry




### Google Analytics






### Image





### Import/export





### Infrastructure




### Integration



### Layered navigation




### Magento Shipping






### Newsletter


### Offline shipping



### Payment methods





### Pricing




### Quote




### Reports








### Review



### Reward




### RMA




### Sales



### Sales rule



### Search




### Shipping 



### Store





### Swatches




### TargetRule






### Tax



### Testing



### Theme








### UI



###  URL rewrite




### Visual Merchandiser



### Web API framework



### Widget



### Wishlist


### WYSIWG



## Known issues


## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.



### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.



### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 


### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).


### Installation and upgrade instructions

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
