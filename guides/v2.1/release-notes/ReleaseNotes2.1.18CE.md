---
group: release-notes
title: Magento Open Source 2.1.18 Release Notes
---

*Patch code and release notes published on June 25, 2019.*

{:.bs-callout .bs-callout-info}
The Magento Open Source 2.1.18 software release marks the final supported software release for Magento Open Source version 2.1.x. As of June 30 2019, Magento Open Source 2.1.x will no longer receive security updates or product quality fixes now that its support window has expired. To maintain the performance and security of your site, we advise you to upgrade to the latest version of Magento Open Source. We encourage you to reach out to your partners, developers, or Magento Customer Success contact for more information on upgrading your site.

We are pleased to present {{site.data.var.ce}} 2.1.18. This release includes multiple enhancements to product security. 

This release include security enhancements that help close cross-site scripting, arbitrary code execution, and sensitive data disclosure vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. 

See [Magento Security Center](https://magento.com/security/patches/magento-2.3.2-2.2.9-and-2.1.18-security-update) for a comprehensive discussion of these security issues. All known exploitable security issues fixed in this release (2.1.18) have been ported to 2.3.2, 2.2.9, 1.14.4.2, and 1.9.4.2, as appropriate. 

## Highlights

<!--- MAGETWO-98950 -->
* The CGI URL gateway endpoint in the UPS module has been updated  from HTTP to HTTPS in response to the disablement of the HTTP gateway by UPS in mid-2019. See [Magento User Guide](https://docs.magento.com/m2/ee/user_guide/shipping/ups.html) for a discussion of using the UPS shipment method. Shipping method configuration settings are described in the [Shipping methods](https://docs.magento.com/m2/ee/user_guide/configuration/sales/shipping-methods.html#UPS). 

<!--- MAGETWO-98833 -->
* Magento now uses the Image-Charts free service to render static charts in Admin dashboards. Earlier deployments used Google Image Charts, which was deprecated in 2012 and turned off on [March 18, 2019](https://developers.google.com/chart/image/docs/making_charts). 

<!--- MAGETWO-99218 -->
* The new PaypalRecaptcha module adds Google reCAPTCHA and CAPTCHA to the Payflow Pro checkout form.  This enhanced functionality has been added in response to malicious targeting of Magento deployments that implement Payflow Pro. No additional configuration is needed to deploy this feature. 

<!-- MAGETWO-99818 -->
* We have modified the required permissions for updating the `design` fieldset of categories, products, and CMS pages:

  * Existing roles that have **save** permission for these entities can save everything.

  * New roles must be granted permission to edit design manually.

  * If you do not have permission to edit the `design` fieldset or use web API endpoints to update a category, Magento does not save your changes and the design properties remain unchanged.


## Installation

See [How to get the Magento software]({{site.baseurl}}/guides/v2.1/install-gde/bk-install-guide.html) for comprehensive information about Magento 2.1.x installation and setup. 


## Migration toolkits 

The Magento [Data Migration Tool]({{site.baseurl}}/guides/v2.1/migration/bk-migration-guide.html) helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install Data Migration Tool]({{site.baseurl}}/guides/v2.1/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.



