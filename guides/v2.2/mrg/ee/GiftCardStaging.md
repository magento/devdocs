---
group: mrg
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_GiftCardStaging module
menu_title: GiftCardStaging
menu_order: 2
version: 2.2
ee_only: true
---

The Magento_GiftCardStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add GiftCard Product updates to the existing store campaigns. In other words, you can change the GiftCard Product attributes in campaigns. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_GiftCardStaging module changes the GiftCard Product creation page to make them compatible with the Magento Staging Framework:

- Adds the Amount field set to the Schedule Update form
- Provides functionality of the field set
- Returns Amounts values to the initial state after campaign is finished

## Dependencies

You can find the list of modules that have dependencies on the Magento_GiftCardStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

{% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} points enable extension developers to interact with the Magento_GiftCardStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GiftCardStaging module.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ site.baseurl }}/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
