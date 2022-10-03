---
group: tools
title: Quality Patches Tool
group: tools
functional_areas:
  - Upgrade
redirect_from: https://devdocs.magento.com/quality-patches/tool.html
migrated_to: https://experienceleague.adobe.com/tools/commerce-quality-patches/index.html
layout: migrated
---

The [Quality Patches Tool][github] is a command-line tool that delivers
quality patches for {{site.data.var.ee}} and {{site.data.var.ce}}.

It allows you to:

*  View general information about the latest quality patches
*  Apply quality patches
*  Revert applied patches

**{{site.data.var.ee}} support** and the **{{site.data.var.ce}} community** develop quality patches.

The Quality Patches Tool is for quality patches only. Security patches are available in the [Magento Security Center][security] .

{:.bs-callout-warning}
We do not recommend using the Quality Patches Tool to apply large numbers of patches, because it increases the complexity of your code, which makes upgrading to a new version of {{ site.data.var.ee }} or {{ site.data.var.ce }} more difficult.

## Available patches   {#patch-grid}

<div id="root"></div>

<script src="{{ site.baseurl }}/common/js/qpt.app.min.js?v=3"></script>

## Related topics   {#related-topics}

*  [Quality Patches Tool release notes][notes]
*  [How to install and use Quality Patches Tool for Adobe Commerce on
  cloud infrastructure][cloud]
*  [How to install and use Quality Patches Tool for Adobe Commerce &
  Magento Open Source][standalone]

<!-- link definitions -->
[cloud]: {{ site.baseurl }}/cloud/project/project-patch.html
[github]: https://github.com/magento/quality-patches
[notes]: {{ site.baseurl }}/quality-patches/release-notes.html
[security]: https://magento.com/security/patches
[standalone]: {{ site.baseurl }}/quality-patches/usage.html
