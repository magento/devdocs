---
layout: default
group: mrg
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_GoogleOptimizerStaging module
menu_title: GoogleOptimizerStaging
menu_order: 2
version: 2.2
ee_only: true
github_link: mrg/ee/GoogleOptimizerStaging.md
---


The Magento_GoogleOptimizerStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It enables you to stage values of the product {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %}.

## Implementation details

The Magento_GoogleOptimizerStaging module enables you to stage parameters added by the Magento_GoogleOptimizer module in the {% glossarytooltip ae8f7f2b-ddfb-41ed-bec3-bed191406fdd %}Search Engine Optimization{% endglossarytooltip %} field set:

- Meta Title
- Meta Keywords
- Meta Description

## Dependencies

You can find the list of modules that have dependencies on the Magento_GoogleOptimizerStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GoogleOptimizerStaging module.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
