---
group: release-notes
title: Magento Open Source 2.3.3 Release Notes
---

*Patch code and release notes published on *

We are pleased to present Magento Open Source 2.3.3.  This release includes over  functional fixes to the core product, over  pull requests contributed by the community, and  over 75 security enhancements. 

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in separate, project-specific release information which is available in the documentation for each project.
 



## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release is focused on substantial security enhancements:

* **75 security enhancements** that help close cross-site scripting (XSS), remote code execution (RCE), and sensitive data disclosure vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. See [Magento Security Center](https://magento.com/security/patches/magento-2.3.3-2.2.10-security-update) for a comprehensive discussion of these issues. All known exploitable security issues fixed in this release (2.3.3) have been ported to 2.2.10, 1.14.4.3, and 1.9.4.3, as appropriate.

* **Google reCAPTCHA module for PayPal Payflow checkout**. The new PaypalRecaptcha module adds Google reCAPTCHA and CAPTCHA to the Payflow Pro checkout form.  This enhanced functionality has been added in response to malicious targeting of Magento deployments that implement Payflow Pro. Configuration information can be found in [Google reCAPTCHA](https://docs.magento.com/m2/ee/user_guide/stores/security-google-recaptcha.html).  <!--- MC-15427-->

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This  will allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.


### Performance boosts
 

### Infrastructure improvements

This release contains  enhancements to core quality, which improve the quality of the Framework and these modules: `Catalog`, `Sales`, `Checkout/One Page Checkout`,  `UrlRewrite`, `Customer/Customers`, and `UI`. Here are some additional core enhancements: 




### Merchant tool enhancements


### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. 

#### Amazon Pay


## Fixed issues

We've fixed hundreds of issues in the Magento 2.3.3 core code. 


<!--- ENGCOM--->



## Known issues



## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

* If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

* The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.


### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 


### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.



### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ce}} 2.3.3 using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.



