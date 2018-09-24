---

group: release-notes
title: Magento Open Source 2.2.7 Release Notes

---

*Patch code and release notes were published on November.*


We are pleased to present Magento Open Source 2.2.7. This release includes 25 critical enhancements to product security, over 150 core code fixes and enhancements, and over 350 community-submitted pull requests. 

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.2.6) have been ported to 2.1.15, 1.14.3.10, and 1.9.3.10, as appropriate.





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


<!-- ENGCOM- -->* 

### Installation, setup, and deployment



### Amazon Pay



### Bundle products



### Catalog


 

### CAPTCHA

### Cart and checkout



### Cleanup


Our community contributors have made many helpful, minor corrections to spelling and code syntax throughout the code base. 

#### Spelling corrections




#### Minor corrections to code and code formatting





### CMS content



### Configurable products




### Cookies








### Customer account









### Directory






### dotmailer



### EAV



### Frameworks







#### Application framework





#### JavaScript framework



#### Web API framework




#### Cache framework


### Dashboard



### Directory




### General




### Gift cards 


### Gift message



### Google Analytics



### Google Tag Manager



### HTML



### Import/export





### Infrastructure





### JavaScript




### Klarna




### Module Manager




### Newsletter




### Payment methods



#### Braintree



#### PayPal




### Pagecache





### Performance



### Product video



### Quote




### Reports




### Review







### Rule 





### Sales



### Sales rules





### Search





### Shipping 



### Store






#### Elasticsearch




#### Admin global search


### Shipping

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>



### Sitemap





### Store




### Swatches

### Tax
=


### Testing



### Theme



### Translation


### UI





### URL rewrites



### Vertex



### Wishlist



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
