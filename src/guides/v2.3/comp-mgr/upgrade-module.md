---
group: software-update-guide
title: Upgrade modules
functional_areas:
  - Upgrade
---

{% include upgrade/module.md %}

## Vendor bundled extensions (VBEs)

Adobe removed all [VBEs]({{ site.basurl }}/extensions/vendor/) in 2.4.4. Vendors continue to support these extensions on the {{ site.data.var.ee }} Marketplace.

If you want to continue using these extensions with {{ site.data.var.ee }} and {{ site.data.var.ce }} 2.4.4 and later, you must update the corresponding package dependencies in your `composer.json` file _before_ upgrading to 2.4.4.

The following table shows the Composer package name and version for the {{ site.data.var.ee }} Marketplace extensions that you should use to replace the VBE packages in your project:

| Extension  | Marketplace package and version                         |
|------------|---------------------------------------------------------|
| Amazon Pay | `amzn/amazon-pay-magento-2-module: 5.9.1`               |
| dotdigital | `dotmailer/TBD: x.x.x` |
| Klarna     | `klarna/TBD: x.x.x`                             |
| Vertex     | `vertex/TBD: x.x.x`                  |
| Yotpo      | `yotpo/module-yotpo: x.x.x`     |
