---
layout: default
group: mrg
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_CatalogUrlRewriteStaging module
menu_title: CatalogUrlRewriteStaging
menu_order: 2
version: 2.2
ee_only: true
github_link: mrg/ee/CatalogUrlRewriteStaging.md
---

The Magento_CatalogUrlRewriteStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It extends the Magento_CatalogUrlRewrite module.

## Implementation details

The Magento_CatalogUrlRewriteStaging module disables an opportunity to change the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} for a product or category, when you schedule an update. It is a technical module that doesn't have any public calls to intercept.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogUrlRewriteStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extensions points for the Magento_CatalogUrlRewriteStaging module are not available.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
