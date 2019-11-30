---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_CheckoutStaging module
menu_title: CheckoutStaging
menu_order: 2
ee_only: true
---

The Magento_CheckoutStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}.
It extends the [checkout](https://glossary.magento.com/checkout) functionality and enables you to use it in the staging preview mode.

## Implementation details

The Magento_CheckoutStaging module extends the following Magento_Checkout module functionality to be used in the staging preview mode:

-  Disables an order creation
-  Creates a demo [quote](https://glossary.magento.com/quote)
-  Deletes the demo quote using cron

Configuration options:

-  The `preview_quota_lifetime` parameter in the `Magento/CheckoutStaging/etc/config.xml` sets the lifetime of the demo quote.
-  The `schedule` parameter in the `Magento/CheckoutStaging/etc/crontab.xml` sets a launch schedule of the cron.

### Installation details

The Magento_CheckoutStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CheckoutStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_CheckoutStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CheckoutStaging module.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
