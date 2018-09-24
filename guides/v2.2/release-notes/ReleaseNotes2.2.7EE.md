---
group: release-notes
title: Magento Commerce 2.2.7 Release Notes

---

*Patch code and release notes were published on November , 2018.*




We are pleased to present Magento Commerce 2.2.7. This release includes 25 critical enhancements to product security, over 150 core code fixes and enhancements, and over 350 community-submitted pull requests. 

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.6-and-2.1.15-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.6) have been ported to 2.1.15, 1.14.3.10, and 1.9.3.10, as appropriate.



## Highlights

In addition to 25 critical security fixes, look for the following highlights in this release:


### Core code highlights

This release includes significant performance improvements to the core Magento code:


### **Magento Cloud highlights**






### **Community contribution highlights**

Highlights of community contributions include fixes that improve checkout flow and the sorting of simple products:





### **Core bundled extension highlights**

This release includes many enhancements to our core bundled extensions: 

#### Amazon Pay

Enhancements to Amazon Pay include these features:



#### dotmailer

Enhancements to dotmailer include these new features:





#### Klarna

Enhancements to Klarna include support for these new features:


For more information on these new features, see [Klarna](https://docs.magento.com/m2/ce/user_guide/payment/klarna.html). 




#### Magento Shipping
 The **Click & Collect** feature offers merchants the ability to:

	* Provide Click & Collect as a shipping option to customers, enabling them to directly collect shipments from designated source locations or stores 

	* Configure source locations available for Click & Collect pick-ups

	* Updates to Shipment Form for UPS (US only)
Consumers can also select Click & Collect locations during check-out. This feature is supported by workflows and notifications for Click & Collect pick up, packing, and collection. 





Looking for more information on these new features as well as many others? Check out [Magento Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Commerce User Guide](http://docs.magento.com/m2/ee/user_guide/getting-started.html).



## Fixes


In addition to security enhancements, this release contains the following functional fixes. 

<!-- ENGCOM-1537 -->* 

### Installation, setup, and deployment


<!-- MAGETWO-94764 -->* 

<!-- ENGCOM-2673 -->* 

<!-- ENGCOM-2920 -->* 


### Amazon Pay

<!-- BUNDLE- -->* 

### B2B



### Bundle products

<!-- MAGETWO-93145 -->* 

<!-- ENGCOM-1832 -->* 



### Catalog

<!-- MAGETWO-94080 -->* 
<!-- MAGETWO-93047 -->* 

<!-- MAGETWO-92036 -->* 

<!-- ENGCOM-2555 -->* 

<!-- ENGCOM-2650 -->* 

<!-- ENGCOM-2672 -->* 

<!-- ENGCOM-2670 -->* 

<!-- ENGCOM-2675 -->* 

<!-- ENGCOM-1605 -->* 

<!-- ENGCOM-2758 -->* 


### Cart and checkout

<!-- MAGETWO-93037 -->* 

 <!-- ENGCOM-2743 -->* 

 <!-- ENGCOM-2901 -->* 

 <!-- ENGCOM-2789 -->* 




### Cleanup


Our community contributors have made many helpful, minor corrections to spelling and code syntax throughout the code base. 

#### Spelling corrections




#### Minor corrections to code and code formatting




### Company

<!-- MAGETWO-93081 -->* 

<!-- MAGETWO-93050 -->* 





### Configurable products

<!-- MAGETWO-73245 -->* 

<!-- ENGCOM-2671 -->* 






### Customer

 <!-- ENGCOM-2746 -->* 











### Directory

<!-- MAGETWO-92831 -->* 




### dotmailer




### EAV

 <!-- ENGCOM-2642 -->* 



### Frameworks

<!-- ENGCOM-2070 -->* 



#### Application framework





#### JavaScript framework

<!-- ENGCOM-2291 -->* 



#### Session framework


<!-- ENGCOM-1440 -->* 


#### Web API framework



#### Cache framework






### Directory




### General

<!-- MAGETWO-98990 -->*

<!-- MAGETWO-93939 -->* 

<!-- ENGCOM-2737 -->* 

<!-- ENGCOM-2785 -->* 

<!-- ENGCOM-2855 -->* 

<!-- ENGCOM-2860 -->* 

<!-- ENGCOM-2322 -->* 

 <!-- ENGCOM-2628 -->* 




### Google Tag Manager



<!-- MAGETWO-87437 -->* 


### HTML




### Import/export

<!-- MAGETWO-93223 -->* 



### Infrastructure

 <!-- ENGCOM-2783 -->* 

 <!-- ENGCOM-2872 -->* 



### JavaScript




### Klarna



### Logging

<!-- MAGETWO-93054 -->* 



### Newsletter




### Payment methods



#### Braintree


#### PayPal

<!-- MAGETWO-86712 -->* 




### Pagecache





### Performance

### Product video



### Quote





### Reports

<!-- MAGETWO-93729 -->* 
<!-- MAGETWO-93345 -->* 

<!-- MAGETWO-86650 -->* 

 <!-- ENGCOM-2724 -->* 




### Review

 <!-- ENGCOM-2720-->* 


### Review







### Rule 





### Sales


 <!-- ENGCOM-2623 -->* 




### Sales rule

<!-- MAGETWO-93029 -->* 



### Search

 <!-- ENGCOM-2415 -->* 



### Shipping 

<!-- MAGETWO-86179 -->* 

<!-- ENGCOM-2704 -->* 


### Store






#### Elasticsearch

<!-- MAGETWO-93038 -->* 

<!-- MAGETWO-90497 -->* 






#### Admin global search










### Shipping

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>



<!-- MAGETWO-92144 -->* 





### Store

<!--  ENGCOM-2530 -->* The `getUrlInStore()` method no longer returns URLs that contain the store code, which has shortened the extremely long URLs it previously returned. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [16468](https://github.com/magento/magento2/pull/16468)*. [GitHub-16273](https://github.com/magento/magento2/issues/16273)


### Swagger

 <!-- ENGCOM-2837 -->* 


### Swatches


### Tax






### Testing

 <!-- ENGCOM-2616 -->* 





### UI

<!-- ENGCOM-2812 -->* 

<!-- ENGCOM-2834 -->* 

<!-- ENGCOM-2607 -->* 



### User

<!-- MAGETWO-93003 -->* 






### URL rewrites


### Visual Merchandiser


### Vertex



### Wishlist

<!-- MAGETWO-86609 -->* 

<!-- MAGETWO-74289 -->* 



<!-- not needed-  --> 



## Known issue




## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.


### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-2-7.md %}


### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 




### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html).


### Installation and upgrade instructions

See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
