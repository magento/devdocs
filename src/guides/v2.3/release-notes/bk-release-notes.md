---
group: release-notes
subgroup: 2.3.x_Release_Information
title: 2.3.x Release Information
redirect_from:
- /magento-release-information.html
---

## Magento 2.3.x Release Notes

*  [{{site.data.var.ce}} 2.3.3 Release Notes]({{page.baseurl}}/release-notes/release-notes-2-3-3-open-source.html)
*  [{{site.data.var.ee}} 2.3.3 Release Notes]({{page.baseurl}}/release-notes/release-notes-2-3-3-commerce.html)

*  [{{site.data.var.ce}} 2.3.2 Release Notes]({{page.baseurl}}/release-notes/ReleaseNotes2.3.2OpenSource.html)
*  [{{site.data.var.ee}} 2.3.2 Release Notes]({{page.baseurl}}/release-notes/ReleaseNotes2.3.2Commerce.html)

*  [{{site.data.var.ce}} 2.3.1 Release Notes]({{page.baseurl}}/release-notes/ReleaseNotes2.3.1OpenSource.html)
*  [{{site.data.var.ee}} 2.3.1 Release Notes]({{page.baseurl}}/release-notes/ReleaseNotes2.3.1Commerce.html)

*  [{{site.data.var.ce}} 2.3.0 Release Notes]({{page.baseurl}}/release-notes/ReleaseNotes2.3.0OpenSource.html)
*  [{{site.data.var.ee}} 2.3.0 Release Notes]({{page.baseurl}}/release-notes/ReleaseNotes2.3.0Commerce.html)

Interested in the Magento 2.2.x releases? Check out the [2.2.x]({{ site.baseurl }}/guides/v2.2/release-notes/bk-release-notes.html) Release Information pages.

## Security-only patches

With the release of Magento 2.3.3, Magento is introducing a new type of patch: the security-only patch. Patch 2.3.2-p2, our first security-only patch,  includes the significant security fixes that Magento 2.3.3 introduces without the hundreds of functional fixes and enhancements that Magento 2.3.3 also includes. Merchants deploying Magento 2.3.2 can apply patch 2.3.2-p2 to immediately take advantage of time-sensitive security fixes without investing the time required to install Magento 2.3.3.

**If you have already upgraded to the pre-release version of this patch (2.3.2-p1), we strongly recommend that you upgrade to 2.3.2-p2 as soon as possible.**  Patch 2.3.2-p2 contains the critical security fixes that are included in Magento  2.3.3, 2.2.10, 1.9.4.3, and 1.14.4.3, but that are not included in patch 2.3.2-p1.

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287).  For instructions on downloading and applying security-only patches (including patch 2.3.2-p1), see [Install Magento using Composer](https://devdocs-beta.magento.com/guides/v2.3/install-gde/composer.html#get-the-metapackage).

## Backward-incompatible changes

*  Overview of [backward-incompatible changes]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html) between the 2.2 and 2.3 releases

## {{site.data.var.ece}} {#cloud-updates}

The ece-tools package is a scalable deployment tool that simplifies the {{ site.data.var.ece }} upgrade process by providing commands to backup the database, apply custom patches, verify environment packages, and more. The package also contains scripts and {{site.data.var.ece}} commands to help manage your code and automate the project build and deploy process.

See [Release Notes for ece-tools]({{ site.baseurl }}/cloud/release-notes/cloud-tools.html) for the latest updates and improvements to the ece-tools package as well as information about {{site.data.var.ece}} upgrades and patches.

 {:.bs-callout-info}
We recommend installing full {{site.data.var.ece}} upgrades for important security updates. Full upgrades include all associated patches and hotfixes.

## Third-party license agreements

*  [{{site.data.var.ce}} third-party licenses]({{page.baseurl}}/release-notes/packages-open-source.html)
*  [{{site.data.var.ee}} third-party licenses]({{page.baseurl}}/release-notes/packages-commerce.html)
*  [{{site.data.var.ece}} third-party licenses]({{page.baseurl}}/release-notes/packages-cloud.html)
