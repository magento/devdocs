---
group: cloud-guide
title: Upgrades and patches
functional_areas:
  - Cloud
  - Upgrade
---

The Upgrades and patches section provides information about how to update `{{site.data.var.ct}}`, upgrade the Magento version, and how to [apply patches] to your {{site.data.var.ece}} project environments.

Some restrictions in the core Magento Commerce code base prevent you from upgrading to the new application architecture directly, so use the following table to determine your upgrade path:

| Current Version | Upgrade Path | Instructions
| --- | --- | --- |
| 2.1.3 and earlier | You must upgrade Magento to version 2.1.4 or later before you continue. | [Upgrade Magento version] |
| 2.1.4 – 2.1.14 | You can begin the upgrade to [{{site.data.var.ct}} 2002.0.9]({{ site.baseurl }}/cloud/release-notes/ece-release-notes.html#v200209) and later 2002.0.x releases. | [Update {{site.data.var.ct}} version] |
| 2.1.15 – 2.1.16 | You can begin the upgrade to [{{site.data.var.ct}} 2002.0.9]({{ site.baseurl }}/cloud/release-notes/ece-release-notes.html#v200209) and later. | [Update {{site.data.var.ct}} version] |
| 2.2.x and later | You can begin the upgrade to [{{site.data.var.ct}} 2002.0.08]({{ site.baseurl }}/cloud/release-notes/cloud-release-archive.html#v200208) and later. | [Update {{site.data.var.ct}} version] |

{% include cloud/note-ece-tools-package.md %}

[{{site.data.var.csuite}}]: {{site.baseurl}}/cloud/release-notes/cloud-tools.html
[latest {{site.data.var.ct}} release]: {{site.baseurl}}/cloud/release-notes/ece
[determine your upgrade path]: #upgrade-path
[apply patches]: {{site.baseurl}}/cloud/project/project-patch.html
[Upgrade Magento version]: {{site.baseurl}}/cloud/project/project-upgrade.html
[Update {{site.data.var.ct}} version]: {{site.baseurl}}/cloud/project/ece-tools-update.html
