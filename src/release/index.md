---
title: Upcoming releases
group: release
---

Magento continually strives to find the right balance between making product upgrades simple and predictable and delivering improvements and new features to early adopters faster. Over the last year, we have refined how we deliver software to support this balance. For additional information, refer to our [release policy]({{site.baseurl}}/release/policy/).

## Availability

The following table describes the status of Magento software availability and where to get it, particularly for software that is available outside the conventional {{site.data.var.ee}} Composer package.

| Product                                           | Availability                                                                                                                                | How to get it                                                                                     |
|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| **{{site.data.var.ee}} 2.3.5**                    | April 2020                                                                                                                                  | [Composer]({{ site.baseurl }}/guides/v2.3/install-gde/composer.html)                              |
| **{{site.data.var.ee}} 2.3.4-p1** (security only) | April 2020                                                                                                                                  | [Composer]({{ site.baseurl }}/guides/v2.3/install-gde/composer.html)                              |
| **{{site.data.var.ece}} Tools (aka ECE-Tools)**   | Available now                                                                                                                               | [Composer]({{ site.baseurl }}/cloud/project/ece-tools-update.html)                                |
| **Product Recommendations**                       | Early access January 2020                                                                                                                   | [Email request](mailto:magento-product-recs-feedback@adobe.com)                                   |
| **PWA Studio**                                    | Available now                                                                                                                               | [Documentation](http://pwastudio.io) and [GitHub](https://github.com/magento-research/pwa-studio) |
| **Amazon Sales Channel 4.0**                    | Available now for {{site.data.var.ece}} 2.3.x (US, Canada, Mexico, and UK)                                                           | [Magento Marketplace](https://marketplace.magento.com/magento-module-amazon.html)                 |
| **Google Shopping ads Channel 3.0.1**             | Available now for {{site.data.var.ece}} 2.2.4+ and 2.3.x <br>Bundled in Magento starting with 2.3.3, but still available on the Marketplace | [Magento Marketplace](http://marketplace.magento.com/magento-google-shopping-ads.html)            |

## Patch schedule

Magento releases security and functional patches for each supported release line of {{site.data.var.ee}} every quarter.

Security releases provide fixes for vulnerabilities that have been identified in previous quarterly patch releases. You can install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly patch release contains. These releases are appended with `-p1`.

For general information about security releases, see [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security patches, see [Install Magento using Composer](https://devdocs.magento.com/guides/v2.3/install-gde/composer.html).

The following table provides the dates for each patch scheduled for release in 2020:

| Version           | Pre-release | GA         |
|-------------------|-------------|------------|
| 2.3.4<br>2.3.3-p1 | January 14  | January 28 |
| 2.3.5<br>2.3.4-p1 | April 14    | April 28   |
| 2.3.5-p1          | July 14     | July 28    |
| 2.3.6             | October 1   | October 15 |

_These dates are subject to change._

## Compatibility

Magento modules that have been built to be decoupled from the {{site.data.var.ee}} core release process; this allows us to release iterations of these modules faster to merchants who are willing to accept a little risk in exchange for earlier access to new features.

The following table shows the release status of Magento extension versions relative to {{site.data.var.ee}}.

{% include compatibility-mde.html data=site.data.mde %}
