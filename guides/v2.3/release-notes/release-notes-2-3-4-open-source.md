---
group: release-notes
title: Magento Open Source 2.3.4 Release Notes
---

*Patch code and release notes published on  2020*

Magento Open Source 2.3.4 offers significant platform upgrades, substantial security changes, and PSD2-compliant core payment methods.

This release includes over 170 functional fixes to the core product and  over 75 security enhancements. It includes over 200 contributions from our community members. These contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.3) provides. Patch 2.3.2.1 (Composer package 2.3.2-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.2.  For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.2-p1), see [Install Magento using Composer](https://devdocs-beta.magento.com/guides/v2.3/install-gde/composer.html#get-the-metapackage).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in separate, project-specific release information which is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Security enhancements and fixes to core code

*  **75 security enhancements** that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication](https://devdocs.magento.com/guides/v2.3/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Magento Security Center](https://magento.com/security/patches/magento-2.3.3-2.2.10-security-update) for a comprehensive discussion of these issues. All known exploitable security issues fixed in this release (2.3.3) have been ported to 2.2.10, 1.14.4.3, and 1.9.4.3, as appropriate.

{:.bs-callout-info}
Starting with the release of Magento Open Source 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Open Source to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades

The following upgrades to core platform components boost platform security and support PCI compliance:


### Performance boosts



### Infrastructure improvements

This release contains  enhancements to core quality, which improve the quality of the Framework and these modules:  Here are some additional core enhancements:


### Merchant tool enhancements


### Inventory Management enhancements

*  Fixes to multiple  bugs. See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html).

### GraphQL

Expanded GraphQL functionality and improved coverage for PayPal payment integrations, gift cards, and store credit features. Added mutations and queries that support these tasks:



See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio
 For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

### Google Shopping ads Channel
 [Google Shopping ads Channel Release Notes](https://devdocs.magento.com/extensions/google-shopping-ads/release-notes/)  describes all changes to this feature for Magento 2.3.x.

### Magento Shipping



### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. 

#### Amazon Pay


#### dotdigital



#### Klarna



See [Klarna](https://docs.magento.com/m2/ee/user_guide/payment/klarna.html).

#### Vertex



#### Yotpo

The [Yotpo](https://www.yotpo.com) user-generated content management platform is now integrated with the Magento Admin. Yotpo provides tools for merchants to gather, curate, and manage user-generated content such as product reviews. For more information on configuring and launching Yotpo from the Admin, see Yotpo Product Reviews.

## Backward-incompatible Changes

This release introduces a new, immutable `EmailMessageInterface` that supports the sending of multi-part MIME-type content in email. The  `Magento\Framework\Mail\Template\TransportBuilder` and `Magento\Newsletter\Model\Queue\TransportBuilder` structures were refactored to use this new `EmailMessageInterface` instead of `MessageInterface`, which was previously used. If you are a Magento extension developer and rely on `\Magento\Email\Model\Transport::getMessage()` or `\Magento\Framework\Mail\TransportInterface::getMessage()`, those methods will now return the new `EmailMessageInterface`.

## Fixed issues

We've fixed hundreds of issues in the Magento 2.3.4 core code.

### Installation, upgrade, deployment




### Backend



### Bundle products


### Cache



### Cart and checkout



### Cart Price rules

### Catalog



## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-4-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-4-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ce}} 2.3.4 using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
