---
group: cloud-guide
title: Upgrades and patches
functional_areas:
  - Cloud
  - Upgrade
---
The Upgrades and patches section contains detailed release notes for the `{{site.data.var.ct}}` package, and information on how to upgrade the `{{site.data.var.ct}}` package, upgrade {{site.data.var.ece}}, and apply custom patches and hotfixes.

The Upgrades and patches section provides information about how to update `{{site.data.var.ct}}`, upgrade the Magento version, and how to [apply patches] to your {{site.data.var.ece}} project.

Some restrictions in the core Magento Commerce code base affect your ability to update to a specific `{{site.data.var.ct}}` release or to upgrade Magento. Use the following table to determine the best path:

| Current Version | Upgrade Path | Instructions
| --- | --- | --- |
| 2.1.3 and earlier | You must upgrade Magento to version 2.1.4 or later before you continue. | [Upgrade Magento version] |
| 2.1.4 – 2.1.14 | You can update to [{{site.data.var.ct}} 2002.0.9]({{ site.baseurl }}/cloud/release-notes/cloud-release-archive.html#v200209) and later 2002.0.x releases. | [Update {{site.data.var.ct}} version] |
| 2.1.15 – 2.1.16 | You can update to [{{site.data.var.ct}} 2002.0.9]({{ site.baseurl }}/cloud/release-notes/cloud-release-archive.html#v200209) and later. | [Update {{site.data.var.ct}} version] |
| 2.2.x and later | You can update to [{{site.data.var.ct}} 2002.0.8]({{ site.baseurl }}/cloud/release-notes/cloud-release-archive.html#v200208) and later. | [Update {{site.data.var.ct}} version] |

{% include cloud/note-ece-tools-package.md %}

[Upgrade Magento version]: {{site.baseurl}}/cloud/project/ece-tools-upgrade-project.html
[Update {{site.data.var.ct}} version]: {{site.baseurl}}/cloud/project/ece-tools-update.html
[apply patches]: {{site.baseurl}}/cloud/project/project-patch.html
