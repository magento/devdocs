---
group: cloud
title: Upgrades and Patches
version: 2.1
github_link: cloud/project/project-upgrade-parent.md
functional_areas:
  - Cloud
  - Upgrade
---
{{site.data.var.ece}} checks for pending patches and updates when you push code changes to the remote environment.

Some restrictions in the core {{site.data.var.ee}} code base prevent you from upgrading to the new application architecture directly, so use the following table to determine your upgrade path:

| Current Version | Upgrade Path |
| --- | --- |
| 2.1.3 and earlier | You must upgrade to version 2.1.4 or later before you continue. |
| 2.1.4 and later | You can begin the upgrade to [ece-tools 2002.0.9]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html#v200209) and later. |
| 2.2.x | You can begin the upgrade to [ece-tools 2002.0.8]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html#v200208) and later. |

{: .bs-callout .bs-callout-info}
We combined the upgrade metapackages for tools and patches with the release of [ece-tools version 2002.0.8](http://devdocs.magento.com/guides/v2.2/cloud/release-notes/cloud-tools.html#v200208), which helps to provide an easier process for future updates. You need to upgrade to the new [metapackage]({{ page.baseurl }}/cloud/project/cloud-tools-upgrade#metapackage) to use this process.
