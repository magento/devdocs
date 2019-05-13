---
group: cloud-guide
title: Upgrades and patches
functional_areas:
  - Cloud
  - Upgrade
---
The Upgrades and patches section contains detailed release notes for the `{{site.data.var.ct}}` package, and information on how to upgrade the `{{site.data.var.ct}}` package, upgrade {{site.data.var.ece}}, and apply custom patches and hotfixes.

-  [Upgrade project to use the {{site.data.var.ct}} package]({{ page.baseurl }}/cloud/project/ece-tools-upgrade-project.html)
-  [Update the {{site.data.var.ct}} package]({{ page.baseurl }}/cloud/project/ece-tools-update.html)
-  [Apply custom patches]({{ page.baseurl }}/cloud/project/project-patch.html)
-  [Upgrade Magento version]({{ page.baseurl }}/cloud/project/project-upgrade.html)

{{site.data.var.ece}} checks for pending patches and updates whenever you push code changes to the remote environment.

Some restrictions in the core {{site.data.var.ee}} code base prevent you from upgrading to the new application architecture directly, so use the following table to determine your upgrade path:

| Current Version | Upgrade Path |
| --- | --- |
| 2.1.3 and earlier | You must upgrade to version 2.1.4 or later before you continue. |
| 2.1.4 and later | You can begin the upgrade to [{{site.data.var.ct}} 2002.0.9]({{ page.baseurl }}/cloud/release-notes/cloud-tools.html#v200209) and later. |
| 2.2.x | You can begin the upgrade to [{{site.data.var.ct}} 2002.0.8]({{ page.baseurl }}/cloud/release-notes/cloud-release-archive.html#v200208) and later. |

{: .bs-callout .bs-callout-info}
We combined the upgrade metapackages for tools and patches with the release of [{{site.data.var.ct}} version 2002.0.8]({{ site.baseurl }}/guides/v2.2/cloud/release-notes/cloud-release-archive.html#v200208) to simplify the process for future updates.

{% include cloud/note-ece-tools-package.md %}
