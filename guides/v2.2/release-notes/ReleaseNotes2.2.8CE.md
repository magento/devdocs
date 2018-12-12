---

group: release-notes
title: Magento Open Source 2.2.8 Release Notes

---

*Patch code and release notes were published on .*


We are pleased to present Magento Open Source 2.2.8. This release includes over 30 critical enhancements to product security, over 150 core code fixes and enhancements, and over 350 community-submitted pull requests. 

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.8-and-2.1.17-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.8) have been ported to 2.1.17, 1.14.4.1, and 1.9.4.1, as appropriate.





## Highlights

In addition to over 30 critical security fixes, look for the following highlights in this release:


### Core code highlights

This release includes improvements to general usability of the core code plus enhancements to wishlist and shipping features. 


#### General improvements



### Community contribution highlights

Highlights of community contributions include these fixes:






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




### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 



### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).


### Installation and upgrade instructions

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
