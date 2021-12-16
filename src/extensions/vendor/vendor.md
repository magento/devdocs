---
group: extensions
title: Vendor Bundled Extensions (VBEs)
permalink: extensions/vendor/
---

{:.bs-callout-warning}
Adobe removed all VBEs from the core platform code in 2.4.4. These extensions continue to be supported as optional Marketplace extensions published by vendors. This change gives merchants faster access to the latest support and new capabilities from each vendor. Extension partners no longer need to depend on core releases to deliver updates.

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
