---
layout: default
group: mrg
subgroup: Enterprise Edition
title: Module Reference Guide
menu_title: GiftCardStaging
menu_order: 2
version: 2.2
github_link: mrg/ee/GiftCardStaging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

## Overview

The Magento_GiftCardStaging module is a part of the staging functionality in Magento EE. It enables you to add GiftCard Product updates to the existing store campaigns. In other words, you can change the GiftCard Product attributes in campaigns. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_GiftCardStaging module changes the GiftCard Product creation page to make them compatible with the Magento Staging Framework:

- Adds the Amount field set to the Schedule Update form
- Provides functionality of the field set
- Returns Amounts values to the initial state after campaign is finished

## Dependencies

You can find the list of modules that have dependencies on the Magento_GiftCardStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_GiftCardStaging module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_GiftCardStaging module.

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).
