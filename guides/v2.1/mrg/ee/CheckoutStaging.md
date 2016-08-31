---
layout: default
group: mrg
subgroup: Enterprise Edition
title: Module Reference Guide
menu_title: CheckoutStaging
menu_order: 2
version: 2.1
level3_menu_node: level3child
level3_subgroup: ee_modules
github_link: mrg/ee/CheckoutStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_CheckoutStaging module

## Overview

The Magento_CheckoutStaging module is a part of the staging functionality in Magento EE.
It extends the checkout functionality and enables you to use it in the staging preview mode.

## Implementation details

The Magento_CheckoutStaging module extends the following Magento_Checkout module functionality to be used in the staging preview mode:

- Disables an order creation
- Creates a demo quote
- Deletes the demo quote using cron

Configuration options:

- The `preview_quota_lifetime` parameter in the `Magento/CheckoutStaging/etc/config.xml` sets the lifetime of the demo quote.
- The `schedule` parameter in the `Magento/CheckoutStaging/etc/crontab.xml` sets a launch schedule of the cron.

### Installation details

The Magento_CheckoutStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CheckoutStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_CheckoutStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/mrg/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/mrg/depend-inj.html) enables you to override the functionality of the Magento_CheckoutStaging module.

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
