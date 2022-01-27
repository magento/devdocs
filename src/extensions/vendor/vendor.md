---
group: extensions
title: Vendor Bundled Extensions (VBEs)
permalink: extensions/vendor/
---

{:.bs-callout-warning}
Adobe removed all VBEs in 2.4.4. Vendors continue to support these extensions on the {{ site.data.var.ee }} Marketplace. If you want to continue using these extensions after upgrading to 2.4.4, see [Upgrade modules]({{ site.baseurl }}/guides/v2.4/comp-mgr/upgrade-module.html). Since vendors no longer need to depend on core releases to deliver updates, they can provide merchants with the latest support and new capabilities more frequently.

Vendor Bundled Extensions (VBEs) are third-party extensions that we have thoroughly tested and included with each supported version of {{site.data.var.ce}} and {{site.data.var.ee}}.

Current VBEs include:

-  [Amazon Pay]({{ site.user_guide_url }}/payment/amazon-pay.html)
-  [dotdigital]({{ site.user_guide_url }}/marketing/engagement-cloud.html) (formerly Dotmailer)
-  [Klarna]({{ site.user_guide_url }}/payment/klarna.html)
-  [Vertex]({{ site.user_guide_url }}/tax/vertex.html)
-  [Yotpo]({{ site.user_guide_url }}/marketing/yotpo-reviews-intro.html)
-  [Braintree]({{ site.user_guide_url }}/payment/braintree.html) (formerly part of core Magento)

{:.bs-callout-info}
Installing or upgrading also installs VBEs, but you may need to set up an account with a vendor to configure and use an extension.

## Compatibility

The following table shows VBE version compatibility with Adobe Commerce and Magento Open Source:

{% include compatibility-vbe.md data=site.data.vbe%}
