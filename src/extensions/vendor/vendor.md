---
group: extensions
title: Vendor Bundled Extensions (VBEs)
permalink: extensions/vendor/
redirect_from:   
  - /extensions/vendor/yotpo/release-notes.html
  - /extensions/vendor/dotdigital/release-notes.html
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/modules/upgrade.html
layout: migrated
---

{:.bs-callout-warning}
Adobe removed most VBEs in 2.4.4. Vendors continue to support these extensions on the {{ site.data.var.ee }} Marketplace. If you want to continue using these extensions after upgrading to 2.4.4, see [Upgrade modules]({{ site.baseurl }}/guides/v2.4/comp-mgr/upgrade-module.html). Since vendors no longer need to depend on core releases to deliver updates, they can provide merchants with the latest support and new capabilities more frequently.

Vendor Bundled Extensions (VBEs) are third-party extensions that we have thoroughly tested and included with each supported version of {{site.data.var.ce}} and {{site.data.var.ee}}.

As of the 2.4.4 release, the following VBE remains:

-  [Braintree]({{ site.user_guide_url }}/payment/braintree.html) (formerly part of core Adobe Commerce and Magento Open Source)

{:.bs-callout-info}
Installing or upgrading also installs VBEs, but you may need to set up an account with a vendor to configure and use an extension.

## Compatibility

The following table shows VBE version compatibility with Adobe Commerce and Magento Open Source:

{% include compatibility-vbe.md data=site.data.vbe%}
