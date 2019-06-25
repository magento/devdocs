---
group: release-notes
title: Magento Commerce 2.1.17 Release Notes
---


*Release notes published on March 26, 2019 and last edited on April 5, 2019.*



We are pleased to present {{site.data.var.ee}}  2.1.17. This release includes  multiple enhancements to product security. 


Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your Magento software to the latest version as soon as possible.


## Apply patch PRODSECBUG-2198 to address critical SQL injection vulnerability

A SQL injection vulnerability has been identified in 2.1.x Magento code. The fix for this vulnerability is not included in this patch release because the known attack path is not exploitable in this version. However, this release does contain the vulnerable code, and we strongly recommend that you proactively install the PRODSECBUG-2198 patch. **We strongly encourage all merchants to stay up-to-date on security patches**, and this means you should upgrade to or install Magento 2.1.17 **and** apply patch PRODSECBUG-2198.

Follow these steps to download and apply this patch:

1. Access [My Account](https://account.magento.com/customer/account/login).

2. Navigate to the **Downloads** tab. Select the Magento edition and version you need. 

3. Select **Support Patches and Security Patches**, then **PRODSECBUG-2198**.

4. Download the patch and upload to a specific directory in your Magento installation such as `m2-hotfixes` (confirm  that the directory is not accessible publicly).

5. From your project root, apply the patch.  `git apply ./m2-hotfixes/<patch-file-name>`.

6. Refresh the cache from the Admin (**System** > **Cache Management**).



## PayPal Payflow Pro active carding activity update

The PayPal Payflow Pro integration in Magento is being actively targeted by carding activity. To resolve these carding activity issues, Magento has provided Composer packages that add an option for Google reCAPTCHA and CAPTCHA to the Payflow Pro checkout form. See [PayPal Payflow Pro active carding activity](https://support.magento.com/hc/en-us/articles/360025515991) for a full discussion of this issue and instructions on downloading these packages. **We strongly recommend that all Payflow Pro merchants download and install these packages to help enhance the security of their storefronts**.


## Apply the Admin Dashboard Image-Charts patch to address deprecation of Google Image Charts

Magento 2.x currently uses Google Image Charts to render static charts in Admin dashboards. Google stopped supporting Google Image Charts on March 14, 2019, and Magento is providing the Admin Dashboard Image-Charts  patch to replace Google Image Charts with the Image-Charts free service. Users of Magento 2.x deployments will not be able to view static charts in Magento 2.x instances unless they download and apply this patch. 
 
See  [Switch from deprecated Google Image Charts to Image-Charts for Magento](https://support.magento.com/hc/en-us/articles/360024850172) for information on downloading and applying this patch. 


## Highlights

See [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.1.17) have been ported to 2.3.1, 2.2.8, 1.14.4.1, and 1.9.4.1, as appropriate. 

### Note about changes to the Authorize.Net extension

Magento’s implementation of the Authorize.Net Direct Post payment method currently uses MD5-based hash for all M1 and M2 installations. As of June 28, 2019, Authorize.Net will stop supporting MD5-based hash usage.

This will result in Magento merchants not being able to use Authorize.Net Direct Post  to process payments. To avoid disruption and to continue processing payments, merchants need to apply a patch provided by Magento and add a Signature Key (SHA-512) in the Magento Admin configuration settings. Magento released this patch in late February to address this issue on pre-2.3.1 installations of Magento. See [Update Authorize.Net Direct Post from MD5 to SHA-512](https://support.magento.com/hc/en-us/articles/360024368392-Update-Authorize-Net-Direct-Post-from-MD5-to-SHA-512). Information about the deprecation of Authorize.Net Direct Post can be found [here](https://docs.magento.com/m2/ce/user_guide/payment/authorize-net-direct-post.html).

## Known issue

**Issue**:  The CGI URL gateway in the UPS module has been updated from HTTP to HTTPS. Consequently, the UPS shipping method does not populate correctly. **Workaround**: Confirm that the Gateway URL uses the HTTPS protocol in the [UPS Shipping Method Configuration](https://docs.magento.com/m2/ee/user_guide/configuration/sales/shipping-methods.html). <!--- MAGETWO-98947-->

*Updating an existing setting*:

If UPS Type is set to `United Parcel Service` in the UPS Shipping Method Configuration, you must manually change the protocol of the Gateway URL from HTTP to HTTPS. Example: `https://www.ups.com/using/services/rave/qcostcgi.cgi`


*To configure UPS for the first time*: 
 
1. Navigate to **Stores**  > **Settings**  > **Configuration**  >  **Sales**  > **Shipping Methods**. Then, expand the **UPS** section. 
 
2. At the **UPS Type** field, clear the Use system value checkbox. Then, change **UPS Type** to `United Parcel Service XML`. The Gateway URL populates correctly when this value is selected. 

3. Tap **Save Config**.


## Installation

See [How to get the Magento software]({{site.baseurl}}/guides/v2.1/install-gde/bk-install-guide.html) for comprehensive information about Magento 2.1.x installation and setup. 


## Migration toolkits 

The Magento [Data Migration Tool]({{site.baseurl}}/guides/v2.1/migration/bk-migration-guide.html) helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install Data Migration Tool]({{site.baseurl}}/guides/v2.1/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

