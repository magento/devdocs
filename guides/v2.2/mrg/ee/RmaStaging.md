---
layout: default
group: mrg
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_RmaStaging module
menu_title: RmaStaging
menu_order: 2
version: 2.2
ee_only: true
github_link: mrg/ee/RmaStaging.md
---


The Magento_RmaStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It enables you to create updates for the parameters of the Autosettings field set of a product.

RMA stands for a return merchandise {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %}.

## Implementation details

The Magento_RmaStaging module extends the following Magento_Rma module functionality to be used in staging mode:

- Adds the Autosettings field set to the Schedule update form of a product.

## Dependencies

You can find the list of modules that have dependencies on the Magento_RmaStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

{% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} points enable extension developers to interact with the Magento_RmaStaging module. [The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_RmaStaging module.

## Additional information

For more Magento 2 developer documentation, see [Magento 2 Developer Documentation](http://devdocs.magento.com). Also, there you can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
