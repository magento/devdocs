---
group: software-update-guide
title: Upgrade modules
functional_areas:
  - Upgrade
---

{% include upgrade/module.md %}

## Vendor bundled extensions (VBEs)

Adobe removed all [VBEs]({{ site.basurl }}/extensions/vendor/) in 2.4.4. Vendors continue to support these extensions on the {{ site.data.var.ee }} Marketplace.

If you want to continue using these extensions with {{ site.data.var.ee }} and {{ site.data.var.ce }} 2.4.4 and later, you must update the corresponding package dependencies in your `composer.json` file _before_ upgrading to 2.4.4. Contact the vendor for the package name and version to use.
