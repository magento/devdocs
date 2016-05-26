---
layout: default
group: extension-dev-guide
subgroup: 7_Staging
title: Staging in Magento 2 EE
menu_title: CheckoutStaging
menu_order: 2
level3_menu_node: level3child
level3_subgroup: staging_modules
github_link: extension-dev-guide/staging/CheckoutStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

<h2>Magento_CheckoutStaging module</h2>

## Overview

The Magento_CheckoutStaging module is a part of the staging functionality in Magento EE.
It extends the checkout functionality and enables you to use it in the staging preview mode.

## Implementation Details

The Magento_CheckoutStaging module extends the following Magento_Checkout module functionality to be used in the staging preview mode:

- Disables an order creation
- Creates a demo quote
- Deletes the demo quote using cron

Configuration options:

- The `preview_quota_lifetime` parameter in the `Magento/CheckoutStaging/etc/config.xml` sets the lifetime of the demo quote.
- The `schedule` parameter in the `Magento/CheckoutStaging/etc/crontab.xml` sets a launch schedule of the cron.

## Installation Details

The Magento_CheckoutStaging module makes irreversible changes in a database during installation. It means, that you cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies with the Magento_CheckoutStaging module in the `require` object of the `composer.json` file. The file is located in the same directory as this `README` file.

## Extension Points

Extension points enable extension developers to interact with the Magento_CheckoutStaging module. For more information about Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CheckoutStaging module.

## Additional information

For more Magento 2 developer documentation, see [Magento 2 Developer Documentation](http://devdocs.magento.com). Also, there you can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
