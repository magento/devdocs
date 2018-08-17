---
group: mrg
title: Magento_GiftMessageStaging module
version: 2.1
ee_only: true
---

The Magento_GiftMessageStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It extends the Magento_GiftMessage module functionality to be used in the Schedule Update form.

## Implementation details

The Magento_GiftMessageStaging module enables you to stage the "Allow Gift Message" flag in the "Gift Options" field set in the "Schedule Update" form of the product.

## Dependencies

You can find the list of modules that have dependencies on the Magento_GiftMessageStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GiftMessageStaging module.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ site.baseurl }}/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
