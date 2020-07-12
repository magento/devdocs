---
title: Upcoming releases
group: release
---

Magento continually strives to find the right balance between making product upgrades simple and predictable and delivering improvements and new features to early adopters faster. Over the last year, we have refined how we deliver software to support this balance. For additional information, refer to our [release policy]({{site.baseurl}}/release/policy/).

## Availability

The following table describes the status of Magento software availability and where to get it, particularly for software that is available outside the conventional {{site.data.var.ee}} Composer package.

| Product                                           | Availability                                                          | How to get it                                                                                                                                                                                                                                                                             |
|---------------------------------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **{{site.data.var.ee}} 2.3.5-p1**                 | Available now                                                         | [Composer]({{ site.baseurl }}/guides/v2.3/install-gde/composer.html)                                                                                                                                                                                                                      |
| **{{site.data.var.ee}} 2.3.4-p2** (security only) | Available now                                                         | [Composer]({{ site.baseurl }}/guides/v2.3/install-gde/composer.html)                                                                                                                                                                                                                      |
| **{{site.data.var.ece}} Tools (aka ECE-Tools)**   | Available now                                                         | [Composer]({{ site.baseurl }}/cloud/project/ece-tools-update.html)                                                                                                                                                                                                                        |
| **Product Recommendations**                       | Available now                                                         | [Magento Marketplace](https://marketplace.magento.com/magento-product-recommendations.html) \| [Developer Documentation](https://devdocs.magento.com/recommendations/product-recs.html) \| [User Guide](https://docs.magento.com/m2/ee/user_guide/marketing/product-recommendations.html) |
| **PWA Studio**                                    | Available now                                                         | [Documentation](http://pwastudio.io) and [GitHub](https://github.com/magento-research/pwa-studio)                                                                                                                                                                                         |
| **Amazon Sales Channel 4.1.0**                    | Available now for Magento versions 2.3.x (US, Canada, Mexico, and UK) | [Magento Marketplace](https://marketplace.magento.com/magento-module-amazon.html)                                                                                                                                                                                                         |

## Release schedule

Magento releases security and functional patches for each supported release line of {{site.data.var.ee}} every quarter.

### About security-only releases

Security-only releases provide fixes for vulnerabilities that have been identified in previous quarterly patch releases. You can install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly patch release contains. These releases are appended with `-p1`.

For general information about security releases, see [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security patches, see [Install Magento using Composer]({{site.baseurl}}/guides/v2.3/install-gde/composer.html).

### Early access

Pre-release is General Availability code that is available to {{site.data.var.ee}} merchants and all partners two weeks before General Availability. It allows for quicker deployment of code before General Availability.

Beta is non-General Availability code that is available to all partners. It allows for extra time to review code and affected components.

The following table provides the dates for each scheduled release in 2020 and 2021 (dates are subject to change):

| Quarter             | Versions                   | General Availability | Pre-release        | Beta               |
|---------------------|----------------------------|----------------------|--------------------|--------------------|
| 2020 Q3             | 2.4.0<br>2.3.5-p2          | July 28, 2020        | None               | June 8, 2020       |
| 2020 Q4             | 2.4.1<br>2.3.6             | October 15, 2020     | October 15, 2021   | September 10, 2020 |
| 2021 Q1             | 2.4.2<br>2.4.1-p1<br>2.3.7 | February 9, 2021     | January 26, 2021   | January 5, 2021    |
| 2021 Q2             | 2.4.3<br>2.4.2-p1<br>2.3.8 | May 11, 2021         | April 27, 2021     | April 6, 2021      |
| 2021 Q3             | 2.4.4<br>2.4.3-p1<br>2.3.9 | August 10, 2021      | July 27, 2021      | July 6, 2021       |
| 2021 Q4<sup>*</sup> | 2.4.4-p1<br>2.3.10         | October 12, 2021     | September 28, 2021 | None               |

_<sup>*</sup>There will not be a 2.4.5 release in 2021 Q4._

## Compatibility

Magento modules that have been built to be decoupled from the {{site.data.var.ee}} core release process; this allows us to release iterations of these modules faster to merchants who are willing to accept a little risk in exchange for earlier access to new features.

The following table shows the release status of Magento extension versions relative to {{site.data.var.ee}}.

{% include compatibility-mde.html data=site.data.mde %}
